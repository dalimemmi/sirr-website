import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { en } from "@/lib/i18n";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://sirr.no";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sirr — AI Career Intelligence Platform",
    template: `%s | ${en.brand.name}`,
  },
  description:
    "Sirr is an AI Career Intelligence Platform that helps you find opportunities, win applications, and grow your career.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["nb_NO"],
    url: siteUrl,
    siteName: en.brand.name,
    title: "Sirr — AI Career Intelligence Platform",
    description:
      "Move from job-search chaos to an organized, AI-assisted workflow for applications and career growth.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sirr — AI Career Intelligence Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirr — AI Career Intelligence Platform",
    description:
      "Find opportunities, win applications, and grow your career with AI-powered intelligence.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
