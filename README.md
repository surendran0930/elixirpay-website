# ElixirPay

SvelteKit marketing site scaffold, built from the project spec doc and the
Figma design system (Tokens — Colour palette / Typography / Buttons).

## Stack
- **Framework:** SvelteKit
- **Styling:** Tailwind CSS
- **Deployment:** Netlify (`@sveltejs/adapter-netlify`)
- **Design base:** authored at 1920×1080, fluid-scaled down through the breakpoints below

## Design tokens (from Figma)
- **Colors:** full gray/blue/green/red/amber scales (50–900) wired into `tailwind.config.js`, plus brand accent (`blue-500 #1555FC`) and brand primary text (`gray-900 #171717`). Orange/teal/violet are included as optional brand picks — those were greyed out in the source file, so double-check the hex values against Figma directly.
- **Typography:** primary typeface **Host Grotesk**, secondary/mono typeface **Geist Mono**, both loaded via Google Fonts in `app.html`. Full web scale (12px–88px) and paragraph scale (12px–24px) are in `tailwind.config.js` as `text-web-*` / `text-para-*` utilities. `h1`/`h2`/`h3` use `clamp()` for fluid scaling instead of fixed breakpoints.
- **Buttons:** `src/lib/components/Button.svelte` implements the color × state matrix (solid/outline, hover/active/disabled/loading) across neutral/blue/green/amber/red/orange.

## Breakpoints (from Section 14 of the spec)
| Device | Width |
|---|---|
| Small mobile | 320–479px |
| Large mobile (`sm`) | 480–767px |
| Tablet (`md`) | 768–1023px |
| Laptop/small desktop (`lg`) | 1024–1439px |
| Large desktop (`xl`) | 1440–1919px |
| Design-native (`2xl`) | 1920px+ |

## Setup
```bash
npm install
npm run dev
```

## Structure
```
src/
  routes/
    +layout.svelte     # wraps every page with Nav + Footer
    +page.svelte        # Landing page ("/")
    about/+page.svelte
    services/+page.svelte
    careers/+page.svelte
    contact/+page.svelte
    blog/+page.svelte
  lib/components/
    Nav.svelte
    Footer.svelte
    Button.svelte        # color/variant/state system from the Figma button matrix
  app.css                # base styles, fluid heading scale, container utility
  app.html                # Google Fonts (Host Grotesk, Geist Mono)
tailwind.config.js        # full color palette, type scale, breakpoints
netlify.toml
```

## Still needs from you (marked `TODO` in the code)
1. **Actual page copy and imagery** per section — the sections are stubbed in the right order but content is placeholder.
2. **Component-level frames** (hero layout, card grids, testimonial layout, FAQ accordion) — I only had the token/style-guide frames (colors, type, buttons), not the assembled page layouts, so section internals are basic placeholders.
3. **Form behavior** on the Contact page — validation, success state, submission endpoint.
4. **Legal pages** (`/privacy`, `/terms`) — currently linked from the footer but not built.
5. Blog is stubbed as static for now — flag if it should be CMS-driven (Section 2 mentions this as an open question).
6. Double-check the orange/teal/violet brand color hex values — they were shown greyed-out/unselected in the source screenshot, so those specific reads are lower-confidence than the primary palette.

## Notes
- `npm install` hasn't been run in this environment (no network access here) — run it locally or in your CI/deploy pipeline.

