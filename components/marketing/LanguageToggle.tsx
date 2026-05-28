"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { WebsiteLocale } from "@/lib/i18n";

export function LanguageToggle({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const options = useMemo<{ code: WebsiteLocale; label: string }[]>(
    () => [
      { code: "en", label: t.lang.en },
      { code: "no", label: t.lang.no },
    ],
    [t.lang.en, t.lang.no],
  );
  const selectedLabel = useMemo(() => options.find((opt) => opt.code === locale)?.label ?? "English", [locale, options]);

  useEffect(() => {
    const onDown = (event: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={
        tone === "light"
          ? "relative inline-flex text-sm font-medium text-white"
          : "relative inline-flex text-sm font-medium text-foreground"
      }
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-1 py-1 opacity-95 hover:opacity-100"
        aria-label={`Current language: ${selectedLabel}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="h-3.5 w-3.5 opacity-75" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.06em]">{locale}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
      </button>

      {open && (
        <div
          className={
            tone === "light"
              ? "absolute right-0 top-[calc(100%+6px)] min-w-24 rounded-lg border border-white/30 bg-slate-900/90 p-1 text-white backdrop-blur-md"
              : "absolute right-0 top-[calc(100%+6px)] min-w-24 rounded-lg border border-border bg-card p-1 text-foreground shadow-soft"
          }
        >
          {options.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
              className={
                locale === code
                  ? "block w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-[0.06em] opacity-100"
                  : "block w-full rounded-md px-2 py-1.5 text-left text-xs font-medium uppercase tracking-[0.06em] opacity-75 hover:opacity-100"
              }
              aria-label={label}
            >
              {code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
