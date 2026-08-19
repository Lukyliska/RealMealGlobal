import { createContext, useContext, type ReactNode } from "react";

/**
 * How much visual weight a section carries. This drives heading *size* and vertical rhythm only —
 * never the heading *level*, which stays h2 for every section so the document outline is unaffected.
 */
export type SectionWeight = "primary" | "default" | "secondary";

const WeightContext = createContext<SectionWeight>("default");

export const useSectionWeight = () => useContext(WeightContext);

/** Fluid so the jump between tiers survives down to 375px without a separate mobile scale. */
export const headingScale: Record<SectionWeight, string> = {
  primary: "text-[clamp(2.25rem,1.15rem+4.4vw,3.75rem)]",
  default: "text-[clamp(1.875rem,1.3rem+2.3vw,3rem)]",
  secondary: "text-[clamp(1.625rem,1.35rem+1.1vw,2.5rem)]",
};

const padding: Record<SectionWeight, string> = {
  primary: "py-24 sm:py-32",
  default: "py-20 sm:py-28",
  secondary: "py-14 sm:py-20",
};

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "panel";
  weight?: SectionWeight;
}

export function Section({ id, children, className = "", tone = "ink", weight = "default" }: SectionProps) {
  const bg = tone === "panel" ? "bg-panel" : "bg-canvas";
  return (
    <WeightContext.Provider value={weight}>
      <section id={id} className={`relative ${bg} ${className}`}>
        <div className={`mx-auto max-w-7xl px-6 ${padding[weight]} lg:px-8`}>{children}</div>
      </section>
    </WeightContext.Provider>
  );
}
