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