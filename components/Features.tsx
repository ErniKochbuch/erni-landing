'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FiCamera,
  FiMessageSquare,
  FiCalendar,
  FiBook,
} from 'react-icons/fi';

type Feature = {
  icon: IconType;
  title: string;
  description: string;
  color: string;
  bg: string;
};

const features: Feature[] = [
  {
    icon: FiCamera,
    title: 'Rezepte scannen',
    description:
      'Fotografiere eine Seite aus deinem Lieblingskochbuch – Erni liest das Rezept automatisch aus. Kein Abtippen mehr.',
    color: '#1D9E75',
    bg: 'rgba(29, 158, 117, 0.10)',
  },
  {
    icon: FiMessageSquare,
    title: 'Dein KI-Coach',
    description:
      'Frag Erni nach Tipps, Zutaten-Alternativen und Varianten – dein persönlicher Coach, immer an deiner Seite.',
    color: '#85B7EB',
    bg: 'rgba(133, 183, 235, 0.14)',
  },
  {
    icon: FiCalendar,
    title: 'Wochenplaner',
    description:
      'Erni plant deine Woche intelligent – abgestimmt auf Saison, Vorlieben und deine Ernährungsziele.',
    color: '#EF9F27',
    bg: 'rgba(239, 159, 39, 0.12)',
  },
  {
    icon: FiBook,
    title: 'Dein Kochbuch',
    description:
      'Sammle alle Rezepte an einem Ort, organisiere sie in Kategorien und teile deine Favoriten mit Freunden.',
    color: '#1D9E75',
    bg: 'rgba(29, 158, 117, 0.10)',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-50 text-teal text-sm font-semibold">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Was macht Erni besonders?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Vom Foto zum fertigen Wochenplan – Erni begleitet dich bei jedem
            Schritt in der Küche.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group p-7 bg-white rounded-3xl shadow-soft hover:shadow-card border border-transparent hover:border-teal-100 transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: feature.bg, color: feature.color }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
