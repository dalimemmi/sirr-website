"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { SirrLogo } from "@/components/marketing/SirrLogo";
import { LanguageToggle } from "@/components/marketing/LanguageToggle";
import { buttonClassName } from "@/components/ui/button";
import { appUrl } from "@/lib/appLinks";
import { cn } from "@/lib/cn";

export function MarketingHeader() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-border/60 bg-card/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <SirrLogo showTagline href="/" />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a href={appUrl("/auth")} className={cn(buttonClassName("ghost", "sm"))}>
            {t.landing.signIn}
          </a>
          <a href={appUrl("/auth?mode=signup")} className={cn(buttonClassName("default", "sm"))}>
            {t.landing.getStarted}
          </a>
        </div>
      </div>
    </header>
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        {t.landing.badge}
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        {t.landing.heroTitle}{" "}
        <span className="text-primary">{t.landing.heroHighlight}</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.landing.heroSubtitle}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href={appUrl("/auth?mode=signup")} className={cn(buttonClassName("default", "lg"), "shadow-md")}>
          {t.landing.getStarted}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <a href="#how-it-works" className={cn(buttonClassName("outline", "lg"))}>
          {t.landing.howItWorks}
        </a>
      </div>
    </section>
  );
}

export function MarketingFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-10 text-center">
      <div className="flex justify-center">
        <SirrLogo showTagline href={null} />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        © {year} {t.brand.name}
      </p>
    </footer>
  );
}
