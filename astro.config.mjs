import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.prakashmotors.in",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => Boolean(page),
      serialize: (item) => item,
    }),
  ],
});
