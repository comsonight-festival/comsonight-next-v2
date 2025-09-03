'use client'

import { Clock, Shield, CreditCard, Phone, Mail, AlertCircle, CheckCircle, Info } from 'lucide-react'

export default function PracticalInfo() {
  return (
    <section id="infos" className="section-padding bg-background-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Infos pratiques
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Tout ce qu'il faut savoir pour profiter du festival en toute sérénité
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Horaires et accès */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-festival-orange" />
                <h3 className="text-xl font-bold text-primary">Horaires du festival</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-dark-700">
                  <span className="font-medium text-primary">Ouverture des portes</span>
                  <span className="text-festival-orange font-semibold">16h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-dark-700">
                  <span className="font-medium text-primary">Beer Pong Cup</span>
                  <span className="text-festival-orange font-semibold">19h00 - 21h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-dark-700">
                  <span className="font-medium text-primary">Premiers sets</span>
                  <span className="text-festival-orange font-semibold">20h30</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-primary">Fermeture</span>
                  <span className="text-festival-orange font-semibold">04h00</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-festival-red" />
                <h3 className="text-xl font-bold text-primary">Sécurité et règles</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Pièce d'identité obligatoire</p>
                    <p className="text-secondary text-sm">Événement interdit aux moins de 18 ans</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Service de sécurité présent</p>
                    <p className="text-secondary text-sm">Toute la soirée sur le campus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Accès PMR</p>
                    <p className="text-secondary text-sm">Campus accessible aux personnes à mobilité réduite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services et contact */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-primary">Services disponibles</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-surface-dark rounded-lg">
                  <span className="text-2xl">👕</span>
                  <div>
                    <p className="font-medium text-primary">Vestiaire payant</p>
                    <p className="text-secondary text-sm">Disponible sur place</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-dark rounded-lg">
                  <span className="text-2xl">💨</span>
                  <div>
                    <p className="font-medium text-primary">Zone fumeurs extérieure</p>
                    <p className="text-secondary text-sm">Espace aménagé et surveillé</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-dark rounded-lg">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <p className="font-medium text-primary">Sound système professionnel</p>
                    <p className="text-secondary text-sm">Qualité audio premium</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-dark rounded-lg">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-medium text-primary">Éclairage scénique</p>
                    <p className="text-secondary text-sm">Show lumineux spectaculaire</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-6 h-6 text-festival-orange" />
                <h3 className="text-xl font-bold text-primary">Contact</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-festival-orange" />
                  <a href="mailto:sono@asso.unilasalle.fr" className="text-secondary hover:text-festival-orange transition-colors">
                    sono@asso.unilasalle.fr
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-festival-orange" />
                  <a href="tel:+33673102113" className="text-secondary hover:text-festival-orange transition-colors">+33 6 73 10 21 13</a>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-festival-orange/10 rounded-lg border border-festival-orange/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-festival-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-festival-orange mb-2">Urgences le jour J</h4>
                    <p className="text-secondary text-sm">
                      En cas d'urgence pendant le festival, contactez directement l'équipe de sécurité sur place 
                      ou appelez notre numéro d'urgence qui sera communiqué le jour J.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important reminders */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="card-surface text-center">
            <div className="text-3xl mb-3">🎟️</div>
            <h4 className="font-semibold text-primary mb-2">Billet obligatoire</h4>
            <p className="text-secondary text-sm">Présentez votre billet (papier ou numérique) à l'entrée</p>
          </div>
          
          <div className="card-surface text-center">
            <div className="text-3xl mb-3">🆔</div>
            <h4 className="font-semibold text-primary mb-2">Contrôle d'identité</h4>
            <p className="text-secondary text-sm">Carte d'identité ou passeport requis pour l'accès</p>
          </div>
          
          <div className="card-surface text-center">
            <div className="text-3xl mb-3">🚫</div>
            <h4 className="font-semibold text-primary mb-2">Objets interdits</h4>
            <p className="text-secondary text-sm">Bouteilles en verre, objets dangereux et drogues interdits</p>
          </div>
        </div>
      </div>
    </section>
  )
}