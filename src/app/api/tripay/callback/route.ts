import { sendMail } from "@/actions/mail";
import { updateInvoiceByRef } from "@/config/firebase";
import { formatUnixTimestamp } from "@/lib/utils";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const callback_signature = request.headers.get("x-callback-signature");
  const signature = crypto
    .createHmac("sha256", process.env.TRIPAY_PRIVATE_KEY!)
    .update(JSON.stringify(body))
    .digest("hex");

  if (callback_signature === signature && body.status === "PAID") {
    // @ts-expect-error email and username props does not have type
    const { email, username } = await updateInvoiceByRef(body.reference);
    await sendMail({
      to: email,
      subject: `Your Payment Has Been Received – Invoice #${body.reference}`,
      html: `<div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; color: #000000; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 8px;">
  <div style="background: #ffffff; padding: 20px 24px; padding-top: 28px; border-radius: 8px; border: 1px solid #ccc">
    
    <!-- Logo -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://edu.fysite.id/logo_mail.png" alt="logo" style="height: 40px;"/>
    </div>

    <h2 style="color: #000000;">Hi ${username},</h2>
    <p>We’ve received your payment successfully!</p>

    <table style="margin-top: 16px; border-collapse: collapse; width: 100%; color: #000000; font-size: 14px;">
      <tr>
        <td style="padding: 8px 0; vertical-align: top; width: 130px;"><strong>Invoice ID</strong></td>
        <td style="padding: 8px 0;">${body.reference}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; vertical-align: top;"><strong>Payment Method</strong></td>
        <td style="padding: 8px 0;">${body.payment_method}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; vertical-align: top;"><strong>Total Amount</strong></td>
        <td style="padding: 8px 0;">Rp ${Number(
          body.total_amount
        ).toLocaleString("id-ID")}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; vertical-align: top;"><strong>Paid At</strong></td>
        <td style="padding: 8px 0;">${formatUnixTimestamp(body.paid_at)}</td>
      </tr>
    </table>

    <!-- Button -->
    <div style="margin: 28px 0;">
      <a href="https://tripay.co.id/checkout/${
        body.reference
      }" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 12px 20px; border-radius: 6px; text-decoration: none;">
        View Payment Detail
      </a>
    </div>

    <p>Thank you for your payment. If you have any questions, feel free to reach out.</p>

    <p>Best regards,<br />Fydemy Team</p>

    <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;" />
    <p style="font-size: 12px; color: #000000;">Note: This is an automated message, please do not reply.</p>
  </div>
</div>
`,
    });
    return NextResponse.json({ success: true });
  }
}
