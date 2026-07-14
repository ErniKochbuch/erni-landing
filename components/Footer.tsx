export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center text-white font-bold text-lg">
                E
              </span>
              <span className="text-xl font-bold text-white">Erni</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Dein digitales Kochbuch mit KI-Coach. Rezepte scannen, Woche
              planen, besser kochen – auf iOS und Android.
            </p>
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
                <a href="#stimmen" className="hover:text-white transition-colors">
                  Stimmen
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
                <a
                  href="mailto:hallo@myerni.de"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </a>
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
