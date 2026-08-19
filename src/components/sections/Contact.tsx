import { useState, type FormEvent } from "react";
import { AtSign, Mail, Phone } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Kicker } from "../Kicker";
import { FadeIn } from "../FadeIn";
import { Logo } from "../Logo";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="contact" tone="ink" weight="primary">
      <FadeIn>
        <Kicker>{c.kicker}</Kicker>
        <SectionTitle>
          {c.title}
        </SectionTitle>
        <p className="mt-4 font-display text-lg font-bold text-accent">{c.subtitle}</p>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {c.people.map((person, i) => (
          <FadeIn key={person.name} delay={i * 0.06}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-panel-2 p-6 text-center">
              {/* Initials sit underneath as the fallback if the portrait fails to load. */}
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-accent bg-panel font-display text-xl font-extrabold text-accent">
                {initials(person.name)}
                {person.photo && (
                  <img
                    src={person.photo}
                    alt={c.photoAlt.replace("{name}", person.name)}
                    width={180}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-extrabold text-paper">{person.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-paper/65">{person.role}</p>
              {person.note && <p className="mt-1.5 text-xs text-paper/65">{person.note}</p>}

              <div className="mt-3 flex flex-col items-center">
                {person.phone && (
                  <a
                    href={`tel:${person.phone.replace(/\s+/g, "")}`}
                    className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 px-2 text-xs text-paper/75 hover:text-accent"
                  >
                    <Phone size={13} aria-hidden="true" /> {person.phone}
                  </a>
                )}
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 px-2 text-xs break-all text-paper/75 hover:text-accent"
                  >
                    <Mail size={13} aria-hidden="true" /> {person.email}
                  </a>
                )}
                {person.instagram && (
                  <a
                    href={`https://instagram.com/${person.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 px-2 text-xs text-paper/75 hover:text-accent"
                  >
                    <AtSign size={13} aria-hidden="true" /> {person.instagram}
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl rounded-2xl border border-line bg-panel-2 p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-paper/75">
              {c.form.name}
              <input
                type="text"
                required
                autoComplete="name"
                className="min-h-11 rounded-lg border border-control bg-canvas px-4 py-2.5 text-paper focus:border-accent"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-paper/75">
              {c.form.email}
              <input
                type="email"
                required
                autoComplete="email"
                className="min-h-11 rounded-lg border border-control bg-canvas px-4 py-2.5 text-paper focus:border-accent"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-paper/75 sm:col-span-2">
              {c.form.company}
              <input
                type="text"
                autoComplete="organization"
                className="min-h-11 rounded-lg border border-control bg-canvas px-4 py-2.5 text-paper focus:border-accent"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-paper/75 sm:col-span-2">
              {c.form.message}
              <textarea
                required
                rows={4}
                className="resize-none rounded-lg border border-control bg-canvas px-4 py-2.5 text-paper focus:border-accent"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full cursor-pointer rounded-full bg-lime py-3.5 font-display text-sm font-bold text-ink transition-opacity hover:opacity-90"
          >
            {c.form.submit}
          </button>
          {submitted && (
            <p role="status" className="mt-4 text-center text-sm font-medium text-accent">
              {c.form.success}
            </p>
          )}

          <p className="mt-5 text-center text-sm font-medium text-paper/75">{c.form.responseTime}</p>
          <p className="mt-2 text-center text-xs leading-relaxed text-paper/65">{c.form.privacy}</p>
        </form>
      </FadeIn>

      <div className="mt-20 flex flex-col items-center gap-6 border-t border-line pt-10 text-center">
        <Logo className="items-center" />
        <p className="max-w-md text-sm text-paper/65">{c.footer.note}</p>
        <p className="font-display text-xs uppercase tracking-widest text-paper/70">{c.footer.links}</p>
        <p className="text-xs text-paper/65">
          © {new Date().getFullYear()} {c.footer.copyright}
        </p>
      </div>
    </Section>
  );
}
