# KyleHub Design Notes

This document describes the current website implementation. It is not a
separate source of truth that overrides the code. When the site changes, update
this file after the implementation has settled.

## Direction

KyleHub is Leander Grau's public umbrella surface for small projects,
experiments, services, and legal pages. It should feel like a quiet operator
surface, not a SaaS landing page, agency pitch, or generic AI portfolio.

The homepage is intentionally compact:

1. sticky transparent header
2. short text intro with a small technical SVG mark
3. categorized project rows
4. legal/contact/code footer

Copy should be concrete, human, and edited down. It may mention that custom
projects happen in free time when an idea is interesting, but it should not read
like freelance marketing or a productized offer.

## Layout

- One main page for identity and project overview.
- No standalone `/projects` or `/en/projects` route.
- The first screen is a compact intro, not a campaign hero.
- The project list lives directly on the homepage under `#projects`.
- Projects are grouped by topic and rendered as flat repo rows with hairline
  dividers.
- Legal pages keep their separate document-style layout.

Anchor navigation uses `scroll-margin-top` so `#projects` lands below the
sticky header.

## Header

The header is sticky, full-width, and quiet:

- `position: sticky; top: 0`
- translucent dark background with backdrop blur
- full-width bottom hairline
- visible active nav underline
- language switcher stays available while scrolling

The header should remain compact. Avoid scroll-state JavaScript, large floating
pills, shrinking animations, or glass panels that become the visual focus.

## Color

Primitive tokens live in `src/styles/global.css`.

- `--stone`, `--stone-raised`, and `--stone-deep` are dark neutral gray
  surfaces with only a tiny cool tint.
- `--lichen`, `--lichen-muted`, and `--lichen-faint` are neutral text roles.
- `--hairline` and `--hairline-strong` are dividers.
- `--bloom` is identity chrome only: wordmark, focus/selection, active nav,
  the small SVG accent, and tiny status details.
- `--bark` is quiet metadata warmth: icons, footer headings, repo arrows, tiny
  marks.

Current neutral primitives:

```css
--stone: oklch(0.145 0.004 245);
--stone-raised: oklch(0.205 0.005 245);
--stone-deep: oklch(0.115 0.004 245);
--lichen: oklch(0.92 0.004 245);
--lichen-muted: oklch(0.73 0.005 245);
--lichen-faint: oklch(0.54 0.005 245);
--hairline: oklch(0.28 0.005 245);
--hairline-strong: oklch(0.36 0.006 245);
```

Mint must not carry large text, broad emphasis, decorative gradients, glows, or
hero accents. If a screen starts to feel green, reduce Bloom first and check the
neutral surface hue.

## Typography

The implementation keeps three local font families:

- Atkinson Hyperlegible: primary reading face and compact intro copy.
- JetBrains Mono: navigation, labels, project names, metadata, build stamps.
- Fraunces: wordmark and restrained section/category headings.

Avoid oversized multi-line display copy. The site should feel edited down, not
presented.

## Intro

The homepage intro is split into:

- one short statement line
- one quieter supporting paragraph
- one small custom SVG mark

The SVG is deliberately simple: a central hub/hex mark connected to server,
website, and code icons. It should communicate "small technical projects under
one domain" without becoming a full infrastructure diagram.

Do not add numbered eyebrows, mint italic emphasis, large hero titles, project
piles, stock imagery, or broad explanatory text.

## Project Categories

`ProjectCategories.astro` renders topic groups and repo rows.

Project categories contain:

- numeric index
- category title
- repo rows

Project rows contain:

- host icon and project name
- GitHub/Codeberg description when the API provides one
- metadata from GitHub or Codeberg when available
- one external arrow at the row edge

The entire row links to the primary repo. Rows are flat: no cards, shadows,
gradients, hover lift, or separate action-button strip.

The current curated list is:

- Self-Hosted und Tooling: `spellbook`, `hatchery`, `nashordaq`
- File Surgery: `ppinject`, `xlinject`
- Security, Privacy und Networking: `basalt`, `p2p-cli`
- Lernen und Misc: `advent-of-code`

Removed or intentionally not displayed: `nabe`, `vnb-atlas`, the former
platforms/organizations section, and Porvi organization rows.

## Metadata

Repository metadata is fetched at build time through `src/lib/repo-stats.ts`.

- GitHub uses `GITHUB_TOKEN` when present.
- Codeberg support exists for repo rows, but the current homepage does not
  render Codeberg repos.
- Descriptions come directly from repository metadata and are not translated.
- Empty upstream descriptions render no description paragraph.
- Tokens must never be rendered, logged, committed, or written into static
  output.

If metadata is unavailable at build time, render a quiet unavailable state
instead of broken data.

## Footer

The footer keeps legal, contact, and code-host links. It does not link to a
standalone project page.

The build stamp is generated in `Footer.astro` from git metadata.

## Content Rules

- Prefer short, concrete sentences.
- Avoid marketing phrases such as "trusted by", "built for teams",
  "delightful", "powerful", and similar filler.
- Avoid fake-company language. KyleHub is one operator's public surface.
- German copy uses real umlauts.
- English copy should be plain and direct.
