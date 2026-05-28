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
