export interface ArtistMember {
  name: string
  role?: string
  socialLinks?: {
    instagram?: string
    soundcloud?: string
    spotify?: string
  }
}

export interface Artist {
  id: string
  name: string
  slug: string
  genre: string
  stage: 'Main Stage'
  timeSlot: string
  startTime: string
  endTime: string
  description?: string
  image?: string | null
  isDuo?: boolean
  isComingSoon?: boolean
  members?: ArtistMember[]
  socialLinks?: {
    instagram?: string
    soundcloud?: string
    spotify?: string
  }
}

export interface TicketType {
  id: string
  name: string
  price: number
  includes: string[]
  isPrimary?: boolean
}

export interface FoodItem {
  id: string
  name: string
  price: number
  category: 'food' | 'drinks'
}

export interface BeerPongTeam {
  id: string
  teamName: string
  players: string[]
  registrationTime: string
}

export interface EventInfo {
  name: string
  date: string
  time: string
  location: string
  venue: string
  capacity?: number
}

export interface AfterworkEvent {
  date: string
  time: string
  location: string
  activities: string[]
}

export interface SiteContent {
  event: EventInfo
  afterwork: AfterworkEvent
  artists: Artist[]
  tickets: TicketType[]
  foodAndDrinks: FoodItem[]
  beerPongCup: {
    startTime: string
    endTime: string
    maxTeams: number
    prizePool: number
    registrationFee: number
    prizes?: {
      position: string
      rewards: string[]
    }[]
    rules: string[]
  }
}

export interface AdminSettings {
  themeColors: {
    primary: string
    secondary: string
  }
  eventStatus: 'upcoming' | 'live' | 'ended'
  beerPongRegistration: 'open' | 'closed' | 'full'
}