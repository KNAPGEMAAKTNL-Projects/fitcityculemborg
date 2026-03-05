# "Refined Raw" Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Polish the FitCity Culemborg website visually and rewrite copy to look professional for client demo.

**Architecture:** CSS token changes in global.css cascade to all components. Component edits are isolated per-file. Copy changes are in data files and page templates. No structural changes.

**Tech Stack:** Astro, Tailwind CSS 4, TypeScript

---

### Task 1: Create feature branch

**Step 1: Create and switch to feature branch**

Run: `git checkout -b redesign/refined-raw`

**Step 2: Verify branch**

Run: `git branch --show-current`
Expected: `redesign/refined-raw`

---

### Task 2: Update color tokens and shadows in global.css

**Files:**
- Modify: `src/styles/global.css`

**Step 1: Update theme tokens**

In the `@theme` block, change:

```css
@theme {
  /* Colors - Core Palette */
  --color-bg-main: #141414;
  --color-bg-secondary: #1C1C1C;
  --color-primary: #FFE303;
  --color-primary-hover: #E6CC00;
  --color-ladies-accent: #FF2E93;
  --color-ladies-bg: #1A0F16;
  --color-text-main: #FFFFFF;
  --color-text-muted: #9A9A9A;
  --color-success: #00E676;
  --color-border-subtle: #2A2A2A;

  /* Typography */
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;

  /* Shadows - Refined */
  --shadow-card-hover: 0 4px 20px rgba(255, 227, 3, 0.08);
  --shadow-button: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-card-hover-ladies: 0 4px 20px rgba(255, 46, 147, 0.08);
  --shadow-card-glow: 0 0 20px rgba(255, 227, 3, 0.12);

  /* Spacing scale */
  --spacing-section: 5rem;
  --spacing-section-mobile: 3rem;

  /* Reset border radius */
  --radius-*: initial;
}
```

**Step 2: Update base styles for typography hierarchy**

Change the base layer:

```css
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-bg-main);
    color: var(--color-text-main);
    line-height: 1.7;
  }

  h1 {
    font-family: var(--font-display);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  h2 {
    font-family: var(--font-display);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0;
  }

  h3, h4, h5, h6 {
    font-family: var(--font-body);
    font-weight: 600;
    letter-spacing: 0;
  }
}
```

**Step 3: Update button and card component styles**

```css
@layer components {
  .btn-primary {
    @apply bg-primary text-black font-display uppercase font-bold px-8 py-4 rounded-none;
    box-shadow: var(--shadow-button);
    transition: all 0.15s ease;
    cursor: pointer;
  }

  .btn-primary:hover {
    @apply bg-primary-hover;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  .btn-ghost {
    @apply border-2 border-white text-white font-display uppercase font-bold px-8 py-4 rounded-none bg-transparent;
    transition: all 0.15s ease;
    cursor: pointer;
  }

  .btn-ghost:hover {
    @apply bg-white text-black;
  }

  .card-industrial {
    @apply bg-bg-secondary rounded-sm border-0 transition-shadow duration-200;
  }

  .card-industrial:hover {
    box-shadow: var(--shadow-card-hover);
  }

  .glass-bar {
    @apply bg-bg-main/80 backdrop-blur-md;
  }
}
```

**Step 4: Update ladies and kickboxing theme variants**

```css
[data-theme="ladies"] {
  --color-primary: #FF2E93;
  --color-primary-hover: #D4247A;
  --color-bg-main: #1A0F16;
  --shadow-card-hover: 0 4px 20px rgba(255, 46, 147, 0.08);
  --shadow-card-glow: 0 0 20px rgba(255, 46, 147, 0.12);
}

[data-theme="kickboxing"] {
  --color-primary: #FF5722;
  --color-primary-hover: #E64A19;
  --shadow-card-hover: 0 4px 20px rgba(255, 87, 34, 0.08);
  --shadow-card-glow: 0 0 20px rgba(255, 87, 34, 0.12);
}
```

**Step 5: Verify build**

Run: `cd "C:/Code/01. B2B Projects/fitcityculemborg" && npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add src/styles/global.css
git commit -m "style: refine color tokens, shadows, and typography hierarchy

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 3: Update Header and MobileMenu

**Files:**
- Modify: `src/components/global/Header.astro`
- Modify: `src/components/global/MobileMenu.astro`

**Step 1: Update Header.astro**

Change line 14 border class and nav link styles:

```astro
<header class="sticky top-0 z-40 bg-bg-main/95 backdrop-blur-sm border-b border-border-subtle">
  <nav class="max-w-7xl mx-auto px-4 md:px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <Image src={logo} alt="FitCity Culemborg" class="h-12 md:h-14 w-auto" loading="eager" fetchpriority="high" inferSize />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <OpenStatusBadge />
        <a href="/#pricing" class="text-text-main hover:text-primary transition-colors font-medium">Prijzen</a>
        <a href="/ladies-only/" class="text-text-main hover:text-primary transition-colors font-medium">Ladies Only</a>
        <a href="/kickboxing/" class="text-text-main hover:text-primary transition-colors font-medium">Kickboxing</a>
        <a href="/contact/" class="text-text-main hover:text-primary transition-colors font-medium">Contact</a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        id="mobile-menu-button"
        class="md:hidden text-text-main hover:text-primary transition-colors"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </nav>
</header>
```

Key changes: `border-white/10` -> `border-border-subtle`, nav links to normal case with `font-medium`.

**Step 2: Update MobileMenu.astro**

Change borders from `border-white/10` to `border-border-subtle` on lines 26 and 42. Change nav link styles from `font-display` uppercase to `font-medium` normal case:

Line 26: `border-b border-white/10` -> `border-b border-border-subtle`
Line 42: `border-b border-white/10` -> `border-b border-border-subtle`

Nav links (lines 47-69): Change each from:
```
class="text-xl font-display text-text-main hover:text-primary transition-colors mobile-menu-link"
```
to:
```
class="text-xl font-medium text-text-main hover:text-primary transition-colors mobile-menu-link"
```

And change the link text from uppercase to normal case:
- `PRIJZEN` -> `Prijzen`
- `LADIES ONLY` -> `Ladies Only`
- `KICKBOXING` -> `Kickboxing`
- `CONTACT` -> `Contact`

**Step 3: Commit**

```bash
git add src/components/global/Header.astro src/components/global/MobileMenu.astro
git commit -m "style: refine header and mobile menu typography and borders

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 4: Update SectionHeading component

**Files:**
- Modify: `src/components/ui/SectionHeading.astro`

**Step 1: Update SectionHeading.astro**

Replace the full component template:

```astro
<div class={`mb-14 ${alignClass}`}>
  <h2 class="text-3xl md:text-4xl font-display mb-4">
    {title}
  </h2>
  {subtitle && (
    <p class="text-text-muted text-lg max-w-2xl mx-auto mt-3">
      {subtitle}
    </p>
  )}
</div>
```

Key changes: `mb-12` -> `mb-14`, heading size from `text-4xl md:text-5xl` to `text-3xl md:text-4xl`, added `mt-3` to subtitle.

**Step 2: Commit**

```bash
git add src/components/ui/SectionHeading.astro
git commit -m "style: refine section heading sizing and spacing

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 5: Update HeroVideo component

**Files:**
- Modify: `src/components/sections/HeroVideo.astro`

**Step 1: Update hero content area**

In the content div (around line 63-136), update:

1. Tighten headline spacing: `mb-6` -> `mb-4`
2. Tighten subheadline spacing: `mb-8` -> `mb-6`
3. Wrap Google reviews in a pill. Replace the reviews div (lines 91-135) with:

```astro
{showGoogleReviews && (
  <div class="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full">
    {/* Stars */}
    <div class="flex items-center gap-1">
      {(() => {
        const fullStars = Math.floor(googleRating);
        const partialFill = (googleRating % 1) * 100;
        const hasPartialStar = partialFill > 0;
        const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0);

        return (
          <>
            {Array.from({ length: fullStars }).map(() => (
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {hasPartialStar && (
              <svg class="w-5 h-5" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="partial-star">
                    <stop offset={`${partialFill}%`} stop-color="#FFE303" />
                    <stop offset={`${partialFill}%`} stop-color="#9A9A9A" stop-opacity="0.3" />
                  </linearGradient>
                </defs>
                <path fill="url(#partial-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
            {Array.from({ length: emptyStars }).map(() => (
              <svg class="w-5 h-5 text-text-muted opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </>
        );
      })()}
    </div>
    <span class="text-white font-semibold text-lg">{googleRating}</span>
    <span class="text-text-muted">|</span>
    <span class="text-text-muted text-sm">{googleReviewCount} Google reviews</span>
  </div>
)}
```

**Step 2: Commit**

```bash
git add src/components/sections/HeroVideo.astro
git commit -m "style: refine hero spacing and add review badge pill

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 6: Update PricingCard component

**Files:**
- Modify: `src/components/sections/PricingCard.astro`

**Step 1: Update card styling**

Changes to make in PricingCard.astro:

1. Replace the highlighted card border logic (lines 53-58). Change from border to glow shadow:

```astro
<div
  class:list={[
    'relative card-industrial p-8 md:p-10 flex flex-col h-full',
    isHighlighted && 'shadow-[var(--shadow-card-glow)]'
  ]}
>
```

2. Update the "Beste deal" badge (line 61-63):

```astro
{isHighlighted && (
  <div class="absolute top-0 right-0 px-3 py-1 bg-primary text-black text-[11px] font-bold uppercase rounded-sm">
    Beste deal
  </div>
)}
```

3. Card title (line 67-69): remove `font-display`, use normal case:

```astro
<h3 class="font-semibold text-xl md:text-2xl max-w-[70%]">
  {name}
</h3>
```

4. More spacing in features list (line 102): `space-y-3` -> `space-y-4`

**Step 2: Commit**

```bash
git add src/components/sections/PricingCard.astro
git commit -m "style: refine pricing card with glow shadow and better typography

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 7: Update USPCard component

**Files:**
- Modify: `src/components/sections/USPCard.astro`

**Step 1: Update card template**

Replace lines 18-22:

```astro
<div class="card-industrial p-8 text-center">
  <div class="flex justify-center mb-5 text-primary" set:html={iconMap[icon] || icon} />
  <h3 class="font-semibold text-xl mb-3">{title}</h3>
  <p class="text-text-muted text-sm leading-relaxed">{description}</p>
</div>
```

Key changes: `p-6` -> `p-8`, `mb-4` -> `mb-5`, removed `font-display` from h3, added `leading-relaxed`.

**Step 2: Commit**

```bash
git add src/components/sections/USPCard.astro
git commit -m "style: add more whitespace to USP cards and refine typography

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 8: Update FAQItem component

**Files:**
- Modify: `src/components/sections/FAQItem.astro`

**Step 1: Update FAQItem.astro**

Replace the template:

```astro
<details class="group border-b border-border-subtle py-5">
  <summary class="flex justify-between items-center cursor-pointer list-none">
    <h3 class="font-semibold text-lg pr-4">{question}</h3>
    <svg
      class="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <div class="mt-4 text-text-muted leading-relaxed">
    <p>{answer}</p>
  </div>
</details>
```

Key changes: `border-white/10` -> `border-border-subtle`, `py-4` -> `py-5`, added `duration-200` to transition, removed `font-display` from h3, added `leading-relaxed` to answer.

**Step 2: Commit**

```bash
git add src/components/sections/FAQItem.astro
git commit -m "style: refine FAQ borders and typography

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 9: Update Footer

**Files:**
- Modify: `src/components/global/Footer.astro`

**Step 1: Update Footer.astro borders and spacing**

Line 6: `border-t border-white/10 py-12` -> `border-t border-border-subtle py-14`
Line 83: `border-t border-white/10` -> `border-t border-border-subtle`

**Step 2: Commit**

```bash
git add src/components/global/Footer.astro
git commit -m "style: update footer borders and spacing

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 10: Update StickyBottomBar and WhatsAppFloat

**Files:**
- Modify: `src/components/global/StickyBottomBar.astro`

**Step 1: Update StickyBottomBar.astro**

Line 15: `border-t border-white/10` -> `border-t border-border-subtle`

**Step 2: Commit**

```bash
git add src/components/global/StickyBottomBar.astro
git commit -m "style: update sticky bar border token

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 11: Update USPGrid border and PricingGrid border

**Files:**
- Modify: `src/components/sections/USPGrid.astro`
- Modify: `src/components/sections/PricingGrid.astro`

**Step 1: Update USPGrid.astro**

Line 25: `border-t border-white/10` -> `border-t border-border-subtle`

**Step 2: Update PricingGrid.astro**

Line 45: `border border-white/10` -> `border border-border-subtle`

**Step 3: Commit**

```bash
git add src/components/sections/USPGrid.astro src/components/sections/PricingGrid.astro
git commit -m "style: update remaining border tokens in USPGrid and PricingGrid

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 12: Update SalesLayout and ContactForm borders

**Files:**
- Modify: `src/layouts/SalesLayout.astro`
- Modify: `src/components/forms/ContactForm.astro`
- Modify: `src/components/global/MobileMenu.astro` (if not already updated)

**Step 1: Update SalesLayout.astro**

Line 37: `border-b border-white/10` -> `border-b border-border-subtle`

**Step 2: Update ContactForm.astro input styling**

Replace all `rounded-none` on inputs/selects/textareas with `rounded-sm`:

Lines 34, 49, 63, 76, 97: Change `rounded-none` to `rounded-sm`

**Step 3: Commit**

```bash
git add src/layouts/SalesLayout.astro src/components/forms/ContactForm.astro
git commit -m "style: update SalesLayout borders and form input radius

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 13: Update homepage copy and meta titles

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Step 1: Update index.astro**

Change the pricing section subtitle (line 38-39):
```astro
<SectionHeading
  title="Prijzen"
  subtitle="Geen verborgen kosten. Wat je ziet is wat je betaalt."
/>
```

Change USP section subtitle (line 50-53):
```astro
<SectionHeading
  title="Waarom FitCity?"
  subtitle="Dit maakt ons anders"
/>
```

**Step 2: Update BaseLayout.astro title pattern**

Line 36: Change from:
```astro
<title>{title} | FitCity Culemborg</title>
```
to:
```astro
<title>{title === 'Home' ? 'Sportschool Culemborg | FitCity' : `${title} | FitCity Culemborg`}</title>
```

Also update the OG title on line 44 similarly:
```astro
<meta property="og:title" content={title === 'Home' ? 'Sportschool Culemborg | FitCity' : `${title} | FitCity Culemborg`} />
```

**Step 3: Commit**

```bash
git add src/pages/index.astro src/layouts/BaseLayout.astro
git commit -m "copy: update homepage section subtitles and SEO title pattern

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 14: Update VibeSection copy

**Files:**
- Modify: `src/components/sections/VibeSection.astro`

**Step 1: Update VibeSection.astro**

Replace the section heading (lines 9-11):
```astro
<SectionHeading
  title="De Vibe"
  subtitle="Geen poespas. Gewoon een goede gym."
/>
```

Replace the content div (lines 14-47):
```astro
<div class="grid md:grid-cols-2 gap-12 items-center">
  <div class="space-y-6">
    <h3 class="font-display text-2xl md:text-3xl text-primary uppercase">
      GEBOUWD OM IN TE TRAINEN
    </h3>
    <p class="text-text-muted leading-relaxed">
      Geen smoothiebar. Geen onnodige extra's. Wel degelijke apparatuur, altijd
      begeleiding en een sfeer waarin je aan de slag gaat.
    </p>
    <p class="text-text-muted leading-relaxed">
      FitCity is de sportschool in Culemborg waar resultaat voorop staat.
      Fitness, kickboxing of Ladies Only: alles onder een dak, voor de
      scherpste prijs.
    </p>
    <ul class="space-y-4">
      <li class="flex items-start gap-3">
        <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-text-main">Gratis begeleiding bij elk bezoek</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-text-main">Professionele apparatuur</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-text-main">Gratis parkeren voor de deur</span>
      </li>
    </ul>
  </div>

  <div>
    <SpotifyEmbed playlistId="28nRTAuO50OzDEoP8ioyjz" />
  </div>
</div>
```

Key changes: new subtitle, heading, paragraphs, and checklist items. Icons slightly larger (`w-6 h-6`), more spacing (`space-y-4`).

**Step 2: Commit**

```bash
git add src/components/sections/VibeSection.astro
git commit -m "copy: rewrite vibe section with benefit-driven copy

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 15: Update USP data

**Files:**
- Modify: `src/data/usps.ts`

**Step 1: Update usps.ts**

Replace the full export:

```typescript
export const uspData: USPData[] = [
  {
    id: 'price-leader',
    icon: 'tag',
    title: 'Beste Prijs',
    description: 'Fitness vanaf 24,50 per maand. Ladies Only vanaf 20,50. Nergens in Culemborg train je voordeliger.'
  },
  {
    id: 'ladies-only',
    icon: 'users',
    title: 'Ladies Only',
    description: 'Een aparte trainingsvloer alleen voor vrouwen. Volledig uitgerust, volledige privacy.'
  },
  {
    id: 'no-fluff',
    icon: 'check',
    title: 'Geen Gedoe',
    description: 'Personeel aanwezig tijdens alle openingstijden. Hulp nodig? Gewoon vragen.'
  },
  {
    id: 'raw-vibe',
    icon: 'dumbbell',
    title: 'Echte Gym Sfeer',
    description: 'Geen steriele witte muren. Rauw, energiek en gebouwd om in te trainen.'
  },
];
```

**Step 2: Commit**

```bash
git add src/data/usps.ts
git commit -m "copy: rewrite USP descriptions with specific benefits

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 16: Update Ladies Only page copy and meta

**Files:**
- Modify: `src/pages/ladies-only.astro`

**Step 1: Update ladies-only.astro**

Change meta description (line 14):
```
description="Ladies Only fitness in Culemborg. Eigen damesvloer met volledige privacy, vanaf 20,50 per maand. Altijd begeleiding, gratis parkeren."
```

Change title (line 13):
```
title="Ladies Only Fitness Culemborg"
```

Change hero subheadline (line 19):
```
subheadline="Een eigen vloer, alleen voor vrouwen"
```

Change "Over Ladies Only" subtitle (line 29):
```
subtitle="Volledig uitgerust, volledige privacy"
```

Change paragraph 1 (lines 33-36):
```astro
<p class="text-text-muted leading-relaxed">
  Een eigen trainingsvloer, alleen voor vrouwen. Volledig uitgerust met
  alle apparatuur die je nodig hebt. In je eigen ruimte, op je eigen tempo.
</p>
```

Change paragraph 2 (lines 37-40):
```astro
<p class="text-text-muted leading-relaxed">
  Dezelfde FitCity energie, maar met de privacy die je zoekt. Geen wachten,
  geen ongemak. Gewoon trainen.
</p>
```

**Step 2: Commit**

```bash
git add src/pages/ladies-only.astro
git commit -m "copy: rewrite Ladies Only page with benefit-driven copy and SEO meta

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 17: Update Kickboxing page copy and meta

**Files:**
- Modify: `src/pages/kickboxing.astro`

**Step 1: Update kickboxing.astro**

Change title (line 22):
```
title="Kickboxing Culemborg"
```

Change description (line 23):
```
description="Kickboxing in Culemborg bij FitCity. Lessen op dinsdag, donderdag en zondag voor alle niveaus. Vanaf 19,95 per maand."
```

Change hero subheadline (line 49):
```astro
<p class="text-xl md:text-2xl text-text-main mb-8">
  Kracht, conditie en techniek. Voor elk niveau.
</p>
```

Change "Over onze lessen" subtitle (line 84):
```
subtitle="Voor beginners en gevorderden"
```
(Keep this one, it's fine.)

Change paragraph 1 (lines 87-90):
```astro
<p class="text-text-muted leading-relaxed">
  Of je voor het eerst een bokshandschoen aantrekt of al jaren traint:
  onze lessen passen zich aan jouw niveau aan.
</p>
```

Change paragraph 2 (lines 91-95):
```astro
<p class="text-text-muted leading-relaxed">
  Elke les is een complete workout. Conditie, kracht, techniek en
  zelfvertrouwen in een sessie.
</p>
```

**Step 2: Commit**

```bash
git add src/pages/kickboxing.astro
git commit -m "copy: rewrite Kickboxing page with benefit-driven copy and SEO meta

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 18: Update Contact page border tokens

**Files:**
- Modify: `src/pages/contact.astro`

**Step 1: Update contact.astro**

Line 28: `border-2 border-white/10` -> `border-2 border-border-subtle`

**Step 2: Commit**

```bash
git add src/pages/contact.astro
git commit -m "style: update contact page border tokens

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 19: Final build verification

**Step 1: Run full build**

Run: `cd "C:/Code/01. B2B Projects/fitcityculemborg" && npm run build`
Expected: Build succeeds with no errors

**Step 2: Run dev server and visually verify**

Run: `cd "C:/Code/01. B2B Projects/fitcityculemborg" && npm run dev`
Expected: Dev server starts. Manually check:
- Homepage: refined shadows, updated copy, better typography hierarchy
- Ladies Only: new copy, theme still works
- Kickboxing: new copy, theme still works
- Contact: updated borders, form inputs have rounded-sm
- Mobile: menu has normal case links, sticky bar has new border
