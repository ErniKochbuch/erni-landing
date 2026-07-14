'use client';

import { motion } from 'framer-motion';
import { FiBook, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function KochbuchPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareFeature',
          name: 'Digitales Kochbuch',
          description: 'Intelligente Sammlung und Verwaltung aller deine Rezepte',
        })}
      </script>

      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/features" className="inline-flex items-center gap-2 text-teal mb-8 hover:gap-3 transition-all">
            <FiArrowLeft size={16} />
            Zurück zu Features
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-teal/20 text-teal flex items-center justify-center">
                <FiBook size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Dein digitales Kochbuch
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Alle Rezepte an einem Ort – organisiert, durchsuchbar, teilbar. Dein digitales Erbe für immer.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Problem & Solution */}
            <section className="grid sm:grid-cols-2 gap-8">
              <div className="bg-honey/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 text-honey">Das Problem</h3>
                <ul className="space-y-3">
                  {[
                    'Rezepte sind verstreut in verschiedenen Apps',
                    'Papierkochbücher werden alt & gehen verloren',
                    'Familienrezepte sind gefährdet',
                    'Suchen nach Rezepten dauert ewig',
                  ].map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-honey mt-1">✕</span>
                      <span className="text-honey/80">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-teal-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 text-teal-900">Die Lösung mit Erni</h3>
                <ul className="space-y-3">
                  {[
                    'Alle Rezepte an einem Platz',
                    'Intelligente Kategorisierung & Tags',
                    'Blitzschnelle Suche über alles',
                    'Sicher für die nächste Generation',
                  ].map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span className="text-teal-900">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Features */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Die Funktionen deines Kochbuchs</h2>
              <div className="space-y-4">
                {[
                  { title: 'Unbegrenzte Rezepte', desc: 'Sammle so viele Rezepte, wie du möchtest – keine Limits' },
                  { title: 'Intelligente Tags', desc: 'Kategorisiere nach Zutat, Kochdauer, Schwierigkeit oder Saison' },
                  { title: 'Volltext-Suche', desc: 'Finde jedes Rezept in Sekunden mit der intelligenten Suche' },
                  { title: 'Fotoverwaltung', desc: 'Speichere Fotos deiner Gerichte und des gekochten Ergebnisses' },
                  { title: 'Notizen & Varianten', desc: 'Schreib deine Anpassungen und Erfahrungen auf' },
                  { title: 'Teilen mit Familie', desc: 'Gib einzelne Rezepte oder dein ganzes Kochbuch frei' },
                ].map((feature, idx) => (
                  <div key={idx} className="border-l-4 border-teal pl-6 py-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Organization */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Wie du dein Kochbuch organisieren kannst</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Nach Kategorien', items: ['Vorspeisen', 'Hauptgänge', 'Desserts', 'Getränke'] },
                  { title: 'Nach Zutat', items: ['Fisch', 'Fleisch', 'Vegan', 'Glutenfrei'] },
                  { title: 'Nach Zeit', items: ['<15 min', '15-30 min', '30-60 min', '>1h'] },
                  { title: 'Nach Quelle', items: ['Omas Rezepte', 'Blog XYZ', 'Kochbuch ABC', 'Selbsterfunden'] },
                ].map((org, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">{org.title}</h3>
                    <ul className="space-y-2">
                      {org.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Family Heritage */}
            <section className="bg-gradient-to-br from-honey/20 to-honey-dark/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Dein digitales Erbe</h2>
              <p className="text-gray-700 mb-6">
                Omas Rezepte sind kostbar. Mit Erni bewahrst du sie digital – für immer und für die nächste Generation. Teile sie mit deinen Kindern, Enkeln und der ganzen Familie.
              </p>
              <ul className="space-y-3">
                {[
                  'Speichere Geschichten zu jedem Rezept',
                  'Erinnere dich an den Moment, als du es gelernt hast',
                  'Teile die Rezepte mit Familienmitgliedern',
                  'Euer gemeinsames Kochbuch für die Ewigkeit',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-honey">❤️</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-gradient-teal rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Starte dein digitales Kochbuch!</h2>
              <p className="mb-8 text-lg opacity-90">Scannen dein erstes Rezept und organisiere dein Kochbuch.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com" target="_blank" rel="noopener" className="px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow">
                  App Store
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener" className="px-8 py-4 bg-white/20 text-white font-semibold rounded-2xl hover:bg-white/30 transition-colors">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
