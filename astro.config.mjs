import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Static lastmod dates per content category — avoids spurious crawl triggers on every build
const LASTMOD = {
  home:     "2026-05-01",
  blog:     "2026-05-01",
  products: "2026-04-15",
  static:   "2026-03-01",
};

export default defineConfig({
  site: "https://www.prakashmotors.in",
  trailingSlash: "never",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') && !page.includes('/lp/'),
      serialize: (item) => {
        const url = item.url;

        if (url === 'https://www.prakashmotors.in/' || url === 'https://www.prakashmotors.in') {
          return { ...item, priority: 1.0, changefreq: 'daily', lastmod: LASTMOD.home };
        }
        if (url.endsWith('/blog') || url.endsWith('/blog/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly', lastmod: LASTMOD.blog };
        }
        if (url.includes('/blog/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: LASTMOD.blog };
        }
        if (url.includes('/products/') || url.includes('/cars/') || url.includes('/services/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: LASTMOD.products };
        }
        if (url.includes('/locations') || url.includes('/branches')) {
          return { ...item, priority: 0.7, changefreq: 'monthly', lastmod: LASTMOD.products };
        }
        if (url.includes('/contact')) {
          return { ...item, priority: 0.6, changefreq: 'yearly', lastmod: LASTMOD.static };
        }
        return { ...item, priority: 0.6, changefreq: 'monthly', lastmod: LASTMOD.static };
      },
    }),
  ],
});
