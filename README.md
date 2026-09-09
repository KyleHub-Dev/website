# KyleHub website

Source for [kylehub.dev](https://kylehub.dev), with selected projects and German
and English legal pages for services under `kylehub.dev`. Astro builds the site
as static HTML.

## Development

Use Node.js 22.12 or later and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Build and preview:

```sh
pnpm run build
pnpm run preview
```

## Documentation

- [Site direction](docs/site.md) covers purpose, project presentation and design.
- [Maintenance](docs/maintenance.md) covers project selection and legal updates.
- [Deployment](docs/deployment.md) covers the nginx and Pangolin container stack.
- [Kea mascot direction](docs/kea-mascot.md) records ideas for future identity work.
- [Public brand guidance](https://kylehub.dev/branding.txt) provides defaults for
  other projects. Its source is `src/pages/branding.txt.ts`.

## Reuse

Original website code and developer documentation use the [MIT license](LICENSE).
KyleHub brand assets and operator-specific legal texts are excluded. See
[NOTICE.md](NOTICE.md) for the exact scope and third-party font/icon notices.
The license does not grant trademark rights or imply KyleHub endorsement.
