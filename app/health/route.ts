export function GET() {
  return Response.json({
    ok: true,
    service: "edge-fallback",
  })
}
