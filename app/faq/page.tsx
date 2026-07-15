'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const faqs = [
  {
    category: 'Allgemeines',
    questions: [
      {
        q: 'Was kostet Erni?',
        a: 'Die Grundfunktionen sind kostenlos. KI-Funktionen wie das Scannen von Rezepten werden künftig über ein Abo angeboten. Aktuell läuft eine Testphase – du kannst alle Funktionen mit gewissen Limits kostenlos ausprobieren.',
      },
      {
        q: 'Welche Geräte werden unterstützt?',
        a: 'Erni gibt es aktuell für das iPhone im App Store. Eine Android-Version für den Google Play Store ist in Arbeit – schreib uns einfach eine E-Mail (Adresse im Impressum, Betreff „Android-Warteliste"), dann melden wir uns, sobald es losgeht.',
      },
      {
        q: 'Sind meine Rezepte sicher?',
        a: 'Ja. Deine Rezepte gehören dir – sie werden sicher gespeichert und nur du hast Zugriff auf dein Kochbuch.',
      },
    ],
  },
  {
    category: 'Rezepte scannen',
    questions: [
      {
        q: 'Wie funktioniert das Scannen?',
        a: 'Du fotografierst eine Rezeptseite, und Erni liest Titel, Zutaten und Zubereitung aus und legt alles strukturiert in deinem Kochbuch ab. Kleine Fehler kannst du jederzeit von Hand korrigieren.',
      },
      {
        q: 'Warum wird ein Rezept manchmal nicht richtig erkannt?',
        a: 'Am besten klappt es mit klar gedrucktem Text und einem scharfen Foto bei gutem Licht. Schwieriger wird es bei Schatten, unscharfen Aufnahmen, sehr verschnörkelten Schriften, handgeschriebenen Rezepten oder ungewöhnlichen Layouts. In solchen Fällen hilft ein zweites Foto – oder du ergänzt die Angaben schnell manuell.',
      },
      {
        q: 'Funktioniert es auch mit alten Kochbüchern?',
        a: 'Ja, solange der Text auf dem Foto gut lesbar ist, funktioniert Erni mit modernen wie klassischen Kochbüchern.',
      },
    ],
  },
  {
    category: 'KI-Coach',
    questions: [
      {
        q: 'Kann der KI-Coach meine Ernährung berücksichtigen?',
        a: 'Ja. Du kannst deine Ziele, Allergien und Vorlieben hinterlegen – Erni berücksichtigt das bei seinen Vorschlägen automatisch.',
      },
      {
        q: 'Wird Erni von Fachleuten unterstützt?',
        a: 'Ja. Erni wird von Ernährungswissenschaftlern und leidenschaftlichen Hobbyköchen begleitet, damit die Tipps fundiert und zugleich alltagstauglich sind.',
      },
    ],
  },
  {
    category: 'Wochenplaner',
    questions: [
      {
        q: 'Wie funktioniert der automatische Wochenplaner?',
        a: 'Erni stellt deine Woche zusammen und berücksichtigt dabei Saison, deine Vorlieben und Allergien, die verfügbare Zeit sowie die Anzahl der Personen.',
      },
      {
        q: 'Kann ich den Plan manuell ändern?',
        a: 'Klar. Der Plan ist nur ein Vorschlag – du kannst Rezepte beliebig tauschen, verschieben und anpassen.',
      },
      {
        q: 'Wird eine Einkaufsliste automatisch erstellt?',
        a: 'Ja. Aus deinem Wochenplan erstellt Erni automatisch eine Einkaufsliste, sortiert nach Kategorien und über alle Rezepte zusammengefasst. Teilen per WhatsApp inklusive.',
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
            <ObfuscatedEmail
              subject="Erni-Anfrage"
              label="E-Mail schreiben"
              className="inline-block px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
