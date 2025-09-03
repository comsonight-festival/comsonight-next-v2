'use client'

import { artists } from '@/lib/content'
import { Instagram, Music, Clock, Play } from 'lucide-react'
import Image from 'next/image'

export default function Lineup() {
  return (
    <section id="lineup" className="section-padding bg-background-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Lineup 2025
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            5 artistes exceptionnels pour une nuit électrisante sur la Main Stage
          </p>
        </div>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card-dark border border-festival-orange px-6 py-3 rounded-full">
            <Music className="w-5 h-5 text-festival-orange" />
            <span className="font-medium text-festival-orange">MAIN STAGE</span>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className={`group card animate-slide-up hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-festival-orange/10 ${
                artist.isComingSoon ? 'border-dashed border-2 border-festival-orange/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Artist Image or Coming Soon Placeholder */}
                <div className="relative mb-6 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-festival-orange to-festival-red flex items-center justify-center relative">
                    {artist.isComingSoon ? (
                      <div className="text-center text-white/80">
                        <div className="text-4xl font-bold mb-2">?</div>
                        <div className="text-lg font-semibold">Coming Soon</div>
                      </div>
                    ) : artist.image ? (
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-white/50 transition-all duration-300 group-hover:scale-110">
                        {artist.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  {/* Genre Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    {artist.genre}
                  </div>
                  {/* Group Badge or Coming Soon Badge */}
                  {artist.isComingSoon ? (
                    <div className="absolute top-4 right-4 bg-festival-orange/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      BIENTÔT
                    </div>
                  ) : artist.isDuo && artist.name === 'HDX' ? (
                    <div className="absolute top-4 right-4 bg-festival-orange/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                      TRIO
                    </div>
                  ) : artist.isDuo && (
                    <div className="absolute top-4 right-4 bg-festival-orange/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                      DUO
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-festival-orange transition-colors duration-300">
                      {artist.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-festival-orange font-medium mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-lg font-semibold">{artist.timeSlot}</span>
                    </div>

                    <div className="flex items-center gap-2 text-secondary mb-4">
                      <Music className="w-4 h-4" />
                      <span className="font-medium">{artist.stage}</span>
                    </div>
                  </div>

                  {artist.description && (
                    <p className="text-secondary mb-6 flex-grow leading-relaxed">
                      {artist.description}
                    </p>
                  )}
                </div>
                
                {!artist.isComingSoon && (
                  <div className="flex items-center justify-between pt-6 border-t border-dark-700/50">
                    <div className="flex items-center gap-3">
                      {/* Only show round play button for solo artists */}
                      {artist.socialLinks?.soundcloud && !artist.isDuo && (
                        <button
                          onClick={() => window.open(artist.socialLinks?.soundcloud, '_blank')}
                          className="group relative w-12 h-12 bg-gradient-to-r from-festival-orange to-festival-red rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-festival-orange/30 hover:rotate-12"
                          aria-label={`Écouter ${artist.name} sur SoundCloud`}
                        >
                          <Play className="w-5 h-5 text-white ml-0.5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" />
                          <div className="absolute inset-0 rounded-full bg-festival-orange animate-ping opacity-20 group-hover:animate-none"></div>
                        </button>
                      )}
                      
                      {/* For duos, show a different style */}
                      {artist.socialLinks?.soundcloud && artist.isDuo && (
                        <a
                          href={artist.socialLinks.soundcloud}
                          className="group flex items-center gap-2 bg-gradient-to-r from-festival-orange/10 to-festival-red/10 text-festival-orange px-4 py-2 rounded-full transition-all duration-300 hover:from-festival-orange hover:to-festival-red hover:text-white hover:scale-105 border border-festival-orange/20"
                          aria-label={`Écouter ${artist.name} sur SoundCloud`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm font-medium">Écouter</span>
                        </a>
                      )}
                      
                      {artist.socialLinks?.instagram && (
                        <a
                          href={artist.socialLinks.instagram}
                          className="min-w-[44px] min-h-[44px] w-12 h-12 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full flex items-center justify-center text-secondary hover:text-pink-400 hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                          aria-label={`Instagram de ${artist.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      
                      {artist.socialLinks?.spotify && (
                        <a
                          href={artist.socialLinks.spotify}
                          className="min-w-[44px] min-h-[44px] w-12 h-12 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-full flex items-center justify-center text-secondary hover:text-green-400 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                          aria-label={`Spotify de ${artist.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Music className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                    <a
                      href={`/artists/${artist.slug}`}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-festival-orange to-festival-red text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-festival-orange/30 hover:from-festival-red hover:to-festival-orange transform group-hover:-translate-y-0.5"
                    >
                      <span className="font-semibold">En savoir plus</span>
                      <div className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125">
                        →
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">Programme de la soirée</h3>
          <div className="max-w-2xl mx-auto">
            <div className="card-surface">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-festival-orange" />
                  <h4 className="font-bold text-festival-orange text-lg">MAIN STAGE</h4>
                </div>
              </div>
              <div className="space-y-3">
                {artists
                  .filter((artist) => !artist.isComingSoon)
                  .sort((a, b) => {
                    // Convert time to 24h format for proper sorting
                    const timeA = a.startTime.includes(':') ? a.startTime : a.startTime + ':00'
                    const timeB = b.startTime.includes(':') ? b.startTime : b.startTime + ':00'
                    return timeA.localeCompare(timeB)
                  })
                  .map((artist) => (
                    <div key={artist.id} className="flex items-center justify-between py-3 border-b border-dark-700 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-festival-gradient rounded-full"></div>
                        <span className="font-medium text-primary">{artist.name}</span>
                        <span className="text-xs px-2 py-1 bg-dark-700 text-secondary rounded">{artist.genre}</span>
                      </div>
                      <span className="text-festival-orange font-medium">{artist.timeSlot}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}