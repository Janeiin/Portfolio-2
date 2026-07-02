# THIRD HORIZON

The digital presence of a boutique strategy and marketing consultancy.
Built with Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn style components and Framer Motion.

## Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 15 (App Router)             |
| UI         | React 19, TypeScript                |
| Styling    | Tailwind CSS, custom design tokens  |
| Components | shadcn/ui patterns (`components/ui`)|
| Motion     | Framer Motion                       |
| Icons      | Lucide                              |
| Fonts      | Cormorant Garamond + Inter (next/font) |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo at vercel.com/new. No configuration is required.
3. Update `siteConfig.url` in `lib/data.ts` to your production domain so the sitemap, robots and Open Graph metadata resolve correctly.

## Structure

```
app/                  Routes (App Router)
  page.tsx            Home
  services/           Services
  work/               Selected Work + case study detail pages
  founder/            Founder story
  insights/           Insights + article pages
  contact/            Contact
  sitemap.ts          Generated sitemap
  robots.ts           Robots rules
components/
  ui/                 shadcn style primitives (button, card, input, textarea)
  site/               Navbar, footer, container, section title
  motion/             FadeIn, TextReveal, Counter, HorizonLine
  sections/           Page sections (hero, services, philosophy, work, stats…)
lib/
  data.ts             All site content: services, work, insights, testimonials
  utils.ts            cn() class helper
```

## Editing content

All copy lives in `lib/data.ts`. Add a case study or insight by appending to
the relevant array; routes, sitemap entries and cards are generated
automatically.

## Photography

The design ships with abstract gradient treatments as placeholders. To use
photography, drop images into `public/` and replace the gradient `div`s in
`components/sections/founder-intro.tsx`, `app/founder/page.tsx` and
`app/work/[slug]/page.tsx` with `next/image`. Unsplash is already whitelisted
in `next.config.ts` for remote images.

## Design system

- Palette: warm pearl, soft stone, champagne silver, off white, deep burgundy, muted wine, graphite, near black.
- Type: Cormorant Garamond for display, Inter for body.
- Signature motif: the horizon line, a thin rule that draws itself across sections as they enter view.
- Motion: soft fades, line by line text reveals, animated statistics, gentle card lifts. Reduced motion is respected globally.
