import Dashboard from "@/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Halo, selamat datang! Terima kasih sudah membeli modul ini.",
};

export default async function Page() {
  return <Dashboard />;
}
