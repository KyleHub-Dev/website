# Working on the website

- For product scope, navigation or visual changes, read [docs/site.md](docs/site.md).
- For project-list or legal changes, read [docs/maintenance.md](docs/maintenance.md).
- For container or deployment changes, read [docs/deployment.md](docs/deployment.md).
- For public brand guidance, edit `src/pages/branding.txt.ts`. Keep shared defaults
  consistent with [docs/site.md](docs/site.md). Preserve section IDs referenced by
  other projects.
- Keep credentials in environment variables or secret mounts. Exclude local
  environment files from Git and the container build context.
- Finish website changes with `pnpm run build`. For legal changes, also run
  `pnpm run legal:validate`. Check changed routes and both language destinations.
  For visual changes, check keyboard access, narrow layouts and text at 200% zoom.
