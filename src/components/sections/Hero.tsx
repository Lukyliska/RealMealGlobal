import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";
import { BadgePill } from "../BadgePill";
import { GlobeVisual } from "../GlobeVisual";
import { StampBadge } from "../StampBadge";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero" className="relative overflow-clip bg-canvas pt-40 pb-24 sm:pt-48">
      {/* Lime wash needs more weight on white than it did on black to stay perceptible. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,233,58,0.30),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-paper/70">
              {h.kicker}
            </span>
            <BadgePill>{h.badge}</BadgePill>
          </div>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            {h.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl font-display text-lg font-bold text-accent sm:text-xl">
            {h.subtitle}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {h.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-display text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              {h.ctaPrimary}
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#offer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-6 py-3.5 font-display text-sm font-bold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
        >
          <GlobeVisual className="h-full w-full text-line" />
          <StampBadge
            lines={[h.badge.split(" · ")[0], h.badge.split(" · ")[1]]}
            className="absolute -bottom-6 -right-2 bg-canvas shadow-xl sm:right-4"
          />
        </motion.div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 hidden h-11 w-11 -translate-x-1/2 cursor-pointer flex-col items-center justify-center gap-1 text-paper/55 transition-colors hover:text-accent sm:flex"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={22} aria-hidden="true" className="animate-bounce" />
      </a>
    </section>
  );
}
