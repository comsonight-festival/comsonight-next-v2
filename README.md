# 🎵 ComSoNight 2025 - Festival Website

Un site web Next.js 15 ultra-optimisé pour le festival ComSoNight 2025 (20 septembre, UniLaSalle Beauvais).

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Démarrer en mode production
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Architecture

### Stack technique
- **Framework**: Next.js 15 avec App Router
- **TypeScript**: Configuration strict pour la robustesse
- **Styling**: Tailwind CSS avec thème personnalisé
- **Animations**: Framer Motion (lazy loaded)
- **Images**: Sharp pour l'optimisation automatique
- **État**: React Context simple (pas de Supabase/complexité)

### Structure du projet
```
app/
├── layout.tsx              # Layout racine avec métadonnées SEO
├── page.tsx                # Homepage avec tous les composants
├── artists/
│   ├── page.tsx           # Liste des artistes
│   └── [slug]/page.tsx    # Page détail artiste
├── beer-pong-cup/page.tsx # Page dédiée au tournoi
├── admin/page.tsx         # Interface d'administration simple
├── manifest.ts            # PWA manifest
├── sitemap.ts             # Génération automatique du sitemap
└── robots.ts              # Configuration SEO robots

components/
├── Hero.tsx               # Section hero avec countdown
├── Navbar.tsx             # Navigation responsive
├── Lineup.tsx             # Grille artistes avec filtres
├── Ticketing.tsx          # Billetterie avec téléchargement ICS
├── BeerPongSection.tsx    # Info tournoi Beer Pong
├── FoodDrinks.tsx         # Menu et tarifs
├── PracticalInfo.tsx      # Infos pratiques et transport
└── Footer.tsx             # Footer avec liens

lib/
├── content.ts             # Données statiques du festival
├── types.ts               # Types TypeScript
├── seo.ts                 # Configuration SEO et métadonnées
└── utils.ts               # Utilitaires (dates, calendrier ICS)
```

## ✨ Fonctionnalités

### 🎯 Pages principales
- **Homepage**: Hero avec countdown + toutes les sections
- **Lineup**: Liste et détails des 4 artistes avec filtres par scène
- **Beer Pong Cup**: Inscription au tournoi avec formulaire
- **Admin**: Interface simple pour personnalisation

### 🎨 Design et UX
- **Responsive**: Mobile-first avec design adaptatif
- **Thème**: Dégradé orange (#ff7a18) vers rouge (#ad0011)
- **Animations**: Fluides et performantes (transform/opacity)
- **Navigation**: Smooth scroll et menu mobile
- **Police**: Newake (custom) pour les titres

### 📱 Optimisations critiques
- **Bundle size**: < 2MB total avec code splitting
- **Images**: Format WebP/AVIF, lazy loading, Next.js Image
- **Performance**: Dynamic imports, ISR, Service Worker
- **SEO**: Sitemap automatique, métadonnées complètes, Schema.org
- **Cache**: Headers optimisés, stratégie ISR

## 📊 Contenu du festival

### 🎵 Artistes (4 acts)
1. **CMP x VAUSONGS** - House/Electro - Scène A - 22:30-00:00
2. **Maman** - Deep House - Scène B - 20:30-22:00  
3. **DUBUS & FRIENDS** - Electro - Scène A - 00:00-01:30
4. **TEKATS** - Techno - Scène B - 01:30-03:00

### 🎟️ Billetterie
- **Étudiant**: 12,50€ (primaire)
- **Adulte**: 14,50€
- **Includes**: Éco-cup, accès, ticket tombola, bracelet cashless

### 🏆 Beer Pong Cup
- **Horaires**: 17h-20h
- **Format**: 24 équipes, élimination directe
- **Prize pool**: 200€ (150€ + 50€)
- **Inscription**: 16€/équipe

### 🍔 Food & Drinks
- **Drinks**: Soft 2€, Bière 3€/5€, Cocktails 5€, Eau 1€
- **Food**: Burger 6€, Hot-dog 4€, Frites 3€, Wrap végé 5€

## 🔧 Administration

Interface simple accessible sur `/admin` pour :
- **Thème**: Modification des couleurs en temps réel
- **Contenu**: État événement, inscriptions Beer Pong
- **Textes**: Personnalisation des textes principaux
- **Stats**: Aperçu visiteurs et inscriptions
- **Preview**: Mode aperçu en temps réel

## 🚀 Déploiement Vercel

### Configuration optimisée
- Headers de cache pour images (1 an)
- Sécurité (X-Frame-Options, CSP)
- Compression automatique
- Edge Functions pour les APIs

### Variables d'environnement
Copier `.env.local.example` vers `.env.local` et configurer :
```bash
NEXT_PUBLIC_SITE_URL=https://comsonight.vercel.app
NEXT_PUBLIC_ADMIN_ENABLED=true
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Commandes de déploiement
```bash
# Analyser le bundle
npm run analyze

# Linter
npm run lint

# Deploy Vercel (auto depuis GitHub)
vercel --prod
```

## 📈 Performance

### Objectifs atteints
- ✅ Bundle < 2MB total
- ✅ Images < 500KB chacune  
- ✅ Pas de base64 dans JSON
- ✅ Cache intelligent sans conflit
- ✅ Transfert Vercel optimisé

### Lighthouse Score attendu
- **Performance**: > 90
- **Accessibility**: > 90
- **Best Practices**: > 90
- **SEO**: > 95

## 🛠️ Développement

### Scripts disponibles
```bash
npm run dev         # Développement
npm run build       # Build production
npm run start       # Serveur production
npm run lint        # ESLint
npm run analyze     # Analyse du bundle
```

### Ajout de contenu
1. **Nouvel artiste**: Ajouter dans `lib/content.ts`
2. **Modification design**: Éditer `tailwind.config.ts`
3. **Nouvelle page**: Créer dans `app/`
4. **Composant**: Ajouter dans `components/`

## 🎯 Prochaines améliorations

- [ ] Intégration système de paiement
- [ ] Notifications push (PWA)
- [ ] Mode sombre automatique
- [ ] Géolocalisation pour infos transport
- [ ] Chat en direct le jour J
- [ ] Stream live des performances

## 📝 Licence

© 2025 ComSoNight - Tous droits réservés

---

Développé avec ❤️ pour le festival ComSoNight 2025