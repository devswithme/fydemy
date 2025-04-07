import Home from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fysite Academy",
  description: "Transform your curiosity into a knowledge",
};

export default async function Page() {
  return <Home />;
}
