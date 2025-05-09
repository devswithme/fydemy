import { updateInvoiceByRef } from "@/config/firebase";
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
    await updateInvoiceByRef(body.reference);
    return NextResponse.json({ success: true });
  }
}
