/**
 * App theme configuration for the fallback page.
 *
 * When you add a new project and set up a Cloudflare redirect,
 * add a matching entry here so the fallback page picks up the
 * correct gradient automatically.
 *
 * The `match` string is checked against the lowercase app name
 * extracted from the URL path (e.g. "quickdrop", "staff portal").
 */

export interface AppTheme {
  /** Substring to match against the app name (lowercase). */
  match: string
  /** Tailwind gradient classes applied to the title highlight. */
  gradient: string
}

export const APP_THEMES: AppTheme[] = [
  { match: "quickdrop", gradient: "from-blue-500 to-cyan-500" },
  { match: "staff", gradient: "from-purple-500 to-pink-500" },
  { match: "inventory", gradient: "from-emerald-500 to-teal-500" },
  { match: "evoting", gradient: "from-amber-500 to-orange-500" },
]

/** Default gradient when no app-specific theme matches. */
export const DEFAULT_GRADIENT = "from-primary via-chart-1 to-chart-2"

/**
 * Returns the gradient class string for a given app name.
 * Falls back to the default theme if no match is found.
 */
export function getAppGradient(appName?: string): string {
  if (!appName) return DEFAULT_GRADIENT
  const name = appName.toLowerCase()
  const theme = APP_THEMES.find((t) => name.includes(t.match))
  return theme?.gradient ?? DEFAULT_GRADIENT
}
