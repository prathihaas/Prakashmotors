import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Uncomment these lines if deploying to GitHub Pages with repository name in path
  // site: 'https://prathihaas.github.io',
  // base: '/Prakashmotors',
});