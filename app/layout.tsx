import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';
import { SiteChrome } from '@/components/site-chrome';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.systia.fr'),
  title: {
    default: 'SYSTIA — Structuration de systèmes d’activité',
    template: '%s — SYSTIA',
  },
  description:
    'SYSTIA structure, clarifie et conçoit des systèmes numériques sobres, utiles et durables pour les activités professionnelles.',
  openGraph: {
    title: 'SYSTIA — Structuration de systèmes d’activité',
    description:
      'Structuration, clarification et conception de systèmes numériques au service des activités professionnelles.',
    url: 'https://www.systia.fr',
    siteName: 'SYSTIA',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYSTIA — Structuration de systèmes d’activité',
    description:
      'Des systèmes numériques sobres, structurés et durables pour clarifier et développer une activité professionnelle.',
  },
  alternates: {
    canonical: 'https://www.systia.fr',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
