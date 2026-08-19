import { useLanguage } from "../../lib/LanguageContext";
import { FadeIn } from "../FadeIn";

/**
 * The one dark, full-bleed moment on the page — the manifesto is the emotional peak, so it breaks
 * the light rhythm entirely instead of sitting in the usual container.
 *
 * Contrast rules invert here and were measured, not assumed:
 *   lime on #0A0A0A = 14.20:1 (the only place lime may carry text)
 *   accent #54700A on #0A0A0A = 3.49:1 — unusable, so it appears nowhere in this block
 *   white at /60 = 7.30:1, /70 = 9.71:1
 */
export function ClosingStatement() {
  const { t } = useLanguage();
  const c = t.ask.closing;
  const last = c.lines.length - 1;

  return (
    <section id="closing" className="relative overflow-clip bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(196,233,58,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-40 lg:px-8">
        <FadeIn>
          <div className="font-display text-[clamp(1.5rem,1rem+2.2vw,2.75rem)] font-extrabold leading-[1.25] tracking-tight">
            {c.lines.map((line, i) => (
              <p key={line} className={i === last ? "mt-8 text-lime" : "text-canvas/60"}>
                {line}
              </p>
            ))}
          </div>

          <div className="mt-14 h-px w-24 bg-lime" aria-hidden="true" />

          <p className="mt-10 font-display text-[clamp(1.25rem,1rem+1.1vw,2rem)] font-extrabold leading-tight text-canvas">
            {c.tagline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
