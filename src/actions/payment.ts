"use server";

import axios from "axios";
import crypto from "crypto";
import { nanoid } from "nanoid";

const createSignature = async (merchant_ref: string, amount: number) => {
  return crypto
    .createHmac("sha256", process.env.TRIPAY_PRIVATE_KEY!)
    .update(process.env.TRIPAY_MERCHANT_CODE + merchant_ref + amount)
    .digest("hex");
};

export const getChannels = async () => {
  const response = await axios.get(
    `${
      process.env.NODE_ENV === "production"
        ? "https://tripay.co.id/api"
        : "https://tripay.co.id/api-sandbox"
    }/merchant/payment-channel`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TRIPAY_API_KEY}`,
      },
    }
  );
  return response.data;
};

export const createTransaction = async (data: {
  form: { code: string; pkg: string; phone: string };
  user: { email: string; name: string };
}) => {
  const { form, user } = data;
  const merchant_ref = `INV-${nanoid(5)}`;

  const pkg_detail = {
    name: "",
    price: 0,
    quantity: 1,
  };

  if (form.pkg === "1m") {
    pkg_detail.name = "Academy Premium - 1 month";
    pkg_detail.price = 200000;
  } else if (form.pkg === "2m") {
    pkg_detail.name = "Academy Premium - 2 month";
    pkg_detail.price = 350000;
  }

  const payload = {
    method: form.code,
    merchant_ref,
    amount: pkg_detail.price,
    customer_name: user.name,
    customer_email: user.email,
    customer_phone: form.phone,
    order_items: [pkg_detail],
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/pay`,
    signature: await createSignature(merchant_ref, pkg_detail.price),
  };

  const { data: response } = await axios.post(
    `${
      process.env.NODE_ENV === "production"
        ? "https://tripay.co.id/api"
        : "https://tripay.co.id/api-sandbox"
    }/transaction/create`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${process.env.TRIPAY_API_KEY}`,
      },
    }
  );
  return response.data;
};
