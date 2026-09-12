import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenCV,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Mes Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-3 border-b border-[#2a2a2a] shadow-xl shadow-black/40'
          : 'bg-[#0f0f0f]/80 backdrop-blur-sm py-4 border-b border-[#222]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="header-logo-btn"
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full drop-shadow-[0_4px_12px_rgba(250,90,2,0.35)]"
            >
              <defs>
                <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fa5a02" />
                  <stop offset="100%" stopColor="#c73e00" />
                </linearGradient>
              </defs>
              <rect x="40" y="40" width="320" height="320" rx="80" fill="url(#headerGrad)" />
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
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gray-100 transition-colors">
              Gudra <span className="text-[#fa5a02]">MaK</span>
            </span>
            <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
              Junior Web Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#fa5a02]/15 border border-[#fa5a02]/60 shadow-[0_0_15px_rgba(250,90,2,0.2)]'
                    : 'text-gray-300 hover:text-[#fa5a02] hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="h-6 w-px bg-[#333] mx-2" />

          {/* Quick CV Button */}
          <button
            id="header-cv-btn"
            onClick={onOpenCV}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#fa5a02] to-[#c73e00] rounded-full hover:shadow-[0_6px_20px_rgba(250,90,2,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <i className="fas fa-file-alt text-xs" />
            <span>Mon CV</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-cv-quick-btn"
            onClick={onOpenCV}
            aria-label="Voir le CV"
            className="p-2 text-xs font-semibold text-[#fa5a02] bg-[#fa5a02]/10 border border-[#fa5a02]/30 rounded-lg"
          >
            <i className="fas fa-file-alt mr-1" /> CV
          </button>

          <button
            id="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Basculer le menu"
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-[#fa5a02]/50 bg-[#161616] text-[#fa5a02] hover:bg-[#fa5a02]/10 transition-colors focus:outline-none"
          >
            <span
              className={`w-5 h-0.5 bg-[#fa5a02] transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#fa5a02] transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#fa5a02] transition-transform duration-200 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-[#222] bg-[#141414] px-4 pt-3 pb-5 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#fa5a02] text-white font-bold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-[#fa5a02]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              id="mobile-drawer-cv-btn"
              onClick={() => {
                onOpenCV();
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#fa5a02] to-[#c73e00] rounded-xl shadow-lg shadow-[#fa5a02]/20"
            >
              <i className="fas fa-file-alt" />
              Consulter mon CV complet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
