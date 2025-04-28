import type { NextConfig } from "next";
// @ts-expect-error next-pwa package does not have types
import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);
