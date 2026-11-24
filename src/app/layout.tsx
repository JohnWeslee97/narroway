import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const gsans = Google_Sans({ variable: "--font-gsans", subsets: ["latin"], weight: ["400", "500", "600", "700"], adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Narroway | Business Solution",
  description: "Narroway helps businesses grow with consulting, digital marketing, branding, compliance and accounts, all under one roof.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gsans.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
