# FitCity Culemborg Redesign: "Refined Raw"

## Context

Demo site for FitCity fitness club in Culemborg. Goal: make the site look more professional to impress the client. Not going live (noindex stays). Keep the identity (dark mode, yellow accent, industrial vibe, budget gym positioning). Polish the execution.

## Approach: "Refined Raw"

Keep the industrial DNA but elevate the execution. Same personality, tighter and more polished.

---

## 1. Colors & Shadows

### Color Token Changes

| Token | Current | New | Reason |
|-------|---------|-----|--------|
| `bg-main` | `#121212` | `#141414` | Slightly warmer, less true black |
| `bg-secondary` | `#1E1E1E` | `#1C1C1C` | Subtler contrast with bg-main |
| `primary` | `#FFE303` | `#FFE303` | Keep, it's the brand |
| `primary-hover` | `#D4BD00` | `#E6CC00` | Brighter hover for better feedback |
| `text-muted` | `#A3A3A3` | `#9A9A9A` | Softer against dark background |
| New: `border-subtle` | n/a | `#2A2A2A` | Replace all `border-white/10` usage |

### Shadow Changes

- Card hover: `6px 6px 0px 0px` hard offset -> `0 4px 20px rgba(255, 227, 3, 0.08)` subtle yellow glow
- Button: `4px 4px 0px 0px #000` -> `0 2px 8px rgba(0,0,0,0.3)` soft depth
- Button hover: `translate(2px, 2px)` push-down -> `translateY(-1px)` lift
- Highlighted pricing card: replace `border-2 border-primary` with always-on yellow glow shadow

### Border Radius

- Buttons: keep `rounded-none` (intentionally industrial)
- Cards: `rounded-sm` (2px)
- Inputs/forms: `rounded-sm`

---

## 2. Typography & Hierarchy

### Font Usage (Oswald + Inter stay)

Reserve Oswald uppercase for big moments only:
- Section titles (h2)
- Hero headline
- Button text
- Footer headings

Everything else switches to Inter:
- Card titles: Inter 600, normal case
- Nav links: Inter 500, normal case
- Subheadings: Inter 400, normal case

### Specific Changes

- Body line-height: increase to `1.7` for readability on dark backgrounds
- Letter spacing: keep `-0.025em` on hero text only, `0` on smaller headings
- Section titles: increase to `text-3xl md:text-4xl` with more top margin
- Section subtitles: slightly larger, more spacing below

---

## 3. Component Polish

### Header
- Replace `border-white/10` with `border-subtle`
- Nav links: normal case, Inter medium

### Hero
- Keep full-screen video hero
- Tighten headline/subheadline spacing
- Google reviews badge: wrap in `bg-white/5 backdrop-blur-sm` pill with rounded corners

### Pricing Cards
- Highlighted card: replace hard border with always-on yellow glow shadow
- "Beste deal" badge: add `rounded-sm`, slightly smaller text
- More internal padding and feature list spacing
- Card titles: Inter semibold, normal case

### "De Vibe" Section
- Keep Spotify embed
- More spacing in checklist items, slightly larger check icons
- New copy (see Section 4)

### USP Cards
- More whitespace inside cards
- Consistent icon sizing
- Titles: Inter semibold, normal case

### FAQ
- `border-subtle` dividers
- Smoother open/close transitions

### Sticky Bottom Bar + WhatsApp Float
- Apply new shadow/border tokens

### Footer
- Replace `border-white/10` with `border-subtle`
- More padding, cleaner grid alignment

---

## 4. Copywriting

Voice: casual, direct, confident. Dutch. Short sentences. No exclamation marks. No em dashes.

### Homepage

**Hero:**
- Headline: `ELKE DAG FITTER` (keep)
- Subheadline: `De meest betaalbare sportschool van Culemborg` (keep)
- CTAs: keep as-is

**Pricing subtitle:** `Geen verborgen kosten. Wat je ziet is wat je betaalt.`

**"De Vibe" section:**
- Subtitle: "Geen poespas. Gewoon een goede gym."
- Heading: "GEBOUWD OM IN TE TRAINEN"
- P1: "Geen smoothiebar. Geen onnodige extra's. Wel degelijke apparatuur, altijd begeleiding en een sfeer waarin je aan de slag gaat."
- P2: "FitCity is de sportschool in Culemborg waar resultaat voorop staat. Fitness, kickboxing of Ladies Only: alles onder een dak, voor de scherpste prijs."
- Checklist: "Gratis begeleiding bij elk bezoek / Professionele apparatuur / Gratis parkeren voor de deur"

**USP section:**
- Subtitle: "Dit maakt ons anders"
- Beste Prijs: "Fitness vanaf 24,50 per maand. Ladies Only vanaf 20,50. Nergens in Culemborg train je voordeliger."
- Ladies Only: "Een aparte trainingsvloer alleen voor vrouwen. Volledig uitgerust, volledige privacy."
- Geen Gedoe: "Personeel aanwezig tijdens alle openingstijden. Hulp nodig? Gewoon vragen."
- Raw Energy -> renamed "Echte Gym Sfeer": "Geen steriele witte muren. Rauw, energiek en gebouwd om in te trainen."

### Ladies Only Page

- Meta description: "Ladies Only fitness in Culemborg. Eigen damesvloer met volledige privacy, vanaf 20,50 per maand. Altijd begeleiding, gratis parkeren."
- Hero subheadline: "Een eigen vloer, alleen voor vrouwen"
- P1: "Een eigen trainingsvloer, alleen voor vrouwen. Volledig uitgerust met alle apparatuur die je nodig hebt. In je eigen ruimte, op je eigen tempo."
- P2: "Dezelfde FitCity energie, maar met de privacy die je zoekt. Geen wachten, geen ongemak. Gewoon trainen."

### Kickboxing Page

- Meta description: "Kickboxing in Culemborg bij FitCity. Lessen op dinsdag, donderdag en zondag voor alle niveaus. Vanaf 19,95 per maand."
- Hero subheadline: "Kracht, conditie en techniek. Voor elk niveau."
- P1: "Of je voor het eerst een bokshandschoen aantrekt of al jaren traint: onze lessen passen zich aan jouw niveau aan."
- P2: "Elke les is een complete workout. Conditie, kracht, techniek en zelfvertrouwen in een sessie."

### Meta Titles (SEO)

| Page | Current | New |
|------|---------|-----|
| Home | "Home \| FitCity Culemborg" | "Sportschool Culemborg \| FitCity" |
| Ladies Only | "Ladies Only \| FitCity Culemborg" | "Ladies Only Fitness Culemborg \| FitCity" |
| Kickboxing | "Kickboxing \| FitCity Culemborg" | "Kickboxing Culemborg \| FitCity" |
| Contact | "Contact \| FitCity Culemborg" | Keep as-is |

---

## 5. Scope Summary

- All changes are visual polish and copy rewrites
- No structural changes to page layouts
- No new pages or components
- Keep all existing functionality (video hero, Spotify, FAQ accordion, sticky bar, WhatsApp float)
- Ladies theme and kickboxing theme get the same token updates
