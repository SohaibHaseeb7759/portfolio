/**
 * Central site configuration. Edit this file to change contact details,
 * social links, trust signals, pricing and form behaviour. Nothing in here is
 * a secret: everything ships to the browser.
 *
 * Rule: anything left empty ('' or []) hides its section or element. Nothing
 * on the page is invented, so only fill in what is true.
 */
export const site = {
  name: 'Sohaib Haseeb',
  title: 'Sohaib Haseeb | Websites & Web Apps for Businesses',
  description:
    'Freelance web developer building modern websites, CMS-powered sites, web apps and AI tools for small businesses, consultants and startups. Let’s talk about your project.',
  // Canonical URL comes from astro.config.mjs (SITE_URL / BASE_PATH).
  ogImage: '/og.png',
  location: 'Lahore, Pakistan',
  timezone: 'Asia/Karachi',

  contact: {
    // Both values below come from the existing portfolio. Replace if they change.
    email: 'sohaibhaseeb01@gmail.com',
    // International format, digits only (no +, spaces or dashes). Empty = hidden.
    whatsapp: '923354218408',
    phoneDisplay: '+92 335 4218408',
    // TODO(owner): how fast do you really reply? e.g. 'a few hours', '24 hours'. Empty = hidden.
    responseTime: '',
  },

  social: {
    github: 'https://github.com/SohaibHaseeb7759',
    linkedin: 'https://www.linkedin.com/in/sohaib-haseeb-9a9276282',
  },

  /** Hero availability pill. `month` / `bookedUntil` are optional free text. */
  availability: {
    show: true,
    available: true,
    month: '', // TODO(owner): e.g. 'November 2026'
    bookedUntil: '', // used when available: false, e.g. 'January 2027'
    showClock: true,
  },

  /**
   * Enquiry form delivery.
   * - Leave `endpoint` empty: WhatsApp is the main button, with email and
   *   "copy my message" as alternatives (no backend, the UI says so).
   * - Set `endpoint` to a PUBLIC form-service URL to receive submissions by email:
   *     Web3Forms: 'https://api.web3forms.com/submit' (add your access key as a hidden field
   *                via `extraFields: { access_key: '...' }`; Web3Forms keys are public by design)
   *     Formspree: 'https://formspree.io/f/yourFormId'
   *   Never put private API keys here.
   */
  form: {
    endpoint: '',
    extraFields: {} as Record<string, string>,
    honeypotField: 'company_website',
    services: [
      'New business website',
      'Landing page',
      'Website you can edit yourself (CMS)',
      'Web or mobile-friendly app',
      'AI tool or integration',
      'Existing website improvements',
      'Something else',
    ],
  },

  /** Currency options for the budget dropdown and the package prices. */
  currencies: {
    default: 'PKR',
    // TODO(owner): rate = how many units of this currency equal 1 PKR. Used only to convert package prices.
    list: [
      { code: 'PKR', symbol: 'PKR ', rate: 1 },
      { code: 'USD', symbol: '$', rate: 0 }, // 0 = no conversion set; prices show "Get a quote"
      { code: 'AED', symbol: 'AED ', rate: 0 },
    ],
    budgets: {
      PKR: ['Not sure yet', 'Under PKR 50,000', 'PKR 50,000 – 150,000', 'PKR 150,000 – 400,000', 'PKR 400,000+', 'Prefer to discuss'],
      USD: ['Not sure yet', 'Under $250', '$250 – $750', '$750 – $2,000', '$2,000+', 'Prefer to discuss'],
      AED: ['Not sure yet', 'Under AED 1,000', 'AED 1,000 – 3,000', 'AED 3,000 – 8,000', 'AED 8,000+', 'Prefer to discuss'],
    } as Record<string, string[]>,
  },

  /** TODO(owner): a Calendly / Cal.com link. Loaded only when a visitor clicks. Empty = hidden. */
  booking: '',
  bookingLabel: 'Book a free 15-min call',

  /** TODO(owner): intro video file or URL (mp4), poster image URL and a captions .vtt URL. Empty = hidden. */
  introVideo: { src: '', poster: '', captions: '' },

  /**
   * Privacy-friendly analytics (Plausible, Umami or Cloudflare Web Analytics). Empty = off.
   * Plausible example: { src: 'https://plausible.io/js/script.js', domain: 'yourdomain.com', provider: 'plausible' }
   * Umami example:     { src: 'https://cloud.umami.is/script.js', domain: 'YOUR-WEBSITE-ID', provider: 'umami' }
   */
  analytics: { src: '', domain: '', provider: 'plausible' as 'plausible' | 'umami' },

  /**
   * Real-number highlights (hidden if empty). Only add numbers you can stand behind.
   * TODO(owner): e.g. { value: 6, suffix: '', label: 'live websites shipped' }
   */
  highlights: [] as { value: number; suffix?: string; label: string }[],

  /** Employers / teams shown as "Experience at" (these are NOT clients). Add `logo` only with permission. */
  experience: [
    { name: 'Transcure' },
    { name: 'Purevi Tech Solutions' },
  ] as { name: string; logo?: string }[],

  /**
   * Packages. Leave `from` empty to show "Get a quote". `from` is a number in PKR.
   * TODO(owner): fill in only prices and timelines you actually offer.
   */
  packages: [
    {
      name: 'Starter page',
      forWho: 'One focused page for an offer, product or small business.',
      includes: ['One responsive page', 'Contact or WhatsApp button', 'Basic search-engine setup'],
      timeline: '',
      from: 0,
      service: 'Landing page',
    },
    {
      name: 'Business website',
      forWho: 'A multi-page site, optionally editable by you through a CMS.',
      includes: ['Several pages sized to your business', 'Responsive on phones, tablets and computers', 'Optional CMS so you can edit content', 'Contact form or WhatsApp'],
      timeline: '',
      from: 0,
      featured: true,
      service: 'New business website',
    },
    {
      name: 'Custom app',
      forWho: 'A dashboard, portal, order tool or AI feature built around your workflow.',
      includes: ['Scoped together before we start', 'Built around your real requirements', 'Testing and handover'],
      timeline: '',
      from: 0,
      service: 'Web or mobile-friendly app',
    },
  ] as {
    name: string; forWho: string; includes: string[]; timeline: string; from: number; featured?: boolean; service: string;
  }[],

  /**
   * Optional project estimator (hidden unless prices are set). All prices in PKR.
   * TODO(owner): fill in your own unit prices to enable it.
   */
  estimator: { basePrice: 0, perPage: 0, cms: 0, extras: [] as { label: string; price: number }[], spread: 0.25 },
} as const;

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const mailtoHref = (subject = 'Project enquiry') =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;

export const whatsappHref = (text = 'Hi Sohaib, I’d like to discuss a website project.') =>
  site.contact.whatsapp
    ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`
    : '';
