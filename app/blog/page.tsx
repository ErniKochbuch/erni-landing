'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import { posts } from '@/lib/posts';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `https://myerni.de/blog/${p.slug}`,
          })),
        })}
      </script>

      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal mb-8 hover:gap-3 transition-all"
          >
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
              Tipps gegen Kochstress, clevere Planung und alles rund ums
              digitale Kochbuch.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((article) => (
              <motion.div key={article.slug} variants={item}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block h-full bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-2 transition-all"
                >
                  <div className="p-7 flex flex-col h-full">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-teal-50 text-teal text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        {article.date}
                      </span>
                      <FiArrowRight
                        className="text-teal group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Kontakt / Themenwunsch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-teal rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ein Thema, das dir fehlt?</h2>
            <p className="mb-8 text-lg opacity-90 max-w-xl mx-auto">
              Schreib uns, worüber du gern lesen würdest – wir nehmen deine Idee
              mit in die nächsten Artikel auf.
            </p>
            <ObfuscatedEmail
              subject="Blog-Themenwunsch"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow cursor-pointer"
            >
              <FiMail size={18} />
              Themenwunsch senden
            </ObfuscatedEmail>
          </motion.div>
        </div>
      </div>
    </>
  );
}
