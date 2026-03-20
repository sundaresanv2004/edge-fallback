interface StatusBadgeProps {
  label?: string
}

export function StatusBadge({ label = "Currently Offline" }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border/40 bg-muted/40 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
      </span>
      {label}
    </div>
  )
}
