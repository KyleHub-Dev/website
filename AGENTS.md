# AGENTS.md

Authoritative sources in this repo:

- `DESIGN.md` — design system (colors, typography, layout, motion, bans, tone).
- `PRODUCT.md` — strategic context (audience, register, anti-references).

Read both before doing visual or product work. They are the source of truth.

## Note on branding.txt

The site also serves `/branding.txt` (`src/pages/branding.txt.ts`), a portable
public brand brief for AI assistants and human collaborators working outside
this repo. It shares identity, tokens, and major rules with the internal design
system, but it is not a generated mirror and should not be copied blindly from
`DESIGN.md`.

`DESIGN.md` is the implementation spec for this website. `/branding.txt` is the
external default direction when another project has no stronger local design
context. Keep the two coherent at the level of identity, palette, typography
roles, named rules, bans, and surface direction, while allowing `branding.txt`
to stay softer and more general.

## Footer build stamp

`zuletzt bearbeitet <date> · build <sha>` is auto-generated at build time in
`Footer.astro` from `git log -1 --format=%cs` and `git rev-parse --short HEAD`.
Advances on rebuild against a new commit; no manual updates. Falls back to
today + `dev` if `.git` is missing (shallow clone, Dockerfile dropping `.git`).
Tracks the source commit, not the build moment, so commit before deploy.
