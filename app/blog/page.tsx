'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

const articles = [
  {
    title: 'Wie Kochbuch-Scanning dein Leben verändert',
    excerpt: 'Warum die Digitalisierung von Kochbüchern nicht nur Zeit spart, sondern auch den Genuss am Kochen erhöht.',
    date: 'Juli 2026',
    category: 'Tipps & Tricks',
    slug: 'kochbuch-scanning-leben',
  },
  {
    title: 'Saisonales Kochen: Warum es mehr als ein Trend ist',
    excerpt: 'Die Vorteile von saisonalem Kochen für Gesundheit, Geldbeutel und Umwelt – und wie Erni dir dabei hilft.',
    date: 'Juni 2026',
    category: 'Ernährung',
    slug: 'saisonales-kochen',
  },
  {
    title: 'Wochenplanung für vielbeschäftigte Familien',
    excerpt: 'Ein Leitfaden zur intelligenten Wochenplanung, um mehr Zeit mit Familie zu verbringen statt zu kochen.',
    date: 'Mai 2026',
    category: 'Lifestyle',
    slug: 'wochenplanung-familien',
  },
  {
    title: 'KI in der Küche: Warum dein Ernährungscoach im Smartphone lebt',
    excerpt: 'Wie Künstliche Intelligenz dir dabei hilft, bessere Kochentscheidungen zu treffen – jeden Tag.',
    date: 'April 2026',
    category: 'Technologie',
    slug: 'ki-ernaehrungscoach',
  },
  {
    title: 'Die digitale Transformation deines Kochbuchs',
    excerpt: 'Von den ersten Rezepten bis zur perfekten Sammlung: Der komplette Guide zur digitalen Kochbuch-Verwaltung.',
    date: 'März 2026',
    category: 'Anleitung',
    slug: 'digitale-kochbuch-transformation',
  },
  {
    title: 'Omas Rezepte weitergeben: Ein digitales Erbe',
    excerpt: 'Wie Erni dir hilft, Familienrezepte zu bewahren und an die nächste Generation weiterzugeben.',
    date: 'Februar 2026',
    category: 'Geschichten',
    slug: 'familienrezepte-digital',
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

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Erni Blog',
          url: 'https://myerni.de/blog',
          publisher: {
            '@type': 'Organization',
            name: 'Erni',
          },
        })}
      </script>

      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
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
              Erni Blog
            </h1>
            <p className="text-xl text-gray-600">
              Tipps, Rezepte, Geschichten und alles rund um digitales Kochen.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all cursor-pointer group"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-teal-50 text-teal text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <FiArrowRight className="text-teal group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 bg-gradient-teal rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Mehr Tipps & Tricks?</h2>
            <p className="mb-8 text-lg opacity-90">
              Abonniere unseren Newsletter und erhalte wöchentliche Tipps direkt in dein Postfach.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine Email..."
                className="flex-1 px-6 py-4 rounded-2xl bg-white/20 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow"
              >
                Abonnieren
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
