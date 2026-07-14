'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Anna K.',
    role: 'Hobbyköchin & Food-Bloggerin',
    text: 'Endlich kann ich Omas Kochbücher digitalisieren, ohne stundenlang abzutippen. Foto machen, fertig – Erni macht das so einfach!',
    initials: 'AK',
    color: '#1D9E75',
  },
  {
    name: 'Marcus B.',
    role: 'Fitness-Trainer',
    text: 'Der Wochenplaner mit gesunden Varianten ist genau das, was ich für meine Klienten gebraucht habe. Große Empfehlung!',
    initials: 'MB',
    color: '#85B7EB',
  },
  {
    name: 'Lisa M.',
    role: 'Berufstätige Mama',
    text: 'Keine Zeit zum Planen? Erni übernimmt das für mich – und die Einkaufsliste gleich mit. Genialer Lifehack für den Alltag!',
    initials: 'LM',
    color: '#EF9F27',
  },
];

export default function Testimonials() {
  return (
    <section id="stimmen" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber/10 text-amber-dark text-sm font-semibold">
            Stimmen
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Das sagen unsere Nutzer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Von Hobbyköchen bis Meal-Prep-Profis – Erni kocht mit allen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              className="relative p-7 bg-cream rounded-3xl shadow-soft hover:shadow-card transition-shadow"
            >
              {/* Sterne */}
              <div className="flex gap-1 mb-4" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 + i * 0.07 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FaStar size={16} className="text-amber" />
                  </motion.span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                &bdquo;{t.text}&ldquo;
              </p>

              <div className="flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
