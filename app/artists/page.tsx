import { Metadata } from 'next'
import { artists } from '@/lib/content'
import { Clock, Music, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lineup ComSoNight 2025 - Tous les artistes',
  description: 'Découvrez tous les artistes du festival ComSoNight 2025 : CMP x VAUSONGS, Maman, DUBUS & FRIENDS, TEKATS',
}

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-festival-gradient text-white py-20">
        <div className="container-max px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lineup 2025</h1>
          <p className="text-xl text-white/90">
            Découvrez tous les artistes qui vous feront danser le 20 septembre
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-max">
          <div className="grid gap-8 md:grid-cols-2">
            {artists.map((artist) => (
              <Link 
                key={artist.id} 
                href={`/artists/${artist.slug}`}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {artist.name}
                    </h2>
                    <div className="flex items-center gap-2 text-festival-orange font-medium mb-2">
                      <Music className="w-4 h-4" />
                      <span>{artist.genre}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{artist.timeSlot}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-festival-orange text-white">
                    {artist.stage}
                  </div>
                </div>
                
                {artist.description && (
                  <p className="text-gray-600 mb-4">
                    {artist.description}
                  </p>
                )}
                
                <div className="text-festival-orange font-medium">
                  En savoir plus →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}