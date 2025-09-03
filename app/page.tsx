import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const Lineup = dynamic(() => import('@/components/Lineup'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

const Ticketing = dynamic(() => import('@/components/Ticketing'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

const BeerPongSection = dynamic(() => import('@/components/BeerPongSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

const FoodDrinks = dynamic(() => import('@/components/FoodDrinks'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

const Carousel = dynamic(() => import('@/components/Carousel'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

const MapSection = dynamic(() => import('@/components/MapSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

const PracticalInfo = dynamic(() => import('@/components/PracticalInfo'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Chargement...</div>
})

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lineup />
      <Ticketing />
      <BeerPongSection />
      <FoodDrinks />
      <Carousel />
      <MapSection />
      <PracticalInfo />
      <Footer />
    </>
  )
}