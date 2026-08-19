import { MotionConfig } from "framer-motion";
import { LanguageProvider, useLanguage } from "./lib/LanguageContext";
import { Navbar } from "./components/Navbar";
import { SkipLink } from "./components/SkipLink";
import { ReadingProgress } from "./components/ReadingProgress";
import { Hero } from "./components/sections/Hero";
import { StatBand } from "./components/StatBand";
import { CtaBanner } from "./components/CtaBanner";
import { MobileCtaBar } from "./components/MobileCtaBar";
import { WhoWeAre } from "./components/sections/WhoWeAre";
import { Ecosystem } from "./components/sections/Ecosystem";
import { GlobalStructure } from "./components/sections/GlobalStructure";
import { ManufacturingExcellence } from "./components/sections/ManufacturingExcellence";
import { Offer } from "./components/sections/Offer";
import { WhoWereLookingFor } from "./components/sections/WhoWereLookingFor";
import { ClosingStatement } from "./components/sections/ClosingStatement";
import { Contact } from "./components/sections/Contact";

/** Separate from App so it can read the language context App itself provides. */
function Page() {
  const { t } = useLanguage();

  return (
    <div id="top" className="min-h-screen bg-canvas">
      <SkipLink />
      <ReadingProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <StatBand />
        <WhoWeAre />
        <Ecosystem />
        <GlobalStructure />
        <ManufacturingExcellence />
        <Offer />
        <CtaBanner block={t.cta.afterOffer} variant="solid" />
        <WhoWereLookingFor />
        <CtaBanner block={t.cta.afterAsk} variant="quiet" />
        <ClosingStatement />
        <Contact />
      </main>
      <MobileCtaBar />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      {/* reducedMotion="user" makes Framer's JS-driven animations honor the OS setting —
          the CSS media query in index.css cannot reach them. */}
      <MotionConfig reducedMotion="user">
        <Page />
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
