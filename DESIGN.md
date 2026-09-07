# Website design

The homepage introduces KyleHub and lists selected projects. Legal pages use a
separate reading layout. [PRODUCT.md](PRODUCT.md) owns purpose and audience;
`src/styles/global.css` owns the implemented tokens and component styles.

## Layout

Keep the introduction compact so visitors reach projects without scrolling
through a large hero. The sticky header keeps navigation and the language link
available. Its translucent background preserves text contrast over page content.
Use `scroll-margin-top` on anchor targets so the header does not cover them.

Project categories and repository identities live in `src/data/site.ts`. Render
projects as full-width links with thin dividers. Descriptions and metadata come
from GitHub at build time. When the API is unavailable, keep the repository link
and show the unavailable state. Omit empty descriptions.

Keep legal pages readable on narrow screens and at 200% zoom. Each language link
must resolve to a real page. The footer contains working contact, repository and
legal links.

## Color and typography

Use dark neutral backgrounds with restrained mint and warm brown accents. Mint
marks identity and interaction, including the wordmark, focus and active links.
Warm brown distinguishes metadata. Read exact values from the CSS tokens rather
than copying them into this document.

Atkinson Hyperlegible is the reading face. JetBrains Mono distinguishes
navigation, repository names and metadata. Fraunces is used for the wordmark and
selected headings. Fonts are served locally through the installed font packages.

Keep visible keyboard focus and verify contrast for text and interactive states.
Color must not be the only way to communicate state. Respect reduced-motion
preferences when adding transitions.

## Identity and copy

Use short first-person sentences in the introduction. Describe the projects and
how to reach them. Keep legal wording tied to actual service behavior.

Use Iconify's Lucide set for generic icons and Simple Icons for supported brand
marks. Custom SVG is appropriate for the KyleHub illustration and logo. The
wordmark's small offset is an optional detail; other components need no deliberate
misalignment.

The public `/branding.txt` brief provides defaults for other projects. This file
owns website-specific decisions. Keep shared identity, type roles and palette
consistent, while allowing products to adapt navigation and layout to their tasks.

## Source stamp

`Footer.astro` reads the source date and revision from Git when available.
Container builds accept `SOURCE_DATE` and `SOURCE_REVISION` build arguments because
`.git` is excluded from the context. Missing metadata is omitted from the footer.
See [README.md](README.md) for the build command.
