import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

interface CookieConsentProps {
  onOpenCookiesPolicy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenCookiesPolicy }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ak_reformas_cookie_consent');
      if (!consent) {
        // Small delay so it appears smoothly after page load
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage might be disabled in private mode
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('ak_reformas_cookie_consent', 'all');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem('ak_reformas_cookie_consent', 'essential');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-800 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Controle de Cookies & Privacidade
            </h3>
            <button
              onClick={handleAcceptEssential}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
              title="Fechar e aceitar apenas essenciais"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed">
            Utilizamos cookies essenciais para o funcionamento seguro do portal e análise técnica, conforme a <strong>LGPD</strong>.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={handleAcceptAll}
          className="w-full sm:w-auto flex-1 px-3 py-2 rounded-xl text-xs font-bold bg-[#033b7b] hover:bg-[#054fa8] text-white transition-colors cursor-pointer text-center shadow-sm"
        >
          Aceitar Todos
        </button>
        <button
          onClick={handleAcceptEssential}
          className="w-full sm:w-auto px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer text-center"
        >
          Apenas Essenciais
        </button>
        <button
          onClick={onOpenCookiesPolicy}
          className="w-full sm:w-auto px-2 py-2 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer text-center"
        >
          Ver Política
        </button>
      </div>
    </aside>
  );
};

