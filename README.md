# Edge Fallback

Fallback website for paused applications hosted under `sundaresan.dev`.

When a temporary app is stopped to save resources, Cloudflare redirects visitors to this site so non-technical users see a clear, friendly message instead of a server or browser error.

## Local Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## URL Behavior

The root route shows a generic fallback page:

```txt
https://fallback.sundaresan.dev/
```

App-specific routes show a detailed page:

```txt
https://fallback.sundaresan.dev/quickdrop/login
```

This displays:

```txt
Quickdrop is Available on Request
Requested path: /login
```

The first path segment is treated as the app slug. Remaining path segments are shown as the originally requested path.

## Cloudflare Redirects

For each paused app, create a redirect rule like this:

```txt
Request URL:
https://quickdrop.sundaresan.dev/*

Target URL:
https://fallback.sundaresan.dev/quickdrop/${1}

Status:
302 Temporary Redirect
```

Use the app slug as the first path segment:

```txt
https://fallback.sundaresan.dev/staff-portal/${1}
https://fallback.sundaresan.dev/inventory/${1}
https://fallback.sundaresan.dev/quickdrop/${1}
```

## Dokploy Deployment

This project is configured for Dokploy using Docker Compose.

The compose file:

- connects to the external `dokploy-network`
- exposes port `3000` only to Traefik
- routes `fallback.sundaresan.dev` through Traefik labels
- applies basic container hardening

Health endpoint:

```txt
https://fallback.sundaresan.dev/health
```

The Docker healthcheck also uses `/health`.

## Fonts

Fonts are self-hosted in:

```txt
public/fonts/
```

The app uses `next/font/local`, so production builds do not need to fetch Google Fonts at build time.

## Search And Indexing

This fallback site should not appear in Google search results.

The app includes:

- `metadata.robots` with `index: false` and `follow: false`
- `/robots.txt` that disallows all crawlers
- `/sitemap.xml` disabled with a `404` response

Because `sundaresan.dev` is already verified as a Domain property in Google Search Console, it also covers subdomains such as:

```txt
fallback.sundaresan.dev
quickdrop.sundaresan.dev
```

Do not submit a sitemap for this fallback app. If Google has already discovered fallback URLs, use Search Console Removals only if you need faster cleanup; otherwise the noindex and robots rules will keep the site out of search over time.

## Uptime Monitor

GitHub Actions includes a basic uptime check:

```txt
.github/workflows/uptime.yml
```

It checks:

```txt
https://fallback.sundaresan.dev/health
```

Schedule:

```txt
Every 15 minutes
```

You can also run it manually from the GitHub Actions tab using `workflow_dispatch`.
