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
- **Instagram embeds** (`src/components/InstagramCTA.tsx`): the 3 post
  slots use placeholder URLs (`REPLACE_WITH_POST_1/2/3`). In the
  Instagram app, open a real post/reel -> Share icon -> Copy Link, and
  paste it in. This uses Instagram's own official embed script, so no
  API key or account login is needed for this part.
  If you'd rather have posts update automatically without editing code
  every time, that needs a widget service (e.g. Elfsight, SnapWidget)
  connected to the shop's Instagram account directly by the owner -
  happy to wire that in once it's connected.

## Security note

This repo was pushed using a GitHub token that was shared in chat -
please make sure it's already been revoked/rotated from GitHub
Developer Settings.
