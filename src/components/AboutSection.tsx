import React from 'react';
import { PROFILE, SKILL_CATEGORIES } from '../data/profileData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenCV }) => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa5a02]/10 border border-[#fa5a02]/30 text-[#fa5a02] text-xs sm:text-sm font-semibold mb-3">
            <i className="fas fa-user text-xs" />
            <span>À PROPOS DE MOI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionné d'interfaces <span className="text-[#fa5a02]">modernes & élégantes</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours, mes valeurs et mon engagement pour un web soigné, accessible et performant.
          </p>
        </div>

        {/* Main Presentation Feature Card */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#181818] via-[#141414] to-[#101010] border border-[#2a2a2a] shadow-2xl mb-12 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fa5a02] to-[#c73e00] flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-[#fa5a02]/30 flex-shrink-0">
              GM
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa5a02]/15 border border-[#fa5a02]/30 text-[#fa5a02] text-xs font-semibold mb-2">
                <i className="fas fa-compass" />
                <span>Parcours & Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Gudra <span className="text-[#fa5a02]">MAKUBURI</span>
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              Basé à <strong className="text-white">Bujumbura (Burundi)</strong>, je suis un développeur et intégrateur web junior passionné par l'art de concevoir des interfaces web fluides, intuitives et esthétiques.
            </p>
            <p>
              Je concentre mon expertise sur la maîtrise approfondie des piliers fondamentaux du web : <strong className="text-white">HTML5 sémantique</strong>, <strong className="text-white">CSS3 moderne</strong> (Flexbox, CSS Grid, variables CSS, micro-interactions) et le <strong className="text-white">Design Responsive</strong> adapté à tous les types d'écrans.
            </p>
            <p>
              Mon approche est guidée par la rigueur, le respect des standards de conformité W3C et le désir constant de proposer des solutions numériques adaptées aux besoins réels des commerces, artisans et créateurs locaux.
            </p>
          </div>

          {/* Inspiring Quote */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#1c1c1c] border border-[#fa5a02]/30 italic text-gray-200 text-base sm:text-lg">
            <div className="flex items-start gap-3">
              <i className="fas fa-quote-left text-[#fa5a02] text-xl mt-1 flex-shrink-0" />
              <p>
                "Le web est un espace où créativité visuelle et rigueur structurelle se rencontrent pour donner vie à des expériences utiles et mémorables."
              </p>
            </div>
          </div>
        </div>

        {/* Thematic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Mon Parcours & Philosophie */}
          <div className="p-7 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#fa5a02]/40 transition-all duration-300 relative group shadow-lg">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fa5a02] to-[#c73e00] flex items-center justify-center text-white text-lg shadow-md shadow-[#fa5a02]/20">
                <i className="fas fa-route" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-[#fa5a02] transition-colors">
                Mon Parcours
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
              Autonome et curieux, j'ai développé mes compétences en explorant les meilleures pratiques de l'intégration web. Mon quotidien est rythmé par la veille technique, l'optimisation des maquettes et la recherche de l'harmonie entre lisibilité et esthétique.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>Originaire et actif à Bujumbura, Burundi</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>Souci méticuleux des détails graphiques et d'alignement</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>Capacité constante d'apprentissage et d'adaptation</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Méthodologie de Travail */}
          <div className="p-7 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#fa5a02]/40 transition-all duration-300 relative group shadow-lg">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fa5a02] to-[#c73e00] flex items-center justify-center text-white text-lg shadow-md shadow-[#fa5a02]/20">
                <i className="fas fa-layer-group" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-[#fa5a02] transition-colors">
                Méthodologie de Travail
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
              Chaque projet commence par une compréhension approfondie des besoins de l'utilisateur final afin de structurer une hiérarchie visuelle claire et intuitive.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>Conception <strong>Mobile-First</strong> pour une expérience tactile irréprochable</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>Balisage <strong>HTML sémantique</strong> favorisant le SEO naturel</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>Optimisation de la vitesse de chargement et des assets graphiques</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Competencies Categories */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#141414] border border-[#282828] shadow-xl mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-white">Domaines d'Expertise & Compétences</h4>
              <p className="text-sm text-gray-400 mt-1">
                Spécialisation pointue en intégration web, architecture visuelle et design responsive.
              </p>
            </div>
            <button
              id="about-open-cv-btn"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#fa5a02]/15 hover:bg-[#fa5a02] text-[#fa5a02] hover:text-white border border-[#fa5a02]/30 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              <i className="fas fa-file-alt" />
              <span>Voir le CV détaillé</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <div
                key={catIdx}
                className="p-5 rounded-2xl bg-[#1a1a1a] border border-[#2b2b2b] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-[#fa5a02] font-bold text-base mb-4 pb-3 border-b border-[#2d2d2d]">
                    <i className={category.icon} />
                    <span>{category.title}</span>
                  </div>
                  <div className="space-y-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-semibold text-gray-200 group-hover:text-[#fa5a02] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#252525] text-gray-400 font-medium">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 leading-normal">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ready for Challenge Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#fa5a02]/20 via-[#c73e00]/15 to-[#fa5a02]/10 border border-[#fa5a02]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <i className="fas fa-bolt text-[#fa5a02]" />
              <span>Prêt pour de nouveaux projets numériques !</span>
            </h4>
            <p className="text-sm sm:text-base text-gray-300 mt-1">
              Vous avez une maquette à intégrer ou un site vitrine à concevoir ? Collaborons ensemble.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-[#fa5a02] hover:bg-[#ff6b1a] text-white font-bold text-sm shadow-lg shadow-[#fa5a02]/30 transition-all cursor-pointer"
            >
              Me contacter
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 rounded-full bg-[#1b1b1b] hover:bg-[#252525] text-gray-200 border border-[#333] font-semibold text-sm transition-all cursor-pointer"
            >
              Voir mes projets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
