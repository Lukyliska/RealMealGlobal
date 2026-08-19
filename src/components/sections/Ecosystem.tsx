import { Globe, Snowflake, Sun } from "lucide-react";
import type { ComponentType } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";
import { SectionMetric } from "../SectionMetric";

const icons: ComponentType<{ size?: number; className?: string }>[] = [Globe, Snowflake, Sun];

export function Ecosystem() {
  const { t } = useLanguage();
  const e = t.credibility.ecosystem;

  return (
    <Section id="ecosystem" tone="panel">
      <FadeIn>
        <Kicker>{e.kicker}</Kicker>
        <SectionTitle>
          {e.title}
        </SectionTitle>
        <p className="mt-4 font-display text-lg font-bold text-accent">{e.subtitle}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">{e.intro}</p>
        <SectionMetric metric={e.metric} className="mt-8" />
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {e.platforms.map((platform, i) => {
          const Icon = icons[i] ?? Globe;
          return (
            <FadeIn key={platform.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  platform.highlight
                    ? "border-accent bg-panel-2"
                    : "border-line bg-canvas"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon size={28} aria-hidden="true" className={platform.highlight ? "text-accent" : "text-paper/65"} />
                  {platform.focus && (
                    <span className="rounded-full bg-lime px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wide text-ink">
                      {platform.focus}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold text-paper">{platform.name}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-paper/70">
                  {platform.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper/55" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.15}>
        <p className="mx-auto mt-12 max-w-xl text-center font-display text-base font-semibold text-paper/75">
          {e.footer}
        </p>
      </FadeIn>
    </Section>
  );
}
