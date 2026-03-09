import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.prakashmotors.in",
  integrations: [
    sitemap({
      filter: (page) => Boolean(page),
      serialize: (item) => item,
    }),
  ],
});
