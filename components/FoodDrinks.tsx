'use client'

import { foodAndDrinks } from '@/lib/content'
import { Coffee, Utensils } from 'lucide-react'

export default function FoodDrinks() {
  const drinks = foodAndDrinks.filter(item => item.category === 'drinks')
  const food = foodAndDrinks.filter(item => item.category === 'food')
  
  return (
    <section id="food-drinks" className="section-padding bg-background-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Food & Drinks
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Restauration et boissons disponibles toute la soirée avec système cashless
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-festival-orange" />
              <h3 className="text-2xl font-bold text-primary">Boissons</h3>
            </div>
            
            <div className="space-y-4">
              {drinks.map((drink) => (
                <div key={drink.id} className="flex justify-between items-center py-3 border-b border-dark-700 last:border-b-0">
                  <span className="font-medium text-primary">{drink.name}</span>
                  <span className="text-xl font-bold text-festival-orange">{drink.price}€</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-festival-orange/10 rounded-lg border border-festival-orange/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-festival-orange">💳 Système Cashless</h4>
                <a 
                  href="https://cashless.example.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4"
                >
                  Recharger
                </a>
              </div>
              <p className="text-secondary text-sm">
                Bracelet cashless inclus avec votre billet d'entrée. 
                Rechargez-le en ligne ou sur place pour vos achats !
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-8 h-8 text-festival-red" />
              <h3 className="text-2xl font-bold text-primary">Restauration</h3>
            </div>
            
            <div className="space-y-4">
              {food.map((foodItem) => (
                <div key={foodItem.id} className="flex justify-between items-center py-3 border-b border-dark-700 last:border-b-0">
                  <span className="font-medium text-primary">{foodItem.name}</span>
                  <span className="text-xl font-bold text-festival-red">{foodItem.price}€</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">🌱 Option végétarienne</h4>
              <p className="text-secondary text-sm">
                Wrap végétarien disponible pour nos amis végétariens !
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 card-surface">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Informations importantes</h3>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-festival-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-festival-orange" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Service continu</h4>
              <p className="text-secondary text-sm">
                Restauration et bar ouverts de 19h à 3h du matin
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-festival-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Paiement cashless</h4>
              <p className="text-secondary text-sm">
                Uniquement par bracelet cashless, rechargeable en ligne ou sur place
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Éco-responsable</h4>
              <p className="text-secondary text-sm">
                Éco-cup réutilisable incluse dans votre billet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}