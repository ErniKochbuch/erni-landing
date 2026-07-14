'use client';

import { motion } from 'framer-motion';
import { FiCamera, FiMessageSquare, FiCalendar, FiBook, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const features = [
  {
    title: 'Rezepte scannen',
    icon: FiCamera,
    description: 'Fotografiere eine Kochbuchseite – Erni erkennt das Rezept mit KI. Keine Fehler, keine Schreibarbeit.',
    details: [
      'Optische Zeichenerkennung (OCR) mit KI',
      'Automatische Zutatenerkennung',
      'Zubereitung & Nährwerte erfasst',
      'Unterstützt Deutsch, Englisch & mehr',
    ],
    href: '/features/rezepte-scannen',
    color: '#1D9E75',
  },
  {
    title: 'Dein KI-Coach Erni',
    icon: FiMessageSquare,
    description: 'Frag Erni spontan: „Wie macht man das leichter?" Echtzeittipps & Varianten.',
    details: [
      'Personalisierte Kochratschläge',
      'Zutaten-Alternativen Vorschläge',
      'Gesunde Rezept-Varianten',
      '24/7 verfügbar, keine Wartezeiten',
    ],
    href: '/features/ai-coach',
    color: '#a8e6cf',
  },
  {
    title: 'Intelligenter Wochenplaner',
    icon: FiCalendar,
    description: 'Erni plant deine Woche – abgestimmt auf Saison, Vorlieben und Ernährungsziele.',
    details: [
      'Automatische Wochenplanung',
      'Saisonale Rezept-Auswahl',
      'Einkaufsliste generiert sich selbst',
      'Gesunde Varianten empfohlen',
    ],
    href: '/features/wochenplaner',
    color: '#f2c94c',
  },
  {
    title: 'Dein digitales Kochbuch',
    icon: FiBook,
    description: 'Alle Rezepte an einem Ort – organisiert, durchsuchbar, teilbar.',
    details: [
      'Unbegrenzte Rezept-Sammlung',
      'Intelligente Kategorisierung',
      'Volltext-Suche über alle Rezepte',
      'Teilen mit Familie & Freunden',
    ],
    href: '/features/kochbuch',
    color: '#1D9E75',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FeaturesPage() {
  return (
    <>
      {/* SEO Metadata */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Erni – Mein digitales Kochbuch',
          description: 'App zum Scannen von Kochbuchrezepten mit KI-Coach und Wochenplaner',
          features: features.map(f => f.title),
          applicationCategory: 'Lifestyle',
          operatingSystem: 'iOS, Android',
        })}
      </script>

      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Alle Features im Überblick
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der Rezept-Erkennung bis zur Wochenplanung – Erni ist dein vollständiger digitaler Koch-Assistent.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                  >
                    <Icon size={28} />
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h2>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  <ul className="space-y-2 mb-8">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-honey mt-1">✓</span>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                    style={{ color: feature.color }}
                  >
                    Mehr erfahren <FiArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
