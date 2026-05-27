"use client"

import { RotateClockwiseIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { motion } from "motion/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <AnimatedBackground />

      <main className="flex min-h-svh items-center justify-center px-5 py-20 sm:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-lg text-center"
        >
          {/* Error number */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4 text-6xl font-bold tracking-tighter text-muted-foreground/20 sm:text-8xl"
          >
            500
          </motion.p>

          {/* Headline */}
          <h1 className="mb-3 text-2xl font-heading font-extrabold tracking-tight text-foreground sm:text-3xl">
            Something{" "}
            <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Went Wrong
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-sm:px-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            An unexpected error occurred. Please try again, or head back to the
            home page if the issue persists.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={reset}
              className="group h-11 w-full gap-2 rounded-xl bg-foreground px-7 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:h-12 sm:w-auto"
            >
              <HugeiconsIcon
                icon={RotateClockwiseIcon}
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
              Try Again
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 w-full gap-2 rounded-xl border-border/50 bg-card/40 px-7 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-border hover:text-foreground sm:h-12 sm:w-auto"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </>
  )
}
