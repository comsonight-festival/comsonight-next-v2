import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ComSoNight 2025 - Festival Étudiant',
    short_name: 'ComSoNight 2025',
    description: 'Le festival étudiant incontournable ! House, Electro, Deep House et Techno.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ff7a18',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['entertainment', 'music'],
    lang: 'fr',
    orientation: 'portrait-primary',
  }
}