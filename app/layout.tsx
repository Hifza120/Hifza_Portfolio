import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import { StructuredData } from "@/components/structured-data";

import "./globals.css";

const siteUrl = "https://hifza.dev";

export const metadata: Metadata = {
  title: {
    default: "Hifza - AI/ML Engineer & Developer",
    template: "%s | Hifza",
  },
  description:
    "Final-year CS student and former Data Science Intern at 10Pearls. I build ML-driven systems — from forecasting pipelines to research — with a focus on real-world impact.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Hifza — AI/ML Engineer & Developer",
    description:
      "Final-year CS student and former Data Science Intern at 10Pearls. I build ML-driven systems — from forecasting pipelines to research — with a focus on real-world impact.",
    url: siteUrl,
    siteName: "Hifza",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <StructuredData />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
