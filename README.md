# Sirr website

Public marketing site for [Sirr](https://sirr.no) — AI Career Intelligence. Phase 1: homepage only.

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
| `NEXT_PUBLIC_APP_AUTH_URL` | Direct auth URL override (recommended: `https://nestesteg.vercel.app/auth`) |

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
   - `NEXT_PUBLIC_SITE_URL` → your website domain (e.g. `https://sirr-website.vercel.app`)
   - `NEXT_PUBLIC_APP_URL` → sirr-app URL (e.g. `https://nestesteg.vercel.app`)
3. Deploy. No Supabase or server secrets required.

## Architecture

- **Next.js App Router** — static homepage, EN/NO i18n
- **No backend** — all CTAs point to `NEXT_PUBLIC_APP_URL/auth`
- Future pages (Pricing, Features, About, etc.) will be added here
