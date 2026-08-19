import type { ReactNode } from "react";
import { headingScale, useSectionWeight } from "./Section";

/**
 * Always renders an h2. Size comes from the enclosing Section's weight, so visual emphasis and
 * document structure stay independent — a "secondary" section is smaller, not a lower heading level.
 */
export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  const weight = useSectionWeight();
  const width = weight === "primary" ? "max-w-4xl" : "max-w-3xl";

  return (
    <h2
      className={`${width} font-display ${headingScale[weight]} font-extrabold leading-[1.08] tracking-tight text-paper ${className}`}
    >
      {children}
    </h2>
  );
}
