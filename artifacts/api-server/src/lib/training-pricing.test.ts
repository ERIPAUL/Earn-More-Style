import assert from "node:assert/strict";
import test, { after } from "node:test";
import {
  createTrainingPaymentQuote,
  validateCheckoutQuote,
  validateFrozenPricingMetadata,
} from "./training-pricing";

const NOW = 1_700_000_000_000;
const originalFetch = globalThis.fetch;

function installFxMock(rate: number): void {
  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        result: "success",
        time_last_update_unix: Math.floor((NOW - 60_000) / 1_000),
        rates: { NGN: rate },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
}

test("creates an exact signed NGN quote from mocked current FX", async () => {
  process.env.SESSION_SECRET = "test-pricing-secret";
  installFxMock(1500.125);

  const quote = await createTrainingPaymentQuote(NOW);

  assert.equal(quote.usdCourseEquivalentCents, 6666);
  assert.equal(quote.usdContingencyCents, 200);
  assert.equal(quote.usdTotalCents, 6866);
  assert.equal(quote.ngnPayableKobo, 10_300_025);
  assert.deepEqual(validateCheckoutQuote(quote.quoteToken, NOW), {
    courseNgnKobo: 10_000_000,
    usdCourseEquivalentCents: 6666,
    usdContingencyCents: 200,
    usdTotalCents: 6866,
    ngnPayableKobo: 10_300_025,
    fxRateNgnPerUsd: 1500.125,
  });
});

test("rejects tampered and expired quotes before checkout", async () => {
  process.env.SESSION_SECRET = "test-pricing-secret";
  installFxMock(1500);
  const quote = await createTrainingPaymentQuote(NOW);
  const tampered = `${quote.quoteToken.slice(0, -1)}x`;

  assert.equal(validateCheckoutQuote(tampered, NOW), null);
  assert.equal(validateCheckoutQuote(quote.quoteToken, NOW + 600_001), null);
});

test("does not issue a quote when the mocked FX data is stale", async () => {
  process.env.SESSION_SECRET = "test-pricing-secret";
  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        result: "success",
        time_last_update_unix: Math.floor((NOW - 36 * 60 * 60 * 1_000 - 1) / 1_000),
        rates: { NGN: 1500 },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );

  await assert.rejects(createTrainingPaymentQuote(NOW), /unavailable/);
});

test("frozen signed metadata remains independently verifiable after FX changes", async () => {
  process.env.SESSION_SECRET = "test-pricing-secret";
  installFxMock(1500);
  const originalQuote = await createTrainingPaymentQuote(NOW);
  installFxMock(1750);
  const laterQuote = await createTrainingPaymentQuote(NOW);

  const frozen = validateFrozenPricingMetadata({
    pricing_version: "fx-v1",
    pricing_quote: originalQuote.quoteToken,
  });

  assert.equal(frozen?.ngnPayableKobo, 10_300_000);
  assert.equal(laterQuote.ngnPayableKobo, 10_350_000);
  assert.notEqual(frozen?.ngnPayableKobo, laterQuote.ngnPayableKobo);
});

after(() => {
  globalThis.fetch = originalFetch;
});