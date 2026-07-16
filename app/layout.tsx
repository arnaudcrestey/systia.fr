import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";

const siteUrl = "https://www.systia.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SYSTIA | Structuration d’activités",
    template: "%s — SYSTIA",
  },

  description:
    "SYSTIA structure, clarifie et conçoit des systèmes numériques sobres, utiles et durables pour les activités professionnelles.",

  applicationName: "SYSTIA",

  authors: [
    {
      name: "Arnaud Crestey",
      url: siteUrl,
    },
  ],

  creator: "Arnaud Crestey",
  publisher: "Arnaud Crestey",

  category: "Technologie",

  keywords: [
    "SYSTIA",
    "structuration d’activité",
    "systèmes numériques",
    "organisation",
    "automatisation",
    "intelligence artificielle",
    "développement d’activité",
    "transformation numérique",
    "Arnaud Crestey",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "SYSTIA",
    title: "SYSTIA | Structuration d’activités",
    description:
      "Structuration, clarification et conception de systèmes numériques au service des activités professionnelles.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "SYSTIA — Conception de systèmes d’activité",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SYSTIA | Structuration d’activités",
    description:
      "Des systèmes numériques sobres, structurés et durables pour clarifier et développer une activité professionnelle.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SYSTIA",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      image: `${siteUrl}/opengraph-image.jpg`,
      description:
        "SYSTIA structure, clarifie et conçoit des systèmes numériques sobres, utiles et durables pour les activités professionnelles.",
      founder: {
        "@type": "Person",
        name: "Arnaud Crestey",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SYSTIA",
      description:
        "Structuration, clarification et conception de systèmes numériques au service des activités professionnelles.",
      inLanguage: "fr-FR",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <SiteChrome>{children}</SiteChrome>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
