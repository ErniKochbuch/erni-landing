import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Datenschutzerklärung
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          {/* TODO: Datenschutzerklärung einfügen (z. B. via e-recht24.de Generator) */}
          Hier folgt in Kürze unsere vollständige Datenschutzerklärung.
        </p>
        <Link href="/" className="text-teal font-semibold hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
