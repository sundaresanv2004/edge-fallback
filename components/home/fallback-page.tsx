import {
  ArrowRight02Icon,
  Mail01Icon,
  TimeQuarter02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { StatusBadge } from "@/components/home/status-badge"
import { Button } from "@/components/ui/button"

interface FallbackPageProps {
  appName?: string
  originalPath?: string
}

export function FallbackPage({ appName, originalPath }: FallbackPageProps) {
  const isSpecificApp = Boolean(appName)
  const title = isSpecificApp ? `${appName} is` : "Apps are"
  const highlight = "Available on Request"
  const description = isSpecificApp
    ? "I pause apps when they are not in use to save resources. Nothing is wrong with your browser; send a request and I can bring this app back online."
    : "Some apps hosted by me are paused when they are not in active use. If you landed here from an app link, send a request and I can help restore access."
  const statusLabel = isSpecificApp ? "Paused Intentionally" : "Fallback Ready"
  const restoreLabel = isSpecificApp ? "Request Restore" : "Contact Sundaresan"
  const emailSubject = encodeURIComponent(
    isSpecificApp ? `Access request for ${appName}` : "Application access request"
  )
  const emailBody = encodeURIComponent(
    [
      "Hi Sundaresan,",
      "",
      isSpecificApp
        ? `I need access to ${appName}.`
        : "I need access to one of your applications.",
      originalPath ? `Original path: ${originalPath}` : "",
    ]
      .filter(Boolean)
      .join("\n")
  )
  const details = [
    {
      label: "What happened",
      value: isSpecificApp
        ? `${appName} is paused to save server resources.`
        : "One of the temporary apps may be paused or moved.",
    },
    {
      label: "Can it come back",
      value: "Yes. Send a request and I can restore access when needed.",
    },
    {
      label: "Your request",
      value: originalPath
        ? `You tried to open ${originalPath}.`
        : "Tell me which app you were trying to open.",
    },
  ]

  return (
    <>
      <AnimatedBackground />

      <main className="flex min-h-svh items-center justify-center px-5 py-20 sm:px-8">
        <div className="animate-fade-in-up w-full max-w-4xl text-center">
          <div className="mb-6 flex justify-center sm:mb-8">
            <StatusBadge label={statusLabel} />
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-tight">
            {title}{" "}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-md">
            {description}
          </p>

          <div className="mx-auto mb-8 max-w-xl border-y border-border/50 text-left">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="grid gap-1 border-b border-border/40 py-3 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-4"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/60">
                  {detail.label}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {originalPath ? (
            <div className="mx-auto mb-8 inline-flex max-w-full items-center gap-2 rounded-lg border border-border/50 bg-card/40 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm">
              <HugeiconsIcon icon={TimeQuarter02Icon} size={15} />
              <span className="truncate">Requested path: {originalPath}</span>
            </div>
          ) : null}

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group h-11 w-full gap-2 rounded-xl px-7 text-sm font-medium sm:h-12 sm:w-auto"
            >
              <a
                href={
                  isSpecificApp
                    ? `mailto:contact@sundaresan.dev?subject=${emailSubject}&body=${emailBody}`
                    : "https://sundaresan.dev/contact"
                }
                target={isSpecificApp ? undefined : "_blank"}
                rel={isSpecificApp ? undefined : "noopener noreferrer"}
              >
                {restoreLabel}
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </Button>

            <span className="hidden text-muted-foreground/30 sm:inline">or</span>

            <a
              href={`mailto:contact@sundaresan.dev?subject=${emailSubject}&body=${emailBody}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/40 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:border-border hover:text-foreground sm:w-auto sm:py-3"
            >
              <HugeiconsIcon icon={Mail01Icon} size={16} />
              Email directly
            </a>
          </div>

          <p className="mt-12 text-xs tracking-wide text-muted-foreground/40 sm:mt-16">
            &copy; {new Date().getFullYear()} Sundaresan V
          </p>
        </div>
      </main>
    </>
  )
}
