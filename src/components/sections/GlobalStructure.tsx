import { useLanguage } from "../../lib/LanguageContext";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";
import { SectionMetric } from "../SectionMetric";
import { headingScale } from "../Section";

/**
 * Edge-to-edge two-tone split rather than two cards in a grid: the layout itself carries the
 * "one company, two poles" idea, and it breaks the card rhythm that dominates the page.
 */
export function GlobalStructure() {
  const { t } = useLanguage();
  const g = t.credibility.globalStructure;
  const halves = [g.manufacturing, g.sales];

  return (
    <section id="global-structure" className="relative bg-canvas">
      <div className="mx-auto max-w-7xl px-6 pt-14 sm:pt-20 lg:px-8">
        <FadeIn>
          <Kicker>{g.kicker}</Kicker>
          <h2
            className={`max-w-3xl font-display ${headingScale.secondary} font-extrabold leading-[1.08] tracking-tight text-paper`}
          >
            {g.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">{g.subtitle}</p>
          <SectionMetric metric={g.metric} className="mt-8" />
        </FadeIn>
      </div>

      {/* Full-width split: no container, no card chrome — the tone change is the divider. */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2">
        {halves.map((half, i) => (
          <FadeIn key={half.location} delay={i * 0.1}>
            <div
              className={`h-full px-6 py-14 sm:px-10 sm:py-20 lg:px-14 ${
                i === 0 ? "bg-panel" : "border-t border-line bg-canvas lg:border-t-0 lg:border-l"
              }`}
            >
              <div className="mx-auto max-w-xl">
                <span className="font-display text-5xl font-extrabold leading-none text-accent/80">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-paper sm:text-2xl">
                  {half.location}
                </h3>
                <ul className="mt-8 space-y-4">
                  {half.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-line pb-4 text-base leading-snug text-paper/75 last:border-b-0"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
