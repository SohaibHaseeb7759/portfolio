import type { ImageMetadata } from 'astro';
import munshi from '../assets/projects/munshi.png';
import munshiLogin from '../assets/projects/munshi-login.png';
import rocketmsl from '../assets/projects/rocketmsl.png';
import macralytics from '../assets/projects/macralytics.png';
import arena from '../assets/projects/altitude-arena.png';
import trampoline from '../assets/projects/altitude-trampoline.png';
import rocketFull from '../assets/projects/rocketmsl-full.jpg';
import macraFull from '../assets/projects/macralytics-full.jpg';
import arenaFull from '../assets/projects/altitude-arena-full.jpg';
import trampFull from '../assets/projects/altitude-trampoline-full.jpg';

export const services = [
  {
    n: '01',
    id: 'business',
    bestFor: 'Shops, clinics, restaurants, consultants',
    title: 'Business Websites',
    problem: 'Customers can’t find clear information about you, or your site looks out of date on their phones.',
    body: 'A professional website for your shop, clinic, restaurant or service business, with your services, details and ways to get in touch laid out clearly.',
    points: ['Clear presentation of services and business information', 'Easy ways for customers to contact you', 'Layouts for phones, tablets and computers'],
  },
  {
    n: '02',
    id: 'landing',
    bestFor: 'Campaigns, new products, single offers',
    title: 'Landing Pages',
    problem: 'You have one product, offer or campaign and need a focused page that says it clearly.',
    body: 'A single, focused page built around one message and one next step, such as sending an enquiry or booking a call.',
    points: ['Clear messaging and a clear call to action', 'Designed to encourage enquiries or other relevant actions', 'Quick to review, quick to launch'],
  },
  {
    n: '03',
    id: 'cms',
    bestFor: 'Businesses that change content often',
    title: 'CMS Websites You Can Edit Yourself',
    problem: 'Every small text or price change means calling a developer and waiting.',
    body: 'I build sites on a content management system (CMS), so you or your team can update pages, offers and images through a simple admin screen. I work with Payload CMS, WordPress and Elementor.',
    points: ['Edit content without touching code', 'Sensible fallbacks so the site still shows content if the CMS is unreachable', 'Connect extras like mailing-list sign-ups or an existing WordPress site'],
  },
  {
    n: '04',
    id: 'app',
    bestFor: 'Sellers, teams and service businesses',
    title: 'Custom Web & Mobile-Friendly Apps',
    problem: 'You run your business with WhatsApp threads, notebooks or spreadsheets and it’s getting hard to keep track.',
    body: 'Simple tools that match how you actually work: order tracking, dashboards, customer portals or internal management systems. They work in the browser and can be installed on a phone like an app.',
    points: ['Built around your real requirements, not a template', 'Dashboards, portals and workflow tools', 'Installable on phones as an app (PWA), as in my Munshi project'],
  },
  {
    n: '05',
    id: 'ai',
    bestFor: 'Teams with image, voice or document work',
    title: 'AI Applications & Integrations',
    problem: 'You have repetitive work, such as reading images, listening to audio or sorting documents, that a computer could help with.',
    body: 'I can build AI-powered tools or add AI features to an existing product. My own projects include image detection with text reading and a speech-to-text app.',
    points: ['Computer vision: detecting objects and reading text in images or video', 'Speech: turning voice into text, and more', 'Wrapped in a simple interface your team can use'],
  },
  {
    n: '06',
    id: 'improve',
    bestFor: 'Anyone with a slow or outdated site',
    title: 'Improvements & Maintenance',
    problem: 'You already have a website, but it’s slow, buggy, hard to use or never gets updated.',
    body: 'Fixing what’s broken, tidying up confusing pages, speeding things up and keeping your site current.',
    points: ['Redesigns and usability fixes', 'Bug fixes and performance improvements', 'Ongoing updates, agreed case by case'],
  },
] as const;

export type Project = {
  slug: string;
  category: 'websites' | 'apps' | 'ai';
  /** One plain sentence on what changed for the client. Leave empty if unknown; never invent. */
  outcome?: string;
  /** Tall full-page screenshot for scroll-in-frame. Falls back to `image`. */
  imageFull?: ImageMetadata;
  name: string;
  kind: 'Live product' | 'Client website (team work)' | 'Personal project' | 'Academic project';
  year: string;
  summary: string;
  forWho: string;
  problem: string;
  contribution: string;
  features: string[];
  tech: string[];
  image?: ImageMetadata;
  image2?: ImageMetadata;
  /** 'desktop' shows the screenshot in a browser frame; default is a phone layout. */
  shape?: 'desktop';
  /** Shown when the product belongs to a company, not to me. */
  copyright?: string;
  imageAlt?: string;
  live?: string;
  liveLabel?: string;
  source?: string;
  note?: string;
};

const CR =
  'Company product. The product, its name and its content are the property and copyright of its owner. I built parts of it as a developer; I don\'t own it.';

export const projects: Project[] = [
  {
    slug: 'munshi',
    category: 'apps',
    outcome: 'Small sellers can keep every order in one place instead of scattered across WhatsApp chats.',
    name: 'Munshi',
    kind: 'Live product',
    year: '2026',
    summary: 'A phone-first tool that helps small sellers keep track of orders they receive over WhatsApp.',
    forWho: 'Small sellers who take orders in chat and manage them in notebooks or memory.',
    problem: 'Orders get lost between messages. Munshi gives each order a clear place and status.',
    contribution: 'I designed and built this myself, from the screens to the database.',
    features: ['Mobile-first layout that works like an app on a phone', 'Orders organised in one place', 'Installable on a phone home screen', 'Automated browser tests for key flows'],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Playwright'],
    image: munshi,
    image2: munshiLogin,
    imageAlt: 'Munshi order management app shown on a phone screen',
    live: 'https://munshi-whatsapp.vercel.app/',
    liveLabel: 'Open live app',
    note: 'Personal project. Source code is private.',
  },
  {
    slug: 'rocketmsl',
    imageFull: rocketFull,
    category: 'websites',
    name: 'RocketMSL',
    kind: 'Client website (team work)',
    year: '2026',
    summary: 'A website for a platform that helps pharmaceutical Medical Affairs teams measure the quality of their conversations with doctors.',
    forWho: 'Medical Affairs teams who want evidence of how well their field conversations are going.',
    problem: 'A technical product needs a site that explains it clearly to a specialist audience, and looks credible doing it.',
    contribution: 'Built as part of my role at Transcure. I developed reusable page components.',
    features: ['Clear explanation of the platform', 'Consistent reusable components', 'Responsive layout for desktop and mobile'],
    tech: ['Astro', 'Tailwind'],
    image: rocketmsl,
    shape: 'desktop',
    imageAlt: 'Screenshot of the RocketMSL homepage',
    live: 'https://rocketmsl.com/',
    liveLabel: 'Visit live website',
    copyright: CR,
  },

  {
    slug: 'macralytics',
    imageFull: macraFull,
    category: 'websites',
    name: 'Macralytics',
    kind: 'Client website (team work)',
    year: '2026',
    summary: 'A website for a medical billing and reporting company that helps healthcare practices with Medicare MIPS reporting.',
    forWho: 'Clinicians and practice managers looking for help with MIPS reporting.',
    problem: 'Practices need to understand the service quickly and be able to request a consultation.',
    contribution: 'Built as part of my role at Transcure. I worked on connecting the site with WordPress.',
    features: ['Consultation request form above the fold', 'Content that can be managed through WordPress', 'Responsive layout for desktop and mobile'],
    tech: ['WordPress', 'JavaScript'],
    image: macralytics,
    shape: 'desktop',
    imageAlt: 'Screenshot of the Macralytics homepage',
    live: 'https://macralytics.com/',
    liveLabel: 'Visit live website',
    copyright: CR,
  },

  {
    slug: 'altitude-arena',
    imageFull: arenaFull,
    category: 'websites',
    outcome: 'Venue staff can update the website’s pages themselves through a content system.',
    name: 'Altitude Arena',
    kind: 'Client website (team work)',
    year: '2026',
    summary: 'A website for an indoor entertainment venue in Sharjah, UAE, covering activities, birthdays, offers and online booking.',
    forWho: 'Families and groups deciding where to go, and venue staff who need to keep pages up to date.',
    problem: 'Visitors need to see what the venue offers and book quickly, and staff need to change content without a developer.',
    contribution: 'Built as part of my role at Transcure. I developed the front end, the content-system connection and a mailing-list sign-up.',
    features: ['Pages editable through a content system', 'Fallback content if the system is unreachable', 'Mailing-list sign-up integration'],
    tech: ['Astro', 'Tailwind', 'Payload CMS', 'MongoDB'],
    image: arena,
    shape: 'desktop',
    imageAlt: 'Screenshot of the Altitude Arena homepage',
    live: 'https://stage.altitudearena.ae/',
    liveLabel: 'View staging site',
    note: 'This is a staging (pre-launch) link and may change.',
    copyright: CR,
  },
  {
    slug: 'altitude-trampoline',
    imageFull: trampFull,
    category: 'websites',
    outcome: 'Venue staff can update the website’s pages themselves through a content system.',
    name: 'Altitude Trampoline Park',
    kind: 'Client website (team work)',
    year: '2026',
    summary: 'A website for an indoor trampoline park in Sharjah, UAE, covering attractions, birthdays, events and memberships.',
    forWho: 'Families planning a visit or a party, and venue staff who manage the content.',
    problem: 'Parents want clear information on attractions, parties and passes, and the venue team needs an easy way to update it.',
    contribution: 'Built as part of my role at Transcure. I developed the front end and content-system connection.',
    features: ['Pages editable through a content system', 'Fallback content if the system is unreachable', 'Responsive layout for desktop and mobile'],
    tech: ['Astro', 'Tailwind', 'Payload CMS', 'MongoDB'],
    image: trampoline,
    shape: 'desktop',
    imageAlt: 'Screenshot of the Altitude Trampoline Park homepage',
    live: 'https://stage.altitudetrampoline.ae/',
    liveLabel: 'View staging site',
    note: 'This is a staging (pre-launch) link and may change.',
    copyright: CR,
  },
];

/** Smaller entries shown in the "More projects" list. `href` is optional. */
export const alsoBuilt: readonly { name: string; note: string; href?: string; tag: string; category: 'websites' | 'apps' | 'ai' }[] = [
  { category: 'websites', name: 'VizCraft', href: 'https://vizcraft.biz/', tag: 'Live website', note: 'Reusable components (Transcure). Company product.' },
  { category: 'websites', name: 'Emprofy', href: 'https://emprofy.com/', tag: 'Live website', note: 'Marketing website (Purevi Tech Solutions). Company product.' },
  { category: 'ai', name: 'Train Detector', href: 'https://github.com/SohaibHaseeb7759/Train-Detector-Model', tag: 'AI · Personal project', note: 'Detects trains in images with a custom-trained model and reads locomotive IDs. Source on GitHub.' },
  { category: 'ai', name: 'Voice Recognition', tag: 'AI · Personal project', note: 'Desktop speech-to-text app built on OpenAI Whisper, with model fine-tuning and accuracy testing. Private repository.' },
  { category: 'apps', name: 'BidMuse', tag: 'Academic project', note: 'Online auction platform with 3D item viewing and bidding. Final-year project, no public demo.' },
  { category: 'apps', name: 'LetsChat', tag: 'Personal project', note: 'Real-time chat app built with the MERN stack. No public demo.' },
];

export const principles = [
  { title: 'You talk to the person building it', body: 'No account managers or hand-offs. Questions go straight to me and so do the answers.' },
  { title: 'Only what your business needs', body: 'I’ll suggest features that help and leave out the ones that don’t. Smaller is often better.' },
  { title: 'Made for phones first', body: 'Most visitors will open your site on a phone, so I design for small screens first and test on them.' },
  { title: 'Clear scope, clear expectations', body: 'We agree what’s included, what it costs and how long it’s likely to take before work begins.' },
  { title: 'Tested before launch', body: 'I check each page and form on real screen sizes, and share progress along the way so there are no surprises.' },
  { title: 'Help with launch and after', body: 'I’ll help get the site live and hand over what you need. Ongoing support is something we agree together.' },
] as const;

export const steps = [
  { n: '01', title: 'Discovery', body: 'We discuss your business, goals, audience, requirements and budget.' },
  { n: '02', title: 'Planning & Design', body: 'We agree the structure, content needed and visual direction before I build anything.' },
  { n: '03', title: 'Development & Review', body: 'I build the website, test it and share progress so you can give feedback.' },
  { n: '04', title: 'Launch & Handover', body: 'We finish the agreed revisions, publish the site and I hand over the relevant information and access.' },
] as const;

export const tech = [
  'React', 'Next.js', 'Astro', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Django', 'Python', 'Payload CMS', 'WordPress', 'Elementor', 'Supabase', 'MySQL', 'PostgreSQL', 'MongoDB', 'PyTorch', 'OpenCV', 'Hugging Face', 'HTML & CSS', 'Git & GitHub',
] as const;

export const faqs = [
  { q: 'What kind of websites do you build?', a: 'Business websites, landing pages, sites you can edit yourself through a CMS, and custom web applications such as dashboards and order or customer management tools. I can also redesign or improve a site you already have.' },
  { q: 'Can you build mobile apps or AI tools?', a: 'I build web apps that work like apps on a phone and can be installed on the home screen (for example, Munshi). I also build AI-powered tools, such as image detection and speech-to-text. If you need a store-listed native mobile app, tell me what you have in mind and I’ll be honest about whether I’m the right fit.' },
  { q: 'Can I edit the website content myself?', a: 'Yes, if we build it on a CMS (content management system). I work with Payload CMS, and WordPress with Elementor, and can set up simple screens for you to change text, images and offers without a developer.' },
  { q: 'How much does a website cost?', a: 'It depends on the scope: how many pages, what features you need, how ready your content is and whether anything needs connecting to other services. Tell me about your project and I’ll give you an estimate after we’ve talked through the requirements. There’s no obligation.' },
  { q: 'How long does a project take?', a: 'A simple site is quicker than one with custom features. The timeline depends on scope, how quickly content and feedback arrive, and any integrations. We’ll agree on a realistic schedule before starting.' },
  { q: 'Will my website work on mobile phones?', a: 'Yes. Every site I build is designed to work on phones, tablets and computers, and I test it on different screen sizes.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We can look at what you have, decide what to keep and what to change, and I’ll improve the design, content structure or functionality.' },
  { q: 'Can I request changes during development?', a: 'Yes. I share progress as I go so you can give feedback. The number of revision rounds is agreed as part of the project scope.' },
  { q: 'Will I be able to update my website later?', a: 'Yes, if we plan for it. With a CMS you edit content yourself; otherwise I can make updates for you. We’ll decide which suits you before we start.' },
  { q: 'Can you help after the website goes live?', a: 'Yes. I can help with launch and with fixes or updates afterwards. The details of any support are agreed with you per project.' },
  { q: 'How do we get started?', a: 'Send me a short message through the form below, or by email or WhatsApp, describing your business and what you need. Plain words are fine. I’ll reply to discuss next steps.' },
] as const;

/** Filter chips in the Work section. */
export const categories = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Business websites' },
  { id: 'apps', label: 'Apps' },
  { id: 'ai', label: 'AI' },
] as const;

/** "See your business here" hero preview. Sample copy only, clearly labelled as a preview. */
export const industries = [
  { id: 'restaurant', label: 'Restaurant', icon: 'utensils', accent: '#e8590c', headline: 'Fresh food, made for you', cta: 'View menu', cards: ['Menu', 'Reservations', 'Find us'] },
  { id: 'clinic', label: 'Clinic', icon: 'heart', accent: '#0f9d8a', headline: 'Care you can count on', cta: 'Book appointment', cards: ['Services', 'Our doctors', 'Contact'] },
  { id: 'shop', label: 'Shop', icon: 'bag', accent: '#7b5cff', headline: 'Everything you need, in one place', cta: 'Shop now', cards: ['Products', 'Offers', 'Delivery'] },
  { id: 'salon', label: 'Salon', icon: 'sparkle', accent: '#e0357f', headline: 'Look and feel your best', cta: 'Book a slot', cards: ['Services', 'Gallery', 'Prices'] },
] as const;

/** Section-by-section list of what clients receive. Only list what you actually offer. */
export const deliverables = [
  { icon: 'phone', title: 'Mobile-friendly design', body: 'Looks right and works on phones, tablets and computers.' },
  { icon: 'chat', title: 'Contact form or WhatsApp button', body: 'Customers can reach you in a tap.' },
  { icon: 'search', title: 'Basic search-engine setup', body: 'Page titles, descriptions and a sitemap. No ranking promises.' },
  { icon: 'bolt', title: 'Speed-conscious build', body: 'Lightweight pages that load quickly on mobile data.' },
  { icon: 'play', title: 'Handover walkthrough', body: 'I show you how everything works before I step back.' },
] as const;

/** TODO(owner): add a line like '14 days' to show "X days of free fixes after launch". Empty = hidden. */
export const supportPeriod = '';

/** Quiz for "Which one do I need?". Each answer adds a vote for a service id. */
export const quiz = [
  {
    q: 'Do you have a website already?',
    options: [
      { label: 'No, I need one', votes: ['business'] },
      { label: 'Yes, but it needs work', votes: ['improve'] },
      { label: 'Not a website. I need a tool', votes: ['app'] },
    ],
  },
  {
    q: 'What should it do?',
    options: [
      { label: 'Show my business and get enquiries', votes: ['business', 'landing'] },
      { label: 'Promote one product or offer', votes: ['landing'] },
      { label: 'Manage orders, customers or data', votes: ['app'] },
      { label: 'Use AI (images, voice, documents)', votes: ['ai'] },
    ],
  },
  {
    q: 'Do you want to edit it yourself?',
    options: [
      { label: 'Yes, text and images', votes: ['cms'] },
      { label: 'No, I’ll ask you', votes: ['business'] },
      { label: 'Not sure', votes: [] },
    ],
  },
] as const;

/** Service id -> form option text, used when the quiz or a package pre-selects the form. */
export const serviceFormMap: Record<string, string> = {
  business: 'New business website',
  landing: 'Landing page',
  cms: 'Website you can edit yourself (CMS)',
  app: 'Web or mobile-friendly app',
  ai: 'AI tool or integration',
  improve: 'Existing website improvements',
};

/**
 * Testimonials. Renders nothing while empty.
 * TODO(owner): ask Munshi users, Transcure leads and past clients for 1–2 sentences, with permission.
 */
export const testimonials: {
  quote: string; name: string; role?: string; company?: string; photo?: string; projectSlug?: string; source?: string;
}[] = [];

/**
 * Before/after redesigns. Renders nothing while empty. Real redesigns only.
 * A concept redesign of a public site is allowed only if `concept: true` (it is labelled on the page).
 * TODO(owner): { title, before: ImageMetadata, after: ImageMetadata, concept?: boolean }
 */
export const beforeAfter: { title: string; before: ImageMetadata; after: ImageMetadata; concept?: boolean }[] = [];
