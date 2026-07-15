'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiArrowLeft, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export default function WochenplanerPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareFeature',
          name: 'Intelligenter Wochenplaner',
          description: 'KI-gestützte Wochenplanung für Mahlzeiten mit Saison-Berücksichtigung',
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
              <div className="w-16 h-16 rounded-2xl bg-honey/20 text-honey flex items-center justify-center">
                <FiCalendar size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Wochenplaner mit KI
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Keine Zeit am Sonntag für Planung? Erni übernimmt das – intelligent, saisonal, personalisiert.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[16/11]">
              <Image
                src="/lifestyle/wochenplaner.jpg"
                alt="Erni Wochenplan auf dem Smartphone auf einem Schreibtisch"
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
                Warum die Woche planen?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Nie wieder „Was koche ich heute?"',
                  'Weniger Stress unter der Woche',
                  'Gezielter einkaufen, weniger wegwerfen, Geld sparen',
                  'Ausgewogener und abwechslungsreicher essen',
                  'Mehr Zeit für die schönen Dinge statt fürs Grübeln',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-cream rounded-2xl p-5">
                    <span className="w-7 h-7 rounded-full bg-honey/20 text-honey-dark flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck size={15} />
                    </span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Problem */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Das Problem mit manueller Planung</h2>
              <ul className="space-y-3">
                {[
                  'Jede Woche die gleiche Frage: „Was koche ich denn heute?"',
                  'Einkaufslisten schreiben kostet viel Zeit',
                  'Rezepte passen nicht zur aktuellen Jahreszeit',
                  'Familienvorlieben & Allergien vergessen',
                  'Stress-Kocherei statt genussvolles Planen',
                ].map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-honey mt-1">✕</span>
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Wie Erni plant</h2>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Deine Vorlieben', desc: 'Fütter Erni mit deinen Lieblingszutaten & Ernährungszielen' },
                  { num: '2', title: 'Saison-Check', desc: 'Erni kennt, was gerade Saison hat – Regional & saisonal' },
                  { num: '3', title: 'Intelligente Auswahl', desc: 'Die KI mischt bekannte & neue Rezepte perfekt' },
                  { num: '4', title: 'Plan + Einkaufsliste', desc: 'Fertige Wochenplanung mit intelligenter Einkaufsliste' },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-honey to-honey-dark text-white flex items-center justify-center font-bold">
                        {step.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-gradient-to-br from-honey/5 to-honey-dark/5 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Deine Vorteile</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: '⏱️', title: 'Zeit sparen', desc: 'Spürbar weniger Planungsaufwand pro Woche' },
                  { icon: '💡', title: 'Weniger Stress', desc: 'Keine „Was koche ich denn heute?" mehr' },
                  { icon: '🌱', title: 'Saisonal essen', desc: 'Automatisch regional & nachhaltig' },
                  { icon: '💰', title: 'Geld sparen', desc: 'Weniger Verschwendung durch bessere Planung' },
                  { icon: '❤️', title: 'Vielfalt', desc: 'Nie wieder monotone Wochenplanung' },
                  { icon: '👨‍👩‍👧', title: 'Alle Wünsche', desc: 'Allergien & Vorlieben automatisch beachtet' },
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Example */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Beispiel einer Erni-Planung</h2>
              <div className="space-y-3">
                {[
                  'Montag: Spargel-Risotto (Saison!)',
                  'Dienstag: Schnelles Fisch-Curry',
                  'Mittwoch: Pasta al Limone (Familienklassiker)',
                  'Donnerstag: Buddha-Bowl mit saisonalen Früchten',
                  'Freitag: Gegrilltes Hähnchen mit Kräutern',
                  'Samstag: Selbstgemachte Gnocchi',
                  'Sonntag: Langsames Schmorbraten zum Abhängen',
                ].map((meal, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-amber">
                    <span className="w-6 h-6 rounded-full bg-honey text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-800">{meal}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6">
                ✓ Einkaufsliste wird automatisch generiert & nach Laden sortiert
              </p>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-honey to-honey-dark rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Genies keine Zeit mehr mit Planung!</h2>
              <p className="mb-8 text-lg opacity-90">Lass Erni die intelligente Wochenplanung für dich übernehmen.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com" target="_blank" rel="noopener" className="px-8 py-4 bg-white text-honey font-semibold rounded-2xl hover:shadow-lg transition-shadow">
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
