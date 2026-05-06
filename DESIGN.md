---
name: KyleHub
description: Operator umbrella and central legal hub. Clean, technical, unperfect.
colors:
  bloom: "oklch(0.738 0.131 170)"
  bloom-deep: "oklch(0.66 0.135 170)"
  bark: "oklch(0.62 0.07 70)"
  bark-soft: "oklch(0.55 0.065 70)"
  stone: "oklch(0.15 0.010 170)"
  stone-raised: "oklch(0.20 0.011 170)"
  stone-deep: "oklch(0.12 0.009 170)"
  lichen: "oklch(0.93 0.006 170)"
  lichen-muted: "oklch(0.74 0.008 170)"
  lichen-faint: "oklch(0.55 0.008 170)"
  hairline: "oklch(0.28 0.009 170)"
  hairline-strong: "oklch(0.36 0.010 170)"
typography:
  display:
    fontFamily: "\"Fraunces Variable\", Georgia, \"Iowan Old Style\", serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4.25rem)"
    fontWeight: 380
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 144, \"SOFT\" 40, \"WONK\" 0"
  headline:
    fontFamily: "\"Fraunces Variable\", Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.005em"
    fontVariation: "\"opsz\" 24, \"SOFT\" 30, \"WONK\" 0"
  title:
    fontFamily: "\"Atkinson Hyperlegible\", system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "\"Atkinson Hyperlegible\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: "\"JetBrains Mono Variable\", ui-monospace, \"SF Mono\", Menlo, monospace"
    fontSize: "0.92em"
    fontWeight: 450
    lineHeight: 1.45
  label:
    fontFamily: "\"JetBrains Mono Variable\", ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  none: "0"
  hair: "1px"
  xs: "2px"
spacing:
  measure-body: "68ch"
  column-narrow: "720px"
  column-max: "920px"
  hero-max: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.bloom}"
    textColor: "{colors.stone}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.9rem"
  link-nav:
    backgroundColor: "transparent"
    textColor: "{colors.lichen-muted}"
    typography: "{typography.label}"
    padding: "0.45rem 0.7rem"
  link-nav-active:
    textColor: "{colors.lichen}"
  lang-tag:
    backgroundColor: "transparent"
    textColor: "{colors.lichen-muted}"
    typography: "{typography.label}"
    padding: "0.35rem 0.55rem"
  lang-tag-active:
    backgroundColor: "{colors.bark}"
    textColor: "{colors.stone}"
  tile:
    backgroundColor: "{colors.stone-raised}"
    textColor: "{colors.lichen}"
    rounded: "{rounded.none}"
  chip-mono:
    backgroundColor: "transparent"
    textColor: "{colors.lichen-muted}"
    typography: "{typography.label}"
    padding: "0.05rem 0.5rem"
  legal-sheet:
    backgroundColor: "{colors.stone-raised}"
    textColor: "{colors.lichen}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 4vw, 2.5rem)"
---

# Design System: KyleHub

## 1. Overview

**Creative North Star: "Mossy Granite"**

A dark stone surface in low light: cool, slightly damp, warmed where wood meets it, with moss colonising a crack. The canvas is a deep, warm-cool stone, almost grey but never neutral. Type is set in faces chosen for human legibility before machine elegance. One mint-green carries identity (the moss, the brand); one wood-tone carries warmth. Everything else is restraint.

The site exists to introduce one operator and host the legal pages every service in the family links to. It is read late at night, on a phone, in a dim room. It is not promotional. It does not announce itself. It rewards a careful look with small wonky details (the wordmark "Hub" block sitting 1px low until you hover and it settles, the project pile tiles rotated by fractions of a degree, a mono "last updated" stamp with a real date) and otherwise stays out of the way. The "unperfect" is not decoration; it is the point. A site that looked machined would lie about who runs it.

**Key Characteristics:**

- Dark, warm-cool stone canvas. Never `#000`, never `#fff`. Every neutral tinted toward the bloom hue (chroma 0.006–0.012).
- One Bloom Mint (`oklch(0.738 0.131 170)`) as the identity color, sampled directly from the KyleHub shield logo. Used on 15–25% of any surface as flat fill, hairline border, focus ring, in-text emphasis (`<em>` inside hero titles), and active-link underline. Never as gradient or glow.
- One Bark wood-tone (`oklch(0.62 0.07 70)`) reserved for structural marks: mono labels, eyebrow rules, leading numerals, secondary stats, the language switcher's active tag, the legal-page badge.
- Three faces, three jobs: Atkinson Hyperlegible (body), Fraunces (display + numbered moments, with `opsz` / `SOFT` / `WONK` variation axes pushed at hero scale), JetBrains Mono (metadata + labels, with `ss01` enabled).
- Hairline divisions (1px, `var(--hairline)`), no shadows, no glassmorphism. Depth through hue and weight, not light.
- State changes only. Easing is `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) at 200–280ms. No entrance animation, no scroll choreography, no hover lift, no parallax. `prefers-reduced-motion` cuts everything to 0ms.
- One column, narrow, centered. Body capped at 68ch (`--measure-body`). Hero at 1180px (`--hero-max`), narrow legal column at 720px. Generous, varied spacing through `clamp()`.
- Mono is the structural voice; serif is the expressive voice; sans is the default reader. The three never trade jobs.

**Explicitly rejected** (carried verbatim from PRODUCT.md):

- Gradient hero, three-card feature grid, "Trusted by" logo strip, soft purple-to-blue gradient buttons.
- Terminal-on-black, fake `$ whoami` prompt, ASCII art header. Technical is not terminal cosplay.
- Navy-and-gold, stock-photo handshakes, centered serif over a dark hero photo.
- Magazine-grade scroll choreography, cursor-following gradients, full-bleed video heroes.
- Off-white + black Inter + one underlined link as a stand-in for "minimal." Minimalism here is committed; absence is not a substitute for it.

## 2. Colors: The Mossy Granite Palette

A dark, warm-cool palette of three named roles. Stone is the room. Bloom is the identity. Bark is the warmth. Everything else is a tint of stone.

### Primary

- **Bloom Mint** (`oklch(0.738 0.131 170)`, `--bloom`): identity color, sampled from the KyleHub shield logo. Used on the wordmark "Hub" block (border at rest, fill on hover), focus rings, the active nav-link underline, in-text emphasis (`<em>` inside hero titles set in italic Fraunces with `WONK` 1), text selection, hover states on interactive accents (project tile borders, repo-row name, handoff arrow).
- **Bloom Deep** (`oklch(0.66 0.135 170)`, `--bloom-deep`): pressed / depressed state of Bloom. Defined but used sparingly; reserve for primary-button active state when one ships.

### Secondary

- **Bark** (`oklch(0.62 0.07 70)`, `--bark`): structural warmth. Used on the eyebrow rule, mono leading numerals on legal sections, repo-row chip icons, language-tag active fill, legal-sheet badge border + text, footer column headings, the project-row "open" mono label, and the tile-arrow at rest. Bark never carries identity; it carries craft.
- **Bark Soft** (`oklch(0.55 0.065 70)`, `--bark-soft`): defined for future hover treatments on Bark elements. Not currently in use.

### Neutral

- **Stone** (`oklch(0.15 0.010 170)`, `--stone`): page background. Almost charcoal but never `#0a0a0a`; the tiny mint chroma is what makes it feel like the room around the moss rather than a generic dark theme.
- **Stone Raised** (`oklch(0.20 0.011 170)`, `--stone-raised`): surfaces that need to register as separate without becoming "cards." Tile bodies, legal sheets, the projects-page section block, inline `<code>` background.
- **Stone Deep** (`oklch(0.12 0.009 170)`, `--stone-deep`): footer band. Slightly recessed from canvas to mark the end of the document without a divider line.
- **Lichen** (`oklch(0.93 0.006 170)`, `--lichen`): body text. Never `#fff`, never pure bone. The faint mint chroma keeps it from feeling clinical.
- **Lichen Muted** (`oklch(0.74 0.008 170)`, `--lichen-muted`): secondary copy, captions, mono metadata at rest, footer body.
- **Lichen Faint** (`oklch(0.55 0.008 170)`, `--lichen-faint`): tertiary copy, "last updated" stamps, placeholder rows in the footer, the hero stamp dots.
- **Hairline** (`oklch(0.28 0.009 170)`, `--hairline`): all 1px borders and dividers. Always 1px, never 2 or 3.
- **Hairline Strong** (`oklch(0.36 0.010 170)`, `--hairline-strong`): the rare divider that needs to register one notch firmer (the dot separators in the hero stamp, footer placeholder icons).

### Named Rules

**The Bloom Rule.** Bloom Mint is used on at most 25% of any single screen and at least one prominent place per page. Beneath that minimum it disappears and the site reads as a generic dark template. Above that maximum it starts to look like a marketing site or a healthcare dashboard. The 15–25% band is the system's identity range and is not negotiable.

**The No Pure Black, No Pure White Rule.** `#000` and `#fff` are forbidden. Every neutral is tinted toward Bloom (chroma 0.006–0.012). Stone is warm-cool, not charcoal. Lichen is bone, not paper.

**The One Warmth Rule.** Bark is the only warm color in the system. It is used on small structural moments. It must never carry identity, never appear at body-text scale, and never share a surface with Bloom in equal weight.

**The Two Color Maximum Rule.** Bloom and Bark are the only chromatic colors that participate in the system's voice. There is no third accent, no semantic state palette (no success-green, error-red, warning-yellow). State is communicated through Bloom, Bark, and copy.

**The Language-Dot Exception.** One scoped exception to Two Color Maximum: the `repo-row__lang-dot` indicator on the projects page uses GitHub-style language hues (TS yellow, Rust orange, Go cyan, Python blue, etc.) sized at `0.55em`. This is data identity, not chrome, the dot is the language, not a decoration. Restrictions: only inside repo rows, only as a circle ≤0.6em, never adjacent to body copy at full chroma, and the default fallback is Bloom (so an unknown language reads as system-native, not as a third accent). No other surface introduces a third hue.

**The Mint-Is-Not-Healthcare Rule.** A saturated mint on a dark canvas is one keystroke away from looking like a hospital app or a meditation startup. Never pair Bloom with rounded sans at small sizes (the "wellness app" combo), never gradient to a second teal or cyan (the "telemedicine" combo), never illustrative blob shapes behind type (the "Calm-knockoff" combo). When Bloom appears, it appears as a flat fill on a hard rectangle, or as a single solid weight on type, never as decoration.

## 3. Typography

**Display Font:** Fraunces Variable (opsz 9–144, wght 100–900, `SOFT` and `WONK` axes), with Georgia, "Iowan Old Style", serif as fallback.
**Body Font:** Atkinson Hyperlegible (400, 700, 400-italic), with system-ui, "Segoe UI", sans-serif as fallback.
**Mono / Label Font:** JetBrains Mono Variable (weights 400–600), with ui-monospace, "SF Mono", Menlo, monospace as fallback.

**Character.** Three faces, three jobs. Atkinson Hyperlegible reads like it was drawn for people, because it was; its open apertures and asymmetric letterforms are the system's accessibility commitment made literally visible. Body sets `font-feature-settings: "ss01" on` so the alternates are always live. Fraunces is the expressive voice: at hero scale it runs `opsz 144, SOFT 40, WONK 0` for crisp display; the italic emphasis inside hero titles flips to `SOFT 100, WONK 1` and recolors to Bloom, that is the closest the site gets to a flourish, and it is exactly one keystroke per page. Mono is the structural voice: section markers, legal numerals, project metadata, the eyebrow rule, the tile captions, the footer build stamp. The system holds at three faces.

### Hierarchy

- **Display** (Fraunces, weight 380, `clamp(2.5rem, 6.5vw, 4.25rem)`, line-height 1.05, `letter-spacing: -0.015em`, `opsz 144 SOFT 40`): hero title only. One per page maximum. The italic `<em>` inside it flips to `SOFT 100 WONK 1` and color Bloom, the system's only on-page flourish.
- **Headline** (Fraunces, weight 500, `clamp(1.5rem, 3vw, 2rem)`, line-height 1.15, `opsz 24 SOFT 30`): section openings, project category titles, projects-hero title (slightly smaller variant at `clamp(2rem, 5.5vw, 3.5rem)` with `opsz 96`). Used sparingly.
- **Title** (Atkinson Hyperlegible, weight 600, 1.125rem, line-height 1.3): subsection headings inside legal sheets, footer shield name (which uses an `opsz 24` Fraunces at weight 500 for its own brand wordmark moment).
- **Body** (Atkinson Hyperlegible, weight 400, 1rem, line-height 1.65, max-width `var(--measure-body)` = 68ch): all paragraph text. Body is never set at less than 1rem. Legal pages obey the same body scale as the home page. The hero lede sits one notch up at 1.0625rem / line-height 1.6 / 56ch.
- **Mono Inline** (JetBrains Mono, weight 450, 0.92em): inline `<code>`, repo-row name (at 1rem weight 600 with `letter-spacing: -0.005em`), tile captions.
- **Mono Metadata** (JetBrains Mono, weight 450–500, 0.74–0.78rem, `letter-spacing: 0.01–0.04em`): hero stamp, repo-row meta stats, footer build stamp, language-tag, footer column headings, project-row "open" label.
- **Eyebrow** (JetBrains Mono, weight 500, 0.78rem, `letter-spacing: 0.12em`, `text-transform: uppercase`, color Bark): the lone uppercase voice in the system. Sits above hero titles and as footer column headings.

### Named Rules

**The Three-Faces-Only Rule.** Fraunces, Atkinson Hyperlegible, JetBrains Mono. No fourth face. No icon font masquerading as a body face. Inline SVG via `Icon.astro` is the icon system; icons inherit `currentColor`.

**The No-Sans-Eyebrow Rule.** Eyebrow labels are mono, not sans-uppercase. Uppercase Atkinson at small sizes feels like a presentation slide; uppercase mono at small sizes feels like a margin annotation. The site lives in the second register.

**The Fraunces Restraint Rule.** Fraunces is allowed to be expressive *because* it is rare. One Display per page, one or two Headlines per long page, the footer shield name. Setting body in Fraunces or running a full Fraunces hero with a Fraunces sub-headline turns the site into a magazine, which it is not.

**The Italic-Bloom Rule.** Italic emphasis inside hero titles is the system's signature flourish: the same Fraunces, but `WONK 1` and color Bloom. It is allowed exactly once per hero. Anywhere else, italic stays neutral.

**The 65–72ch Rule.** Body line length is bounded at 68ch (`--measure-body`). Repo-row descriptions cap at 70ch; legal-sheet intros at 70ch; hero lede at 56ch (deliberately tighter). Wide measure breaks the legal pages, which are the surface that has to read fastest at 200% zoom on a phone.

## 4. Elevation

**Flat by default. No shadows.** No `box-shadow` token is defined; no surface in the system uses one. Depth is conveyed through hue (Stone → Stone Raised → Stone Deep), through 1px hairlines, and through scale.

This is doctrine, not omission. Mossy Granite is a dark stone surface in low light; light has no source to cast a shadow from. Adding a drop shadow would import the wrong physics and the wrong era.

State is communicated through color shift (border to Bloom on hover), translation (a 2px diagonal nudge on directional arrows, a 1px Y-translate on the wordmark block snapping to grid on hover), and outline (focus-visible: 2px Bloom outline, 2px offset, 1px corner radius, the system's only non-zero radius).

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. No shadow tokens are defined. If a future surface seems to require lift, it is the wrong surface; rework the layout.

**The No Glassmorphism Rule.** No `backdrop-filter: blur`, no translucent panes, no glass cards. The stone is opaque.

**The Hairline-Only Rule.** Borders are always 1px, color `var(--hairline)`. The strong variant exists for tiny separators (dot pips between hero stamp items) and footer placeholder icons; never as a card border.

## 5. Components

Real components, captured from `src/components/` and `src/styles/global.css`.

### Wordmark (signature)

`Wordmark.astro`. The brand mark is the page header's left anchor. "Kyle" set in Fraunces at `opsz 36, SOFT 30`, weight 600, 1.5rem, color Lichen, immediately followed (zero gap, `margin-left: 0.04em`) by **"Hub" inside a 1px Bloom box**, padding `0.05em 0.18em 0.07em`, transparent background, Bloom text. **The block sits `transform: translateY(1px)` below baseline at rest** (the honest seam) and on hover/focus the box fills Bloom, text becomes Stone, and the block snaps to `translateY(0)`. Transition 220ms cubic-bezier(0.22, 1, 0.36, 1). `prefers-reduced-motion` cuts to 0ms. This is the system's first easter egg and the load-bearing example of "unperfect."

### Site Nav

Mono labels (0.78rem, weight 500, `letter-spacing: 0.04em`), color Lichen Muted at rest, Lichen on hover, Lichen on active. The active state adds a 1px Bloom underline as `::after` inset to the link's text-padding bounds (`left: 0.7rem; right: 0.7rem; bottom: 0.15rem`). On mobile (≤760px), the nav drops to a second header row, gains a top hairline, and bleeds to the viewport edges via negative margin.

### Language Switcher

`LanguageSwitcher.astro`. Two mono tags inside a 1px Hairline rectangle, 0.72rem mono uppercase (`letter-spacing: 0.06em`). Tags share a 1px Hairline divider. The active tag fills Bark and sets text in Stone. **Never a dropdown, never a globe icon, never a popover.** Two languages, two tags, both visible.

### Hero Project Pile (signature)

`HeroProjectPile.astro`. Three tiles arranged on a 2-column grid: the live tile spans both columns at 16:10, two locked tiles sit beneath at 4:3 each. **At ≥960px each tile is rotated by a fraction of a degree** (`-0.6deg`, `+0.8deg`, `-0.4deg`) with subtle Y offsets, an analog "pile of polaroids" that intentionally fights the grid. Below 760px the rotations clear and the tiles stack vertically. Tile body: 1px Hairline border, Stone Raised background, no radius. Media area: a 12px 45° repeating-linear-gradient placeholder over Stone Raised, captioned with a mono `tile__placeholder-text` for locked entries; live tiles render an `<img>` with `object-position: top center`. Caption strip: mono 0.78rem, name + dim description + state (lowercase Bark for "live"/"soon"). Live tiles are anchors; on hover/focus, border becomes Bloom and a `↗` arrow translates `(2px, -2px)` and recolors to Bloom.

### Repo Row (projects page)

`projects.astro`. List items separated by 1px Hairline (no last-child border). Two-row layout: head (mono name in JetBrains Mono 1rem weight 600, optional chips) over description (Atkinson 0.95rem, max 70ch, color Lichen Muted) over meta (mono 0.78rem stats, language dot, stars, updated time). The arrow `↗` is positioned absolute top-right; on hover, name + arrow recolor to Bloom and the arrow translates `(2px, -2px)`. Language dots use the scoped Language-Dot Exception (see Colors).

### Chip (mono)

`repo-row__chip` and similar. 1px Hairline outline, transparent background, 0.7rem mono lowercase, `letter-spacing: 0.04em`, color Lichen Muted. The "quiet" variant drops to Lichen Faint. No fill, no radius. Inline SVG icons inherit `currentColor` and are themed to Bark.

### Legal Sheet

`LegalDocument.astro`. The legal pages get the same design budget as the hero. A single Stone Raised panel, 1px Hairline border, padding `clamp(1.5rem, 4vw, 2.5rem)`, max-width `var(--column-narrow)` (720px). The header carries a mono uppercase **badge with Bark border + Bark text on Stone** (Impressum / Datenschutz / AGB), an `h1` in Fraunces at `opsz 72 SOFT 30` weight 400, and a "last updated" mono stamp in Lichen Muted. Body sections are separated by 1.75rem gaps. Inline `legal-note` callouts use Stone background + Hairline border + Lichen Muted body. German pages set `lang="de"` with `hyphens: auto` so the hero hyphenates correctly.

### Handoff Rule

The home → projects bridge. A grid of `1fr auto 1fr` with a centered mono label flanked by 1px Hairline horizontal rules. The label reads in Lichen Muted, lowercase, `letter-spacing: 0.06em`. On hover, label and arrow shift to Bloom and the arrow translates `+2px Y`.

### Site Footer

`Footer.astro`. Stone Deep band, 1px Hairline top border, 5-column grid (1.4fr + 4×1fr) collapsing through 1180px / 900px / 760px breakpoints. Lead column carries the shield logo + Fraunces shield-name + a 38ch Lichen Muted blurb. Other columns: mono uppercase Bark heading + plain-link list (Lichen Muted → Lichen on hover, with Bark icons that flip to Bloom on row hover). Placeholder rows render with Lichen Faint text and a 1px Hairline outlined "soon" tag, mono 0.65rem. The meta strip below carries copyright + a mono build stamp where the commit hash colors to Bark.

### Eyebrow

Inline mono uppercase 0.78rem, `letter-spacing: 0.12em`, color Bark. Pairs with hero titles and projects-hero titles. Often joined by a `eyebrow__sep` middle dot in Lichen Faint between two phrases.

### Focus Ring

Global. `*:focus-visible { outline: 2px solid var(--bloom); outline-offset: 2px; border-radius: 1px; }`. The 1px corner radius is the only non-zero radius in the system and exists purely so the focus ring's corners read as crisp on subpixel rendering.

### What is not a component

There are no buttons in the live UI yet (no CTA, no form). There are no modals, no toasts, no dropdowns, no tabs, no accordions, no tooltips. When any of these become necessary, design them under `/impeccable shape` rather than reaching for a library default.

## 6. Do's and Don'ts

### Do:

- **Do** use OKLCH for every color value. Stone, Lichen, and Hairline must carry a small (~0.006–0.012) chroma toward Bloom's hue. The CSS custom properties in `src/styles/global.css` are the source of truth.
- **Do** keep Bloom Mint to 15–25% of any single surface. Beneath that, add Bloom; above that, remove.
- **Do** treat Atkinson Hyperlegible as the system's accessibility statement, set at no less than 1rem, with a max line length capped via `var(--measure-body)` (68ch).
- **Do** set every uppercase tracked label in mono. Sans uppercase at small sizes is a presentation deck.
- **Do** run Fraunces with its variation axes pushed (`opsz 144, SOFT 40` at hero, `opsz 24` at section heads). A Fraunces set at default opsz is a Fraunces wasted.
- **Do** keep the system flat. Depth through Stone / Stone Raised / Stone Deep + 1px Hairlines, never shadow.
- **Do** ease transitions with `cubic-bezier(0.22, 1, 0.36, 1)` at 200–280ms. Respect `prefers-reduced-motion` at the rule level: every animated rule has a media-query partner that zeroes its duration.
- **Do** allow one or two small wonky details per surface: the wordmark `translateY(1px)` seam, the project-pile fractional rotations, a "last edited" stamp with a real date, a footer build stamp that shows the actual commit hash. Quiet, never the headline.
- **Do** give legal pages the same care as the hero. They are the surface most likely to be opened on a phone in a hurry.
- **Do** set German and English in the same scale, the same line-height, and the same line-length cap. Both languages get full citizen treatment. German `<h1>` gets `hyphens: auto` so the long compounds don't break the column.

### Don't:

- **Don't** use `#000` or `#fff` anywhere. Every neutral is tinted toward Bloom.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on cards, callouts, list items, or alerts. **Absolute ban.** Rewrite with a full Hairline border, a Stone Raised tint, leading mono numerals, or nothing.
- **Don't** use `background-clip: text` with a gradient. No gradient text. Emphasis through weight, italic-Bloom, or face change.
- **Don't** use glassmorphism. No `backdrop-filter: blur`, no translucent overlays, no glass cards.
- **Don't** build the hero-metric template (big number, small label, supporting stats, gradient accent). Forbidden.
- **Don't** build identical card grids. The hero pile is intentionally three irregular tiles, not a 3-up icon-heading-text feature row. No "What I do" tile set.
- **Don't** use modals. Every legal cross-link, every project detail, every language confirm: inline or page transition, never overlay.
- **Don't** add a fourth typeface. The system holds at three.
- **Don't** introduce a third chromatic color outside the Language-Dot Exception. No semantic green/red/yellow at chrome scale. State is Bloom, Bark, and copy.
- **Don't** use rounded corners. The system is `border-radius: 0` everywhere except the 1px focus-ring corner. No 4px, no 6px, no 8px, no pills.
- **Don't** animate layout properties. State-driven color/border/transform shifts only, no entrance choreography, no scroll-triggered reveals, no hover lift, no parallax.
- **Don't** use em dashes or `--` in copy. Commas, colons, semicolons, periods, parentheses.
- **Don't** look like a generic SaaS marketing landing. Gradient hero, three-card feature grid, "Trusted by" logo strip, soft purple-to-blue gradient buttons: the explicit anti-reference.
- **Don't** look like a "developer portfolio." No terminal-on-black, no fake `$ whoami` prompt, no ASCII art header. Technical is not terminal cosplay.
- **Don't** look like corporate consulting. No navy-and-gold, no stock-photo handshakes, no "We deliver excellence", no centered serif headlines over a dark hero photo.
- **Don't** look like an over-polished studio portfolio. No magazine-grade scroll choreography, no cursor-following gradients, no full-bleed video heroes, no GSAP set pieces on every section.
- **Don't** sand off the seams. The "unperfect" is load-bearing. If a detail looks too clean, leave one element slightly off-grid on purpose. Off-white background + black Inter heading + one underlined link is not a design, it is the absence of one.
