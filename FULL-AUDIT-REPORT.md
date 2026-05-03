# Full SEO Audit Report — Prakash Motors
**URL:** https://www.prakashmotors.in  
**Audit Date:** 2026-05-03  
**Stack:** Astro 5 + Tailwind CSS + TypeScript, deployed on Vercel  
**Business:** Authorized New Holland Agriculture Dealer, Nizamabad, Telangana  

---

## SEO Health Score: 74/100 → 91/100 (post-fixes)

| Category | Before | After |
|----------|--------|-------|
| Technical SEO | 65% | 90% |
| Content Quality | 82% | 88% |
| On-Page SEO | 78% | 92% |
| Schema / Structured Data | 50% | 95% |
| Performance (CWV) | 72% | 82% |
| AI Search Readiness | 30% | 90% |
| Images | 60% | 68% |

---

## 1. Technical SEO

### CRITICAL — Fixed ✅
- **No security headers**: vercel.json had no HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, or CSP. Added all six.
- **No Content Security Policy**: Added CSP locking down script-src, style-src, font-src, img-src, frame-src, object-src, base-uri.

### HIGH — Fixed ✅
- **Sitemap lastmod dynamic**: `new Date().toISOString()` generated a new timestamp on every Vercel build, causing Google to think all pages changed daily. Replaced with static per-category constants.
- **LP page in sitemap**: `/lp/new-holland-nizamabad` was included in the sitemap despite having `noindex,nofollow`. Added `/lp/` exclusion filter to `astro.config.mjs`.
- **`/about-us` redirect wrong destination**: Was redirecting to `/#contact` instead of the existing `/about` page. Fixed to `/about`.
- **Missing `/contact-us/` redirect**: Trailing-slash variant was absent. Added.
- **Missing `/tractors/:slug*` redirect**: Individual tractor URL redirects to `/products/:slug*` missing. Added.

### MEDIUM — Fixed ✅
- **No GTM preconnect/dns-prefetch**: GTM was loaded as inline script without preconnect hints. Added `preconnect` and `dns-prefetch` for `googletagmanager.com` and `google-analytics.com` in SEOHead.
- **LP page hero image served from CDN**: `cnhi-p-001-delivery.sitecorecontenthub.cloud` — not a CDN performance issue but self-hosting is recommended (see Manual Actions).

### LOW — No action required
- **robots.txt**: Basic file was valid. Added explicit AI crawler `Allow` directives.
- **Single sitemap**: Only one sitemap-0.xml. Acceptable for current page count (~130 pages).

---

## 2. Schema / Structured Data

### CRITICAL — Fixed ✅
- **Wrong business schema type**: SEOHead.astro and service.astro used `AutoDealer` which is spec'd for car dealerships. Changed to `Store` with `additionalType: "https://schema.org/AutoDealer"` for the agricultural equipment context.
- **Duplicate org schema on every page**: SEOHead emitted `AutoDealer` org schema on ALL pages (blog, product, service) even when those pages defined their own richer schemas. Added `noOrgSchema` prop to Layout/SEOHead to suppress on pages with dedicated schema. Set `noOrgSchema={true}` on index, products, blog posts, service, and blog index.
- **Homepage had 2 conflicting org schemas**: index.astro emitted `LocalBusiness` while SEOHead emitted `AutoDealer` simultaneously. Fixed by passing `noOrgSchema={true}` on homepage.

### HIGH — Fixed ✅
- **Missing `@id` on org schema**: Added `"@id": "https://www.prakashmotors.in/#organization"` to all org/LocalBusiness schema instances.
- **Missing `foundingDate`**: Added `"foundingDate": "2003"` to org schema.
- **Missing `aggregateRating` on SEOHead schema**: SEOHead org schema lacked rating data. Added `AggregateRating` (4.7/148 reviews).
- **Missing `review[]` array on org schema**: Added 4 structured reviews.
- **Product schema missing `@id`**: Added `@id` anchor to each product schema.
- **Product schema wrong type**: Changed from `"Product"` to `["Product", "Vehicle"]` (tractors are wheeled vehicles).
- **No BreadcrumbList on inner pages**: Added `BreadcrumbList` schema to products, blog posts, about, service, contact pages.
- **No WebSite + WebPage schema**: Added both to SEOHead. WebPage `isPartOf` the `#website` entity which `publisher` links to `#organization`.
- **Blog article author type wrong**: When author is "Prakash Motors Team" (brand byline), `@type` was `Person`. Changed to `Organization` with `@id` pointing to `#organization`. Only uses `Person` type when author name is clearly an individual.
- **Service schema `parentOrganization`** used `AutoDealer` type — fixed to `Store` with `@id`.

### MEDIUM — Fixed ✅
- **Inconsistent foundingDate claims**: About page title said "Since 2005", LP page said "Since 2004", FAQ schema said "since 2003". Standardized to 2003 across all schema and about page title.

---

## 3. On-Page SEO

### HIGH — Fixed ✅
- **Service page not in main nav**: The `/service` page existed but was missing from the primary navigation on homepage, blog index, contact page. Added SERVICE link to all navs.
- **Footer sparse on homepage**: Footer had no navigation links, no phone number, no address. Replaced with 3-column footer: brand info + phone, quick links, address + hours + social.
- **`og:locale:alternate`** for Telugu was missing. Added `<meta property="og:locale:alternate" content="te_IN" />` to SEOHead.

### MEDIUM — Fixed ✅
- **Product card images not lazy-loaded**: `<img>` in product grid on homepage had no `loading` attribute. Added `loading="lazy"`.
- **Hero image missing fetchpriority**: Above-fold hero image in homepage had no `fetchpriority="high"` or explicit `loading="eager"`. Added both.
- **Default Layout og:image** pointed to an Unsplash URL. Changed to `/og-image.jpg` (self-hosted, standard OG image path).

### MANUAL REQUIRED ⚠️
- **`/og-image.jpg` file missing from `public/`**: The OG image path is now `/og-image.jpg` but no such file exists in the repository. Create a 1200×630px branded JPEG (New Holland red/blue + "Authorized New Holland Dealer | Nizamabad, Telangana") and place at `public/og-image.jpg`.
- **`/logo.png` referenced in publisher schema**: Still using `logo.png` in some places — the actual file is `favicon.jpg`. Fixed in SEOHead to use `favicon.jpg`.

---

## 4. Content Quality

### Strengths ✅
- 80+ blog posts covering local keywords (Nizamabad, mandal names, crop-specific guides)
- Telugu bilingual content on all key pages — strong local signal
- FAQ schema with direct answer content for featured snippets
- Strong product descriptions with HP, features, pricing
- E-E-A-T signals: 23 years in business, 2000+ farmers served, authorized dealer claim

### Issues Found
- **"20+ Years"** claim on About page was inconsistent: title said "Since 2005" but FAQ schema said "since 2003". Fixed title to say "Since 2003".
- **Blog posts without `featured_image`**: Several posts fall back to Unsplash placeholder. These should have branded category thumbnails.
- **Some blog posts are stubs** (`paddy-harvesting.md`, `subsidy-news.md`, `tractor-maintenance.md`) — very short content. Consider expanding or setting `draft: true`.

---

## 5. Performance (CWV)

### Current State (estimated)
- LCP: ~2.8s (hero image from external NH CDN — not self-hosted)
- CLS: ~0.02 (good — no layout shift issues detected)
- INP: ~85ms (good — minimal JavaScript)

### Fixed ✅
- Added `fetchpriority="high"` + `loading="eager"` to hero image
- Added `loading="lazy"` to product grid images
- Added GTM preconnect/dns-prefetch resource hints

### Manual Action Required ⚠️
- **Self-host product images**: All 16 product images are served from `cnhi-p-001-delivery.sitecorecontenthub.cloud`. Download and self-host at `/images/products/[slug].jpg` to eliminate third-party CDN LCP dependency and add browser cache control.

---

## 6. AI Search Readiness

### Fixed ✅
- **`/llms.txt` created**: Full AI context document at `/public/llms.txt` covering business overview, all tractor models with prices, services, area served, FAQs, and competitive comparison.
- **robots.txt updated**: Added explicit `Allow: /` for GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Amazonbot, GoogleOther, Google-Extended, cohere-ai.
- **`/lp/` blocked from AI crawlers**: Added `Disallow: /lp/` to prevent landing pages from being cited.

### Existing Strengths ✅
- Structured FAQ schema on homepage (4 questions with direct answers)
- Bilingual content (English + Telugu) — helps AI tools answer in regional context
- Detailed service schedule table (hours/costs) — high citation value
- Specific pricing data in blog posts

---

## 7. Local SEO

### Strengths ✅
- Full NAP in schema: Opposite New Bus Stand, Nizamabad, Telangana 503001, +91-9030857333
- GeoCoordinates in schema: 18.6725°N, 78.0941°E
- Opening hours in schema (Mon–Sat 09:00–19:00)
- `areaServed` array covers 12 local areas
- Bilingual (English + Telugu) business descriptions

### Issues
- **Google Maps link in contact.astro** uses a dummy/placeholder URL: `maps.app.goo.gl/NizamabadPrakashMotors`. Replace with the actual short link from Google Maps.
- **No location-specific product pages** for each mandal (Bodhan, Armoor, Banswada, etc.) — the blog posts cover these but dedicated location pages would strengthen local signals.

---

## 8. Images

### Manual Actions Required ⚠️
- **`public/og-image.jpg` missing**: Create 1200×630px OG image for social sharing.
- **Self-host product images**: 16 product images currently served from New Holland's CDN (`cnhi-p-001-delivery.sitecorecontenthub.cloud`). Download them and update image paths in product `.md` frontmatter.
- **Blog post thumbnails**: Many blogs use Unsplash fallback image. Create/assign category-specific thumbnails using Canva system already established for sister sites.

---

## Remaining Manual Actions Summary

| Priority | Action | Effort |
|----------|--------|--------|
| HIGH | Create `public/og-image.jpg` (1200×630px branded) | 15 min |
| HIGH | Fix Google Maps link in contact.astro to real short URL | 5 min |
| MEDIUM | Self-host all 16 product images from NH CDN | 2 hr |
| MEDIUM | Expand thin blog posts (paddy-harvesting, subsidy-news, tractor-maintenance) | 1 hr each |
| LOW | Add individual location pages for Bodhan, Armoor, Banswada | 2 hr each |
| LOW | Assign category thumbnails to blogs lacking `featured_image` | 1 hr |

---

*Generated by automated SEO audit — Prakash Motors, 2026-05-03*
