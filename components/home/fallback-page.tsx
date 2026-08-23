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
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
}

export function FallbackPage({ appName, originalPath }: FallbackPageProps) {
  const isSpecificApp = Boolean(appName)

  const title = isSpecificApp ? `${appName} is` : "Apps are"
  const highlight = "available on request."
  const description = isSpecificApp
    ? "This app is sleeping to save server resources. Drop me a message and I'll bring it back online for you."
    : "Some of my projects are currently sleeping to save resources. If you were looking for something, just reach out."

  const statusLabel = isSpecificApp ? "Sleeping" : "Fallback mode"
  const primaryLabel = isSpecificApp ? "Request Access" : "Get in touch"
  const secondaryLabel = isSpecificApp ? "Contact directly" : "Email directly"

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

  const emailAddress = ["contact", "sundaresan.dev"].join("@")
  
  const primaryActionUrl = isSpecificApp
    ? `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
    : "https://sundaresan.dev/contact"

  const secondaryActionUrl = isSpecificApp
    ? "https://sundaresan.dev/contact"
    : `mailto:${emailAddress}`

  const handleMailToClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("mailto:")) {
      e.preventDefault()
      window.location.href = url
    }
  }

  return (
    <>
      <AnimatedBackground />

      <main className="pointer-events-none flex min-h-[100dvh] items-center justify-start px-6 py-24 sm:px-12 md:px-24">
        <div className="pointer-events-auto w-full max-w-3xl text-left">
          
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...springTransition, delay: 0.1 }}
            className="mb-10 flex flex-wrap items-center gap-4"
          >
            <StatusBadge label={statusLabel} />
            {isSpecificApp && (
              <div 
                title="Our servers spin down when idle to save energy. It takes a few minutes to boot them back up."
                className="inline-flex items-center gap-2 border-b border-white/20 pb-1.5 pt-1 text-[10.5px] font-mono tracking-[0.22em] text-white/50 uppercase cursor-help"
              >
                Usually back in &lt; 5 mins
              </div>
            )}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...springTransition, delay: 0.2 }}
            className="mb-6 font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.05]"
          >
            {title}{" "}
            <span className="text-white/60">
              {highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...springTransition, delay: 0.3 }}
            className="mb-10 max-w-xl font-sans text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {description}
          </motion.p>

          {/* Requested Path */}
          {originalPath ? (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...springTransition, delay: 0.35 }}
              className="mb-10 inline-flex max-w-full items-center gap-3 border-l-2 border-white/20 pl-4 font-sans text-sm text-white/50"
            >
              <HugeiconsIcon icon={TimeQuarter02Icon} size={16} className="text-white/70" />
              <span className="truncate">Path: {originalPath}</span>
            </motion.div>
          ) : null}

          {/* Actions */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...springTransition, delay: 0.4 }}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 w-full gap-3 rounded-none bg-white px-8 font-sans text-sm font-semibold text-black transition-transform hover:bg-white/90 active:scale-[0.98] sm:w-auto"
            >
              <a
                href={primaryActionUrl.startsWith("mailto:") ? "#" : primaryActionUrl}
                onClick={(e) => handleMailToClick(e, primaryActionUrl)}
                target={isSpecificApp ? undefined : "_blank"}
                rel={isSpecificApp ? undefined : "noopener noreferrer"}
              >
                {primaryLabel}
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={18}
                  className={cn(
                    "transition-transform duration-300 ease-out",
                    isSpecificApp
                      ? "group-hover:translate-x-1"
                      : "-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  )}
                />
              </a>
            </Button>

            <a
              href={secondaryActionUrl.startsWith("mailto:") ? "#" : secondaryActionUrl}
              onClick={(e) => handleMailToClick(e, secondaryActionUrl)}
              target={isSpecificApp ? "_blank" : undefined}
              rel={isSpecificApp ? "noopener noreferrer" : undefined}
              className="group inline-flex h-12 w-full items-center justify-center gap-3 px-6 font-sans text-sm font-medium text-white/60 transition-colors hover:text-white sm:w-auto"
            >
              <HugeiconsIcon
                icon={isSpecificApp ? ArrowRight02Icon : Mail01Icon}
                size={18}
                className={cn(
                  "transition-all duration-300 ease-out",
                  isSpecificApp
                    ? "-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    : ""
                )}
              />
              {secondaryLabel}
            </a>
          </motion.div>
          
        </div>
      </main>
    </>
  )
}
