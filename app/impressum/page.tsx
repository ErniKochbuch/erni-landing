import type { Metadata } from 'next';
import Link from 'next/link';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Angaben gemäß § 5 DDG
          </h2>
          <address className="not-italic text-gray-700 leading-relaxed select-none">
            Marie-Claire Schnur
            <br />
            Lembergstraße 3
            <br />
            70188 Stuttgart
            <br />
            Deutschland
          </address>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Kontakt</h2>
          <p className="text-gray-700 leading-relaxed">
            E-Mail:{' '}
            <ObfuscatedEmail className="text-teal font-medium hover:underline" />
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <address className="not-italic text-gray-700 leading-relaxed select-none">
            Marie-Claire Schnur
            <br />
            Lembergstraße 3
            <br />
            70188 Stuttgart
          </address>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Haftung für Inhalte
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieterin
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Haftung für Links
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Mein Angebot enthält gegebenenfalls Links zu externen Websites
            Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich
            für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Urheberrecht
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung. Beiträge Dritter sind als solche
            gekennzeichnet.
          </p>
        </section>

        <Link href="/" className="text-teal font-semibold hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
