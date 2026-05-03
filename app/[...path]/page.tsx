import { FallbackPage } from "@/components/home/fallback-page"

interface CatchAllPageProps {
  params: Promise<{
    path?: string[]
  }>
}

function formatAppName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { path = [] } = await params
  const [appSlug, ...restPath] = path
  const appName = appSlug ? formatAppName(appSlug) : undefined
  const originalPath = restPath.length > 0 ? `/${restPath.join("/")}` : undefined

  return <FallbackPage appName={appName} originalPath={originalPath} />
}
