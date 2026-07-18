# Recovery Backend Services — Website

A premium, animated marketing site built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before going live — please check these

1. **Brand colors** — I did not have your exact brand hex codes, so I used a
   placeholder premium navy / electric-blue / gold palette. Every color lives
   in ONE place: `tailwind.config.ts` (see the `brand` object at the top) and
   the CSS variables in `app/globals.css` (`:root` for dark mode, `.light` for
   light mode). Swap the 6 values there and the whole site updates.

2. **Photography** — There's no internet access in the environment that built
   this, so the hero and visual sections use a custom-built "live dispatch
   board" UI and an animated route-line motif instead of stock photos, per
   the brief's request to avoid generic stock imagery. If you'd like real
   photography (tow trucks, vehicles, your team) layered in, drop images into
   `/public` and swap them into `components/Hero.tsx` and other sections —
   happy to do this pass with you once you share real photos/logo.

3. **Contact form** — `components/Contact.tsx` currently shows a success
   state on submit but does not send an email yet. Wire it to a Next.js API
   route, or a service like Formspree/Resend, using the `email` field already
   collected. `siteConfig.email` in `lib/data.ts` is
   recoverybackendteam@gmail.com.

4. **Domain / SEO** — `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
   currently point to a placeholder domain (`recoverybackendservices.com`).
   Update to your real domain once registered.

5. **Portal logos** — `components/PortalLogos.tsx` uses styled text badges
   for RDN, Recovery Connect, ClearData, ClearPlan, RCM, and DRIVE (real
   third-party logos weren't available to embed safely — swap in official
   logo assets if you have usage rights/permission from each portal).

## Structure

- `app/` — routes, layout, global styles, sitemap/robots
- `components/` — one file per section (Hero, Services, FAQ, etc.)
- `components/ui/` — shared primitives (Button, AnimatedCounter, SectionHeading, RouteLine)
- `lib/data.ts` — all site copy/content in one place (services, FAQs, testimonials, etc.)
- `lib/theme-provider.tsx` — dark/light mode context

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel, Netlify, or any
Node host. `npm run build && npm run start` for a production build.
