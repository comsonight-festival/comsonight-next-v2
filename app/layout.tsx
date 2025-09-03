import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'ComSoNight 2025 - Festival Étudiant | 20 Septembre UniLaSalle Beauvais',
  description: 'Le festival étudiant incontournable ! House, Electro, Deep House et Techno. Beer Pong Cup, food & drinks. 20 septembre 2025 au campus UniLaSalle Beauvais.',
  keywords: 'festival, étudiant, ComSoNight, Beauvais, UniLaSalle, électro, house, techno, beer pong',
  authors: [{ name: 'ComSoNight Team' }],
  icons: {
    icon: '/icons/icon-192.png',
    shortcut: '/icons/icon-192.png',
    apple: '/icons/icon-512.png',
  },
  openGraph: {
    title: 'ComSoNight 2025 - Festival Étudiant',
    description: 'Le festival étudiant incontournable ! 20 septembre 2025 au campus UniLaSalle Beauvais.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-background-dark dark:bg-background-dark text-primary dark:text-primary transition-colors duration-300">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}