# Container deployment

The Compose stack serves the built site with nginx. NEWT connects it to Pangolin;
nginx publishes no host port. The containers share an internal network, and only
NEWT has an additional network for outbound tunnel access.

## Configure and start

Run these commands from the repository root using Podman and `podman-compose`.
Have the Pangolin endpoint and NEWT site credentials available before starting.

```sh
cp .env.example .env
```

Fill in the Pangolin endpoint and NEWT credentials. Keep credentials in local
environment files or secret mounts. They must stay out of Git, logs and generated
pages. The container build excludes local environment files.

Build from the source revision you intend to deploy. These optional arguments
identify that revision in the footer:

```sh
SOURCE_REVISION="$(git rev-parse --short HEAD)" \
SOURCE_DATE="$(git log -1 --format=%cs)" \
  podman-compose up -d --build
```

The stamp identifies the commit, so commit the intended source before a stamped
deployment. `Footer.astro` reads the source date and revision from Git when
available. Container builds use these arguments because `.git` is excluded from
the context. Without source metadata, the footer omits the stamp.

## Verify access

In Pangolin, route the resource to host `website`, port `80`. Verify public access
through that resource and inspect startup logs:

```sh
podman-compose logs -f website newt
```

Check the homepage and the corresponding German and English legal destinations.

## Gateway VPS

`compose.vps.yaml` runs only nginx on the gateway's existing `pangolin` network.
It publishes no host ports and needs no Newt credentials. Fleet owns the host and
Pangolin route; this repository owns the application build and Compose file.

Build a committed revision off-host with its Git revision and commit date as
`SOURCE_REVISION` and `SOURCE_DATE`. Tag it `localhost/kylehub-website:git-<full-sha>`.
Transfer a Docker-format image archive to the VPS and load it with `docker load`.
Keep `compose.vps.yaml` and an `.env` containing `WEBSITE_IMAGE=<image-tag>` in
`/home/kyle/services/website/`, then validate and start:

```sh
docker compose -p kylehub-website -f compose.vps.yaml config --quiet
docker compose -p kylehub-website -f compose.vps.yaml up -d
```

Verify health and HTTP access to `kylehub-website-origin:80` from the gateway
network before changing Pangolin. Resource 22 keeps its public policy; target 28
uses local site 1 and that origin address. Check both homepages, all legal routes
and assets after the switch. Gateway containers need no restart.

For a release rollback, restore the previous image reference in `.env` and run
the same Compose command. For the initial migration rollback, target 28 can return
to site 16, `website:80`, while the dedicated-server origin remains available.
