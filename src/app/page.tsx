import Home from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fydemy",
  description:
    "A web development academy platform empowering the next generation of digital innovators",
  metadataBase: new URL("https://edu.fysite.id"),
  openGraph: {
    title: "Fydemy",
    description:
      "A web development academy platform empowering the next generation of digital innovators",
    url: "https://edu.fysite.id",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1440,
        height: 812,
        alt: "fydemy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fydemy",
    description:
      "A web development academy platform empowering the next generation of digital innovators",
    images: ["/og.png"],
  },
};

export default async function Page() {
  return <Home />;
}
