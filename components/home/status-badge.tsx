interface StatusBadgeProps {
  label?: string
}

export function StatusBadge({ label = "System Offline" }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-xl shadow-lg">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      <span className="opacity-90">{label}</span>
    </div>
  )
}
