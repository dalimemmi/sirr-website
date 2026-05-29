import type { Metadata } from "next";
import { BRAND, DEFAULT_OG_IMAGE, SITE_COPY, SITE_URL, absoluteUrl } from "@/lib/seo/site";

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: {
    path: string;
    width: number;
    height: number;
    alt: string;
  };
  noIndex?: boolean;
};

function buildOgImages(ogImage: PageMetadataInput["ogImage"]) {
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  return [
    {
      url: image.path,
      width: image.width,
      height: image.height,
      alt: image.alt,
    },
  ];
}

export function buildPageMetadata({
  path,
  title,
  description,
  keywords = [],
  ogImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const images = buildOgImages(ogImage);

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical,
      languages: {
        "nb-NO": canonical,
        "en-US": canonical,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
    openGraph: {
      type: "website",
      locale: "nb_NO",
      alternateLocale: ["en_US"],
      url: canonical,
      siteName: BRAND.name,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}

const homeSeo = buildPageMetadata({
  path: "",
  title: SITE_COPY.no.defaultTitle,
  description: SITE_COPY.no.defaultDescription,
  keywords: [
    "Sirr",
    "AI karriereplattform",
    "jobbsøk Norge",
    "Finn.no",
    "LinkedIn jobb",
    "NAV",
    "CV generator",
    "søknadssporing",
    "karriereplan",
  ],
});

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_COPY.no.defaultTitle,
    template: `%s | ${BRAND.name}`,
  },
  description: SITE_COPY.no.defaultDescription,
  applicationName: BRAND.name,
  authors: [{ name: BRAND.legalName, url: SITE_URL }],
  creator: BRAND.legalName,
  publisher: BRAND.legalName,
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: homeSeo.alternates,
  robots: homeSeo.robots,
  openGraph: homeSeo.openGraph,
  twitter: homeSeo.twitter,
  keywords: homeSeo.keywords,
};

export const pageSeo = {
  home: buildPageMetadata({
    path: "",
    title: "Sirr — AI karriereplattform for jobbsøk og vekst",
    description:
      "Sirr hjelper deg finne relevante stillinger, tilpasse CV og søknad, spore søknader og planlegge karrieren med AI. Støtte for Finn.no, LinkedIn og NAV.",
    keywords: [
      "AI karriereplattform",
      "jobbsøk",
      "Finn.no",
      "LinkedIn stillinger",
      "NAV jobb",
      "CV med AI",
      "søknadsbrev",
      "karriereplan",
    ],
  }),
  features: buildPageMetadata({
    path: "/features",
    title: "Funksjoner — jobbmatching, CV, søknadssporing og karriereplan",
    description:
      "Utforsk Sirr: matchscore, søknadssporing, AI-CV, søknadsbrev, Chrome-utvidelse for Finn og LinkedIn, samt langsiktig karriereplanlegging.",
    keywords: [
      "jobbmatching",
      "søknadssporing",
      "AI CV",
      "søknadsbrev",
      "Chrome-utvidelse",
      "Finn.no",
      "LinkedIn",
      "karriereplan",
    ],
  }),
  pricing: buildPageMetadata({
    path: "/pricing",
    title: "Priser — Gratis og Pro for AI-drevet jobbsøk",
    description:
      "Enkle Sirr-priser med Gratis- og Pro-plan. Start gratis og oppgrader for utvidelse, ubegrenset sporing og avansert AI for CV og karriere.",
    keywords: ["Sirr priser", "gratis jobbsøk", "Pro plan", "NOK", "karriereverktøy"],
  }),
  faq: buildPageMetadata({
    path: "/faq",
    title: "FAQ — Sirr, Finn, LinkedIn, NAV og personvern",
    description:
      "Svar på vanlige spørsmål om Sirr: jobb fra Finn og LinkedIn, AI-CV, Chrome-utvidelse, gratisplan, Pro og personvern.",
    keywords: ["Sirr FAQ", "Finn.no", "LinkedIn", "NAV", "AI CV", "personvern", "Chrome-utvidelse"],
  }),
  about: buildPageMetadata({
    path: "/about",
    title: "Om Sirr — fremtiden for karriereintelligens",
    description:
      "Les om Sirrs visjon: gjøre jobbsøk mer strukturert med AI-drevet matching, dokumenter og langsiktig karriereplanlegging.",
    keywords: ["Om Sirr", "karriereintelligens", "jobbsøk Norge", "AI karriere"],
  }),
  contact: buildPageMetadata({
    path: "/contact",
    title: "Kontakt Sirr — produkt, partnerskap og demo",
    description:
      "Ta kontakt med Sirr for produktspørsmål, partnerskap eller tidlig tilgang til AI-plattformen for karriere og jobbsøk.",
    keywords: ["kontakt Sirr", "demo", "partnerskap", "karriereplattform"],
  }),
} as const;
