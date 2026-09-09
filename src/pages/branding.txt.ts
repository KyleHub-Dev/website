import type { APIRoute } from 'astro';

export const prerender = true;

const body = `KyleHub brand guidance
======================

For people and AI assistants working on projects under kylehub.dev.
Use these defaults when the project has no more specific product or design brief.
Section numbers remain stable so projects can reference decisions.

SECTION 1: USE
--------------

Start with the project's purpose and audience. Local requirements take priority
over these defaults. Record a material departure near its implementation:

  departs from branding.txt section <number>: <reason>

Use role tokens in components. Define the palette and role mappings centrally.
If a default repeatedly causes problems, revise it for that project instead of
adding exceptions to every component.

SECTION 2: IDENTITY AND VOICE
-----------------------------

KyleHub is the name Kyle uses for personal projects and services. Use short,
concrete descriptions of what a project does. First-person language fits personal
introductions; use the actual operator and service facts in legal documents.

Use real German umlauts. Preserve exact identifiers and quoted source text.
Separate sentences with periods. Keep promotional claims and decorative copy out
of navigation, project lists and instructions.

SECTION 3: COLOR
----------------

Default primitives, in OKLCH:

  Bloom          oklch(0.738 0.131 170)
  Bloom Deep     oklch(0.66 0.135 170)
  Bark           oklch(0.62 0.07 70)
  Bark Soft      oklch(0.55 0.065 70)
  Stone          oklch(0.145 0.004 245)
  Stone Raised   oklch(0.205 0.005 245)
  Stone Deep     oklch(0.115 0.004 245)
  Lichen         oklch(0.92 0.004 245)
  Lichen Muted   oklch(0.73 0.005 245)
  Lichen Faint   oklch(0.54 0.005 245)
  Hairline       oklch(0.28 0.005 245)
  Hairline Strong oklch(0.36 0.006 245)

Dark-theme role defaults:

  --accent       Bloom, for identity and interaction
  --accent-warm  Bark, for metadata
  --surface      Stone
  --surface-2    Stone Raised
  --surface-3    Stone Deep
  --text         Lichen
  --text-muted   Lichen Muted
  --text-faint   Lichen Faint
  --hairline     Hairline

For light themes, use Bark as --accent and Bloom as --accent-warm. Choose light
backgrounds and dark text for that theme and verify contrast. The dark palette
is not a complete light-theme palette.

Keep accents small: focus, active links, wordmarks and metadata. Use neutral
backgrounds for large areas. Data identity marks, such as GitHub language dots,
may use their source colors. Pair status colors with text or another visible cue.
Verify text and control contrast; a named brand token does not establish WCAG
compliance. Faint text must still meet contrast requirements when it conveys
information.

SECTION 4: TYPOGRAPHY AND ICONS
-------------------------------

Use locally served fonts where possible:

- Atkinson Hyperlegible for body text and compact introductions.
- JetBrains Mono for navigation, labels, repository names and metadata.
- Fraunces for the wordmark and selected headings.

If these fonts are unavailable, preserve their roles with suitable alternatives.
Start body text at 1rem, with a readable line height and about 65-72 characters
per line. Check dense reading pages at 200% zoom.

Use Iconify with Lucide for generic UI icons and Simple Icons for brand marks.
Icons inherit currentColor. In Astro, include only used icons in astro.config.*.
Custom SVG is appropriate for the KyleHub logo and project-specific illustrations.

SECTION 5: SHAPE, MOTION AND LAYOUT
----------------------------------

Use square, flat components separated by spacing and thin borders. Keep visual
hierarchy in type size, weight and placement. A sticky navigation bar can use
restrained transparency if its text stays readable over the page.

Use short transitions for interaction states. Respect prefers-reduced-motion.
Keep content available without entrance animations or scroll effects.

Choose layout around the task. Project lists work well as rows with dividers;
legal text needs a reading column. Repeated controls should stay predictable.

SECTION 6: COMPONENT DEFAULTS
-----------------------------

Wordmark:
  Fraunces for "Kyle", followed by "Hub" in a thin --accent box.

Actions:
  Distinguish primary and secondary actions with weight, borders and role tokens.
  Keep controls reachable by keyboard. Use a visible focus outline, normally
  2px solid --accent with 2px offset, and check its contrast.

Languages:
  Show DE and EN when both translations exist. Each link must lead to the
  corresponding available page. If a translation is unavailable, omit its link
  or explain that state without linking to an error page. Set document lang and
  link hreflang correctly.

Themes:
  If the product offers a theme switcher, give it an accessible name and visible
  state. Use the system preference until the user chooses a theme. Store an
  explicit choice under <project>-theme in localStorage.

Project lists:
  Use a direct repository link, readable description and relevant metadata.
  Keep descriptions in the page language. For a small curated directory,
  maintain them with the project list. If external metadata is needed, fetch it
  at build time and preserve navigation when it is unavailable.

Footer:
  Include working contact and legal links. Show a source revision or update date
  only when it is known. Keep build dates distinct from source-edit dates.

SECTION 7: ACCESSIBILITY
------------------------

Keep keyboard focus visible, controls named, and navigation usable without a
mouse. Verify text and control contrast in every supported theme. State must be
understandable without color alone. Respect reduced-motion preferences.

Check narrow screens and 200% zoom for clipped text, hidden controls and horizontal
scrolling. Keep decorative illustrations out of the accessibility tree when nearby
text already carries their meaning.

SECTION 8: OPTIONAL DETAILS
---------------------------

The website's wordmark has a small resting offset that changes on hover. This is
an optional identity detail. Other components can use ordinary aligned layouts.
Keep any decorative interaction secondary to reading and navigation.

SECTION 9: PRIVACY AND HOSTING
------------------------------

Prefer local fonts and build-time metadata requests. Disclose any analytics,
tracking, third-party embeds or non-essential storage before using them.

Describe the actual service's data processing in its legal pages. Use the central
KyleHub legal pages only when their operator, scope and processing descriptions
cover the service. Build credentials stay outside source, browser code and output.

SECTION 10: COMPLETION CHECK
----------------------------

Before finishing, verify the changed page against its purpose. Check working
links, keyboard navigation, supported languages, contrast, narrow layouts and
reduced-motion behavior where motion changed. Run the project's build and
relevant checks. Record any unverified behavior and material design departures.
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
