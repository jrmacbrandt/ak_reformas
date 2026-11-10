import React from 'react';
import { WhatsAppIcon } from './Icons';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  badgeText?: string;
  headlineLine1: string;
  headlineLine2White: string;
  headlineLine2Yellow: string;
  headlineLine3: string;
  headlineAngle?: number;
  paragraph: string;
  buttonTitle: string;
  buttonSubtitle: string;
  backgroundImage?: string;
  isEditable?: boolean;
  onUpdateHero?: (field: string, val: string | number) => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  headlineLine1,
  headlineLine2White,
  headlineLine2Yellow,
  headlineLine3,
  headlineAngle = -6.8,
  paragraph,
  buttonTitle,
  buttonSubtitle,
  backgroundImage = '/extracted/header_bg.webp',
  isEditable = false,
  onUpdateHero,
  onOpenQuoteModal,
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#023373] text-white">
      {/* Background WebP Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/extracted/header_bg_mobile.webp" type="image/webp" />
          <source media="(min-width: 769px)" srcSet={backgroundImage} type="image/webp" />
          <img
            src={backgroundImage}
            alt="AK Reformas e Manutenção Predial Fundo Header"
            className="w-full h-full object-cover object-right lg:object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Soft gradient overlay on left for 100% text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022859]/90 via-[#033b7b]/55 to-transparent pointer-events-none" />
      </div>

      {/* Top curved wave separator */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-b-[40px] z-10 hidden sm:block opacity-95" />

      {/* Subtle radial sunburst in the background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 lg:pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines, Paragraph, and Yellow CTA Button */}
          <div className="lg:col-span-7 z-20 pt-2 lg:pt-6 text-center lg:text-left">
            
            {/* Angled headline container matching original flyer tilt of -6.8 degrees */}
            <div
              style={{
                transform: `rotate(${headlineAngle}deg)`,
                transformOrigin: 'bottom left',
              }}
              className="inline-block transition-transform duration-200 mt-2 sm:mt-4 mb-3 sm:mb-4 px-1"
            >
              <h1 className="font-display font-black tracking-tight leading-[0.98] sm:leading-[1.0] text-hero-shadow">
                
                {/* Line 1: Transformando */}
                <span
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateHero && onUpdateHero('headlineLine1', e.currentTarget.textContent || '')}
                  className={`block text-4xl sm:text-6xl lg:text-[68px] italic text-white drop-shadow-md transition-colors ${
                    isEditable ? 'outline-dashed outline-2 outline-yellow-400 bg-black/20 px-2 rounded' : ''
                  }`}
                >
                  {headlineLine1}
                </span>

                {/* Line 2: ambientes, valorizando */}
                <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2 sm:gap-x-3.5 mt-0.5 sm:mt-1">
                  <span
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateHero && onUpdateHero('headlineLine2White', e.currentTarget.textContent || '')}
                    className={`text-4xl sm:text-6xl lg:text-[68px] italic text-white drop-shadow-md transition-colors ${
                      isEditable ? 'outline-dashed outline-2 outline-yellow-400 bg-black/20 px-2 rounded' : ''
                    }`}
                  >
                    {headlineLine2White}
                  </span>
                  <span
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateHero && onUpdateHero('headlineLine2Yellow', e.currentTarget.textContent || '')}
                    className={`text-4xl sm:text-6xl lg:text-[68px] italic text-[#ffd200] text-yellow-shadow transition-colors ${
                      isEditable ? 'outline-dashed outline-2 outline-yellow-400 bg-black/20 px-2 rounded' : ''
                    }`}
                  >
                    {headlineLine2Yellow}
                  </span>
                </div>

                {/* Line 3: seu patrimônio! */}
                <div className="relative inline-block mt-0.5 sm:mt-1">
                  <span
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateHero && onUpdateHero('headlineLine3', e.currentTarget.textContent || '')}
                    className={`block text-4xl sm:text-6xl lg:text-[68px] italic text-[#ffd200] text-yellow-shadow transition-colors ${
                      isEditable ? 'outline-dashed outline-2 outline-yellow-400 bg-black/20 px-2 rounded' : ''
                    }`}
                  >
                    {headlineLine3}
                  </span>

                  {/* Yellow brush stroke underline tapering out to the right */}
                  <div className="w-[108%] -mt-1 sm:-mt-2 pointer-events-none">
                    <svg viewBox="0 0 340 22" fill="none" className="w-full h-auto text-[#ffd200] drop-shadow-md">
                      <path
                        d="M2 14 C65 9, 150 7, 240 10 C280 11, 312 13, 338 9 C290 17, 195 19, 95 19 C42 19, 16 17, 2 14 Z"
                        fill="currentColor"
                      />
                      <path
                        d="M260 12 C285 13, 315 12, 335 10 C320 15, 290 16, 260 14 Z"
                        fill="#ffc107"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                </div>

              </h1>
            </div>

            {/* Layer: Value Proposition Paragraph */}
            <p
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateHero && onUpdateHero('paragraph', e.currentTarget.textContent || '')}
              className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal text-hero-shadow transition-colors ${
                isEditable ? 'outline-dashed outline-2 outline-white bg-black/20 p-2 rounded' : ''
              }`}
            >
              {paragraph}
            </p>

            {/* Layer: Yellow CTA Button with WhatsApp icon */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <button
                onClick={onOpenQuoteModal}
                className="group relative flex items-center gap-3 sm:gap-4 bg-[#ffd000] hover:bg-[#ffc200] active:scale-95 text-slate-900 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-xl shadow-blue-950/40 hover:shadow-2xl transition-all duration-200 cursor-pointer border-2 border-white/60"
              >
                {/* Green WhatsApp Circle */}
                <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md">
                  <WhatsAppIcon size={22} className="text-white fill-current" />
                </div>

                {/* Button Text Layer */}
                <div className="text-left pr-2">
                  <span
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                    onClick={(e) => isEditable && e.stopPropagation()}
                    onBlur={(e) => onUpdateHero && onUpdateHero('buttonTitle', e.currentTarget.textContent || '')}
                    className={`block font-display font-extrabold text-base sm:text-xl text-slate-950 tracking-tight leading-tight ${
                      isEditable ? 'outline-dashed outline-1 outline-black px-1' : ''
                    }`}
                  >
                    {buttonTitle}
                  </span>
                  <span
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                    onClick={(e) => isEditable && e.stopPropagation()}
                    onBlur={(e) => onUpdateHero && onUpdateHero('buttonSubtitle', e.currentTarget.textContent || '')}
                    className={`block text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight ${
                      isEditable ? 'outline-dashed outline-1 outline-black px-1' : ''
                    }`}
                  >
                    {buttonSubtitle}
                  </span>
                </div>

                {/* Right Arrow Chevron */}
                <div className="text-slate-900 pl-1">
                  <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Contractor + Modern Balcony Building Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center lg:justify-end items-end">

            {/* Mobile View: Kept 100% exactly as requested by user */}
            <div className="block lg:hidden relative w-full max-w-[420px] sm:max-w-[460px]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/extracted/hero_contractor_full.png"
                  alt="Profissional da AK Reformas com capacete de proteção e polegar positivo em frente a edifício residencial moderno"
                  className="w-full h-auto object-cover max-h-[460px] sm:max-h-[500px]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft gradient bottom blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#024997]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Desktop View: Dedicated column space allowing the integrated background artwork with contractor & building to stand out seamlessly */}
            <div className="hidden lg:block relative w-full max-w-[520px] xl:max-w-[560px] min-h-[460px] xl:min-h-[520px] -mb-12 sm:-mb-16 lg:-mb-20 self-end pointer-events-none" />

          </div>

        </div>
      </div>
    </section>
  );
};
