import { randomUUID } from "node:crypto";
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

function getSecretKey(): string | null {
  const key = process.env.PAYSTACK_SECRET_KEY?.trim();
  return key && key.startsWith("sk_") ? key : null;
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

router.get("/paystack/verify/:reference", async (req, res): Promise<void> => {
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

  const paystackResponse = await fetch(
    `${PAYSTACK_API_URL}/transaction/verify/${encodeURIComponent(parsed.data.reference)}`,
    { headers: { Authorization: `Bearer ${secretKey}` } },
  );
  const payload = (await paystackResponse.json()) as PaystackVerifyResponse;

  if (!paystackResponse.ok || !payload.status || !payload.data) {
    req.log.warn(
      { paystackStatus: paystackResponse.status, paystackMessage: payload.message },
      "Paystack transaction verification failed",
    );
    res.status(502).json({ error: "Unable to verify this payment." });
    return;
  }

  const transaction = payload.data;
  const isSuccessful =
    transaction.status === "success" &&
    transaction.amount === LEVEL_ONE_AMOUNT_KOBO &&
    transaction.currency === LEVEL_ONE_CURRENCY &&
    transaction.reference === parsed.data.reference;

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
    const participantEmail = transaction.customer?.email;
    const legacyNameParts = transaction.metadata?.participant_name?.trim().split(/\s+/) ?? [];
    const firstName = transaction.metadata?.first_name ?? legacyNameParts[0];
    const secondName =
      transaction.metadata?.second_name ??
      (legacyNameParts.length > 1 ? legacyNameParts.slice(1).join(" ") : undefined);

    if (participantEmail && firstName && secondName) {
      try {
        const email = await sendTrainingConfirmationEmail({
          participantEmail,
          firstName,
          secondName,
          reference: parsed.data.reference,
        });
        confirmationEmailSent = true;
        req.log.info(
          { reference: parsed.data.reference, emailId: email.id },
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
    } else {
      req.log.error(
        { reference: parsed.data.reference },
        "Training payment verified without participant email metadata",
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