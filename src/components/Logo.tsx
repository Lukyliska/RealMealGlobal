export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex min-h-11 flex-col justify-center leading-none select-none ${className}`}
      aria-label="Real Meal Global — home"
    >
      <span className="font-display font-extrabold text-xl tracking-tight text-paper">
        Real Meal
      </span>
      <span className="font-display font-semibold text-[10px] tracking-[0.35em] text-accent -mt-0.5">
        GLOBAL
      </span>
    </a>
  );
}
