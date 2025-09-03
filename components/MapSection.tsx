'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin, Navigation, Car, Train, Bus, Sun, Moon, Locate } from 'lucide-react'

export default function MapSection() {
  const [mapStyle, setMapStyle] = useState<'light' | 'dark'>('dark')
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  
  const campusLocation = {
    address: "19 Rue Pierre Waguet, 60000 Beauvais",
    coordinates: { lat: 49.459722, lng: 2.071 }
  }

  useEffect(() => {
    // Dynamically load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        link.crossOrigin = ''
        document.head.appendChild(link)
      }

      // Load JS
      if (!(window as any).L) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
        script.crossOrigin = ''
        document.head.appendChild(script)
        
        script.onload = () => {
          initMap()
        }
      } else {
        initMap()
      }
    }

    const initMap = () => {
      if (!mapContainerRef.current || mapRef.current) return

      const L = (window as any).L
      
      // Initialize map
      const map = L.map(mapContainerRef.current, {
        center: [campusLocation.coordinates.lat, campusLocation.coordinates.lng],
        zoom: 15,
        zoomControl: false // We'll add custom controls
      })

      mapRef.current = map

      // Add custom zoom controls
      const customZoomControl = L.control({ position: 'topleft' })
      customZoomControl.onAdd = function(map: any) {
        const div = L.DomUtil.create('div', 'leaflet-control-zoom leaflet-bar')
        div.innerHTML = `
          <a class="leaflet-control-zoom-in bg-black/80 border border-festival-orange/50 text-festival-orange hover:bg-festival-orange hover:text-black transition-colors" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a>
          <a class="leaflet-control-zoom-out bg-black/80 border border-festival-orange/50 text-festival-orange hover:bg-festival-orange hover:text-black transition-colors" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a>
        `
        
        L.DomEvent.on(div.children[0], 'click', (e: Event) => {
          e.preventDefault()
          map.zoomIn()
        })
        
        L.DomEvent.on(div.children[1], 'click', (e: Event) => {
          e.preventDefault()
          map.zoomOut()
        })
        
        return div
      }
      customZoomControl.addTo(map)

      // Update tile layer based on style
      updateMapStyle(map)

      // Add campus marker
      const campusIcon = L.divIcon({
        html: `
          <div class="relative">
            <div class="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div class="bg-black/90 text-white px-2 py-1 rounded text-xs font-semibold">
                UniLaSalle Campus
              </div>
            </div>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })

      L.marker([campusLocation.coordinates.lat, campusLocation.coordinates.lng], { 
        icon: campusIcon 
      }).addTo(map)
    }

    const updateMapStyle = (map: any) => {
      if (!map) return
      
      const L = (window as any).L
      
      // Remove existing tile layers
      map.eachLayer((layer: any) => {
        if (layer instanceof L.TileLayer) {
          map.removeLayer(layer)
        }
      })

      // Add appropriate tile layer
      if (mapStyle === 'dark') {
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '© OpenStreetMap contributors © CARTO',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(map)
      } else {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19
        }).addTo(map)
      }
    }

    loadLeaflet()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      updateMapStyle(mapRef.current)
    }
  }, [mapStyle])

  const updateMapStyle = (map: any) => {
    if (!map) return
    
    const L = (window as any).L
    
    // Remove existing tile layers
    map.eachLayer((layer: any) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer)
      }
    })

    // Add appropriate tile layer
    if (mapStyle === 'dark') {
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map)
    } else {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map)
    }
  }

  const toggleMapStyle = () => {
    setMapStyle(prev => prev === 'light' ? 'dark' : 'light')
  }

  const locateUser = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setUserLocation({ lat: latitude, lng: longitude })
        
        if (mapRef.current) {
          const L = (window as any).L
          mapRef.current.setView([latitude, longitude], 13)
          
          // Add user location marker
          const userIcon = L.divIcon({
            html: '<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-ping"></div>',
            className: 'user-location-marker',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          })
          
          L.marker([latitude, longitude], { icon: userIcon }).addTo(mapRef.current)
        }
      }, (error) => {
        console.error('Error getting location:', error)
        alert('Impossible d\'accéder à votre position')
      })
    } else {
      alert('La géolocalisation n\'est pas supportée par votre navigateur')
    }
  }
  
  return (
    <section id="map" className="section-padding bg-surface-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Venir au festival
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Campus UniLaSalle Beauvais - Accessible en voiture, train et bus
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Leaflet Map */}
          <div className="relative">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-festival-orange" />
                  Localisation
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMapStyle}
                    className="p-2 bg-festival-orange/20 text-festival-orange hover:bg-festival-orange hover:text-white rounded-lg transition-colors"
                    title={`Passer en mode ${mapStyle === 'light' ? 'sombre' : 'clair'}`}
                  >
                    {mapStyle === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={locateUser}
                    className="p-2 bg-blue-500/20 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                    title="Me localiser"
                  >
                    <Locate className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Map Container */}
              <div 
                ref={mapContainerRef}
                className="h-80 rounded-xl overflow-hidden border border-festival-orange/30 shadow-2xl relative"
                style={{ minHeight: '320px' }}
              />
              
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 p-3 bg-festival-orange/10 rounded-lg border border-festival-orange/20">
                  <MapPin className="w-5 h-5 text-festival-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">{campusLocation.address}</p>
                    <p className="text-sm text-secondary">Campus UniLaSalle Beauvais</p>
                  </div>
                </div>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${campusLocation.coordinates.lat}&mlon=${campusLocation.coordinates.lng}&zoom=15`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  Voir sur OpenStreetMap
                </a>
              </div>
            </div>
          </div>
          
          {/* Transport Options */}
          <div className="space-y-6">
            <div className="group bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">🚗 En voiture</h3>
                  <p className="text-sm text-secondary">Le plus pratique !</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-festival-orange rounded-full"></span>
                  <span>Parking gratuit sur le campus</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-festival-orange rounded-full"></span>
                  <span>A16 sortie Beauvais Centre</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-festival-orange rounded-full"></span>
                  <span>Paris → Beauvais : ~1h15</span>
                </div>
              </div>
              <a
                href={`https://www.openstreetmap.org/directions?to=${campusLocation.coordinates.lat},${campusLocation.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                Calculer l'itinéraire
              </a>
            </div>
            
            <div className="group bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">🚆 En train</h3>
                  <p className="text-sm text-secondary">Écologique et tranquille</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Paris Gare du Nord → Beauvais</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Puis bus/taxi (10 min) au campus</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Durée totale : ~1h45</span>
                </div>
              </div>
              <a
                href="https://www.sncf-connect.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                <Train className="w-4 h-4" />
                Horaires SNCF Connect
              </a>
            </div>
            
            <div className="group bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6 hover:from-green-500/20 hover:to-teal-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">🚌 En bus</h3>
                  <p className="text-sm text-secondary">Économique et local</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Lignes urbaines depuis le centre</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Arrêt "UniLaSalle" proche</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Service jusqu'à 23h</span>
                </div>
              </div>
              <a
                href="https://www.beauvais.fr/transports"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 hover:scale-105"
              >
                <Bus className="w-4 h-4" />
                Horaires bus municipaux
              </a>
            </div>
          </div>
        </div>
        
        {/* Quick Info Bar */}
        <div className="mt-12 card-surface">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-festival-orange" />
              <span className="font-medium text-primary">Campus UniLaSalle Beauvais</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-secondary">
              <span>🚗 Parking gratuit</span>
              <span>🚌 Arrêt de bus proche</span>
              <span>♿ Accès PMR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}