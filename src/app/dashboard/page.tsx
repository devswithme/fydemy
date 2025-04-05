import Dashboard from "@/components/dashboard";
import { getTopUsersByXp } from "@/config/firebase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Halo, selamat datang! Terima kasih sudah membeli modul ini.",
};

export default async function Page() {
  const ranks = (await getTopUsersByXp()) as [
    {
      uid: string;
      username: string;
      isPremium: boolean;
      xp: number;
    }
  ];
  return <Dashboard ranks={ranks} />;
}
