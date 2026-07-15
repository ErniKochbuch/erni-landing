'use client';

import { useEffect, useState } from 'react';

/**
 * Zeigt die E-Mail lesbar an, erschwert aber das Kopieren und das
 * automatische Auslesen durch Spam-Bots:
 * - Ohne JS steht im Quelltext nur "info [at] myerni [dot] de" (kein gültiges
 *   E-Mail-Muster) → für einfache Harvester unbrauchbar, für Menschen lesbar.
 * - Mit JS wird daraus ein echter, klickbarer mailto-Link.
 * - Text ist nicht markierbar (select-none) und Kopieren wird unterbunden.
 */
export default function ObfuscatedEmail({
  subject,
  className = '',
  label,
  children,
}: {
  subject?: string;
  className?: string;
  /** Optionaler Linktext (z. B. "Kontakt"). Ohne Label/Children wird die E-Mail angezeigt. */
  label?: string;
  /** Beliebiger Inhalt (z. B. Icon + Text) für Buttons. */
  children?: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const user = 'info';
  const domain = 'myerni.de';
  const email = `${user}@${domain}`;

  const content =
    children ?? label ?? `${user} [at] ${domain.replace('.', ' [dot] ')}`;

  if (!ready) {
    return <span className={`select-none ${className}`}>{content}</span>;
  }

  const href = `mailto:${email}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ''
  }`;

  return (
    <a
      href={href}
      className={`select-none ${className}`}
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children ?? label ?? email}
    </a>
  );
}
