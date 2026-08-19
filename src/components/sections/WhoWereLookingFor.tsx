import { Building2, Handshake, Landmark } from "lucide-react";
import type { ComponentType } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";

const icons: ComponentType<{ size?: number; className?: string }>[] = [Landmark, Building2, Handshake];

export function WhoWereLookingFor() {
  const { t } = useLanguage();
  const l = t.ask.lookingFor;

  return (
    <Section id="looking-for" tone="panel">
      <FadeIn>
        <Kicker>{l.kicker}</Kicker>
        <SectionTitle>
          {l.title}
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">{l.intro}</p>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {l.groups.map((group, i) => {
          const Icon = icons[i] ?? Handshake;
          return (
            <FadeIn key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-panel-2 p-7">
                <Icon size={26} aria-hidden="true" className="text-accent" />
                <h3 className="mt-4 font-display text-base font-extrabold text-paper">{group.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-paper/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.15}>
        <p className="mx-auto mt-14 max-w-xl text-center font-display text-lg font-bold text-accent">
          {l.closing}
        </p>
      </FadeIn>
    </Section>
  );
}
