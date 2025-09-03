'use client'

import { tickets } from '@/lib/content'
import { Check, Calendar, Download } from 'lucide-react'

export default function Ticketing() {
  const handleDownloadCalendar = () => {
    const event = {
      title: 'ComSoNight 2025',
      start: '20250920T160000Z',
      end: '20250921T040000Z',
      description: 'Festival étudiant ComSoNight 2025 au campus UniLaSalle Beauvais',
      location: 'Campus UniLaSalle, Beauvais'
    }
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ComSoNight//Festival 2025//FR
BEGIN:VEVENT
UID:comsonight-2025@unilasalle-beauvais.fr
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`
    
    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'comsonight-2025.ics'
    link.click()
    window.URL.revokeObjectURL(url)
  }
  
  return (
    <section id="billetterie" className="section-padding bg-surface-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Billetterie
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Réservez dès maintenant votre place pour la soirée la plus attendue de l'année !
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-12">
          {/* Tarif Normal */}
          <div className="relative card ring-2 ring-festival-orange">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-festival-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                Recommandé
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Tarif Normal
              </h3>
              <div className="text-4xl font-bold gradient-text mb-1">
                12,50€
              </div>
              <p className="text-secondary">Par personne</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Accès au festival</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Éco-cup offerte</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Ticket tombola</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Bracelet cashless</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Accès Main Stage</span>
              </li>
            </ul>
            
            <a href="https://www.helloasso.com/associations/association-generale-des-etudiants-d-unilasalle/evenements/com-so-night-2025" target="_blank" rel="noopener noreferrer" className="w-full btn-primary block text-center">
              Réserver maintenant
            </a>
          </div>

          {/* Option Beer Pong Cup */}
          <div className="relative card border-2 border-festival-red/30">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-festival-red text-white px-4 py-1 rounded-full text-sm font-medium">
                Option
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Inscription Beer Pong Cup
              </h3>
              <div className="text-4xl font-bold text-festival-red mb-1">
                8€
              </div>
              <p className="text-secondary">Pour duo</p>
              <p className="text-xs text-festival-red font-medium mt-1">
                * En complément de votre place
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-festival-red flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Participation à la Beer Pong Cup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-festival-red flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Demi de bière offerte à chaque passage de round</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-festival-red flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Lot exclusif de participation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-festival-red flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Accès prioritaire à l'espace tournoi</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-festival-red flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Trophée et t-shirts si victoire</span>
              </li>
            </ul>
            
            <a href="https://www.helloasso.com/associations/association-generale-des-etudiants-d-unilasalle/evenements/com-so-night-2025" target="_blank" rel="noopener noreferrer" className="w-full bg-festival-red hover:bg-festival-red/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block text-center">
              Ajouter cette option
            </a>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <button
            onClick={handleDownloadCalendar}
            className="inline-flex items-center gap-2 text-festival-orange font-medium hover:underline"
          >
            <Calendar className="w-5 h-5" />
            Ajouter à mon calendrier
          </button>
          <button
            onClick={handleDownloadCalendar}
            className="ml-6 inline-flex items-center gap-2 text-festival-orange font-medium hover:underline"
          >
            <Download className="w-5 h-5" />
            Télécharger .ics
          </button>
        </div>
        
        <div id="afterwork" className="relative bg-card-dark rounded-xl p-8 max-w-4xl mx-auto border border-festival-orange/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-festival-gradient opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-festival-orange/10 text-festival-orange px-4 py-2 rounded-full mb-4">
                <span className="text-2xl">🍻</span>
                <span className="font-medium">AVANT-PREMIÈRE</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Afterwork ComSoNight</h3>
              <p className="text-lg text-festival-orange font-medium">Mardi 16 septembre • 18h00</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="text-center p-6 bg-surface-dark rounded-lg">
                <div className="w-12 h-12 bg-festival-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎁</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Tombola Exclusive</h4>
                <p className="text-secondary text-sm">Gagnez vos places pour le festival et plein d'autres surprises !</p>
              </div>
              
              <div className="text-center p-6 bg-surface-dark rounded-lg">
                <div className="w-12 h-12 bg-festival-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Networking</h4>
                <p className="text-secondary text-sm">Rencontrez l'équipe et les autres participants dans une ambiance détendue</p>
              </div>
              
              <div className="text-center p-6 bg-surface-dark rounded-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🥂</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Apéritif</h4>
                <p className="text-secondary text-sm">Boissons et snacks offerts pour bien commencer la soirée</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-secondary mb-4">📍 Campus UniLaSalle Beauvais • Gratuit • Ouvert à tous</p>
              <a href="https://www.instagram.com/comsonightfestival/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Je participe à l'afterwork !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}