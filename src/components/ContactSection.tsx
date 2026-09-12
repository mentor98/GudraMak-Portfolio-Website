import React from 'react';
import { PROFILE } from '../data/profileData';
import { FadeUp } from './FadeUp';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp delay={0} variant="fade-down">
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa5a02]/10 border border-[#fa5a02]/30 text-[#fa5a02] text-xs sm:text-sm font-semibold mb-3">
              <i className="fas fa-envelope text-xs" />
              <span>CONTACT & COORDONNÉES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Contactez-<span className="text-[#fa5a02]">moi</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Une opportunité professionnelle, un nouveau projet web ou une question ? Échangeons directement.
            </p>
          </div>
        </FadeUp>

        {/* Horizontal Contact Cards Grid with Dynamic Animation Variants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Téléphone with Zoom-Up */}
          <FadeUp delay={80} variant="zoom-up" className="h-full">
            <div
              id="contact-card-phone"
              className="card-hover-effect group relative rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#2a2a2a] p-6 shadow-xl flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] rounded-t-3xl" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fa5a02]/10 border border-[#fa5a02]/30 flex items-center justify-center text-[#fa5a02] text-lg mb-5 group-hover:scale-110 transition-transform">
                  <i className="fas fa-phone-alt" />
                </div>
                <p className="text-xs font-bold text-[#fa5a02] uppercase tracking-wider mb-1">
                  Téléphone
                </p>
                <h3 className="text-lg font-bold text-white mb-1">
                  {PROFILE.phone}
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Ligne directe Burundi
                </p>
              </div>

              <a
                id="btn-call-phone"
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="btn-interactive w-full py-3 px-4 rounded-xl bg-[#222] hover:bg-[#fa5a02] text-gray-200 hover:text-white font-semibold text-xs text-center flex items-center justify-center gap-2 border border-[#333] hover:border-[#fa5a02]"
              >
                <i className="fas fa-phone-alt text-xs" />
                <span>Appeler maintenant</span>
              </a>
            </div>
          </FadeUp>

          {/* Card 2: WhatsApp with Zoom-In */}
          <FadeUp delay={160} variant="zoom-in" className="h-full">
            <div
              id="contact-card-whatsapp"
              className="card-hover-effect group relative rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#2a2a2a] p-6 shadow-xl flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-3xl" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl group-hover:scale-110 transition-transform">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Actif
                  </span>
                </div>
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <h3 className="text-lg font-bold text-white mb-1">
                  {PROFILE.whatsapp}
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Messagerie instantanée
                </p>
              </div>

              <a
                id="btn-open-whatsapp"
                href={`https://wa.me/${PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive w-full py-3 px-4 rounded-xl bg-[#222] hover:bg-emerald-600 text-gray-200 hover:text-white font-semibold text-xs text-center flex items-center justify-center gap-2 border border-[#333] hover:border-emerald-500"
              >
                <i className="fab fa-whatsapp text-sm" />
                <span>Démarrer un chat</span>
              </a>
            </div>
          </FadeUp>

          {/* Card 3: Email with Fade-Down */}
          <FadeUp delay={240} variant="fade-down" className="h-full">
            <div
              id="contact-card-email"
              className="card-hover-effect group relative rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#2a2a2a] p-6 shadow-xl flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] rounded-t-3xl" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fa5a02]/10 border border-[#fa5a02]/30 flex items-center justify-center text-[#fa5a02] text-lg mb-5 group-hover:scale-110 transition-transform">
                  <i className="fas fa-envelope" />
                </div>
                <p className="text-xs font-bold text-[#fa5a02] uppercase tracking-wider mb-1">
                  Adresse Email
                </p>
                <h3 className="text-sm font-bold text-white mb-1 break-all">
                  {PROFILE.email}
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Réponse garantie sous 24h
                </p>
              </div>

              <a
                id="btn-send-email"
                href={`mailto:${PROFILE.email}`}
                className="btn-interactive w-full py-3 px-4 rounded-xl bg-[#222] hover:bg-[#fa5a02] text-gray-200 hover:text-white font-semibold text-xs text-center flex items-center justify-center gap-2 border border-[#333] hover:border-[#fa5a02]"
              >
                <i className="fas fa-paper-plane text-xs" />
                <span>Envoyer un e-mail</span>
              </a>
            </div>
          </FadeUp>

          {/* Card 4: Localisation with Zoom-Up */}
          <FadeUp delay={320} variant="zoom-up" className="h-full">
            <div
              id="contact-card-location"
              className="card-hover-effect group relative rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#2a2a2a] p-6 shadow-xl flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fa5a02] to-[#c73e00] rounded-t-3xl" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fa5a02]/10 border border-[#fa5a02]/30 flex items-center justify-center text-[#fa5a02] text-lg mb-5 group-hover:scale-110 transition-transform">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <p className="text-xs font-bold text-[#fa5a02] uppercase tracking-wider mb-1">
                  Localisation
                </p>
                <h3 className="text-base font-bold text-white mb-1">
                  {PROFILE.location}
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Fuseau Central Africa (UTC+2)
                </p>
              </div>

              <div className="w-full py-2.5 px-3 rounded-xl bg-[#141414] border border-[#2a2a2a] text-center">
                <span className="text-[11px] text-gray-300 font-medium flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fa5a02]" />
                  Présentiel & Télétravail
                </span>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Horizontal Connectivity & Social Bar with Ambient Styling */}
        <FadeUp delay={400} variant="zoom-in">
          <div
            id="contact-social-bar"
            className="rounded-3xl bg-gradient-to-r from-[#181818] via-[#151515] to-[#181818] border border-[#2a2a2a] p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Social Network Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold text-[#fa5a02] uppercase tracking-wider mb-0.5">
                  Réseaux & Plateformes
                </p>
                <p className="text-sm text-gray-300">
                  Suivez mes projets et contributions en ligne
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:ml-4">
                <a
                  id="social-link-github"
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-[#242424] hover:bg-[#1f2328] hover:text-white flex items-center justify-center text-gray-300 text-base hover:-translate-y-1 hover:border-[#fa5a02] transition-all border border-[#333]"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  id="social-link-linkedin"
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#242424] hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-gray-300 text-base hover:-translate-y-1 hover:border-[#0077b5] transition-all border border-[#333]"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  id="social-link-youtube"
                  href={PROFILE.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-[#242424] hover:bg-[#c4302b] hover:text-white flex items-center justify-center text-gray-300 text-base hover:-translate-y-1 hover:border-[#c4302b] transition-all border border-[#333]"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  id="social-link-facebook"
                  href={PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#242424] hover:bg-[#1877f2] hover:text-white flex items-center justify-center text-gray-300 text-base hover:-translate-y-1 hover:border-[#1877f2] transition-all border border-[#333]"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>

            {/* Direct CTA Buttons with Interactive Transitions */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a
                id="cta-whatsapp-quick"
                href={`https://wa.me/${PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-sm" />
                <span>WhatsApp Direct</span>
              </a>
              <a
                id="cta-email-quick"
                href={`mailto:${PROFILE.email}`}
                className="btn-interactive px-5 py-3 rounded-xl bg-gradient-to-r from-[#fa5a02] to-[#c73e00] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#fa5a02]/30 hover:shadow-xl hover:shadow-[#fa5a02]/50 flex items-center gap-2"
              >
                <i className="fas fa-envelope text-xs" />
                <span>Envoyer un Email</span>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
