import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { OrganizationWebSiteJsonLd } from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={`${ibmPlexSans.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <OrganizationWebSiteJsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
