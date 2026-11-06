import React, { useState } from 'react';
import { Layers, Edit3, MessageCircle, SplitSquareVertical, Eye, EyeOff } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface FloatingToolsProps {
  onOpenLayerEditor: () => void;
  isDirectEditMode: boolean;
  onToggleDirectEdit: () => void;
  onOpenQuoteModal: () => void;
  onToggleOriginalComparison: () => void;
  isComparing: boolean;
}

export const FloatingTools: React.FC<FloatingToolsProps> = ({
  onOpenLayerEditor,
  isDirectEditMode,
  onToggleDirectEdit,
  onOpenQuoteModal,
  onToggleOriginalComparison,
  isComparing,
}) => {
  return (
    <>
      {/* Top Notification pill when in Direct Edit Mode */}
      {isDirectEditMode && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border-2 border-white animate-bounce">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Modo Edição Direta Ativo: Clique em qualquer texto da página para editar!</span>
          <button
            onClick={onToggleDirectEdit}
            className="ml-2 bg-slate-950 text-white text-[10px] px-2 py-0.5 rounded-full hover:bg-slate-800 cursor-pointer"
          >
            Desativar
          </button>
        </div>
      )}

      {/* Floating Action Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Quick Compare with Original Button */}
        <button
          onClick={onToggleOriginalComparison}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-extrabold shadow-lg transition-all duration-200 cursor-pointer border ${
            isComparing
              ? 'bg-purple-700 text-white border-purple-400 ring-2 ring-purple-300'
              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
          }`}
          title="Alternar visualização comparativa com o flyer original"
        >
          {isComparing ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-purple-600" />}
          <span>{isComparing ? 'Fechar Comparador' : 'Comparar com Original'}</span>
        </button>

        {/* Text Layers Management Button */}
        <button
          onClick={onOpenLayerEditor}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0a284e] hover:bg-[#0d3466] text-white text-xs sm:text-sm font-bold shadow-xl border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer"
          title="Abrir gerenciador de camadas de texto"
        >
          <Layers className="w-4 h-4 text-sky-400" />
          <span>Camadas de Texto</span>
          <span className="bg-sky-500 text-[10px] px-1.5 py-0.2 rounded-full font-mono text-white">
            7
          </span>
        </button>

        {/* Floating WhatsApp Quick Button */}
        <button
          onClick={onOpenQuoteModal}
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 border-2 border-white transition-all duration-200 hover:scale-108 cursor-pointer"
          aria-label="Fale conosco no WhatsApp"
          title="Fale Conosco no WhatsApp"
        >
          <WhatsAppIcon size={28} className="fill-current text-white" />
        </button>

      </div>
    </>
  );
};
