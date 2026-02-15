import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/core/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polk Systems | One System. Zero Stress.",
  description: "Advanced home automation with strategic minimalism. Technology without the stress.",
  manifest: "/manifest.json",
};

import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/core/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Preloader />
        <SmoothScrolling>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-accent focus:text-brand-black focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}

