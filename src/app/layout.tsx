import type { Metadata } from "next";
import { inter, outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revdix Exim LLP | Premium Import-Export Solutions",
  description: "Global sourcing, logistics, and trade management by Revdix Exim LLP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
