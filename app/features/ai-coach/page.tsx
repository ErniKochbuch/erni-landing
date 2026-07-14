'use client';

import { motion } from 'framer-motion';
import { FiMessageSquare, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function AiCoachPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareFeature',
          name: 'KI-Coach Erni',
          description: 'Persönlicher Ernährungscoach mit KI-Unterstützung für Kochfragen',
        })}
      </script>

      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/features" className="inline-flex items-center gap-2 text-mint mb-8 hover:gap-3 transition-all">
            <FiArrowLeft size={16} />
            Zurück zu Features
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-mint/20 text-mint flex items-center justify-center">
                <FiMessageSquare size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Dein KI-Coach Erni
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Frag Erni jederzeit – von Rezept-Tipps bis Ernährungsratschläge. Dein persönlicher Coach, immer verfügbar.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* What you can ask */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Was kannst du Erni fragen?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  '"Wie mache ich dieses Gericht leichter?"',
                  '"Ich hab Allergien gegen Nüsse – Alternative?"',
                  '"Passt das zu meinen Ernährungszielen?"',
                  '"Wie viel Protein hat dieses Rezept?"',
                  '"Kann ich Zutat X durch Y ersetzen?"',
                  '"Was wäre eine gesunde Variante?"',
                  '"Tipps für schnellere Zubereitung?"',
                  '"Wie serviere ich das am schönsten?"',
                ].map((question, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4">
                    <p className="text-gray-800 italic text-sm">{question}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">So funktioniert Ernies Coach-System</h2>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Personalisierung', desc: 'Teile deine Ziele, Allergien & Vorlieben mit Erni' },
                  { num: '2', title: 'Echtzeit-Antworten', desc: 'Erni kennt deine Rezepte & beantwortet sofort' },
                  { num: '3', title: 'Intelligente Vorschläge', desc: 'KI basiert auf Ernährungswissenschaft' },
                  { num: '4', title: 'Lerneffekt', desc: 'Je mehr du fragst, desto besser wird Erni' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 bg-gradient-to-r from-mint/10 to-mint/5 p-6 rounded-2xl">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold">
                        {step.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Example conversation */}
            <section className="bg-cream rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Beispiel einer Erni-Konversation</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="bg-white rounded-2xl px-4 py-3 max-w-xs">
                    <p className="text-gray-800 text-sm">Wie mache ich Pasta al Limone leichter?</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-mint text-white rounded-2xl px-4 py-3 max-w-xs">
                    <p className="text-sm">Tausch die Sahne gegen griechischen Joghurt, nutze Vollkorn-Pasta und reduziere Butter um die Hälfte. So sparst du 200 Kalorien!</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white rounded-2xl px-4 py-3 max-w-xs">
                    <p className="text-gray-800 text-sm">Passt das noch zu Low-Carb?</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-mint text-white rounded-2xl px-4 py-3 max-w-xs">
                    <p className="text-sm">Mit Vollkorn noch gut, aber probier Zucchini-Nudeln statt Pasta für echtes Low-Carb. 50% weniger Kohlenhydrate!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Zielgerichtet', desc: 'Ratschläge basieren auf deinen Ernährungszielen' },
                { icon: '⚡', title: 'Blitzschnell', desc: 'Keine Wartezeiten – Antwort in Sekunden' },
                { icon: '🔍', title: 'Präzise', desc: 'Versteht Zutaten, Allergien und Unverträglichkeiten' },
                { icon: '❤️', title: 'Empathisch', desc: 'Unterstützt dich beim Erreichen deiner Ziele' },
                { icon: '📚', title: 'Wissenschaftlich', desc: 'Basiert auf neuesten Ernährungsstudien' },
                { icon: '🌙', title: '24/7 Verfügbar', desc: 'Immer da, wenn du eine Frage hast' },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-mint to-mint-dark rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Dein persönlicher Coach wartet!</h2>
              <p className="mb-8 text-lg opacity-90">Lade Erni herunter und starten deine erste Frage.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com" target="_blank" rel="noopener" className="px-8 py-4 bg-white text-mint font-semibold rounded-2xl hover:shadow-lg transition-shadow">
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
