import React, { useEffect } from 'react';
import { Project } from '../data/profileData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isCompleted = project.status === 'Terminé';

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
    >
      <div
        id="project-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#171717] border border-[#2d2d2d] rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          aria-label="Fermer la boîte de dialogue"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#242424] hover:bg-[#fa5a02] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <i className="fas fa-times text-base" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fa5a02] to-[#c73e00] flex items-center justify-center text-white text-2xl shadow-lg shadow-[#fa5a02]/30 flex-shrink-0">
            <i className={project.icon} />
          </div>
          <div>
            <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
              <span className="text-xs font-bold text-[#fa5a02] uppercase tracking-wider">
                {project.category}
              </span>
              <span
                className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  isCompleted
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-[#fa5a02]/10 text-[#fa5a02] border-[#fa5a02]/30'
                }`}
              >
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          <p className="font-medium text-gray-200">{project.description}</p>
          <div className="p-4 rounded-xl bg-[#1f1f1f] border border-[#2a2a2a] text-sm text-gray-300 leading-relaxed">
            {project.details}
          </div>
        </div>

        {/* Key Features Checklist */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <i className="fas fa-check-circle text-[#fa5a02]" />
            <span>Points forts & Caractéristiques</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-300">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-[#1b1b1b] p-2.5 rounded-xl border border-[#262626]">
                <i className="fas fa-arrow-right text-[#fa5a02] text-xs mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies / Tags */}
        <div className="mb-8 pt-4 border-t border-[#262626]">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
            Technologies & Méthodes appliquées
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#fa5a02]/10 text-[#fa5a02] border border-[#fa5a02]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#262626]">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#242424] hover:bg-[#2e2e2e] text-gray-300 font-semibold text-sm transition-colors cursor-pointer"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              onClose();
              onContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#fa5a02] to-[#c73e00] text-white font-bold text-sm shadow-md shadow-[#fa5a02]/30 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <i className="fas fa-paper-plane text-xs" />
            <span>Discuter d'un projet similaire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
