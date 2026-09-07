# KyleHub website

Source for [kylehub.dev](https://kylehub.dev), including the project overview and
German and English legal pages for services under `kylehub.dev` and `porvi.de`.
The site builds static HTML with Astro.

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

[PRODUCT.md](PRODUCT.md) describes the site's purpose. [DESIGN.md](DESIGN.md)
explains visual decisions. `/branding.txt` provides public brand guidance for
other projects.

## Project metadata

Edit `src/data/site.ts` to select projects. `src/lib/repo-stats.ts` fetches GitHub
descriptions, language, activity and counts at build time. Descriptions are not
translated locally. Empty descriptions are omitted; failed requests leave the
repository link available with a metadata-unavailable message.

`GITHUB_TOKEN` is optional. Use a fine-grained token with read-only public
repository access and no extra permissions. It can increase the API rate limit;
limits depend on the account and token. Builds also work without a token.

Keep credentials in local environment files or build secret mounts. They must
stay out of Git, logs and generated pages. The container build excludes local
environment files and reads its GitHub token from an ephemeral secret mount.

## Legal maintenance

The central pages are `/impressum`, `/datenschutz` and `/agb`, with English
versions at `/en/impressum`, `/en/privacy-policy` and `/en/terms`. Each also has a
`.txt` export. Public services in the domain family should link to the central
pages, with terms linked where relevant to the service.

`src/data/legal.ts` owns the texts. `src/data/legalRegistry.ts` owns the covered
domain families. `src/data/site.ts` owns the public operator/contact details.
Services with a different operator or processing arrangement need appropriate
separate disclosures.

Before changing claims about hosting, accounts, processors or retention, check
the relevant service's actual deployment and operating records. A repository move
does not establish that a service's hosting or processing changed. Preserve
necessary qualifications in both languages.

After changing legal content, routes, the registry or validator, run:

```sh
pnpm run legal:validate
pnpm run build
```

The validator checks selected source markers and registry declarations. It does
not prove legal completeness, deployed processing behavior, or route availability.
Open the affected HTML and text routes in both languages after building.

## Container deployment

The Compose stack serves the built site with nginx. NEWT connects it to Pangolin;
nginx publishes no host port. The containers share an internal network, and only
NEWT has an additional network for outbound tunnel access.

```sh
cp .env.example .env
```

Fill in the Pangolin endpoint and NEWT credentials. Add the optional GitHub token
if needed. Use a Compose/build implementation that supports environment-backed
build secrets.

Build from the source revision you intend to deploy. These optional arguments
identify that revision in the footer:

```sh
SOURCE_REVISION="$(git rev-parse --short HEAD)" \
SOURCE_DATE="$(git log -1 --format=%cs)" \
  podman-compose up -d --build
```

The stamp identifies the commit, so commit the intended source before a stamped
deployment. Without source metadata, the footer omits the stamp.

In Pangolin, route the resource to host `website`, port `80`. Verify public access
through that resource and inspect startup logs:

```sh
podman-compose logs -f website newt
```

## Reuse

Original website code and developer documentation use the [MIT license](LICENSE).
KyleHub brand assets and operator-specific legal texts are excluded. See
[NOTICE.md](NOTICE.md) for the exact scope and third-party font/icon notices.
The license does not grant trademark rights or imply KyleHub endorsement.
