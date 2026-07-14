import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://myerni.de'),
  title: {
    default: 'Erni – Mein digitales Kochbuch | Rezepte scannen mit KI',
    template: '%s | Erni',
  },
  description:
    'Fotografiere eine Kochbuchseite und Erni liest das Rezept aus. Dein KI-Coach fürs Kochen, Planen und gesunde Ernährung. Jetzt für iOS und Android.',
  keywords: [
    'Rezepte scannen',
    'digitales Kochbuch',
    'KI Kochassistent',
    'Wochenplaner',
    'Meal Planning',
    'Ernährungscoach',
    'Rezepte App',
  ],
  authors: [{ name: 'Erni' }],
  openGraph: {
    title: 'Erni – Mein digitales Kochbuch',
    description:
      'Rezepte scannen, mit dem KI-Coach kochen, die Woche planen. Deine Rezepte, überall dabei.',
    url: 'https://myerni.de',
    siteName: 'Erni',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erni – Mein digitales Kochbuch',
    description:
      'Rezepte scannen, mit dem KI-Coach kochen, die Woche planen.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-inter bg-cream text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
