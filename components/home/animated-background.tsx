"use client"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* 
          Large, soft ambient emerald glow in the center. 
          Using emerald-500/10 for a subtle but premium feel.
      */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen" />
      
      {/* 
          Secondary, smaller and slightly sharper glow to create a "core" effect.
      */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] rounded-full bg-emerald-400/5 blur-[80px]" />

      {/* 
          Interactive Ripple Effect (Grid).
          Centered and enlarged to avoid any cut-offs on ultra-wide screens.
          The opacity is kept low (40%) to keep it subtle as requested.
      */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <BackgroundRippleEffect rows={45} cols={90} cellSize={48} />
      </div>

      {/* Strong radial vignette to ensure the grid fades out smoothly into the background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />
      
      {/* Subtle noise texture for a premium grainy finish */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] brightness-100 contrast-100" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
    </div>
  )
}
