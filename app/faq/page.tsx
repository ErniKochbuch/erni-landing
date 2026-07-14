'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

const faqs = [
  {
    category: 'Allgemeines',
    questions: [
      {
        q: 'Was kostet Erni?',
        a: 'Erni ist kostenlos herunterzuladen und zu nutzen. Es gibt eine optionale Premium-Version mit erweiterten Features.',
      },
      {
        q: 'Welche Geräte werden unterstützt?',
        a: 'Erni läuft auf iOS (iPhone/iPad) ab Version 14 und Android ab Version 8. Du brauchst nur ein Smartphone – fertig!',
      },
      {
        q: 'Sind meine Rezepte sicher?',
        a: 'Ja! Alle Rezepte werden verschlüsselt auf deinen Geräten gespeichert. Nur du hast Zugriff auf dein Kochbuch.',
      },
    ],
  },
  {
    category: 'Rezepte scannen',
    questions: [
      {
        q: 'Wie genau ist die Scan-Erkennung?',
        a: 'Unsere KI erkennt 95%+ der Rezepte korrekt. Kleine Fehler kannst du schnell manuell korrigieren.',
      },
      {
        q: 'Funktioniert es mit alten Kochbüchern?',
        a: 'Ja! Erni funktioniert mit modernen und klassischen Kochbüchern – solange das Foto klare Lesbarkeit hat.',
      },
      {
        q: 'Kann ich handgeschriebene Rezepte scannen?',
        a: 'Handgeschriebene Rezepte sind schwieriger zu erkennen. Am besten funktioniert es mit gedrucktem Text.',
      },
    ],
  },
  {
    category: 'KI-Coach',
    questions: [
      {
        q: 'Kann der KI-Coach meine Ernährung berücksichtigen?',
        a: 'Ja! Du kannst deine Ziele, Allergien und Vorlieben in den Einstellungen speichern. Erni berücksichtigt das automatisch.',
      },
      {
        q: 'Arbeitet Erni mit echten Ernährungswissenschaftlern?',
        a: 'Ja! Unsere Ratschläge basieren auf wissenschaftlichen Studien und nutzen die Claude-KI von Anthropic.',
      },
    ],
  },
  {
    category: 'Wochenplaner',
    questions: [
      {
        q: 'Wie arbeitet der automatische Wochenplaner?',
        a: 'Erni berücksichtigt: Saison, deine Allergien, verfügbare Zeit, Anzahl Personen und Ernährungsziele.',
      },
      {
        q: 'Kann ich den Plan manuell ändern?',
        a: 'Ja! Der Plan ist nur ein Vorschlag. Du kannst Rezepte beliebig tauschen und anpassen.',
      },
      {
        q: 'Wird eine Einkaufsliste automatisch erstellt?',
        a: 'Ja! Erni generiert eine intelligente Einkaufsliste und sortiert sie sogar nach Läden-Layout.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

  const toggleQuestion = (q: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [q]: !prev[q],
    }));
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.flatMap((cat) =>
            cat.questions.map((q) => ({
              '@type': 'Question',
              name: q.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: q.a,
              },
            }))
          ),
        })}
      </script>

      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-teal mb-8 hover:gap-3 transition-all">
            <FiArrowLeft size={16} />
            Zur Startseite
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-gray-600">
              Alles, was du über Erni wissen musst – von Installation bis zur Wochenplanung.
            </p>
          </motion.div>

          {/* FAQ Sections */}
          <div className="space-y-10">
            {faqs.map((section, sectionIdx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIdx * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.category}</h2>

                <div className="space-y-3">
                  {section.questions.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(item.q)}
                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-left">{item.q}</span>
                        <motion.div
                          animate={{ rotate: openStates[item.q] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <FiChevronDown className="text-teal" size={20} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openStates[item.q] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-gray-100 bg-gray-50 px-6 py-4"
                          >
                            <p className="text-gray-700 leading-relaxed">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-gradient-teal rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Frage nicht beantwortet?</h2>
            <p className="mb-6 text-lg opacity-90">
              Schreib uns eine Email – wir helfen gerne weiter!
            </p>
            <a
              href="mailto:hallo@myerni.de"
              className="inline-block px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow"
            >
              Email schreiben
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
