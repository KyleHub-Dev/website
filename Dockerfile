FROM docker.io/node:22-alpine AS build

WORKDIR /app

ENV ASTRO_TELEMETRY_DISABLED=1

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# GITHUB_TOKEN is mounted as a build secret. It is consumed once by `pnpm run build`
# (Astro's static generation calls the GitHub API for /projects metadata) and is
# never written to any image layer. Build still succeeds without it; metadata
# falls back to "not currently available" until the next build with a token.
RUN --mount=type=secret,id=github_token \
    if [ -s /run/secrets/github_token ]; then \
        export GITHUB_TOKEN="$(cat /run/secrets/github_token)"; \
    fi; \
    pnpm run build

FROM docker.io/nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
