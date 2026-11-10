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
    <section id="sobre-nos" className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: "Por que escolher a AK Reformas?" */}
        <div className="mb-8 sm:mb-12">
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

        {/* 2-Column Split: Benefits Checklist on Left, 5-Card Angled Gallery on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 6 Benefits with Yellow Check Badges */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <YellowCheckBadge size={22} className="shrink-0" />
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
                  className="group relative flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Card Container with Angled Top Cut */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-md border-2 border-slate-200 group-hover:border-blue-500 group-hover:shadow-xl transition-all">
                    
                    {/* Showcase Image with fallbacks */}
                    <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-200 relative">
                      <img
                        src={card.image}
                        alt={`${card.title} - Serviço especializado de engenharia e reforma predial da AK Reformas RJ`}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={260}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    </div>

                    {/* Bottom Dark Blue Label Badge (Pure HTML text layer) */}
                    <div className="p-2 bg-white">
                      <div className="bg-[#0b2b52] group-hover:bg-[#0070f3] text-white py-1.5 px-2 rounded-xl text-center shadow transition-colors">
                        <span
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
                          className={`block text-[11px] sm:text-xs font-bold tracking-tight leading-tight whitespace-normal ${
                            isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''
                          }`}
                        >
                          {card.title}
                        </span>
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
