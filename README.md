# Real Meal Global — web

Jednostránkový investorský a partnerský web pro **Real Meal Global** (partnerství Real Meal × Astra Food).

## Stack

Vite · React 19 · TypeScript · Tailwind v4 · Framer Motion · lucide-react

## Vývoj

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produkční build do dist/
npm run preview  # náhled produkčního buildu
```

## Struktura

| Cesta | Obsah |
|---|---|
| `src/content/{en,cs}.ts` | Veškeré texty, dvojjazyčně. Typ hlídá `types.ts`. |
| `src/lib/LanguageContext.tsx` | Přepínač EN/CZ (localStorage + detekce jazyka prohlížeče) |
| `src/components/sections/` | Jednotlivé sekce stránky |
| `src/components/` | Sdílené prvky (Section, Modal, CtaBanner, StatBand…) |
| `public/team/` | Portréty do sekce Kontakt |

Pořadí sekcí se řídí v `src/App.tsx`.

## Barvy — důležité pravidlo

Definice v `src/index.css` (`@theme`). Značková limetková **`--color-lime` slouží jen jako výplň**
(tlačítka, badge), protože na bílém pozadí má kontrast 1,39:1 a jako text je nečitelná.
Pro text, ikony, okraje a focus ring se používá **`--color-accent` `#54700A`** (5,7:1 na bílé).

Výjimka: tmavý blok se závěrečným prohlášením — tam je poměr obrácený a limetková text nést smí (14,2:1).

Na světlém pozadí je minimum pro běžný text `text-paper/60`.

## Přístupnost

Web je průběžně měřen na kontrast (WCAG AA), velikost dotykových cílů (44 px), focus stavy,
`prefers-reduced-motion` a strukturu nadpisů. Při úpravách to prosím needegradujte.

## Co ještě chybí

- Kontaktní formulář nemá backend — po odeslání jen zobrazí potvrzení, nikam se nic neposílá
- Vlastní favicon a OG obrázek (zatím výchozí z Vite)
- Produktové fotografie
