# MARU Tour — marutour.com

Production-ready marketing website for MARU Tour, built with Next.js 14
(App Router), TypeScript and Tailwind CSS. Configured for one-click
deployment to Vercel.

## Stack

- Next.js 14 (App Router, `next/image`, metadata API, `sitemap.ts` / `robots.ts`)
- TypeScript
- Tailwind CSS
- Zero external UI libraries — all components are hand-built and reusable

## Project structure

```
app/                  Routes (App Router)
  business/            /business
  destinations/        /destinations
  partners/            /partners, /partners/supplier, /partners/distribution
  about/                /about
  contact/              /contact
  api/contact/          Contact form submit handler (placeholder)
components/           Reusable UI components (Navbar, Footer, cards, etc.)
lib/
  site-config.ts       Contact details, nav labels, social links — EDIT HERE
  content.ts           Destinations, business copy, partner benefits
public/images/         Logo assets (icon, white icon, favicon)
```

## 1. Run locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## 2. Edit content

- **Contact details, WhatsApp number, nav labels** → `lib/site-config.ts`
- **Destinations, business copy, partner lists** → `lib/content.ts`
- **Images** → replace the Unsplash placeholder URLs in `lib/content.ts` and
  `app/page.tsx` with your own photography once available (drop files into
  `public/images/` and reference them with a leading `/`).
- **Logo** → `public/images/maru-icon.png` (color, light backgrounds) and
  `maru-icon-white.png` (white, dark backgrounds). Swap these for updated
  exports from your brand file at any time — same filenames, no code change
  needed.

## 3. Deploy to Vercel

### Option A — Vercel dashboard (recommended for first deploy)

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — leave the default build settings
   (`next build`, output detected automatically). No environment variables
   are required to build; see below if you wire up the contact form.
4. Click **Deploy**. Your site goes live at `<project>.vercel.app`.
5. Go to **Project → Settings → Domains** and add `marutour.com` (and
   `www.marutour.com`, redirecting to the apex or vice versa). Vercel will
   show the DNS records (an `A` record or `ALIAS`/`CNAME`, depending on your
   DNS provider) to add at your domain registrar.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel          # first run: links/creates the project, deploys a preview
vercel --prod   # deploys to production (marutour.com once domain is attached)
```

### `vercel.json`

Already included at the project root. It pins the framework to Next.js and
sets the default function region to `dxb1` (Dubai) for lower latency to
Middle East / Asia traffic — adjust or remove the `regions` field if your
Vercel plan doesn't support custom function regions, or if most traffic is
elsewhere.

### Environment variables

None are required for the site to build and run as-is. `.env.example`
lists optional variables for wiring the contact form to a real email
provider (see below). Copy any you use into **Vercel → Project → Settings →
Environment Variables**, and into a local `.env.local` for development.

## 4. Contact form

`app/api/contact/route.ts` currently validates and logs submissions — it
does not send email yet. Before launch, connect it to an email/CRM
provider, for example:

```ts
// npm install resend
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "MARU Tour <noreply@marutour.com>",
  to: process.env.CONTACT_TO_EMAIL!,
  subject: `New inquiry: ${body.inquiryType ?? "General"}`,
  text: JSON.stringify(body, null, 2),
});
```

## 5. Performance & SEO

- All images use `next/image` for automatic optimization and lazy loading.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically from `lib/site-config.ts`.
- Per-page metadata is set via each route's `export const metadata`.
- Run `npm run build` before shipping changes to confirm there are no type
  or lint errors (Vercel runs the same build).

## Notes

- No company size, revenue, customer counts, certifications or years-in-
  operation figures are stated anywhere on the site, per the content
  brief — only qualitative descriptions are used. Add real figures later
  by editing `lib/content.ts`.
- Destination photography currently uses royalty-free Unsplash placeholder
  images loaded by URL. Swap in licensed/owned photography before launch.
