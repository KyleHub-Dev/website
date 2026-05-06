import type { APIRoute } from 'astro';

export const prerender = true;

const body = `KyleHub - Brand & Design Guidelines
====================================

Audience: AI assistants and human collaborators building anything that lives on
or links into the kylehub.dev / porvi.de family. Follow this verbatim for the
default look. If a project deliberately departs, document why.

This is the public, machine-readable mirror. The internal design system lives
in the repository as DESIGN.md.


1. Identity & Voice
-------------------

Name:     KyleHub
Register: brand (umbrella + legal hub for one operator's services)
Persona:  clean, technical, unperfect
North star metaphor: "Mossy Granite" - a dark stone surface in low light, cool
and slightly damp, warmed where wood meets it, with moss colonising a crack.

Tone rules:
- Quiet. The site does not announce itself.
- Honest over polished. Small wonky details (off-grid pixels, a hover aside,
  a real "last edited" date) are load-bearing, not decoration.
- No marketing voice. No "trusted by", no value-prop hero, no SaaS abstraction.
- Em dashes are forbidden in copy. Use commas, colons, semicolons, periods,
  parentheses. Also no "--".

Anti-references (do NOT look like these):
- Apple product pages (machine-perfect pixel optimization, full-bleed product
  photography, every surface art-directed for conversion).
- Stripe homepage (animated gradient hero, "global infrastructure" abstraction,
  polished SaaS marketing voice).
- Developer-portfolio cliché (terminal-on-black, fake "$ whoami" prompt,
  ASCII art header). Technical is not terminal cosplay.
- Healthcare / wellness app (saturated mint + rounded sans + blob shapes).
- Off-white + black Inter + one underlined link as a stand-in for "minimal".


2. Color - The Mossy Granite Palette
------------------------------------

Color space: OKLCH is canonical and the only format used in source. No hex.

Primary (identity):
  Bloom Mint        oklch(0.738 0.131 170)
                    Sampled directly from the KyleHub shield logo.
                    Used: wordmark "Hub" block, focus rings, active nav-link
                    underline, in-text emphasis (italic Fraunces with WONK 1
                    inside hero titles), text selection, hover accents on
                    project tile borders, repo-row name, handoff arrow.
  Bloom Deep        oklch(0.66 0.135 170)
                    Pressed / active variant. Reserve for primary-button
                    active state when one ships.

Secondary (warmth):
  Bark              oklch(0.62 0.07 70)
                    Muted tan-brown, never orange, never gold. Used for the
                    eyebrow rule, repo-row chip icons, language-tag active
                    fill, legal-sheet badge, footer column headings,
                    project-row "open" label, tile arrow at rest. Bark
                    carries craft, never identity.
  Bark Soft         oklch(0.55 0.065 70)
                    Defined for future Bark hover treatments.

Neutrals (all tinted toward Bloom's hue ~170, never pure):
  Stone             oklch(0.15 0.010 170)   page background
  Stone Raised      oklch(0.20 0.011 170)   tile bodies, legal sheets, inline
                                            <code> background
  Stone Deep        oklch(0.12 0.009 170)   footer band
  Lichen            oklch(0.93 0.006 170)   body text
  Lichen Muted      oklch(0.74 0.008 170)   secondary copy, captions, mono
                                            metadata at rest
  Lichen Faint      oklch(0.55 0.008 170)   tertiary copy, "last updated"
                                            stamps, footer placeholders
  Hairline          oklch(0.28 0.009 170)   all 1px borders and dividers
  Hairline Strong   oklch(0.36 0.010 170)   tiny separators (hero stamp dot
                                            pips, footer placeholder icons)

Color rules:
- The Bloom Rule: Bloom is used on 15-25% of any single screen. Below that the
  system goes inert; above that it starts to sell.
- The No Pure Black, No Pure White Rule: #000 and #fff are forbidden. Every
  neutral carries a small (chroma 0.006-0.012) tint toward Bloom's hue.
- The One Warmth Rule: Bark is the only warm color in the system.
- The Two Color Maximum: Bloom and Bark are the only chromatic colors that
  participate in the system's voice. No third accent. No semantic
  green/red/yellow. State is communicated through Bloom, Bark, and copy.
- The Language-Dot Exception: one scoped exception to Two Color Maximum. The
  repo-row language indicator on the projects page uses GitHub-style hues
  (TS yellow, Rust orange, Go cyan, Python blue, etc.) sized at 0.55em.
  This is data identity, not chrome - the dot IS the language. Restrictions:
  only inside repo rows, only as a circle <=0.6em, never adjacent to body
  copy at full chroma, fallback for unknown languages is Bloom. No other
  surface introduces a third hue.
- The Mint-Is-Not-Healthcare Rule: Bloom appears as a flat fill on a hard
  rectangle, or as a single solid weight on type. Never as decoration. Never
  paired with rounded sans at small sizes. Never gradients to teal/cyan.
  Never illustrative blob shapes.


3. Typography - Three Faces, Three Jobs
---------------------------------------

The system holds at three faces. No fourth.

Display / Numbered:
  Fraunces  variable, opsz 9-144, wght 100-900, SOFT and WONK axes
            Fallback: Georgia, "Iowan Old Style", serif
            Usage: hero display, section headlines, footer shield name.
            Allowed to be expressive *because* it is rare. One Display per
            page maximum.

Body:
  Atkinson Hyperlegible
            Fallback: system-ui, "Segoe UI", sans-serif
            Usage: all paragraph text. Drawn for human legibility before
            machine elegance - the system's accessibility statement made
            literally visible. Never set below 1rem. ss01 stylistic set is
            always live.

Mono / Label:
  JetBrains Mono  variable, weights 400-600, NO programming ligatures
            Fallback: ui-monospace, "SF Mono", monospace
            Usage: section markers, tile captions, repo-row names and
            metadata, eyebrow rules, footer build stamp, "last updated"
            stamps. The structural voice.

Hierarchy:
  Display    Fraunces 380, opsz 144 SOFT 40, clamp(2.5rem, 6.5vw, 4.25rem),
             line-height 1.05, letter-spacing -0.015em
  Headline   Fraunces 500, opsz 24 SOFT 30, clamp(1.5rem, 3vw, 2rem),
             line-height 1.15
  Title      Atkinson 600, 1.125rem, line-height 1.3
  Body       Atkinson 400, 1rem, line-height 1.65, max-width 68ch
  Mono       450-500, 0.74-0.92rem, line-height 1.45, letter-spacing 0-0.04em
  Eyebrow    mono 500, 0.78rem, letter-spacing 0.12em, UPPERCASE, color Bark

Type rules:
- The Three-Faces-Only Rule: Fraunces, Atkinson Hyperlegible, JetBrains Mono.
  No fourth face. No icon font masquerading as a body face. Inline SVG icons
  only; icons inherit currentColor.
- The No-Sans-Eyebrow Rule: uppercase tracked labels are mono, never sans.
  Sans uppercase at small sizes feels like a presentation slide.
- The Fraunces Restraint Rule: one Display per page, one or two Headlines per
  long page. Never set body in Fraunces. Never run a Fraunces hero with a
  Fraunces sub-headline.
- The Italic-Bloom Rule: italic emphasis inside hero titles is the system's
  signature flourish. Same Fraunces, but WONK 1 and color Bloom. Allowed
  exactly once per hero. Anywhere else, italic stays neutral.
- The 65-72ch Rule: body line length is bounded at 68ch. Wide measure breaks
  the legal pages, which must read fast at 200% zoom on a phone.


4. Elevation
------------

Flat by default. No shadows. Ever.

Depth comes from hue (Stone vs. Stone Raised vs. Stone Deep), 1px hairlines,
and scale. No box-shadow tokens are defined. No "lifted" hover treatments.
No glassmorphism (no backdrop-filter: blur, no translucent panes, no glass
cards). The stone is opaque.

State is communicated through color shift (border to Bloom on hover), small
translation (a 2px diagonal nudge on directional arrows, a 1px Y-translate
on the wordmark block snapping to grid on hover), and the focus outline.

Elevation rules:
- The Flat-By-Default Rule: surfaces are flat at rest. No shadow tokens are
  defined. If a future surface seems to require lift, it is the wrong
  surface; rework the layout.
- The No Glassmorphism Rule: no backdrop-filter: blur, no translucent
  overlays, no glass cards.
- The Hairline-Only Rule: borders are always 1px, color Hairline. The strong
  variant exists for tiny separators only; never as a card border.

Focus ring: 2px Bloom outline, 2px offset, 1px corner radius. The 1px radius
on the focus ring is the only non-zero radius in the entire system, and
exists purely so its corners read as crisp on subpixel rendering.


5. Motion
---------

Restrained. State changes only.

- Easing: cubic-bezier(0.22, 1, 0.36, 1) (ease-out-quart) at 200-280ms.
- No entrance animation, no scroll choreography, no hover lift, no parallax.
- Don't animate CSS layout properties.
- No bounce, no elastic.
- Respect prefers-reduced-motion at the rule level: every animated rule has
  a media-query partner that zeroes its duration.


6. Layout
---------

- One column, narrow, centered. Generous, varied spacing through clamp().
- Body capped at 68ch (--measure-body). Hero at 1180px (--hero-max). Narrow
  legal column at 720px (--column-narrow).
- No identical card grids. No 3-up icon-heading-text feature row. No "What I
  do" tile set.
- Cards are the lazy answer. Use them only when truly the best affordance.
- Don't wrap everything in a container. Most things don't need one.
- Vary spacing for rhythm. Same padding everywhere is monotony.


7. Absolute Bans
----------------

Match-and-refuse. If you are about to write any of these, rewrite the element
with different structure.

- Side-stripe borders (border-left/right > 1px as a colored stripe on cards,
  callouts, list items, alerts). Replace with full hairline borders, Stone
  Raised tints, leading mono numerals, or nothing.
- Gradient text (background-clip: text + gradient background). Use a single
  solid color. Emphasis through weight, italic-Bloom, or face change.
- Glassmorphism as default. Rare and purposeful, or nothing.
- Rounded corners. The system is border-radius: 0 everywhere except the 1px
  focus-ring corner. No 4px, no 6px, no 8px, no pills.
- The hero-metric template (big number, small label, supporting stats,
  gradient accent). SaaS cliché.
- Identical card grids.
- Modals as a first thought. Inline / page transition is almost always right.
- Em dashes in copy.
- A fourth typeface.
- A third chromatic color outside the Language-Dot Exception.
- #000 or #fff anywhere.


8. Surface Direction
--------------------

Wordmark (signature, the brand mark itself):
  "Kyle" set in Fraunces opsz 36 SOFT 30, weight 600, 1.5rem, color Lichen,
  immediately followed (zero gap) by "Hub" inside a 1px Bloom box,
  transparent background, Bloom text. The block sits translateY(1px) below
  baseline at rest - the honest seam. On hover/focus, the box fills Bloom,
  text becomes Stone, and the block snaps to translateY(0). 220ms ease-out-
  quart. This is the system's signature easter egg and load-bearing example
  of "unperfect."

Buttons:
  Two variants. Primary is a Bloom Mint fill on Stone with Stone text.
  Secondary is a Hairline outline on Stone with Lichen text and a Bark hover.
  Corners are square (border-radius: 0). No drop shadow, no gradient, no
  transform on hover. Focus ring inherits the global rule.

Project rows (projects page):
  No cards. Full-bleed list with hairline dividers. Mono name (JetBrains Mono
  1rem weight 600), Atkinson description (max 70ch, Lichen Muted), mono meta
  row (language dot via Language-Dot Exception, stars, updated time). Arrow
  positioned absolute top-right; on hover, name + arrow recolor to Bloom and
  arrow translates (2px, -2px).

Hero project pile (signature, home page):
  Three tiles on a 2-column grid: live tile spans both columns at 16:10, two
  locked tiles beneath at 4:3 each. At >=960px each tile is rotated by a
  fraction of a degree (-0.6deg, +0.8deg, -0.4deg) with subtle Y offsets - an
  analog "pile of polaroids" intentionally fighting the grid. Below 760px the
  rotations clear and tiles stack vertically. 1px Hairline border, Stone
  Raised body, no radius. Locked tiles render a 12px 45° repeating-linear-
  gradient placeholder; live tiles render an <img>.

Language switcher:
  Two mono tags inside a hairline tray. Active tag fills with Bark and sets
  text in Stone. Header on desktop, inline at the top of mobile. Never a
  dropdown, never a globe icon, never a popover. Two languages, two tags,
  both visible.

Legal sheet:
  Stone Raised panel, 1px Hairline border, max-width 720px. Header carries a
  mono uppercase badge with Bark border + Bark text on Stone (Impressum /
  Datenschutz / AGB), an h1 in Fraunces opsz 72, and a "last updated" mono
  stamp. Body sections separated by 1.75rem gaps. German pages set hyphens:
  auto on h1 so long compounds don't break the column. Legal pages get the
  same design budget as the hero.

Handoff rule (home -> projects bridge):
  Grid 1fr auto 1fr with a centered mono label flanked by 1px Hairline
  horizontal rules. Lowercase, letter-spacing 0.06em. On hover, label and
  arrow shift to Bloom and the arrow translates +2px Y.

Site footer:
  Stone Deep band, 1px Hairline top border, 5-column grid collapsing through
  1180px / 900px / 760px breakpoints. Mono uppercase Bark column headings.
  Plain-link list (Lichen Muted -> Lichen on hover, Bark icons that flip to
  Bloom). Placeholder rows render with Lichen Faint text and a 1px Hairline
  outlined "soon" tag. Meta strip carries copyright + a mono build stamp
  where the commit hash colors to Bark.


9. The Unperfect Rule
---------------------

Allow one or two small wonky details per surface: the wordmark translateY(1px)
seam, the project-pile fractional rotations, a "last edited" stamp with a
real date, a footer build stamp showing the actual commit hash. Quiet, never
the headline.

If a detail looks too clean, leave one element slightly off-grid on purpose.
The "unperfect" is load-bearing. A site that looked machined would be lying
about who runs it.


10. Privacy & Hosting Doctrine
------------------------------

- No remote fonts. All faces are self-hosted via @fontsource packages.
- No analytics, tracking pixels, or third-party embeds unless explicitly
  disclosed in /datenschutz.
- No non-essential cookies.
- Build-time data fetching only. No client-side calls to third-party APIs.

This is not optional styling. It is part of the brand.


---

Source of truth: DESIGN.md in the repository.
Mirror: this file (https://kylehub.dev/branding.txt) is hand-curated and
intentionally terser than DESIGN.md; major palette / typography / named-rule
/ ban / surface-direction changes in DESIGN.md must be reflected here in the
same commit.
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
