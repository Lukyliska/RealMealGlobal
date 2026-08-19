import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

const MOBILE_QUERY = "(max-width: 639px)";

/**
 * Under the sm breakpoint the header CTA is hidden, so the page would otherwise offer no
 * reachable call to action between the hero and the form. The bar retires once the contact
 * section scrolls into view so it never sits on top of the form or the footer.
 */
export function MobileCtaBar() {
  const { t } = useLanguage();
  const bar = t.cta.mobileBar;

  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    const hero = document.getElementById("hero");
    const observers: IntersectionObserver[] = [];

    if (contact) {
      const io = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { rootMargin: "0px" });
      io.observe(contact);
      observers.push(io);
    }
    if (hero) {
      // Show the bar only after the hero (which has its own CTA) has scrolled away.
      const io = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { rootMargin: "0px" });
      io.observe(hero);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const visible = isMobile && !dismissed && pastHero && !atContact;

  useEffect(() => {
    // Reserve space so the bar never covers the last line of content.
    document.body.style.paddingBottom = visible ? "5.5rem" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 px-4 py-3 backdrop-blur sm:hidden">
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 font-display text-sm font-bold text-paper">{bar.message}</p>
        <a
          href="#contact"
          className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-lime px-4 font-display text-sm font-bold text-ink"
        >
          {bar.button}
          <ArrowRight size={15} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={bar.dismiss}
          className="inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-paper/70"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
