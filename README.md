# Enwis — Marketing Website (Phase 1: Landing Page)

Premium marketing site for **Enwis**, a digital assessment platform. This is the
public marketing site only — the actual product lives at `app.enwis.uz` and is
a separate application.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
Framer Motion · Radix primitives (Accordion, Tabs, Slot) · Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included in this phase

The full homepage (`/`) with all 15 sections from the brief: Hero, Problems,
Solutions, How It Works, Features, Interactive Product Preview, Organizations,
Security, Analytics, Pricing, Testimonials, FAQ, Final CTA — plus the global
Navbar and Footer, SEO metadata (`buildMetadata` in `src/lib/seo.ts`),
JSON-LD structured data, `sitemap.ts`, and `robots.ts`.

## Not yet built (next phase, per agreed plan)

These routes are linked from the nav/footer but not yet implemented —
building the landing page first was the agreed approach:

- `/product`, `/features` (built as standalone pages, per your choice)
- `/pricing`, `/b2b`, `/about`, `/contact`, `/faq`, `/privacy`, `/terms`
- `/news`, `/news/[slug]`

## Integration points (static-data phase)

Per the agreed approach, forms and blog content are structured with real,
final-shape data but no live backend wired up yet:

- **Contact form** (next phase): will use `react-hook-form` + `zod`, ready to
  POST to a route handler (`app/api/contact/route.ts`) — you'll need to plug
  in an email service (e.g. Resend) or your own backend there.
- **Blog** (next phase): content will live in `src/content/*` as structured
  data/MDX. Swap this for a real CMS (Sanity, Contentful, etc.) by replacing
  the data-fetching layer in one place.

## Design system

All brand tokens (colors, radii, shadows, fonts) are defined once in
`src/app/globals.css` under `@theme`, and in copy/content data in
`src/lib/constants.ts`. Change brand values in one place, everywhere updates.
