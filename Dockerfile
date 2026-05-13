FROM docker.io/node:22-alpine AS build

WORKDIR /app

ENV ASTRO_TELEMETRY_DISABLED=1

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Build tokens are consumed once by `pnpm run build` for static project metadata
# and are never written to any image layer. Build still succeeds without them.
RUN --mount=type=secret,id=github_token \
    --mount=type=secret,id=codeberg_token \
    if [ -s /run/secrets/github_token ]; then \
        export GITHUB_TOKEN="$(cat /run/secrets/github_token)"; \
    fi; \
    if [ -s /run/secrets/codeberg_token ]; then \
        export CODEBERG_TOKEN="$(cat /run/secrets/codeberg_token)"; \
    fi; \
    pnpm run build

FROM docker.io/nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
