export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'Terminé' | 'En cours';
  description: string;
  details: string;
  icon: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const PROFILE = {
  name: "Gudra MAKUBURI",
  shortName: "Gudra Mak",
  title: "Intégrateur & Développeur Web Junior",
  tagline: "Un Développeur Junior Passionné",
  availability: "Disponible pour collaborer",
  bio: "Je transforme mes idées en code et j'apprends chaque jour de nouvelles technologies. Toujours prêt à relever de nouveaux défis numériques avec rigueur et créativité.",
  location: "Mugere, Quartier Kibenga, Av. Kibenga-Lac, N 25 (Bujumbura, Burundi)",
  phone: "+257 62 64 21 96",
  whatsapp: "+243 893 411 864",
  email: "gudramak4@gmail.com",
  socials: {
    github: "https://github.com/gudramakY",
    youtube: "https://youtube.com/@gudra_mak?si=pIR_c4_Ee5UfbcEz",
    facebook: "https://www.facebook.com/gudra.makuburi",
    linkedin: "https://www.linkedin.com/in/gudra-mak-627746433/"
  }
};

export const QUICK_STATS = [
  {
    icon: "fas fa-code",
    title: "HTML5 & CSS3",
    description: "Interfaces modernes & sémantiques"
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Responsive Web",
    description: "Design adaptatif mobile & desktop"
  },
  {
    icon: "fas fa-paint-brush",
    title: "Web Design & UI",
    description: "Harmonie visuelle & ergonomie"
  },
  {
    icon: "fas fa-lightbulb",
    title: "Créatif & Méthodique",
    description: "Solutions propres et bien structurées"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Intégration & Structuration Web",
    icon: "fas fa-code",
    skills: [
      { name: "HTML5 Sémantique", level: "Avancé", description: "Architecture claire, respect des standards W3C, balisage SEO & accessibilité" },
      { name: "CSS3 Moderne", level: "Avancé", description: "Flexbox, CSS Grid, variables CSS personnalisées, pseudo-éléments" },
      { name: "Responsive Design", level: "Avancé", description: "Approche Mobile-First, media queries ciblées et mise en page fluide" },
      { name: "Animations CSS", level: "Intermédiaire", description: "Transitions douces, keyframes animés, micro-interactions" }
    ]
  },
  {
    title: "Design Visuel & Ergonomie UI/UX",
    icon: "fas fa-paint-brush",
    skills: [
      { name: "Maquettage & Wireframing", level: "Intermédiaire", description: "Conception de structures d'écrans, zoning et disposition visuelle" },
      { name: "Typographie & Contrastes", level: "Avancé", description: "Hiérarchie de titres, lisibilité optimale, conformité aux contrastes WCAG" },
      { name: "Design System & Cohérence", level: "Intermédiaire", description: "Harmonie des couleurs, espacements réguliers et composants réutilisables" },
      { name: "Optimisation des Médias", level: "Avancé", description: "Compression des images, SVG vectoriels et temps de chargement réduit" }
    ]
  },
  {
    title: "Outils & Bonnes Pratiques",
    icon: "fas fa-tools",
    skills: [
      { name: "Git & GitHub", level: "Intermédiaire", description: "Gestion de versions, commits structurés et partage de dépôts" },
      { name: "Éditeur & DevTools", level: "Avancé", description: "VS Code, inspection d'éléments, débogage CSS et tests d'écrans" },
      { name: "Validation W3C", level: "Avancé", description: "Audit de conformité syntaxique et propreté du code source" },
      { name: "Déploiement Web", level: "Intermédiaire", description: "Hébergement statique, configuration de formulaires et noms de domaine" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "artisanat-burundi",
    title: "Artisanat & Terroir Burundais",
    category: "Site Vitrine",
    status: "Terminé",
    description: "Plateforme vitrine élégante mettant en lumière les artisans, vanniers et potiers de Bujumbura et des provinces voisines.",
    details: "Ce projet met en avant la richesse culturelle locale à travers une galerie d'œuvres artisanales, une présentation des ateliers locaux et une mise en page soignée avec CSS Grid et Flexbox pour un affichage parfait sur smartphone.",
    icon: "fas fa-store",
    tags: ["HTML5", "CSS3", "Responsive", "Flexbox", "Grid"],
    features: [
      "Galerie responsive avec filtres visuels",
      "Fiches ateliers détaillées avec coordonnées",
      "Palette de couleurs inspirée des matières naturelles",
      "Structure sémantique optimisée pour le référencement"
    ]
  },
  {
    id: "cafe-tanganyika",
    title: "Café du Lac Tanganyika",
    category: "Restauration",
    status: "Terminé",
    description: "Page de présentation moderne et immersive pour un café-restaurant au bord du lac Tanganyika.",
    details: "Conception d'un menu digital fluide et interactif, section de réservation stylisée, horaires d'ouverture et intégration d'une ambiance visuelle chaleureuse avec effets de survol CSS.",
    icon: "fas fa-coffee",
    tags: ["HTML5", "CSS3", "Design UI", "Mobile-First"],
    features: [
      "Carte des menus organisée par catégories avec tarifs",
      "Sections avec effets de profondeur et typographie soignée",
      "Boutons d'appel direct et contact rapide WhatsApp",
      "Chargement ultra-rapide sans dépendances lourdes"
    ]
  },
  {
    id: "kibenga-studio",
    title: "Kibenga Creative Studio",
    category: "Landing Page",
    status: "En cours",
    description: "Landing page à fort impact visuel pour une agence locale de photographie et de création graphique.",
    details: "Travail axé sur une esthétique sombre moderne (Dark UI), un contraste orange vif saisissant, des grilles de présentation en bento et des transitions douces au survol.",
    icon: "fas fa-camera",
    tags: ["CSS Grid", "Dark Theme", "Animations CSS", "Bento Grid"],
    features: [
      "Disposition en bento-box pour le portfolio créatif",
      "Thème sombre contrasté avec accents orangés",
      "Témoignages clients dans un carrousel épuré",
      "Formulaire de devis avec validation intégrée"
    ]
  },
  {
    id: "bujumbura-eco",
    title: "Bujumbura Propre & Vert",
    category: "Initiative Citoyenne",
    status: "Terminé",
    description: "Portail d'information et de sensibilisation communautaire sur la gestion des déchets et les espaces verts urbains.",
    details: "Site institutionnel et civique structuré pour informer les citoyens sur les points de collecte, les journées communautaires de salubrité et les gestes éco-responsables à Bujumbura.",
    icon: "fas fa-leaf",
    tags: ["HTML5", "CSS3", "Accessibilité", "Design Épuré"],
    features: [
      "Tableau informatif des collectes par commune",
      "Guides illustrés des bonnes pratiques de recyclage",
      "Section interactive de signalement civique",
      "Accessibilité renforcée (contrastes et tailles adaptées)"
    ]
  },
  {
    id: "cabinet-medical",
    title: "Cabinet Médical Espoir",
    category: "Santé & Services",
    status: "En cours",
    description: "Interface web sobre, rassurante et accessible pour un cabinet de consultations médicales et de soins.",
    details: "Priorité absolue accordée à la clarté de l'information : liste des spécialités, plannings des praticiens, conseils d'accès géographique et boutons d'urgence bien visibles.",
    icon: "fas fa-stethoscope",
    tags: ["HTML5", "CSS3", "UX Soin", "Accessibilité"],
    features: [
      "Annuaire des spécialités et consultations",
      "Tableau des horaires avec mise en avant du jour actuel",
      "Boutons d'appel d'urgence en un clic sur mobile",
      "Formulaire de demande de rendez-vous sécurisé"
    ]
  },
  {
    id: "portfolio-gudra",
    title: "Portfolio Personnel Gudra Mak",
    category: "Identité Numérique",
    status: "Terminé",
    description: "Ce site portfolio conçu de A à Z avec une identité visuelle énergique, un code moderne et une adaptabilité totale.",
    details: "Harmonisation typographique, système de composants réutilisables, navigation dynamique, validation de formulaire en direct et présentation complète des compétences et réalisations.",
    icon: "fas fa-user-tie",
    tags: ["Design System", "CSS Moderne", "Responsive", "Accessibilité"],
    features: [
      "Menu responsive avec tiroir mobile animé",
      "Filtres de projets et fenêtres modales détaillées",
      "Formulaire avec validation interactive sans rechargement",
      "Visualiseur de CV professionnel prêt à l'impression"
    ]
  }
];

export const CV_DATA = {
  fullName: "Gudra MAKUBURI",
  role: "Intégrateur & Développeur Web Junior",
  summary: "Passionné par les technologies du web et la création d'interfaces ergonomiques, je conçois des sites web modernes, sémantiques et 100% responsives. Mon objectif est de fournir des expériences utilisateur fluides tout en respectant scrupuleusement les standards de qualité du web.",
  contact: {
    email: "gudramak4@gmail.com",
    phone: "+257 62 64 21 96",
    whatsapp: "+243 893 411 864",
    address: "Kibenga, Bujumbura, Burundi",
    github: "github.com/gudramakY",
    linkedin: "linkedin.com/in/gudra-mak-627746433"
  },
  education: [
    {
      degree: "Formation en Développement & Intégration Web",
      institution: "Auto-formation & Formations pratiques certifiantes",
      period: "2024 - 2026",
      details: "Maîtrise approfondie des standards HTML5/CSS3, Mobile-First, wireframing et bonnes pratiques W3C."
    },
    {
      degree: "Études Secondaires & Techniques",
      institution: "Bujumbura, Burundi",
      period: "2020 - 2023",
      details: "Bases solides en informatique, mathématiques et communication."
    }
  ],
  skills: [
    "HTML5 Sémantique & W3C",
    "CSS3 & Architecture Modulaire",
    "Responsive Design & Mobile-First",
    "Flexbox & CSS Grid avancés",
    "Design UI/UX & Ergonomie",
    "Git & Gestion de versions",
    "Optimisation des performances web",
    "Accessibilité (a11y) & Typographie"
  ],
  languages: [
    { name: "Français", level: "Courant / Professionnel" },
    { name: "Kirundi", level: "Langue maternelle" },
    { name: "Anglais", level: "Technique / Intermédiaire" },
    { name: "Swahili", level: "Courant" }
  ]
};
