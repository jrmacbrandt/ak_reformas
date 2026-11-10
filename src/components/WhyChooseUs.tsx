import React from 'react';
import { ShowcaseCard } from '../types/layers';
import { YellowCheckBadge } from './Icons';

interface WhyChooseUsProps {
  titlePrefix: string;
  titleHighlight: string;
  benefits: string[];
  showcase: ShowcaseCard[];
  isEditable?: boolean;
  onUpdateWhyChoose?: (field: string, val: any) => void;
  onSelectCard?: (card: ShowcaseCard) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  titlePrefix,
  titleHighlight,
  benefits,
  showcase,
  isEditable = false,
  onUpdateWhyChoose,
  onSelectCard,
}) => {
  return (
    <section id="sobre-nos" className="relative z-20 rounded-t-3xl sm:rounded-t-[40px] -mt-6 sm:-mt-8 bg-white text-slate-800 py-12 sm:py-16 scroll-mt-20 shadow-[0_-20px_40px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: "Por que escolher a AK Reformas?" */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight flex flex-wrap items-center gap-2">
            <span
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateWhyChoose && onUpdateWhyChoose('titlePrefix', e.currentTarget.textContent || '')}
              className={`text-[#092244] ${isEditable ? 'outline-dashed outline-1 outline-blue-400 px-1' : ''}`}
            >
              {titlePrefix}
            </span>
            <span
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateWhyChoose && onUpdateWhyChoose('titleHighlight', e.currentTarget.textContent || '')}
              className={`text-[#0070f3] ${isEditable ? 'outline-dashed outline-1 outline-blue-400 px-1' : ''}`}
            >
              {titleHighlight}
            </span>
          </h2>
        </div>

        {/* SEO & AEO Authority Block: Definitive Entity Summary & Trust Credentials */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-sky-50/40 to-slate-50 border border-blue-100 shadow-xs">
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-medium">
            <strong className="text-slate-900 font-bold">A AK Reformas e Manutenção Predial</strong> é referência em engenharia civil e manutenção de edifícios no Estado do Rio de Janeiro. Especializada em restauração e pintura de fachadas prediais com alpinismo industrial (NR-35), impermeabilização e recuperação estrutural, oferecemos supervisão técnica contínua com <strong className="text-blue-800">emissão de ART/CREA</strong> e <strong className="text-blue-800">garantia formal de até 5 anos</strong>.
          </p>
          <div className="mt-3.5 pt-3 border-t border-blue-100/80 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100/70 text-blue-900">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Garantia de até 5 Anos
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/70 text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Técnicos Certificados NR-35 & NR-18
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100/70 text-amber-900">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              Emissão de ART/CREA-RJ
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-800">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Cobertura em Todo o Rio de Janeiro
            </span>
          </div>
        </div>

        {/* 2-Column Split: Benefits Checklist on Left, 5-Card Angled Gallery on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 6 Benefits with Yellow Check Badges */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-2.5">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 group p-2 rounded-xl hover:bg-blue-50/80 hover:translate-x-2 transition-all duration-200 cursor-pointer"
              >
                <div className="shrink-0 transition-transform duration-200 group-hover:scale-115">
                  <YellowCheckBadge size={22} />
                </div>
                <span
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    if (onUpdateWhyChoose) {
                      const next = [...benefits];
                      next[idx] = e.currentTarget.textContent || '';
                      onUpdateWhyChoose('benefits', next);
                    }
                  }}
                  className={`text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight leading-snug transition-colors group-hover:text-blue-700 ${
                    isEditable ? 'outline-dashed outline-1 outline-blue-400 px-1 bg-blue-50/50' : ''
                  }`}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: 6 Perspective Showcase Cards aligned to the top */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-start">
              {showcase.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => onSelectCard && onSelectCard(card)}
                  className="group relative flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2.5"
                >
                  {/* Card Container with Angled Top Cut */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-md border-2 border-slate-200 group-hover:border-blue-600 group-hover:shadow-2xl transition-all duration-300">
                    
                    {/* Showcase Image with fallbacks */}
                    <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-200 relative">
                      <img
                        src={card.image}
                        alt={`${card.title} - Serviço especializado de engenharia e reforma predial da AK Reformas RJ`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={260}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Bottom Dark Blue Label Badge (Pure HTML text layer) */}
                    <div className="p-2 bg-white">
                      <div className="bg-[#0b2b52] group-hover:bg-[#0070f3] group-hover:scale-[1.02] text-white py-1.5 px-2 rounded-xl text-center shadow transition-all duration-300">
                        <h3
                          contentEditable={isEditable}
                          suppressContentEditableWarning
                          onClick={(e) => isEditable && e.stopPropagation()}
                          onBlur={(e) => {
                            if (onUpdateWhyChoose) {
                              const next = showcase.map((c) =>
                                c.id === card.id ? { ...c, title: e.currentTarget.textContent || '' } : c
                              );
                              onUpdateWhyChoose('showcase', next);
                            }
                          }}
                          className={`block text-[11px] sm:text-xs font-bold tracking-tight leading-tight whitespace-normal m-0 ${
                            isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''
                          }`}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
