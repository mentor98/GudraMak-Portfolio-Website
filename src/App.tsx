import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { Project } from './data/profileData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll position to update active nav link and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'projects', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#0f0f0f] text-white flex flex-col selection:bg-[#fa5a02] selection:text-white">
      {/* Sticky Navigation Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection
          onNavigate={handleNavigate}
          onOpenCV={() => setIsCVOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <AboutSection
          onNavigate={handleNavigate}
          onOpenCV={() => setIsCVOpen(true)}
        />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onNavigateContact={() => handleNavigate('contact')}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContact={() => {
          setSelectedProject(null);
          handleNavigate('contact');
        }}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        onContact={() => {
          setIsCVOpen(false);
          handleNavigate('contact');
        }}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-tr from-[#fa5a02] to-[#c73e00] text-white shadow-xl shadow-[#fa5a02]/40 hover:shadow-2xl hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
          <i className="fas fa-arrow-up text-base" />
        </button>
      )}
    </div>
  );
}
