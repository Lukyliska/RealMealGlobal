import { useLanguage } from "../../lib/LanguageContext";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";
import { SectionMetric } from "../SectionMetric";

export function ManufacturingExcellence() {
  const { t } = useLanguage();
  const m = t.credibility.manufacturing;

  const columns = [
    { title: m.productionLabel, items: m.production },
    { title: m.flexibilityLabel, items: m.flexibility },
  ];

  return (
    <Section id="manufacturing" tone="panel" weight="secondary">
      <FadeIn>
        <Kicker>{m.kicker}</Kicker>
        <SectionTitle>
          {m.title}
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">{m.subtitle}</p>
        <SectionMetric metric={m.metric} className="mt-8" />
      </FadeIn>

      {/* Certifications lead: for government and retail buyers they are a decision criterion,
          so they get badge treatment instead of sitting in a bullet list. */}
      <FadeIn delay={0.05}>
        <div className="mt-14 rounded-2xl border border-accent/40 bg-panel-2 p-7">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {m.certificationsLabel}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {m.certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-xl border-2 border-accent px-5 py-3 font-display text-lg font-extrabold tracking-wide text-accent sm:text-xl"
              >
                {cert}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-paper/70">{m.certificationsNote}</p>
        </div>
      </FadeIn>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {columns.map((col, i) => (
          <FadeIn key={col.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-panel-2 p-7">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-paper/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
