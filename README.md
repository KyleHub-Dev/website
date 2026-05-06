# KyleHub Website

Public umbrella site for `kylehub.dev` and the central legal surface for public services under `kylehub.dev`, `porvi.de`, and their subdomains.

## Local development

```bash
pnpm install
pnpm run dev
```

## Production build

```bash
pnpm run build
```

## Minimal wildcard legal model

The website intentionally uses one central legal set:

- `/impressum`
- `/datenschutz`
- `/agb`
- `/en/impressum`
- `/en/privacy-policy`
- `/en/terms`

There are no `/base/...` template routes, no legal JSON API, and no per-service legal routes. Public services under `kylehub.dev`, `porvi.de`, or their subdomains should link to the central pages:

```txt
Impressum -> https://kylehub.dev/impressum
Datenschutz -> https://kylehub.dev/datenschutz
AGB -> https://kylehub.dev/agb
```

`AGB` only needs to be linked where terms are relevant, for example account-based or product-facing services.

The scope wording is maintained in `src/data/legal.ts`. The domain-family registry is kept in `src/data/legalRegistry.ts` and is used for lightweight validation, not for public route generation.

### Legal assumptions

- `kylehub.dev` and `porvi.de` are controlled by the same operator.
- Public subdomains under both domains are part of the same ecosystem.
- Services with a separate operator or materially different legal setup publish their own legal pages.
- The privacy page describes processing by category, not by individual subdomain.
- Non-essential cookies, analytics, tracking, remote fonts, and third-party embeds are not used unless explicitly disclosed.

### Legal validation

```bash
pnpm run legal:validate
```

The validation checks that the central wildcard domain families, central routes, required privacy categories, and override clauses remain present.

## Podman Compose deployment

This repository includes a production container stack:

- `website` builds the Astro site and serves the generated output with nginx on container port `80`
- `newt` creates the Pangolin NEWT tunnel and acts as the only ingress path
- `website-internal` is an internal-only bridge network shared by nginx and NEWT
- `newt-egress` gives only the NEWT container outbound access to Pangolin

The nginx container does not publish any host ports. It only exposes port `80` inside the Compose network. Public access must go through Pangolin/NEWT.

### Setup

```bash
cp .env.example .env
```

Fill in:

- `PANGOLIN_ENDPOINT`
- `NEWT_ID`
- `NEWT_SECRET`
- `GITHUB_TOKEN` (optional, recommended): fine-grained personal access token with read-only access to public repositories. Used by the build to populate the `/projects` page with stars, forks, open issues and last-push timestamps. Without a token the build still succeeds, but the unauthenticated 60 req/hour limit exhausts quickly and the page falls back to "metadata not currently available". The token is passed to the build step as a Buildah/BuildKit secret, mounted ephemerally for `pnpm run build` only and never written into any image layer or runtime environment.

### Start

```bash
podman-compose up -d
```

### Logs

```bash
podman-compose logs -f website
podman-compose logs -f newt
```

### Pangolin routing

In Pangolin, create a resource that targets:

- host: `website`
- port: `80`

The `website` and `newt` containers share the internal `website-internal` bridge, so NEWT can route traffic directly to the nginx container without exposing any host ports. `newt` is also attached to `newt-egress` so it can make the outbound control connection to Pangolin.
