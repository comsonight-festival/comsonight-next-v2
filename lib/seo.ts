import { Metadata } from 'next'

const siteUrl = 'https://comsonight.vercel.app'
const siteName = 'ComSoNight 2025'

export const defaultMetadata: Metadata = {
  title: {
    default: 'ComSoNight 2025 - Festival Étudiant | 20 Septembre UniLaSalle Beauvais',
    template: '%s | ComSoNight 2025'
  },
  description: 'Le festival étudiant incontournable ! House, Electro, Deep House et Techno. Beer Pong Cup, food & drinks. 20 septembre 2025 au campus UniLaSalle Beauvais.',
  keywords: [
    'festival',
    'étudiant',
    'ComSoNight',
    'Beauvais',
    'UniLaSalle',
    'électro',
    'house',
    'techno',
    'beer pong',
    'musique électronique',
    'soirée étudiante'
  ],
  authors: [{ name: 'ComSoNight Team', url: siteUrl }],
  creator: 'ComSoNight Team',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title: 'ComSoNight 2025 - Festival Étudiant',
    description: 'Le festival étudiant incontournable ! 20 septembre 2025 au campus UniLaSalle Beauvais.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ComSoNight 2025 Festival',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComSoNight 2025 - Festival Étudiant',
    description: 'Le festival étudiant incontournable ! 20 septembre 2025 au campus UniLaSalle Beauvais.',
    images: [`${siteUrl}/images/og-image.jpg`],
    creator: '@comsonight',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': siteUrl,
    },
  },
  category: 'entertainment',
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: 'ComSoNight 2025',
    description: 'Festival étudiant de musique électronique à Beauvais',
    startDate: '2025-09-20T16:00:00+02:00',
    endDate: '2025-09-21T04:00:00+02:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Campus UniLaSalle Beauvais',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '19 Rue Pierre Waguet',
        addressLocality: 'Beauvais',
        postalCode: '60000',
        addressCountry: 'FR'
      }
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Billet Étudiant',
        price: '12.50',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}/#billetterie`
      },
      {
        '@type': 'Offer',
        name: 'Billet Adulte',
        price: '14.50',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}/#billetterie`
      }
    ],
    performer: [
      {
        '@type': 'MusicGroup',
        name: 'CMP x VAUSONGS'
      },
      {
        '@type': 'MusicGroup',
        name: 'Maman'
      },
      {
        '@type': 'MusicGroup',
        name: 'DUBUS & FRIENDS'
      },
      {
        '@type': 'MusicGroup',
        name: 'Ponsin x Cressot'
      },
      {
        '@type': 'MusicGroup',
        name: 'HDX'
      }
    ],
    organizer: {
      '@type': 'Organization',
      name: 'ComSoNight',
      url: siteUrl
    }
  }
}