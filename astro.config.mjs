// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site:   'https://atarico.dev',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // CSP: script-src 'self' bloquea scripts inline; con 0, Astro
      // emite siempre archivos .js externos en vez de inlinear <4KB
      assetsInlineLimit: 0,
    },
  },
});
