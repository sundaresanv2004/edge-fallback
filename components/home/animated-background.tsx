"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Soft noise texture overlay for premium feel */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay brightness-100 contrast-100 z-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Base gradient mesh - fluid orbs */}
      <div className="absolute top-[20%] left-[20%] h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] animate-orb-float mix-blend-screen" />
      
      <div className="absolute bottom-[20%] right-[10%] h-[40vw] w-[60vw] translate-x-1/4 translate-y-1/4 rounded-full bg-teal-500/15 blur-[140px] animate-orb-drift mix-blend-screen" style={{ animationDelay: '-5s' }} />
      
      <div className="absolute top-[60%] left-[30%] h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[100px] animate-orb-float mix-blend-screen" style={{ animationDelay: '-12s', animationDuration: '22s' }} />

      {/* Gentle vignette to focus the center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_100%)] z-0" />
    </div>
  )
}
