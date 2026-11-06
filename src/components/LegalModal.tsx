import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Printer, CheckCircle2, Building2, Phone, Mail, MapPin } from 'lucide-react';

export type LegalTab = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
  onOpenQuoteModal?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#033b7b] via-[#054fa8] to-[#0170d4] text-white px-5 sm:px-8 py-5 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
              {activeTab === 'privacy' ? (
                <ShieldCheck className="w-5 h-5 text-yellow-300" />
              ) : (
                <FileText className="w-5 h-5 text-yellow-300" />
              )}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">
                {activeTab === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso e Condições'}
              </h2>
              <p className="text-xs text-white/80">
                AK Reformas e Manutenção Predial · Transparência e Segurança Jurídica
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer border border-white/15"
              title="Imprimir documento"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-100 border-b border-slate-200 px-5 sm:px-8 py-2.5 flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Política de Privacidade</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Termos de Uso</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 text-sm leading-relaxed text-slate-700 space-y-6">
          {activeTab === 'privacy' ? (
            /* ================= POLÍTICA DE PRIVACIDADE ================= */
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-blue-950 mb-0.5">Em conformidade com a LGPD (Lei Federal nº 13.709/2018)</p>
                  <p>
                    A AK Reformas e Manutenção Predial zela pela transparência, privacidade e proteção dos dados pessoais de
                    seus clientes, síndicos, administradores de condomínios e visitantes do website.
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">1. Informações Coletadas e Finalidade</h3>
                <p>
                  Coletamos apenas os dados indispensáveis para o atendimento ágil e para a elaboração de orçamentos técnicos de engenharia civil, reformas e manutenção predial:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Dados de identificação:</strong> Nome completo ou razão social da empresa/condomínio.</li>
                  <li><strong>Dados de contato:</strong> Número de telefone / WhatsApp e endereço de e-mail.</li>
                  <li><strong>Dados de localização do imóvel:</strong> Bairro, condomínio ou endereço no Estado do Rio de Janeiro onde será realizada a vistoria técnica ou execução da obra.</li>
                  <li><strong>Especificações do serviço:</strong> Tipo de reforma solicitada (pintura, impermeabilização, restauração de fachada, alpinismo industrial com rapel, recuperação estrutural).</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">2. Como Utilizamos os Seus Dados</h3>
                <p>Os dados coletados destinam-se exclusivamente para:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Elaboração, envio e acompanhamento de propostas comerciais e orçamentos sem compromisso;</li>
                  <li>Agendamento de vistorias técnicas presenciais por nossos peritos e engenheiros;</li>
                  <li>Comunicação operacional sobre o andamento de projetos contratados;</li>
                  <li>Emissão de notas fiscais, contratos de prestação de serviços e laudos técnicos de engenharia (ART/RRT quando aplicável);</li>
                  <li>Cumprimento de exigências legais e normas técnicas vigentes (ABNT e Normas Regulamentadoras NR-35 e NR-18).</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">3. Sigilo e Não Compartilhamento</h3>
                <p>
                  A <strong>AK Reformas e Manutenção Predial</strong> não vende, não aluga e não compartilha dados pessoais de seus clientes com terceiros para fins de marketing ou publicidade. Os dados são acessados unicamente por nossa equipe técnica e administrativa estritamente para o cumprimento do contrato ou solicitação de orçamento.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">4. Segurança da Informação</h3>
                <p>
                  Adotamos rigorosas medidas de segurança técnicas e administrativas para proteger os dados contra acessos não autorizados, perdas, extravios ou qualquer forma de tratamento ilícito ou inadequado.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">5. Direitos do Titular de Dados</h3>
                <p>
                  Em atendimento ao Artigo 18 da LGPD, você pode a qualquer momento solicitar:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Confirmação da existência de tratamento de seus dados pessoais;</li>
                  <li>Acesso aos dados e correção de dados incompletos ou desatualizados;</li>
                  <li>Eliminação dos dados pessoais tratados mediante consentimento anterior;</li>
                  <li>Revogação do consentimento para recebimento de comunicações.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">6. Contato com o Encarregado de Dados</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-1.5 text-slate-600">
                  <p className="font-semibold text-slate-900">AK Reformas e Manutenção Predial</p>
                  <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-600" /> Atendimento em todo o Rio de Janeiro - RJ</p>
                  <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-blue-600" /> WhatsApp Comercial: (21) 99999-9999</p>
                  <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-blue-600" /> E-mail: contato@akreformas.com.br</p>
                </div>
              </section>
            </div>
          ) : (
            /* ================= TERMOS DE USO ================= */
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950 mb-0.5">Condições Gerais de Navegação e Prestação de Serviços</p>
                  <p>
                    Ao navegar em nosso portal e solicitar orçamentos para reformas e manutenção predial, o usuário declara concordar com os presentes termos.
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">1. Identificação da Empresa e Atuação</h3>
                <p>
                  A <strong>AK Reformas e Manutenção Predial</strong> é uma empresa especializada em prestação de serviços de engenharia civil, reformas residenciais e comerciais, manutenção predial, restauração de fachadas, impermeabilizações, pinturas técnicas e trabalho em altura com alpinismo industrial (NR-35) no Estado do Rio de Janeiro.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">2. Orçamentos e Vistorias Técnicas</h3>
                <p>
                  As estimativas de orçamento fornecidas através de canais digitais (formulário do site, WhatsApp ou e-mail) possuem caráter prévio e informativo. A proposta comercial definitiva, com discriminação de etapas, quantitativos de materiais e cronograma de execução, é validada após vistoria técnica presencial no local da obra por profissional habilitado.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">3. Normas de Segurança do Trabalho e NR-35</h3>
                <p>
                  Todas as atividades de trabalho em altura (fachadas prediais, limpeza de vidros, hidrojateamento, ancoragem e restauração) são realizadas em estrita conformidade com:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>NR-35:</strong> Trabalho em Altura com equipamentos de proteção individual (EPI) e coletiva (EPC) testados e inspecionados periodicamente;</li>
                  <li><strong>NR-18:</strong> Condições de segurança e saúde no trabalho na indústria da construção;</li>
                  <li><strong>NR-06:</strong> Utilização obrigatória de EPIs com Certificado de Aprovação (CA) válido.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">4. Garantia dos Serviços e Qualidade dos Materiais</h3>
                <p>
                  A AK Reformas assegura garantia formal sobre todos os serviços executados conforme estipulado no contrato de prestação de serviços, além das disposições do Código de Defesa do Consumidor e das normas da ABNT. Trabalhamos exclusivamente com insumos de primeira linha homologados pelos principais fabricantes de tintas, resinas e impermeabilizantes do Brasil.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">5. Propriedade Intelectual</h3>
                <p>
                  Todos os textos, marcas, logotipos, fotografias de obras, ilustrações e layouts presentes neste site são de titularidade exclusiva da AK Reformas ou devidamente licenciados, sendo vedada a reprodução, cópia ou veiculação não autorizada para fins comerciais.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">6. Legislação e Foro</h3>
                <p>
                  Os presentes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca da Capital do Estado do Rio de Janeiro para dirimir quaisquer controvérsias oriundas da utilização do presente sítio eletrônico.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-slate-500">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </p>
          <div className="flex items-center gap-2">
            {onOpenQuoteModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white transition-all cursor-pointer shadow-sm"
              >
                Solicitar Orçamento
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-900 text-white transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
