FROM docker.io/node:22-alpine AS build

WORKDIR /app

ENV ASTRO_TELEMETRY_DISABLED=1

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG SOURCE_REVISION
ARG SOURCE_DATE

RUN pnpm run build

FROM docker.io/nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
