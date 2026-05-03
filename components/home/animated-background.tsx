"use client"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* 
          Large, soft ambient emerald glow in the center. 
          Reduced intensity to be even more subtle.
      */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-emerald-500/5 blur-[120px] mix-blend-screen" />

      {/* 
          Secondary, smaller core glow.
          Reduced intensity.
      */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] rounded-full bg-emerald-400/2 blur-[80px]" />

      {/* 
          Interactive Ripple Effect (Grid).
      */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <BackgroundRippleEffect rows={45} cols={90} cellSize={48} />
      </div>

      {/* Strong radial vignette - adjusted to show more boxes as requested */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,var(--background)_90%)]" />

      {/* Subtle noise texture - reduced opacity */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.01] brightness-100 contrast-100"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      /> */}
    </div>
  )
}
