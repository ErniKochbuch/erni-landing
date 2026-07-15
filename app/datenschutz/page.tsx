import type { Metadata } from 'next';
import Link from 'next/link';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          Datenschutzerklärung
        </h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            1. Verantwortliche Stelle
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <address className="not-italic text-gray-700 leading-relaxed select-none">
            Marie-Claire Schnur
            <br />
            Lembergstraße 3
            <br />
            70188 Stuttgart
            <br />
            Deutschland
          </address>
          <p className="text-gray-700 leading-relaxed mt-2">
            E-Mail:{' '}
            <ObfuscatedEmail className="text-teal font-medium hover:underline" />
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            2. Grundsätzliches
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Der Schutz deiner personenbezogenen Daten ist mir wichtig. Ich
            verarbeite deine Daten ausschließlich auf Grundlage der gesetzlichen
            Bestimmungen (DSGVO, BDSG). Diese Datenschutzerklärung informiert
            dich über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
            dieser Website. Sie bezieht sich auf die Website myerni.de; für die
            Erni-App gelten gesonderte Datenschutzhinweise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            3. Hosting
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut,
            CA 91789, USA) gehostet. Beim Aufruf der Website werden technisch
            notwendige Daten (siehe Server-Logfiles) auf den Servern des
            Anbieters verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einer sicheren und effizienten
            Bereitstellung der Website). Da eine Datenübermittlung in die USA
            nicht ausgeschlossen ist, erfolgt diese auf Grundlage geeigneter
            Garantien (u. a. EU-Standardvertragsklauseln).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            4. Server-Logfiles
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Beim Besuch der Website werden automatisch Informationen erfasst, die
            dein Browser übermittelt – etwa IP-Adresse, Datum und Uhrzeit des
            Zugriffs, aufgerufene Seite, verwendeter Browser und Betriebssystem.
            Diese Daten dienen der technischen Bereitstellung sowie der
            Sicherheit und werden nicht mit anderen Datenquellen zusammengeführt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            5. Kontaktaufnahme per E-Mail
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Wenn du mir per E-Mail schreibst, werden deine Angaben inklusive der
            von dir gemachten Kontaktdaten zur Bearbeitung der Anfrage und für
            den Fall von Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. b DSGVO (Anbahnung/Erfüllung) bzw. lit. f DSGVO
            (berechtigtes Interesse an der Beantwortung). Die Daten werden
            gelöscht, sobald sie nicht mehr erforderlich sind, sofern keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            6. Cookies, Analyse und Tracking
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Diese Website setzt keine Analyse- oder Tracking-Tools ein und nutzt
            keine Cookies zu Analyse- oder Marketingzwecken. Verwendete
            Schriftarten werden lokal ausgeliefert, es findet keine Einbindung
            externer Schrift-Dienste statt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            7. Deine Rechte
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">
            Dir stehen grundsätzlich die folgenden Rechte zu:
          </p>
          <ul className="space-y-1.5 text-sm text-gray-600">
            {[
              'Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)',
              'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
              'Löschung (Art. 17 DSGVO)',
              'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
              'Datenübertragbarkeit (Art. 20 DSGVO)',
              'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
            ].map((right, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Zur Ausübung deiner Rechte genügt eine formlose Nachricht an die oben
            genannte E-Mail-Adresse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            8. Beschwerderecht
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren. Zuständig ist der Landesbeauftragte für den Datenschutz
            und die Informationsfreiheit Baden-Württemberg, Königstraße 10a,
            70173 Stuttgart.
          </p>
        </section>

        <div className="bg-honey/10 border-l-4 border-honey rounded-r-2xl px-6 py-4 mb-10">
          <p className="text-sm font-semibold text-honey-dark mb-1">Hinweis</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Dieser Datenschutztext ist ein sorgfältig erstellter Entwurf und
            ersetzt keine Rechtsberatung. Vor dem Live-Gang solltest du ihn an
            deine konkreten Gegebenheiten anpassen und idealerweise juristisch
            oder über einen Generator (z. B. e-recht24.de) prüfen lassen.
          </p>
        </div>

        <p className="text-xs text-gray-400 mb-8">Stand: Juli 2026</p>

        <Link href="/" className="text-teal font-semibold hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
