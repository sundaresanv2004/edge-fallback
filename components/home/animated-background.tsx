"use client"

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* Large ambient orbs */}
      <div className="animate-float-1 absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="animate-float-2 absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-chart-2/8 blur-[130px]" />
      <div className="animate-float-3 absolute -bottom-40 left-1/4 h-[550px] w-[550px] rounded-full bg-chart-1/6 blur-[140px]" />
      <div className="animate-float-4 absolute right-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-chart-3/6 blur-[120px]" />

      {/* Noise texture overlay
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      /> */}

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />
    </div>
  )
}
