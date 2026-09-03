import { readFile } from "node:fs/promises";
import path from "node:path";

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_ADDRESS = "EarnMore Consultants <training@earnmoregroup.com>";
const EMAIL_TEMPLATE_VERSION = "v2";
const LOGO_PATHS = [
  path.resolve(process.cwd(), "../earnmore-website/public/logo.png"),
  path.resolve(process.cwd(), "artifacts/earnmore-website/public/logo.png"),
];

interface TrainingConfirmationEmailInput {
  firstName: string;
  secondName: string;
  participantEmail: string;
  reference: string;
}

interface ResendEmailResponse {
  id?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function readLogoContent(): Promise<string> {
  for (const logoPath of LOGO_PATHS) {
    try {
      return (await readFile(logoPath)).toString("base64");
    } catch (error) {
      const isMissingFile =
        error instanceof Error &&
        "code" in error &&
        error.code === "ENOENT";
      if (!isMissingFile) {
        throw error;
      }
    }
  }

  throw new Error("EarnMore email logo file was not found");
}

export async function sendTrainingConfirmationEmail({
  firstName,
  secondName,
  participantEmail,
  reference,
}: TrainingConfirmationEmailInput): Promise<{ id: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const participantName = `${firstName} ${secondName}`.trim();
  const safeFirstName = escapeHtml(firstName);
  const safeName = escapeHtml(participantName);
  const safeReference = escapeHtml(reference);
  const subject = "Payment confirmed: Corporate ESG Level 1 Training";
  const logoContent = await readLogoContent();

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background:#f0fdf8;font-family:Arial,Helvetica,sans-serif;color:#17352f;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f0fdf8;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d9eee7;">
            <tr>
              <td style="padding:28px 36px;background:#ffffff;border-bottom:1px solid #e7f2ee;">
                <img src="cid:earnmore-logo" width="184" alt="EarnMore Consultants" style="display:block;width:184px;max-width:100%;height:auto;">
              </td>
            </tr>
            <tr>
              <td style="padding:38px 36px;background:#0a2e28;">
                <div style="font-size:12px;line-height:18px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#5ee0ad;">Payment confirmed</div>
                <h1 style="margin:10px 0 12px;font-size:30px;line-height:38px;color:#ffffff;">Congratulations, ${safeFirstName}!</h1>
                <p style="margin:0;font-size:16px;line-height:25px;color:#cce9df;">Your Level 1 enrollment is confirmed. We have received your payment for the Corporate ESG Strategy and Compliance training programme.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:34px 36px;">
                <h2 style="margin:0 0 20px;font-size:20px;line-height:28px;color:#17352f;">Course details</h2>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#6c7f79;font-size:14px;">Course</td>
                    <td align="right" style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#17352f;font-size:14px;font-weight:700;">Corporate ESG Strategy and Compliance</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#6c7f79;font-size:14px;">Level</td>
                    <td align="right" style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#17352f;font-size:14px;font-weight:700;">Level 1: Foundation</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#6c7f79;font-size:14px;">Dates</td>
                    <td align="right" style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#17352f;font-size:14px;font-weight:700;">10 and 17 October 2026</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#6c7f79;font-size:14px;">Duration</td>
                    <td align="right" style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#17352f;font-size:14px;font-weight:700;">8 hours total, 4 hours per day</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#6c7f79;font-size:14px;">Format</td>
                    <td align="right" style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#17352f;font-size:14px;font-weight:700;">Online</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#6c7f79;font-size:14px;">Modules</td>
                    <td align="right" style="padding:12px 0;border-bottom:1px solid #edf3f1;color:#17352f;font-size:14px;font-weight:700;">6 Level 1 modules</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;color:#6c7f79;font-size:14px;">Amount paid</td>
                    <td align="right" style="padding:12px 0;color:#059669;font-size:17px;font-weight:700;">₦100,000 NGN</td>
                  </tr>
                </table>

                <div style="margin-top:26px;padding:18px 20px;background:#f0fdf8;border-radius:10px;border-left:4px solid #059669;">
                  <div style="font-size:12px;line-height:18px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#059669;">Payment reference</div>
                  <div style="margin-top:5px;font-size:14px;line-height:22px;color:#17352f;word-break:break-all;">${safeReference}</div>
                </div>

                <p style="margin:28px 0 0;font-size:15px;line-height:24px;color:#536a63;">The link to join the live course will be sent one week before the course start date. If you have any questions, reply to this email or contact <a href="mailto:info@earnmoregroup.com" style="color:#059669;">info@earnmoregroup.com</a>.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px;background:#f7faf9;text-align:center;color:#7a8d87;font-size:12px;line-height:19px;">
                EarnMore Consultants, London, United Kingdom<br>
                Corporate ESG Strategy and Compliance Training
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `Payment confirmed

Congratulations, ${firstName}!

Your payment for the Corporate ESG Strategy and Compliance, Level 1: Foundation programme has been confirmed.

Dates: 10 and 17 October 2026
Duration: 8 hours total, 4 hours per day
Format: Online
Modules: 6 Level 1 modules
Amount paid: ₦100,000 NGN
Payment reference: ${reference}

The link to join the live course will be sent one week before the course start date.

EarnMore Consultants
info@earnmoregroup.com`;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `training-confirmation-${EMAIL_TEMPLATE_VERSION}/${reference}`,
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [participantEmail],
      reply_to: "info@earnmoregroup.com",
      subject,
      html,
      text,
      attachments: [
        {
          content: logoContent,
          filename: "earnmore-logo.png",
          content_id: "earnmore-logo",
        },
      ],
    }),
  });

  const payload = (await response.json()) as ResendEmailResponse;
  if (!response.ok || !payload.id) {
    throw new Error(payload.message || `Resend returned status ${response.status}`);
  }

  return { id: payload.id };
}