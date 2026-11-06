import React from 'react';
import { ShowcaseCard } from '../types/layers';
import { X, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface ShowcaseModalProps {
  card: ShowcaseCard | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ShowcaseModal: React.FC<ShowcaseModalProps> = ({
  card,
  onClose,
  onRequestQuote,
}) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Image Header with Close Button */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block bg-[#0070f3] text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-1.5 shadow-sm">
              {card.tag}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white drop-shadow-md">
              {card.title}
            </h3>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            {card.description}
          </p>

          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-2">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Garantias e Padrões de Segurança AK Reformas
            </h4>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Profissionais com certificação NR-35 (Trabalho Seguro em Altura).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Materiais de primeira linha com resistência UV e anti-infiltração.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Supervisão técnica contínua e cumprimento rigoroso de cronogramas.</span>
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(card.title);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-display font-extrabold text-sm py-3 px-5 rounded-full shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={18} className="fill-current text-white" />
              <span>Pedir Orçamento para {card.title}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Voltar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
