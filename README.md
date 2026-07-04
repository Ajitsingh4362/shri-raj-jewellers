# Shri Raj Jewellers — Website

Static catalog site for Shri Raj Jewellers (Gold, Silver & Diamond),
6/69 Tilak Nagar, New Delhi — built with Next.js (static export) +
Tailwind CSS v4. No ecommerce/checkout — every CTA routes to a
WhatsApp enquiry or a phone call, by design.

## Stack

- Next.js 16 (App Router), `output: "export"` — pure static HTML/CSS/JS
- Tailwind CSS v4 (CSS-first theme in `src/app/globals.css`)
- lucide-react for utility icons; jewellery category icons and the
  hallmark seal are hand-drawn SVG components (no stock photography used)
- Fonts: Cinzel (display) + Work Sans (body), loaded via Google Fonts `<link>`

## Run locally

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

Output goes to `out/`. Deploy that folder to Cloudflare Pages
(build command `npm run build`, output directory `out`) — no
adapter needed since this is a static export, not SSR.

## Confirm before going live

- **Offers section** (`src/components/Offers.tsx`): kept generic on
  purpose. The "2% / 3% making charges till June" Instagram post looked
  time-bound and may already be expired — swap in whatever offer is
  currently running.
- **Store hours** (`src/components/Contact.tsx`): only Saturday
  (11:00 AM-8:00 PM) and the Wednesday weekly-off were visible in the
  source screenshots. Other days currently say "please call ahead" -
  confirm actual hours with the shop and update.
- **Product photography**: category cards use simple gold line-art
  icons as placeholders instead of real photos. Swap in real product
  shots whenever the shop can share high-res images.
- **Instagram**: the section links out to @shrirajjewellers_ rather
  than embedding a live feed. Can upgrade to an embedded widget later
  if wanted.

## Security note

This repo was pushed using a GitHub token that was shared in chat -
please make sure it's already been revoked/rotated from GitHub
Developer Settings.
