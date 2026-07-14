'use client';

import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { FiCamera, FiCheck } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative gradient-teal overflow-hidden">
      {/* Deko-Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-honey/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="text-white text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-dark text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-honey animate-pulse" />
            Dein KI-Coach für die Küche
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Liebe zum Kochen
            <br />
            <span className="text-gradient">mit Einfachheit</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Dein digitales Kochbuch vereint Leidenschaft und Struktur. Rezepte scannen, intelligent planen, Zeit sparen – jeden Tag neu.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white text-teal font-semibold rounded-2xl shadow-lg"
            >
              <FaApple size={22} />
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-normal opacity-70">
                  Laden im
                </span>
                App Store
              </span>
            </motion.a>
            <motion.a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 glass-dark text-white font-semibold rounded-2xl"
            >
              <FaGooglePlay size={20} />
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-normal opacity-70">
                  Jetzt bei
                </span>
                Google Play
              </span>
            </motion.a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 text-sm text-white/60"
          >
            Kostenlos starten · iOS & Android · Deine Rezepte, deine Daten
          </motion.p>
        </div>

        {/* Phone-Mockup mit Scan-Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <div className="animate-float">
            <div className="relative w-[280px] md:w-[320px] rounded-[2.8rem] bg-gray-900 p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />

              {/* Screen */}
              <div className="relative rounded-[2.2rem] bg-cream overflow-hidden aspect-[9/19]">
                {/* App-Header */}
                <div className="gradient-teal px-5 pt-10 pb-4 text-white">
                  <p className="text-xs opacity-80">Guten Tag 👋</p>
                  <p className="font-semibold">Rezept scannen</p>
                </div>

                {/* Scan-Bereich: Kochbuchseite */}
                <div className="relative mx-4 mt-4 rounded-2xl bg-white shadow-soft p-4 h-[46%] overflow-hidden">
                  {/* stilisierte Buchseite */}
                  <div className="space-y-2.5">
                    <div className="h-3 w-3/4 rounded bg-gray-200" />
                    <div className="h-2 w-full rounded bg-gray-100" />
                    <div className="h-2 w-5/6 rounded bg-gray-100" />
                    <div className="h-2 w-full rounded bg-gray-100" />
                    <div className="h-16 w-full rounded-lg bg-teal-50 mt-3" />
                    <div className="h-2 w-4/6 rounded bg-gray-100" />
                    <div className="h-2 w-full rounded bg-gray-100" />
                    <div className="h-2 w-3/5 rounded bg-gray-100" />
                  </div>

                  {/* Scan-Ecken */}
                  <div className="absolute inset-2 pointer-events-none">
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-amber rounded-tl-lg" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-amber rounded-tr-lg" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-amber rounded-bl-lg" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-amber rounded-br-lg" />
                  </div>

                  {/* Laufende Scanlinie */}
                  <div className="scanline absolute left-2 right-2 h-[3px] rounded-full bg-honey shadow-glow" />
                </div>

                {/* Erkanntes Rezept */}
                <div className="mx-4 mt-3 rounded-2xl bg-white shadow-soft p-4">
                  <div className="recipe-line flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal flex items-center justify-center text-white">
                      <FiCheck size={13} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                        Rezept erkannt!
                      </p>
                      <p className="text-[10px] text-gray-500 leading-tight">
                        Pasta al Limone · 4 Portionen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scan-Button */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-honey shadow-glow flex items-center justify-center text-white">
                    <FiCamera size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 top-16 glass rounded-2xl px-4 py-3 shadow-soft hidden sm:block"
          >
            <p className="text-xs font-semibold text-gray-800">🥘 250+ Rezepte</p>
            <p className="text-[10px] text-gray-500">in deiner Sammlung</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 bottom-24 glass rounded-2xl px-4 py-3 shadow-soft hidden sm:block"
          >
            <p className="text-xs font-semibold text-gray-800">✨ KI-Coach Erni</p>
            <p className="text-[10px] text-gray-500">fragt: „Lust auf Pasta?"</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Wellen-Übergang */}
      <svg
        className="block w-full text-cream"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
