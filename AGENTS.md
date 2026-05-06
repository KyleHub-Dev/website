# AGENTS.md

Authoritative sources in this repo:

- `DESIGN.md` — design system (colors, typography, layout, motion, bans, tone).
- `PRODUCT.md` — strategic context (audience, register, anti-references).

Read both before doing visual or product work. They are the source of truth.

## Note on branding.txt

The site also serves `/branding.txt` (`src/pages/branding.txt.ts`), a curated
public summary aimed at AI assistants and external collaborators. It is
hand-written, not generated from `DESIGN.md`, so the two intentionally drift.

If you make major changes to `DESIGN.md` (palette, typography stack, named
rules, bans, surface direction), update `src/pages/branding.txt.ts` in the
same commit so the public spec stays in sync. Minor wording or internal-only
notes can stay in `DESIGN.md` alone.

## Footer build stamp

`zuletzt bearbeitet <date> · build <sha>` is auto-generated at build time in
`Footer.astro` from `git log -1 --format=%cs` and `git rev-parse --short HEAD`.
Advances on rebuild against a new commit; no manual updates. Falls back to
today + `dev` if `.git` is missing (shallow clone, Dockerfile dropping `.git`).
Tracks the source commit, not the build moment, so commit before deploy.
