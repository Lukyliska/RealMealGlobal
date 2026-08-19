import { useLanguage } from "../lib/LanguageContext";
import { FadeIn } from "./FadeIn";

export function StatBand() {
  const { t } = useLanguage();
  const s = t.stats;

  return (
    // Canvas plus rules rather than a filled tone, so the band reads as part of the hero block.
    <section id="stats" aria-label={s.caption} className="relative border-y border-line bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="border-l-2 border-accent pl-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-paper sm:text-6xl">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-accent">
                        {stat.unit}
                      </span>
                    )}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-paper/70">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>

        <p className="mt-10 font-display text-sm font-semibold text-paper/65">{s.caption}</p>
      </div>
    </section>
  );
}
