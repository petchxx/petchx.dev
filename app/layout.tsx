import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petchx",
  description: "Petchx - Full Stack Developer | Panuphong Burakitphachai",
  icons: "./assets/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={outfit.className}>
        <Providers>
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
