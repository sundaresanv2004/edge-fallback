import { ArrowLeft02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { AnimatedBackground } from "@/components/home/animated-background"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <AnimatedBackground />

      <main className="flex min-h-svh items-center justify-center px-5 py-20 sm:px-8">
        <div className="animate-fade-in-up w-full max-w-lg text-center">
          {/* 404 number */}
          <p className="mb-4 text-6xl font-bold tracking-tighter text-muted-foreground/20 sm:text-8xl">
            404
          </p>

          {/* Headline */}
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Page{" "}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              Not Found
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Head back and try again.
          </p>

          {/* Back button */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group h-11 gap-2 rounded-xl px-7 text-sm font-medium sm:h-12"
          >
            <Link href="/">
              <HugeiconsIcon
                icon={ArrowLeft02Icon}
                size={16}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Go Back Home
            </Link>
          </Button>
        </div>
      </main>
    </>
  )
}
