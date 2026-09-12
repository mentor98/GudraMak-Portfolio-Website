import React from 'react';
import { PROFILE } from '../data/profileData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCV }) => {
  return (
    <footer id="main-footer" className="bg-[#141414] border-t-2 border-[#242424] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#242424]">
          {/* Col 1: Bio & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-md">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fa5a02" />
                      <stop offset="100%" stopColor="#c73e00" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="40" width="320" height="320" rx="80" fill="url(#footerLogoGrad)" />
                  <path
                    d="M 110 280 L 110 130 L 155 200 L 200 130 L 200 280"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 240 130 L 240 280 M 240 205 L 300 130 M 240 205 L 300 280"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Gudra <span className="text-[#fa5a02]">MaK</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              <strong className="text-gray-200">{PROFILE.name}</strong>, Développeur et intégrateur web junior motivé par l'envie de créer des solutions numériques utiles, accessibles et bien conçues.
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-[#fa5a02] uppercase tracking-wider mb-3">
                Suivez-moi
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Gudra Mak"
                  className="w-10 h-10 rounded-xl bg-[#222] hover:bg-[#fa5a02] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href={PROFILE.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube de Gudra Mak"
                  className="w-10 h-10 rounded-xl bg-[#222] hover:bg-[#fa5a02] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  href={PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Gudra Mak"
                  className="w-10 h-10 rounded-xl bg-[#222] hover:bg-[#fa5a02] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Gudra Mak"
                  className="w-10 h-10 rounded-xl bg-[#222] hover:bg-[#fa5a02] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#fa5a02] uppercase tracking-wider mb-4">
              Navigation Rapide
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-[#fa5a02] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-[10px] text-[#fa5a02]" />
                  <span>Accueil</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-300 hover:text-[#fa5a02] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-[10px] text-[#fa5a02]" />
                  <span>À propos de moi</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-gray-300 hover:text-[#fa5a02] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-[10px] text-[#fa5a02]" />
                  <span>Mes Projets & Travaux</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-[#fa5a02] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-[10px] text-[#fa5a02]" />
                  <span>Me contacter</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCV}
                  className="text-gray-300 hover:text-[#fa5a02] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-[10px] text-[#fa5a02]" />
                  <span>Télécharger mon CV</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-[#fa5a02] uppercase tracking-wider mb-4">
              Contactez-moi
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5">
              <i className="fas fa-phone-alt text-[#fa5a02] mt-1" />
              <span>{PROFILE.phone}, {PROFILE.whatsapp} (WhatsApp)</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5">
              <i className="fas fa-envelope text-[#fa5a02] mt-1" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-[#fa5a02] transition-colors">
                {PROFILE.email}
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5">
              <i className="fas fa-map-marker-alt text-[#fa5a02] mt-1 flex-shrink-0" />
              <span>{PROFILE.location}</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 - {PROFILE.name} - Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <span>Intégration HTML5 & CSS3</span>
            <span>•</span>
            <span>Design Responsive</span>
            <span>•</span>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#fa5a02] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>Haut de page</span>
              <i className="fas fa-arrow-up text-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
