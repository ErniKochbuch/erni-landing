import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-clip">
      {/* Structured Data for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Erni – Mein digitales Kochbuch',
          description: 'App zum Scannen von Kochbuchrezepten mit KI-Coach und intelligenter Wochenplanung',
          url: 'https://myerni.de',
          operatingSystem: ['iOS', 'Android'],
          applicationCategory: 'Lifestyle',
          screenshot: [
            'https://myerni.de/screenshots/1.png',
            'https://myerni.de/screenshots/2.png',
          ],
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '324',
          },
        })}
      </script>

      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Erni',
          url: 'https://myerni.de',
          logo: 'https://myerni.de/logo.png',
          description: 'Digitales Kochbuch mit KI-Coach',
          sameAs: [
            'https://instagram.com/erni.digital',
            'https://twitter.com/erni_digital',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+49-XXX-XXXXXXX',
            contactType: 'Support',
            email: 'hallo@myerni.de',
          },
        })}
      </script>

      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
