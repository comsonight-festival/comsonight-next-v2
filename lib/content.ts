import { SiteContent, Artist, TicketType, FoodItem } from './types'

export const artists: Artist[] = [
  // ARTISTES TEMPORAIREMENT DÉSACTIVÉS - À réactiver plus tard
  /*
  {
    id: '1',
    name: 'Maman',
    slug: 'maman',
    genre: 'Deep House',
    stage: 'Main Stage',
    timeSlot: '00H00 - 00H00',
    startTime: '00H00',
    endTime: '00H00',
    description: 'Artiste deep house qui crée des ambiances chaleureuses et immersives.',
    image: '/images/artists/maman.jpg',
    socialLinks: {
      spotify: '#',
      instagram: 'https://www.instagram.com/eloi_mmn/',
      soundcloud: '#'
    }
  },
  {
    id: '2',
    name: 'CMP x VAUSONGS',
    slug: 'cmp-x-vausongs',
    genre: 'House/Electro',
    stage: 'Main Stage',
    timeSlot: '00H00 - 00H00',
    startTime: '00H00',
    endTime: '00H00',
    description: 'Duo électrisant qui mélange house progressive et électro moderne pour une performance énergique.',
    image: '/images/artists/cmp-x-vausongs.jpg',
    isDuo: true,
    members: [
      {
        name: 'CMP',
        role: 'Producer/DJ',
        socialLinks: {
          instagram: 'https://www.instagram.com/charles_mpr/',
          soundcloud: 'https://soundcloud.com/user-702723879'
        }
      },
      {
        name: 'VAUSONGS',
        role: 'Producer/DJ',
        socialLinks: {
          instagram: 'https://www.instagram.com/louis_vau/',
          soundcloud: 'https://soundcloud.com/louis-vauquelin'
        }
      }
    ],
    socialLinks: {
      instagram: 'https://www.instagram.com/charles_mpr/',
      soundcloud: 'https://soundcloud.com/user-702723879'
    }
  },
  {
    id: '3',
    name: 'DUBUS & FRIENDS',
    slug: 'dubus-friends',
    genre: 'Electro',
    stage: 'Main Stage',
    timeSlot: '00H00 - 00H00',
    startTime: '00H00',
    endTime: '00H00',
    description: 'Collectif électro qui apporte une énergie brute et des beats puissants.',
    image: '/images/artists/dubus-friends.jpg',
    isDuo: true,
    members: [
      {
        name: 'DUBUS',
        role: 'Producer/DJ',
        socialLinks: {
          instagram: 'https://www.instagram.com/le_dub_s/',
          soundcloud: '#'
        }
      },
      {
        name: 'Friends Collective',
        role: 'Live Performance',
        socialLinks: {
          instagram: 'https://www.instagram.com/le_dub_s/'
        }
      }
    ],
    socialLinks: {
      soundcloud: '#',
      instagram: 'https://www.instagram.com/le_dub_s/'
    }
  },
  {
    id: '4',
    name: 'Ponsin x Cressot',
    slug: 'ponsin-x-cressot',
    genre: 'Techno',
    stage: 'Main Stage',
    timeSlot: '00H00 - 00H00',
    startTime: '00H00',
    endTime: '00H00',
    description: 'Duo techno explosif pour clôturer la nuit en beauté.',
    image: '/images/artists/ponsin-x-cressot.jpg',
    isDuo: true,
    members: [
      {
        name: 'Ponsin',
        role: 'Producer/DJ',
        socialLinks: {
          instagram: '#',
          soundcloud: '#'
        }
      },
      {
        name: 'Cressot',
        role: 'Producer/DJ',
        socialLinks: {
          instagram: '#',
          soundcloud: '#'
        }
      }
    ],
    socialLinks: {
      soundcloud: '#',
      instagram: '#'
    }
  },
  */
  {
    id: '5',
    name: 'HDX',
    slug: 'hdx',
    genre: 'Rap-Funk',
    stage: 'Main Stage',
    timeSlot: '00H00 - 00H00',
    startTime: '00H00',
    endTime: '00H00',
    description: 'HDX est un trio composé de jeunes talents originaires de Grenoble. Leurs musiques mêlent des influences futuristes et modernes dans un récit du quotidien, des soirées aux instants de doute et d\'amour sans lendemain.',
    image: '/images/artists/hdx.jpg',
    isDuo: false,
    socialLinks: {
      spotify: 'https://open.spotify.com/intl-fr/artist/7GxsVvE196y7ZQKRmhyEY6?si=zDb59ZpzTlSx-KuAysOG8w',
      instagram: 'https://www.instagram.com/hdx_fr/',
      soundcloud: 'https://soundcloud.com/hdx-music'
    }
  },
  {
    id: 'dj-comsono',
    name: 'DJ COM\'SONO',
    slug: 'dj-comsono',
    genre: 'À venir',
    stage: 'Main Stage',
    timeSlot: 'Coming Soon',
    startTime: 'TBA',
    endTime: 'TBA',
    description: 'D\'autres artistes de la ComSono seront bientôt dévoilés ! Restez connectés, de grandes surprises arrivent.',
    image: '/images/logo-comsono.png',
    isComingSoon: true,
    socialLinks: {}
  },
  {
    id: 'coming-soon',
    name: 'Coming Soon',
    slug: 'coming-soon',
    genre: 'À venir',
    stage: 'Main Stage',
    timeSlot: 'Coming Soon',
    startTime: 'TBA',
    endTime: 'TBA',
    description: 'D\'autres artistes seront bientôt dévoilés ! Restez connectés pour découvrir qui complètera notre lineup exceptionnel.',
    image: null,
    isComingSoon: true,
    socialLinks: {}
  }
]

export const tickets: TicketType[] = [
  {
    id: 'student',
    name: 'Étudiant',
    price: 12.50,
    isPrimary: true,
    includes: [
      'Accès au festival',
      'Éco-cup offerte',
      'Ticket tombola',
      'Bracelet cashless',
      'Accès aux deux scènes'
    ]
  },
  {
    id: 'adult',
    name: 'Adulte',
    price: 14.50,
    includes: [
      'Accès au festival',
      'Éco-cup offerte',
      'Ticket tombola',
      'Bracelet cashless',
      'Accès aux deux scènes'
    ]
  }
]

export const foodAndDrinks: FoodItem[] = [
  { id: 'soft', name: 'Soft', price: 2, category: 'drinks' },
  { id: 'beer-25', name: 'Bière 25cl', price: 3, category: 'drinks' },
  { id: 'beer-50', name: 'Bière 50cl', price: 5, category: 'drinks' },
  { id: 'water', name: 'Eau', price: 1, category: 'drinks' },
  { id: 'croque-monsieur', name: 'Croque-monsieur', price: 4, category: 'food' },
  { id: 'fries', name: 'Frites', price: 3, category: 'food' },
  { id: 'veggie-options', name: 'Options végétariennes', price: 5, category: 'food' }
]

export const siteContent: SiteContent = {
  event: {
    name: 'ComSoNight 2025',
    date: '2025-09-20',
    time: '16:00 - 04:00',
    location: 'Campus UniLaSalle, Beauvais',
    venue: 'UniLaSalle Beauvais',
    capacity: 1500
  },
  afterwork: {
    date: '2025-09-16',
    time: '18:00',
    location: 'Campus UniLaSalle, Beauvais',
    activities: ['Tombola', 'Networking', 'Apéritif']
  },
  artists,
  tickets,
  foodAndDrinks,
  beerPongCup: {
    startTime: '19:00',
    endTime: '21:00',
    maxTeams: 24,
    prizePool: 0,
    registrationFee: 8,
    prizes: [
      {
        position: '🏆 1ère place',
        rewards: [
          'Trophée ComSoNight Beer Pong Cup',
          '2 t-shirts ComSoNight #5'
        ]
      },
      {
        position: '🥈 2ème place', 
        rewards: [
          'Places pour ComSoNight #6 (édition 2026)'
        ]
      }
    ],
    rules: [
      'Équipes de 2 joueurs',
      '24 équipes maximum',
      'Tournoi à élimination directe',
      'Arbitrage officiel',
      'Respect des adversaires obligatoire'
    ]
  }
}