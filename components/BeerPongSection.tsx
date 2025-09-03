'use client'

import { siteContent } from '@/lib/content'
import { Trophy, Users, Clock, Euro } from 'lucide-react'

export default function BeerPongSection() {
  const { beerPongCup } = siteContent
  
  return (
    <section id="beer-pong" className="section-padding bg-festival-gradient">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Beer Pong Cup 🏆
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tournoi officiel de Beer Pong avec des récompenses exclusives !
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informations du tournoi</h3>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-6 h-6 text-white/80" />
                  <div>
                    <div className="font-semibold">Horaires</div>
                    <div className="text-white/80">{beerPongCup.startTime} - {beerPongCup.endTime}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-6 h-6 text-white/80" />
                  <div>
                    <div className="font-semibold">{beerPongCup.maxTeams} équipes max</div>
                    <div className="text-white/80">2 joueurs par équipe</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Trophy className="w-6 h-6 text-white/80" />
                  <div>
                    <div className="font-semibold">Récompenses exclusives</div>
                    <div className="text-white/80">Trophée + t-shirts</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Euro className="w-6 h-6 text-white/80" />
                  <div>
                    <div className="font-semibold">{beerPongCup.registrationFee}€ / équipe</div>
                    <div className="text-white/80">Inscription</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/beer-pong-cup" 
                className="btn-secondary text-center"
              >
                S'inscrire au tournoi
              </a>
              <a 
                href="/beer-pong-cup#reglement"
                className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Voir le règlement complet
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Règlement officiel</h3>
            <ul className="space-y-3">
              {beerPongCup.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold text-white mb-4">🏆 Récompenses</h4>
              <div className="text-white/90 space-y-3">
                {beerPongCup.prizes?.map((prize, index) => (
                  <div key={index} className="border-l-2 border-white/30 pl-4">
                    <div className="font-semibold text-white mb-1">{prize.position}</div>
                    <ul className="space-y-1">
                      {prize.rewards.map((reward, rewardIndex) => (
                        <li key={rewardIndex} className="text-sm">• {reward}</li>
                      ))}
                    </ul>
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