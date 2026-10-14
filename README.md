# OdestaSoft — Next.js / TypeScript site

Full rebuild of the OdestaSoft marketing site on Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## What's in here

- **App Router** with static generation — every service and case study page is generated
  from `src/data/*.ts` via `generateStaticParams`, so adding a new service or case study
  means editing one data file, not creating a new page.
- **Dark / light mode** via `next-themes`, using the real Odesta brand palette
  (`#0F172A` navy, `#10B981` green).
- **Framer Motion** for scroll-reveal animation and the mobile menu slide-in panel.
- **Real brand assets** (`public/icon-mark.png`, `logo-primary.png`, `logo-dark.png`,
  `favicon`, `apple-icon`) cropped from the brand sheet you provided, plus a generated
  1200×630 `og-image.jpg` for social sharing.
- **SEO**: per-page `generateMetadata` (title/description/canonical/OG/Twitter),
  Organization + Service JSON-LD in the root layout, dynamic `sitemap.ts` and `robots.ts`
  covering every generated route automatically.

## ⚠️ Before you run this

This project was written in a sandboxed environment **with no network access**, so I could
not run `npm install` or `next build` to verify it compiles. I hand-checked everything I
could without a package registry:

- Ran the TypeScript compiler (`tsc --noEmit`) against every file — zero syntax errors.
- Cross-checked every `@/` import against actual exports — all resolve correctly.
- Verified every Tailwind class against the real spacing/color scale (fixed several
  invalid arbitrary values like `p-6.5` and a leftover `text-accent-2` typo during the
  build).

That's a strong signal the code is structurally sound, but it is **not** a substitute for
an actual build. Please treat `npm run build` below as the real verification step, and
open an issue/fix any type errors that only `next build` (with real `@types` packages)
would catch — most likely minor prop-type mismatches, if any.

## Setup

```bash
npm install
```

### Set up the contact form (required for it to actually send email)

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and fill in real SMTP credentials — the file has three
worked examples (your own domain email, Gmail with an App Password, or a
transactional email service like SendGrid/Resend/Postmark). At minimum you
need `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_TO_EMAIL`.

Without this, the form will show a clear error to the user instead of
silently failing — but it won't send anything until these are set.

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

Remember to set the same environment variables (`SMTP_HOST`, `SMTP_USER`,
etc.) in your hosting provider's dashboard — `.env.local` is only read
locally and is gitignored on purpose.

## Before you deploy — replace these placeholders

1. **Trust bar & About page claims** — "10+ Years Engineering Experience," "100+
   Successful Projects," and the About page timeline are written exactly as specified in
   the original brief. Verify these are accurate or replace them before publishing —
   inaccurate years-in-business or project-count claims carry real false-advertising risk.
2. **Case studies & testimonials** (`src/data/caseStudies.ts`, `src/data/testimonials.ts`)
   — these are illustrative drafts. Replace with real, client-approved details and
   permissioned quotes.
3. **Team section** (`src/app/about/page.tsx`) — currently role-based cards with no
   invented personal names. Add real names, photos, and bios.
4. **Contact form backend** (`src/app/api/contact/route.ts`) — functional now, but
   needs real SMTP credentials in `.env.local` (see setup steps above) before it can
   actually send email. Without them it fails gracefully with a clear error message
   instead of pretending to succeed.
5. **Calendly link** — set `CALENDLY_LINK` at the top of `src/components/ContactForm.tsx`.
6. **Domain** — `src/data/nav.ts` (`siteConfig`) sets `https://www.odestasoft.com`; update
   if the final domain differs, since it feeds every canonical URL, sitemap entry, and
   OG tag.
7. **Phone number / physical address** — not yet included; add to `siteConfig` and the
   footer if you want them displayed.

## What changed in this revision

- **Logo is larger** in the nav and footer (30px → 42px icon, bigger wordmark) to read clearly at a glance.
- **Contact form is now functional.** Submissions POST to `src/app/api/contact/route.ts`, which emails the details to `CONTACT_TO_EMAIL` via SMTP (Nodemailer). Includes a honeypot field for basic bot filtering, and real loading/success/error states in the UI.
- **Active nav item is now visible** — the current page's nav link is bolded, green, and underlined (desktop), with a dot marker in the mobile menu. Driven by Next.js's `usePathname()`, so it's automatically correct on every route.
- **Every nav item is now its own page** instead of a same-page anchor: `/about`, `/services`, `/solutions`, `/case-studies`, `/insights`, `/contact` are real routes with their own metadata, each in the sitemap. `/services/[slug]` and `/case-studies/[slug]` (the 14 + 3 detail pages) still work exactly as before.
- **The homepage keeps all of its original content** — full services grid, full case studies, full solutions, testimonials, process, FAQ, contact form, etc. — per your request that it stay content-rich. The new dedicated pages exist for direct navigation and stronger per-topic SEO; they're not homepage replacements.

## Project structure

```
src/
  app/
    layout.tsx                     Root layout — fonts, theme provider, JSON-LD
    page.tsx                        Homepage (full content, unchanged in scope)
    about/page.tsx
    services/page.tsx               NEW — Services hub (all 14, dedicated page)
    services/[slug]/page.tsx         Dynamic — one route for all 14 services
    solutions/page.tsx              NEW — Solutions hub
    case-studies/page.tsx           NEW — Case Studies hub (all 3, dedicated page)
    case-studies/[slug]/page.tsx     Dynamic — one route for all 3 case studies
    insights/page.tsx               NEW — Insights hub
    contact/page.tsx                NEW — Dedicated Contact page (form + FAQ)
    api/contact/route.ts            NEW — Email-sending backend for the contact form
    sitemap.ts / robots.ts           Now includes all 5 new routes
  components/
    Nav.tsx                          Now with active-route highlighting + bigger logo
    SectionHead.tsx / InsightCard.tsx / PageHeader.tsx   NEW shared components
    Footer, Hero, cards, forms, detail layouts (unchanged structure)
  data/
    solutions.ts / insights.ts       NEW — extracted so hub pages don't duplicate content
    services.ts, caseStudies.ts, testimonials.ts, faq.ts, nav.ts
  lib/seo.ts                         Metadata + JSON-LD builder helpers
  types/index.ts                      Shared TypeScript interfaces (now includes Solution, Insight)
public/                               Logo, favicon, OG image
.env.local.example                    NEW — SMTP setup template for the contact form
```

To add a 15th service or 4th case study, add one entry to the relevant array in
`src/data/` — the route, sitemap entry, metadata, and homepage/hub listing are
all generated automatically.
