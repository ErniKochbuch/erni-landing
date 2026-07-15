'use client';

import { motion } from 'framer-motion';
import { FiCamera, FiArrowLeft, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export default function RezepteScannenPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Rezepte mit Erni scannen',
          step: [
            {
              '@type': 'HowToStep',
              name: 'App öffnen und Scan-Tab wählen',
            },
            {
              '@type': 'HowToStep',
              name: 'Kochbuchseite fotografieren',
            },
            {
              '@type': 'HowToStep',
              name: 'KI erkennt Rezept automatisch',
            },
            {
              '@type': 'HowToStep',
              name: 'Rezept speichern oder bearbeiten',
            },
          ],
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
                <FiCamera size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Rezepte scannen mit KI
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Deine Lieblingskochbücher digitalisieren – einfach abfotografieren statt abtippen.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[16/11]">
              <Image
                src="/lifestyle/scannen.jpg"
                alt="Erni App beim Scannen einer Kochbuchseite auf dem Smartphone"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Warum / Vorteile */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Warum Rezepte einscannen?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Alle Lieblingsrezepte an einem Ort – nie wieder danach suchen',
                  'Nie vergessen, welche Rezepte in deinen Büchern stecken',
                  'Familienrezepte für die Ewigkeit bewahren',
                  'Schluss mit Abtippen und losen Zetteln',
                  'Deine Rezepte immer dabei – auch beim Einkaufen',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-cream rounded-2xl p-5">
                    <span className="w-7 h-7 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck size={15} />
                    </span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Wie funktioniert es?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Öffne Scan-Modus</h3>
                    <p className="text-gray-600">Tippe auf die Kamera in Ernis Menü</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fotografiere die Seite</h3>
                    <p className="text-gray-600">Halte das Kochbuch flach, gutes Licht ist wichtig</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">KI erkennt das Rezept</h3>
                    <p className="text-gray-600">Erni liest Zutaten und Zubereitung aus</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Speichern oder bearbeiten</h3>
                    <p className="text-gray-600">Überprüfe das Rezept und speichere es in deinem Kochbuch</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Was macht unser Scan besonders?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'KI-Erkennung', desc: 'Liest gedruckte Rezepte zuverlässig aus' },
                  { title: 'Mehrere Quellen', desc: 'Foto, Galerie oder Link aus dem Web' },
                  { title: 'In Sekunden', desc: 'Erkennung dauert etwa 10–15 Sekunden' },
                  { title: 'Flexibel', desc: 'Für alte und neue Kochbücher' },
                  { title: 'Bearbeitbar', desc: 'Erkanntes lässt sich jederzeit anpassen' },
                  { title: 'Strukturiert', desc: 'Zutaten und Schritte sauber getrennt' },
                ].map((feature, idx) => (
                  <div key={idx} className="bg-teal-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Ideal für...</h2>
              <ul className="space-y-3">
                {[
                  'Großmutters alte Kochbücher digitalisieren',
                  'Rezepte aus Magazinen schnell erfassen',
                  'Restaurants & Rezepte-Blogs scannen',
                  'Schnelle Notizen während des Kochens',
                  'Lieblingsrezepte einfach archivieren',
                ].map((use, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700">{use}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-gradient-teal rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Bereit zu scannen?</h2>
              <p className="mb-8 text-lg opacity-90">Lade Erni jetzt kostenlos herunter und scanne dein erstes Rezept.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com" target="_blank" rel="noopener" className="px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow">
                  App Store
                </a>
                <ObfuscatedEmail subject="Android-Warteliste" label="Bald für Android" className="px-8 py-4 bg-white/20 text-white font-semibold rounded-2xl hover:bg-white/30 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
