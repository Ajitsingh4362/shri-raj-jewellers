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

## Hero background video

`src/components/Hero.tsx` plays `public/hero-reel.mp4` full-bleed
(autoplay, muted, loop) with a dark overlay so the gold text stays
legible, plus `public/hero-poster.jpg` as the instant-paint frame
before the video buffers. Source clip was vertical (1080x1920, typical
Reel export) — compressed from 18.6MB HEVC down to ~4MB H.264 with
audio stripped (it plays muted anyway).

Since the source is vertical, on wide desktop screens `object-cover`
zooms into a centered horizontal slice rather than showing the full
frame — on phones (where most local customers will actually view this)
it sits much closer to the original framing. Preview the live deploy
and ping me if the crop needs nudging (`object-position` can shift the
focal point) or if you'd rather swap to a shorter trimmed loop.

## Today's Rate widget (built, currently hidden)

`src/components/RateTicker.tsx` + `src/data/rates.ts` exist and work,
but the widget is skipped from the page for now — not deleted. To turn
it back on: import `RateTicker` in `src/components/Hero.tsx` and drop
`<RateTicker />` back above the "Tilak Nagar · New Delhi" line. Fill
real numbers in `rates.ts` first (see comments there) — no free,
reliable, India-accurate live rate API exists without a paid
subscription (checked IBJA, GoldAPI, Metals-API — all paid or
global-spot-only), so this stays a manually-updated "board" rather
than an auto-fetching ticker.

## Shop By Material (auto-scroll rows)

New section between the trust strip and the gallery: one auto-scrolling
row per category (Diamond, Gold, Silver, Bridal), alternating scroll
direction, each item a circular icon badge that links to the gallery
below. Data comes from the same `src/data/collectionItems.ts` used by
the gallery, so adding an item there shows up in both places
automatically. Row order/pairing logic lives in
`src/components/ShopByMaterial.tsx`.

## Gallery photos

Each of the 4 categories (Gold, Silver, Diamond, Bridal) now shows a
representative photo across its cards — sourced from Pexels (free for
commercial use, no attribution required). These are NOT photos of
Shri Raj Jewellers' actual pieces — they're stand-in category imagery,
same as most small jewellery sites use before a full product shoot.
Didn't use the 2 Instagram posts you shared since those weren't the
shop's own content (checked with you first) — using another brand's
specific real product photo would misrepresent what's actually in
stock here, on top of the copyright issue.

To swap in real Shri Raj Jewellers photos later: edit the
`categoryImage` map in `src/components/Collections.tsx` (4 URLs total,
one per category) or extend it to a per-item map if you want a unique
photo for each of the 13 cards instead of one shared per category.

## Product gallery

`src/components/Collections.tsx` now has 13 items across Gold, Silver,
Diamond and Bridal with filter tabs, still using hand-drawn icon
placeholders (no stock photos). Add more items to the `items` array
any time — each just needs an icon, title, category and one-line
description.

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
- **Instagram embeds** (`src/components/InstagramCTA.tsx`): now wired
  to 3 real reels from @shrirajjewellers_. Swap any of the 3 whenever
  you want to feature something newer — same Share -> Copy Link method.
  This uses Instagram's own official embed script, so no API key or
  account login is needed for this part.
  If you'd rather have posts update automatically without editing code
  every time, that needs a widget service (e.g. Elfsight, SnapWidget)
  connected to the shop's Instagram account directly by the owner -
  happy to wire that in once it's connected.

## Security note

This repo was pushed using a GitHub token that was shared in chat -
please make sure it's already been revoked/rotated from GitHub
Developer Settings.
