export function GET() {
  return new Response("Sitemap is disabled for this fallback site.", {
    status: 404,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}
