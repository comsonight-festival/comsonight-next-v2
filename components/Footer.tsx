'use client'

import { Instagram, Mail, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-900 text-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-newake text-2xl font-bold mb-4 gradient-text">
                ComSoNight
              </h3>
              <p className="text-gray-400 mb-4">
                Le festival étudiant incontournable de Beauvais. 
                Une nuit électrisante vous attend !
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-festival-orange transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="mailto:sono@asso.unilasalle.fr" className="text-gray-400 hover:text-festival-orange transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#lineup" className="text-gray-400 hover:text-white transition-colors duration-300">Lineup</a></li>
                <li><a href="#billetterie" className="text-gray-400 hover:text-white transition-colors duration-300">Billetterie</a></li>
                <li><a href="#beer-pong" className="text-gray-400 hover:text-white transition-colors duration-300">Beer Pong Cup</a></li>
                <li><a href="#food-drinks" className="text-gray-400 hover:text-white transition-colors duration-300">Food & Drinks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informations</h4>
              <ul className="space-y-2">
                <li><a href="#infos" className="text-gray-400 hover:text-white transition-colors duration-300">Infos pratiques</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">CGV</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mentions légales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>sono@asso.unilasalle.fr</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+33673102113" className="hover:text-white transition-colors">+33 6 73 10 21 13</a>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Partenaires</h5>
                <a href="#" className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300">
                  UniLaSalle Beauvais
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} ComSoNight - Tous droits réservés
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Consommez avec modération. L'abus d'alcool est dangereux pour la santé.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}