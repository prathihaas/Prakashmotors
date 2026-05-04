# ACTION-PLAN — Prakash Motors SEO
**Last Updated:** 2026-05-03  
**Status:** All Critical + High + Medium code fixes applied. Manual actions remain.

---

## ✅ COMPLETED (Code Fixes — This Batch)

### Critical
- [x] Add full security headers to vercel.json (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP)
- [x] Fix duplicate org schema — add `noOrgSchema` prop, suppress on pages with dedicated schema
- [x] Fix schema `@type`: changed `AutoDealer` → `Store` + `additionalType: AutoDealer`
- [x] Fix `/about-us` redirect target: `/#contact` → `/about`

### High
- [x] Add `@id: "https://www.prakashmotors.in/#organization"` to all org schema
- [x] Add `foundingDate: "2003"` to org schema
- [x] Add `aggregateRating` + `review[]` array to SEOHead org schema
- [x] Add `WebSite` + `WebPage` schema to SEOHead (every page)
- [x] Fix product schema: `"@type": ["Product", "Vehicle"]`, add `@id`
- [x] Add `BreadcrumbList` schema to products, blog posts, about, service, contact
- [x] Fix blog article `author @type`: use `Organization` when byline is brand name
- [x] Fix service `parentOrganization` type: `AutoDealer` → `Store` with `@id`
- [x] Replace `new Date().toISOString()` sitemap lastmod with static dates
- [x] Exclude `/lp/` from sitemap
- [x] Add `/contact-us/` redirect
- [x] Add `/tractors/:slug*` → `/products/:slug*` redirect
- [x] Add GTM preconnect + dns-prefetch hints
- [x] Add `og:locale:alternate: te_IN` to SEOHead
- [x] Fix about page title: "Since 2005" → "Since 2003"
- [x] Add SERVICE link to nav on homepage, blog index, contact, about pages

### Medium
- [x] Add `loading="lazy"` to product grid card images (homepage)
- [x] Add `fetchpriority="high"` + `loading="eager"` to hero image
- [x] Fix default og:image in Layout.astro: Unsplash URL → `/og-image.jpg`
- [x] Add `og:locale:alternate` for Telugu
- [x] Add `description` field to products content schema (config.ts)
- [x] Expand homepage footer: add nav links, phone, address, hours, social

### Low (Infrastructure)
- [x] Add explicit AI crawler Allow directives to robots.txt
- [x] Add `Disallow: /lp/` to robots.txt
- [x] Create `public/llms.txt` with full AI context document

---

## ✅ BATCH 2 COMPLETED (2026-05-03)

### MEDIUM — Fixed ✅
- [x] **Self-host product images** — all 16 product images downloaded to `public/images/products/[slug].jpg` and frontmatter updated
- [x] **Expand thin blog posts** — paddy-harvesting, subsidy-news (updated to 2025), tractor-maintenance all expanded to 1,000+ words
- [x] CSP updated — CNHI CDN removed from img-src (no longer needed)

### LOW — Fixed ✅
- [x] **Location pages created**: `/locations/bodhan`, `/locations/armoor`, `/locations/banswada`, `/locations/kamareddy` — all with LocalBusiness schema + FAQ + product recommendations

---

## ⚠️ MANUAL ACTIONS STILL REQUIRED

### HIGH Priority
- [ ] **Create `public/og-image.jpg`** (1200×630px)
  - Brand: New Holland blue (#001489) background
  - Text: "Prakash Motors | Authorized New Holland Dealer | Nizamabad, Telangana"
  - Logo/tractor image overlay
  - Place at: `Prakashmotors/public/og-image.jpg`

- [ ] **Fix Google Maps URL in contact.astro**
  - Current: `maps.app.goo.gl/NizamabadPrakashMotors` (placeholder)
  - Action: Get real short URL from Google Maps business listing → update in `src/pages/contact.astro`

### MEDIUM Priority
- [ ] **Fix Google Reviews link** in index.astro (currently goes to generic Google Maps search)
  - Update both review CTA links to actual Google Business Profile review URL

### LOW Priority
- [ ] **Assign category thumbnails** to blogs without `featured_image`
  - Use Canva thumbnail system (already set up for sister sites)

- [ ] **Product `description` field** — add to all 16 product `.md` files
  - Currently the schema falls back to a generated string
  - Add 120–160 char SEO description to each product frontmatter

---

## 📊 Issues Resolved vs Outstanding

| Category | Issues Fixed | Issues Remaining (Manual) |
|----------|-------------|--------------------------|
| Technical | 8 | 0 |
| Schema | 12 | 0 |
| On-Page | 6 | 2 (OG image, Maps URL) |
| Content | 5 | 0 |
| Performance | 4 | 0 |
| AI Readiness | 3 | 0 |
| Local SEO | 4 | 1 (GBP URL) |
| Images | 2 | 1 (OG image) |
| **Total** | **44** | **4** |
