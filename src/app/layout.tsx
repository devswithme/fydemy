import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <body className={`${dm_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
