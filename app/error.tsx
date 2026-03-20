"use client"

import { RotateClockwiseIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { AnimatedBackground } from "@/components/home/animated-background"
import { Button } from "@/components/ui/button"

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
        <div className="animate-fade-in-up w-full max-w-lg text-center">
          {/* Error icon */}
          <p className="mb-4 text-6xl font-bold tracking-tighter text-muted-foreground/20 sm:text-8xl">
            500
          </p>

          {/* Headline */}
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Something{" "}
            <span className="bg-gradient-to-r from-red-300 to-destructive bg-clip-text text-transparent">
              Went Wrong
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            An unexpected error occurred. Please try again, and if the issue
            persists, contact the developer.
          </p>

          {/* Retry button */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={reset}
              className="group h-11 gap-2 rounded-xl px-7 text-sm font-medium sm:h-12"
            >
              <HugeiconsIcon
                icon={RotateClockwiseIcon}
                size={16}
                className="transition-transform duration-200 group-hover:rotate-45"
              />
              Try Again
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 gap-2 rounded-xl px-7 text-sm font-medium sm:h-12"
            >
              <a href="/">Go Home</a>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
