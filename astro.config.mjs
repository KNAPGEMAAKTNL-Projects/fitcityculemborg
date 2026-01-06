import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://fitcityculemborg.nl',
  output: 'hybrid', // Allows both static pages and API routes
  adapter: cloudflare({
    platformProxy: {
      enabled: true, // Enables local D1 development
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
});
