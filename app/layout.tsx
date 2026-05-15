import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Anas | Portfolio",
  description:
    "Portfolio of Muhammad Anas, a Python and Django developer building API-backed web apps, Android app backends, automation, billing, inventory, and reporting systems.",
  openGraph: {
    title: "Muhammad Anas | Portfolio",
    description:
      "Python and Django portfolio featuring live client systems for service operations, notifications, billing, inventory, reporting, and company websites.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Anas | Portfolio",
    description:
      "Live Django, API, Android, automation, and portfolio website projects by Muhammad Anas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${manrope.variable} ${fraunces.variable} ${spaceMono.variable}`} lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
