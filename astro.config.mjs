// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages as a project site: https://mmarz72.github.io/agora/
// If Agora moves to its own domain, set `site` to that domain and remove `base`
// (internal links use the url() helper in src/site.ts, so they follow automatically).
export default defineConfig({
  site: 'https://mmarz72.github.io',
  base: '/agora',
});
