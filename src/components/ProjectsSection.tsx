import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/profileData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onNavigateContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onNavigateContact,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const categories = ['Tous', 'Site Vitrine', 'Landing Page', 'Initiative Citoyenne', 'Santé & Services'];

  const filteredProjects = activeFilter === 'Tous'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa5a02]/10 border border-[#fa5a02]/30 text-[#fa5a02] text-xs sm:text-sm font-semibold mb-3">
            <i className="fas fa-briefcase text-xs" />
            <span>PORTFOLIO & TRAVAUX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mes <span className="text-[#fa5a02]">Projets & Réalisations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Une sélection d'interfaces web conçues avec rigueur, optimisées pour tous les appareils et soignées dans les moindres détails.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#fa5a02] text-white shadow-md shadow-[#fa5a02]/30'
                    : 'bg-[#181818] text-gray-300 hover:text-white hover:bg-[#222] border border-[#2c2c2c]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isCompleted = project.status === 'Terminé';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-[#191919] to-[#131313] border border-[#282828] p-6 sm:p-7 flex flex-col justify-between hover:border-[#fa5a02]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] opacity-80 group-hover:h-1.5 transition-all" />

                <div>
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fa5a02] to-[#c73e00] flex items-center justify-center text-white text-xl shadow-md shadow-[#fa5a02]/25 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <i className={project.icon} />
                    </div>

                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-[#fa5a02]/10 text-[#fa5a02] border-[#fa5a02]/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-xs font-semibold text-[#fa5a02] uppercase tracking-wider mb-1">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fa5a02] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#262626] mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#fa5a02]/10 text-[#fa5a02] border border-[#fa5a02]/20 group-hover:border-[#fa5a02]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#202020] hover:bg-[#fa5a02] text-gray-200 hover:text-white text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>Découvrir le projet</span>
                    <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Vous avez une idée de site vitrine pour votre entreprise ou boutique ?
          </p>
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fa5a02] hover:bg-[#ff6b1a] text-white font-bold text-sm shadow-lg shadow-[#fa5a02]/30 transition-all cursor-pointer"
          >
            <i className="fas fa-paper-plane text-xs" />
            <span>Discutons de votre projet</span>
          </button>
        </div>
      </div>
    </section>
  );
};
