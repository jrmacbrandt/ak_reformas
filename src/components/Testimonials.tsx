import React from 'react';
import { TestimonialItem } from '../types/layers';
import { StarRating } from './Icons';

interface TestimonialsProps {
  titlePrefix: string;
  titleHighlight: string;
  items: TestimonialItem[];
  isEditable?: boolean;
  onUpdateTestimonials?: (field: string, val: any) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  titlePrefix,
  titleHighlight,
  items,
  isEditable = false,
  onUpdateTestimonials,
}) => {
  return (
    <section id="depoimentos" className="sticky top-0 z-10 py-16 sm:py-20 bg-[#0a2f60] text-white overflow-hidden scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title: "O que nossos clientes dizem?" */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
              <span
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateTestimonials && onUpdateTestimonials('titlePrefix', e.currentTarget.textContent || '')}
                className={`block text-white ${isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''}`}
              >
                {titlePrefix}
              </span>
              <span
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateTestimonials && onUpdateTestimonials('titleHighlight', e.currentTarget.textContent || '')}
                className={`block font-script text-3xl sm:text-4xl lg:text-5xl text-[#ffd000] mt-1 relative inline-block ${
                  isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1' : ''
                }`}
              >
                {titleHighlight}
                {/* Yellow decorative brush underline */}
                <svg className="w-full h-3 mt-0.5 text-[#ffd000]" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9C30 3, 70 3, 98 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Right Cards: 3 Client Testimonials */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4.5">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Top Row: Avatar and Quote */}
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm bg-slate-100">
                        <img
                          src={item.avatar}
                          alt={`Depoimento de ${item.name} (${item.location}) - Avaliação de cliente AK Reformas`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          width={48}
                          height={48}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          contentEditable={isEditable}
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            if (onUpdateTestimonials) {
                              const next = items.map((t) =>
                                t.id === item.id ? { ...t, quote: e.currentTarget.textContent || '' } : t
                              );
                              onUpdateTestimonials('items', next);
                            }
                          }}
                          className={`text-xs sm:text-[13px] font-bold text-slate-900 leading-snug ${
                            isEditable ? 'outline-dashed outline-1 outline-blue-400 p-1 bg-blue-50/50' : ''
                          }`}
                        >
                          {item.quote}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="mt-3 flex justify-center">
                      <StarRating stars={item.stars} />
                    </div>
                  </div>

                  {/* Bottom: Author & Location */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
                    <span
                      contentEditable={isEditable}
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        if (onUpdateTestimonials) {
                          const text = e.currentTarget.textContent || '';
                          const parts = text.split('–').map((s) => s.trim());
                          const next = items.map((t) =>
                            t.id === item.id
                              ? {
                                  ...t,
                                  name: parts[0] || t.name,
                                  location: parts[1] || t.location,
                                }
                              : t
                          );
                          onUpdateTestimonials('items', next);
                        }
                      }}
                      className={`text-[11px] sm:text-xs font-semibold text-slate-600 block ${
                        isEditable ? 'outline-dashed outline-1 outline-blue-400 px-1' : ''
                      }`}
                    >
                      {item.name} – {item.location}
                    </span>
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
