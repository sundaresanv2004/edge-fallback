interface StatusBadgeProps {
  label?: string
}

export function StatusBadge({ label = "System Offline" }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 border-b border-white/20 pb-1.5 pt-1 text-[10.5px] font-mono tracking-[0.22em] text-white/70 uppercase">
      <span className="relative flex h-1.5 w-1.5">
        <span className="relative inline-flex h-1.5 w-1.5 bg-primary" />
      </span>
      <span>{label}</span>
    </div>
  )
}
