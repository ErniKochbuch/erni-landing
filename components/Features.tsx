'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import {
  FiCamera,
  FiMessageSquare,
  FiCalendar,
  FiBook,
  FiCheck,
  FiArrowRight,
  FiZap,
  FiShoppingCart,
  FiHeart,
  FiSearch,
  FiCpu,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

type Badge = {
  icon: IconType;
  label: string;
  sub?: string;
  pos: string;
  tint: 'teal' | 'honey' | 'pink' | 'whatsapp';
};

type Feature = {
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  image: string;
  href: string;
  color: string;
  bg: string;
  glow: string;
  badges: Badge[];
  scan?: boolean;
};

const tints: Record<Badge['tint'], { bg: string; color: string }> = {
  teal: { bg: 'rgba(29, 158, 117, 0.12)', color: '#1D9E75' },
  honey: { bg: 'rgba(242, 201, 76, 0.20)', color: '#c99a12' },
  pink: { bg: 'rgba(212, 83, 126, 0.14)', color: '#d4537e' },
  whatsapp: { bg: 'rgba(37, 211, 102, 0.15)', color: '#1faa4e' },
};

const features: Feature[] = [
  {
    kicker: 'Scannen',
    title: 'Rezepte scannen statt abtippen',
    description:
      'Halte die Kamera auf eine Kochbuchseite oder ein handgeschriebenes Rezept – Erni liest Titel, Zutaten und Zubereitung heraus und legt alles sauber strukturiert in deinem Kochbuch ab. Kein Abtippen, keine Tippfehler. Genauso funktioniert es mit Links von Chefkoch, Instagram und Co. oder ganz klassisch per Hand.',
    bullets: [
      'Foto, Galerie oder Web-Link als Quelle',
      'Zutaten & Schritte in Sekunden erkannt',
      'Landet direkt sortiert im Kochbuch',
    ],
    icon: FiCamera,
    image: '/screenshots/scan.png',
    href: '/features/rezepte-scannen',
    color: '#1D9E75',
    bg: 'rgba(29, 158, 117, 0.10)',
    glow: 'rgba(29, 158, 117, 0.18)',
    scan: true,
    badges: [
      { icon: FiZap, label: 'Erkannt in Sekunden', pos: '-left-6 top-10', tint: 'honey' },
      { icon: FiCheck, label: 'Rezept gespeichert', sub: 'Pasta al Limone', pos: '-right-4 bottom-24', tint: 'teal' },
    ],
  },
  {
    kicker: 'KI-Coach',
    title: 'Dein persönlicher Koch-Assistent',
    description:
      'Erni ist der Koch-Assistent, der mitdenkt. Frag nach einem schnellen Frühstück, nach etwas Leichtem bei Hitze oder was zu den Resten im Kühlschrank passt – du bekommst konkrete Rezeptideen, Mengen und Alternativen. Gefällt dir ein Vorschlag, wandert er mit einem Tipp direkt in deine Sammlung.',
    bullets: [
      'Antworten in Echtzeit im Chat',
      'Ideen nach Saison, Wetter & Vorräten',
      'Vorschläge direkt speichern',
    ],
    icon: FiMessageSquare,
    image: '/screenshots/coach.png',
    href: '/features/ai-coach',
    color: '#1D9E75',
    bg: 'rgba(168, 230, 207, 0.30)',
    glow: 'rgba(168, 230, 207, 0.35)',
    badges: [
      { icon: FiCpu, label: 'KI-Coach Erni', sub: 'immer online', pos: '-left-5 top-12', tint: 'teal' },
      { icon: FiMessageSquare, label: 'Antwort in Echtzeit', pos: '-right-6 bottom-28', tint: 'honey' },
    ],
  },
  {
    kicker: 'Wochenplaner',
    title: 'Deine Woche, automatisch geplant',
    description:
      'Lass Erni deine Woche planen – abgestimmt auf Saison, deine Ziele und wie viel Zeit du hast. Aus dem fertigen Plan erstellt Erni automatisch die Einkaufsliste, sortiert nach Kategorien und über alle Rezepte zusammengefasst. Umplanen geht mit einem Tipp, teilen per WhatsApp mit dem Rest der Familie ebenso.',
    bullets: [
      'Automatischer Wochenplan per Klick',
      'Einkaufsliste aus allen Rezepten',
      'Umplanen & per WhatsApp teilen',
    ],
    icon: FiCalendar,
    image: '/screenshots/planner.png',
    href: '/features/wochenplaner',
    color: '#f0b032',
    bg: 'rgba(242, 201, 76, 0.15)',
    glow: 'rgba(242, 201, 76, 0.22)',
    badges: [
      { icon: FiShoppingCart, label: 'Einkaufsliste', sub: '61 Zutaten', pos: '-left-6 top-10', tint: 'honey' },
      { icon: FaWhatsapp, label: 'Per WhatsApp teilen', pos: '-right-4 bottom-24', tint: 'whatsapp' },
    ],
  },
  {
    kicker: 'Kochbuch',
    title: 'Alle Rezepte an einem Ort',
    description:
      'Ob gescannt, aus dem Web oder selbst eingetragen – all deine Rezepte leben an einem Ort. Organisiere sie in Kategorien wie Salate, Backen oder Asiatisch, markiere Favoriten und finde jedes Gericht in Sekunden über die Suche. Dein digitales Koch-Erbe, das du mit Familie und Freunden teilen kannst.',
    bullets: [
      'Kategorien & Favoriten',
      'Schnelle Volltextsuche',
      'Zum Teilen mit Familie & Freunden',
    ],
    icon: FiBook,
    image: '/screenshots/cookbook.png',
    href: '/features/kochbuch',
    color: '#1D9E75',
    bg: 'rgba(29, 158, 117, 0.10)',
    glow: 'rgba(29, 158, 117, 0.18)',
    badges: [
      { icon: FiHeart, label: 'Favoriten', sub: '6 Rezepte', pos: '-left-5 top-12', tint: 'pink' },
      { icon: FiSearch, label: 'Volltextsuche', pos: '-right-5 bottom-28', tint: 'teal' },
    ],
  },
];

function FloatingBadge({ badge, delay }: { badge: Badge; delay: number }) {
  const Icon = badge.icon;
  const t = tints[badge.tint];
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute ${badge.pos} z-20 hidden sm:flex items-center gap-2 glass rounded-2xl px-3.5 py-2.5 shadow-card`}
    >
      <span
        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: t.bg, color: t.color }}
      >
        <Icon size={16} />
      </span>
      <div className="leading-tight">
        <p className="text-xs font-semibold text-gray-800">{badge.label}</p>
        {badge.sub && <p className="text-[10px] text-gray-500">{badge.sub}</p>}
      </div>
    </motion.div>
  );
}

function FeatureRow({ feature, reverse }: { feature: Feature; reverse: boolean }) {
  const Icon = feature.icon;
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        className={reverse ? 'lg:order-2' : ''}
      >
        <span
          className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-sm font-semibold"
          style={{ backgroundColor: feature.bg, color: feature.color }}
        >
          <Icon size={15} />
          {feature.kicker}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {feature.title}
        </h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg">
          {feature.description}
        </p>
        <ul className="space-y-2.5 mb-7">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-gray-700">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: feature.bg, color: feature.color }}
              >
                <FiCheck size={12} />
              </span>
              <span className="text-sm md:text-base">{b}</span>
            </li>
          ))}
        </ul>
        <Link
          href={feature.href}
          className="inline-flex items-center gap-2 font-semibold text-teal hover:gap-3 transition-all"
        >
          Mehr erfahren
          <FiArrowRight size={18} />
        </Link>
      </motion.div>

      {/* Screenshot + schwebende Elemente */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        className={`relative flex justify-center ${reverse ? 'lg:order-1' : ''}`}
      >
        {/* Glow-Blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: feature.glow }}
        />

        {/* Phone-Anker */}
        <div className="relative">
          <div className="animate-float">
            <Image
              src={feature.image}
              alt={feature.title}
              width={720}
              height={1564}
              className="relative w-[240px] md:w-[280px] h-auto drop-shadow-2xl"
            />

            {/* Scan-Sweep nur beim Scan-Feature */}
            {feature.scan && (
              <div className="absolute inset-x-[13%] top-[15%] bottom-[16%] overflow-hidden rounded-2xl pointer-events-none">
                <div className="hero-scan absolute left-0 right-0 h-[3px] rounded-full bg-honey shadow-glow" />
              </div>
            )}
          </div>

          {feature.badges.map((badge, i) => (
            <FloatingBadge key={badge.label} badge={badge} delay={i * 0.8} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-50 text-teal text-sm font-semibold">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Leidenschaft trifft Intelligenz
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Deine Liebe zum Kochen verdient keinen Planungsstress. Erni kennt die Lösungen.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-36">
          {features.map((feature, i) => (
            <FeatureRow key={feature.title} feature={feature} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
