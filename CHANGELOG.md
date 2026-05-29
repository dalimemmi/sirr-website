# Changelog

All notable changes to this project will be documented in this file.


## Unreleased

### 2026-05-29 08:27 (pre-commit from 1b6e13a)
- Updated `.env.example`
- Updated `README.md`
- Updated `lib/appLinks.ts`


### 2026-05-29 08:21 (pre-commit from ddc923b)
- Updated `app/favicon.ico`
- Updated `lib/seo/metadata.ts`


### 2026-05-28 22:54 (pre-commit from 2bf507f)
- Updated `.env.example`
- Updated `README.md`
- Updated `app/about/page.tsx`
- Updated `app/contact/page.tsx`
- Updated `app/faq/page.tsx`
- Updated `app/features/page.tsx`
- Updated `app/layout.tsx`
- Updated `app/page.tsx`
- Updated `app/pricing/page.tsx`
- Updated `app/robots.ts`
- Updated `app/sitemap.ts`
- Updated `components/seo/JsonLd.tsx`
- Updated `lib/seo/faq.ts`
- Updated `lib/seo/metadata.ts`
- Updated `lib/seo/site.ts`
- Updated `public/llms-full.txt`
- Updated `public/llms.txt`
- Updated `public/og-1200x630.png`
- Updated `public/site.webmanifest`


### 2026-05-28 17:22 (pre-commit from f53d7ab)
- Updated `components/marketing/HomePage.tsx`
- Updated `public/hero/sirr-hero-background.png`


### 2026-05-28 17:15 (pre-commit from 49aa2dc)
- Updated `components/marketing/HomePage.tsx`


### 2026-05-28 16:17 (pre-commit from 8f89285)
- Updated `components/LanguageProvider.tsx`


### 2026-05-28 15:49 (pre-commit from 888cdbe)
- Updated `.githooks/pre-commit`
- Updated `.github/workflows/changelog-guard.yml`
- Updated `README.md`
- Updated `app/about/page.tsx`
- Updated `app/contact/page.tsx`
- Updated `app/faq/page.tsx`
- Updated `app/features/page.tsx`
- Updated `app/globals.css`
- Updated `app/layout.tsx`
- Updated `app/page.tsx`
- Updated `app/pricing/page.tsx`
- Updated `app/sitemap.ts`
- Updated `components/LanguageProvider.tsx`
- Updated `components/marketing/HomePage.tsx`
- Updated `components/marketing/LanguageToggle.tsx`
- Updated `components/marketing/MarketingShell.tsx`
- Updated `components/marketing/PageScaffold.tsx`
- Updated `components/marketing/SirrLogo.tsx`
- Updated `components/ui/button.tsx`
- Updated `lib/appLinks.ts`
- Updated `lib/i18n/en.ts`
- Updated `lib/i18n/no.ts`
- Updated `package.json`
- Updated `public/brand/sirr-logo-main.png`
- Updated `public/hero/sirr-hero-poster.png`
- Updated `public/hero/sirr-hero.mp4`
- Updated `public/marketing/features/ai-analytics.png`
- Updated `public/marketing/features/application-tracker.png`
- Updated `public/marketing/features/career-plan.png`
- Updated `public/marketing/features/chrome-extension.png`
- Updated `public/marketing/features/cv-cover-letter.png`
- Updated `public/marketing/features/match-score.png`
- Updated `public/marketing/features/support-workspace.png`
- Updated `scripts/auto-changelog.mjs`
- Updated `scripts/install-git-hooks.mjs`


This project follows a simple, date-based changelog format.

## 2026-05-28

### Added
- Initial project scaffold from Create Next App.
- Sirr marketing homepage (Phase 1) with section-based landing layout.
- English/Norwegian localization dictionaries and client-side language toggle.
- CTA routing helpers to forward traffic to `NEXT_PUBLIC_APP_URL`.
- SEO baseline: metadata, Open Graph/Twitter tags, `sitemap.xml`, and `robots.txt`.
- Brand/public assets (favicons, lockup/icon, Open Graph image, web manifest).

### Changed
- Replaced default starter content with Sirr-specific marketing content and styling.
- Updated `README.md` with setup, environment variables, deployment, and architecture notes.

### Notes
- Product application code lives in the separate `sirr-app` repository.
