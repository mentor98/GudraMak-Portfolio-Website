import React, { useEffect } from 'react';
import { CV_DATA, PROFILE } from '../data/profileData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, onContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        id="cv-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[#161616] border border-[#2e2e2e] rounded-3xl p-6 sm:p-10 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#2a2a2a] print:hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#fa5a02]">
            <i className="fas fa-file-alt" />
            <span>Curriculum Vitae Officiel</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-cv-btn"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#242424] hover:bg-[#fa5a02] text-gray-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <i className="fas fa-print" />
              <span>Imprimer / Sauvegarder</span>
            </button>
            <button
              id="close-cv-modal-btn"
              onClick={onClose}
              aria-label="Fermer le CV"
              className="w-9 h-9 rounded-full bg-[#242424] hover:bg-white/10 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 mb-8 border-b border-[#282828]">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {CV_DATA.fullName}
            </h2>
            <p className="text-lg font-semibold text-[#fa5a02] mt-1">
              {CV_DATA.role}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-[#fa5a02]" />
              <span>{CV_DATA.contact.address}</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] space-y-1.5 text-xs text-gray-300 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-[#fa5a02] w-4 text-center" />
              <span>{CV_DATA.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fab fa-whatsapp text-emerald-400 w-4 text-center" />
              <span>{CV_DATA.contact.whatsapp}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-[#fa5a02] w-4 text-center" />
              <span>{CV_DATA.contact.email}</span>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-[#fa5a02] uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <i className="fas fa-user" />
            <span>Profil Professionnel</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed bg-[#1b1b1b] p-4 rounded-2xl border border-[#282828]">
            {CV_DATA.summary}
          </p>
        </div>

        {/* Competencies */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-[#fa5a02] uppercase tracking-wider mb-3 flex items-center gap-2">
            <i className="fas fa-code" />
            <span>Compétences & Intégration Web</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CV_DATA.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#1b1b1b] border border-[#272727] text-xs sm:text-sm text-gray-200"
              >
                <i className="fas fa-check text-[#fa5a02] text-xs" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formation & Parcours */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-[#fa5a02] uppercase tracking-wider mb-3 flex items-center gap-2">
            <i className="fas fa-graduation-cap" />
            <span>Formations & Apprentissage</span>
          </h3>
          <div className="space-y-4">
            {CV_DATA.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#1b1b1b] border border-[#272727]">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#fa5a02]/15 text-[#fa5a02] font-semibold">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2 font-medium">{edu.institution}</p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-[#fa5a02] uppercase tracking-wider mb-3 flex items-center gap-2">
            <i className="fas fa-language" />
            <span>Langues Pratiquées</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CV_DATA.languages.map((lang, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#1b1b1b] border border-[#282828] text-center">
                <p className="font-bold text-white text-sm">{lang.name}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CV Footer Actions */}
        <div className="pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Disponible pour missions d'intégration web, stages et collaborations à Bujumbura et à distance.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#fa5a02] to-[#c73e00] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#fa5a02]/30 hover:shadow-lg transition-all cursor-pointer"
            >
              Me contacter
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#242424] hover:bg-[#2c2c2c] text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
