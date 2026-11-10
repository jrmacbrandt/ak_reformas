import React from 'react';
import { AKBrandLogo, WhatsAppIcon, YellowCheckBadge } from './Icons';
import { ChevronRight, ShieldCheck, FileText, Cookie, Users, Megaphone, Mail, Home, Calendar } from 'lucide-react';
import { LegalTab } from './LegalModal';

interface FooterCTAProps {
  headline: string;
  subheadline: string;
  ctaButton: string;
  coverageBadge: string;
  brandTagline: string;
  brandSlogan: string;
  isEditable?: boolean;
  onUpdateFooter?: (field: string, val: string) => void;
  onOpenQuoteModal: () => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({
  headline,
  subheadline,
  ctaButton,
  coverageBadge,
  brandTagline,
  brandSlogan,
  isEditable = false,
  onUpdateFooter,
  onOpenQuoteModal,
  onOpenLegal,
}) => {
  return (
    <footer id="contato" className="relative z-30 rounded-t-3xl sm:rounded-t-[48px] overflow-hidden bg-[#073670] text-white shadow-[0_-30px_60px_rgba(0,0,0,0.6)] scroll-mt-20">
      {/* Background: Rio de Janeiro Panoramic Skyline & Ocean */}
      <div className="absolute inset-0 z-0">
        <img
          src="/extracted/footer_rio.jpg"
          alt="Vista panorâmica do Pão de Açúcar no Rio de Janeiro - Cobertura de serviços da AK Reformas"
          className="w-full h-full object-cover object-left opacity-35 filter brightness-110"
          loading="lazy"
          decoding="async"
          width={1200}
          height={400}
        />
        {/* Blue atmospheric overlay matching original flyer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#034a9e]/85 via-[#035ab8]/75 to-[#022f6d]/90 pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left/Center CTA Content */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-4 sm:space-y-5">
            
            {/* Headline: "Não deixe para depois!" */}
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[42px] tracking-tight text-white leading-tight">
              <span
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateFooter && onUpdateFooter('headline', e.currentTarget.textContent || '')}
                className={`block ${isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''}`}
              >
                {headline}
              </span>

              {/* Subheadline: "Valorize seu imóvel com quem entende!" */}
              <span
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateFooter && onUpdateFooter('subheadline', e.currentTarget.textContent || '')}
                className={`block italic text-[#ffd000] text-xl sm:text-3xl lg:text-4xl mt-1 text-yellow-shadow ${
                  isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''
                }`}
              >
                {subheadline}
              </span>
            </h2>

            {/* Green WhatsApp CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-display font-extrabold text-base sm:text-xl py-3 px-6 sm:px-8 rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-200 cursor-pointer border-2 border-white/40"
              >
                {/* White WhatsApp Circle */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <WhatsAppIcon size={20} className="text-[#25D366] fill-current" />
                </div>

                <span
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                  onClick={(e) => isEditable && e.stopPropagation()}
                  onBlur={(e) => onUpdateFooter && onUpdateFooter('ctaButton', e.currentTarget.textContent || '')}
                  className={`tracking-tight ${isEditable ? 'outline-dashed outline-1 outline-white px-1' : ''}`}
                >
                  {ctaButton}
                </span>

                <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform ml-1" />
              </button>
            </div>

            {/* Coverage Trust Badge: "Atendimento em todo o Rio de Janeiro" */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 text-sm font-bold text-white/95">
              <YellowCheckBadge size={18} />
              <span
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateFooter && onUpdateFooter('coverageBadge', e.currentTarget.textContent || '')}
                className={`tracking-tight ${isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''}`}
              >
                {coverageBadge}
              </span>
            </div>

          </div>

          {/* Right Logo Block (AK Brand Logo in White / Cyan) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center pt-4 lg:pt-0">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl flex flex-col items-center text-center">
              <AKBrandLogo
                tagline={brandTagline}
                slogan={brandSlogan}
                theme="light"
                isEditable={isEditable}
                onEdit={(field, val) =>
                  onUpdateFooter && onUpdateFooter(field === 'tagline' ? 'brandTagline' : 'brandSlogan', val)
                }
              />
              <p className="mt-4 text-[11px] text-white/70 max-w-[220px]">
                Especialistas em reformas condominiais, pintura em altura e restauração de fachadas.
              </p>
            </div>
          </div>

        </div>

        {/* Responsive Footer Navigation Menu */}
        {/* Pages: Home, Quem Somos, Serviços, Contato, Política de Privacidade, Termos de Uso */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Primary Navigation Links: Home, Quem Somos, Serviços, FAQ, Contato */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-white/90">
              <a href="#inicio" className="hover:text-yellow-300 transition-colors py-1 cursor-pointer flex items-center gap-1">
                <Home className="w-3.5 h-3.5 text-yellow-300" />
                <span>Home</span>
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a href="#sobre-nos" className="hover:text-yellow-300 transition-colors py-1 cursor-pointer">
                Quem Somos
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a href="#servicos" className="hover:text-yellow-300 transition-colors py-1 cursor-pointer">
                Serviços
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a href="#faq" className="hover:text-yellow-300 transition-colors py-1 cursor-pointer">
                Dúvidas (FAQ)
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a href="#contato" className="hover:text-yellow-300 transition-colors py-1 cursor-pointer">
                Contato
              </a>
            </div>

            {/* Redes Sociais com Ícones Oficiais em Branco */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-white/80 text-xs font-semibold mr-1">Siga nossas redes:</span>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] text-white transition-all border border-white/20 hover:border-transparent text-xs font-semibold shadow-xs"
                aria-label="Atendimento pelo WhatsApp"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path fill="white" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.11l-.3-.18-3.12.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25.7-.73 1.29-1.39 1.66-.45.25-.97.38-1.51.38-.49 0-1.12-.13-2.18-.57-1.87-.77-3.37-2.31-4.27-4.22-.44-.93-.66-1.86-.66-2.76 0-1.19.46-2.19 1.24-2.82.26-.21.57-.32.9-.32.14 0 .28.03.42.09.28.12.63.97.77 1.32.14.35.21.6.07.88-.07.14-.14.28-.28.42-.14.14-.28.28-.35.42-.14.28-.07.56.07.84.42.84 1.05 1.54 1.82 2.03.77.49 1.47.7 2.1.84.28.07.56 0 .77-.21.28-.28.63-.7.84-.98.21-.28.49-.28.77-.14.28.14 1.75.84 2.03.98.28.14.49.21.56.35.07.14.07.7-.18 1.4" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/akreformas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white transition-all border border-white/20 hover:border-transparent text-xs font-semibold shadow-xs"
                aria-label="Instagram oficial da AK Reformas"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/akreformas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#1877f2] text-white transition-all border border-white/20 hover:border-transparent text-xs font-semibold shadow-xs"
                aria-label="Facebook da AK Reformas"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path fill="white" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/akreformas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#0077b5] text-white transition-all border border-white/20 hover:border-transparent text-xs font-semibold shadow-xs"
                aria-label="LinkedIn Institucional"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path fill="white" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@akreformas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#ff0000] text-white transition-all border border-white/20 hover:border-transparent text-xs font-semibold shadow-xs"
                aria-label="Canal no YouTube com Obras e Vídeos de Fachadas"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path fill="white" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </div>

            {/* Legal Navigation Links: Política de Privacidade, Termos de Uso, Política de Cookies, Sobre Nós, Publicidade, Contato */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white/80 pt-1">
              <button
                onClick={() => onOpenLegal && onOpenLegal('privacy')}
                className="flex items-center gap-1 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
                <span>Política de Privacidade</span>
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('terms')}
                className="flex items-center gap-1 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-yellow-300" />
                <span>Termos de Uso</span>
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('cookies')}
                className="flex items-center gap-1 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <Cookie className="w-3.5 h-3.5 text-yellow-300" />
                <span>Política de Cookies</span>
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('about')}
                className="flex items-center gap-1 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-yellow-300" />
                <span>Sobre Nós</span>
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('advertising')}
                className="flex items-center gap-1 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <Megaphone className="w-3.5 h-3.5 text-yellow-300" />
                <span>Publicidade & Transparência</span>
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('contact')}
                className="flex items-center gap-1 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-yellow-300" />
                <span>Fale Conosco</span>
              </button>
            </div>

            {/* Informational Policy Update Notice */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/60">
              <Calendar className="w-3 h-3 text-yellow-300/80" />
              <span>Políticas atualizadas em <strong>novembro de 2026</strong> · Em estrita conformidade com a LGPD e Normas ABNT / CREA-RJ</span>
            </div>

          </div>
        </div>

        {/* Bottom copyright notice and institutional details */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AK Reformas e Manutenção Predial. Todos os direitos reservados.</p>
          <p className="text-white/75 font-medium">Rio de Janeiro - RJ · Atendimento Rápido e Seguro em Todo o Grande Rio</p>
        </div>

      </div>
    </footer>
  );
};
