"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getCopy, type WebsiteCopy, type WebsiteLocale } from "@/lib/i18n";

const STORAGE_KEY = "sirr-website-lang";

type LanguageContextValue = {
  locale: WebsiteLocale;
  setLocale: (locale: WebsiteLocale) => void;
  t: WebsiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLocale(): WebsiteLocale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "no") return stored;
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  const norwegian = tags.some((tag) => {
    const code = (tag || "").toLowerCase().split("-")[0];
    return code === "no" || code === "nb" || code === "nn";
  });
  return norwegian ? "no" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<WebsiteLocale>("en");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = useCallback((next: WebsiteLocale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
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
