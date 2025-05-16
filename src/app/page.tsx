import Home from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fydemy",
  description:
    "A web development academy platform empowering the next generation of digital innovators",
};

export default async function Page() {
  return <Home />;
}
