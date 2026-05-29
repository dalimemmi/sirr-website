# Sirr website

Public marketing site for [Sirr](https://sirr.no) — AI Career Intelligence.

The product app lives in the separate **sirr-app** repository.

## Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | This site's public URL (SEO, sitemap) |
| `NEXT_PUBLIC_APP_URL` | Sirr app URL for Sign in / Get started CTAs |
| `NEXT_PUBLIC_APP_AUTH_URL` | Direct auth URL override (recommended: `https://app.sirr.no/auth`) |

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Changelog

See `CHANGELOG.md` for project history and notable changes.

Changelog updates are automated via a local Git `pre-commit` hook:

- On each commit, staged file changes are appended under `## Unreleased` in `CHANGELOG.md`.
- The hook stages `CHANGELOG.md` automatically before commit completes.
- If hooks are missing, run `npm run prepare` to reinstall them.

GitHub also enforces changelog updates on pull requests via `.github/workflows/changelog-guard.yml`.

## Deploy (Vercel)

1. Create a new Vercel project from `dalimemmi/sirr-website`.
2. Set environment variables (Production + Preview):
   - `NEXT_PUBLIC_SITE_URL` → `https://sirr.no` (production)
   - `NEXT_PUBLIC_APP_URL` → `https://app.sirr.no`
   - `NEXT_PUBLIC_APP_AUTH_URL` → `https://app.sirr.no/auth`
3. Deploy. No Supabase or server secrets required.

## Architecture

- **Next.js App Router** — static marketing pages, EN/NO i18n (client toggle)
- **No backend** — all CTAs point to `NEXT_PUBLIC_APP_AUTH_URL` or `NEXT_PUBLIC_APP_URL/auth`

## SEO and LLM discoverability

Production SEO is configured for `https://sirr.no`:

- Metadata helper: `lib/seo/metadata.ts` (Norwegian-first titles, Open Graph, Twitter, canonical URLs)
- Structured data: `components/seo/JsonLd.tsx` (Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList)
- `public/llms.txt` and `public/llms-full.txt` for AI crawler context
- `app/sitemap.ts` and `app/robots.ts` (includes explicit allow rules for major AI crawlers)
- Social preview image: `public/og-1200x630.png` (1200×630 for LinkedIn)

After deploy, verify:

- `https://sirr.no/sitemap.xml`
- `https://sirr.no/robots.txt`
- `https://sirr.no/llms.txt`
- LinkedIn Post Inspector for homepage OG tags
