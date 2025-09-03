'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Camera, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    {
      id: 1,
      src: '/images/gallery/festival-1.jpg',
      alt: 'Ambiance festival ComSoNight 2024',
      caption: 'Une foule en délire lors de la dernière édition'
    },
    {
      id: 2,
      src: '/images/gallery/festival-2.jpg',
      alt: 'Main Stage ComSoNight',
      caption: 'La Main Stage illuminée dans la nuit'
    },
    {
      id: 3,
      src: '/images/gallery/festival-3.jpg',
      alt: 'Artiste en performance',
      caption: 'Performance électrisante de nos artistes'
    },
    {
      id: 4,
      src: '/images/gallery/festival-4.jpg',
      alt: 'Public ComSoNight',
      caption: 'L\'énergie incroyable du public'
    },
    {
      id: 5,
      src: '/images/gallery/festival-5.jpg',
      alt: 'Beer Pong Cup',
      caption: 'Compétition acharnée au Beer Pong Cup'
    },
    {
      id: 6,
      src: '/images/gallery/festival-6.jpg',
      alt: 'Campus de nuit',
      caption: 'Le campus UniLaSalle transformé pour la nuit'
    },
    {
      id: 7,
      src: '/images/gallery/festival-7.jpg',
      alt: 'Food & Drinks',
      caption: 'Stands gastronomiques et ambiance conviviale'
    },
    {
      id: 8,
      src: '/images/gallery/festival-8.jpg',
      alt: 'Afterwork ComSoNight',
      caption: 'L\'afterwork du 16 septembre'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, images.length])

  return (
    <section id="gallery" className="section-padding bg-background-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Souvenirs en images
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Revivez l'ambiance magique des précédentes éditions de ComSoNight
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel */}
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="aspect-video bg-gradient-to-br from-festival-orange to-festival-red">
              {images[currentIndex].src ? (
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-semibold">{images[currentIndex].caption}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>


            {/* Progress indicators */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`min-w-[44px] min-h-[44px] p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                    index === currentIndex 
                      ? 'bg-white/20' 
                      : 'bg-transparent hover:bg-white/10'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                >
                  <div className={`rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8 h-2' 
                      : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-festival-orange scale-105' 
                    : 'hover:scale-105 hover:opacity-80'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-festival-orange to-festival-red flex items-center justify-center">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Camera className="w-6 h-6 text-white/50" />
                  )}
                </div>
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-festival-orange/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Social media integration */}
        <div className="mt-16 text-center">
          <div className="card-surface inline-block max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-festival-orange" />
              <h3 className="text-xl font-bold text-primary">Partagez vos moments</h3>
            </div>
            <p className="text-secondary mb-6">
              Utilisez le hashtag <span className="text-festival-orange font-semibold">#ComSoNight2025</span> pour partager vos photos
            </p>
            <a 
              href="https://www.instagram.com/comsonightfestival/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span className="whitespace-nowrap">Suivre sur Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}