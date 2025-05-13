"use server";

import { createTransport } from "nodemailer";
import path from "path";

const transporter = createTransport({
  // @ts-expect-error host props err
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendMail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  return await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    bcc: process.env.SMTP_HOST,
    subject,
    html,
    attachments: [
      {
        filename: "logo_mail.png",
        path: path.join(process.cwd(), "public", "logo_mail.png"),
        cid: "logo",
      },
    ],
  });
};
