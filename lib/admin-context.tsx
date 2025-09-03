'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { AdminSettings } from './types'

interface AdminContextType {
  settings: AdminSettings
  updateSettings: (newSettings: Partial<AdminSettings>) => void
  isPreviewMode: boolean
  togglePreviewMode: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

const defaultSettings: AdminSettings = {
  themeColors: {
    primary: '#ff7a18',
    secondary: '#ad0011',
  },
  eventStatus: 'upcoming',
  beerPongRegistration: 'open',
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AdminSettings>(defaultSettings)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  
  const updateSettings = (newSettings: Partial<AdminSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }
  
  const togglePreviewMode = () => {
    setIsPreviewMode(prev => !prev)
  }
  
  return (
    <AdminContext.Provider value={{
      settings,
      updateSettings,
      isPreviewMode,
      togglePreviewMode,
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}