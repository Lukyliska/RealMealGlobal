import { useLanguage } from "../lib/LanguageContext";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {t.nav.skipToContent}
    </a>
  );
}
