'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-dark-700 dark:bg-dark-700 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-festival-orange/50"
      aria-label={`Basculer vers le mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      {/* Toggle track */}
      <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
          : 'bg-gradient-to-r from-blue-900 to-purple-900'
      }`}></div>
      
      {/* Toggle thumb */}
      <div className={`relative w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 transform ${
        theme === 'light' ? 'translate-x-3' : '-translate-x-3'
      } flex items-center justify-center`}>
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-orange-500" />
        ) : (
          <Moon className="w-3 h-3 text-blue-600" />
        )}
      </div>
    </button>
  )
}