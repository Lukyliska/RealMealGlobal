import { ArrowRight } from "lucide-react";
import type { CtaBlock } from "../content";
import { FadeIn } from "./FadeIn";

/**
 * "solid" is the loud mid-page interrupt: a full lime fill carrying dark text and a dark button
 * (lime can never carry text, so on a lime ground the button inverts to ink instead).
 * "quiet" sits closer to the closing statement and must not compete with it.
 */
export function CtaBanner({ block, variant = "solid" }: { block: CtaBlock; variant?: "solid" | "quiet" }) {
  const solid = variant === "solid";

  return (
    <section aria-labelledby={`cta-${variant}`} className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <FadeIn>
          <div
            className={`flex flex-col gap-6 rounded-3xl px-7 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between ${
              solid ? "bg-lime" : "border-2 border-accent/40 bg-panel"
            }`}
          >
            <div className="max-w-2xl">
              <h2
                id={`cta-${variant}`}
                className={`font-display text-2xl font-extrabold leading-tight sm:text-3xl ${
                  solid ? "text-ink" : "text-paper"
                }`}
              >
                {block.title}
              </h2>
              <p className={`mt-3 text-base leading-relaxed ${solid ? "text-ink/80" : "text-paper/75"}`}>
                {block.body}
              </p>
            </div>

            <a
              href="#contact"
              className={`group inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                // text-canvas, not text-paper: in the light palette "paper" is the dark body
                // text colour, which on an ink fill measures 1.1:1.
                solid ? "bg-ink text-canvas" : "bg-lime text-ink"
              }`}
            >
              {block.button}
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
