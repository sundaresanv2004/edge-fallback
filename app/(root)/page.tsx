import { ArrowRight02Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { StatusBadge } from "@/components/home/status-badge"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <AnimatedBackground />

      <main className="flex min-h-svh items-center justify-center px-5 py-20 sm:px-8">
        <div className="animate-fade-in-up w-full max-w-2xl text-center">
          {/* Status badge */}
          <div className="mb-6 flex justify-center sm:mb-8">
            <StatusBadge />
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-tight">
            This Site is{" "}
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              On a Break
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-md">
            The application previously hosted on this domain may have been put
            to sleep or moved to a new address.
            If you have any questions, need access, or would like to request
            bringing the application back, please feel free to contact me.
          </p>

          {/* CTA row */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group h-11 w-full gap-2 rounded-xl px-7 text-sm font-medium sm:h-12 sm:w-auto"
            >
              <a
                href="https://sundaresan.dev/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </Button>

            <span className="hidden text-muted-foreground/30 sm:inline">
              or
            </span>

            <a
              href="mailto:contact@sundaresan.dev"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/40 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:border-border hover:text-foreground sm:w-auto sm:py-3"
            >
              <HugeiconsIcon icon={Mail01Icon} size={16} />
              contact@sundaresan.dev
            </a>
          </div>

          {/* Footer */}
          <p className="mt-12 text-xs tracking-wide text-muted-foreground/40 sm:mt-16">
            &copy; {new Date().getFullYear()} Sundaresan V
          </p>
        </div>
      </main>
    </>
  )
}
