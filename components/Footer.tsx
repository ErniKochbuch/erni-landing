import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/logo-white.png"
              alt="my.erni – Mein digitales Kochbuch"
              width={130}
              height={54}
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed max-w-sm mb-5">
              Dein digitales Kochbuch mit KI-Coach. Rezepte scannen, Woche
              planen, besser kochen – auf iOS und Android.
            </p>
            <a
              href="https://www.instagram.com/my.erni/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Erni auf Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              App
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Rechtliches
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <ObfuscatedEmail
                  subject="Erni-Anfrage"
                  label="Kontakt"
                  className="hover:text-white transition-colors"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {year} Erni. Alle Rechte vorbehalten.</p>
          <p>
            Gemacht mit <span aria-hidden="true">🧡</span> für besseres Kochen
          </p>
        </div>
      </div>
    </footer>
  );
}
