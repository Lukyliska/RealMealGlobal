import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "../lib/LanguageContext";
import { useScrollSpy } from "../lib/useScrollSpy";

const links: { key: keyof ReturnType<typeof useLanguage>["t"]["nav"]; href: string }[] = [
  { key: "about", href: "#credibility" },
  { key: "offer", href: "#offer" },
  { key: "contact", href: "#contact" },
];

const SPY_IDS = links.map((l) => l.href.slice(1));

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SPY_IDS);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);
    };
    // rAF-coalesced: one read per frame rather than one per scroll event.
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-4 top-4 z-50 sm:inset-x-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur transition-colors sm:px-6 ${
          scrolled ? "border-line bg-canvas/90 shadow-sm" : "border-transparent bg-canvas/60"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                // aria-current carries the state for assistive tech; the underline and weight
                // carry it visually, so colour is never the only signal.
                aria-current={isActive ? "location" : undefined}
                className={`relative inline-flex min-h-11 min-w-11 items-center justify-center px-2 font-display text-sm transition-colors ${
                  isActive ? "font-extrabold text-accent" : "font-semibold text-paper/85 hover:text-accent"
                }`}
              >
                {t.nav[link.key]}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-1 bottom-1.5 h-0.5 rounded-full bg-accent"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-line px-3 font-display text-xs font-bold tracking-wide text-paper/85 transition-colors hover:border-accent hover:text-accent"
            aria-label={lang === "en" ? "Switch to Czech" : "Přepnout do angličtiny"}
          >
            {lang === "en" ? "CS" : "EN"}
          </button>
          <a
            href="#contact"
            className="hidden min-h-11 cursor-pointer items-center rounded-full bg-lime px-4 font-display text-sm font-bold text-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-line text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-2xl border border-line bg-canvas/95 p-4 backdrop-blur lg:hidden">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={`flex min-h-11 items-center gap-2 rounded-lg px-3 font-display text-sm hover:bg-panel-2 hover:text-accent ${
                  isActive ? "font-extrabold text-accent" : "font-semibold text-paper/85"
                }`}
              >
                {isActive && (
                  <span aria-hidden="true" className="h-4 w-0.5 rounded-full bg-accent" />
                )}
                {t.nav[link.key]}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-lime px-3 text-center font-display text-sm font-bold text-ink"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
