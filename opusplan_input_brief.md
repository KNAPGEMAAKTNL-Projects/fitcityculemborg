# Project Brief: FitCity Culemborg Digital Build

**Project Goal:**
Build a high-performance "Conversion Engine" that uses raw industrial aesthetics to position FitCity as the cool, budget-friendly alternative to corporate gyms.

**The Tech Stack:**
* **Core:** [Astro](https://astro.build/) (Static Site Generator for max speed/SEO).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Rapid UI development).
* **Hosting:** Cloudflare Pages (Global CDN, Unlimited Bandwidth).
* **Forms:** [Web3Forms](https://web3forms.com/) (Headless, Free Unlimited, Custom Redirects).
* **Map:** Google Maps Embed (iframe).

**Sitemap:**
1.  **Homepage:** Hero (Video) > Pricing Grid (The "Smart List") > The Vibe > USP Icons > FAQ > Footer.
2.  **Ladies Only:** Dedicated landing page with "Neon Noir" (Pink/Black) theme shift.
3.  **Kickboxing:** Simple schedule table + pricing.
4.  **Contact:** Google Maps embed (Houtweg 8) + Opening Hours + Simple Form.
5.  **Legal:** Privacy Policy / Terms.

**Gap Opportunities (The "Disruptors"):**
1.  **The "Ryanair" Pricing Table:**
    * *Implementation:* Do not hide prices. Create a "Pricing Configurator" block on the homepage. Use massive `Oswald` font for the price (e.g., "€24.50"). Highlight the "Smart Deal" with a `#FFE303` border.
2.  **The "Clubhouse" Vibe Shift:**
    * *Implementation:* When a user visits `/ladies-only`, the global CSS variable `--color-primary` must switch from Yellow (#FFE303) to Hot Pink (#FF2E93) to visually signal a different environment.
3.  **Mobile-First Conversion:**
    * *Implementation:* Create a `StickyBottomBar.astro` component. It stays fixed at `bottom-0` on mobile screens (`z-index-50`). Contains a single massive button: "JOIN NOW".

**Feature List (Must-Haves):**
* **Raw Video Background:** Hero section must support the raw MP4 provided (muted, loop).
* **Live Status Indicator:** A pill badge in the header saying "OPEN NOW" or "CLOSED" based on the current NL time and verified hours.
* **Spotify Integration:** Embed the specific "Gym Vibe" playlist in the footer or "Vibe" section.
* **WhatsApp Float:** A floating action button (bottom-right) linking to `wa.me/31646872274`.
* **Form Logic:** Contact form must POST to Web3Forms API and redirect to a custom `/success` page on the site.

---

## Complete Implementation Checklist

### Phase 1: Foundation & Core Pages

#### 1. Project Setup
- [x] Initialize Astro 5 project
- [x] Configure Tailwind CSS v4
- [x] Set up Cloudflare Pages deployment
- [x] Configure path aliases (@components, @layouts, @styles, @data, @utils)
- [x] Create global.css with theme variables (yellow #FFE303, ladies pink #FF2E93)
- [x] Set up Git repository

#### 2. Layout & Global Components
- [x] BaseLayout.astro with theme switching (default vs ladies)
- [x] Header.astro with logo, navigation, OpenStatusBadge
- [x] Footer.astro with contact info, social links, legal links
- [x] MobileMenu.astro (hamburger menu for mobile)
- [x] StickyBottomBar.astro (mobile-only CTA, md:hidden)
- [ ] ~~WhatsAppFloat.astro~~ (removed per brand decision)
- [x] OpenStatusBadge.astro (live open/closed status based on NL time)

#### 3. Core Pages - Structure
- [x] Homepage (index.astro)
  - [x] Hero section with video background support
  - [x] Pricing grid (horizontal scroll on mobile)
  - [x] Vibe section with Spotify embed
  - [x] USP grid (4-column benefits)
  - [x] FAQ accordion
  - [x] Google reviews section
  - [x] Opening hours display
- [x] Ladies Only page (ladies-only.astro)
  - [x] Theme switch to pink (#FF2E93)
  - [x] Dedicated content about privacy/women-only space
  - [x] Ladies-specific pricing
  - [x] Photo gallery placeholder
- [x] Kickboxing page (kickboxing.astro)
  - [x] Schedule table (Tue/Thu/Sun classes)
  - [x] Pricing cards
  - [x] Photo gallery
  - [x] CTA for trial class
- [x] Contact page (contact.astro)
  - [x] Google Maps embed (Houtweg 8, 4104 AB Culemborg)
  - [x] Opening hours full schedule
  - [x] Contact form (Web3Forms integration)
  - [x] Phone, email, WhatsApp links
  - [x] Parking information
- [x] Success page (success.astro) - Form confirmation
- [x] Privacy Policy page (privacy.astro)
- [x] Terms & Conditions page (terms.astro)

#### 4. SEO & Location Pages
- [x] /fitness-culemborg (main SEO landing page)
- [x] /fitness-beusichem
- [x] /fitness-buren
- [x] /fitness-tricht
- [x] /fitness-buurmalsen
- [x] Each with LocalBusiness schema, local keywords, internal linking

### Phase 2: Data & Content

#### 5. Data Files
- [x] pricing.ts - All membership packages (12-month, 6-month, flex, kickboxing)
- [x] hours.ts - Opening hours (Mon-Fri 08:30-22:00, Sat 09:00-16:00, Sun 09:30-16:00)
- [x] faq.ts - FAQ questions and answers
- [x] usps.ts - Unique selling points

#### 6. Components - UI
- [x] Button.astro (primary yellow, secondary ghost)
- [x] Badge.astro
- [x] SectionHeading.astro
- [x] Container.astro (with size variants)

#### 7. Components - Sections
- [x] HeroVideo.astro (full-screen video background)
- [x] PricingGrid.astro (horizontal scroll mobile)
- [x] PricingCard.astro (big Oswald prices, highlighted cards)
- [x] VibeSection.astro (Spotify + atmosphere)
- [x] USPGrid.astro (4-column benefits with brand logos)
- [x] FAQ.astro (accordion)
- [x] SpotifyEmbed.astro
- [x] ScheduleTable.astro (kickboxing schedule)
- [x] PhotoGallery.astro

#### 8. Components - Forms
- [x] ContactForm.astro (Web3Forms integration)
- [ ] MembershipSignupForm.astro (multi-step: membership selection → personal details → SEPA)

### Phase 3: Forms & Backend

#### 9. Form Systems
- [ ] **Membership Signup Flow:**
  - [x] Visual membership card selection (not dropdown)
  - [x] Step 1: Choose membership (cards for all packages)
  - [x] Step 2: Personal details (name, email, phone, birthdate, address, start date)
  - [x] Step 3: SEPA payment details (IBAN, account holder, mandaat text)
  - [x] Required checkboxes (SEPA consent, privacy policy, terms)
  - [x] Form validation (IBAN format, email, required fields)
  - [ ] Success page redirect
  - [ ] Email notification to Rashid


#### 10. Backend/Database (Future Phase)
- [ ] Database schema (Cloudflare D1 or similar)
- [ ] memberships table
- [ ] tryouts table
- [ ] contact_submissions table
- [ ] IBAN encryption for sensitive data
- [ ] Admin panel with Cloudflare Zero Trust
- [ ] Dashboard view (new signups, tryout requests)
- [ ] Mark as processed functionality

### Phase 4: Integrations & SEO

#### 11. Integrations
- [x] Google Maps embed (contact page)
- [x] Google Business Profile (reviews display)
- [x] Social media links (Instagram, Facebook, TikTok)
- [x] WhatsApp link (contact page only, no floating widget)
- [x] Click-to-call (tel: links)
- [x] Spotify playlist embed
- [ ] Email notification service (Resend/SendGrid/Cloudflare Email Workers)

#### 12. SEO Implementation
- [x] Page titles optimized for local keywords
- [x] Meta descriptions for all pages
- [x] Heading structure (H1, H2, H3 hierarchy)
- [x] Alt text for images
- [ ] Schema.org markup:
  - [x] LocalBusiness
  - [x] Organization
  - [x] OpeningHoursSpecification
  - [x] AggregateRating (reviews)
  - [x] FAQPage
- [x] XML sitemap
- [x] Robots.txt
- [x] Location pages for secondary cities

#### 13. Performance Optimization
- [x] Images in WebP format with fallbacks
- [x] Lazy loading for below-fold images
- [x] Eager loading for LCP elements (hero image, logo)
- [x] Image optimization (logo: 594KB → 31KB)
- [x] Minified CSS and JavaScript
- [ ] Critical CSS inline
- [ ] CDN configuration (Cloudflare Pages automatic)
- [ ] Core Web Vitals targets: LCP <2.5s, INP <200ms, CLS <0.1

#### 14. Accessibility
- [x] WCAG 2.2 AA compliance
- [x] Semantic HTML throughout
- [x] Keyboard navigation support
- [x] Focus indicators visible
- [x] Color contrast minimum 4.5:1 for text
- [x] Alt text on all images
- [x] Form labels properly associated
- [x] ARIA labels where needed
- [x] Skip navigation link

### Phase 5: Content & Polish

#### 15. Content Requirements
- [x] All copywriting for pages (Dutch, casual tone, "jij/je")
- [x] FAQ answers (15 questions covering common concerns)
- [x] Privacy policy (AVG/GDPR compliant)
- [x] Terms & conditions (SEPA mandaat, membership terms)
- [ ] Opening hours structured data
- [ ] MDT Break Out program details (when owner provides)

#### 16. Visual Assets
- [x] Logo (fitcity-logov2.png)
- [x] Favicon
- [x] Brand color implementation (#FFE303 yellow, #FF2E93 pink for ladies)
- [x] Equipment brand logos (Nautilus, Technogym, SportsArt)
- [ ] Hero video (MP4, muted, loop, <5MB)
- [x] Kickboxing photos (6 images)
- [ ] Ladies-only section photos (placeholder for now)

#### 17. Design Polish
- [x] Industrial aesthetic (hard shadows, 0px border radius)
- [x] 8-point grid spacing system
- [x] Typography (Oswald for headings, Inter for body)
- [x] Mobile-first responsive design
- [x] Theme switching (default yellow → ladies pink)
- [x] Hover states and press effects
- [x] Mobile sticky CTA bar
- [x] Brand logo containers with proper backgrounds

### Phase 6: Testing & Launch

#### 18. Testing Checklist
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS Safari, Chrome Mobile)
- [ ] All forms submit correctly
- [ ] Email notifications deliver
- [ ] All links functional (no 404s)
- [ ] All images load
- [ ] No JavaScript console errors
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Performance benchmarks met
- [ ] SEO validation
- [ ] Accessibility audit passed

#### 19. Pre-Launch
- [ ] DNS configuration for fitcityculemborg.nl
- [ ] SSL certificate active (Cloudflare automatic)
- [ ] Staging environment tested
- [ ] Client review and approval
- [ ] Legal pages reviewed
- [ ] All placeholder content replaced or marked
- [ ] Analytics setup (if adding tracking)
- [ ] Cookie consent (if adding analytics)

#### 20. Post-Launch (Phase 2)
- [ ] Admin panel with Cloudflare Zero Trust
- [ ] Database integration for form submissions
- [ ] Export functionality (CSV)
- [ ] Google Analytics 4 (with cookie consent)
- [ ] Conversion tracking
- [ ] Instagram feed embed
- [ ] Live chat or enhanced WhatsApp widget
- [ ] Member portal (login, manage subscription)
- [ ] Blog/news section
- [ ] Video testimonials
- [ ] Multi-language support (English toggle)
- [ ] Mollie payment integration (if client preference changes)

---

## Key Technical Requirements

### Design Tokens (global.css)
- **Colors:** Yellow #FFE303, Pink #FF2E93, Black #121212, White, Grays
- **Spacing:** 8px, 16px, 24px, 32px, 48px, 64px (8-point grid)
- **Typography:** Oswald (700, uppercase) for headings, Inter (400) for body
- **Shadows:** Hard offset shadows (6px 6px 0px for cards, 4px 4px 0px for buttons)
- **Border Radius:** Always 0px (industrial style)

### Critical Specifications
- **Minimum body text:** 16px (WCAG, mobile zoom prevention)
- **Touch targets:** Minimum 44x44px
- **Line height:** 1.5-1.6 for body, 1.1-1.3 for headings
- **Container max-width:** 1140px desktop, padding: 16px mobile, 48px desktop
- **Breakpoints:** Mobile (<768px), Tablet (768-1199px), Desktop (1200px+)

### Business Info
- **Address:** Houtweg 8, 4104 AB Culemborg
- **Phone:** +31 6 4687 2274
- **Email:** info@fitcityculemborg.nl
- **WhatsApp:** Same as phone
- **Hours:** Mon-Fri 08:30-22:00, Sat 09:00-16:00, Sun 09:30-16:00
- **Established:** August 2018
- **Rating:** 4.8/5 stars (24 reviews)

### Form Configuration
- **Web3Forms Access Key:** `7b91d16e-72f3-4c0e-a8cd-b6b9231807da`
- **Spotify Playlist ID:** `5qgOsipzuv2IS4oNsOjj8D`
- **Success Redirect:** `/success`
- **SEPA Creditor ID:** (TBD by client)

---

## Success Criteria
- **Primary:** Any membership signup through website = WIN
- **Goal:** 10% membership growth over 6 months
- **Performance:** <3s load time on 3G, Core Web Vitals all green
- **SEO:** Rank page 1 for "sportschool Culemborg", "fitness Culemborg", "kickboksen Culemborg"
- **Conversion:** <5% form abandonment, mobile bounce rate <60%