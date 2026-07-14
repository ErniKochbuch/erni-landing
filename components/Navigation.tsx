'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#stimmen', label: 'Stimmen' },
  { href: '#download', label: 'Download' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className={`w-9 h-9 rounded-xl gradient-teal flex items-center justify-center text-white font-bold text-lg shadow-card group-hover:rotate-6 transition-transform`}
          >
            E
          </span>
          <span
            className={`text-xl font-bold tracking-tight ${
              scrolled ? 'text-gray-900' : 'text-white'
            } transition-colors`}
          >
            Erni
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-amber transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-white text-sm font-semibold hover:bg-amber-dark hover:shadow-glow transition-all"
          >
            <FiDownload size={16} />
            App laden
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden shadow-soft"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-800 font-medium hover:bg-teal-50 hover:text-teal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
