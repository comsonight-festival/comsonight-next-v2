'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 80)
    }
    
    // Set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { href: '#lineup', label: 'Lineup' },
    { href: '#billetterie', label: 'Billetterie' },
    { href: '#beer-pong', label: 'Beer Pong Cup' },
    { href: '#food-drinks', label: 'Food & Drinks' },
    { href: '#infos', label: 'Infos pratiques' },
  ]
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card-dark/95 backdrop-blur-md shadow-lg border-b border-dark-700/50' 
        : 'bg-transparent backdrop-blur-none shadow-none border-none'
    }`}>
      <div className="container-max px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={`font-newake text-2xl font-bold transition-all duration-300 ${
            isScrolled ? 'gradient-text' : 'text-white text-shadow'
          }`}>
            ComSoNight
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:opacity-80 ${
                  isScrolled ? 'text-primary' : 'text-white text-shadow'
                }`}
              >
                {item.label}
              </a>
            ))}
{/* <ThemeToggle /> */}
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card-dark/95 backdrop-blur-md rounded-lg border border-dark-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-primary font-medium hover:bg-festival-orange/10 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}