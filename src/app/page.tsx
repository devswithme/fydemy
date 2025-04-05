import Home from "@/components/home";
import { getTopUsersByXp } from "@/config/firebase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fysite Academy",
  description: "Transform your curiosity into a knowledge",
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
  return <Home ranks={ranks} />;
}
