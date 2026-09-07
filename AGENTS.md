# Working on the website

- For product scope or navigation changes, read [PRODUCT.md](PRODUCT.md).
- For visual changes, read [DESIGN.md](DESIGN.md). `src/styles/global.css` owns
  token values.
- For project-list changes, edit `src/data/site.ts`. Metadata loads at build time
  through `src/lib/repo-stats.ts`.
- For legal changes, read the legal maintenance section of [README.md](README.md)
  and update `src/data/legal.ts` or `src/data/legalRegistry.ts`. Confirm operational
  claims against the relevant service records before changing them.
- For public brand guidance, edit `src/pages/branding.txt.ts`. Keep shared defaults
  consistent with `DESIGN.md`. Preserve section IDs referenced by other projects.
- Keep build credentials in environment variables or secret mounts. Exclude local
  environment files from Git and the container build context.
- Finish website changes with `pnpm run build`. For legal changes, also run
  `pnpm run legal:validate`. Check changed routes and both language destinations.
  For visual changes, check keyboard access, narrow layouts and text at 200% zoom.
