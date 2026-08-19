export type Lang = "en" | "cs";

export interface GrowthPillar {
  number: string;
  title: string;
  /** One line shown on the closed tile — the full description lives in the dialog. */
  short: string;
  description: string;
  note?: string;
  benefits: string[];
  tags: string[];
}

export interface CorePillar {
  title: string;
  points: string[];
}

export interface Platform {
  name: string;
  focus?: string;
  points: string[];
  highlight: boolean;
}

export interface Person {
  name: string;
  role: string;
  /** Path under public/. Initials stay behind the image as the fallback if it fails to load. */
  photo?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  note?: string;
}

export interface PartnerGroup {
  title: string;
  items: string[];
}

export interface CtaBlock {
  title: string;
  body: string;
  button: string;
}

/** A headline figure: big display number plus the words that qualify it. */
export interface Stat {
  /** Rendered at display size — keep it short ("24", "1M+", "200K+"). */
  value: string;
  /** Unit or short qualifier shown next to the value ("months", "meals"). */
  unit?: string;
  label: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    offer: string;
    contact: string;
    cta: string;
    skipToContent: string;
  };
  hero: {
    kicker: string;
    badge: string;
    title: string[];
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    confidential: string;
  };
  /** Headline figures shown as a band directly under the hero. */
  stats: {
    caption: string;
    items: Stat[];
  };
  cta: {
    afterOffer: CtaBlock;
    afterAsk: CtaBlock;
    /** Sticky bottom bar shown only under the sm breakpoint, where the header CTA is hidden. */
    mobileBar: {
      message: string;
      button: string;
      dismiss: string;
    };
  };
  credibility: {
    whoWeAre: {
      kicker: string;
      title: string;
      subtitle: string;
      realMeal: { title: string; points: string[] };
      astraFood: { title: string; points: string[] };
      closing: string;
    };
    ecosystem: {
      kicker: string;
      title: string;
      subtitle: string;
      intro: string;
      metric: Stat;
      platforms: Platform[];
      footer: string;
    };
    globalStructure: {
      kicker: string;
      title: string;
      subtitle: string;
      metric: Stat;
      manufacturing: { location: string; points: string[] };
      sales: { location: string; points: string[] };
    };
    manufacturing: {
      kicker: string;
      title: string;
      subtitle: string;
      metric: Stat;
      productionLabel: string;
      production: string[];
      certificationsLabel: string;
      /** Rendered as badges — keep these to short scheme names (IFS, HACCP, HALAL). */
      certifications: string[];
      certificationsNote: string;
      flexibilityLabel: string;
      flexibility: string[];
    };
  };
  offer: {
    kicker: string;
    title: string;
    intro: string;
    coreLabel: string;
    corePillars: CorePillar[];
    growthLabel: string;
    growthIntro: string;
    benefitsLabel: string;
    detailsLabel: string;
    closeLabel: string;
    growthPillars: GrowthPillar[];
  };
  ask: {
    lookingFor: {
      kicker: string;
      title: string;
      intro: string;
      groups: PartnerGroup[];
      closing: string;
    };
    closing: {
      lines: string[];
      tagline: string;
    };
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    /** Alt-text template; "{name}" is substituted per person. */
    photoAlt: string;
    people: Person[];
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
      responseTime: string;
      privacy: string;
    };
    footer: {
      note: string;
      links: string;
      copyright: string;
    };
  };
}
