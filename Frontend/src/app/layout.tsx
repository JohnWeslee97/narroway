import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gsans = localFont({
  src: "./fonts/google-sans-latin.woff2",
  variable: "--font-gsans",
  weight: "400 700",
  display: "swap",
});

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
