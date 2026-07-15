# Erni Landing Page – Fortschritt & Notizen

## Update 15. Juli 2026 – Unterseiten fertig
- **Navigation + Footer global** ins `layout.tsx` gezogen (vorher nur Homepage) → erscheinen jetzt auf allen Unterseiten. Aus `app/page.tsx` entfernt.
- **FAQ** (`app/faq`): Antworten mit echten Fakten (Testphase/Abo, iPhone im Store + Android-Warteliste, keine unbelegbaren Zahlen, „unterstützt von Ernährungswissenschaftlern & Hobbyköchen", keine KI-Nennung). Kontakt-Button mit Betreff.
- **Blog** (`app/blog`): 20 echte Artikel in `lib/posts.ts`, dynamische Route `app/blog/[slug]/page.tsx` (generateStaticParams + Metadata + Article-Schema), Übersicht verlinkt Karten. Sitemap um 20 URLs ergänzt.
- **4 Feature-Detailseiten + Übersicht**: echte Lifestyle-Bilder (`public/lifestyle/`), Claims ehrlich (Sprachen/Fehler/„10–15 Sek."/offline/Nährwerte/„2 Std"/„unbegrenzt" raus), Blau→CI, KI-Coach Mint→Teal, Google Play → „Bald für Android" (Warteliste). Neue „Warum …?"-Vorteils-Sektion je Seite.
- **Rechtstexte**: `app/impressum` (§5 DDG, Privatperson: Marie-Claire Schnur, Lembergstraße 3, 70188 Stuttgart) + `app/datenschutz` (DSGVO-Entwurf, Vercel-Hosting, keine Tracking-Tools; mit Prüf-Hinweis).
- **Bot-Schutz E-Mail**: `components/ObfuscatedEmail.tsx` – kein Klartext-`mailto`/E-Mail mehr im HTML, wird per JS zusammengesetzt (Footer, FAQ, Blog, 4× Android-Buttons, Impressum/Datenschutz). SEO-Schema: Platzhalter-Telefon/Mail raus.
- **Instagram** überall korrekt: `instagram.com/my.erni`.
- Alles `npx tsc --noEmit` grün. Voller `next build` in der Sandbox nicht durchlaufbar (Zeitlimit) → lokal prüfen.

### Bekannte Kleinigkeiten
- Zwei ungenutzte Testbilder in `public/lifestyle/` (kochbuch-szene.jpg, rezept-szene.jpg) – Sandbox durfte sie nicht löschen; lokal entfernen.
- Reserve-Bild `public/lifestyle/einkaufszettel.jpg` (Wochenplaner-Alternative), aktuell nicht eingebunden.

---

**Stand:** 14. Juli 2026
**Projekt:** `~/Desktop/Erni/09_Webseite/erni-landing` (Next.js 15, React, TailwindCSS 3, Framer Motion)
**Domain:** myerni.de · **GitHub:** github.com/ErniKochbuch/erni-landing · **Deploy:** Vercel

## Arbeitsweise
Homepage Sektion für Sektion durchgehen: Code zeigen → Vorschau → Feedback → ändern → neue Vorschau. Iterativ, granular (kein Bulk).

## CI-Farben
- Teal `#1D9E75` (primary) · Mint `#a8e6cf` · Honey `#f2c94c` · Cream `#f0f4f3`

---

## Homepage – Status: KOMPLETT durchgegangen ✅

### 1. Navigation (`components/Navigation.tsx`) – FERTIG
- Navbar **immer weiß** (kein transparenter Zustand mehr), dezenter Schatten
- **Grünes „my.erni"-Logo** links (`/logo.png`), doppelter „Erni"-Text entfernt
- „Stimmen" aus dem Menü entfernt → nur noch **Features, FAQ, Blog**
- Logo-Link → `/`; Links Grau, Hover Teal
- **„App laden"-Button im Verlauf** Teal→Mint→Honey (`from-teal via-teal-light to-honey`), Ziel `#download`

### 2. Hero (`components/Hero.tsx`) – FERTIG
- **Heller Hintergrund** `gradient-hero-light` (zartes Mint-Weiß) statt Vollton-Teal; Text dunkel
- Store-Buttons: **App Store Teal-Solid**, **Google Play Outline**
- **Phone-Sequenz-Animation:** echter „Rezept scannen"-Screen → „Kamera öffnen" wird gedrückt → Scan-Ansicht mit Scanlinie → „Rezept erkannt: Pasta al Limone" → Schleife (8s-Takt, respektiert `prefers-reduced-motion`)
- Bottom-Nav im Mockup: Home / Erni / Scannen / Kochbuch / Mehr
- Keyframes dafür in `app/globals.css` (`heroMenu`, `heroCam`, `heroPress`, `heroScan`, `heroToast`)
- `id="download"` HIER ENTFERNT (gehört nur zur CTA)

### 3. Features (`components/Features.tsx`) – KOMPLETT NEU GEBAUT
- Von 4er-Grid → **Zickzack-Layout**: 4 Zeilen untereinander, Screenshot/Text abwechselnd links↔rechts
- **Echte App-Screenshots** in `public/screenshots/` (aus `09_Webseite/*.png` verkleinert):
  - `scan.png` (aus 7.png) → Rezepte scannen
  - `coach.png` (aus 3.png) → KI-Coach
  - `planner.png` (aus 13.png) → Wochenplaner
  - `cookbook.png` (aus 11.png) → Kochbuch
- Pro Zeile: ausführliche Beschreibung (3–4 Sätze), 3 Häkchen-Punkte, „Mehr erfahren →"-Link zur Detailseite
- **Animationen:** Einblenden von der Seite beim Scrollen + sanftes Schweben (`animate-float`); Scan-Zeile hat zusätzlich Scan-Sweep (`hero-scan`)
- **Schwebende Elemente** um jedes Handy (wippen auf/ab):
  - Scannen: „Erkannt in Sekunden" ⚡ + „Rezept gespeichert · Pasta al Limone" ✓
  - KI-Coach: „KI-Coach Erni · online" + „Antwort in Echtzeit"
  - Wochenplaner: „Einkaufsliste · 61 Zutaten" 🛒 + „Teilen · WhatsApp"
  - Kochbuch: „Favoriten · 6 Rezepte" ♥ + „Volltextsuche" 🔍
- Screenshots haben transparenten Hintergrund + eigenen iPhone-Rahmen, Seitenverhältnis 720×1564 (korrekt)

### 4. Testimonials (`components/Testimonials.tsx`) – unverändert, passt
- 3 Karten (Bianca, Jennifer, Steffi), 5 Sterne poppen nacheinander auf
- Offene Idee (nicht umgesetzt): Jennifers Mint-Avatar hat schwachen Kontrast; ggf. mehr Stimmen / Gesamtbewertung

### 5. CTA (`components/CTA.tsx`) – FERTIG
- **Gradient auf CI korrigiert**: `gradient-cta` jetzt Teal→Mint→**Honey** (Blau `#85b7eb` raus) in `globals.css`
- **Zitrone 🍋 + Möhre 🥕 entfernt**
- `id="download"` bleibt hier (einziger Download-Anker)

### 6. Footer (`components/Footer.tsx`) – FERTIG
- **Weißes „my.erni"-Logo** (`/logo-white.png`, neu erzeugt) statt „E"-Kästchen
- **„Stimmen"-Link entfernt** → App-Spalte: Features + Download
- **Instagram-Button** → https://www.instagram.com/myerni/ (neuer Tab)

---

## NOCH OFFEN / für morgen
- **Committen:** Alle Änderungen sind noch NICHT committed (letzter Commit: „Complete Erni CI Implementation + SEO Overhaul"). Als Nächstes sauber committen + pushen.
- **Store-Links:** Hero + CTA verlinken auf Platzhalter `apps.apple.com` / `play.google.com` → echte App-Store-Links eintragen, sobald live.
- **Unterseiten noch nicht überarbeitet:** `/features` (+ 4 Detailseiten), `/faq`, `/blog`, `/datenschutz`, `/impressum`.
- **Testimonials:** optionale Verbesserungen (Kontrast Avatar, mehr Stimmen, Gesamtbewertung „4,8 ★ · 324").
- **Kontrolle:** Alles kompiliert sauber (`npx tsc --noEmit` grün). Noch nicht live im Browser gesichtet → `npm run dev` lokal testen.

## Nächster sinnvoller Schritt
Homepage lokal ansehen (`npm run dev` → localhost:3000), dann committen + pushen. Danach Unterseiten Sektion für Sektion durchgehen.
