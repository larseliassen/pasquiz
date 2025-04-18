# PåskeQuiz 🐣

En interaktiv påskequiz-applikasjon bygget med Next.js 14, TypeScript, og Shadcn UI.

## Funksjoner

- Norske påskerelaterte spørsmål
- Moderne og responsivt design
- Poengberegning og resultatvisning
- Mørk/lys modus støtte
- Fullt tilgjengelig (a11y)

## Teknisk Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI Primitives

## Kom i Gang

```bash
# Installer avhengigheter
npm install

# Kjør utviklingsserver
npm run dev

# Bygg for produksjon
npm run build

# Kjør produksjonsserver
npm start
```

## Prosjektstruktur

```
app/
  ├── page.tsx              # Hovedside
  ├── quiz/
  │   └── page.tsx         # Quiz-side
  ├── resultater/
  │   └── page.tsx         # Resultatsside
  └── layout.tsx           # Root layout
components/
  ├── quiz/                # Quiz-relaterte komponenter
  └── ui/                  # Gjenbrukbare UI-komponenter
lib/
  └── quiz-data.ts         # Quiz spørsmål og svar
``` 