import React from 'react';
import { GUDRA_PHOTO_BASE64 } from '../data/assets';
import { PROFILE, PROJECTS, Project } from '../data/profileData';
import { FadeUp } from './FadeUp';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
  onSelectProject?: (project: Project) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenCV,
  onSelectProject,
}) => {
  // Select featured project (e.g. Café du Lac Tanganyika or first project)
  const featuredProject = PROJECTS.find((p) => p.id === 'cafe-tanganyika') || PROJECTS[0];

  const marqueeItems = [
    'INTÉGRATION PIXEL-PERFECT',
    'HTML5 SÉMANTIQUE',
    'CSS3 MODERNE',
    'DESIGN 100% RESPONSIVE',
    'FLEXBOX & CSS GRID',
    'VALIDATION W3C',
    'APPROCHE MOBILE-FIRST',
    'TYPOGRAPHIE ERGONOMIQUE',
    'CHARGEMENT INSTANTANÉ',
    'CODE ÉPURÉ & STRUCTURÉ',
  ];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#fa5a02]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-4 w-[350px] h-[350px] bg-[#c73e00]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-[300px] h-[300px] bg-[#fa5a02]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle geometric dot grid mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#fa5a02_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Layout: Image at top on mobile, on right on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Portrait Column: order-1 on mobile (at the top), md:order-2 on desktop (on the right) */}
          <div className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-56 sm:w-68 md:w-76 lg:w-80 max-w-full animate-float-slow">
              {/* Subtle ambient back glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#fa5a02] to-[#c73e00] rounded-3xl opacity-25 blur-2xl pointer-events-none animate-glow-pulse" />

              {/* Portrait Frame: 100% natural uncompressed aspect ratio without cropping or vertical squishing */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#fa5a02] shadow-2xl shadow-black/80 bg-[#141414]">
                <img
                  src={GUDRA_PHOTO_BASE64}
                  alt="Gudra Makuburi"
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Details Column: order-2 on mobile (under the photo), md:order-1 on desktop (on the left) */}
          <div className="order-2 md:order-1 md:col-span-7 text-left pt-2 md:pt-0">
            {/* Main Greeting & Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3">
              Salut ! Je suis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa5a02] to-[#ff7a29]">
                {PROFILE.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold text-[#fa5a02] mb-5">
              {PROFILE.tagline}.
            </p>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
              {PROFILE.bio}
            </p>

            {/* CTA Action Group */}
            <div className="flex flex-wrap items-center justify-start gap-3.5 mb-8">
              <button
                id="hero-projects-cta"
                onClick={() => onNavigate('projects')}
                className="btn-interactive inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#fa5a02] to-[#c73e00] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#fa5a02]/30 cursor-pointer"
              >
                <i className="fas fa-rocket text-sm" />
                <span>Mes Projets</span>
              </button>

              <button
                id="hero-contact-cta"
                onClick={() => onNavigate('contact')}
                className="btn-interactive inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#fa5a02] text-[#fa5a02] hover:text-white hover:bg-[#fa5a02] font-bold text-sm sm:text-base shadow-sm cursor-pointer"
              >
                <i className="fas fa-paper-plane text-sm" />
                <span>Contacte-moi</span>
              </button>

              <button
                id="hero-cv-cta"
                onClick={onOpenCV}
                className="btn-interactive inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#181818] text-gray-200 hover:text-white hover:bg-[#222222] border border-[#2d2d2d] font-semibold text-sm cursor-pointer"
              >
                <i className="fas fa-file-alt text-xs text-[#fa5a02]" />
                <span>Mon CV</span>
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="flex flex-wrap items-center justify-start gap-3 pt-6 border-t border-[#222222]">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1">
                Réseaux & Liens :
              </span>

              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Gudra Makuburi"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2a2a2a] hover:border-[#fa5a02] text-gray-300 hover:text-white hover:bg-[#fa5a02]/20 flex items-center justify-center transition-all duration-200"
              >
                <i className="fab fa-github text-base" />
              </a>

              <a
                href={PROFILE.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chaîne YouTube de Gudra Mak"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2a2a2a] hover:border-[#fa5a02] text-gray-300 hover:text-red-400 hover:bg-red-500/10 flex items-center justify-center transition-all duration-200"
              >
                <i className="fab fa-youtube text-base" />
              </a>

              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Gudra Mak"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2a2a2a] hover:border-[#fa5a02] text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-200"
              >
                <i className="fab fa-linkedin-in text-base" />
              </a>

              <a
                href={PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook de Gudra Makuburi"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2a2a2a] hover:border-[#fa5a02] text-gray-300 hover:text-blue-300 hover:bg-blue-600/10 flex items-center justify-center transition-all duration-200"
              >
                <i className="fab fa-facebook-f text-base" />
              </a>

              <a
                href={`https://wa.me/${PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direct"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2a2a2a] hover:border-emerald-500 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-200"
              >
                <i className="fab fa-whatsapp text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Continuous Ticker Marquee */}
        <div className="mt-14 sm:mt-18 py-3.5 px-4 rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden relative shadow-inner">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-semibold text-gray-400">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span className="text-gray-300 tracking-wide">{item}</span>
                <span className="text-[#fa5a02]">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Section Header for Highlights Bento */}
        <FadeUp delay={0}>
          <div className="mt-20 lg:mt-24 text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fa5a02]/10 border border-[#fa5a02]/30 text-[#fa5a02] text-xs font-semibold mb-3">
              <i className="fas fa-sparkles text-xs" />
              <span>EXCELLENCE & SAVOIR-FAIRE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ce que j'apporte à <span className="text-[#fa5a02]">vos projets</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300">
              Une approche méthodique et rigoureuse pour concevoir des sites web performants, beaux et durables.
            </p>
          </div>
        </FadeUp>

        {/* Highlights & Specialties Bento Grid with Fade-Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Bento Card 1 (Spans 2 cols on lg) */}
          <FadeUp delay={100} className="lg:col-span-2 h-full">
            <div className="card-hover-effect p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181818] via-[#141414] to-[#121212] border border-[#2a2a2a] shadow-xl relative overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fa5a02] to-[#c73e00] flex items-center justify-center text-white text-2xl shadow-lg shadow-[#fa5a02]/25 group-hover:scale-105 transition-transform">
                      <i className="fas fa-code" />
                    </div>
                    <div>
                      <span className="text-xs text-[#fa5a02] font-semibold tracking-wider uppercase">
                        Pilier Fondamental
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#fa5a02] transition-colors">
                        Intégration Web Sémantique & W3C
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#333] text-xs font-semibold text-gray-300">
                    HTML5 & CSS3 Pur
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  Je structure le code avec des balises HTML5 appropriées (<code>header</code>, <code>nav</code>, <code>main</code>, <code>article</code>, <code>section</code>, <code>footer</code>) assurant une accessibilité irréprochable et un référencement naturel optimisé, sans recours à du code superflu.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#242424]">
                <span className="px-3 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #StandardsW3C
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #AccessibilitéWeb
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #StructurePropre
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #SEO-Friendly
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Bento Card 2: Mobile-First */}
          <FadeUp delay={180} className="h-full">
            <div className="card-hover-effect p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181818] via-[#141414] to-[#121212] border border-[#2a2a2a] shadow-xl group h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#202020] border border-[#333] flex items-center justify-center text-[#fa5a02] text-2xl mb-6 shadow-md group-hover:bg-[#fa5a02] group-hover:text-white transition-all">
                  <i className="fas fa-mobile-screen" />
                </div>
                <span className="text-xs text-[#fa5a02] font-semibold tracking-wider uppercase">
                  Adaptabilité
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-[#fa5a02] transition-colors">
                  Conception 100% Mobile-First
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Des interfaces adaptatives conçues d'abord pour les smartphones, avec des zones tactiles confortables (min. 44px) et une fluidité parfaite sur tablette et grand écran.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#242424]">
                <span className="px-2.5 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #MediaQueries
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #Flexbox
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #CSSGrid
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Bento Card 3: Design UI & Micro-interactions */}
          <FadeUp delay={220} className="h-full">
            <div className="card-hover-effect p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181818] via-[#141414] to-[#121212] border border-[#2a2a2a] shadow-xl group h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#202020] border border-[#333] flex items-center justify-center text-[#fa5a02] text-2xl mb-6 shadow-md group-hover:bg-[#fa5a02] group-hover:text-white transition-all">
                  <i className="fas fa-palette" />
                </div>
                <span className="text-xs text-[#fa5a02] font-semibold tracking-wider uppercase">
                  Visuel & Ergonomie
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-[#fa5a02] transition-colors">
                  Harmonie Visuelle & Contrastes
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Sélection soignée de palettes de couleurs, hiérarchies typographiques lisibles et micro-animations CSS délicates qui rendent la navigation engageante et mémorable.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#242424]">
                <span className="px-2.5 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #MicroInteractions
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#121212] border border-[#292929] text-xs text-gray-300 font-medium">
                  #DarkUI
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Bento Card 4 (Spans 2 cols on lg): Featured Project Spotlight */}
          <FadeUp delay={280} className="lg:col-span-2 h-full">
            <div className="card-hover-effect p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#141414] border border-[#333333] shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fa5a02]/20 border border-[#fa5a02]/40 text-[#fa5a02] text-xs font-bold">
                    <i className="fas fa-star text-xs" />
                    <span>RÉALISATION EN VEDETTE</span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    Catégorie : <strong className="text-white">{featuredProject.category}</strong>
                  </span>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-[#fa5a02] transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#252525] border border-[#363636] text-[11px] font-semibold text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-3 w-full sm:w-auto">
                    {onSelectProject && (
                      <button
                        onClick={() => onSelectProject(featuredProject)}
                        className="btn-interactive flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#fa5a02] to-[#c73e00] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#fa5a02]/30 cursor-pointer"
                      >
                        <i className="fas fa-eye text-xs" />
                        <span>Voir les détails</span>
                      </button>
                    )}
                    <button
                      onClick={() => onNavigate('projects')}
                      className="btn-interactive flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#242424] text-gray-200 hover:text-white hover:bg-[#2e2e2e] border border-[#383838] font-semibold text-sm cursor-pointer"
                    >
                      <i className="fas fa-arrow-right text-xs" />
                      <span>Tous les projets</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 3-Step Work Process Banner */}
        <FadeUp delay={150}>
          <div className="card-hover-effect p-8 sm:p-10 rounded-3xl bg-[#141414] border border-[#242424] shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs text-[#fa5a02] font-bold tracking-widest uppercase">
                Méthodologie
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Mon Processus d'Intégration en 3 Étapes
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border-2 border-[#fa5a02] text-[#fa5a02] flex items-center justify-center text-lg font-black mb-4 shadow-md">
                  1
                </div>
                <h4 className="text-base font-bold text-white mb-2">Analyse & Arborescence</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Étude de vos besoins, découpage logique du contenu et structuration sémantique HTML5.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border-2 border-[#fa5a02] text-[#fa5a02] flex items-center justify-center text-lg font-black mb-4 shadow-md">
                  2
                </div>
                <h4 className="text-base font-bold text-white mb-2">Stylisation & Responsive</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Mise en page CSS3 moderne (Grid, Flexbox), adaptation stricte sur mobile et micro-interactions.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border-2 border-[#fa5a02] text-[#fa5a02] flex items-center justify-center text-lg font-black mb-4 shadow-md">
                  3
                </div>
                <h4 className="text-base font-bold text-white mb-2">Contrôle W3C & Déploiement</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Vérification de la conformité syntaxique, optimisation de la légèreté et mise en ligne fluide.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
