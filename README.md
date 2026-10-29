# Sohaib Haseeb: freelance portfolio (Astro)

A single-page, client-focused portfolio built with [Astro](https://astro.build). Static output, no runtime framework, deployable to GitHub Pages or any static host. The visual language (dark surfaces, Space Grotesk / Inter / JetBrains Mono, blue-to-rose accent) is carried over from the existing portfolio.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # type check (astro check) + production build to dist/
npm run preview   # serve dist/ locally
```

## What's configurable

Everything optional is **hidden until you fill it in**. See [CONTENT_TODO.md](CONTENT_TODO.md) for the full checklist. In short, `src/data/site.ts` controls availability pill, response time, form endpoint, booking link, intro video, analytics, highlights, experience strip, packages, currency rates and the estimator. `src/data/content.ts` controls services, projects (with `outcome`, `category`, `imageFull`), testimonials, before/after pairs, deliverables and the quiz.

## Where to edit things

| What | File |
| --- | --- |
| Email, WhatsApp, GitHub, LinkedIn, SEO title/description, form service & budget options, form endpoint | `src/data/site.ts` |
| Services, projects, "why work with me", process steps, tech list, FAQ | `src/data/content.ts` |
| Colours, fonts, spacing tokens | `src/styles/global.css` (`:root`) |
| Favicon, social preview image | `public/favicon.svg`, `public/og.png`, `public/apple-touch-icon.png` |
| Portrait | `src/assets/portrait.jpg` (imported in `src/components/About.astro`) |

The email, phone and social links were taken from your existing portfolio. Change them in `site.ts` if they are out of date. Set `whatsapp` to `''` to hide WhatsApp everywhere (including the floating button).

## Replacing project screenshots and links

1. Put the image in `src/assets/projects/`.
2. In `src/data/content.ts`, import it and set `image` (and optionally `image2`) and `imageAlt` on the project.
3. Set `live` (and `liveLabel`) only if a public URL exists. A project without `live` shows no demo button. `kind` must honestly be one of: Live product, Client website (team work), Personal project, Academic project.

Projects without an image show a clearly labelled "Screenshot coming soon" placeholder.

## Making the enquiry form deliver messages

Out of the box there is **no backend**. The form validates input, then opens WhatsApp (main button) with the enquiry pre-filled. "Email instead" and "Copy my message" are alternatives for phones without a mail app, and the interface says plainly that nothing has been sent yet. Nothing is claimed as "sent" until the visitor presses send.

To receive submissions directly, create a form on a service such as Formspree, Web3Forms or Getform and paste its **public form URL** into `form.endpoint` in `src/data/site.ts`. The form then POSTs there and shows loading, error and a full success screen. For Web3Forms add your (public) access key under `form.extraFields`. Do not put private API keys in this repo; everything under `src/` ships to the browser. A hidden honeypot field filters basic bots, and most form services add their own spam protection (enable it in their dashboard).

## Deployment

Set the URL at build time with environment variables (used for canonical URLs, Open Graph, sitemap and asset paths):

```bash
# GitHub Pages project site, e.g. https://USER.github.io/REPO
SITE_URL=https://USER.github.io BASE_PATH=/REPO npm run build

# Custom domain or user site
SITE_URL=https://yourdomain.com BASE_PATH=/ npm run build
```

Publish the `dist/` folder. For GitHub Pages, a typical workflow is the official `withastro/action` with the same two variables set in the build step. Defaults are `https://example.com` and `/`, so **set them before launch**.

After deploying:

- Add `Sitemap: https://yourdomain.com/sitemap-index.xml` to `public/robots.txt`.
- `public/og.png` (1200×630) and `public/apple-touch-icon.png` are included. Replace them if you want a different preview image.

## Notes on content

- No testimonials, client counts, ratings or prices are shown, because none were supplied.
- Projects from the existing portfolio were used where verifiable. "Wellness Wise" and "InternnCraft Company Portal" were not found there, so they are not included. Add them to `projects` in `content.ts` once you have details and links.
- Altitude Arena / Trampoline links point to staging URLs from the existing portfolio and may change.
