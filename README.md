# Erni – Landing Page

Marketing-Landing-Page für **Erni – Mein digitales Kochbuch** (myerni.de).

Next.js 15 · TypeScript · TailwindCSS 3 · Framer Motion · react-icons

## Lokal starten

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Deploy auf Vercel

1. Projekt zu GitHub pushen
2. Auf [vercel.com](https://vercel.com) → "Add New Project" → Repo importieren (Framework wird automatisch als Next.js erkannt)
3. Deploy klicken – fertig

### Domain myerni.de (Ionos) verbinden

1. Vercel → Projekt → Settings → Domains → `myerni.de` hinzufügen
2. Bei Ionos die Vercel-Nameserver eintragen: `ns1.vercel-dns.com` und `ns2.vercel-dns.com`
3. Warten (bis zu 24 h), Vercel stellt SSL automatisch aus

## Vor dem Launch (TODO)

- [ ] Echte App-Store-Links in `components/Hero.tsx` und `components/CTA.tsx` eintragen (aktuell Platzhalter)
- [ ] `app/impressum/page.tsx` ausfüllen (§ 5 TMG)
- [ ] `app/datenschutz/page.tsx` ausfüllen (z. B. Generator von e-recht24.de)
- [ ] Optional: OG-Image (`opengraph-image.png`, 1200×630) in `app/` legen

## Struktur

```
app/
  layout.tsx        → SEO-Metadata, Font (Inter, selbst gehostet – DSGVO-freundlich)
  page.tsx          → Setzt alle Sections zusammen
  globals.css       → Glaseffekte, Gradients, Scan-Animation
  datenschutz/      → Platzhalter
  impressum/        → Platzhalter
components/
  Navigation.tsx    → Fixe Glas-Navbar mit Mobile-Menü
  Hero.tsx          → Gradient-Hero mit Phone-Mockup + Scan-Animation
  Features.tsx      → 4er-Grid (Scan · Chat · Planer · Kochbuch)
  Testimonials.tsx  → 3er-Grid mit animierten 5-Stern-Ratings
  CTA.tsx           → Großer Download-Call-to-Action
  Footer.tsx        → Links, Datenschutz, Impressum
```

## CI-Farben

| Farbe | Hex | Tailwind-Klasse |
|---|---|---|
| Teal (Primär) | `#1D9E75` | `teal` |
| Blau (Sekundär) | `#85B7EB` | `skyblue` |
| Amber (Akzent) | `#EF9F27` | `amber` |
| Hintergrund | `#f0f4f3` | `cream` |
