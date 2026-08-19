import type { Stat } from "../content";

/**
 * A single headline figure used to anchor a section that would otherwise be all prose.
 * Lime is a fill only, so the emphasis here comes from scale plus the accent rule.
 */
export function SectionMetric({ metric, className = "" }: { metric: Stat; className?: string }) {
  return (
    <div className={`flex items-baseline gap-2.5 ${className}`}>
      <span className="font-display text-4xl font-extrabold leading-none tracking-tight text-paper sm:text-5xl">
        {metric.value}
      </span>
      {metric.unit && (
        <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {metric.unit}
        </span>
      )}
      <span className="ml-1 max-w-xs text-sm leading-snug text-paper/70">{metric.label}</span>
    </div>
  );
}
