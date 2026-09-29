import { createHmac, timingSafeEqual } from "node:crypto";

const FX_API_URL = "https://open.er-api.com/v6/latest/USD";
const FX_TIMEOUT_MS = 5_000;
const FX_MAX_AGE_MS = 36 * 60 * 60 * 1_000;
const FX_MAX_FUTURE_SKEW_MS = 5 * 60 * 1_000;
const QUOTE_TTL_MS = 10 * 60 * 1_000;
const RATE_SCALE = 1_000_000n;

export const COURSE_NGN_KOBO = 10_000_000;
export const COURSE_USD_CENTS = 5_000;
export const USD_CONTINGENCY_CENTS = 0;
export const PRICING_VERSION = "usd50-v1";

interface FxApiResponse {
  result?: string;
  time_last_update_unix?: number;
  rates?: { NGN?: number };
}

interface QuotePayload {
  version: typeof PRICING_VERSION | "fx-v1";
  issuedAt: number;
  expiresAt: number;
  rateMicros: string;
  courseNgnKobo: number;
  usdCourseEquivalentCents: number;
  usdContingencyCents: number;
  usdTotalCents: number;
  ngnPayableKobo: number;
}

export interface TrainingPaymentQuote {
  quoteToken: string;
  expiresAt: string;
  fxRateNgnPerUsd: number;
  courseNgn: number;
  usdCourseEquivalentCents: number;
  usdContingencyCents: number;
  usdTotalCents: number;
  ngnPayableKobo: number;
}

export interface FrozenTrainingPrice {
  courseNgnKobo: number;
  usdCourseEquivalentCents: number;
  usdContingencyCents: number;
  usdTotalCents: number;
  ngnPayableKobo: number;
  fxRateNgnPerUsd: number;
}

function getSigningSecret(): string | null {
  const sessionSecret = process.env.SESSION_SECRET?.trim();
  const paystackSecret = process.env.PAYSTACK_SECRET_KEY?.trim();
  return sessionSecret || paystackSecret || null;
}

function toBase64Url(value: string): string {
  return Buffer.from(value).toString("base64url");
}

function fromBase64Url(value: string): string | null {
  try {
    return Buffer.from(value, "base64url").toString("utf8");
  } catch {
    return null;
  }
}

function roundedDivide(numerator: bigint, denominator: bigint): bigint {
  return (numerator + denominator / 2n) / denominator;
}

function parseRateMicros(rate: number): bigint | null {
  if (!Number.isFinite(rate) || rate <= 0 || rate > 10_000_000) {
    return null;
  }

  const [whole, fraction = ""] = rate.toString().split(".");
  if (!/^\d+$/.test(whole) || !/^\d*$/.test(fraction) || fraction.length > 6) {
    return null;
  }

  return (
    BigInt(whole) * RATE_SCALE +
    BigInt((fraction + "000000").slice(0, 6))
  );
}

function rateFromMicros(rateMicros: string): number {
  return Number(BigInt(rateMicros)) / Number(RATE_SCALE);
}

function signPayload(payload: QuotePayload, secret: string): string {
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");
  return `${encodedPayload}.${signature}`;
}

function parsePayload(token: string, secret: string): QuotePayload | null {
  const [encodedPayload, signature, ...extra] = token.split(".");
  if (!encodedPayload || !signature || extra.length > 0) {
    return null;
  }

  const expected = createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  const decoded = fromBase64Url(encodedPayload);
  if (!decoded) {
    return null;
  }

  try {
    const value = JSON.parse(decoded) as Partial<QuotePayload>;
    const usdCourseEquivalentCents = value.usdCourseEquivalentCents;
    const ngnPayableKobo = value.ngnPayableKobo;
    const legacy = value.version === "fx-v1";
    const contingency = legacy ? 200 : USD_CONTINGENCY_CENTS;
    if (
      (!legacy && value.version !== PRICING_VERSION) ||
      !Number.isSafeInteger(value.issuedAt) ||
      !Number.isSafeInteger(value.expiresAt) ||
      typeof value.rateMicros !== "string" ||
      !/^\d+$/.test(value.rateMicros) ||
      !Number.isSafeInteger(value.courseNgnKobo) ||
      !Number.isSafeInteger(usdCourseEquivalentCents) ||
      usdCourseEquivalentCents == null ||
      usdCourseEquivalentCents < 1 ||
      value.usdContingencyCents !== contingency ||
      value.usdTotalCents !==
        usdCourseEquivalentCents + contingency ||
      !Number.isSafeInteger(ngnPayableKobo) ||
      ngnPayableKobo == null ||
      ngnPayableKobo < 1
    ) {
      return null;
    }

    const rateMicros = BigInt(value.rateMicros);
    if (rateMicros < 1n) {
      return null;
    }
    const expectedUsdCourseCents = legacy ? Number(
      roundedDivide(
        BigInt(COURSE_NGN_KOBO) * RATE_SCALE,
        rateMicros,
      ),
    ) : COURSE_USD_CENTS;
    const expectedNgnPayableKobo = legacy ? Number(
      BigInt(COURSE_NGN_KOBO) +
        roundedDivide(
          200n * rateMicros,
          RATE_SCALE,
        ),
    ) : Number(roundedDivide(BigInt(COURSE_USD_CENTS) * rateMicros, RATE_SCALE));
    if (
      value.courseNgnKobo !== (legacy ? COURSE_NGN_KOBO : expectedNgnPayableKobo) ||
      value.usdCourseEquivalentCents !== expectedUsdCourseCents ||
      value.ngnPayableKobo !== expectedNgnPayableKobo
    ) {
      return null;
    }
    return value as QuotePayload;
  } catch {
    return null;
  }
}

function asFrozenPrice(payload: QuotePayload): FrozenTrainingPrice {
  return {
    courseNgnKobo: payload.courseNgnKobo,
    usdCourseEquivalentCents: payload.usdCourseEquivalentCents,
    usdContingencyCents: payload.usdContingencyCents,
    usdTotalCents: payload.usdTotalCents,
    ngnPayableKobo: payload.ngnPayableKobo,
    fxRateNgnPerUsd: rateFromMicros(payload.rateMicros),
  };
}

export async function createTrainingPaymentQuote(
  now = Date.now(),
): Promise<TrainingPaymentQuote> {
  const secret = getSigningSecret();
  if (!secret) {
    throw new Error("Pricing signing secret is not configured");
  }

  const abortController = new AbortController();
  const timer = setTimeout(() => abortController.abort(), FX_TIMEOUT_MS);
  let response: Response;
  try {
    response = await fetch(FX_API_URL, {
      headers: { Accept: "application/json" },
      signal: abortController.signal,
    });
  } catch {
    throw new Error("Current foreign exchange pricing is unavailable");
  } finally {
    clearTimeout(timer);
  }

  let payload: FxApiResponse;
  try {
    payload = (await response.json()) as FxApiResponse;
  } catch {
    throw new Error("Foreign exchange service returned an invalid response");
  }

  const lastUpdateMs = (payload.time_last_update_unix ?? 0) * 1_000;
  const rateMicros = parseRateMicros(payload.rates?.NGN ?? Number.NaN);
  if (
    !response.ok ||
    payload.result !== "success" ||
    !Number.isSafeInteger(payload.time_last_update_unix) ||
    lastUpdateMs < now - FX_MAX_AGE_MS ||
    lastUpdateMs > now + FX_MAX_FUTURE_SKEW_MS ||
    !rateMicros
  ) {
    throw new Error("Current foreign exchange pricing is unavailable");
  }

  const usdCourseEquivalentCents = COURSE_USD_CENTS;
  const ngnPayableKobo = Number(
    roundedDivide(BigInt(COURSE_USD_CENTS) * rateMicros, RATE_SCALE),
  );
  const quotePayload: QuotePayload = {
    version: PRICING_VERSION,
    issuedAt: now,
    expiresAt: now + QUOTE_TTL_MS,
    rateMicros: rateMicros.toString(),
    courseNgnKobo: ngnPayableKobo,
    usdCourseEquivalentCents,
    usdContingencyCents: USD_CONTINGENCY_CENTS,
    usdTotalCents: usdCourseEquivalentCents + USD_CONTINGENCY_CENTS,
    ngnPayableKobo,
  };

  return {
    quoteToken: signPayload(quotePayload, secret),
    expiresAt: new Date(quotePayload.expiresAt).toISOString(),
    fxRateNgnPerUsd: rateFromMicros(quotePayload.rateMicros),
    courseNgn: ngnPayableKobo / 100,
    usdCourseEquivalentCents,
    usdContingencyCents: USD_CONTINGENCY_CENTS,
    usdTotalCents: quotePayload.usdTotalCents,
    ngnPayableKobo,
  };
}

export function validateCheckoutQuote(
  quoteToken: string,
  now = Date.now(),
): FrozenTrainingPrice | null {
  const secret = getSigningSecret();
  if (!secret) {
    return null;
  }
  const payload = parsePayload(quoteToken, secret);
  if (!payload || payload.version !== PRICING_VERSION || payload.expiresAt <= now || payload.issuedAt > now) {
    return null;
  }
  return asFrozenPrice(payload);
}

export function validateFrozenPricingMetadata(
  metadata: Record<string, unknown> | undefined,
): FrozenTrainingPrice | null {
  const quoteToken = metadata?.pricing_quote;
  if (typeof quoteToken !== "string") {
    return null;
  }
  const secret = getSigningSecret();
  if (!secret) {
    return null;
  }
  const payload = parsePayload(quoteToken, secret);
  return payload && metadata?.pricing_version === payload.version ? asFrozenPrice(payload) : null;
}