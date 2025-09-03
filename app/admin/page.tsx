'use client'

import { useState } from 'react'
import { Save, Eye, EyeOff, Palette, Settings, BarChart3 } from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('theme')
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [settings, setSettings] = useState({
    themeColors: {
      primary: '#ff7a18',
      secondary: '#ad0011',
    },
    eventStatus: 'upcoming',
    beerPongRegistration: 'open',
    customText: {
      heroTitle: 'ComSoNight',
      heroSubtitle: '2025',
      description: 'Le festival étudiant incontournable ! House, Electro, Deep House et Techno.',
    }
  })
  
  const handleColorChange = (colorType: 'primary' | 'secondary', color: string) => {
    setSettings(prev => ({
      ...prev,
      themeColors: {
        ...prev.themeColors,
        [colorType]: color
      }
    }))
  }
  
  const handleSave = () => {
    // In a real app, this would save to a backend
    localStorage.setItem('adminSettings', JSON.stringify(settings))
    alert('Paramètres sauvegardés avec succès !')
  }
  
  const tabs = [
    { id: 'theme', label: 'Thème', icon: Palette },
    { id: 'content', label: 'Contenu', icon: Settings },
    { id: 'stats', label: 'Statistiques', icon: BarChart3 },
  ]
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Administration ComSoNight 2025
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isPreviewMode
                    ? 'bg-festival-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isPreviewMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {isPreviewMode ? 'Quitter aperçu' : 'Mode aperçu'}
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 bg-festival-gradient text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Save className="w-4 h-4" />
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-festival-orange text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
        
        <main className="flex-1 p-8">
          {activeTab === 'theme' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Personnalisation du thème</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-4">Couleur principale</h3>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={settings.themeColors.primary}
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        className="w-16 h-16 rounded border-2 border-gray-300"
                      />
                      <div>
                        <input
                          type="text"
                          value={settings.themeColors.primary}
                          onChange={(e) => handleColorChange('primary', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md font-mono text-sm bg-white text-gray-900"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Couleur utilisée pour les boutons et accents
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-4">Couleur secondaire</h3>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={settings.themeColors.secondary}
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        className="w-16 h-16 rounded border-2 border-gray-300"
                      />
                      <div>
                        <input
                          type="text"
                          value={settings.themeColors.secondary}
                          onChange={(e) => handleColorChange('secondary', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md font-mono text-sm bg-white text-gray-900"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Couleur utilisée pour les dégradés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-medium text-gray-900 mb-4">Aperçu du thème</h3>
                  <div 
                    className="p-8 rounded-lg text-white text-center"
                    style={{
                      background: `linear-gradient(135deg, ${settings.themeColors.primary} 0%, ${settings.themeColors.secondary} 100%)`
                    }}
                  >
                    <h4 className="text-2xl font-bold mb-2">ComSoNight 2025</h4>
                    <p className="mb-4">Aperçu du dégradé avec vos couleurs</p>
                    <button 
                      className="bg-white px-6 py-2 rounded-lg font-medium"
                      style={{ color: settings.themeColors.primary }}
                    >
                      Bouton d'exemple
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'content' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Gestion du contenu</h2>
                
                <div className="grid gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-4">État de l'événement</h3>
                    <select 
                      value={settings.eventStatus}
                      onChange={(e) => setSettings(prev => ({ ...prev, eventStatus: e.target.value as any }))}
                      className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                    >
                      <option value="upcoming">À venir</option>
                      <option value="live">En cours</option>
                      <option value="ended">Terminé</option>
                    </select>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-4">Inscription Beer Pong Cup</h3>
                    <select 
                      value={settings.beerPongRegistration}
                      onChange={(e) => setSettings(prev => ({ ...prev, beerPongRegistration: e.target.value as any }))}
                      className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                    >
                      <option value="open">Ouvertes</option>
                      <option value="full">Complet</option>
                      <option value="closed">Fermées</option>
                    </select>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-4">Textes personnalisés</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titre principal
                        </label>
                        <input
                          type="text"
                          value={settings.customText.heroTitle}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            customText: { ...prev.customText, heroTitle: e.target.value }
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sous-titre
                        </label>
                        <input
                          type="text"
                          value={settings.customText.heroSubtitle}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            customText: { ...prev.customText, heroSubtitle: e.target.value }
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          value={settings.customText.description}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            customText: { ...prev.customText, description: e.target.value }
                          }))}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'stats' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Statistiques</h2>
                
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-2">Visiteurs uniques</h3>
                    <p className="text-3xl font-bold text-festival-orange">1,247</p>
                    <p className="text-sm text-gray-500">Cette semaine</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-2">Équipes inscrites</h3>
                    <p className="text-3xl font-bold text-festival-red">18/24</p>
                    <p className="text-sm text-gray-500">Beer Pong Cup</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-medium text-gray-900 mb-2">Billets vendus</h3>
                    <p className="text-3xl font-bold text-green-600">342</p>
                    <p className="text-sm text-gray-500">Estimation</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}