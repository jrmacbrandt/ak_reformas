import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  Printer,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  MapPin,
  Cookie,
  Users,
  Megaphone,
  ArrowLeft,
  Calendar,
  Send,
  Sparkles,
} from 'lucide-react';

export type LegalTab = 'privacy' | 'terms' | 'cookies' | 'about' | 'advertising' | 'contact';

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

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactType, setContactType] = useState('Condomínio Residencial');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

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

  const handleReturnHome = () => {
    onClose();
    const homeEl = document.getElementById('inicio');
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(
      `Olá! Meu nome é ${contactName}.\nTipo de Imóvel: ${contactType}\nTelefone: ${contactPhone}\nE-mail: ${contactEmail}\n\nMensagem: ${contactMessage}`
    );
    window.open(`https://wa.me/5521994780582?text=${encodedMsg}`, '_blank');
    setContactSent(true);
  };

  const updateDateString = 'Novembro de 2026';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
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
              {activeTab === 'privacy' && <ShieldCheck className="w-5 h-5 text-yellow-300" />}
              {activeTab === 'terms' && <FileText className="w-5 h-5 text-yellow-300" />}
              {activeTab === 'cookies' && <Cookie className="w-5 h-5 text-yellow-300" />}
              {activeTab === 'about' && <Users className="w-5 h-5 text-yellow-300" />}
              {activeTab === 'advertising' && <Megaphone className="w-5 h-5 text-yellow-300" />}
              {activeTab === 'contact' && <Mail className="w-5 h-5 text-yellow-300" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">
                {activeTab === 'privacy' && 'Política de Privacidade'}
                {activeTab === 'terms' && 'Termos de Uso e Condições'}
                {activeTab === 'cookies' && 'Política de Cookies'}
                {activeTab === 'about' && 'Sobre Nós · AK Reformas'}
                {activeTab === 'advertising' && 'Publicidade e Transparência'}
                {activeTab === 'contact' && 'Contato e Fale Conosco'}
              </h2>
              <p className="text-xs text-white/80">
                AK Reformas e Manutenção Predial · Engenharia, Transparência e Segurança
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
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
          {[
            { id: 'privacy', label: 'Privacidade', icon: ShieldCheck },
            { id: 'terms', label: 'Termos de Uso', icon: FileText },
            { id: 'cookies', label: 'Cookies', icon: Cookie },
            { id: 'about', label: 'Sobre Nós', icon: Users },
            { id: 'advertising', label: 'Publicidade', icon: Megaphone },
            { id: 'contact', label: 'Fale Conosco', icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as LegalTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Universal Sub-bar with "Voltar para o Início" + "Última Atualização" */}
        <div className="bg-slate-50 border-b border-slate-200/80 px-5 sm:px-8 py-2.5 flex items-center justify-between text-xs text-slate-600 gap-2 flex-wrap shrink-0">
          <button
            onClick={handleReturnHome}
            className="flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para o Início (Home)</span>
          </button>
          <div className="flex items-center gap-1.5 font-medium text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Última atualização: <strong>{updateDateString}</strong></span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 text-sm leading-relaxed text-slate-700 space-y-6">
          
          {/* ================= 1. POLÍTICA DE PRIVACIDADE ================= */}
          {activeTab === 'privacy' && (
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
                  <li>Emissão de notas fiscais, contratos de prestação de serviços e laudos técnicos de engenharia (ART/RRT junto ao CREA-RJ);</li>
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
                  Em atendimento ao Artigo 18 da LGPD, você pode a qualquer momento solicitar confirmação da existência de tratamento, correção de dados ou revogação de consentimento através do e-mail <strong>contato@akreformas.com.br</strong>.
                </p>
              </section>
            </div>
          )}

          {/* ================= 2. TERMOS DE USO ================= */}
          {activeTab === 'terms' && (
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
                  Todas as atividades de trabalho em altura (fachadas prediais, limpeza de vidros, hidrojateamento, ancoragem e restauração) são realizadas em estrita conformidade com a <strong>NR-35</strong> (Trabalho em Altura com EPI/EPC certificados) e a <strong>NR-18</strong> (Condições de segurança na indústria da construção).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">4. Garantia dos Serviços e Qualidade dos Materiais</h3>
                <p>
                  A AK Reformas assegura garantia formal sobre todos os serviços executados conforme estipulado no contrato de prestação de serviços, além das disposições do Código de Defesa do Consumidor e das normas da ABNT. Trabalhamos exclusivamente com insumos de primeira linha homologados pelos principais fabricantes (Coral, Suvinil, Vedacit, Viapol, Sika).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">5. Foro</h3>
                <p>
                  Fica eleito o Foro da Comarca da Capital do Estado do Rio de Janeiro para dirimir quaisquer controvérsias oriundas da utilização do presente sítio eletrônico.
                </p>
              </section>
            </div>
          )}

          {/* ================= 3. POLÍTICA DE COOKIES ================= */}
          {activeTab === 'cookies' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 flex items-start gap-3">
                <Cookie className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950 mb-0.5">Uso Consciente e Transparente de Cookies</p>
                  <p>
                    Esta política descreve como a AK Reformas e Manutenção Predial utiliza cookies e tecnologias similares em seu portal, 
                    assegurando ao usuário total controle conforme a LGPD (Lei nº 13.709/2018).
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">1. O que são Cookies?</h3>
                <p>
                  Cookies são pequenos arquivos de texto armazenados no navegador do seu dispositivo para memorizar preferências essenciais de navegação e garantir estabilidade e rapidez.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 font-display">2. Categorias de Cookies Utilizados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <p className="font-bold text-slate-900 mb-1">Cookies Estritamente Necessários (Essenciais)</p>
                    <p className="text-slate-600">Fundamentais para o carregamento do site, segurança e balanceamento de carga.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <p className="font-bold text-slate-900 mb-1">Cookies de Preferência e Consentimento</p>
                    <p className="text-slate-600">Guardam suas opções de visualização e o aceite do aviso de privacidade.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <p className="font-bold text-slate-900 mb-1">Cookies Analíticos e de Desempenho</p>
                    <p className="text-slate-600">Métricas totalmente anônimas de tráfego para aprimoramento de engenharia do portal.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <p className="font-bold text-slate-900 mb-1">Cookies de Integração (WhatsApp / CDN)</p>
                    <p className="text-slate-600">Utilizados para conectar com serviços confiáveis de atendimento imediato.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">3. Como Desativar Cookies no Navegador</h3>
                <p className="text-xs text-slate-600">
                  Você pode gerenciar e desativar cookies a qualquer momento nas configurações do seu navegador:
                  Google Chrome (Configurações &gt; Privacidade e Segurança), Mozilla Firefox, Apple Safari ou Microsoft Edge.
                </p>
              </section>
            </div>
          )}

          {/* ================= 4. SOBRE NÓS (TEXTO E FOTO INSTITUCIONAL) ================= */}
          {activeTab === 'about' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-72">
                <img
                  src="/extracted/trabalho_em_altura.jpg"
                  alt="Equipe técnica da AK Reformas realizando trabalho em altura com alpinismo industrial no Rio de Janeiro"
                  className="w-full h-full object-cover max-h-72"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="px-2.5 py-1 rounded-full bg-blue-600 text-[10px] font-bold uppercase tracking-wider">
                      Alpinismo Industrial Certificado NR-35
                    </span>
                    <h3 className="text-lg font-bold font-display mt-1">
                      Excelência Operacional e Engenharia Civil no Rio de Janeiro
                    </h3>
                  </div>
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">Nossa Trajetória e Propósito</h3>
                <p>
                  A <strong>AK Reformas e Manutenção Predial</strong> nasceu no Rio de Janeiro com a missão de transformar o mercado de reformas condominiais, residenciais e corporativas, unindo rigor técnico de engenharia civil, segurança do trabalho inegociável e atendimento humanizado.
                </p>
                <p>
                  Nossos profissionais são capacitados em alpinismo industrial (NR-35), o que permite executar restaurações de fachadas, impermeabilizações em altura, lavagens técnicas e hidrojateamento com agilidade superior, sem a necessidade de montagem de andaimes pesados que atrapalhem o fluxo dos condomínios.
                </p>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
                  <p className="font-bold text-blue-950 mb-1">Missão</p>
                  <p className="text-blue-900">Valorizar o patrimônio de nossos clientes com obras seguras, duráveis e pontuais.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                  <p className="font-bold text-amber-950 mb-1">Visão</p>
                  <p className="text-amber-900">Ser referência absoluta em manutenção e restauração predial no Estado do Rio de Janeiro.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <p className="font-bold text-emerald-950 mb-1">Valores</p>
                  <p className="text-emerald-900">Segurança de vida (NR-35), conformidade legal (CREA-RJ / ART) e honestidade em orçamentos.</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= 5. POLÍTICA DE PUBLICIDADE E MONETIZAÇÃO ================= */}
          {activeTab === 'advertising' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs text-purple-900 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-purple-950 mb-0.5">Compromisso com a Transparência e Independência Comercial</p>
                  <p>
                    A AK Reformas e Manutenção Predial preza pelo respeito absoluto ao visitante, síndicos e gestores patrimoniais.
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">1. Ausência de Publicidade Invasiva ou Oculta</h3>
                <p>
                  Este website é de caráter estritamente institucional e informativo. Não veiculamos anúncios intrusivos de redes de terceiros (banners enganosos, pop-ups de afiliados ou links de monetização patrocinada não declarada).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">2. Parcerias Técnicas com Fabricantes</h3>
                <p>
                  Eventuais menções a marcas parceiras (como Suvinil, Coral, Sherwin-Williams, Vedacit ou Sika) ocorrem exclusivamente em decorrência de homologação técnica de insumos e garantias estendidas de fábrica aplicadas nas obras executadas, sem qualquer interferência editorial no diagnóstico das necessidades do seu imóvel.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">3. Precificação Honesta e Sem Taxas Ocultas</h3>
                <p>
                  Nossa remuneração advém unicamente dos contratos formais de prestação de serviços de engenharia e reformas firmados entre a AK Reformas e os clientes contratantes. Todas as propostas comerciais discriminam com clareza os custos de mão de obra, materiais e impostos.
                </p>
              </section>
            </div>
          )}

          {/* ================= 6. CONTATO COM FORMULÁRIO E E-MAIL ================= */}
          {activeTab === 'contact' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">Fale Diretamente Conosco</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Nossa equipe técnica e comercial está à disposição para atendimento ágil em todo o Grande Rio.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Atendimento Regional</p>
                        <p className="text-slate-600">Todo o Estado do Rio de Janeiro - RJ</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">WhatsApp Comercial</p>
                        <a href="https://wa.me/5521994780582" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-semibold">
                          (21) 99478-0582
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">E-mail Corporativo</p>
                        <a href="mailto:contato@akreformas.com.br" className="text-blue-700 hover:underline font-semibold">
                          contato@akreformas.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Form */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <Send className="w-4 h-4 text-blue-600" />
                    <span>Envie sua Mensagem</span>
                  </h4>

                  {contactSent ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2 text-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <p className="font-bold text-sm">Mensagem Encaminhada com Sucesso!</p>
                      <p>Nossa equipe técnica responderá prontamente pelo WhatsApp ou e-mail.</p>
                      <button
                        type="button"
                        onClick={() => setContactSent(false)}
                        className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Seu Nome / Razão Social *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Ex: Síndico Carlos / Condomínio Solar"
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1">Telefone / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(formatPhoneBR(e.target.value))}
                            placeholder="(21) 99478-0582"
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1">E-mail *</label>
                          <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Tipo de Imóvel</label>
                        <select
                          value={contactType}
                          onChange={(e) => setContactType(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                        >
                          <option value="Condomínio Residencial">Condomínio Residencial (Edifício)</option>
                          <option value="Condomínio Comercial">Prédio / Centro Comercial</option>
                          <option value="Empresa / Indústria">Empresa / Galpão Industrial</option>
                          <option value="Residência">Casa / Residência Particular</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Detalhes da Reforma ou Vistoria *</label>
                        <textarea
                          rows={3}
                          required
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Ex: Reforma da fachada principal, pintura e recuperação de pastilhas..."
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-[#033b7b] hover:bg-[#054fa8] text-white font-bold text-xs transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Solicitação Direta</span>
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer actions with Home Link and Last Update */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleReturnHome}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para o Início (Home)</span>
          </button>
          
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
