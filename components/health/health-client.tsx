"use client"

import { useEffect, useState } from "react"
import {
  CheckmarkBadge01Icon,
  CloudServerIcon,
  TimeQuarter02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { cn } from "@/lib/utils"

interface HealthClientProps {
  initialUptime: number
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export function HealthClient({ initialUptime }: HealthClientProps) {
  const [uptime, setUptime] = useState(initialUptime)
  const themeGradient = "from-emerald-500 to-teal-500"

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatUptime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)

    const parts = []
    if (d > 0) parts.push(`${d}d`)
    if (h > 0) parts.push(`${h}h`)
    if (m > 0) parts.push(`${m}m`)
    parts.push(`${s}s`)

    return parts.join(" ")
  }

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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-500 uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              All Systems Operational
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-tight"
          >
            Service is{" "}
            <span 
              className={cn("inline-block bg-linear-to-r", themeGradient)}
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent"
              }}
            >
              Healthy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-md"
          >
            The edge fallback infrastructure is actively running and ready to handle incoming requests and dynamic routing.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mx-auto mb-8 flex max-w-fit flex-wrap items-center justify-center gap-4 rounded-2xl border border-border/50 bg-card/40 p-4 backdrop-blur-sm sm:gap-10 sm:p-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 sm:h-10 sm:w-10">
                <HugeiconsIcon icon={CloudServerIcon} size={18} className="sm:hidden" />
                <HugeiconsIcon icon={CloudServerIcon} size={20} className="hidden sm:block" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Edge Router</p>
                <p className="font-mono text-xs text-foreground sm:text-sm">Online</p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-border/50 sm:block sm:h-10" />

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 sm:h-10 sm:w-10">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} size={18} className="sm:hidden" />
                <HugeiconsIcon icon={CheckmarkBadge01Icon} size={20} className="hidden sm:block" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Status</p>
                <p className="font-mono text-xs text-foreground sm:text-sm">OK</p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-border/50 sm:block sm:h-10" />

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 sm:h-10 sm:w-10">
                <HugeiconsIcon icon={TimeQuarter02Icon} size={18} className="sm:hidden" />
                <HugeiconsIcon icon={TimeQuarter02Icon} size={20} className="hidden sm:block" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Uptime</p>
                <p className="font-mono text-xs tabular-nums text-foreground sm:text-sm">{formatUptime(uptime)}</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mt-12 text-xs tracking-wide text-muted-foreground/40 sm:mt-16"
          >
            &copy; {new Date().getFullYear()} Sundaresan V
          </motion.p>
        </div>
      </main>
    </>
  )
}
