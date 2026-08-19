import { useState, type ComponentType } from "react";
import {
  ArrowUpRight,
  Beef,
  Dumbbell,
  Handshake,
  Heart,
  Home,
  PackageCheck,
  Soup,
  UtensilsCrossed,
} from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";
import { Tag } from "../Tag";
import { Modal } from "../Modal";

const pillarIcons: ComponentType<{ size?: number; className?: string }>[] = [
  Beef,
  UtensilsCrossed,
  Heart,
  Home,
  Handshake,
  PackageCheck,
  Dumbbell,
  Soup,
];

export function Offer() {
  const { t } = useLanguage();
  const o = t.offer;
  // All eight pillars stay visible as tiles; only the depth moves into a dialog.
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : o.growthPillars[openIndex];

  return (
    <Section id="offer" tone="ink" weight="primary">
      <FadeIn>
        <Kicker>{o.kicker}</Kicker>
        <SectionTitle>{o.title}</SectionTitle>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">{o.intro}</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mt-14 font-display text-sm font-bold uppercase tracking-[0.2em] text-paper/65">
          {o.coreLabel}
        </p>
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {o.corePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-line bg-panel-2 p-7">
              <h3 className="font-display text-lg font-extrabold text-paper">{pillar.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {pillar.points.map((point) => (
                  <Tag key={point}>{point}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="mt-20">
        <FadeIn>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-paper/65">
            {o.growthLabel}
          </p>
          <p className="mt-3 max-w-2xl text-paper/70">{o.growthIntro}</p>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {o.growthPillars.map((pillar, i) => {
            const Icon = pillarIcons[i] ?? Beef;
            return (
              <FadeIn key={pillar.number} delay={(i % 4) * 0.06}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-haspopup="dialog"
                  className="group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-line bg-panel-2 p-6 text-left transition-colors hover:border-accent"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={26} aria-hidden="true" className="text-accent" />
                    <span className="font-display text-sm font-bold text-paper/65">{pillar.number}</span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-extrabold leading-snug text-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/70">{pillar.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wide text-accent">
                    {o.detailsLabel}
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setOpenIndex(null)}
        labelledBy="pillar-dialog-title"
        closeLabel={o.closeLabel}
      >
        {active && (
          <>
            <span className="font-display text-sm font-bold text-accent">{active.number}</span>
            <h3
              id="pillar-dialog-title"
              className="mt-2 max-w-lg font-display text-2xl font-extrabold leading-tight text-paper sm:text-3xl"
            >
              {active.title}
            </h3>
            <p className="mt-4 text-paper/75">{active.description}</p>
            {active.note && <p className="mt-3 text-sm italic text-paper/70">{active.note}</p>}

            <p className="mt-7 font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {o.benefitsLabel}
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {active.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-paper/80">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </>
        )}
      </Modal>
    </Section>
  );
}
