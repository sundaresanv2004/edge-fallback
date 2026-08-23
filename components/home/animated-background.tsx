"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Soft noise texture overlay for premium feel */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay brightness-100 contrast-100 z-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Subtle top-left glow for depth */}
      <div className="absolute -top-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-white/5 blur-[120px] mix-blend-screen" />
    </div>
  )
}
