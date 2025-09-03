import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { artists } from '@/lib/content'
import { Clock, Music, ArrowLeft, Instagram, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ArtistPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return artists
    .filter((artist) => !artist.isComingSoon)
    .map((artist) => ({
      slug: artist.slug,
    }))
}

export async function generateMetadata({ params }: ArtistPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const artist = artists.find((a) => a.slug === resolvedParams.slug)
  
  if (!artist) {
    return {
      title: 'Artiste non trouvé',
    }
  }
  
  return {
    title: `${artist.name} - ComSoNight 2025`,
    description: `Découvrez ${artist.name}, artiste ${artist.genre} qui se produira sur la scène ${artist.stage} de ${artist.startTime} à ${artist.endTime} au festival ComSoNight 2025.`,
  }
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const resolvedParams = await params
  const artist = artists.find((a) => a.slug === resolvedParams.slug)
  
  if (!artist) {
    notFound()
  }
  
  const realArtists = artists.filter((a) => !a.isComingSoon)
  const currentIndex = realArtists.findIndex((a) => a.slug === resolvedParams.slug)
  const prevArtist = currentIndex > 0 ? realArtists[currentIndex - 1] : realArtists[realArtists.length - 1]
  const nextArtist = currentIndex < realArtists.length - 1 ? realArtists[currentIndex + 1] : realArtists[0]
  
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Navigation arrows */}
      <Link 
        href={`/artists/${prevArtist.slug}`}
        className="fixed top-1/2 left-4 z-10 transform -translate-y-1/2 group bg-card-dark/90 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-card-dark transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </Link>
      <Link 
        href={`/artists/${nextArtist.slug}`}
        className="fixed top-1/2 right-4 z-10 transform -translate-y-1/2 group bg-card-dark/90 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-card-dark transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </Link>

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Dark background effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-festival-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-festival-red/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23374151%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h40v1H0V0zm0%2039h40v1H0v-1z%22/%3E%3Cpath%20d%3D%22M0%200v40h1V0H0zm39%200v40h1V0h-1z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20 pointer-events-none"></div>
        <div className="container-max px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">{artist.name}</h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <Music className="w-5 h-5" />
                  <span className="text-lg font-medium">{artist.genre}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg">{artist.timeSlot}</span>
                </div>
                <div className="px-4 py-2 rounded-full font-medium bg-festival-orange text-white">
                  {artist.stage}
                </div>
              </div>
              
              {artist.description && (
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {artist.description}
                </p>
              )}
              
              {/* Social Links and Players */}
              {artist.isDuo && artist.members ? (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {artist.name === 'HDX' ? 'Membres du trio' : 'Membres du duo'}
                  </h3>
                  {artist.members.map((member, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{member.name}</h4>
                          {member.role && (
                            <p className="text-white/80">{member.role}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* SoundCloud Player for member */}
                      {member.socialLinks?.soundcloud && (
                        <div className="mb-4">
                          <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(member.socialLinks.soundcloud)}&color=%23ff5722&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                            className="rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-3">
                        {member.socialLinks?.soundcloud && (
                          <a
                            href={member.socialLinks.soundcloud}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Play className="w-4 h-4" />
                            SoundCloud
                          </a>
                        )}
                        {member.socialLinks?.spotify && (
                          <a
                            href={member.socialLinks.spotify}
                            className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full font-medium hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Spotify
                          </a>
                        )}
                        {member.socialLinks?.instagram && (
                          <a
                            href={member.socialLinks.instagram}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="w-4 h-4" />
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* SoundCloud Player for solo artist */}
                  {artist.socialLinks?.soundcloud && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Écouter les morceaux</h3>
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(artist.socialLinks.soundcloud)}&color=%23ff5722&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-4">
                    {artist.socialLinks?.soundcloud && (
                      <a
                        href={artist.socialLinks.soundcloud}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-5 h-5" />
                        SoundCloud
                      </a>
                    )}
                    {artist.socialLinks?.instagram && (
                      <a
                        href={artist.socialLinks.instagram}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5" />
                        Instagram
                      </a>
                    )}
                    {artist.socialLinks?.spotify && (
                      <a
                        href={artist.socialLinks.spotify}
                        className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-6 py-3 rounded-full font-medium hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Spotify
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:text-center">
              {/* Artist Image */}
              <div className="relative mb-8 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-festival-orange to-festival-red flex items-center justify-center">
                  {artist.image ? (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="text-8xl font-bold text-white/50">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Infos set</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-festival-orange">{artist.startTime}</div>
                    <div className="text-white/80 text-sm">Début</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-festival-orange">{artist.endTime}</div>
                    <div className="text-white/80 text-sm">Fin</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-xl font-bold text-white mb-2">{artist.stage}</div>
                  <div className="text-white/80 text-sm">Campus UniLaSalle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-padding bg-surface-dark">
        <div className="container-max">
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Découvrir {artist.name}
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-festival-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-festival-orange" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Style Musical</h3>
                <p className="text-secondary">
                  {artist.genre} - Un style unique qui saura vous faire vibrer toute la soirée
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-festival-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-festival-red" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Durée du Set</h3>
                <p className="text-secondary">
                  {((new Date(`2025-09-20T${artist.endTime}:00`).getTime() - new Date(`2025-09-20T${artist.startTime}:00`).getTime()) / (1000 * 60))} minutes 
                  de musique non-stop pour vous faire danser
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Performance Live</h3>
                <p className="text-secondary">
                  Performance exclusive au festival ComSoNight avec du matériel professionnel
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation between artists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link 
              href={`/artists/${prevArtist.slug}`}
              className="card group hover:border-festival-orange transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <ChevronLeft className="w-6 h-6 text-festival-orange" />
                <div className="flex-1">
                  <p className="text-secondary text-sm mb-1">Artiste précédent</p>
                  <p className="text-primary font-semibold group-hover:text-festival-orange transition-colors">
                    {prevArtist.name}
                  </p>
                  <p className="text-secondary text-sm">{prevArtist.genre}</p>
                </div>
              </div>
            </Link>
            
            <Link 
              href={`/artists/${nextArtist.slug}`}
              className="card group hover:border-festival-orange transition-all duration-300 text-right"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-secondary text-sm mb-1">Artiste suivant</p>
                  <p className="text-primary font-semibold group-hover:text-festival-orange transition-colors">
                    {nextArtist.name}
                  </p>
                  <p className="text-secondary text-sm">{nextArtist.genre}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-festival-orange" />
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link href="/#billetterie" className="btn-primary">
              Réserver ma place pour voir {artist.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}