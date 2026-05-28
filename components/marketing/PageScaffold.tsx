"use client";

import { MarketingFooter, MarketingHeader, SectionHeader } from "@/components/marketing/MarketingShell";

export function MarketingPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <section className="nest-gradient relative border-b border-border/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.13),transparent_34%)]" />
          <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          </div>
        </section>
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}

export function ContentSection({
  eyebrow,
  title,
  description,
  children,
  muted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "section-tint border-y border-border/60 py-16 md:py-20" : "py-16 md:py-20"}>
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  );
}
