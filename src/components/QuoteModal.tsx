import React, { useState } from 'react';
import { WhatsAppIcon, YellowCheckBadge } from './Icons';
import { X, Send, Building2, Phone, User, MapPin, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber = '5521994780582',
  defaultService = 'Pintura de Fachadas e Áreas Externas',
}) => {
  const [name, setName] = useState('');
  const [condo, setCondo] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [neighborhood, setNeighborhood] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formatPhoneBR = (value: string): string => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) {
      return numbers.length > 0 ? `(${numbers}` : '';
    }
    if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Olá, AK Reformas! Gostaria de um orçamento para o seguinte serviço:
*Serviço:* ${service}
*Nome:* ${name}
${condo ? `*Condomínio/Empresa:* ${condo}\n` : ''}*Telefone:* ${phone}
${neighborhood ? `*Bairro/Região:* ${neighborhood}\n` : ''}${message ? `*Detalhes:* ${message}\n` : ''}
Aguardo contato da equipe especializada!`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#035ab8] to-[#0186fc] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-[#ffd000] text-[#0b2b52] font-black text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md">
              Orçamento Rápido
            </span>
          </div>

          <h3 className="font-display font-black text-xl sm:text-2xl text-white">
            Solicite seu Orçamento sem Compromisso
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Atendimento especializado para condomínios, prédios e residências em todo o RJ.
          </p>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-display font-extrabold text-2xl text-slate-900">
              Mensagem Preparada!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Sua solicitação foi enviada para o WhatsApp da <strong>AK Reformas e Manutenção Predial</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome ou Responsável *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva (Síndico)"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-blue-600 focus:border-blue-600 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Condomínio ou Empresa
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={condo}
                      onChange={(e) => setCondo(e.target.value)}
                      placeholder="Ex: Edifício Mar Azul"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-blue-600 transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
                      placeholder="(21) 99478-0582"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-blue-600 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Serviço Desejado
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-blue-600 font-medium bg-white"
                  >
                    <option value="Pintura de Fachadas e Áreas Externas">Pintura de Fachadas e Áreas Externas</option>
                    <option value="Revestimento e Correção de Paredes">Revestimento e Correção de Paredes</option>
                    <option value="Manutenção Predial Completa">Manutenção Predial Completa</option>
                    <option value="Impermeabilização">Impermeabilização</option>
                    <option value="Limpeza de Fachadas e Vidros em Altura">Limpeza de Fachadas e Vidros</option>
                    <option value="Pintura Interna e Textura">Pintura Interna e Textura</option>
                    <option value="Casas e Apartamentos">Casas e Apartamentos</option>
                    <option value="Outro Serviço">Outro Serviço</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Bairro no Rio de Janeiro
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="Ex: Barra da Tijuca, Botafogo..."
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-blue-600 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Detalhes Adicionais (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte um pouco sobre o imóvel (nº de andares, prazo desejado, etc.)..."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-blue-600 font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-display font-extrabold text-base py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon size={20} className="fill-current text-white" />
              <span>Enviar para o WhatsApp da AK Reformas</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
              <YellowCheckBadge size={14} />
              <span>Sem custos ou compromisso · Resposta ágil</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
