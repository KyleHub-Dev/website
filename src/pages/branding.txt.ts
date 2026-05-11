import type { APIRoute } from 'astro';

export const prerender = true;

const body = `KyleHub - Portable Brand Brief
=================================

Audience: AI assistants and human collaborators building surfaces that live
on, link into, or borrow from the kylehub.dev / porvi.de family.

Status: public brand guidance. This file is standalone. Use it when a project
does not have stronger local product, design, or implementation context.


SECTION 1: INSTRUCTIONS FOR USE
-------------------------------

This is a guidance document, not a fixed style sheet. Every named rule is the
default a project should reach for. Concrete tokens, type choices, hairlines,
and surface patterns are the defaults a project can ship with unless the local
brief argues otherwise.

Local context wins when it is specific and intentional. This file wins over
generic taste, library defaults, trend-following, and "make it prettier"
requests that do not name a real product need.

If you depart from a default, document the departure as close to the decision
as the medium allows: source comment, design note, prompt note, issue, or
component README. Use this form:

  departs from branding.txt section <number>: <reason>

A good departure is:
  (a) intentional, with a concrete reason,
  (b) scoped to the surface that needs it,
  (c) removed when the reason no longer holds.

If you find yourself fighting a rule across multiple surfaces, the rule itself
is probably wrong for that project. Bring the rule back for revision rather
than papering over it everywhere.

For code, prefer role tokens over literal color names. Component rules should
reference --accent, --accent-warm, --surface, --text, and --hairline where
possible. Primitive tokens such as --bloom and --bark define the palette; role
tokens define behavior.


SECTION 2: IDENTITY AND VOICE
-----------------------------

Name:     KyleHub
Register: brand, umbrella, legal hub, one-operator infrastructure
Persona:  clean, technical, unperfect

North star: Mossy Granite.

A dark stone surface in low light: cool, slightly damp, warmed where wood
meets it, with moss colonising a crack. The system should feel like a careful
operator's workspace, not a company campaign. It is quiet, precise, and a
little hand-set.

Voice rules:
- Quiet. The surface does not announce itself.
- Honest over polished. A real timestamp, a 1px misalignment, or a small
  hover aside can carry more trust than a perfect marketing block.
- Direct, not sales-led. No "trusted by", no value-prop hero, no SaaS fog.
- One operator, not a fake company. Prefer singular human language when the
  product context allows it.
- German text uses real umlauts. Always write ä, ö, ü and Ä, Ö, Ü directly;
  never replace them with ae, oe, ue, Ae, Oe, or Ue unless quoting a source
  that already does so.
- Avoid em dashes in copy. Use commas, colons, semicolons, periods, or
  parentheses.

Anti-references:
- Generic SaaS landing pages: gradient hero, three-card feature row,
  "trusted by" logo strip, soft purple-blue buttons.
- Developer portfolio reflex: terminal-on-black, fake "$ whoami" prompt,
  ASCII art header, neon monospace everywhere.
- Corporate consulting: navy and gold, stock-photo handshakes, "we deliver
  excellence", centered serif headlines over dark photos.
- Healthcare / wellness app: saturated mint on white, rounded sans, blob
  decoration, teal gradients.
- Generic minimalism: off-white background, black Inter, one underlined link,
  no point of view.


SECTION 3: COLOR
----------------

Color space: OKLCH is the canonical source format when the platform supports
it. Avoid hex for authored brand colors. Never use pure #000 or #fff.

Primitive palette defaults:

  Bloom Mint        oklch(0.738 0.131 170)
                    Identity color, sampled from the KyleHub shield logo.

  Bloom Deep        oklch(0.66 0.135 170)
                    Pressed / active variant of Bloom. Use sparingly.

  Bark              oklch(0.62 0.07 70)
                    Muted tan-brown warmth. Never orange, never gold.

  Bark Soft         oklch(0.55 0.065 70)
                    Softer Bark hover / secondary treatment.

  Stone             oklch(0.15 0.010 170)
                    Dark page background.

  Stone Raised      oklch(0.20 0.011 170)
                    Raised dark surface, tile body, legal sheet, code fill.

  Stone Deep        oklch(0.12 0.009 170)
                    Recessed dark band, usually footer or terminal surface.

  Lichen            oklch(0.93 0.006 170)
                    Primary text on dark.

  Lichen Muted      oklch(0.74 0.008 170)
                    Secondary copy, captions, metadata.

  Lichen Faint      oklch(0.55 0.008 170)
                    Tertiary copy, stamps, disabled or placeholder text.

  Hairline          oklch(0.28 0.009 170)
                    1px borders and dividers.

  Hairline Strong   oklch(0.36 0.010 170)
                    Tiny separators only.

Role tokens:

  --accent       Identity chrome.
  --accent-warm  Warm structural chrome.
  --surface      Main canvas.
  --surface-2    Raised surface.
  --surface-3    Recessed surface.
  --text         Primary text.
  --text-muted   Secondary text.
  --text-faint   Tertiary text.
  --hairline     1px dividers and borders.

The Mode Inversion Rule:

  Bloom and Bark swap roles between dark and light themes.

  Dark mode, the family's identity mode:
    --accent = Bloom
    --accent-warm = Bark

  Light mode:
    --accent = Bark
    --accent-warm = Bloom

  All chrome that participates in identity follows --accent: primary buttons,
  focus rings, active link underlines, italic Fraunces emphasis, the "Hub"
  wordmark box, live pips, and text selection.

  All chrome that carries warmth follows --accent-warm: eyebrow color,
  plan-list bars, footer column headings, the hairline tick before a feature
  label, and ghost-button hover.

  Source code should reference --accent and --accent-warm in component rules.
  Do not hardcode --bloom or --bark in component CSS unless defining the role
  tokens themselves or documenting a deliberate exception.

  Intent: in dark mode the system reads as cool stone with mossy bloom. In
  light mode it reads as warm paper with a mint countergrain. The system
  should never read as "mint on white" healthcare / wellness, and never as
  "earthy tan on dark" that loses the cool-stone identity.

Color rules:
- Bloom / --accent should appear in at least one prominent place per page, but
  usually only 15-25% of a screen. Below that the system goes inert; above
  that it starts to sell.
- Bark / --accent-warm is structural warmth, not the main identity voice.
- Bloom and Bark are the only chromatic brand colors. Do not add a third
  accent for decoration.
- No semantic green / red / yellow chrome by default. Communicate state with
  copy, weight, outline, and the existing role tokens.
- Data-color exception: small data identity marks may use external hues when
  the hue is the data, for example a GitHub language dot. Keep it tiny, scoped,
  and never adjacent to body copy at full chroma. Unknown data falls back to
  --accent.
- Bloom is not decoration. Never use it as a glow, blob, gradient stop, or
  wellness-style mint wash.


SECTION 4: TYPOGRAPHY
---------------------

Default type roles:

  Display / Serif:
    Fraunces Variable. Expressive, rare, used for hero titles, section
    headlines, wordmark moments, and numbered display details.

  Body / Sans:
    Atkinson Hyperlegible. Human-readable before machine-sleek. Used for
    paragraphs, legal text, interface copy, and anything that must be read
    quickly. Do not set body below 1rem.

  Mono / Structure:
    JetBrains Mono Variable. Used for section markers, eyebrow labels, build
    stamps, metadata, language tags, small counters, repo names, and labels.

If a project cannot use these exact faces, preserve the roles: one expressive
serif for rare display, one highly readable sans for body, one mono for
structure. Do not add a fourth brand type role.

Hierarchy defaults:
  Display    Fraunces 380, opsz 144 SOFT 40, line-height 1.05
  Headline   Fraunces 500, opsz 24 SOFT 30, line-height 1.15
  Title      Atkinson 600, 1.125rem, line-height 1.3
  Body       Atkinson 400, 1rem, line-height 1.65, max-width 65-72ch
  Mono       JetBrains Mono 450-500, 0.74-0.92rem, line-height 1.45
  Eyebrow    JetBrains Mono 500, 0.78rem, uppercase, tracked 0.18em

Numbered Eyebrow Rule:

  Section labels and step labels use:

    <num>/<text>

  The number is a zero-padded two-digit numeral. The separator is a literal
  slash. The topic is mono uppercase with letter-spacing around 0.18em. Color
  is current --accent-warm.

  No leading horizontal bar. No em dash. No Roman numerals such as I, II, IV.
  No lowercase Roman counters such as i, ii, iii. Roman numerals were a
  one-page experiment; 01/Topic is the canonical form across the family.

  Numbers count from 01 within a single page, never globally. Step lists
  inside a section restart at 01.

Italic Accent Rule:

  Italic emphasis inside hero titles is the signature flourish. It stays in
  the serif, uses WONK 1 when Fraunces is available, and appears exactly once
  per hero. Its color is --accent, not literal Bloom. In dark mode it is mint;
  in light mode it is bark. Anywhere else, italic stays neutral.

Type rules:
- One Display per page. One or two Headlines per long page. Let rarity create
  expression.
- Uppercase tracked labels are mono, never sans.
- Body line length lives around 65-72ch. Legal or dense reading surfaces should
  be especially strict.

Icon requirement:
  Iconify is the required icon aggregator. Lucide is the root set for generic
  UI icons: arrows, mail, lock, globe, status, navigation, and controls.
  Brand and social marks such as GitHub, Discord, Mastodon, Matrix, and
  Codeberg also come through Iconify, usually from the matching brand set such
  as Simple Icons. Do not paste custom SVG paths or hand-draw basic icons.
  Icons inherit currentColor. Do not use an icon font as a fourth typeface.

  Use the same Iconify names across frameworks:
    Astro:  astro-icon + @iconify-json/lucide + @iconify-json/simple-icons,
            <Icon name="lucide:mail" />
    React:  @iconify/react,  <Icon icon="lucide:mail" />
    Vue:    @iconify/vue,    <Icon icon="lucide:mail" />
    Svelte: @iconify/svelte, <Icon icon="lucide:mail" />

  In Astro, whitelist the exact used icons in astro.config.* via
  astro-icon's include option. Do not bundle entire icon sets when the used
  icon list is known.


SECTION 5: SHAPE, ELEVATION, MOTION, LAYOUT
-------------------------------------------

Shape:
- Square by default. Border-radius is 0.
- The only default radius is a 1px focus-ring corner so outlines render crisply.
- No pills, no 6px cards, no rounded SaaS panels unless a local product brief
  documents why.

Elevation:
- Flat by default. No shadows.
- Depth comes from surface hue, scale, and 1px hairlines.
- No glassmorphism. No backdrop blur. No translucent panes pretending to be
  depth.

Motion:
- State changes only. Color, border, opacity, and small transforms are enough.
- Easing: cubic-bezier(0.22, 1, 0.36, 1), around 200-280ms.
- No entrance choreography, scroll reveals, bounce, elastic, hover lift, or
  parallax by default.
- Respect prefers-reduced-motion. Every motion rule needs a reduced-motion
  partner.

Layout:
- Narrow, centered, readable. Body copy usually caps at 65-72ch.
- Use varied spacing through clamp() or equivalent responsive constraints.
- Do not wrap everything in a generic container. Use structure only where it
  helps scanning.
- Avoid identical 3-up feature card grids. Cards are not the default answer.


SECTION 6: PORTABLE SURFACE PATTERNS
------------------------------------

Wordmark:
  "Kyle" in the display serif followed by "Hub" in a 1px --accent box. The
  block may sit 1px low at rest and settle on hover. This small honest seam is
  a signature example of "unperfect." Default cadence is 220ms ease-out-quart
  with translateY(1px) at rest snapping to translateY(0) on hover.

Buttons:
  Primary actions use --accent. Secondary or ghost actions use hairline borders
  and warm hover details via --accent-warm. Corners are square. No shadows, no
  gradients, no hover lift.

Focus:
  2px solid --accent outline, 2px offset, 1px radius. Never remove focus
  visibility.

Language switcher:
  Two mono tags inside a 1px hairline tray. Active tag fills with
  --accent-warm and sets text in the current surface color. Never a dropdown,
  never a globe icon, never a popover. Two languages, two tags, both visible.
  Always present, even in single-language drafts. The inactive tag can point
  to a stub, 404, or root redirect rather than being hidden. The presence of
  two tags is part of the brand voice: an operator who runs things in two
  languages.

Theme switcher:
  When a theme switcher exists, use a single 30x30 square button matching the
  language tray's height and hairline. One mono glyph at the center. Rest
  color is Lichen Muted; hover color is Lichen. Rest border is Hairline; hover
  border is Lichen Muted. On desktop it sits immediately to the right of the
  language tray and immediately to the left of the primary CTA if a CTA exists.

  Glyphs:
    Light active, next dark:  ◐
    Dark active, next light:  ☼

  Persist the choice in localStorage under <project>-theme. Respect
  prefers-color-scheme as the unselected default. Never use a sliding macOS
  toggle, animated sun/moon morph, or gradient background. The theme switcher
  is the only chrome that should mutate CSS custom properties at runtime; the
  rest of the surface stays declarative.

Legal / policy surfaces:
  Treat legal pages as first-class. Use the same typography, spacing, and
  brand care as the hero. They should read quickly on a phone, support 200%
  zoom, and avoid horizontal scroll.

Project or repo lists:
  Prefer lists with hairline dividers over cards. Use mono names, readable
  descriptions, sparse metadata, and a small directional arrow that shifts on
  hover.

Footer:
  Use a recessed surface, 1px top hairline, mono uppercase column headings in
  --accent-warm, muted links that brighten on hover, and a real build or
  updated stamp when available.


SECTION 7: STRONG BANS
----------------------

If you are about to use one of these, rewrite the element with different
structure.

- Gradient text.
- Decorative blobs, orbs, bokeh, glow fields, or teal/mint gradients.
- Side-stripe borders thicker than 1px on cards, callouts, alerts, or list
  items.
- Glassmorphism as a default surface.
- Rounded cards, pills, or soft SaaS panels.
- Hero metric blocks: big number, small label, supporting stats, accent
  gradient.
- Identical 3-up icon-heading-text feature grids.
- Terminal cosplay: fake prompts, ASCII art headers, neon-on-black developer
  portfolio styling.
- Em dashes in copy.
- Custom SVG paths or hand-drawn replacements for basic UI, brand, or social
  icons. Use Iconify, with Lucide as the generic UI root set.
- A fourth typeface.
- A third chromatic brand accent outside a scoped data-color exception.
- Pure #000 or #fff in authored brand surfaces.
- Removing visible keyboard focus.


SECTION 8: THE UNPERFECT RULE
-----------------------------

Allow one or two small wonky details per surface: a wordmark block 1px low
until hover, fractional tile rotations, a real last-edited stamp, a visible
build hash, a slightly hand-set alignment.

The detail must be quiet. It should reward a closer look without becoming the
headline. A surface that looks machined loses the one-operator truth of the
brand.


SECTION 9: PRIVACY AND HOSTING DEFAULTS
---------------------------------------

For public web surfaces in the family:
- Prefer self-hosted fonts.
- No analytics, tracking pixels, or third-party embeds unless disclosed.
- No non-essential cookies.
- Prefer build-time data fetching over client-side third-party calls.
- Static and boring infrastructure is a virtue when it serves the product.


SECTION 10: QUICK AGENT CHECKLIST
---------------------------------

Before producing a design or implementation from this file:

1. Identify the local project purpose and audience. If none is provided, use
   the KyleHub default: quiet one-operator technical surface.
2. Map colors to role tokens first, then primitives.
3. Choose typography by role: serif expression, readable sans body, mono
   structure.
4. Use numbered mono eyebrows in the 01/Topic pattern.
5. Keep surfaces flat, square, hairlined, and sparse.
6. Add one small unperfect detail only if it serves the surface.
7. In German text, use real umlauts: ä, ö, ü, Ä, Ö, Ü.
8. Document any departure close to the decision.
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
