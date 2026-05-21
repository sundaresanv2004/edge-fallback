"use client"

import {
  ArrowRight02Icon,
  Mail01Icon,
  TimeQuarter02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { StatusBadge } from "@/components/home/status-badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FallbackPageProps {
  appName?: string
  originalPath?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export function FallbackPage({ appName, originalPath }: FallbackPageProps) {
  const isSpecificApp = Boolean(appName)
  const themeGradient = "from-emerald-400 to-teal-400"

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
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-6 flex flex-wrap justify-center gap-3 sm:mb-8"
          >
            <StatusBadge label={statusLabel} />
            {isSpecificApp && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-primary uppercase backdrop-blur-xl shadow-lg">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                </span>
                Usually back in &lt; 5 mins
              </div>
            )}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            {title}{" "}
            <span
              className={cn("inline-block bg-linear-to-r", themeGradient)}
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent"
              }}
            >
              {highlight}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mx-auto mb-8 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-md"
          >
            {description}
          </motion.p>

          {originalPath ? (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
              className="mx-auto mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 font-sans text-xs text-muted-foreground backdrop-blur-xl shadow-lg"
            >
              <HugeiconsIcon icon={TimeQuarter02Icon} size={15} className="text-primary" />
              <span className="truncate">Requested path: {originalPath}</span>
            </motion.div>
          ) : null}

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 w-full gap-2 rounded-full bg-primary/10 border border-primary/20 px-8 font-sans text-sm font-medium text-primary shadow-[0_0_20px_calc(var(--primary)_/_15%)] backdrop-blur-xl transition-all hover:bg-primary/20 hover:border-primary/30 hover:scale-105 sm:w-auto"
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
                    "transition-transform duration-300",
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
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 font-sans text-sm font-medium text-muted-foreground backdrop-blur-xl transition-all hover:bg-white/10 hover:text-foreground hover:border-white/20 sm:w-auto"
            >
              <HugeiconsIcon
                icon={isSpecificApp ? ArrowRight02Icon : Mail01Icon}
                size={16}
                className={cn(
                  "transition-all duration-300",
                  isSpecificApp
                    ? "-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    : ""
                )}
              />
              {secondaryLabel}
            </a>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mt-16 font-sans text-xs tracking-wide text-muted-foreground/50"
          >
            &copy; {new Date().getFullYear()} Sundaresan V
          </motion.p>
        </div>
      </main>
    </>
  )
}
