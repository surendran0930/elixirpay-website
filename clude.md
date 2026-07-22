# ElixirPay — project context for Claude Code

This file is project memory for Claude Code. It captures decisions, tokens,
and open questions from the build-so-far so work can continue here without
re-deriving context. Update this file as the project evolves — treat it as
the source of truth alongside the original spec doc (ask the user for it if
missing; it defines site structure, build order, and page-by-page sections).

## Project

Marketing site for **ElixirPay**, a B2B payment gateway. SvelteKit +
Tailwind CSS, deployed to Netlify. Design is authored at a 1920×1080 base
and pulled from a Figma file (`o76ofrF8kdPYdzGFIsJDS6`) — the design-system
frames (colors/typography/buttons) were readable via screenshots the user
pasted into chat; the Figma MCP connector could not get edit access to the
file (owner account mismatch — connected account was a different Figma
login than the file owner). If Figma access is set up in this environment,
prefer pulling `get_design_context` directly over asking the user for more
screenshots.

**Build order** (from the spec doc): Landing → About Us → Services →
Careers → Contact Us → Blog. Landing page is the only one with real design
fidelity so far (see Hero.svelte below) — every other route is a stub with
`<!-- TODO -->` comments and placeholder copy.

## Stack

- SvelteKit (`@sveltejs/adapter-netlify`)
- Tailwind CSS — all design tokens live in `tailwind.config.js`
- No component library beyond hand-rolled `src/lib/components/`
- Fonts: **Host Grotesk** (primary/sans) + **Geist Mono** (secondary/mono),
  loaded via Google Fonts `<link>` in `src/app.html`

## Design tokens (`tailwind.config.js`)

- Full color scales (50–900) for `gray`, `blue`, `green`, `red`, `amber` —
  read directly off Figma color-palette screenshots, high confidence.
- `orange`, `teal`, `violet` scales are also present but were **greyed
  out/unselected** in the source screenshot — low-confidence hex reads,
  flagged with a comment in the config. Verify against Figma before using
  them anywhere visible.
- `brand.accent` = `blue-500 (#1555FC)`, `brand.primary` = `gray-900
  (#171717)`.
- Font-size scale: `text-web-*` (12–88px, the "Web scale" from Figma
  typography tokens) and `text-para-*` (12–24px, the "Paragraph scale").
  Both are Tailwind `fontSize` entries with baked-in line-heights.
  **Paragraph line-height was reduced from 1.6 → 1.45** per user feedback —
  don't revert without checking.
- Breakpoints are custom, matching the spec's Responsive Sizing Reference
  table: `sm:480 md:768 lg:1024 xl:1440 2xl:1920` (not Tailwind defaults).

## Typography rule — important, easy to regress

**Only buttons use the secondary/mono font (`font-mono` → Geist Mono).**
Everything else (headings, body copy, nav links) uses the primary font
(default `font-sans` → Host Grotesk, no class needed since it's the body
default). This is centralized in `src/lib/components/Button.svelte`, which
applies `font-mono` to every button site-wide — if you add a new CTA/button
outside that component, apply `font-mono` explicitly and nothing else
should have it. This was a repeated correction point earlier — don't let it
drift back to mono-everywhere.

## Components (`src/lib/components/`)

- **Button.svelte** — the only button primitive. Props: `color` (neutral |
  blue | green | amber | red | orange), `variant` (solid | outline),
  `disabled`, `loading`, `type`. Responsive padding built in (`px-5 py-2.5
  text-para-14` on mobile → `sm:px-6 sm:py-3 sm:text-para-16`). Always
  carries `font-mono`.
- **Nav.svelte** — light-theme nav for all inner pages (About, Services,
  Careers, Contact, Blog). Desktop: inline links + `Button`. Mobile: a
  right-side sliding drawer (fixed panel, `translate-x-full` ↔
  `translate-x-0`, with a click-to-close backdrop overlay) — **not** a
  simple stacked dropdown, that was explicitly requested.
- **Hero.svelte** — landing-page-only. Has its own dark nav (same
  right-drawer pattern, dark themed) because the landing page's nav sits
  transparently over the hero background rather than using the shared
  light `Nav`. `src/routes/+layout.svelte` checks `$page.url.pathname ===
  '/'` and skips rendering the shared `Nav` there for exactly this reason.
- **Footer.svelte** — shared across all pages, unremarkable.
- **Hero.svelte's nav is `position: fixed`, not `sticky`** — it needs to
  persist across the Hero section *and* every stub section below it on the
  landing page (explicit user request: "keep the nav bar to all the
  section"). `sticky` was tried first, but a sticky element only stays
  stuck while scrolling through its own containing block — since this
  header lives nested inside Hero's own `<section>` (kept there so it can
  still visually overlay the dark hero background at the top, see below),
  it would've disappeared once the user scrolled past Hero into "About &
  Social proof" etc. `fixed` sidesteps that entirely (viewport-relative,
  doesn't care about DOM nesting or section boundaries), so the header
  didn't need to move out of Hero.svelte at all.
  - **`inset-x-0` is required alongside `fixed`**, not decorative: a fixed
    element with `width: auto` and no `left`/`right` shrinks to fit its
    content instead of filling the viewport, which would break
    `container-page`'s `max-width` + `mx-auto` centering (the unscrolled
    state relies on `container-page` for its width).
  - **Because `fixed` no longer reserves flow height**, the hero-copy div
    right after it had its `pt-20` bumped to `pt-[180px] md:pt-[220px]` —
    sized to clear the header's own unscrolled height (~100px mobile,
    ~136px desktop, from `py-8` + logo height) plus the original 80px
    gap. If the header's padding/logo size changes, re-check this doesn't
    need bumping too, or the H1 will render partly under the nav.
  - Still **shrinks into a floating pill on scroll** — past
    `window.scrollY > 24` (tracked via `scrolled`, rAF-throttled scroll
    listener in `onMount`), it switches from the full-width transparent bar
    (`container-page`, `py-8`) to a centered, inset, rounded-full dark card
    (`bg-black/90 backdrop-blur-md`, `top-4`, `max-w-5xl`) with a smaller
    logo (`h-[72px]` → `h-9`) — all via `transition-all duration-300` so it
    animates rather than snapping. Added per a user-supplied reference
    screenshot of the desired scrolled state; `Nav.svelte` (inner pages)
    does **not** have any of this fixed/shrink behavior — it stays a flat
    sticky bar, since it isn't asked to persist past its own page's content.
  - The **center nav links group** (`Home`/`Products`/`Services`/`About`)
    has no background of its own — just `flex items-center gap-1
    text-para-14` on the `<nav>`. It originally had `rounded-full
    bg-white/10 p-1.5`, giving it its own translucent gray/dark capsule
    sitting on top of the outer black bar; removed per an explicit "nav
    bar: remove the centre gray background" correction. "Home" still gets
    its own solid white pill (`rounded-full bg-white`) since that's a
    separate per-link style, not the removed group background.
  - On mobile specifically (below `md`), the un-scrolled logo is `h-9`
    (matching the scrolled size) rather than `h-[72px]` — only `md:` and up
    get the full 72px — and the hamburger button is bumped to `text-[32px]`
    (from the browser default ~16px). Both per explicit user sizing
    feedback on a mobile screenshot; don't reset these to match desktop.
- **Logo** — both `Hero.svelte` and `Nav.svelte` render the exact provided
  asset directly as `<img src=".../Nav%20bar/elixirpaylogo.svg">` at 2x size
  (`h-[72px]` in Hero, `h-16` in Nav), per explicit user request for pixel
  fidelity to the Figma export over any recreation. Sized up from an
  original ~36–40px baseline the same way it was doubled once before.
  **Known constraint:** this asset's "ElixirPay" wordmark is baked into a
  raster with the text color fixed white (confirmed by decoding the SVG's
  embedded base64 PNG) — it can only read correctly on a dark background.
  `Nav.svelte` is on a white page, so the logo sits inside a
  `bg-gray-900` rounded chip there purely so the white text stays legible;
  don't remove that chip without swapping in a dark-text asset first.
  `Hero.svelte` needs no chip since its dark background already matches.
  - A prior attempt built a scroll-adaptive version instead (an inline
    vector icon + the wordmark re-rendered as live Host Grotesk text in
    `Logo.svelte`, color driven by a `$navTheme` store that tracked which
    page section — via `data-nav-theme="dark"|"light"` attributes — was
    scrolled behind the sticky nav). It worked, but the user explicitly
    prioritized exact-asset fidelity over that adaptive behavior, so it was
    reverted: `Logo.svelte`, `src/lib/stores/navTheme.js`, and the
    `data-nav-theme` attributes in `+page.svelte` were all deleted. If
    adaptive nav color ever comes back, a dark-text variant of this asset
    is a prerequisite — the live-text approach is the fallback if one
    never gets provided.

## Hero section — implementation notes (read before touching)

This section went through many iterations; the current structure resolves
real bugs, not just style preference:

1. **Background is a capped-height absolutely-positioned layer**
   (`h-[1050px]`), not a full-section `background-image`. The dashboard
   screenshot sits in normal document flow below the CTAs and is taller
   than that background layer, so its lower portion naturally spills onto
   plain white. This is what produces the "floating dashboard" look. An
   earlier version tried to achieve this with negative-margin overflow
   tricks (`-mb-*` on the image, pulling either sibling content or the
   whole section up) — that approach was fragile: it depended on
   margin-collapse behavior, required manually tuning the *next* section's
   top padding to compensate, and produced an inconsistent gap when
   combined with `flex: 1` sizing. If the cut point looks wrong, adjust the
   **`h-[1050px]`** value on the background div — that's the one number
   that controls it. This value is an estimate from a reference screenshot,
   not a measured Figma value.
   - **The background is currently just the plain CSS `linear-gradient`,
     no interactive/pointer effect of any kind.** This is the end state of
     a long back-and-forth trying to give the Hero background an
     interactive pointer effect — worth reading in full before
     re-attempting any of this, since every prior approach either broke,
     needed real debugging, or was explicitly undone:
     1. User referenced `motion-core.dev/docs/fluid-image-reveal` — 404s/
        503s from this sandbox every time it's been fetched.
     2. Verified via WebFetch that the `motion-core` *org* is real and
        publishes `@motion-core/motion-gpu` (a low-level WebGPU shader
        *runtime*, no built-in fluid effect, real docs at `motion-gpu.dev`)
        — concluded not a fit.
     3. A from-scratch WebGL2 Stable Fluids plan (`FluidReveal.svelte` +
        `fluidEngine.ts`) was designed in detail but never approved.
     4. `webgl-fluid-enhanced` (real npm package) was verified and fully
        implemented, including real bug fixes (`pause()` turned out to be
        a toggle not a setter; `TRANSPARENT: false` initially made the
        hero look like a flat dead rectangle at rest until changed to
        `true`). Was the live implementation for a while.
     5. User shared a real, live screenshot of `motion-core.dev` and asked
        to swap to its `<FluidSimulation>` component. That swap **was
        implemented** — **then explicitly reverted** back to
        `webgl-fluid-enhanced`, before two real open questions could be
        verified: (a) whether `motion-core`'s CLI-based install actually
        resolves as a plain `import ... from 'motion-core'`, and (b) its
        docs used **Svelte 5 rune syntax** against this **Svelte 4.2**
        project, unconfirmed whether the real component would compile.
     6. User asked for "the best" effect, full creative latitude, then
        clarified: **"suggest anything without risk."** Given three
        straight rounds of friction, went to Plan Mode and implemented a
        zero-dependency pure-CSS pointer "spotlight" (a `pointermove`-
        driven radial-gradient overlay, no canvas/WebGL/npm package) —
        `webgl-fluid-enhanced` was removed from `package.json` and its
        `.d.ts` shim deleted. This was the first version where `vite
        build` actually succeeded end-to-end with zero install caveats.
     7. **User then asked to remove that background effect entirely** —
        no replacement requested. Reverted to the plain gradient shown
        above: the `heroBgEl` ref, the `pointermove` listener, the
        spotlight overlay div, and their explanatory comments were all
        deleted from `Hero.svelte`. `package.json`/`webgl-fluid-
        enhanced.d.ts` were already gone from step 6, so nothing further
        to clean up there.
   - **Current state going forward**: Hero's background is just the
     static `linear-gradient`, no JS involved in it at all. If an
     interactive pointer effect is requested again, don't assume the
     spotlight approach (or any of the fluid-sim approaches) is still
     wanted by default — this has been tried, reverted, tried again
     differently, and reverted again; treat it as a fresh open question
     each time rather than restoring the last attempt automatically.
2. **Gap between CTA buttons and the dashboard is `mt-[120px]`** — set to
   an exact pixel value per explicit user request, not a Tailwind spacing
   step.
3. **The dashboard `<img>` has no added `border-radius`/`border`/
   `box-shadow`.** Earlier attempts to add these clipped a rectangle over
   the asset's own transparent corners (the PNG already has rounded
   corners and a shadow baked in) and produced a visible dark patch at the
   top-right corner. Only a `drop-shadow-2xl` **filter** is applied — it
   follows the image's alpha silhouette instead of clipping a box, so it's
   safe to use even with transparent/rounded corners.
4. **The arrow annotation is just the raw `arrow.png` image**, positioned
   absolutely near the dashboard's top-right corner. There is **no** text
   bubble ("Get the Live Demo" was explicitly removed per user request) —
   don't re-add one without being asked. The image should **not** be
   mirrored (`-scale-x-100` was tried and reverted — render the asset as
   provided).
5. **Headline is primary text** (no `font-mono`), sized responsively
   (`text-web-32` mobile → `text-web-56` at `lg`) — it was originally much
   larger (following the 88px web-scale token) and explicitly asked to be
   reduced. **Has an explicit `<br />` after "Infrastructure"** (`Payments
   Infrastructure<br />Built for Modern Businesses.`) per "move Built to
   second line" — previously this text had no forced break at all and
   relied on natural wrap at this `max-w`, which happened to put "Built"
   at the end of line 1 instead.
6. **Subheading paragraph now uses `text-balance` (CSS `text-wrap:
   balance`) + `max-w-3xl`, plain unbroken text (no `<br />` at all)** —
   `max-w` has bounced between two values across a few requests: original
   forced-`<br />` version needed `max-w-3xl` to stay at 2 lines (`2xl`
   wrapped to an unwanted 3rd). A later "make it 3 lines" request wanted
   that 3rd line back, so it narrowed to `max-w-2xl` (adding `text-balance`
   at the same time, instead of hand-placing new `<br />` — the
   char-counting approach that already failed repeatedly elsewhere; see
   the Final CTA subheading's notes). A follow-up "move h2 to 2 line" then
   widened it back to `max-w-3xl`. **`text-balance` is what makes each of
   these a one-value `max-w` change** — it distributes text evenly across
   however many lines the current width produces, so switching line count
   is just narrower-for-more/wider-for-fewer, never a `<br />` edit.
7. **Mobile menu is now a full-screen panel (`fixed inset-0 w-full`),
   NOT the narrow right-side drawer it started as** (which matched
   `Nav.svelte`'s pattern, dark-themed) — replaced per an explicit
   reference screenshot. The separate dark backdrop `<div>` the drawer
   version needed (to dim the page content still visible beside a narrow
   `w-72` panel) is gone entirely — a full-screen panel leaves nothing
   beside it to dim, so keeping that backdrop would've been dead/
   redundant markup. Header is now the real `logo` image + a bordered
   square close button (was a plain "Menu" text label + a bare "✕").
   Nav links are full-width rows, each with its own `border-b
   border-white/10` divider, styled `font-mono uppercase tracking-widest`
   — matching the reference exactly, and an extension of (not an
   exception to) the site's "only buttons use mono" rule, applied here to
   the menu's nav links specifically. "Contact Us" is still pinned to the
   bottom via `mt-auto`, just `rounded-lg` now instead of `rounded-full`.
   **`Nav.svelte`'s own mobile menu (used on inner pages) was NOT
   touched** — it still uses the original narrow right-drawer pattern;
   this change only applies to `Hero.svelte`'s dark landing-page nav. If
   the inner-page nav is ever asked to match, treat it as a separate,
   explicit request.
7a. **CTA buttons are `w-full` on mobile** (was a fixed `w-64`), each
   `py-4` with `text-para-16` at the base breakpoint too (was `py-2.5`/
   `text-para-14` on mobile, stepping up to `py-4`/`text-para-16` only at
   `sm:`) — per an explicit reference screenshot showing both buttons
   spanning nearly the full content width edge-to-edge on mobile, not a
   small fixed-width pill. `sm:w-auto sm:px-8` still shrinks them back to
   their compact desktop size above the `sm:` breakpoint, unchanged.
8. **Dashboard image intentionally bleeds off the right edge on mobile
   ("peek" effect), it does NOT scale down to fit the viewport there** —
   per an explicit reference screenshot of the desired mobile layout: the
   mockup's left edge lines up with the heading/button text above it, but
   its right side is cropped by the viewport (a glimpse of the dashboard,
   not a fully-scaled-down miniature). Implementation:
   `class="block w-[760px] max-w-none drop-shadow-2xl md:w-full md:max-w-full"`
   — `max-w-none` is required specifically to cancel Tailwind's
   *preflight* base style (`img { max-width: 100% }`), which would
   otherwise force the image to fit the viewport regardless of any width
   utility; only at `md:` and up does it get `md:w-full md:max-w-full` to
   fit its `mx-auto max-w-6xl` container the normal way, matching the
   original desktop-only screenshots this section was first built from.
   **`w-[760px]`** is a fixed half-scale of the source PNG's real
   intrinsic size (`bashboard.png` is 1520×894 — confirmed by downloading
   and checking with `sips`), sized down from an initial `max-w-none`
   attempt that rendered the image at its full 1520px intrinsic width on
   mobile (way more overflow/bleed than the reference showed) — per an
   explicit "reduce 2x" follow-up. Don't "fix" the mobile overflow by
   adding `w-full` back at the base breakpoint, or by removing the fixed
   `w-[760px]` — both were tried/considered and are the exact behaviors
   this implementation corrects for.

### Asset URLs (hero)

```
Background: https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/backgroundpng.png
Dashboard:  https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/bashboard.png
Arrow:      https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/arrow.png
```

Note the dashboard filename is genuinely `bashboard.png` (not a typo on our
end — that's the asset's actual filename as provided).

## About & Social proof section (`src/routes/+page.svelte`, right after Hero)

Built from a screenshot the user pasted (no Figma access), not a stub.
Structure and the reasoning behind it:

- **Section height is a hard-set `h-[998px]`** — an explicit user
  requirement, not a content-driven auto height. The top block (seal image
  + heading) is `flex-1` and absorbs whatever space is left after the
  bottom logo strip's fixed height — don't switch either side to `auto`
  height or the 998px total will drift.
- **Top block stays inside `container-page`** (the site's standard
  max-width wrapper), but **the trust-logo row breaks out of it** to span
  full viewport width, rendered as a direct child of the `<section>` — its
  divider lines are meant to run edge-to-edge like the reference
  screenshot, which the heading text above should not do.
- **Heading is now plain static text, `text-gray-900`** — `heading` is a
  single literal string (was an array of `{ word }` tokens sliced by a
  typewriter counter). **The entire character-by-character typewriter
  reveal has been removed** per explicit request: the word/offset
  precomputation (`headingWithOffsets`, `start`/`end` per word), the
  `visibleChars` counter driven by a 20ms `setInterval`, the
  `IntersectionObserver` (`threshold: 0.4`, `bind:this={sectionEl}`) that
  triggered it on scroll-into-view, and the blinking `.typewriter-cursor`
  span (`caret-blink` keyframe) are all gone — `sectionEl` was removed
  from the `<section>` entirely since nothing binds to it anymore. This
  also resolves the earlier documented SEO trade-off (the heading used
  to render empty in the initial server-rendered HTML until the reveal
  finished) — the heading is now present in markup immediately, no JS
  required for it to appear.
  - **Per-word `<span>` wrapping and the whitespace-hugging markup
    convention are gone too** — both existed solely to support the
    typewriter's per-word slicing (an earlier per-word hover-zoom was
    already removed before this), and neither serves any purpose now
    that the heading is one plain string in one `<p>`.
  - **Two decorative doodle illustrations were added**, flanking the
    heading (`aboutLeftIllustration`/`aboutRightIllustration`, `left.png`/
    `right.png`), absolutely positioned at the section's far left/right
    edges (`absolute left-0 top-0` / `right-0 top-0`). The section itself
    is `relative overflow-hidden` to contain them.
    **Now visible on mobile too** — a mobile reference screenshot showed
    them present there as well (smaller), so the earlier `hidden lg:block`
    gate (added when no mobile reference existed yet) was replaced with a
    responsive width instead: `w-24 sm:w-32 lg:w-64` (was a flat `w-64` at
    `lg:` only). Visible at every breakpoint now, just scaled down on
    narrow viewports.
    **Both now have `illustration-float`** (the same shared `translateY`
    bob keyframe already used on the Growth section's illustration — see
    the `<style>` block) per an explicit "give light moments to this in
    both side" request. **Sped up from the shared class's base `3s` to
    `2s` via an inline `style="animation-duration: 2s;"`** on each `<img>`
    (not a change to the shared `.illustration-float` class/keyframe
    itself) per a follow-up "little fast" — kept scoped to just these two
    images so the Growth section's illustration, which still uses the
    class's own default `3s`, is unaffected. The right one also carries
    `animation-delay: -1s;` (half of the new 2s cycle, kept proportional
    to the duration change) so the two don't bob perfectly in sync — a
    deliberate touch, not required by either request, but reads more
    natural than two identical mirrored images moving in lockstep; remove
    it if the user wants them synced instead.
  - **A second reference screenshot showed the heading's second half
    faded to gray** ("...move money," black, "and automate financial
    operations from a single system." gray) — this was NOT carried over.
    It reads as either a leftover mid-scroll-animation capture or a
    distinct design detail that wasn't part of this explicit request
    (which only asked to remove the animation and add the
    illustrations); the heading is fully solid black per the other
    reference image and per how it now renders with no per-word
    span/color logic at all. Flag to the user if the two-tone fade was
    actually wanted as a new static design.
- **Trust-logo row is an infinite leftward-scrolling marquee, not a static
  grid** (explicit user request, after first trying static left-alignment
  which wasn't what they meant by "moving"). `trustLogos` is rendered
  twice back-to-back (`[...trustLogos, ...trustLogos]`) inside a
  `.marquee-track` flex row (`w-max`, fixed `w-56` per logo item with
  `border-r` dividers), animated via a plain CSS `@keyframes marquee` (in
  a `<style>` block at the bottom of `+page.svelte`) from `translateX(0)`
  to `translateX(-50%)`, `24s linear infinite`. The **-50% is what makes
  it loop seamlessly** — since the track is exactly two copies of the same
  list, sliding by half its total width lands the second copy exactly
  where the first started, so there's no visible snap/reset. If the
  number of logos changes, this still works unmodified (percentage-based,
  not a pixel count) — just keep both spread copies in sync. `h-[260px]`
  outer strip height and `border-t` are unchanged from the prior static
  version.
- Seal image height (`h-36`) is an estimate from the reference
  screenshot's proportions, **not a measured Figma value** — treat it
  like the Hero's `h-[1050px]` background estimate: adjust freely if it
  looks off, there's no exact source-of-truth number to preserve.

### Asset URLs (About & Social proof)

```
Base:  https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/
Seal:  3d%20elixirpay.png
Logos: LOGO1.png … LOGO6.png
```

Note the folder name is genuinely `...social%20proffs` (typo in the
asset's own path, not ours — preserved as provided, same convention as the
hero's `bashboard.png`).

## Solutions section (`src/routes/+page.svelte`, third landing-page section)

Built from a screenshot showing one specific state — "Accept Payments" tab
active, "Payment Gateway" sub-item active — and generalized into a fully
interactive tab system, per explicit user choice (they were asked whether
to build it fully interactive with placeholder copy for the unseen states,
vs. a static match of only what was shown, and chose the former).

- **`solutionCategories` in `<script>` is the only source of truth for
  this section's content.** It has all 4 top-level categories (Accept
  Payments 💰, Move Money ⚡, Manage Finance 🪙, Enterprise Solutions 🛡️)
  and their sub-items. **All 6 "Accept Payments" items now have real
  copy** (Payment Gateway, Hosted Checkout, Payment Links "Send Money At
  Scale", QR Payments "Scan. Pay. Done.", Invoices "Invoices That Get
  Paid", Subscriptions "Recurring Payments. Simplified.") — provided
  incrementally across several messages, not all at once. **Move Money is
  now fully real**: exactly 2 items — "Payouts" ("Send Money At Scale")
  and "Virtual Account" ("Launch Under Your Brand") — replacing an earlier
  3-item placeholder guess ("Payouts", "Transfers", "Mass Payouts" — the
  last two didn't exist and are gone now). **Manage Finance's item list is
  in progress**: currently just 1 confirmed item, "Autonomous
  Reconciliation" — now with real content-panel copy too ("Every Payment
  Accounted For" / cta "Explore Reconciliation") and a real illustration
  (`manageFinanceIllustrationBase` + `Reconciliation.png`). The earlier
  3-item guess ("Ledger", "Reconciliation", "Reporting") was dropped
  entirely rather than kept alongside it, same as Move Money's guess was
  — **expect more Manage Finance items to arrive in follow-up messages**,
  this category likely isn't done at 1 item. **Enterprise Solutions has
  its first confirmed item**: "White Label Solutions" ("Launch Under Your
  Brand" / cta "Explore White Label Solutions", real illustration
  `enterpriseSolutionsIllustrationBase` + `White%20Label.png`), replacing
  the earlier 3-item placeholder guess ("Fraud Prevention", "Compliance",
  "Dedicated Support" — dropped entirely, same pattern as the other
  categories). Expect more Enterprise Solutions items in follow-up
  messages too. Don't treat any remaining placeholder copy as final —
  replace item by item as real content arrives, same as the other
  categories were.
  - **Note**: one duplicate-content pair remains, the other has since
    been resolved with real distinct copy:
    - Move Money → Payouts' heading "Send Money At Scale" is still
      identical to Accept Payments → Payment Links' heading — unresolved,
      flag again if real distinct copy for one of these arrives.
    - Move Money → **Virtual Account now has its own real
      heading/description** — "Know Every Incoming Payment" / "Assign
      unique virtual accounts to customers and automatically identify
      incoming payments without manual reconciliation." — per an explicit
      "change move content in move money - virtual account" request. This
      replaces the placeholder duplicate it previously shared
      word-for-word with Enterprise Solutions → White Label Solutions
      ("Launch Under Your Brand" / "Offer a complete payment platform
      with your own branding..."), which is now unique to White Label
      Solutions only. `cta` (`'Explore Virtual Account'`) and
      `illustration` were already correctly distinct before this and
      didn't need changing — only `heading`/`description` were updated.
  - **`cta` is a separate optional field from `heading`** — added when
    Hosted Checkout's real heading ("Checkout That Converts Better")
    stopped reading naturally as a button label. The CTA button renders
    `activeItem.cta ?? activeItem.heading`, so items without a `cta` (the
    placeholder ones, still titled "Explore X") fall back to reusing
    their heading, unchanged from before. Add a `cta` alongside `heading`
    for any future item whose real heading isn't itself a good button
    label.
- **Reactive state**: `activeCategoryIndex` / `activeItemIndex` (plain
  `let`s) drive `activeCategory` / `activeItem` (derived `$:`). Clicking a
  top-level tab calls `selectCategory(i)`, which resets `activeItemIndex`
  to `0` — without that reset, switching categories could land on an
  out-of-range sub-item index for a shorter category (Move Money etc. only
  have 3 items vs. Accept Payments' 6).
- **Font usage is deliberate, not a slip**: the 4 top-level category tabs
  use the primary/sans font (they read as section navigation in the
  screenshot), while the sub-item list *and* the CTA link both use
  `font-mono` uppercase — this is consistent with the site's "only buttons
  get font-mono" rule (see Typography rule above), since both are real
  `<button>`/link controls, not passive text.
- **Top-level tab icons are real assets (`icon 1.png`–`icon 4.png`), not
  emoji** — the first build used 💰/⚡/🪙/🛡️ as quick placeholders before
  the user provided the actual PNGs; `solutionCategories[n].icon` now
  holds each asset's URL (built from `solutionsIcons`, order-matched 1:1
  to the category array — `icon 1` → Accept Payments ... `icon 4` →
  Enterprise Solutions) and the tab renders an `<img>` instead of a
  `<span>`. If a 5th category is ever added, there's no 5th icon asset
  provided yet — don't just reuse one of the existing four without asking.
- **Active sub-item's underline spans the full row width**, on the
  `<button>` itself (`border-blue-500 border-b-2`) — an earlier version put
  it on an inline-block `<span>` around just the label text, which didn't
  match a follow-up screenshot showing the blue line running edge-to-edge
  of the sidebar column; corrected per that screenshot. Inactive items get
  a fainter `border-gray-100` row divider instead.
  - **Inactive items are now one flat color, not a per-position fade** —
    this went back and forth: the reference screenshot showed items fading
    progressively lighter further down the list, which was built as a
    `subItemFadeColors` array indexed by position; the user then asked to
    darken each step by one shade (still a gradient, just shifted darker);
    then asked to unify all of them to "the same next dark shade" — at
    that point the array was simplified down to a single
    `subItemInactiveColor = 'text-gray-600'` constant rather than keeping a
    6-entry array where every entry was identical. If a position-based
    fade is wanted again, it'll need to be reintroduced, not just tweaked.
- **Top tab row is an even `grid-cols-4`, and the sidebar is `md:w-1/4` to
  match it** — settled, after real back-and-forth. Timeline: the sidebar
  was a fixed `md:w-64` (16rem), which didn't line up with an even
  4-column tab grid above it → fixed once by pinning the tab grid's first
  column to `16rem` to match the sidebar → user then said the tabs should
  be equal width instead (didn't like the narrower first tab) → reverted
  tabs to even `grid-cols-4`, which brought the misalignment back → user
  pointed out a large gap/misalignment again and asked to make the
  sidebar's width match the "Accept Payments" tab's width. **The fix that
  finally stuck**: instead of changing the tab grid to match the sidebar
  (or vice versa with a fixed value), the sidebar is now `md:w-1/4` — a
  proportional width that's always exactly one column of the `grid-cols-4`
  row above it, at any viewport size. This is the one that should hold;
  don't reintroduce a fixed `md:w-64` or an uneven tab grid without
  checking first, both were already tried and abandoned.
- **Sub-items auto-advance on a timer, and the active item's underline is
  the visible progress bar for it** — explicit user request. Mechanics:
  - `SOLUTIONS_AUTO_ADVANCE_MS` (`5000`, a guessed duration — not from any
    spec, adjust if it feels off) and `scheduleAutoAdvance()` in `<script>`
    drive a single `setTimeout` chain: on fire, it advances
    `activeItemIndex` by one (wrapping via `% activeCategory.items.length`
    back to `0` after the last item) and immediately reschedules itself.
  - **Every manual selection restarts the timer** rather than letting it
    race a stale one — `selectItem(i)` (sub-item click) and
    `selectCategory(i)` (top-tab click, which also resets
    `activeItemIndex` to `0`) both call `scheduleAutoAdvance()`, which
    `clearTimeout`s the previous timer first.
  - **The progress bar is a real CSS width animation, not a JS-driven
    style update** — `.solutions-progress-fill` (`0% → 100%` width,
    `animation-duration` set inline to match `SOLUTIONS_AUTO_ADVANCE_MS`
    exactly) in the `<style>` block. It only renders for the active item,
    wrapped in `{#key activeItemIndex}` — that key is what makes Svelte
    tear down and recreate the element (and thus restart its CSS
    animation from empty) every time the active item changes, rather than
    the animation jumping or not restarting at all.
  - **Every item's divider (active or not) is full-row-width — settled,
    after some back-and-forth.** A screenshot briefly suggested the active
    item's bar should hug just the label's text width instead of the full
    row, and that was tried (wrapping label + track in a shared
    `inline-block` span so the track's `width: auto` shrink-to-fit the
    label). But a follow-up screenshot clarified that the "misaligned"
    look being pointed at was actually just an earlier frame of the *same*
    full-width fill animation (still short because the timer hadn't
    progressed far yet), not a request for a different static width — so
    it reverted back to `w-full` for both active and inactive items. If a
    text-width-hugging active bar is genuinely wanted at some point, it'll
    need to be re-requested explicitly, since the last two screenshots
    pointed in opposite directions.
  - No pause-on-hover has been added — the timer keeps running even while
    a user is reading the current panel's content.
  - **Timer only starts once this card scrolls into view, not on page
    load.** Originally `scheduleAutoAdvance()` was called unconditionally
    in `onMount`, so the timer started the instant the page loaded
    regardless of scroll position — by the time a user actually scrolled
    down to this section, the auto-advance could already be several items
    past the first, or the first item's progress-fill bar could already
    be mid-cycle/reset. Fixed per an explicit "when i come this section
    then only the first card load will start" request: a
    `bind:this={solutionsCardEl}` ref on the card + an `IntersectionObserver`
    in `onMount` (same "trigger once" `started` flag pattern already used
    for the FAQ stats counter) now calls `scheduleAutoAdvance()` only the
    first time the card becomes visible (`threshold: 0.3`). Works
    correctly on mobile too without extra gating — the card is `hidden`
    below `lg:`, so a `display: none` element never reports as
    intersecting and the observer simply never fires there, which is
    correct since mobile has its own independent, timer-free accordion
    state (`mobileOpenCategory`/`mobileOpenItem`).
- **Content panel heading is `font-bold` (was `font-semibold`), and its
  CTA button now ends with a "→" arrow span** — per a reference
  screenshot shown while on the Enterprise Solutions → White Label item,
  but this is the **one shared content-panel template** every
  category/item renders through (`activeItem.heading`/`.description`/
  `.cta`, around the `max-w-md` block in the desktop card's content
  panel) — there's no per-category styling here, so this change applies
  uniformly to whichever item is active, not just Enterprise Solutions.
  If the user actually wanted this scoped to just that one category,
  that'd need a fresh explicit follow-up, since the current markup has
  no mechanism to special-case a single item's presentation.
- **Real per-item illustrations now exist for Accept Payments (all 6),
  Move Money (both), and Manage Finance (its 1 confirmed item so far)** —
  each item has an `illustration` URL, built from a per-category base-URL
  const (`acceptPaymentsIllustrationBase` / `moveMoneyIllustrationBase` /
  `manageFinanceIllustrationBase`, pointing at that category's own
  `Section 3 - One Platform/body illustraions/<Category>/` folder) plus
  its filename (e.g. `HOSTED CHECKOUT.png`, `PAYOUTS.png`,
  `Reconciliation.png` — inconsistent capitalization across files is the
  assets' own naming, not a typo on our end, same convention as
  `bashboard.png`/`...social%20proffs`). The template does
  `{#if activeItem.illustration}` → real `<img>`, `{:else}` → the generic
  placeholder SVG (rect + circle, `text-gray-300`) that was standing in
  for *every* category before. **Enterprise Solutions still has no
  illustration assets**, so its items still render the generic
  placeholder — swap them in the same way once those assets are provided
  (add a `<category>IllustrationBase` const + an `illustration` field per
  item, matching the existing pattern).
  **Payment Gateway's asset is now `replace.png`**, not `Payment
  Gateway.png` — the user swapped in a new file at that path and asked
  for it by that literal filename, so this is intentional, not a
  leftover/placeholder name despite how it reads. If `replace.png` ever
  gets renamed to something more descriptive, update this one reference.
  Both the real `<img>` and the placeholder `<svg>` are now sized
  `h-[420px] w-[420px]` (was `h-48 w-48`/192px → 4x/768px → 3x/576px →
  now 420px), positioned `right-24` (`right-10` → `right-0` → `right-8` →
  now `right-24`, moved further left across two follow-up requests after
  the resize). **The
  predicted clipping at 576px did happen** — a screenshot showed the
  illustration overlapping upward past the content panel into the tab
  row above it (bottom-anchored via `bottom-8`, so overflow spills
  upward, not downward), confirmed once the tab card's height dropped to
  `h-[620px]`. Reduced to `420px` to fit within the content panel's actual
  available height (card `h-[620px]` minus the tab row above it minus the
  panel's own `py-10`) without overlapping — not a measured exact fit,
  just enough smaller to clear the overlap seen in the screenshot; adjust
  further if any category's real illustration still clips at this size.
- **Illustration has a gentle floating bob** — `.illustration-float`
  (`translateY(0)` → `-12px` → `0`, `3s ease-in-out infinite`) in the
  `<style>` block, applied to both the real `<img>` and the placeholder
  `<svg>` so it doesn't need re-adding once real assets exist for the
  other 3 categories.
- **Section height is now content-driven (`flex flex-col`, no fixed
  `h-[...]`), not the `h-[1580px]` it originally had.** Explicit
  `py-[160px]` (top and bottom, both exactly 160px) is what actually
  governs the top/bottom spacing now. This changed because once the tab
  card below got its own fixed `h-[620px]` (see next bullet) instead of
  `flex-1`, the section's *fixed* `h-[1580px]` left a large chunk of
  unaccounted empty space between the card's bottom and the section's
  bottom padding — `flex-col` children don't auto-fill a fixed-height
  parent without something set to `flex-1` to absorb the slack. Removing
  the fixed section height fixed that: bottom whitespace is now exactly
  the `160px` padding, no more, no less. **If the section ever needs a
  hard total height again, the card (or heading block) needs to go back
  to `flex-1` first**, or this same extra-gap bug will return.
- **The tab card itself has its own hard-set `h-[620px]`**
  (960px → 860px → 760px → 620px, each a further reduction over follow-up
  requests — the last drop was because a screenshot showed a large empty
  gap below the sub-item nav list, e.g. "Subscriptions" as the last item
  with lots of blank space down to the card's bottom edge, matching the
  same "fixed height taller than actual content" pattern already hit and
  fixed elsewhere in this file), no longer `flex-1`. Since it's a fixed height
  rather than fill-remaining-space, it no longer automatically absorbs
  changes to the heading block's height above it — if that heading
  grows/shrinks later, there could be a visible gap or overflow between
  it and the card.
- **H1 and subheading both have forced `<br />` line breaks**, not natural
  wraps — matching the exact two-line split in the reference screenshot
  regardless of viewport width. The subheading was briefly sized at an
  arbitrary `text-[28px]` (past the paragraph scale's `para-24` ceiling)
  before the user brought it back down to 24px, so it now uses the proper
  `text-para-24` token. **Risk**: on narrow mobile viewports, `max-w-lg`
  may still not be wide enough for "ElixirPay brings every essential
  payment" at 24px, which would wrap to a 3rd line on top of the forced
  break — no responsive size reduction has been added for this yet since
  it wasn't requested.
- **The tab card's horizontal inset is a fixed `mx-[120px]`, not
  `container-page`** — swapped out per explicit user request ("resize the
  container left 120px right 120px"). This is a deliberate exception: the
  heading block right above it still uses `container-page` (whose
  `--container-max: 1920px` + `clamp(1rem, 2vw, 6rem)` padding barely
  insets anything at typical viewport widths), so the card and the heading
  above it no longer share the same horizontal alignment/edges — that's
  intentional, not a regression, don't "fix" them back to matching without
  being asked.
- **This card (tabs + sidebar + illustration, fixed `h-[620px]`) is now
  `hidden lg:flex` — desktop/tablet only.** The predicted mobile risk
  above did materialize: a screenshot showed the 4 category tabs, the
  sub-item sidebar, and the content panel all stacked/overlapping
  illegibly inside the fixed-height card, since that height only ever
  accounted for the desktop side-by-side layout. Rather than try to make
  the tab UI itself responsive, mobile now gets a **completely separate
  accordion** (below, `lg:hidden`) built from the same
  `solutionCategories` data through its own state
  (`mobileOpenCategory`/`mobileOpenItem`, deliberately NOT shared with
  `activeCategoryIndex`/`activeItemIndex` — the desktop version
  auto-advances on a timer, mobile is purely click-driven, and mixing the
  two would mean the timer silently changes what's expanded on mobile).
  One category open at a time; within it, one sub-item is "expanded"
  (shows description + CTA + illustration in a bordered panel) while
  siblings render as plain collapsed label rows — matches the reference
  screenshot's structure exactly (icon + label + −/+ toggle per category,
  a blue rule under the open one, "EXPLORE {LABEL}" + checkmark + body +
  button + illustration for the open sub-item).
  - **The open sub-item's heading is its own full-width header row, not a
    small inline label sharing the box's uniform padding.** First version
    had one `p-5` on the whole panel div, with a small `text-para-12`
    "EXPLORE {LABEL}" label (blue square marker + "Explore" prefix)
    directly above the body copy inside that same padding — per an
    explicit "i need heading should come like this" reference showing a
    bigger/bolder heading in its own row with a **bottom divider spanning
    the panel's full width**, separate from the body below. That
    full-width divider is why the panel is split into two children — a
    header `div` (`border-b border-gray-200 px-6 py-5`) and a body `div`
    (`p-6`) — instead of one uniformly-padded box: a shared `p-5` on a
    single box would only let a `border-b` stretch as wide as the padded
    content column, not the panel's actual edges.
    **Current heading is just `{item.label}` at `text-para-16`** (no
    "Explore" prefix, no blue square marker) — a follow-up "reduce the
    heading size, remove the blue patch and explore word" walked back
    the first pass's `text-web-20 font-bold` size and its `h-3 w-3
    rounded-sm bg-blue-500` marker span entirely. The header row
    structure (its own full-width divider) stayed; only the heading's own
    size/content/marker were pared down.
  - **This panel's own CTA button (`{item.cta ?? item.heading}`) is
    `bg-gray-200 hover:bg-gray-300`**, one step darker than the
    `bg-gray-100 hover:bg-gray-200` every *other* "buttons get mono, light
    gray pill" CTA on the page still uses (desktop Solutions content
    panel, Services industries panel, etc.) — darkened per an explicit
    "make little darker for the button" request scoped to a screenshot of
    just this specific mobile-accordion button. Deliberately not applied
    to the other `bg-gray-100` CTAs elsewhere on the page; if the user
    wants the darker shade everywhere, that's a separate follow-up, not
    assumed here.
  - Subheading's forced `<br />` is now `<br class="hidden sm:inline" />`
    — unconditional before, it was contributing to a 4-line mobile wrap
    (confirmed by the same bug screenshot); hiding the break below `sm:`
    lets the full sentence wrap naturally into 3 balanced lines on
    mobile instead, matching the reference.
- **Card has square corners (`rounded-2xl` removed) and 24px tab labels**
  — both explicit user requests, both deviate from the reference
  screenshot (which had rounded corners and ~16px labels). Tab label size
  was briefly an arbitrary `text-[28px]` before being brought down to 24,
  so it now uses the proper `text-para-24` token. The icon `<img>`s next
  to each label are still `h-5 w-5` (20px) — unchanged, so they now read
  visually smaller relative to the bigger label text than in the original
  screenshot.

## Services / industries section (`src/routes/+page.svelte`, fourth landing-page section)

An industries accordion, built from a single reference screenshot showing
one expanded state ("E-commerce"). Same approach as Solutions: built fully
interactive with placeholder content for the unexpanded industries, rather
than a static match of only what was shown.

- **`industries` array in `<script>`** — **the 8-industry lineup itself
  was changed by explicit user request, not just its copy.** The original
  guess (E-commerce, NGO's, Logistics, Manufacturing, Education,
  Healthcare, Travel, Retail) was replaced with E-commerce, Healthcare,
  Education, Travel, Finance, SaaS, Retail, NGO — then, in the very next
  message, **both Finance *and* SaaS were individually renamed to
  "Logistics"** (both label and heading), each pointed at the same
  `LOGISTICS.png` image. Current lineup, in order: E-commerce, Healthcare,
  Education, Travel, **Logistics, Logistics**, Retail, NGO — yes, two
  entries named "Logistics" back to back (`key: 'logistics'` and
  `'logistics-2'` to keep them distinct in code), each still carrying its
  *original* Finance/SaaS placeholder description ("Move and reconcile
  money across accounts..." / "Automate subscription billing..."), which
  no longer matches a heading of "Logistics" at all. **This was
  implemented exactly as instructed since the request was unambiguous,
  but it's almost certainly not what was intended** — flag this to the
  user: one of these two was very likely meant to become a different
  industry name (or the duplicate should be merged into one), and neither
  description was updated to actually describe logistics/shipping.
  Manufacturing's original card image (`MANUFACTURING.png`) is still
  unused and could be a fit for whichever of these two isn't really
  Logistics. Original Logistics/Manufacturing are gone from the earlier
  lineup change — their card images (`LOGISTICS.png` now reused twice,
  `MANUFACTURING.png` unreferenced) trace back to that. **Real copy exists
  for
  E-commerce** ("Accept payments, automate payouts, and manage your entire
  payment ecosystem..." — note this is the *same description text* as
  the Hero section's subheading and Solutions' Payment Gateway item,
  given that way across separate messages, not a mistake introduced here)
  **and NGO** ("Build Trust With Every Contribution" — the tab label is
  just "NGO", but its expanded heading is this longer tagline, same
  `label` vs `heading` split used elsewhere).
  - **E-commerce's description has an embedded `\n`** to force it onto
    exactly 2 lines (per a follow-up screenshot showing it wrapping to 3),
    and the description `<p>` now has `whitespace-pre-line` so that `\n`
    actually renders as a break — CSS's default `white-space: normal`
    would otherwise collapse it like any other whitespace. This is a
    different technique from the `<br />`-in-template approach used for
    the Hero/About/Solutions headings, because this text is bound
    dynamically per industry (`{activeIndustry.description}`) rather than
    typed directly in the markup — embedding `\n` in the data string is
    what lets a future industry's description also force its own line
    break the same way, without editing the template again. **The
    description `<p>`'s max-width was also bumped `max-w-xl` → `max-w-3xl`**
    — the forced `\n` alone wasn't enough, since the first segment
    ("Accept payments, automate payouts, and manage your entire payment
    ecosystem") was itself too long for `max-w-xl` and wrapped a second
    time, producing 3 lines instead of 2. Same root cause and fix pattern
    as the Hero subheading and the section's own subheading (below) — a
    forced break only produces the intended line count if the container
    is also wide enough that neither half wraps again on its own.
  - **The section's own subheading had the identical bug**: "ElixirPay
    brings every essential payment workflow<br />together in one unified
    platform." was wrapping to 3 lines because `max-w-lg` was too narrow
    for the first half at `text-para-24`. Bumped to `max-w-3xl`, same fix
    as above and as the Hero subheading (`max-w-2xl` → `max-w-3xl` there
    too, for the same reason).
  - **Section padding is `py-[160px]`** (was `py-24`/96px) — brought in
    line with the Solutions section's top/bottom padding convention.

  Healthcare, Education, Travel, and Retail keep their prior placeholder
  descriptions unchanged (only the lineup position/order changed for
  them). The two ex-Finance/SaaS "Logistics"/"Logistics" entries also
  still carry their pre-rename descriptions (see the duplicate-Logistics
  note above — flagged as likely unintentional). Every entry's `cta` is
  now `'Learn More'` — both real examples used that exact label, so it
  replaced the earlier varied placeholder CTAs ("Explore X Solutions"
  etc.) across all 8 entries for consistency, not just the two confirmed
  ones.
- **Card images now exist for all 8 industries** (`industry.image`, built
  from `industriesImageBase` + a per-industry filename — e.g.
  `E-commerce.png`, `NGO%E2%80%99S.png`, which is genuinely `NGO'S.png`
  with a right single-quotation-mark apostrophe, `’` U+2019, not a
  straight one, and `LOGISTICS.png`, now reused by both "Logistics"
  entries). The template still guards with `{#if industry.image}` around
  the `<img>`, with the colored gradient/label overlay falling back to
  permanent `opacity-100` for any future industry added without an image
  (`industry.image && i === activeIndustryIndex ? ... : ...` in that
  overlay's class logic) — no industry currently lacks an image, but this
  fallback path is still live in the code for whenever one does. This
  whole real-image
  approach **replaced** an earlier CSS-only approximation (grid-texture
  background + a hand-built "payment method" card) that existed before
  any images were provided — that approach is gone, not layered
  underneath. **Note the folder name itself has a trailing space** —
  `Section 4 - Payments Infrastructure /` — preserved exactly as provided,
  same convention as other oddly-named asset paths in this project
  (`bashboard.png`, `...social%20proffs`).
  - Each entry still has a `gradient` (Tailwind `from-*/to-*` pair, used
    for the collapsed-strip background and as the Finance/SaaS fallback
    visual) — an approximate color read off the original screenshot's
    vertical strips, not an exact hex match, and not revisited when the
    lineup changed.
  - **The expanded heading is now a single fixed `text-blue-900` for every
    industry**, not per-industry via a `labelColor` field — that field
    existed briefly (one color guess per industry) but was removed per
    explicit user request that all headings share one color. The template
    hardcodes `text-blue-900` directly on the `<h3>` rather than reading
    from data now.
  - **NGO's expanded heading is now just "NGO"**, not "Build Trust With
    Every Contribution" — that longer tagline was briefly the `heading`
    field (with `label` staying "NGO" for the collapsed strip), but the
    user asked to make the heading match the label instead. The tagline
    text still exists in `description`, unchanged.
  - The expanded panel still has its own `border border-gray-200` (added
    per an earlier follow-up screenshot showing a thin border framing the
    illustration content specifically) — so there are two borders: the
    outer wrapper's (below) and this one (around just the expanded panel's
    content).
- **The whole component (accordion + the heading/description/CTA/arrows
  row below it) shares ONE outer bordered card**, not two separately
  bordered `container-page` blocks — corrected after a follow-up
  screenshot showed the reference design's border wrapping everything
  together. The outer wrapper is `mx-[120px]` (a fixed 120px gutter on
  both sides, matching the Solutions section's tab-card convention, not
  `container-page`) with `border border-gray-200 bg-white` — square
  corners, `rounded-2xl` was explicitly removed per user request;
  the bottom content row uses its own `p-8` for internal spacing instead
  of `container-page`'s padding, since it's now inside this card rather
  than a page-width block.
  - **The accordion row itself has `p-4 gap-3`**, not flush against the
    outer card's border — added per a follow-up screenshot showing visible
    breathing room between the illustration/strips and the outline. `p-4`
    insets the whole accordion from the card's edges; `gap-3` also adds a
    thin gap *between* each industry panel/strip, matching a gap visible
    between the colored strips in the original reference screenshot too
    (not just something inferred from this one request).
- **Accordion mechanics**: `activeIndustryIndex` (plain `let`) + derived
  `$: activeIndustry`. Clicking a strip sets `activeIndustryIndex`
  directly; the prev/next arrow buttons below the accordion call
  `stepIndustry(-1|1)`. **No auto-advance timer here** — unlike
  Solutions' sub-items, this wasn't requested for this section, so it's
  click/arrow-only.
  - **`stepIndustry` clamps, it does not wrap** — `Math.min(Math.max(...),
    industries.length - 1)`, not the modulo-wrap used elsewhere (e.g.
    Solutions' auto-advance). Changed per explicit user request so the
    arrows can disable at each end: the prev button gets
    `disabled={activeIndustryIndex === 0}`, the next button
    `disabled={activeIndustryIndex === industries.length - 1}`
    (`disabled:opacity-40 disabled:cursor-not-allowed`, matching
    `Button.svelte`'s disabled-state convention). If wrapping navigation
    is wanted again, both the clamp *and* the disabled conditions need to
    come back out together — leaving one without the other breaks either
    the wrap or the enable/disable feedback.
  - **Each industry is ONE persistent `<button>`, not swapped between a
    `<div>` (expanded) and a `<button>` (collapsed) via `{#if}/{:else}`** —
    that was the original implementation, and it meant every click
    destroyed the old DOM node and created a new one at full size, so
    there was nothing for a CSS transition to animate between (it just
    snapped). Per explicit user request for a smooth "push" animation
    between cards, this was rewritten: the button's flex-grow is set via
    inline `style="flex-grow: {…}"` (10 when active, 1 otherwise,
    `flex-basis: 0%` always), and a `.industry-panel { transition:
    flex-grow 500ms ease-in-out; }` rule (in the `<style>` block) animates
    it smoothly on the same persistent element. The image and the
    collapsed colored/label overlay are now **both always in the DOM**
    for every industry, cross-fading via `transition-opacity duration-500`
    based on which is active, rather than being mounted/unmounted — same
    reasoning, needed a persistent element to animate. Don't reintroduce
    the `{#if}/{:else}` element-swap pattern here, it silently kills this
    transition.
- **Heading/subheading use forced `<br />` breaks**, same convention as
  the Solutions section's heading, matching the screenshot's exact 2-line
  split rather than relying on natural wrapping.
- **The subheading text is identical to the Solutions section's
  subheading** ("ElixirPay brings every essential payment workflow
  together in one unified platform.") — this was given that way in the
  reference screenshot, not a copy-paste mistake introduced here.
- `h-[620px]` accordion row height and the `flex-[10]` vs `flex-1` ratio
  are estimates from the screenshot's proportions, not measured values —
  same "adjust freely" convention as other sections' estimated pixel
  values.
- **Desktop card (the `h-[620px]` flex-grow strip + the
  heading/description/CTA/arrows panel below it) is now `hidden
  lg:block`/`lg:flex`** — same mobile-breakage pattern as Solutions: 8
  industries squeezed via `flex-grow` into a fixed-height row have no
  room to become vertical slivers legibly at a phone width, which is
  exactly what a bug screenshot showed (illegible vertical text strips).
  **Mobile gets its own vertical accordion** (`lg:hidden`, sibling div
  right above the desktop one), sharing `activeIndustryIndex` directly
  with desktop (no separate mobile state needed here, unlike Solutions —
  neither version has an auto-advance timer to conflict with).
  - **Went through two different mechanics before landing on the current
    one** — worth knowing both, since a future "make this smoother"
    request might otherwise reintroduce the first approach's problem:
    1. First attempt: the active industry was pulled out into its own
       card always rendered first, followed by an `{#each}` +
       `{#if i !== activeIndustryIndex}` filtering every *other*
       industry into a list below it. Clicking a bar reshuffled which
       items existed in that filtered list (items being added/removed
       from the DOM), so the active card effectively "jumped" to a fixed
       top slot on every click — not a smooth, in-place interaction.
    2. Second attempt kept that same structure but wrapped the swapping
       content in `{#key activeIndustryIndex}` + `transition:fade` so at
       least the *content* cross-faded instead of snapping. Better, but
       the card still jumped to the top slot and the list below still
       reshuffled — "smooth-ish" but not what was asked for.
    3. **Current, final version**: every industry is rendered as ONE
       persistent panel via a single `{#each industries as industry, i}`
       — nothing is ever added to/removed from the DOM, and no industry
       ever moves to a different list position. Each panel's `height`
       (`64px` collapsed → `520px` expanded) animates via
       `.industry-panel-mobile { transition: height 500ms ease-in-out }`
       (new rule in `<style>`, parallel to desktop's own `.industry-panel
       { transition: flex-grow 500ms ease-in-out }`), and each panel
       internally stacks two absolutely-positioned layers — the
       collapsed gradient/label bar and the expanded image/heading/
       description/CTA content — that cross-fade via
       `transition-opacity duration-500` on `class`, exactly mirroring
       how the *desktop* accordion's image/gradient layers cross-fade
       within its own persistent `.industry-panel` buttons. This is what
       actually reads as a "push" (clicking a panel grows it in place,
       visibly pushing the panels below it down the page) rather than a
       fade-and-relocate. Per an explicit "same card position" follow-up
       — don't reintroduce the filtered-list version above it.
    - **Both the panel's expanded height and the image's height are now
      responsive** (`h-[520px] sm:h-[600px] md:h-[660px]` on the panel,
      `h-64 sm:h-80 md:h-96` on the image inside it — was a fixed `520px`
      / `h-64` at every width via inline `style="height: ..."`). A
      tablet-width screenshot showed the image looking badly cropped: the
      image box is fixed-height but full-width, so at tablet widths it
      became much wider relative to its height than on a phone, and
      `object-cover` cropped far more of the image's top/bottom to fill
      that wider/shorter frame. Bumping the image taller at `sm:`/`md:`
      keeps its effective aspect ratio closer to reasonable as the
      viewport widens, and the panel's own height was bumped by roughly
      the same amount at each step so the taller image doesn't get
      clipped by the panel's `overflow-hidden`. Switched from an inline
      `style` binding to plain conditional Tailwind classes specifically
      *because* Tailwind's `sm:`/`md:` prefixes can't be expressed in a
      single interpolated inline-style string — the `.industry-panel-mobile
      { transition: height 500ms }` CSS rule still applies exactly the
      same either way, so the push animation is unaffected. These pixel
      values are still estimates, not measured against every industry's
      real copy — adjust further if a specific industry still clips.
  - **The reference screenshot's mobile mockup showed the subheading
    repeating this section's own heading verbatim** ("Payments
    Infrastructure Built for Modern Businesses.") instead of the real
    subheading text ("ElixirPay brings every essential payment
    workflow..."), and the expanded card's button read "Explore Payment
    Gateway" — copy that belongs to the *Solutions* section's Payment
    Gateway item, not any industry here. Both read as leftover
    lorem/placeholder text from whoever built that Figma frame rather
    than an intentional design choice, so neither was carried over —
    mobile uses the section's real subheading and each industry's real
    `cta` field, same content as desktop. Flag to the user if that
    mockup text was actually meant to be taken literally.
  - **Subheading's forced `<br />` is now `<br class="hidden sm:inline"
    />`** (was unconditional) — same technique and same reasoning as the
    Solutions section's identical subheading text: the break was placed
    for the desktop 2-line split ("...essential payment workflow" /
    "together in one unified platform."), but staying active on mobile
    forced the first half to wrap *again* on its own into an unevenly
    balanced 3-line result (a very short middle line). Hiding the break
    below `sm:` lets the full sentence wrap naturally into 3 lines
    instead, matching what was already done for Solutions.

## Growth section (`src/routes/+page.svelte`, fifth landing-page section)

Built from a single reference screenshot: a heading/subheading, a product
"Onboarding" admin-panel mockup with a floating "View Details" button, and
a 4-column feature grid (Launch Without Delays / Trust Every Transaction /
Grow Without Limits / Complete Control).

- **Heading's `whitespace-nowrap` has been removed entirely** — it went
  through two failed attempts at gating it responsively before this:
  unconditional nowrap first overflowed on mobile (cut off mid-word,
  "Built for G..." with the rest pushed off-screen); gating it to
  `sm:whitespace-nowrap` (640px+) then **still** overflowed at a
  tablet/small-laptop width screenshot, because at `md:text-web-48`
  (48px, active from 768px up with no further `lg:`/`xl:` size step)
  this phrase needs roughly 1000px+ of raw text width plus
  `container-page` padding — comfortably available on a full desktop
  window, but not yet at 640–1279px viewports. Rather than keep guessing
  a breakpoint high enough (`lg:`? `xl:`? `2xl:`?) that might just move
  the same failure to a different viewport width, `whitespace-nowrap` is
  now gone completely: the heading wraps naturally to 2 lines at
  whatever width doesn't comfortably fit it, and renders as 1 line on
  any viewport wide enough to fit it on its own — same behavior as the
  "One Platform. Every Payment Workflow." heading elsewhere on this
  page, which already wraps to 2 lines everywhere including desktop
  without issue. **If a 1-line-only desktop treatment is wanted again,
  it needs an explicit, wide breakpoint (`xl:whitespace-nowrap` or
  higher) verified in an actual browser at the exact target width** —
  don't reintroduce `sm:` or `md:` gating, both are already confirmed
  too narrow.
- **Subheading's forced `<br />` is now `<br class="hidden sm:inline"
  />`** (was unconditional, breaking after "...operational friction, so")
  — same fix and same reasoning already applied to Solutions/Services'
  identical-pattern subheadings: on mobile, "so" was landing alone on
  its own line because the break stayed active below the width it was
  sized for. Hides the break under `sm:` so the full sentence wraps
  naturally instead.

- **The admin-panel mockup is now a real image** (`growthMockupImage`,
  `Section 5 - Built for Growth./mockup.png` — note the folder name's own
  trailing period before the slash, preserved as provided, same
  odd-asset-path convention as `bashboard.png`/`...social%20proffs`; the
  filename itself changed once from `Mockups.png` to `mockup.png` per a
  follow-up message, so if a broken image ever shows up here, check which
  casing/filename is currently live). This **replaced** an earlier
  hand-built HTML/CSS approximation (sidebar nav, 4 stat tiles, a data
  table with status badges) that existed before this asset was provided.
  That approximation deliberately used generic placeholder org names
  ("Organization A/B/C/D") rather than the reference screenshot's real
  bank/company names (HDFC, ICICI, Bank of Baroda, IBM, Tata, Google,
  Juspay) — reproducing those specific real entities in a fabricated
  screenshot would have misleadingly implied an actual customer
  relationship. That whole concern is now moot: the real image is an
  actual product screenshot (confirmed by downloading and viewing it),
  not something fabricated here, so it's fine that its content is
  whatever the real product shows. The floating dark "View Details"
  button remains a separately-positioned `<a>` overlaid via `absolute`
  positioning on top of the image, matching the reference — it is not
  baked into the image itself.
  - **Container is `border-t` only now** — bottom border removed first
    (image content fades to empty near its bottom edge, see the
    downloaded asset: the last couple of table rows are faded
    near-invisible, so a bottom border line read oddly against that
    fade), then left/right removed too in a follow-up request. Only the
    top border remains.
  - **No crop/scale on the `<img>` — tried and reverted.** The source PNG
    has a thin light-gray margin baked in around the white dashboard card
    (a faint line/seam once rendered), which can't be edited since it's an
    external asset. `scale-105` was tried to zoom past it, but the margin
    turned out **not to be even on all sides** — a symmetric center-origin
    scale crops equally from every edge, so it cut into real UI content
    (the "Onboarding" heading, the logo) on whichever side had less
    margin, per a follow-up screenshot showing exactly that. Reverted to
    plain `w-full` with no scale — the faint margin line is a smaller
    problem than cropped content. **A real fix needs either**: (a) a
    re-exported asset with the margin trimmed at the source, or (b) a
    fixed-aspect container + `object-fit: cover` with a specifically
    measured `object-position` offset per side (not a uniform scale) —
    neither has been attempted since it requires knowing the actual
    margin's pixel dimensions on each edge, which hasn't been provided.
  - **Mockup wrapper is `container-page` + `mx-auto max-w-5xl`** —
    briefly changed to a plain `mx-[120px]` (matching the feature grid
    right below it and the Developers section's mockup, since the two
    widths didn't line up: `max-w-5xl` is 1024px vs. the feature grid's
    ~1680px at `mx-[120px]`), then **explicitly reverted** back to this
    original centered/narrower treatment per an immediate "undo this".
    So: this width mismatch between the mockup and the feature grid
    below it is the **current, intentional** state, not an unnoticed bug
    — don't re-apply the `mx-[120px]` fix without a fresh explicit
    request, even though it was flagged as a real alignment inconsistency
    at the time.
- **"Grow Without Limits" description was shortened to fit 3 lines** (was
  "Whether you're processing hundreds or millions of payments, ElixirPay
  grows with your business – without changing your infrastructure." →
  "...ElixirPay scales with your business without added complexity.") —
  per an explicit "trim to 3 lines" request, this is a real copy edit
  (shorter wording), not a CSS/line-clamp trick — the other 3 feature
  descriptions weren't touched, they already rendered at 3 lines.
- **The 4 feature-grid icons are now real assets** (`growthFeatures` array
  in `<script>`, each with an `icon` URL built from `growthIconBase` +
  filename — `iocn1.svg` is genuinely misspelled in the source asset's own
  filename, not a typo introduced here, same convention as
  `bashboard.png`/`...social%20proffs`). This replaced the inline
  hand-authored SVG paths (arrow, heart-in-hand, trending chart, toggle)
  that stood in before these were provided.
  - **The icon wrapper div has no border/box styling at all now** — it
    briefly had `rounded-xl border border-blue-200` (a box around every
    icon), but a follow-up screenshot showed only icon 1 has a framed box
    in the actual design, and icons 2–4 are bare line icons with no
    container — that's because **icon 1's box is baked into its own SVG
    artwork**, not something meant to be added uniformly in code. Our
    wrapper's border was therefore adding a redundant second box to icon 1
    and an *unwanted* box to icons 2–4. The wrapper div is now just
    `flex h-12 w-12 items-center justify-center` for sizing/centering,
    with zero border/background/color styling — each icon's own asset is
    fully responsible for however it should look, including whether it
    has a frame.
  - **Icons have both a hover animation AND a continuous per-icon loop
    now.** Hover: each feature's outer `<div>` is `group`, and the icon
    `<img>` gets `transition-transform duration-300 ease-out
    group-hover:-translate-y-1 group-hover:scale-110` (a gentle lift +
    10% scale-up). Continuous: per an explicit "make my svg into a gif
    animation" follow-up, each icon is wrapped in an extra `<span
    class="icon-anim-*">` (`icon-anim-launch`/`-trust`/`-grow`/`-control`,
    picked by array index via `[...][i]`) with its own always-looping
    `@keyframes` in the `<style>` block, shaped to match what each icon
    depicts rather than reusing one generic animation for all four:
    `icon-launch` nudges diagonally (matching the arrow-into-corner icon),
    `icon-trust` pulses via `scale` (matching the heart), `icon-grow` bobs
    upward via `translateY` (matching the trending-up chart), `icon-control`
    slides side to side via `translateX` (matching the toggle switch).
    **The continuous loop lives on the wrapper `<span>`, not the `<img>`
    itself** — deliberately, so it doesn't collide with the hover
    transition above: both animate `transform`, and stacking a
    `@keyframes` animation and a Tailwind hover-transition on the *same*
    element would have them fight over that one property. Two nested
    elements each animating their own `transform` compose visually without
    conflict. (This also reverses the earlier reasoning that a continuous
    loop across 4 icons "would read as busy" — the user asked for exactly
    that once shown what a hover-only effect looked like, so the earlier
    hover-only choice wasn't final, just what was asked for at the time.)
- **Feature grid is `mx-6 lg:mx-[120px]`** (was unconditional
  `mx-[120px]`, per explicit user request at the time, same convention
  as the Solutions/Services sections' cards) — a mobile screenshot later
  showed this squeezing the same way the Developers section's grid did
  (see that section's own notes): a fixed 120px gutter on each side eats
  most of a phone viewport, and the text wasn't left-aligned either, so
  **`text-left` was added explicitly** too rather than relying on
  inherited alignment. The mockup image above this grid still uses
  `container-page` (not `mx-[120px]`), so the two no longer share the
  same left/right edges at any viewport — intentional, matching how
  Solutions' card diverged from its own heading above it for the same
  reason; don't try to re-align them without being asked.
- **Heading is forced to exactly 1 line via `whitespace-nowrap`**, not a
  `<br />` (there's nothing to break — it's a single line already, just
  needed to stop it from *wrapping*, which it started doing at narrower
  viewport widths). This is a different technique from the `<br />`-forced
  multi-line headings elsewhere: `whitespace-nowrap` overflows the
  container rather than wrapping if the viewport is too narrow for the
  full phrase — no responsive fallback was added for very small screens
  since it wasn't requested.
  - **No `max-w-3xl`/`mx-auto` on the `<h2>` itself anymore** — it
    originally had both (matching the `<p>` below it's `mx-auto max-w-*`
    pattern), but at `md:text-web-48` the nowrap text renders
    ~1000px+ wide, well past `max-w-3xl`'s 768px cap, so the heading was
    a much-narrower centered box with heavily overflowing text. The user
    reported a visible centering mismatch against the subheading twice
    (even after I'd reasoned through the CSS and concluded overflow
    *should* center symmetrically); rather than keep asserting the math
    was fine against a repeated visual report, removed the width cap
    entirely so the box just naturally sizes to `container-page`'s full
    content width — text-align:center then centers the nowrap line
    within a box that's always wider than the text, no overflow involved
    at any breakpoint. If a similar "I still see it" report comes up
    elsewhere, prefer this kind of structural fix (remove the
    overflow-prone constraint) over re-defending the CSS theory.
  - **Subheading uses a forced `<br />`** after "so", same convention as
    Solutions/Services, **and its container was widened `max-w-3xl` →
    `max-w-4xl`** — same recurring bug as those two sections: the forced
    break alone doesn't guarantee 2 lines if either half is still long
    enough to wrap again on its own, so the container has to be wide
    enough for the longer half (here, the first segment, ~82 characters)
    to fit on one line at `text-para-24`.
- Section uses `bg-gray-50` and `py-[160px]`, consistent with the
  Solutions section's padding convention (see its own notes above for why
  `py-[160px]` matters — it interacts with any fixed-height ancestor).

## Developers section (`src/routes/+page.svelte`, sixth landing-page section)

Built from a single reference screenshot: a dark section (matching Hero's
dark theme, not the light `#F8F8F8`/`bg-white` used by the sections above
it), a heading/subheading, a center code-editor mockup with a floating
"View Documents" button, and two 2-item feature columns flanking it
(Build Faster / Multiple SDKs on the left, Sandbox Environment / 24×7
Monitoring on the right).

- **The subheading's "Developer section content: Build Payments. Not
  Complexity." prefix was dropped.** The reference screenshot's
  subheading literally reads "Developer section content: Build Payments.
  Not Complexity. Clean APIs, practical documentation, and
  production-ready tools designed to help your team spend less time
  integrating and more time building." That prefix verbatim-repeats the
  H1 and reads like a design-file placeholder/annotation ("this is the
  developer section, its content should be: ...") that leaked into the
  mockup rather than intended copy — so only "Clean APIs, practical
  documentation..." onward was used. **Flag to the user if the full
  literal string was actually the intended subheading** — this was a
  judgment call, not a confirmed correction.
- **The code-editor mockup is now a real image** (`developersMockupImage`,
  `Section 6 - developers/Mockups.png`). This **replaced** an earlier
  hand-built HTML/CSS version (window chrome dots,
  `RIG://ELIXIRPAY_LOCALHOST` title, `obslog › logger.go › …` breadcrumb,
  23 lines of hand-colored syntax-highlighted Go source, escaped with
  `{'{'}`/`{'}'}` since literal braces in Svelte template text get parsed
  as expression syntax — that whole escaping exercise is now moot since
  the block is gone). Unlike the Growth section's admin-panel mockup,
  there was never a real-entity/fabrication concern here (it was generic
  sample Go code, not simulated customer data), so the hand-built version
  wasn't replaced out of necessity — the user simply provided a real
  asset.
  - **Container has NO border at all now** (`class="relative
    overflow-hidden"`, nothing else) — this took several iterations to
    land on. `developersMockupImage`'s source PNG has **its own rounded
    top corner baked into the screenshot** (the mocked app window itself
    has a rounded corner as part of the design, not something added by
    us). Every earlier attempt to add our own edge — `border` on all
    sides, `border-b-0`, `border-t` only, with or without our own
    `rounded-2xl` — put a straight or independently-curved line from our
    CSS visually on top of / next to the image's own already-rounded
    corner, since the two weren't tracing the same curve. The actual fix
    was to stop adding any border of our own and let the image's own
    baked-in edge be the only visible boundary — `overflow-hidden` alone
    still clips the image to a rectangle, which is harmless since the
    image's corner is already transparent/rounded within that rectangle.
    **If a different mockup image is ever swapped in without its own
    baked-in rounded corner, this container will need an explicit
    `rounded-*` + border again** — don't assume "no border" is universally
    correct, it's correct specifically because of this asset's own
    styling.
  - **A gradient overlay still fades the bottom edge into the section
    background**, unaffected by the border removal above — a
    `pointer-events-none absolute inset-x-0 bottom-0 h-1/4
    bg-gradient-to-t from-[#171717] to-transparent` div sits inside the
    same `relative overflow-hidden` container as the image, covering the
    bottom quarter, since the code content in the image thins out/fades
    near its bottom edge. If `developersMockupImage` is ever swapped for a
    different asset whose background isn't `#171717`, update this
    gradient's color to match.
- **The floating "View Documents" button** uses the same
  absolutely-positioned-over-the-mockup pattern as Growth's "View
  Details" button — `bg-white text-gray-900`, not `bg-gray-900 text-white`
  like Growth's, matching the reference (this section is dark overall, so
  the floating button inverts to light instead).
- **4 feature icons are inline SVGs I authored** (lightning bolt,
  down/up arrows, archive/sandbox box, eye) — no icon assets were
  provided for this section (unlike Growth's, which got real ones after
  starting the same way). No border/box wrapper around these icons,
  learned from the Growth section's icon-box mistake — these are bare
  icons only.
- **Layout**: `grid-cols-1 lg:grid-cols-[280px_1fr_280px]`, with the two
  feature columns using `order-2`/`order-3` and the code mockup
  `order-1` so on mobile (`grid-cols-1`) the code mockup appears first,
  then both feature columns stacked — an ordering choice, not something
  shown in the reference (which only shows the desktop 3-column layout).
- Section uses `bg-[#171717]` (an explicit user-specified hex, not a
  Tailwind gray step — was briefly `bg-gray-950`) and `py-[160px]`,
  continuing the `py-[160px]` convention from Solutions/Services/Growth.
- **Grid wrapper is `mx-6 lg:mx-[120px]`** (was unconditional
  `mx-[120px]`) — a mobile screenshot showed the code mockup and "View
  Documents" button rendering tiny in a sea of empty black space, because
  a fixed 120px gutter on *each* side eats a huge fraction of a phone
  viewport (e.g. ~240px gone out of ~390px total). Unlike the
  Solutions/Services accordions, this didn't need a separate mobile
  layout — the `grid-cols-1` + `order-*` stacking already works fine on
  mobile — it just needed a narrower gutter below `lg:`, matching the
  Growth section mockup's already-correctly-sized mobile treatment (that
  one uses `container-page`'s responsive padding instead of a fixed
  `mx-[120px]`, which is why it never had this problem). **This same
  unconditional-`mx-[120px]` squeeze was confirmed on the Growth
  section's own 4-icon feature grid too** in an immediate follow-up
  screenshot — see that section's own notes below for the fix.
## Build Around section (`src/routes/+page.svelte`, seventh landing-page section)

**Currently a bordered 3×2 "hover-popup" grid** — a spreadsheet-style grid
of hairline-divided cells (icon + team name + arrow at rest); hovering a
cell rises a detail popup up out of it into an elevated overlay above the
grid, per an explicit reference screenshot ("when i hover it will flip and
bit up like i attached"). This replaced a brief whole-card 3D `rotateY`
flip mechanic, which itself had replaced a stacked "browser window" card
carousel — see history below. **None of these reconstructions are the
literal original code** — each redesign fully replaced the prior
section's markup, so only written summaries carried forward, not exact
markup/values. If any detail (spacing, colors, popup size, accent bar)
doesn't match what was actually live before, flag it like any other
pixel-level fix.

- **Subheading is forced into exactly 4 lines via 3 explicit `<br />`**,
  currently: `"One platform. Different priorities.<br />Every team gets
  the visibility<br />and control they need without<br />switching
  between multiple tools."` — went through two corrections to get here:
  1. Natural wrapping at this paragraph's `max-w-4xl` originally broke
     the text into 5 uneven lines (a lone "control they" stranded on its
     own short line) — first "make the proper 4 line content" fix added
     3 `<br />` at `"...priorities.<br />Every team gets the visibility
     and control<br />they need without switching between<br />multiple
     tools."`.
  2. That still produced 5 lines ("i still see its 5 line i need it to
     4 lines") — the 2nd segment, "Every team gets the visibility and
     control", was itself too long for this `max-w` at the viewport it
     was checked against, so it silently re-wrapped into 2 lines on its
     own. Fixed by rebalancing into 4 shorter, more even segments (none
     longer than the first, known-good line) instead of widening
     `max-w-*` further — this is the more reliable fix when a forced-line
     segment is the one re-wrapping, vs. widening the container when the
     wrapping *point* itself was wrong.
  Same established pattern as other sections' forced-`<br />` headings:
  re-check line lengths (or widen `max-w-*`) if a future copy change
  makes any of these 4 segments wrap again on its own.

- **Mobile/tablet (below `lg:`) has an entirely separate, non-interactive
  layout — not a responsive version of the hover grid.** Per an explicit
  "in mobile remove the effects and show the backside to all six"
  request (hover doesn't work on touch devices, so the flip/popup grid
  below just doesn't function there at all): a plain stacked list
  (`{#each teams as team, i (team.key)}`), one team per row, each showing
  its detail content ("backside" — icon, colored `labelColor` label,
  heading, divider, 2×2 links grid) **permanently**, `p-8`, no
  hover/click/transition of any kind. This whole block is `lg:hidden`;
  the hover grid's wrapper is `hidden lg:block` — same
  separate-markup-per-breakpoint pattern already used for the
  Solutions/Services sections' mobile accordions (see those sections'
  own notes), rather than trying to force one markup tree to work both
  ways.
  - **No colored divider stripe, zero gap between cards, full border on
    each card** — a first version had `border border-gray-200
    bg-gray-100` on each card plus a solid `h-16` divider stripe between
    cards in that team's own accent color (`team.labelColor` with
    `text-` swapped for `bg-`). Both were removed per "remove the blue
    patch and padding between cards is zero" — the stripe itself was
    what read as "padding" between cards; once it's gone, adjacent
    block-level divs with no margin are already flush. A follow-up "give
    the border" added a plain `border-b border-gray-200` back onto each
    card; a further "make the border for all 4 cornor" widened that to a
    full `border` (all 4 sides) — so each card now has its own complete
    border, and since there's still zero gap between cards, adjacent
    cards' touching top/bottom edges double up into a slightly thicker
    seam. That's expected from the explicit all-4-sides ask, not a bug to
    fix.
  - **Card background is a checkerboard**: `bg-gray-50` on cards 2/4/6
    (`i % 2 === 1`), `bg-white` otherwise, per "second, fourth, sixth
    cards only gray rest of the cards are white" — same rule and even
    the same color as the desktop grid's own checkerboard (below), just
    applied down one column instead of across a 3-column grid.
- **Desktop (`lg:` and up) — the interactive hover grid**: fixed `200px`
  left/right gutter per explicit request — `mx-4 sm:mx-8 lg:mx-[200px]`
  (same fixed-gutter convention as Footer's outer wrapper) wrapping
  `border-l border-t border-gray-200`. Each of the 6 cells then only
  needs its own `border-r border-b border-gray-200` — combined with the
  wrapper's top/left border, this tiles into a clean 1px grid with no
  doubled lines and no nth-child breakpoint-specific border logic. Grid
  itself is just `lg:grid-cols-3` now (no `grid-cols-1`/`sm:grid-cols-2`
  — those covered the responsive fallback before the mobile list above
  existed as a separate block; now this whole wrapper is `hidden`
  outright below `lg:`, so a single fixed 3-column value is enough).
- **Cell at rest**: `h-[320px] p-8`, icon top, `team.label` + a small "↗"
  arrow glyph at the bottom, `flex flex-col justify-between`. No content
  besides icon/name/arrow.
- **Checkerboard background** — `{#each teams as team, i (team.key)}`
  (index added specifically for this), cell background is `bg-gray-50`
  when `i % 2 === 1`, else `bg-white`. Per an explicit "give above centre
  box gray, below first and third box gray color" request: with 6 teams
  laid out 3-per-row, the odd indices (Finance=1, Customer Support=3,
  Founders=5) are exactly top-center + bottom-left + bottom-right, so
  plain index parity produces that pattern with no per-cell special
  casing needed. This is now moot below `lg:` regardless — the mobile/
  tablet stacked list above is a separate markup block entirely and
  doesn't use this checkerboard logic at all.
- **Hover — cell itself turns blue + popup overlaps down into it**: two
  earlier attempts at this got corrected in sequence — first a thin `h-1`
  bottom accent bar, then a separate offset "shadow" rectangle behind the
  popup (recolored blue, mimicking the carousel's stacked-card trick) —
  both wrong per explicit follow-up screenshots. The actual mechanic,
  confirmed by the second correction ("the particular block will move up
  and the existing block bg appear blue"):
  - The **cell itself** gets `hover:bg-blue-600 transition-colors
    duration-500 ease-in-out` directly (not `group-hover` on a child —
    the cell IS the hover target) — its own background fills solid blue,
    not a separate offset shape behind anything. Its icon/label content
    (`team.icon` + `team.label` + "↗") fades out via `transition-opacity
    duration-500 ease-in-out group-hover:opacity-0` on that inner
    wrapper, since the reference shows nothing but blue once hovered.
    Durations were bumped from an initial `duration-300` to `duration-500
    ease-in-out` across the cell, the fade, and the popup (below) per an
    explicit "give the smooth transition" request — keep all three in
    sync if tuning timing further, they're meant to move together.
  - The **popup** is anchored `absolute bottom-16 left-4 right-[-3rem]`
    (NOT symmetric `inset-x-4`, and NOT `bottom-full`):
    - `bottom-16` (64px) means it overlaps down INTO the cell rather
      than sitting flush above it, which is what leaves a visible strip
      of the cell's own blue hover fill showing below the popup.
    - `left-4` + `right-[-3rem]` is asymmetric on purpose — a first pass
      used symmetric `inset-x-4` (popup fully contained within the
      hovered cell's own width), but a follow-up correction ("card will
      overlap exactly [the reference]") showed the popup should spill
      past the cell's own right border into the *neighboring* cell.
      `right-[-3rem]` (a negative arbitrary value) widens the popup so
      its right edge extends beyond the cell's padding box; net overlap
      past the actual border is `48px - 32px` (the cell's own `p-8`) =
      `16px` past the border into the next column. **This 48px value is
      a visual estimate from a cropped reference screenshot, not a
      measured one** — if the live overlap amount looks off, it's a
      one-number tweak to that `right-[-3rem]`.
    It still grows into place on hover ("the particular block will move
    up"), but **transform-only, no `opacity` toggle** — went through a
    correction on this: the first version was `translate-y-8 scale-95
    opacity-0 pointer-events-none` at rest → `group-hover:translate-y-0
    group-hover:scale-100 group-hover:opacity-100
    group-hover:pointer-events-auto`, which faded the popup in via
    opacity alongside the transform. Per an explicit "the transition
    should smooth without disolve" correction, the `opacity`/`translate-y`
    pair was dropped entirely and replaced with just `origin-bottom
    scale-0 pointer-events-none` at rest → `group-hover:scale-100
    group-hover:pointer-events-auto`, `transition-transform` (not
    `transition-all`/`transition-opacity`) — the popup now grows from
    nothing at its bottom edge up to full size, nothing is ever
    partially-transparent, so there's no fade/"dissolve" at any point.
    Duration is `duration-500 ease-in-out` (bumped from an original
    `duration-300 ease-out` per an earlier "give the smooth transition"
    request — kept in sync with the cell's own hover-color transition
    above). **Don't reintroduce an opacity-based fade on this popup**
    without a fresh explicit request — it was tried and explicitly
    corrected away from. `pointer-events-none` at rest matters because
    the popup's box overlaps neighboring cells even when invisible
    (here, "invisible" means zero-scale, not transparent).
    **`bg-gray-100`, not `bg-[#F8F8F8]`** — nudged slightly
    more gray per an explicit "give this box little gray" request; still
    a light neutral, just one step darker than the near-white it was.
    **Square corners, no `rounded-*` class** — an earlier pass
    had `rounded-2xl` on the popup, removed per an explicit "remove the
    corner radius" correction; the popup's own width/position (the
    overlap amounts above) is unchanged, only the radius was dropped.
    **Explicit `h-[320px]` on the popup box itself** (padding `p-8`
    included in that height) — went through two corrections: first the
    popup's natural intrinsic height (content packed tightly near the
    top, dead space only at the very bottom) read as too short, so an
    inner `h-[440px]` content wrapper was added; that then read as too
    tall ("i want the same height how rest of the boxes there"), so it
    was changed to `h-[320px]` **on the outer box**, matching the grid
    cells' own `h-[320px]` exactly — not a new arbitrary number, the
    literal same value the cells already use. The inner content wrapper
    is `flex h-full flex-col justify-between`, spreading icon /
    label+heading / links across that height instead of packing them
    tightly near the top. Content: icon, `team.label` as a small
    `font-mono uppercase tracking-widest` caption colored via
    `team.labelColor`, `team.heading` bold below it, then a divider and
    the 2×2 `team.links` grid with chevron-box markers (the same
    link-row visual reused from every prior iteration of this section).
  **Don't reintroduce the accent-bar, the offset-shadow-patch version, or
  symmetric `inset-x-4` popup positioning** without a fresh explicit
  request — all three were shown wrong via follow-up screenshots in the
  same conversation.
- **`labelColor`** (Tailwind text color, one per team: `text-blue-600`
  Developers, `text-blue-600` Finance, `text-purple-600` Operations,
  `text-orange-600` Customer Support, `text-pink-600` Sales,
  `text-indigo-600` Founders) — Finance was corrected from `text-amber-600`
  to `text-blue-600` after a reference screenshot showed a blue "FINANCE"
  caption, not orange (every other reference screenshot across this whole
  session's Build Around iterations has also shown it blue — the amber
  guess was wrong from the start). The rest carried over unchanged from
  the 3D-flip attempt; still a reconstruction, not confirmed original
  values.
- **No `activeTeamIndex`/carousel state** — every cell hovers/pops
  independently, nothing to track index-wise.
- **Team content itself is unchanged throughout all of this** — same 6
  teams, same headings, same link lists (Finance is still the only one
  with fully confirmed real copy; the other 5 remain placeholder-voice
  text, see the `teams` array in `<script>`).

### Past history (no longer live, kept for context, newest first)

1. **Whole-card 3D flip** (brief) — `group [perspective:1000px]` cell with
   an inner `[transform-style:preserve-3d]` div rotating
   `group-hover:[transform:rotateY(180deg)]`, front/back faces
   `absolute inset-0 [backface-visibility:hidden]`. Replaced almost
   immediately by the hover-popup mechanic above once a reference
   screenshot showed a rise-up popup instead of an actual 3D rotation —
   **don't resurrect `[perspective]`/`rotateY` styling without a fresh
   explicit request.**
2. **Stacked "browser window" card carousel** — one team's card shown
   large and centered with neighbors peeking in from the edges (the same
   windowed-carousel technique as the Testimonial avatar row), an
   `activeTeamIndex` state, clicking a side sliver to switch. Also briefly
   had an `in:fly` entrance transition on the active card (added per
   "card will come one by one from bottom," tuned per "card stright way
   come from down and stick the place" to pin `opacity: 1` so fly didn't
   also fade the card), before the whole carousel was reverted per
   "remove this go back to the old layout" → "go back to the flip
   layout." **Don't resurrect the carousel, `activeTeamIndex`, or
   `in:fly` without a fresh explicit request.**
3. **Original flip-card mechanic, pre-carousel** — went through **six
   iterations** (click-popup → hover-popup → whole-card 3D flip → back to
   popup per a screenshot → flip-in-popup compromise → back to whole-card
   flip, final) chasing exactly what "hover reveals detail" should look
   like, before the carousel replaced it wholesale. The current
   hover-popup design (see above) is a fresh reconstruction of iteration
   2/4 in that list, not a literal restore — if pointed at an old
   screenshot from any of these variants, confirm which specific mechanic
   is wanted, since several already look similar to what's currently
   live.

### Testimonial (built from a reference screenshot, real Cisco quote)

- `bg-black py-[160px] text-center text-white`, continuing the
  `py-[160px]` convention. Heading "Built on Trust. Proven<br />by
  Experience." forced 2-line via `<br />`, `max-w-2xl` — didn't hit the
  usual 3-line bug here since the container was already narrow enough.
  Subheading same `max-w-2xl`, **forced into exactly 3 lines via 2
  explicit `<br />`**, currently: `"The best measure of a payment
  platform<br />isn't what we say— it's what our<br />customers
  experience every day."` — went through two corrections to get here:
  1. Originally had only 1 forced break (after "we say—"), relying on
     this `max-w`'s natural wrapping to also split "...isn't what we
     say—" into 2 lines on its own; happened to render as 3 lines but
     wasn't guaranteed to hold at other viewport widths. First fix added
     a 2nd explicit break at "...isn't" / "what we say—" / "it's
     what...", per "check this body and make this into 3 lines" — same
     lesson as the Build Around subheading's forced-line-count fix:
     don't rely on natural wrapping to fill in a forced-line-count
     request, spell out every break explicitly.
  2. That was still flagged ("still i see the issuse make it 3 lines")
     — technically 3 lines, but a very short middle line ("what we
     say—") sandwiched between two long ones read as unbalanced/wrong.
     Rebalanced into 3 more even segments (same words, different break
     points) instead. **Lesson: a forced line count needs both (a) the
     right number of `<br />` and (b) roughly even segment lengths —
     satisfying only (a) can still look broken.**
- **5-avatar wrap-around carousel**, not a clamped stepper like Services'
  industries arrows — there are exactly 5 avatar slots for exactly 5
  `testimonials` entries, so `visibleTestimonials` is just the whole
  array reordered around `activeTestimonialIndex` at offsets `-2..+2`,
  wrapping via modulo. Center (`offset === 0`) renders at `h-[200px]
  w-[200px]` and full opacity; `±1` at `h-36 w-36` and `opacity-60`; `±2`
  at `h-28 w-28` and `opacity-30` — sizes/opacity read off the reference
  screenshot's visibly shrinking-and-dimming avatar row. Clicking any
  avatar (not just the arrows) re-centers the carousel on it.
- Prev/next (`‹`/`›`) buttons are `absolute left-8`/`right-8` pinned to
  the section's outer edges (like Services' arrows), not clustered next
  to the avatar row itself — matches the reference, where the arrows sit
  near the screen edges, not adjacent to the images.
- **Only one testimonial ("Cisco" / Anantha Krishnan, Founder & CEO) has
  a real, user-provided quote**, and it's listed first in the array with
  `activeTestimonialIndex` starting at `0` so it's centered/active by
  default. **The other 4 slots have written-for-this-project sample
  copy** (replacing the earlier literal "Placeholder testimonial copy
  goes here" text): Northbridge Retail / Priya Menon (checkout
  drop-off), Vantra Logistics / Elena Castillo (cross-country vendor
  payouts), Solace Health / Rachel Kim (refund reconciliation), Fernway
  Studio / Marcus Lee (subscription billing recovery). **These 4
  companies/names/quotes are fictional**, invented to match Cisco's voice
  and structure — not real customers or claims. Swap them for real
  testimonials if/when the user provides them.
- **All 5 avatar photos are real assets, but the avatar↔testimonial
  pairing required actually downloading and viewing each file** — the
  filenames do NOT correspond to the reference screenshot's visual
  left-to-right order the way earlier notes assumed. Confirmed mapping:
  `Image 1.png` = the man (→ Cisco/Anantha Krishnan), `image 2.png` =
  older woman (→ Vantra/Elena Castillo), `image 3.png` = young blonde
  woman (→ Northbridge/Priya Menon), `image 4.png` = a second,
  visually-near-identical young blonde woman (→ Solace/Rachel Kim — this
  slot's name was also changed from "David Okafor" to match the photo's
  gender), `image 5.png` = a younger/short-haired person (→
  Fernway/Marcus Lee). **`image 3` and `image 4` look enough alike that
  they must not land in adjacent ring positions** — the array order was
  chosen (Cisco → Priya → Elena → Rachel → Marcus) specifically so those
  two are 2 apart in the 5-item cycle, the maximum possible separation,
  after the user flagged the two look-alike photos sitting side by side.
  If more testimonials/avatars are added later, re-check this adjacency
  constraint rather than assuming any order is fine.
- **Every testimonial's `logo` now points at the same `logo company.png`
  asset** (Cisco's real logo) per explicit "maintain the company logo to
  all 5" request — there are no real logo assets for the 4 fictional
  companies, so this is a shared placeholder mark, not a claim that
  Northbridge/Vantra/Solace/Fernway are Cisco. Swap in each company's own
  logo if real ones are ever provided; the `{#if activeTestimonial.logo}`
  / plain-text-wordmark fallback in the template still exists for that
  case even though every slot currently has a non-null `logo`.
- **`testimonialArrowIcons.prev` points at `Right%20icon.svg` and `.next`
  points at `left%20icon.svg`** — swapped from the filename-matching
  assignment per explicit user correction (the asset named "left icon"
  reads visually as the arrow that belongs on the next/right button, and
  vice versa — don't "fix" this back to matching filenames without
  checking). Icon size is `h-12 w-12` (was `h-6 w-6`, doubled per
  request).
- Quote is split into two `<span>`s — `quoteHighlight` (`text-white`) and
  `quoteRest` (`text-white/40`) — matching the reference's exact fade
  point mid-sentence ("...FIRC generation that once took" white, "up to
  five days now..." fades to gray). This split point is content-specific
  per testimonial, not a fixed word count, so each new real testimonial
  needs its own highlight/rest split chosen to match its own reference
  image.
- Name ("Anantha Krishnan") and role ("Founder & CEO") are `font-mono`,
  matching the reference's visibly monospace credit line — an extension
  of the site's normal "only buttons use mono" rule specifically for this
  section, not a contradiction of it.

### FAQ (built from a reference screenshot)

- `bg-white pt-[160px]` (**top padding only**, no `pb`) — per an explicit
  "move this to bottom" request, the stat strip is now flush against the
  section's actual bottom edge instead of floating with 160px of empty
  space below it. Outer
  wrapper is `mx-4 lg:mx-[120px]` (was unconditional `mx-[120px]`; a
  mobile screenshot showed the accordion squeezed narrow with huge empty
  side margins, same bug already fixed the same way for Developers/
  Growth/Build Around — `mx-4` = 16px, an explicit follow-up value
  request) — **not** `container-page`'s responsive `clamp()` padding, so
  at `lg:` the right column's width stays an exact, non-fluid **`800px`**
  (was `944px`, reduced per an immediate follow-up "reduce the width"
  request) regardless of viewport — `lg:grid-cols-[1fr_800px]` (left column absorbs the
  remaining space, accordion is pinned to a fixed width against the
  right edge). Two-column layout: left is a static heading + gray
  subheading + a "Learn more" pill button (`rounded-lg border
  border-gray-200 bg-gray-50`, `font-mono` per the site's
  buttons-are-mono rule); right is the accordion. **Subheading is
  `max-w-lg`** (`max-w-sm` → `max-w-md` → `max-w-lg`, widened across two
  follow-up requests) — no forced `<br />`, purely widening to get the
  natural wrap down to 3 lines instead of 4; `max-w-md` (448px) still
  wrapped to 4, `max-w-lg` (512px) was needed.
- **Accordion is one open row at a time**, toggled by clicking anywhere on
  the row (`openFaqIndex`, `-1` = none open). Answer text uses Svelte's
  `transition:slide={{ duration: 300 }}` (from `svelte/transition`) on
  the `{#if}` block, so opening/closing animates height rather than
  snapping instantly — added per explicit "the open will more smooth"
  follow-up; the initial build shipped with a plain `{#if}` and no
  transition.
  **Circle icon is built from two overlaid bars, not a swapped `−`/`+`
  text character** — a horizontal bar (always visible) plus a vertical
  bar that `scale-y-0`s away when open, `transition-transform
  duration-300`. A rotated `+` can't become a `−` (rotating 45° gives an
  "×", not "−"), so the smooth-morph request needed this two-bar
  approach instead of animating the glyph itself. Border darkened
  `gray-300` → `gray-400`, bar color darkened `gray-400` → `gray-600`,
  per explicit "increase the icon color more darker" request.
- **All 6 questions and answers are now real, user-provided FAQ copy**
  (previously only Q1's answer was real off the reference screenshot;
  the other 5 answers were placeholder text in ElixirPay's voice — the
  user has since supplied the real answers for all 6, so nothing in
  `faqs` is placeholder anymore).
- **Gap between the accordion and the stat strip is a fixed `mt-[160px]`**
  (`mt-24`/96px → `mt-[90px]` → `mt-[160px]`, two follow-up requests for
  an exact value).
- **Stat strip below the accordion breaks out of `container-page`** to
  span full viewport width — same technique as the About section's
  trust-logo marquee strip (a plain full-width `<div>` as a direct child
  of `<section>`, not wrapped in the container). 4 stats, current
  `faqStats` order: **100+ APIs keys / 12+ Payment Solutions / 256 bit
  Encryption / 24×7 Infrastructure Monitoring** (last two swapped from
  their original order per an explicit "swap left and right" request —
  on the mobile 2-per-row layout this put 256 in the 3rd/gray-background
  slot and 24×7 in the 4th/white-background slot; the swap was done by
  reordering the array, not by moving the alternating
  `bg-gray-50`/`bg-white` logic, so background color stays tied to grid
  position while the two values traded places). **Background is now an
  explicit `bg` field per `faqStats` entry** (currently `bg-gray-50`,
  `bg-white`, `bg-gray-50`, `bg-white` — 100+ gray, 12+ white, 256 gray,
  24×7 white, per a follow-up "100+ gray, 12+ white" swap of the first
  two; was `bg-white`, `bg-gray-50` for those two originally), not an
  `i % 2` alternating formula — the pattern isn't a strict alternation
  (100+ and 256 both landed on gray), which a formula couldn't express,
  so the template just reads `{stat.bg}` directly. **If stats are ever
  reordered again, remember to move each one's `bg` value along with
  it** — color is tied to the specific stat now, not to its position in
  the grid. Divided by `border-r` on `lg:` and stacked 2-per-row with
  `border-b` below `lg:`.
- **Numbers count up from 0 to their target once the strip scrolls into
  view** ("rolling animation" request) — `faqStats` entries now store
  `target`/`suffix` separately (`{ target: 100, suffix: '+', ... }`)
  instead of one `value: '100+'` string, so only the numeric part
  animates while `+`/`×7` stay static. Triggered via an
  `IntersectionObserver` bound to the strip (`faqStatsEl`), same
  scroll-into-view trigger pattern as the About section's typewriter, and
  gated by an `animated` flag so it only plays once per page load — not
  every time the strip scrolls in and out of view. `IntersectionObserver`
  `threshold` is `0.2` (was `0.4`) so it triggers as soon as the strip is
  barely in view rather than waiting for 40% visibility, avoiding a
  "already mostly scrolled past before it starts" feel. Uses
  `requestAnimationFrame` + `performance.now()` for the count,
  **`duration: 2000`** (was `1200`), not `setInterval`, for a smoother
  ramp. **Eased (`1 - (1-progress)^4`, was power 3), not linear** — per
  "fast to slow rolling effect" then a follow-up "make it smooth"
  request, the count starts fast and decelerates into the final number;
  the higher power + longer duration draws out the slow tail so the
  finish reads as smooth rather than an abrupt stop. `tabular-nums` added
  to the stat number so digit width doesn't jitter the layout as it
  counts up.

### Final CTA (built from a reference screenshot, real bg/coin assets)

- `relative overflow-hidden bg-black py-[200px] text-center text-white`.
  **`bg.png` is the section's entire blue-glow-to-black backdrop**, laid
  down as an `absolute inset-0` layer behind the content (`bg-cover
  bg-top`) — same "let the asset carry its own styling, don't hand-build
  a CSS gradient" approach used for Growth/Developers' mockup images.
  `coin.png` (the gold $ coin) sits above the heading in a `h-24 w-24
  [perspective:600px]` wrapper. `bg-black` is the section's own base
  color, visible only if the bg image is narrower than the viewport or
  slow to load — the image itself should otherwise cover it completely.
  **Coin continuously spins around its vertical axis** (`.coin-spin`,
  `animation: coin-spin 3s linear infinite`, `rotateY(0deg)` →
  `rotateY(360deg)`) per an explicit "horizontal rotation" request —
  interpreted as spinning face-to-face like a coin flip (`rotateY`), not
  tumbling top-over-bottom (`rotateX`), since that's what "horizontal"
  reads as for a coin. The `[perspective:600px]` wrapper is required for
  the Y-rotation to render as a 3D spin instead of just squashing flat.
- Heading "The Future of<br />Payments Starts Here." forced 2-line via
  `<br />`, `max-w-4xl` — fine as-is, no re-wrap issue.
- **Subheading now uses `text-balance` (CSS `text-wrap: balance`) instead
  of hand-placed `<br />`**, `max-w-4xl`, plain unbroken text: `"Every
  growing business deserves payment infrastructure that's reliable,
  scalable, and built for the future. Focus on your business while
  ElixirPay keeps money moving."` — this paragraph went through the
  forced-`<br />` bug **twice**: a 2-break version re-wrapped into 5
  lines, then a rebalanced 3-break "proper 4 lines" fix still wasn't
  accepted per "change the content to 3 lines". Rather than hand-guess a
  *third* set of break points (the same char-counting approach that
  already failed twice on this exact paragraph, and the same recurring
  bug hit on the Build Around and Testimonial subheadings too), switched
  to letting the browser pick break points itself: `text-balance`
  distributes text across however many lines the container naturally
  wraps to, weighted to minimize raggedness, so it structurally can't
  produce a lone short/orphan line the way a mis-sized manual `<br />`
  can. `max-w` then went through its own two-step tuning to land on 3
  lines: `3xl → 5xl` (too wide — a follow-up screenshot showed it had
  wrapped to only 2 lines) `→ 4xl` (one step narrower). **This `max-w`
  value is still an estimate**, not guaranteed; if the live line count is
  ever off again, keep adjusting this one `max-w` step at a time (wider →
  fewer lines, narrower → more) rather than reintroducing manual `<br />`
  breaks. If a future paragraph anywhere on this page hits the same
  forced-break-count problem, prefer `text-balance` + a `max-w` nudge
  over hand-counting characters again.
  "Get Started" button is `bg-white` / `font-mono` `text-gray-900`,
  matching the site's buttons-are-mono convention.
- **The old stub used the shared `Button` component** (`<Button
  color="blue" variant="solid">`) — this was the only place in
  `+page.svelte` still using it, so the import was removed along with
  the stub markup. `Button.svelte` itself is untouched and still used by
  `Nav.svelte`.

## Footer (`src/lib/components/Footer.svelte`, rebuilt from a reference screenshot)

- **This is a global component** (rendered once from `+layout.svelte`,
  not part of `+page.svelte`), so unlike the ten landing-page sections
  above, this footer appears on every route (About/Services/Careers/
  Contact/Blog too), not just the homepage.
- `bg-[#171717] py-20 text-white` (was `bg-black`, changed per explicit
  hex request — matches the Developers section's exact background
  color), outer wrapper is `mx-4 lg:mx-[120px]`
  (was unconditional `mx-[120px]` — same mobile squeeze bug already
  fixed the same way for Developers/Growth/Build Around/FAQ, `mx-4` =
  16px per explicit request) — **not** `container-page`'s responsive
  `clamp()` padding, matching the fixed-inset convention used by
  Solutions/Services/Growth/Build Around/FAQ at `lg:` and up. Layout is
  `lg:grid-cols-[320px_1fr] lg:gap-32` (gap bumped from the base `gap-16`
  specifically at `lg:`, per an explicit "more space to left to right"
  request for breathing room between the left sidebar and the link
  columns — below `lg:` it stays `gap-16` since the columns stack
  vertically there and don't need the same horizontal breathing room):
  left
  is the logo + blurb + "Get Started" pill button (`border border-white/20`,
  `font-mono`, matching the buttons-are-mono convention) + a row of 4
  social icons; right is **two separately stacked 4-column grids**
  (`footerColumnsRow1` = Products/Solutions/Industries/Legal,
  `footerColumnsRow2` = Company/Resources/Developers/Language), not one
  8-column grid. This matters: Products has 12 links, by far the tallest
  column in row 1 — a single grid would let that height push row 2's
  columns down to staggered starting points under their own shorter
  neighbors. Two grids keep row 2 level regardless of row 1's tallest
  column. **Gap between the two stacked grids is `mt-12`** (`mt-16` →
  `mt-8` → `mt-4` → `mt-12`, the last step reversing course after `mt-4`
  read as too cramped against Products' 12-link column) — this gap
  always reads differently against Products (row 1's tallest column,
  right next to where "Company" starts) than against the shorter
  Solutions/Industries/Legal columns, so judge future changes against
  Products specifically, not the whole row.
- **Logo is a new asset** (`logo.png`, the colorful diamond/arrow mark +
  "Elixir Pay" wordmark) — a different file from the header's
  `elixirpaylogo.svg` used in `Hero.svelte`/`Nav.svelte`; don't conflate
  the two or assume swapping one updates the other. Sized `h-16` (`h-10`
  → `h-14` → `h-16` across two follow-up requests). Social icons sized
  `h-8 w-8` (`h-5 w-5` → `h-7 w-7` → `h-8 w-8`, same two requests).
- **Social icon order is X → LinkedIn → Facebook → Instagram**, matching
  the reference screenshot's left-to-right visual order — this is NOT
  the order the user's asset URLs were listed in (which had Instagram
  before Facebook). Same "verify the actual asset/order, don't trust
  list position" lesson as the Testimonial section's avatar mapping bug.
  All 4 link to placeholder `https://twitter.com` etc. URLs (no real
  ElixirPay social handles were provided).
- **`realRoutes` maps only 4 labels to real app routes** (About, Careers,
  Contact, Blog) — every other footer link (~35 of them: Payment Gateway,
  Healthcare, PCI DSS, Sandbox, etc.) resolves to `href="#"` via the
  `href(label)` fallback, since those pages don't exist in the app yet.
  Don't wire up real hrefs for those without corresponding routes existing
  first.
- **Language dropdown is a static, non-functional button** ("English" +
  globe/chevron SVG icons, `bg-white/10` pill) — no locale-switching logic
  exists; it's a visual match for the reference only.
- Bottom compliance line + 5 certificate badge images (`certificate
  1.png`...`certificate 5.png`, i.e. ISO/PCI DSS/IAF/SOC2/PCI DSS badges
  per the reference) sit above a final copyright row with Privacy Policy /
  Terms & Conditions links. Both rows are separated by `border-t
  border-white/10`.

## Known gaps / TODOs

- **All ten landing-page sections (Hero through Final CTA) plus the
  global Footer are now built out** — see their respective sections
  above — all got a real design/asset pass from screenshots the user
  pasted, rather than Figma access.
- About/Services/Careers/Contact/Blog routes are minimal stubs. Contact has
  a basic form with no submission wiring.
- `orange`/`teal`/`violet` color hex values need verification against
  Figma (see Design tokens above).
- No `npm install` has been run by Claude in this environment (no network
  access in the sandbox) — the user runs it locally.
- One real bug was already found and fixed by the user's local run:
  `vite.config.js` originally imported `sveltekit` from
  `@sveltejs/vite-plugin-svelte` (wrong — that package only exports the
  raw Svelte plugin). Correct import is `import { sveltekit } from
  '@sveltejs/kit/vite'`. Already fixed in the current codebase, noting it
  here in case of regressions during dependency upgrades.
- **`svelte-check` is fully clean (0 errors) as of this note.** For most
  of this project's history, 11 implicit-`any` type errors were treated as
  an accepted baseline (untyped plain `<script>` blocks in `Footer.svelte`
  and `+page.svelte`, `checkJs: true` in `tsconfig.json` flagging
  untyped timers/element refs/function params) — every "still same 11
  pre-existing errors, nothing new" check throughout this file's history
  refers to that baseline. All 11 were resolved via JSDoc annotations
  (`/** @param {number} i */`, `/** @type {ReturnType<typeof setTimeout>} */`,
  `/** @type {HTMLDivElement | undefined} */`, `/** @type {Record<string,
  string>} */` on `Footer.svelte`'s `realRoutes`) — no file was converted
  to `lang="ts"`, both stayed plain `<script>` per their existing
  convention. **If `svelte-check` reports errors again going forward,
  they're new regressions, not this old baseline** — the baseline no
  longer exists.

## Working conventions established in this project

- Prefer editing existing components over inlining one-off styles in
  routes — `Button.svelte` in particular should be the only place button
  styling lives.
- When changing spacing/sizing, prefer exact pixel arbitrary values
  (`mt-[120px]`) when the user gives an exact number, Tailwind's spacing
  scale otherwise.
- Confirm before adding decorative elements (shadows, borders, rounding)
  onto image assets — several of these attempts have visually broken
  things because the source PNGs already have their own baked-in styling.
