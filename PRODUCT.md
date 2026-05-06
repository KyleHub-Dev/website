### Product

## Register

brand

## Users

Two audiences land here, both arriving cold and leaving quickly:

- **Primary (functional): visitors of services under `kylehub.dev`, `porvi.de`, and their subdomains** who clicked an Impressum / Datenschutz / AGB link from a product surface. They are not here to be impressed; they need to verify the operator is real and find a specific legal section quickly. Often German-speaking, often on mobile, often skeptical.
- **Primary (brand): developers, peers, and potential collaborators** who reached the root domain on purpose. They want a fast read on who is behind these services, what is being built, and where else to look (GitHub, social, future portfolio).

Both audiences are technically literate. Neither needs hand-holding or marketing copy. Trust is earned by the site behaving like a credible, careful operator runs it - not by claiming so.

## Product Purpose

`kylehub.dev` is a personal umbrella surface and the central legal hub for Kyle's domain family. It does three jobs and refuses the rest:

1. Introduce the person behind the services with a short hero and (eventually) a portfolio link.
2. Showcase a small, hand-curated set of projects, updated periodically. Static by design.
3. Host the canonical legal pages (Impressum, Datenschutz, AGB; bilingual DE/EN) that every public service in the family links to.

Success looks like: a service visitor finds the right legal section in under ten seconds and never doubts the operator is legitimate; a developer visitor leaves with a clear sense of who Kyle is and at least one project they want to look at more closely.

This is not a marketing site, not a product landing, not a CV.

## Brand Personality

Three words, in tension on purpose: **clean, technical, unperfect.**

- **Clean** - generous whitespace, restrained palette, one column of attention at a time. Nothing decorative survives that does not earn its place.
- **Technical** - precise typography, exact spacing, honest copy. Sounds like an engineer wrote it because an engineer did. No marketing voice.
- **Unperfect** - the site is one person's hub, not a studio's portfolio. Small wonky details, hand-set asymmetries, a visible seam or two, and quiet easter eggs are features, not bugs. A site that is *too* polished would lie about who runs it.

Voice: direct, lowercase-friendly, dry. Says what it is, never sells. German on DE pages reads like a careful operator; English reads the same.

## Anti-references

Things this site explicitly should not look like:

- **Generic SaaS marketing landings.** Gradient hero, three-card feature grid, "Trusted by" logo strip, pastel illustration, soft purple-to-blue gradient buttons. The whole genre is off the table.
- **The "developer portfolio" reflex.** Terminal-on-black, neon-on-dark, monospace everything, fake `$ whoami` prompt, ASCII art header. Technical ≠ terminal cosplay.
- **Corporate consulting / agency.** Navy-and-gold, stock-photo handshakes, "We deliver excellence", centered serif headlines over a dark hero photo.
- **Over-polished studio portfolios.** Magazine-grade scroll choreography, cursor-following gradients, full-bleed video heroes, GSAP set pieces on every section. This is a personal hub; that level of polish would feel dishonest.
- **Generic "minimal" templates.** Off-white background + black Inter heading + one underlined link is not a design - it is the absence of one. Minimalism here has to be committed and specific, not a default.

References whose direction is *partially* right (clean, technical) but none of which fully fit because they all lean too polished: SpacetimeDB, ssp.sh, Mintlify, Linear. Use them for restraint and rigor, not for finish quality.

## Design Principles

1. **Honesty over polish.** The unperfect is load-bearing. Prefer one slightly wonky, hand-set detail to ten flawless ones. Never manufacture credibility the operator has not earned; never sand off a seam that tells the truth about who runs this.
2. **Legal pages are first-class.** They are not a footer afterthought. They render fast, read cleanly, are easy to deep-link into, and look like they belong to the same person as the hero. No dropping the design budget at `/impressum`.
3. **One operator, not a company.** Voice, scale, and density should feel like a person's site, not a brand's. Singular "I", no team plurals, no fake ecosystem talk.
4. **Reward closer looks.** Small easter eggs, microcopy that pays attention, a detail that only shows up on hover or at a specific viewport. They are quiet, never the headline. A first-time visitor should not need to find them; a second-time visitor should.
5. **Static and periodic, not live.** The site is updated by hand on a slow cadence. Designs and content should look intentional at any point in that cadence, never stale because a feed didn't refresh. No fake dynamism.

## Accessibility & Inclusion

WCAG AA is the target, not a contract. Sensible defaults are the floor, not the ceiling.

- Keyboard navigation works everywhere, with a visible focus style that matches the design (not the browser default ring slapped on top).
- Color contrast meets AA for body text and interactive states; verify accent-on-canvas and accent-on-surface combinations.
- `prefers-reduced-motion` is respected for any motion that gets added later.
- Bilingual (DE / EN) with correct `lang` attributes; the language switcher is reachable without a mouse and announces state to screen readers.
- Legal pages in particular must be readable at 200% zoom and on small screens without horizontal scroll - they are the surface most likely to be opened on a phone in a hurry.
