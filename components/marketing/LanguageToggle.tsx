"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import type { WebsiteLocale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  const options: { code: WebsiteLocale; label: string }[] = [
    { code: "en", label: t.lang.en },
    { code: "no", label: t.lang.no },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-0.5">
      <Globe className="ml-2 h-4 w-4 text-muted-foreground" aria-hidden />
      {options.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={
            locale === code
              ? "rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground"
              : "rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
          }
          aria-label={label}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
