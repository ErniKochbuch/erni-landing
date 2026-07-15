import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiClock } from 'react-icons/fi';
import { posts } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: 'Artikel nicht gefunden' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://myerni.de/blog/${post.slug}`,
    },
  };
}

function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const plainText = post.content
    .map((b) =>
      b.type === 'ul' ? b.items.join(' ') : 'text' in b ? b.text : ''
    )
    .join(' ');
  const minutes = readingMinutes(plainText);

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'Erni' },
          publisher: { '@type': 'Organization', name: 'Erni' },
          mainEntityOfPage: `https://myerni.de/blog/${post.slug}`,
        })}
      </script>

      <article className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal mb-8 hover:gap-3 transition-all"
          >
            <FiArrowLeft size={16} />
            Zurück zum Blog
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.date}</span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <FiClock size={13} />
              {minutes} Min. Lesezeit
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            {post.excerpt}
          </p>

          <div className="space-y-5">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-gray-900 mt-10 mb-1"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'p') {
                return (
                  <p key={i} className="text-gray-700 leading-relaxed text-[17px]">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="space-y-2.5">
                    {block.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'tip') {
                return (
                  <div
                    key={i}
                    className="bg-honey/10 border-l-4 border-honey rounded-r-2xl px-6 py-4"
                  >
                    <p className="text-sm font-semibold text-honey-dark mb-1">
                      Tipp
                    </p>
                    <p className="text-gray-700 leading-relaxed">{block.text}</p>
                  </div>
                );
              }
              // cta
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-soft p-7 my-8 border border-teal-50"
                >
                  <p className="text-gray-700 leading-relaxed mb-4">{block.text}</p>
                  <Link
                    href={block.href}
                    className="inline-flex items-center gap-2 font-semibold text-teal hover:gap-3 transition-all"
                  >
                    {block.label}
                    <FiArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Download CTA */}
          <div className="mt-16 bg-gradient-teal rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Koch smarter mit Erni</h2>
            <p className="opacity-90 mb-6">
              Rezepte scannen, die Woche planen, alles an einem Ort. Jetzt
              kostenlos starten.
            </p>
            <Link
              href="/#download"
              className="inline-block px-8 py-4 bg-white text-teal font-semibold rounded-2xl hover:shadow-lg transition-shadow"
            >
              App laden
            </Link>
          </div>

          {/* Weitere Artikel */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Weitere Artikel
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-shadow"
                >
                  <span className="text-xs font-semibold text-teal">
                    {r.category}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 mt-1 leading-snug">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
