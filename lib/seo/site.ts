import { no } from "@/lib/i18n/no";
import { en } from "@/lib/i18n/en";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://sirr.no";

export const BRAND = {
  name: no.brand.name,
  tagline: no.brand.tagline,
  legalName: "Sirr",
} as const;

export const DEFAULT_OG_IMAGE = {
  path: "/og-1200x630.png",
  width: 1200,
  height: 630,
  alt: "Sirr — AI Career Intelligence Platform",
} as const;

export const SHARED_KEYWORDS = [
  "Sirr",
  "AI karriere",
  "jobbsøk",
  "karriereplanlegging",
  "CV",
  "søknad",
  "jobbmatching",
  "Finn.no",
  "LinkedIn",
  "NAV",
  "søknadssporing",
  "karriereintelligens",
] as const;

export const SITE_COPY = {
  no: {
    defaultTitle: `${no.brand.name} — ${no.brand.tagline}`,
    defaultDescription: no.meta.description,
    shortDescription: no.brand.shortDescription,
  },
  en: {
    defaultTitle: `${en.brand.name} — ${en.brand.tagline}`,
    defaultDescription: en.meta.description,
    shortDescription: en.brand.shortDescription,
  },
} as const;

export const PUBLIC_ROUTES = [
  { path: "", label: "Hjem", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", label: "Funksjoner", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/pricing", label: "Priser", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/faq", label: "FAQ", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", label: "Om oss", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", label: "Kontakt", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy", label: "Personvern", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/terms", label: "Vilkår", priority: 0.5, changeFrequency: "monthly" as const },
];

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${SITE_URL}${normalized}`;
}
