# AGENTS.md

Current reference documents in this repo:

- `DESIGN.md` - current website design notes, reconciled after implementation.
- `PRODUCT.md` - strategic context and older product direction.

Read both before visual or product work, but treat the actual implementation in
`src/` as the source of truth when the documents disagree. In the May 2026
redesign pass, the code was inspected first and the docs were updated afterward
so they describe the shipped direction instead of constraining it.

Current implementation notes:

- The homepage is the project overview; `/projects` and `/en/projects` do not
  exist.
- The header is sticky, translucent, and has a full-width bottom hairline.
- Project rows use build-time repo metadata. Descriptions come from the repo
  host API and are not translated locally.
- `pnpm run legal:validate` is for legal content/route/registry changes. For
  visual-only work, `pnpm run build` is usually the relevant validation.

## Note on branding.txt

The site also serves `/branding.txt` (`src/pages/branding.txt.ts`), a portable
public brand brief for AI assistants and human collaborators working outside
this repo. It shares identity, tokens, and major rules with the internal design
system, but it is not a generated mirror and should not be copied blindly from
`DESIGN.md`.

`DESIGN.md` describes this website's current implementation. `/branding.txt` is
the external default direction when another project has no stronger local design
context. Keep the two coherent at the level of identity, palette, typography
roles, bans, and surface direction, while allowing `branding.txt` to stay softer
and more general.

## Footer build stamp

`zuletzt bearbeitet <date> · build <sha>` is auto-generated at build time in
`Footer.astro` from `git log -1 --format=%cs` and `git rev-parse --short HEAD`.
Advances on rebuild against a new commit; no manual updates. Falls back to
today + `dev` if `.git` is missing (shallow clone, Dockerfile dropping `.git`).
Tracks the source commit, not the build moment, so commit before deploy.
