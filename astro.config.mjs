import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL / BASE_PATH at build time for your host, e.g.
//   GitHub Pages project site: SITE_URL=https://USER.github.io BASE_PATH=/repo-name
//   Custom domain:             SITE_URL=https://yourdomain.com   BASE_PATH=/
const site = process.env.SITE_URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
