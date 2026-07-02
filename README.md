# Janin — Portfolio (Next.js)

Luxury single-page portfolio, converted from a static HTML build to Next.js 15 (App Router) + React 19 + TypeScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Structure

```
app/
  layout.tsx       Fonts (next/font: Fraunces, Figtree, Space Grotesk), metadata
  page.tsx         Composes all sections
  globals.css      Full design system (tokens, sections, animations)
components/
  Nav.tsx          Sticky glass nav + mobile menu        (client)
  Hero.tsx         Headline animation, parallax portrait (client)
  Marquee.tsx      Scrolling Strategy × Story band       (server)
  About.tsx        Bio, timeline, animated stats         (server)
  Skills.tsx       Four discipline cards                 (server)
  Campaigns.tsx    Featured campaign case cards          (server)
  Gallery.tsx      Masonry social gallery                (server)
  CaseStudies.tsx  Two 9-step method case studies        (server)
  Dashboard.tsx    KPI counters + line/bar/donut charts  (client)
  Testimonials.tsx Client quotes                         (server)
  Services.tsx     Eight service cards                   (server)
  Contact.tsx      Contact links + demo form             (client)
  Footer.tsx       Footer + socials                      (server)
components/Reveal.tsx   Scroll-reveal wrapper (IntersectionObserver)
components/Counter.tsx  Animated count-up number
hooks/useInView.ts      In-view + reduced-motion hooks
```

## Customising

- Replace the portrait placeholders in `Hero.tsx` and `About.tsx` with real photos (e.g. `next/image`).
- Update `hello@janin.com`, LinkedIn, and CV links in `Contact.tsx` / `Footer.tsx`.
- All section content lives in plain data arrays at the top of each component — edit there.
- Design tokens (colors, radii, shadows, type) are CSS variables at the top of `app/globals.css`.
- The contact form is a front-end demo; wire `send()` in `Contact.tsx` to a route handler or a service like Formspree/Resend.
