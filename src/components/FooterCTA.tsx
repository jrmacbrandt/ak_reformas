import React from 'react';
import { AKBrandLogo, WhatsAppIcon, YellowCheckBadge } from './Icons';
import { ChevronRight, ShieldCheck, FileText } from 'lucide-react';
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
    <footer id="contato" className="relative overflow-hidden bg-[#073670] text-white">
      {/* Background: Rio de Janeiro Panoramic Skyline & Ocean */}
      <div className="absolute inset-0 z-0">
        <img
          src="/extracted/footer_rio.jpg"
          alt="Vista panorâmica do Pão de Açúcar no Rio de Janeiro"
          className="w-full h-full object-cover object-left opacity-35 filter brightness-110"
          referrerPolicy="no-referrer"
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
            
            {/* Primary Navigation Links: Home, Quem Somos, Serviços, Contato */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
              <span className="text-xs uppercase tracking-wider text-yellow-300 font-extrabold mr-1">
                Navegação:
              </span>
              <a
                href="#inicio"
                className="hover:text-yellow-300 transition-colors py-1 cursor-pointer"
              >
                Home
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a
                href="#sobre-nos"
                className="hover:text-yellow-300 transition-colors py-1 cursor-pointer"
              >
                Quem Somos
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a
                href="#servicos"
                className="hover:text-yellow-300 transition-colors py-1 cursor-pointer"
              >
                Serviços
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
              <a
                href="#contato"
                className="hover:text-yellow-300 transition-colors py-1 cursor-pointer"
              >
                Contato
              </a>
            </div>

            {/* Legal Navigation Links: Política de Privacidade, Termos de Uso */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-white/80">
              <button
                onClick={() => onOpenLegal && onOpenLegal('privacy')}
                className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
                <span>Política de Privacidade</span>
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('terms')}
                className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/15 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-yellow-300" />
                <span>Termos de Uso</span>
              </button>
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
