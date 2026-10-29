# Prompt for Claude Code: Upgrade the portfolio for non-technical clients

> **How to use this file:** open Claude Code in this project folder and say
> *"Read `PORTFOLIO_FEATURES_PROMPT.md` and implement it phase by phase. Stop after each phase so I can review."*

---

## 1. Your role

You are a **senior front-end engineer and conversion-focused UI designer**. You build for an audience that is **not technical**: shop owners, clinic managers, restaurant owners, consultants and startup founders in Pakistan, the Gulf and abroad. They don't care about frameworks. They care about three questions, answered within 10 seconds:

1. **Can this person make *my* business look good?** (proof)
2. **Can I trust him?** (safety)
3. **What do I do next, and is it easy?** (action)

Every feature below exists to answer one of those questions faster, more visually and with less reading. When in doubt, **show, don't tell**.

---

## 2. Project context (read before changing anything)

- **Owner:** Sohaib Haseeb, freelance web developer, Lahore, Pakistan.
- **Stack:** Astro 7, static output, TypeScript, plain scoped CSS. **No** React/Vue/Tailwind. Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels).
- **Single page:** `src/pages/index.astro` assembles `Nav → Hero → Services → Work → WhyMe → Process → About → Tech → FAQ → Contact → Footer`.
- **Content lives in data files, not components:**
  - `src/data/site.ts`: contact details, socials, SEO, form config.
  - `src/data/content.ts`: services, projects, `alsoBuilt`, principles, steps, tech, FAQs.
- **Design tokens:** `src/styles/global.css` `:root` (dark palette, blue `#1a8cff` → violet → rose `#ff3cac` gradient, spacing `--s-*`, type `--t-*`, motion `--d-*`, `--ease-out`).
- **Already in place (keep it working):** skip link, focus styles, `prefers-reduced-motion`, scroll reveal via `[data-reveal]`, active-section nav highlight, accessible mobile menu with Escape, FAQ accordion, form validation with inline errors, honeypot, sitemap, OG tags.
- **Commands:** `npm run dev`, `npm run build` (runs `astro check` first, so it must pass), `npm run preview`.

---

## 3. Non-negotiable rules

1. **Honesty first.** The README says it plainly: no testimonials, client counts, ratings or prices were supplied. **Never invent** reviews, numbers, logos, prices, awards, "100+ happy clients", fake live-visitor counters or fake urgency ("only 2 slots left"). Build the *slot* for each trust feature, drive it from `content.ts`/`site.ts`, and **hide the section entirely when the data is empty**. Leave a clear `// TODO(owner):` comment.
2. **Company work stays labelled.** Projects built at Transcure / Purevi keep their `kind` and copyright note. You may restyle the note, not remove it.
3. **All new copy and settings go in `src/data/*.ts`**, never hard-coded in components, so the owner can edit without touching markup.
4. **Stay static and light.** No new UI framework. Small vanilla `<script>` blocks in components, like the existing ones. Any new dependency needs a one-line justification in your summary. Budget: **≤ 30 KB extra JS (gzipped) in total**, Lighthouse Performance ≥ 95, Accessibility = 100, CLS < 0.05 on mobile.
5. **Accessibility (WCAG 2.2 AA):** every interactive element is keyboard reachable, has a visible focus ring, has a 44×44px minimum target and an accessible name. Every animation respects `prefers-reduced-motion`. Text contrast ≥ 4.5:1.
6. **Mobile first.** Most clients will open a WhatsApp link to this site on a phone. Design and test at **360px** first, then 768px, 1280px and 1600px. No horizontal scroll at any width.
7. **Match the existing code style:** scoped `<style>` per component, design tokens instead of raw values, `data-*` hooks for scripts, terse CSS on one line per rule as in the current files.
8. **Content must never be invisible because of animation.** If JS fails or the tab is in the background, the hero and all sections must still be readable (see QA finding A1).

---

## 4. QA audit: what I found

### What already works well (protect it)
- Plain, jargon-free copy that leads with the client's problem ("Every small text or price change means calling a developer and waiting").
- Honest project labelling and a clear four-step process.
- A form with friendly validation messages and an honest "nothing has been sent yet" notice.
- Solid accessibility and reduced-motion foundations.

### What is costing you clients

| # | Finding | Why it hurts with non-tech clients | Severity |
|---|---|---|---|
| A1 | Hero text animates in from `opacity: 0`; `[data-reveal]` sections stay hidden until IntersectionObserver fires. In testing, the hero and later sections rendered **blank** for a period on first paint and on a mobile viewport. | A visitor from WhatsApp sees an empty dark screen and leaves. | **Critical** |
| A2 | The contact form has no backend (`form.endpoint` is empty). "Prepare email" opens a mail app, which many phone users have never set up. | The single most important action on the site can dead-end. | **Critical** |
| A3 | No floating/sticky WhatsApp or "Let's talk" button on mobile. The CTA is only in the hero, menu and bottom. | Pakistani and Gulf clients expect to tap WhatsApp at any moment. | High |
| A4 | The hero visual is a grey **wireframe** labelled "Illustrative layout". | It says "template", not "wow". Non-tech clients judge by what they see first. | High |
| A5 | No social proof of any kind: no testimonials, no "worked with" strip, no numbers. | "Can I trust him?" stays unanswered. | High |
| A6 | Services is six long text rows; Work cases are dense `dt/dd` lists; Why Me is text-only. | Non-tech readers skim. Walls of grey text on dark backgrounds read as "technical". | High |
| A7 | No pricing guidance at all; budget dropdown is PKR-only. | Clients fear the hidden cost and don't enquire. International clients don't think in PKR. | High |
| A8 | Copyright notices on project cards use a rose left-border box that looks like an **error/warning**. | Makes the strongest work look suspicious. | Medium |
| A9 | Project screenshots are static images; nothing to explore. No lightbox or zoom on mobile. | Missed "wow" moment exactly where proof matters. | Medium |
| A10 | Dark-only theme with a code-style mono font in labels. | Reads "developer portfolio" rather than "partner for my business". | Medium |
| A11 | `og.svg` as the social preview. WhatsApp, Facebook and LinkedIn ignore SVG. | The link preview, the very first impression when someone shares the site, is blank. | Medium |
| A12 | No 404 page, no structured data, no analytics, `SITE_URL` still defaults to `example.com`. | Weak in Google and no way to know what works. | Medium |
| A13 | No availability or response-time signal. | Clients don't know whether he is taking work or how fast he replies. | Low |

---

## 5. Features to build

Each feature has **Why** (client psychology), **Build** (what to do and where) and **Done when** (acceptance criteria). Work in phase order.

### Phase 1: Fix what's losing enquiries (P0)

#### F1. Content is always visible (fixes A1)
- **Why:** an empty first screen is the worst first impression possible.
- **Build:** Hero: change the `rise` animation so text starts at least at `opacity: 0.001` only with a JS class *and* finishes within 600ms. Better: animate only `transform` + a short opacity fade, and add a fallback `setTimeout` (1.5s) in `index.astro` that adds `.is-in` to every `[data-reveal]` still hidden. Elements already in the viewport on load get `.is-in` immediately.
- **Done when:** with JS disabled, with a throttled CPU (6×), and in a background tab, the full hero is readable within 1s and no section remains blank after scrolling.

#### F2. A contact flow that always delivers (fixes A2)
- **Why:** if the message doesn't arrive, nothing else on the site matters.
- **Build:** keep the current dual mode, but make the endpoint path first-class:
  - Document in `site.ts` how to add a Web3Forms / Formspree public endpoint (the owner pastes it).
  - When there is no endpoint, make **WhatsApp the primary button** and "Email instead" secondary, and add a "Copy my message" button that copies the composed text to the clipboard with a success toast. That works even without a mail app.
  - Add a **success screen** that replaces the form: a check-mark animation, "Thanks, {name}! I usually reply within {responseTime}.", and what happens next (3 short bullets).
  - Keep the honest "nothing has been sent yet" note in fallback mode.
- **Done when:** on a phone with no mail app the visitor can still reach Sohaib in ≤ 2 taps, and with an endpoint set the success screen shows and the form resets.

#### F3. Floating WhatsApp button and sticky mobile CTA bar (fixes A3)
- **Why:** the visitor should be one tap from a conversation at every scroll position.
- **Build:** new `src/components/QuickContact.astro`:
  - Mobile (< 860px): a slim bar fixed to the bottom, safe-area aware (`env(safe-area-inset-bottom)`), with **WhatsApp** (green, icon) and **Start a project** (scrolls to `#contact`). It appears after the hero leaves the viewport and hides while `#contact` is in view.
  - Desktop: a round WhatsApp button bottom-right with a tooltip "Chat on WhatsApp, usually replies within a few hours" (text from `site.ts`).
  - The pre-filled WhatsApp message includes the section the visitor was viewing ("Hi Sohaib, I saw your Altitude Arena project…") when it is triggered from a project card.
  - Hidden when `site.contact.whatsapp` is empty.
- **Done when:** it never covers form fields or the footer's last link, it is reachable by keyboard, and it does not cause layout shift.

#### F4. Social sharing preview (fixes A11)
- **Build:** generate a 1200×630 `public/og.png` (name, headline, gradient, portrait or Munshi screenshot) and point `ogImage` at it. Add `og:image:width/height`. Add `apple-touch-icon` (180×180 PNG).
- **Done when:** the link previews correctly in WhatsApp and LinkedIn's post inspector.

---

### Phase 2: The "wow" first impression (P1)

#### F5. "See your business here": a personalised live hero mockup (fixes A4) ★ signature feature
- **Why:** nothing wows a non-technical owner like seeing **their own business name** on a beautiful site in front of them. It turns an abstract service into "that could be mine".
- **Build:** replace the grey wireframe in `Hero.astro` with a polished, *styled* mini website inside the browser frame (real colours, a headline, a button, a photo-like gradient block, three cards). Under the hero CTAs add one input: **"Type your business name →"**. As they type (debounced), the mock site's URL bar (`yourbusiness.com` → `ahmedbakery.com`), logo and headline update live. Offer 3–4 one-tap **industry chips** (Restaurant, Clinic, Shop, Salon) that swap the mock's accent colour, icon and sample headline (copy and palettes from `content.ts`).
  - Clearly label it: "A quick preview. Your real site would be designed around your brand."
  - Keep the real Munshi phone screenshot overlapping it.
  - The chosen name pre-fills the "Business" field in the contact form and the WhatsApp message.
  - Reduced motion: no typing animation, instant swap.
- **Done when:** it works at 360px, nothing is sent anywhere (100% client-side), the input has a proper label, and Lighthouse stays ≥ 95.

#### F6. Availability and response-time badge (fixes A13)
- **Build:** a small pill in the hero eyebrow area: green pulsing dot + "Available for new projects · {month}" and "Usually replies within {responseTime}". Optional live **Lahore local time** ("It's 3:42 pm for me now"). All values in `site.ts`; `available: false` switches it to "Booked until {date}, join the waitlist".
- **Done when:** it reads correctly with JS off (server-rendered text; only the clock is JS).

#### F7. Light theme and theme toggle (fixes A10)
- **Why:** many business owners find bright, airy sites more trustworthy and "corporate". Keep dark as the signature but offer light.
- **Build:** add light tokens under `:root[data-theme="light"]` and honour `prefers-color-scheme`. Toggle in the nav (sun/moon icon, `aria-pressed`), saved in `localStorage` (wrapped in try/catch), applied by an inline script in `<head>` to avoid a flash. Update `theme-color`. Check every gradient, border and screenshot frame in both themes.
- **Done when:** no flash of the wrong theme, and both themes pass contrast checks.

#### F8. Interactive project showcase (fixes A8, A9)
- **Why:** proof is the strongest persuader, and exploring it should feel like play.
- **Build** in `Work.astro`:
  - **Scroll-in-frame:** desktop screenshots inside the browser frame slowly scroll top-to-bottom on hover/focus (use a tall full-page screenshot; the owner supplies `imageFull` in `content.ts`). On touch: a "Tap to scroll" hint, plus a manual scroll inside the frame.
  - **Lightbox:** tap any screenshot to open a fullscreen accessible `<dialog>` with swipe/arrow navigation, Escape to close, focus trapped and restored.
  - **Outcome-first card:** lead each card with one big plain sentence of *what changed for the client* (new `outcome` field; hide if empty, never invent). Move `dt/dd` details into the expandable area.
  - **Filter chips:** All · Business websites · Apps · AI, using a new `category` field. Animate with the View Transitions API where supported.
  - **Restyle the copyright note** as a neutral, small info line with an "ⓘ" icon. Same text, no warning colour.
  - Per-project button: "Want something like this? →" that opens WhatsApp with the project name pre-filled.
- **Done when:** the lightbox passes keyboard-only testing and the cards stay readable without expanding anything.

#### F9. Before/after redesign slider
- **Why:** "I can make your old site look like this" is instantly understood by anyone.
- **Build:** `BeforeAfter.astro` with a draggable divider (pointer + keyboard arrows, `role="slider"`, `aria-valuenow`). Data: `beforeAfter` array in `content.ts`. **Only real redesigns**; if none exist, the section doesn't render. A clearly labelled concept redesign of a public site may be used only if the owner adds it and it is labelled "Concept redesign, not commissioned".
- **Done when:** it works by touch, mouse and keyboard and is hidden when the data is empty.

---

### Phase 3: Trust and clarity (P1)

#### F10. Testimonials slot (fixes A5)
- **Build:** `Testimonials.astro`, placed after Work. Fields: `quote`, `name`, `role`, `company`, optional `photo`, `projectSlug`, `source` link (LinkedIn recommendation, Google review). Layout: one large featured quote + small cards. Optional WhatsApp-screenshot style cards (owner supplies real, permission-granted screenshots). **Renders nothing when the array is empty.** Add `// TODO(owner): ask Munshi users, Transcure leads and past clients for 1–2 sentences.`

#### F11. "Experience at" strip
- **Build:** a quiet strip under the hero: "Experience building websites at **Transcure** · **Purevi Tech Solutions**", with logos only if the owner adds permitted logo files. Wording must make clear these are employers/teams, not clients.

#### F12. Real-number highlights
- **Build:** a 3–4 tile row (e.g. "6 live websites shipped", "2+ years building for businesses", "Replies within 24h"). Numbers count up when scrolled into view (instant under reduced motion). **Values come from `site.ts` and the row hides if empty.** Do not compute or guess any number.

#### F13. Services you can scan in 5 seconds (fixes A6)
- **Build:** redesign `Services.astro` as a card grid (2 columns on tablet, 3 on desktop) with a custom line icon per service (add to `Icon.astro`), the title, the one-line **problem** in bold and a "Best for: shops, clinics…" line. Details expand on click/tap. Keep the existing data.
- Add a **"Which one do I need?" mini-quiz** (3 questions with tappable answers: *Do you have a website? / What should it do? / Do you want to edit it yourself?*). It recommends a service, scrolls to the form and pre-selects that service. Pure client-side.
- **Done when:** a first-time visitor can tell what each service is from the icon + title alone.

#### F14. Pricing guidance without fake prices (fixes A7)
- **Build:** a "Packages" section with 3 tiers (**Starter page · Business website · Custom app**) listing what's included, typical timeline and "Starting from …". Prices and timelines come **only** from `site.ts`. If a price is empty, show "Get a quote" instead. Add a currency switch (PKR / USD / AED) using rates the owner sets in `site.ts` (no live API), and also make the form's budget dropdown follow the selected currency.
- Optional **project estimator**: pick pages, CMS yes/no, extras → shows a *range* built from owner-defined unit prices, with the line "Estimate only. Final quote after we talk."
- **Done when:** with no prices configured, the section still looks complete and honest.

#### F15. "What you get" deliverables and guarantees
- **Build:** a visual checklist with icons: mobile-friendly design, basic SEO setup, contact form or WhatsApp button, speed-optimised, handover video or walkthrough, X days of free fixes after launch. Each item and the support period come from `content.ts`, so the owner only lists what he actually offers.

#### F16. Book a call
- **Build:** if `site.booking` (a Calendly/Cal.com URL) is set, add a "Book a free 15-min call" button in Contact and the hero. Load the embed **only on click** (no third-party script on page load). Hidden when empty.

---

### Phase 4: Delight and polish (P2)

#### F17. Micro-interactions (subtle, never distracting)
- Buttons: soft gradient glow on hover; arrow nudge (already present) everywhere.
- Cards: gentle 3D tilt toward the pointer (max 4°, desktop and fine pointers only).
- Section headings: gradient underline drawn on reveal.
- Scroll progress bar under the nav (2px gradient).
- Process timeline: the line "fills" as you scroll through the steps.
- All disabled under `prefers-reduced-motion` and on `pointer: coarse` where it makes sense.

#### F18. Hero background with life
- Replace the static grid with a slow, low-contrast animated gradient mesh or soft blurred orbs (CSS only, `transform`/`opacity` animations, paused when off-screen, off under reduced motion). Must not reduce text contrast.

#### F19. About section that feels human
- Add a short 30–60s intro video slot (`site.introVideo`, poster image, lazy, captions required), or a "A day in my work" photo strip. Add a signature-style SVG of his name under the bio. Add an "Urdu / English" note with a 🇵🇰 language chip; clients like knowing they can speak their own language.

#### F20. Optional Urdu (and later Arabic) version
- Only if the owner wants it: an `/ur/` route reusing components with translated `content.ts`, an RTL-aware layout (logical CSS properties), and a language switch in the nav. Valuable for local and Gulf clients.

#### F21. Custom 404 and finishing touches
- A friendly 404 page ("This page took a wrong turn") with links home and to WhatsApp.
- "Back to top" floating button after 2 screens of scroll (desktop only; on mobile the CTA bar covers it).
- Print stylesheet for clients who print the page to discuss with partners.

---

### Phase 5: Findability and measurement (P1, invisible but important)

#### F22. SEO and structured data (fixes A12)
- JSON-LD in `Base.astro`: `Person` + `ProfessionalService` (name, area served, services, sameAs links) and `FAQPage` generated from `faqs`.
- One `<h1>`, logical `h2/h3` order (verify after the new sections).
- Remind the owner in the summary to set `SITE_URL` and add the sitemap line to `robots.txt` (README already explains this).

#### F23. Privacy-friendly analytics
- If `site.analytics` (Plausible/Umami/Cloudflare domain) is set, load the script with `defer`. Track only: WhatsApp clicks, form submits, booking clicks, project "visit" clicks, quiz completions. No cookies and no banner needed.

---

## 6. Content the owner must supply

Create `CONTENT_TODO.md` listing every empty slot your work introduced, for example:

- [ ] Web3Forms/Formspree endpoint → `site.form.endpoint`
- [ ] Response time, availability month → `site.ts`
- [ ] 1–3 real testimonials (with permission)
- [ ] Package prices / "starting from" and currency rates
- [ ] Full-page screenshots for scroll-in-frame
- [ ] One real outcome sentence per project
- [ ] Before/after pairs (real redesigns only)
- [ ] Booking link, intro video, analytics domain
- [ ] Permitted employer logos
- [ ] Real production URLs replacing the Altitude staging links when they launch

---

## 7. QA checklist (run after every phase)

- [ ] `npm run build` passes (`astro check` has zero errors).
- [ ] Tested at 360, 390, 768, 1024, 1280 and 1600px: no horizontal scroll, no overlapping fixed elements, nothing hidden behind the mobile CTA bar.
- [ ] Keyboard only: every new control is reachable, operable and visibly focused; dialogs trap and restore focus; Escape closes overlays.
- [ ] Screen reader smoke test (VoiceOver): new sections have headings and live regions announce form/quiz results.
- [ ] `prefers-reduced-motion: reduce`: no movement, all content visible.
- [ ] JS disabled: all content readable, links work, form falls back to email/WhatsApp links.
- [ ] Both themes pass contrast (≥ 4.5:1 body, ≥ 3:1 large text and UI).
- [ ] Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100.
- [ ] No invented testimonials, numbers, prices or logos anywhere. Empty data → section hidden.
- [ ] WhatsApp, email and booking links open with the correct pre-filled text.
- [ ] The OG image previews correctly.

---

## 8. How to report back

After each phase, give me:
1. What you built (by feature ID), with file paths.
2. Screenshots at 390px and 1280px of the changed sections.
3. Anything you skipped or couldn't verify, and why.
4. New `TODO(owner)` items added to `CONTENT_TODO.md`.

Then **stop and wait for my review** before starting the next phase.
