import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Data Centers, Explained — a factual guide for Pikeville & Eastern Kentucky",
    template: "%s — Data Centers, Explained",
  },
  description:
    "An independent, fully-sourced guide to data centers: what they are, how loud they are, how much water and power they use, what's known about health concerns, and what the proposed Pikeville, KY project actually says.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-LYT7CMS9VE" />
    </html>
  );
}
