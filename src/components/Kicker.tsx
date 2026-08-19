export function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      <span
        className={`font-display text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-ink/70" : "text-accent"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
