"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/marketing/LanguageToggle";
import { SirrLogo } from "@/components/marketing/SirrLogo";
import { buttonClassName } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { authUrl } from "@/lib/appLinks";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { key: "features", href: "/features" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
] as const;

export function MarketingHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const threshold = isHome ? 72 : 8;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const headerMode = isHome && !scrolled ? "transparent" : scrolled ? "solid-scrolled" : "solid-not-home";

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7279/ingest/f8e60b7d-d732-40b6-982e-cc9a4535192b", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "d16d9b" },
      body: JSON.stringify({
        sessionId: "d16d9b",
        runId: "post-fix-2",
        hypothesisId: "H1_H2_H4",
        location: "components/marketing/MarketingShell.tsx:36",
        message: "header state snapshot",
        data: {
          pathname,
          isHome,
          scrolled,
          scrollY: typeof window !== "undefined" ? window.scrollY : null,
          headerMode,
          mobileMenuOpen: open,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [pathname, isHome, scrolled, headerMode, open]);

  useEffect(() => {
    const headerEl = headerRef.current;
    const style = headerEl ? window.getComputedStyle(headerEl) : null;
    // #region agent log
    fetch("http://127.0.0.1:7279/ingest/f8e60b7d-d732-40b6-982e-cc9a4535192b", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "d16d9b" },
      body: JSON.stringify({
        sessionId: "d16d9b",
        runId: "post-fix-2",
        hypothesisId: "H1_H2_H3",
        location: "components/marketing/MarketingShell.tsx:71",
        message: "header computed style snapshot",
        data: {
          pathname,
          headerMode,
          scrolled,
          scrollY: typeof window !== "undefined" ? window.scrollY : null,
          computedPosition: style?.position ?? null,
          computedBackground: style?.backgroundColor ?? null,
          computedBorderTop: style?.borderTopWidth ?? null,
          computedBorderBottom: style?.borderBottomWidth ?? null,
          headerHeight: headerEl?.getBoundingClientRect().height ?? null,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [pathname, headerMode, scrolled]);

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7279/ingest/f8e60b7d-d732-40b6-982e-cc9a4535192b", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "d16d9b" },
      body: JSON.stringify({
        sessionId: "d16d9b",
        runId: "post-fix-2",
        hypothesisId: "H3",
        location: "components/marketing/MarketingShell.tsx:48",
        message: "header logo asset selection",
        data: {
          expectedRequestedLogo: "logo_without_back_only_logo_icon_white_-a16cc685-3f4e-47ec-8634-bd8dd666c120.png",
          actualLogoComponentSource: "/brand/sirr-logo-main.png",
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [isHome, scrolled]);

  useEffect(() => {
    const ctaCandidates = Array.from(document.querySelectorAll("a,button"))
      .map((node) => {
        const text = (node.textContent ?? "").trim().toLowerCase().replace(/\s+/g, " ");
        return { node, text };
      })
      .filter(({ text }) => {
        return (
          text.includes("start free") ||
          text.includes("go pro") ||
          text.includes("get pro") ||
          text.includes("send message") ||
          text.includes("start gratis") ||
          text.includes("velg pro")
        );
      })
      .slice(0, 8)
      .map(({ node, text }) => {
        const style = window.getComputedStyle(node as Element);
        return {
          text,
          tag: node.tagName.toLowerCase(),
          className: (node as Element).className,
          bg: style.backgroundColor,
          color: style.color,
          border: style.borderColor,
        };
      });

    // #region agent log
    fetch("http://127.0.0.1:7279/ingest/f8e60b7d-d732-40b6-982e-cc9a4535192b", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "d16d9b" },
      body: JSON.stringify({
        sessionId: "d16d9b",
        runId: "post-fix-4",
        hypothesisId: "H6_H7_H8",
        location: "components/marketing/MarketingShell.tsx:118",
        message: "cta style snapshot",
        data: {
          pathname,
          headerMode,
          ctaCandidates,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [pathname, headerMode]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "top-0 z-50",
        isHome ? "fixed left-0 right-0" : "sticky",
        isHome && !scrolled
          ? "border-transparent bg-transparent shadow-none backdrop-blur-none transition-none"
          : scrolled
          ? "border-b border-border/70 bg-background/95 shadow-[0_10px_28px_hsl(var(--shadow-soft)/0.12)] backdrop-blur-xl transition-all duration-300"
          : "border-b border-border/45 bg-background/72 backdrop-blur-xl transition-all duration-300",
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <SirrLogo href="/" className="max-w-[140px] sm:max-w-[175px]" />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isHome && !scrolled
                  ? "text-white hover:bg-white/15"
                  : "text-muted-foreground hover:bg-primary/8 hover:text-foreground",
                pathname === link.href && (isHome && !scrolled ? "bg-white/15 text-white" : "bg-primary/10 text-foreground"),
              )}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle tone={isHome && !scrolled ? "light" : "dark"} />
          <a
            href={authUrl()}
            className={cn(
              buttonClassName("ghost", "sm"),
              isHome && !scrolled ? "text-white hover:bg-white/15" : "hover:bg-primary/10",
            )}
          >
            {t.nav.login}
          </a>
          <a href={authUrl()} className={buttonClassName("default", "sm")}>
            {t.nav.startFree}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex rounded-md border p-2 lg:hidden",
            isHome && !scrolled
              ? "border-white/35 bg-white/10 text-white"
              : "border-border/70 bg-card text-foreground",
          )}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="section-tint border-t border-border/60 lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground",
                  pathname === link.href && "bg-primary/10 text-foreground",
                )}
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <LanguageToggle tone="dark" />
              <a href={authUrl()} className={buttonClassName("outline", "sm")}>
                {t.nav.login}
              </a>
              <a href={authUrl()} className={buttonClassName("default", "sm")}>
                {t.nav.startFree}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function MarketingFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="section-tint border-t border-border/70">
      <div className="container mx-auto grid gap-8 px-4 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <SirrLogo href="/" showTagline />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{t.brand.shortDescription}</p>
        </div>
        <FooterColumn
          title={t.footer.product}
          links={[
            { label: t.footer.links.features, href: "/features" },
            { label: t.footer.links.pricing, href: "/pricing" },
            { label: t.footer.links.faq, href: "/faq" },
          ]}
        />
        <FooterColumn
          title={t.footer.company}
          links={[
            { label: t.footer.links.about, href: "/about" },
            { label: t.footer.links.contact, href: "/contact" },
            { label: "Careers", href: "#" },
          ]}
        />
        <FooterColumn
          title={t.footer.legal}
          links={[
            { label: t.footer.links.privacy, href: "#" },
            { label: t.footer.links.terms, href: "#" },
            { label: t.footer.links.status, href: "#" },
          ]}
        />
      </div>
      <div className="border-t border-border/70">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground">
          <p>
            © {year} {t.brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#">{t.footer.links.linkedin}</a>
            <a href="#">{t.footer.links.x}</a>
            <a href="#">{t.footer.links.github}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-10", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      {eyebrow && (
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
