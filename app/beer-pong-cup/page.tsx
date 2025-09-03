import { siteContent } from '@/lib/content'
import { Trophy, Users, Clock, Euro, ArrowLeft, AlertCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function BeerPongCupPage() {
  const { beerPongCup } = siteContent
  
  return (
    <div className="min-h-screen bg-background-dark">
      <div className="bg-festival-gradient text-white py-20">
        <div className="container-max px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Beer Pong Cup 🏆
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Inscrivez votre équipe au tournoi officiel avec des récompenses exclusives !
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">{beerPongCup.startTime} - {beerPongCup.endTime}</div>
                <div className="text-sm text-white/80">Horaires</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">{beerPongCup.maxTeams} équipes</div>
                <div className="text-sm text-white/80">Maximum</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Trophée + T-shirts</div>
                <div className="text-sm text-white/80">Récompenses</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                <Euro className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">{beerPongCup.registrationFee}€</div>
                <div className="text-sm text-white/80">Par équipe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Comment s'inscrire ?</h2>
              
              <div className="card space-y-6">
                <div className="p-4 bg-festival-orange/10 border border-festival-orange/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-festival-orange mt-0.5" />
                    <div className="text-sm text-primary">
                      <p className="font-medium mb-1">Information importante :</p>
                      <p>Les inscriptions au Beer Pong Cup se font directement lors de l'achat de votre place pour le festival sur HelloAsso.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Étapes d'inscription :</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-festival-orange text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                      <p className="text-secondary">Achetez votre place pour ComSoNight 2025 sur HelloAsso</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-festival-orange text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                      <p className="text-secondary">Sélectionnez l'option "Participation à la Beer Pong Cup" (+{beerPongCup.registrationFee}€)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-festival-orange text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                      <p className="text-secondary">Venez avec votre coéquipier le jour J pour former votre équipe</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div className="text-sm text-primary">
                      <p className="font-medium mb-1">Attention :</p>
                      <p>Les inscriptions sont limitées à 24 équipes (48 personnes). Premier arrivé, premier servi !</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://www.helloasso.com/associations/association-generale-des-etudiants-d-unilasalle/evenements/com-so-night-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  S'inscrire sur HelloAsso
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              <div id="reglement" className="card">
                <h3 className="text-2xl font-bold text-primary mb-6">Règlement officiel complet</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-festival-orange mb-3">Format du tournoi</h4>
                    <ul className="space-y-2 text-secondary">
                      <li>• Tournoi à élimination directe</li>
                      <li>• 24 équipes maximum (premier arrivé, premier servi)</li>
                      <li>• Équipes de 2 joueurs obligatoirement</li>
                      <li>• Matches au meilleur de 3 manches (finale au meilleur de 5)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-festival-orange mb-3">Règles de jeu</h4>
                    <ul className="space-y-2 text-secondary">
                      <li>• 10 gobelets disposés en triangle de chaque côté</li>
                      <li>• Chaque équipe lance 2 balles par tour</li>
                      <li>• Les deux balles dans le même gobelet = 2 gobelets retirés + re-shoot</li>
                      <li>• Bounce shot autorisé mais peut être défendu</li>
                      <li>• Re-rack autorisé à 6, 4, 3 et 2 gobelets</li>
                      <li>• "Heating up" (2 consécutives) et "On fire" (3+ consécutives)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-festival-orange mb-3">Règles spéciales</h4>
                    <ul className="space-y-2 text-secondary">
                      <li>• Redemption : l'équipe perdante peut revenir si elle touche tous les gobelets restants</li>
                      <li>• Overtime si égalité : 3 gobelets par équipe, sudden death</li>
                      <li>• Arbitrage officiel pour toutes les parties</li>
                      <li>• Pas de distractions excessives de l'adversaire</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-festival-orange mb-3">Fair-play et sanctions</h4>
                    <ul className="space-y-2 text-secondary">
                      <li>• Respect des adversaires et des arbitres obligatoire</li>
                      <li>• Comportement antisportif = avertissement puis exclusion</li>
                      <li>• Consommation modérée encouragée</li>
                      <li>• Décisions arbitrales définitives</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-2xl font-bold text-primary mb-6">Récompenses</h3>
                
                <div className="space-y-4">
                  {beerPongCup.prizes?.map((prize, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-festival-orange/10 to-festival-red/10 border border-festival-orange/20 rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <Trophy className="w-6 h-6 text-festival-orange mt-0.5" />
                        <span className="font-bold text-primary text-lg">{prize.position}</span>
                      </div>
                      <ul className="space-y-1 ml-9">
                        {prize.rewards.map((reward, rewardIndex) => (
                          <li key={rewardIndex} className="text-secondary">• {reward}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  <div className="text-center p-4 bg-festival-orange/10 rounded-lg">
                    <p className="text-festival-orange font-medium">
                      🎉 Ambiance exceptionnelle garantie pour tous les participants !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}