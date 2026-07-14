'use client';

import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function CTA() {
  return (
    <section id="download" className="py-24 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        className="relative max-w-5xl mx-auto gradient-cta rounded-[2.5rem] px-8 py-16 md:px-16 md:py-20 text-center text-white overflow-hidden shadow-card"
      >
        {/* Deko */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-amber/25 blur-2xl" />
        <motion.span
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-10 text-4xl hidden md:block"
          aria-hidden="true"
        >
          🍋
        </motion.span>
        <motion.span
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-12 text-4xl hidden md:block"
          aria-hidden="true"
        >
          🥕
        </motion.span>

        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Bereit, dein Kochbuch
            <br className="hidden md:block" /> zu digitalisieren?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Lade Erni jetzt kostenlos herunter und verwandle deine
            Lieblingsrezepte in dein persönliches, digitales Kochbuch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-teal font-semibold rounded-2xl shadow-lg"
            >
              <FaApple size={22} />
              App Store
            </motion.a>
            <motion.a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-dark text-white font-semibold rounded-2xl"
            >
              <FaGooglePlay size={20} />
              Google Play
            </motion.a>
          </div>

          <p className="text-sm text-white/70 mt-8">
            ✓ Kostenlos &nbsp;·&nbsp; ✓ Keine Werbung &nbsp;·&nbsp; ✓ Deine
            Rezepte, deine Daten
          </p>
        </div>
      </motion.div>
    </section>
  );
}
