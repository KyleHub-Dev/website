# Site direction

## Purpose

KyleHub introduces Kyle's projects and hosts the German and English legal pages
for services under `kylehub.dev`.

Visitors need to find a project's repository or identify the operator of a
service. Keep the introduction short, put projects on the homepage, and make
legal pages reachable from every page. Use first-person copy for the introduction.

The site is static. Select projects and write their descriptions locally in both
languages. A visitor should understand what each project does without opening
GitHub. Group projects by purpose and use concrete category names.

Show direct repository links and concise descriptions. Repository counters and
relative activity dates add maintenance without helping visitors choose a
project. The project list works without GitHub API access. See
[maintenance](maintenance.md) when changing its content.

## Layout

Keep the introduction compact so visitors reach projects without scrolling
through a large hero. The sticky header keeps navigation and the language link
available. Its translucent background preserves text contrast over page content.
Use `scroll-margin-top` on anchor targets so the header does not cover them.

Render projects as full-width links with thin dividers. Keep legal pages in a
separate reading layout. Every language link must resolve to the corresponding
available translation. The footer contains working contact, repository and legal
links.

## Color and typography

Use dark neutral backgrounds with restrained mint and warm brown accents. Mint
marks identity and interaction, including the wordmark, focus and active links.
Warm brown distinguishes secondary details. `src/styles/global.css` owns token
values and component styles.

Atkinson Hyperlegible is the reading face. JetBrains Mono distinguishes
navigation, repository names and labels. Fraunces is used for the wordmark and
selected headings. Fonts are served locally through the installed font packages.

Keep visible keyboard focus and verify contrast for text and interactive states.
Color must not be the only way to communicate state. Respect reduced-motion
preferences when adding transitions. Check narrow layouts and text at 200% zoom
for clipped content and unreachable links.

## Identity

For mascot, logo or personal-name lockup exploration, read the
[kea mascot direction](kea-mascot.md). Kea is the preferred animal; its visual
treatment and adoption on the website remain open.

Use Iconify's Lucide set for generic icons and Simple Icons for supported brand
marks. Custom SVG is appropriate for the KyleHub illustration and logo. The
wordmark's small offset is an optional detail; other components need no deliberate
misalignment.

The public `/branding.txt` brief provides defaults for other projects. This file
owns website-specific decisions. Keep shared identity, type roles and palette
consistent, while allowing products to adapt navigation and layout to their tasks.
