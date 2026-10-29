# Content the owner must supply

Every slot below is already built and wired up. Anything left empty is **hidden** (never faked). All values live in `src/data/site.ts` or `src/data/content.ts`; search for `TODO(owner)`.

## Must do before launch
- [ ] **Form endpoint** → `site.form.endpoint` in `site.ts` (Web3Forms or Formspree public URL; instructions are in the comment). Until then, WhatsApp is the primary send button, with email and "Copy my message" as alternatives.
- [ ] **`SITE_URL` / `BASE_PATH`** when building (see README). Defaults to `example.com`.
- [ ] Add `Sitemap: https://yourdomain.com/sitemap-index.xml` to `public/robots.txt`.
- [ ] **Real production URLs** replacing the Altitude Arena / Trampoline *staging* links once they launch (`live` in `content.ts`).
- [ ] Confirm the **availability** pill is accurate (`site.availability`). Set `available: false` and `bookedUntil` if you are full, or `show: false` to hide it.

## Trust and proof (hidden until filled)
- [ ] **Response time** → `site.contact.responseTime` (e.g. `'a few hours'`). Shows in the hero pill, WhatsApp tooltip and form success screen.
- [ ] **1–3 real testimonials** with permission → `testimonials` in `content.ts` (ask Munshi users, Transcure leads, past clients).
- [ ] **Real-number highlights** → `site.highlights` (only numbers you can stand behind).
- [ ] **One real outcome sentence per project** → `outcome` in `content.ts`. Currently only Munshi and the two Altitude sites have one, taken from facts already in your old portfolio. RocketMSL and Macralytics are empty.
- [ ] **Permitted employer logos** → `site.experience[].logo` (put files in `public/`).
- [ ] **Before/after pairs**, real redesigns only → `beforeAfter` in `content.ts`. A concept redesign must set `concept: true`.

## Pricing and offers (hidden / "Get a quote" until filled)
- [ ] **Package prices ("starting from") and timelines** → `site.packages[].from` / `.timeline` (PKR numbers).
- [ ] **Currency rates** (units per 1 PKR) → `site.currencies.list[].rate`. USD and AED stay off until a rate is set.
- [ ] **Estimator unit prices** → `site.estimator` (hidden while all zero).
- [ ] **Free-fix period after launch** → `supportPeriod` in `content.ts` (e.g. `'14 days'`). Also review `deliverables` and remove anything you don't actually offer.

## Media
- [ ] **Booking link** (Calendly / Cal.com) → `site.booking`. Loads only when a visitor clicks.
- [ ] **Intro video** (30–60s, with captions) → `site.introVideo`.
- [ ] **Analytics** → `site.analytics` (Plausible, Umami or Cloudflare; no cookies needed).
- [ ] Refresh the **full-page screenshots** in `src/assets/projects/*-full.jpg` if the live sites change. Captured on 29 Oct 2026.

## Skipped on purpose
- **F20 Urdu/Arabic version.** The brief says "only if the owner wants it". It needs translated copy; say the word and it can be added as `/ur/`.
