import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";

export function WhoWeAre() {
  const { t } = useLanguage();
  const w = t.credibility.whoWeAre;

  return (
    <Section id="credibility" tone="ink">
      <FadeIn>
        <Kicker>{w.kicker}</Kicker>
        <SectionTitle>
          {w.title}
        </SectionTitle>
        <p className="mt-4 font-display text-lg font-bold text-accent">{w.subtitle}</p>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {[w.realMeal, w.astraFood].map((entity, i) => (
          <FadeIn key={entity.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-line bg-panel-2 p-8">
              <h3 className="font-display text-xl font-extrabold text-paper">{entity.title}</h3>
              <ul className="mt-6 space-y-4">
                {entity.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-paper/75">
                    <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15}>
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-lg font-semibold leading-snug text-paper/85 sm:text-xl">
          {w.closing}
        </p>
      </FadeIn>
    </Section>
  );
}
