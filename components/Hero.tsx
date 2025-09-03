'use client'

import { useState, useEffect } from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
  useEffect(() => {
    const targetDate = new Date('2025-09-20T16:00:00').getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="ComSoNight Festival Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-festival-gradient opacity-80"></div>
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Afterwork Banner */}
      <div className="absolute top-20 left-4 right-4 z-20 flex justify-center">
        <a 
          href="#afterwork" 
          className="bg-card-dark/90 backdrop-blur-md border border-festival-orange text-festival-orange px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-festival-orange hover:text-white hover:scale-105 animate-pulse-slow shadow-lg"
        >
          🍻 Afterwork le 16 sept • 18h • Tombola
        </a>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-newake text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-shadow animate-fade-in">
          ComSoNight
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-shadow">
          2025
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Calendar className="w-5 h-5" />
            <span>20 Septembre 2025</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5" />
            <span>16h - 4h</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="w-5 h-5" />
            <span>UniLaSalle Beauvais</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-sm uppercase tracking-wide">Jours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm uppercase tracking-wide">Heures</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm uppercase tracking-wide">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm uppercase tracking-wide">Secondes</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#billetterie" className="btn-primary">
            Réserver ma place
          </a>
          <a href="#lineup" className="btn-secondary">
            Découvrir le lineup
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}