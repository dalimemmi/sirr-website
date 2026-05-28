"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getCopy, type WebsiteCopy, type WebsiteLocale } from "@/lib/i18n";

const STORAGE_KEY = "sirr-website-lang";
const NORWEGIAN_LANGUAGE_CODES = new Set(["no", "nb", "nn"]);

type LanguageContextValue = {
  locale: WebsiteLocale;
  setLocale: (locale: WebsiteLocale) => void;
  t: WebsiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isWebsiteLocale(value: string | null): value is WebsiteLocale {
  return value === "en" || value === "no";
}

function browserPrefersNorwegian(): boolean {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];

  return tags.some((tag) => {
    const code = tag?.toLowerCase().split("-")[0] ?? "";
    return NORWEGIAN_LANGUAGE_CODES.has(code);
  });
}

function detectLocale(): WebsiteLocale {
  if (typeof window === "undefined") return "en";

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isWebsiteLocale(stored)) return stored;
  } catch {
    // Storage may be unavailable in private or restricted browser contexts.
  }

  return browserPrefersNorwegian() ? "no" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<WebsiteLocale>(() => detectLocale());

  const setLocale = useCallback((next: WebsiteLocale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The visible language can still update even if persistence is blocked.
    }
    document.documentElement.lang = next === "no" ? "no" : "en";
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "no" ? "no" : "en";
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: getCopy(locale) }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
