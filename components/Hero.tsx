'use client';

import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import {
  FiCamera,
  FiCheck,
  FiImage,
  FiLink,
  FiEdit,
  FiHome,
  FiBook,
  FiSettings,
  FiCpu,
} from 'react-icons/fi';

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
    <section className="relative gradient-hero-light overflow-hidden">
      {/* Deko-Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-honey/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="text-gray-900 text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-teal-100 text-teal-dark text-sm font-medium shadow-soft"
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
            <span className="text-teal">mit Einfachheit</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0"
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
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-teal text-white font-semibold rounded-2xl shadow-card hover:bg-teal-dark transition-colors"
            >
              <FaApple size={22} />
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-normal opacity-80">
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
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white border-2 border-teal text-teal font-semibold rounded-2xl hover:bg-teal-50 transition-colors"
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
            className="mt-8 text-sm text-gray-500"
          >
            Kostenlos starten · iOS & Android · Deine Rezepte, deine Daten
          </motion.p>
        </div>

        {/* Phone-Mockup: Rezept-scannen-Screen -> Kamera -> erkannt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <div className="animate-float">
            <div className="relative w-[260px] md:w-[300px] rounded-[2.8rem] bg-gray-900 p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-30" />

              {/* Screen */}
              <div className="relative rounded-[2.2rem] bg-white overflow-hidden aspect-[9/19.3]">
                {/* ---------- Menü-Layer: Rezept scannen ---------- */}
                <div className="hero-menu absolute inset-0 px-5 pt-11 pb-16">
                  <p className="text-[10px] font-semibold tracking-widest text-gray-400">
                    SCANNEN
                  </p>
                  <p className="text-xl font-bold text-gray-900 mb-4">
                    Rezept scannen
                  </p>

                  <div className="flex justify-center mb-2">
                    <span className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal">
                      <FiCamera size={24} />
                    </span>
                  </div>
                  <p className="text-center text-sm font-bold text-gray-900">
                    Kochbuch → Kochapp
                  </p>
                  <p className="text-center text-[10px] text-gray-400 leading-snug mb-4 px-2">
                    Erni erkennt Rezepte per Foto, Link oder du trägst sie manuell ein.
                  </p>

                  <div className="hero-press flex items-center justify-center gap-2 bg-gradient-to-r from-teal via-teal-light to-honey text-white text-[13px] font-bold py-3 rounded-xl mb-2.5 shadow-card">
                    <FiCamera size={15} />
                    Kamera öffnen
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white border-[1.5px] border-teal text-teal-dark text-[13px] font-semibold py-2.5 rounded-xl mb-2">
                    <FiImage size={15} />
                    Foto aus Galerie
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white border-[1.5px] border-teal text-teal-dark text-[13px] font-semibold py-2.5 rounded-xl mb-2">
                    <FiLink size={15} />
                    Link aus dem Internet
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-100 text-gray-500 text-[13px] font-semibold py-2.5 rounded-xl">
                    <FiEdit size={15} />
                    Manuell eintragen
                  </div>
                </div>

                {/* ---------- Kamera-/Scan-Layer ---------- */}
                <div className="hero-cam absolute inset-0">
                  <div className="gradient-teal px-5 pt-11 pb-4 text-white">
                    <p className="text-xs opacity-85">Kamera aktiv</p>
                    <p className="font-semibold">Seite scannen …</p>
                  </div>

                  <div className="relative mx-4 mt-4 rounded-2xl bg-[#faf7f2] shadow-soft p-4 h-[52%] overflow-hidden">
                    <div className="space-y-2.5">
                      <div className="h-3 w-3/4 rounded bg-gray-200" />
                      <div className="h-2 w-full rounded bg-gray-100" />
                      <div className="h-2 w-5/6 rounded bg-gray-100" />
                      <div className="h-16 w-full rounded-lg bg-teal-50 mt-3" />
                      <div className="h-2 w-4/6 rounded bg-gray-100" />
                      <div className="h-2 w-3/5 rounded bg-gray-100" />
                    </div>

                    {/* Scan-Ecken */}
                    <div className="absolute inset-2 pointer-events-none">
                      <span className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-honey rounded-tl-lg" />
                      <span className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-honey rounded-tr-lg" />
                      <span className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-honey rounded-bl-lg" />
                      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-honey rounded-br-lg" />
                    </div>

                    {/* Laufende Scanlinie */}
                    <div className="hero-scan absolute left-3 right-3 h-[3px] rounded-full bg-honey shadow-glow" />
                  </div>

                  {/* Erkanntes Rezept */}
                  <div className="hero-toast absolute left-4 right-4 bottom-16 rounded-2xl bg-white shadow-soft p-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal flex items-center justify-center text-white shrink-0">
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

                {/* ---------- Bottom-Nav ---------- */}
                <div className="absolute bottom-0 inset-x-0 gradient-teal flex justify-around items-center pt-2 pb-3 z-20">
                  {[
                    { icon: <FiHome size={16} />, label: 'Home' },
                    { icon: <FiCpu size={16} />, label: 'Erni' },
                  ].map((n) => (
                    <span
                      key={n.label}
                      className="flex flex-col items-center gap-0.5 text-white/70 text-[8px]"
                    >
                      {n.icon}
                      {n.label}
                    </span>
                  ))}
                  <span className="flex flex-col items-center gap-0.5 text-white text-[8px]">
                    <span className="w-8 h-8 -mt-1 rounded-xl bg-white/25 flex items-center justify-center">
                      <FiCamera size={16} />
                    </span>
                    Scannen
                  </span>
                  {[
                    { icon: <FiBook size={16} />, label: 'Kochbuch' },
                    { icon: <FiSettings size={16} />, label: 'Mehr' },
                  ].map((n) => (
                    <span
                      key={n.label}
                      className="flex flex-col items-center gap-0.5 text-white/70 text-[8px]"
                    >
                      {n.icon}
                      {n.label}
                    </span>
                  ))}
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
