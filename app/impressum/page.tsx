import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Impressum</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          {/* TODO: Name, Anschrift und Kontaktdaten gemäß § 5 TMG einfügen */}
          Angaben gemäß § 5 TMG folgen in Kürze.
        </p>
        <Link href="/" className="text-teal font-semibold hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
