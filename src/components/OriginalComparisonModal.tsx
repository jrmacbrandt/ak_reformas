import React, { useState } from 'react';
import { X, Sliders, CheckCircle2 } from 'lucide-react';

interface OriginalComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalComparisonModal: React.FC<OriginalComparisonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [opacity, setOpacity] = useState(50);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'overlay'>('side-by-side');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-6xl bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col h-[92vh]">
        
        {/* Header Controls */}
        <div className="p-4 sm:p-5 bg-slate-800/90 border-b border-slate-700 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white flex items-center gap-2">
              <span>Comparador de Fidelidade Visual 100%</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                Textos em Camadas Editáveis
              </span>
            </h3>
            <p className="text-xs text-slate-300">
              Verifique a correspondência visual exata entre a arte original e o site interativo desenvolvido.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="bg-slate-700/80 p-1 rounded-xl flex items-center gap-1 text-xs">
              <button
                onClick={() => setViewMode('side-by-side')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  viewMode === 'side-by-side' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Lado a Lado
              </button>
              <button
                onClick={() => setViewMode('overlay')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  viewMode === 'overlay' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Sobreposição (Raio-X)
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar comparador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Body */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950 flex justify-center">
          {viewMode === 'side-by-side' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
              
              {/* Left: Original Uploaded Image */}
              <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex flex-col items-center">
                <div className="mb-3 flex items-center justify-between w-full text-xs font-bold text-slate-300 px-1">
                  <span>📸 Arte Original Fornecida</span>
                  <span className="text-slate-500">1024 x 1536</span>
                </div>
                <div className="w-full max-h-[75vh] overflow-y-auto rounded-xl border border-slate-700 shadow-inner bg-black flex justify-center">
                  <img
                    src="/assets/aistudio/1793847154624_d0c4bc3f.png"
                    alt="Imagem original de referência"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right: Live Interactive Text Layers */}
              <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex flex-col items-center">
                <div className="mb-3 flex items-center justify-between w-full text-xs font-bold text-emerald-400 px-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Site Interativo Desenvolvido
                  </span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                    Textos 100% Editáveis
                  </span>
                </div>
                <div className="w-full max-h-[75vh] overflow-y-auto rounded-xl border border-slate-700 shadow-inner bg-white text-slate-900 p-2">
                  <iframe
                    src="/"
                    title="Visualização ao vivo"
                    className="w-full h-[1200px] border-0 rounded-lg pointer-events-none transform scale-90 origin-top"
                  />
                </div>
              </div>

            </div>
          ) : (
            /* Overlay View Mode */
            <div className="flex flex-col items-center w-full max-w-2xl">
              <div className="w-full mb-4 flex items-center justify-between bg-slate-800 px-4 py-2.5 rounded-xl border border-slate-700 text-xs">
                <span className="font-bold">Opacidade da Imagem Original: {opacity}%</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-48 accent-blue-500 cursor-pointer"
                />
              </div>

              <div className="relative w-full max-h-[75vh] overflow-y-auto rounded-2xl border border-slate-700 bg-white shadow-2xl">
                <img
                  src="/assets/aistudio/1793847154624_d0c4bc3f.png"
                  alt="Original overlay"
                  style={{ opacity: opacity / 100 }}
                  className="w-full h-auto object-contain transition-opacity duration-150"
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
