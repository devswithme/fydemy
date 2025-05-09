"use server";

import {
  createTransport,
  createTestAccount,
  getTestMessageUrl,
} from "nodemailer";

// const transporter = createTransport({
//   // @ts-expect-error host props err
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: process.env.SMTP_PORT === "465",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

const testAccount = await createTestAccount();

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
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
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  });

  console.log("Preview URL: %s", getTestMessageUrl(info));
};
