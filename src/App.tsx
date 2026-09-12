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
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Monitor scroll position to update active nav link, progress bar and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }

      setShowScrollTop(currentScrollY > 350);

      const scrollPosition = currentScrollY + 200;
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
    <div id="portfolio-root" className="min-h-screen bg-[#0f0f0f] text-white flex flex-col selection:bg-[#fa5a02] selection:text-white animate-fade-in relative">
      {/* Top Dynamic Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#fa5a02] via-[#ff7e38] to-[#c73e00] z-[60] shadow-[0_0_10px_rgba(250,90,2,0.6)] pointer-events-none transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

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

      {/* Floating Back to Top Button with Smooth Spring Animation */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-tr from-[#fa5a02] to-[#c73e00] text-white shadow-xl shadow-[#fa5a02]/40 hover:shadow-2xl hover:shadow-[#fa5a02]/60 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer border border-[#fa5a02]/40"
        >
          <i className="fas fa-arrow-up text-base animate-pulse" />
        </button>
      )}
    </div>
  );
}
