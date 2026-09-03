import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { Router, type IRouter } from "express";
import {
  InitializePaystackTransactionBody,
  InitializePaystackTransactionResponse,
  VerifyPaystackTransactionParams,
  VerifyPaystackTransactionResponse,
} from "@workspace/api-zod";
import { sendTrainingConfirmationEmail } from "../lib/training-confirmation-email";

const router: IRouter = Router();

const PAYSTACK_API_URL = "https://api.paystack.co";
const LEVEL_ONE_AMOUNT_KOBO = 10_000_000;
const LEVEL_ONE_CURRENCY = "NGN";

interface PaystackInitializeResponse {
  status: boolean;
  message: string;
  data?: {
    authorization_url?: string;
    reference?: string;
  };
}

interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data?: {
    status?: string;
    reference?: string;
    amount?: number;
    currency?: string;
    customer?: {
      email?: string;
    };
    metadata?: {
      first_name?: string;
      second_name?: string;
      participant_name?: string;
    };
  };
}

interface PaystackWebhookEvent {
  event?: string;
  data?: {
    reference?: string;
  };
}

function getSecretKey(): string | null {
  const key = process.env.PAYSTACK_SECRET_KEY?.trim();
  return key && key.startsWith("sk_") ? key : null;
}

function hasValidWebhookSignature(
  body: unknown,
  signature: string | undefined,
  secretKey: string,
): boolean {
  if (!signature || !/^[a-f0-9]{128}$/i.test(signature)) {
    return false;
  }

  const expectedSignature = createHmac("sha512", secretKey)
    .update(JSON.stringify(body))
    .digest("hex");
  const providedBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expectedSignature, "hex");

  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
}

async function fetchPaystackTransaction(
  reference: string,
  secretKey: string,
): Promise<PaystackVerifyResponse> {
  const response = await fetch(
    `${PAYSTACK_API_URL}/transaction/verify/${encodeURIComponent(reference)}`,
    { headers: { Authorization: `Bearer ${secretKey}` } },
  );
  const payload = (await response.json()) as PaystackVerifyResponse;

  if (!response.ok || !payload.status || !payload.data) {
    throw new Error(
      payload.message || `Paystack verification returned status ${response.status}`,
    );
  }

  return payload;
}

function isExpectedTrainingPayment(
  transaction: NonNullable<PaystackVerifyResponse["data"]>,
  reference: string,
): boolean {
  return (
    transaction.status === "success" &&
    transaction.amount === LEVEL_ONE_AMOUNT_KOBO &&
    transaction.currency === LEVEL_ONE_CURRENCY &&
    transaction.reference === reference
  );
}

async function sendConfirmationForTransaction(
  transaction: NonNullable<PaystackVerifyResponse["data"]>,
  reference: string,
): Promise<{ sent: boolean; emailId?: string }> {
  const participantEmail = transaction.customer?.email;
  const legacyNameParts =
    transaction.metadata?.participant_name?.trim().split(/\s+/) ?? [];
  const firstName = transaction.metadata?.first_name ?? legacyNameParts[0];
  const secondName =
    transaction.metadata?.second_name ??
    (legacyNameParts.length > 1
      ? legacyNameParts.slice(1).join(" ")
      : undefined);

  if (!participantEmail || !firstName || !secondName) {
    throw new Error("Verified payment is missing participant email or name metadata");
  }

  const email = await sendTrainingConfirmationEmail({
    participantEmail,
    firstName,
    secondName,
    reference,
  });

  return { sent: true, emailId: email.id };
}

router.post("/paystack/initialize", async (req, res): Promise<void> => {
  const parsed = InitializePaystackTransactionBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.flatten() }, "Invalid training enrolment details");
    res.status(400).json({ error: "Please provide valid first name, second name, and email details." });
    return;
  }

  const secretKey = getSecretKey();
  if (!secretKey) {
    req.log.error("PAYSTACK_SECRET_KEY is not configured");
    res.status(500).json({ error: "Payment service is not configured." });
    return;
  }

  const reference = `emg-l1-${randomUUID()}`;
  const host = req.get("host");
  if (!host) {
    res.status(400).json({ error: "Unable to determine the checkout return address." });
    return;
  }

  const callbackUrl = `${req.protocol}://${host}/training/payment`;
  const paystackResponse = await fetch(`${PAYSTACK_API_URL}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: parsed.data.email,
      amount: LEVEL_ONE_AMOUNT_KOBO,
      currency: LEVEL_ONE_CURRENCY,
      reference,
      callback_url: callbackUrl,
      metadata: {
        first_name: parsed.data.firstName,
        second_name: parsed.data.secondName,
        participant_name: `${parsed.data.firstName} ${parsed.data.secondName}`,
        course: "Corporate ESG Strategy and Compliance, Level 1",
        training_dates: "10 and 17 October 2026",
        delivery_format: "Online",
      },
    }),
  });

  const payload = (await paystackResponse.json()) as PaystackInitializeResponse;
  const authorizationUrl = payload.data?.authorization_url;
  const returnedReference = payload.data?.reference;

  if (!paystackResponse.ok || !payload.status || !authorizationUrl || !returnedReference) {
    req.log.error(
      { paystackStatus: paystackResponse.status, paystackMessage: payload.message },
      "Paystack transaction initialization failed",
    );
    res.status(502).json({ error: "Unable to start checkout. Please try again." });
    return;
  }

  res.json(
    InitializePaystackTransactionResponse.parse({
      authorizationUrl,
      reference: returnedReference,
    }),
  );
});

router.post("/paystack/webhook", async (req, res): Promise<void> => {
  const secretKey = getSecretKey();
  if (!secretKey) {
    req.log.error("PAYSTACK_SECRET_KEY is not configured");
    res.status(500).json({ error: "Payment service is not configured." });
    return;
  }

  const signature = req.get("x-paystack-signature");
  if (!hasValidWebhookSignature(req.body, signature, secretKey)) {
    req.log.warn("Rejected Paystack webhook with an invalid signature");
    res.status(401).json({ error: "Invalid webhook signature." });
    return;
  }

  const event = req.body as PaystackWebhookEvent;
  if (event.event !== "charge.success") {
    req.log.info({ event: event.event ?? "unknown" }, "Paystack webhook acknowledged");
    res.sendStatus(200);
    return;
  }

  const reference = event.data?.reference;
  if (
    !reference ||
    reference.length > 100 ||
    !/^[A-Za-z0-9._=-]+$/.test(reference)
  ) {
    req.log.warn("Paystack charge.success webhook is missing a valid reference");
    res.status(400).json({ error: "Invalid transaction reference." });
    return;
  }

  try {
    const payload = await fetchPaystackTransaction(reference, secretKey);
    const transaction = payload.data!;

    if (!isExpectedTrainingPayment(transaction, reference)) {
      req.log.error(
        {
          reference,
          amountMatches: transaction.amount === LEVEL_ONE_AMOUNT_KOBO,
          currencyMatches: transaction.currency === LEVEL_ONE_CURRENCY,
          referenceMatches: transaction.reference === reference,
        },
        "Paystack webhook transaction did not match the expected training payment",
      );
      res.status(400).json({ error: "Payment details do not match." });
      return;
    }

    const confirmation = await sendConfirmationForTransaction(
      transaction,
      reference,
    );
    req.log.info(
      { reference, emailId: confirmation.emailId },
      "Paystack webhook processed successful training payment",
    );
    res.sendStatus(200);
  } catch (error) {
    req.log.error(
      {
        reference,
        error: error instanceof Error ? error.message : "Unknown webhook error",
      },
      "Paystack webhook processing failed",
    );
    res.status(500).json({ error: "Webhook processing failed." });
  }
});

router.get("/paystack/verify/:reference", async (req, res): Promise<void> => {
  res.set("Cache-Control", "no-store");

  const parsed = VerifyPaystackTransactionParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid payment reference." });
    return;
  }

  const secretKey = getSecretKey();
  if (!secretKey) {
    req.log.error("PAYSTACK_SECRET_KEY is not configured");
    res.status(500).json({ error: "Payment service is not configured." });
    return;
  }

  let payload: PaystackVerifyResponse;
  try {
    payload = await fetchPaystackTransaction(parsed.data.reference, secretKey);
  } catch (error) {
    req.log.warn(
      {
        reference: parsed.data.reference,
        error: error instanceof Error ? error.message : "Unknown verification error",
      },
      "Paystack transaction verification failed",
    );
    res.status(502).json({ error: "Unable to verify this payment." });
    return;
  }

  const transaction = payload.data!;
  const isSuccessful = isExpectedTrainingPayment(
    transaction,
    parsed.data.reference,
  );

  const status =
    isSuccessful ? "success" : transaction.status === "pending" || transaction.status === "ongoing"
      ? "pending"
      : "failed";

  if (transaction.status === "success" && !isSuccessful) {
    req.log.error(
      {
        reference: parsed.data.reference,
        amountMatches: transaction.amount === LEVEL_ONE_AMOUNT_KOBO,
        currencyMatches: transaction.currency === LEVEL_ONE_CURRENCY,
      },
      "Verified Paystack transaction did not match the expected course payment",
    );
  }

  let confirmationEmailSent = false;
  if (isSuccessful) {
    try {
      const confirmation = await sendConfirmationForTransaction(
        transaction,
        parsed.data.reference,
      );
      confirmationEmailSent = confirmation.sent;
      req.log.info(
        { reference: parsed.data.reference, emailId: confirmation.emailId },
        "Training confirmation email sent",
      );
    } catch (error) {
      req.log.error(
        {
          reference: parsed.data.reference,
          error: error instanceof Error ? error.message : "Unknown email error",
        },
        "Training payment verified but confirmation email failed",
      );
    }
  }

  const message =
    status === "success"
      ? "Payment confirmed. Your Level 1 training enrolment is complete."
      : status === "pending"
        ? "Your payment is still processing. Please check again shortly."
        : "Payment was not completed. You can return to the training page and try again.";

  res.json(
    VerifyPaystackTransactionResponse.parse({
      status,
      reference: parsed.data.reference,
      message,
      confirmationEmailSent,
    }),
  );
});

export default router;