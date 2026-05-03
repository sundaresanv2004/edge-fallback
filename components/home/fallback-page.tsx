import {
  ArrowRight02Icon,
  Mail01Icon,
  TimeQuarter02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { StatusBadge } from "@/components/home/status-badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FallbackPageProps {
  appName?: string
  originalPath?: string
}

export function FallbackPage({ appName, originalPath }: FallbackPageProps) {
  const isSpecificApp = Boolean(appName)
  const themeGradient = "from-emerald-500 to-teal-500"

  const title = isSpecificApp ? `${appName} is` : "Apps are"
  const highlight = "Available on Request"
  const description = isSpecificApp
    ? "This app is sleeping to save server resources. Drop me a message and I'll bring it back online for you."
    : "Some of my projects are currently sleeping to save resources. If you were looking for something, just reach out!"

  const statusLabel = isSpecificApp ? "Sleeping" : "Fallback"
  const primaryLabel = isSpecificApp ? "Request Access" : "Get in Touch"
  const secondaryLabel = isSpecificApp ? "Get in Touch" : "Email directly"

  const emailSubject = encodeURIComponent(
    isSpecificApp ? `Can you bring ${appName} back online?` : "Hey, I need access to an app"
  )
  const emailBody = encodeURIComponent(
    [
      "Hi Sundaresan,",
      "",
      isSpecificApp
        ? `I was trying to use ${appName}, could you bring it back online?`
        : "I was trying to access one of your projects.",
      originalPath ? `I was looking for: ${originalPath}` : "",
    ]
      .filter(Boolean)
      .join("\n")
  )

  const primaryHref = isSpecificApp
    ? `mailto:contact@sundaresan.dev?subject=${emailSubject}&body=${emailBody}`
    : "https://sundaresan.dev/contact"

  const secondaryHref = isSpecificApp
    ? "https://sundaresan.dev/contact"
    : "mailto:contact@sundaresan.dev"

  return (
    <>
      <AnimatedBackground />

      <main className="pointer-events-none flex min-h-svh items-center justify-center px-5 py-20 sm:px-8">
        <div className="pointer-events-auto w-full max-w-4xl text-center">
          <div
            className="animate-fade-in-up mb-6 flex flex-wrap justify-center gap-3 sm:mb-8"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <StatusBadge label={statusLabel} />
            {isSpecificApp && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium tracking-wide text-emerald-500 uppercase backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                </span>
                Usually back in &lt; 10 mins
              </div>
            )}
          </div>

          <h1
            className="animate-fade-in-up mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-tight"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            {title}{" "}
            <span className={cn("bg-linear-to-r bg-clip-text text-transparent", themeGradient)}>
              {highlight}
            </span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-md"
            style={{ animationDelay: "300ms", animationFillMode: "both" }}
          >
            {description}
          </p>

          {originalPath ? (
            <div
              className="animate-fade-in-up mx-auto mb-8 inline-flex max-w-full items-center gap-2 rounded-lg border border-border/50 bg-card/40 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm"
              style={{ animationDelay: "350ms", animationFillMode: "both" }}
            >
              <HugeiconsIcon icon={TimeQuarter02Icon} size={15} />
              <span className="truncate">Requested path: {originalPath}</span>
            </div>
          ) : null}

          <div
            className="animate-fade-in-up flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            <Button
              asChild
              size="lg"
              className="group h-11 w-full gap-2 rounded-xl px-7 text-sm font-medium sm:h-12 sm:w-auto"
            >
              <a
                href={primaryHref}
                target={isSpecificApp ? undefined : "_blank"}
                rel={isSpecificApp ? undefined : "noopener noreferrer"}
              >
                {primaryLabel}
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    isSpecificApp
                      ? "group-hover:translate-x-1"
                      : "-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  )}
                />
              </a>
            </Button>

            <span className="hidden text-muted-foreground/30 sm:inline">or</span>

            <a
              href={secondaryHref}
              target={isSpecificApp ? "_blank" : undefined}
              rel={isSpecificApp ? "noopener noreferrer" : undefined}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/40 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:border-border hover:text-foreground sm:w-auto sm:py-3"
            >
              <HugeiconsIcon
                icon={isSpecificApp ? ArrowRight02Icon : Mail01Icon}
                size={16}
                className={cn(
                  "transition-all duration-200",
                  isSpecificApp
                    ? "-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    : ""
                )}
              />
              {secondaryLabel}
            </a>
          </div>

          <p
            className="animate-fade-in-up mt-12 text-xs tracking-wide text-muted-foreground/40 sm:mt-16"
            style={{ animationDelay: "500ms", animationFillMode: "both" }}
          >
            &copy; {new Date().getFullYear()} Sundaresan V
          </p>
        </div>
      </main>
    </>
  )
}
