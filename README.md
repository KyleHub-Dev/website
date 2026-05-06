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
- `website-newt` creates the Pangolin NEWT tunnel and acts as the only ingress path
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

### Start

```bash
podman-compose up -d
```

### Logs

```bash
podman-compose logs -f website
podman-compose logs -f website-newt
```

### Pangolin routing

In Pangolin, create a resource that targets:

- host: `website`
- port: `80`

The `website` and `website-newt` containers share the internal `website-internal` bridge, so NEWT can route traffic directly to the nginx container without exposing any host ports. `website-newt` is also attached to `newt-egress` so it can make the outbound control connection to Pangolin.
