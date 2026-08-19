import { useEffect, useState } from "react";

/**
 * Reports which of the given section ids is currently the reading position.
 *
 * Uses IntersectionObserver rather than a scroll handler, and a rootMargin that collapses the
 * viewport to a band across its middle, so exactly one section wins even when several are visible
 * on a tall screen.
 */
export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // Seed from geometry so the indicator is correct on a page loaded mid-document, before the
    // observer has delivered anything.
    const seed = () => {
      const line = window.innerHeight / 2;
      const hit = sections.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= line && r.bottom >= line;
      });
      if (hit) setActiveId(hit.id);
    };
    seed();

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }

        if (visible.size === 0) return;
        // Document order breaks ties so the spy never flickers between neighbours.
        let winner: string | null = null;
        for (const section of sections) {
          if (visible.has(section.id)) {
            winner = section.id;
            break;
          }
        }
        setActiveId(winner);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
