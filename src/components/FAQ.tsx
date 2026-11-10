import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'condominios' | 'normas' | 'orcamento' | 'garantia';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'A AK Reformas possui certificação NR-35 para trabalho em altura e alpinismo predial?',
    answer:
      'Sim, 100% da nossa equipe operacional possui certificação NR-35 (Trabalho em Altura) e NR-18 vigentes, com exames médicos ASO específicos para atividade em altura. Todos os nossos equipamentos de ancoragem, cordas semi-estáticas, trava-quedas e cinturões tipo paraquedista possuem Certificado de Aprovação (CA) do Ministério do Trabalho e passam por inspeção técnica documentada antes de cada obra.',
    category: 'normas',
  },
  {
    id: 'faq-2',
    question: 'Como funciona a vistoria técnica presencial e a elaboração do orçamento?',
    answer:
      'A vistoria técnica inicial no Rio de Janeiro é totalmente sem compromisso. Nosso engenheiro ou perito técnico comparece ao condomínio ou empresa para inspecionar as condições da fachada, fissuras, infiltrações ou necessidades de pintura. Em seguida, emitimos uma proposta comercial detalhada com memorial descritivo, quantitativos de materiais, etapas e prazos de entrega.',
    category: 'orcamento',
  },
  {
    id: 'faq-3',
    question: 'Os serviços de reforma e pintura predial possuem garantia formal e emissão de ART?',
    answer:
      'Sim. Todas as nossas obras de recuperação estrutural, impermeabilização e pintura predial são formalizadas por contrato com garantia de até 5 anos (conforme o tipo de intervenção e produtos aplicados), além da emissão de Anotação de Responsabilidade Técnica (ART) junto ao CREA-RJ.',
    category: 'garantia',
  },
  {
    id: 'faq-4',
    question: 'Quais regiões do Estado do Rio de Janeiro a AK Reformas atende?',
    answer:
      'Atendemos toda a Capital do Rio de Janeiro (Zona Sul, Barra da Tijuca, Recreio dos Bandeirantes, Zona Norte, Zona Oeste e Centro), além de Niterói, Região Oceânica, Baixada Fluminense e Região dos Lagos para condomínios residenciais e centros comerciais.',
    category: 'condominios',
  },
  {
    id: 'faq-5',
    question: 'Quais marcas e especificações de tintas e impermeabilizantes são utilizadas?',
    answer:
      'Trabalhamos exclusivamente com insumos premium de primeira linha homologados pelas normas ABNT: Suvinil, Coral, Sherwin-Williams (tintas acrílicas emborrachadas hidrorepelentes) e Vedacit, Viapol e Sika (mantas líquidas, resinas e impermeabilizantes poliuretânicos para lajes e juntas de dilatação).',
    category: 'garantia',
  },
  {
    id: 'faq-6',
    question: 'Como a AK Reformas garante a segurança de moradores e pedestres durante a obra?',
    answer:
      'Isolamos e sinalizamos integralmente o perímetro térreo da edificação com fitas zebradas, telas de proteção de fachada e bandejas de proteção secundárias para conter qualquer queda eventual de detritos, respeitando as normas condominiais e a convenção do edifício.',
    category: 'normas',
  },
  {
    id: 'faq-7',
    question: 'Quais são as facilidades de pagamento oferecidas para condomínios e síndicos?',
    answer:
      'Oferecemos condições especiais e fluxo de caixa facilitado para condomínios através de faturamento direto com boletos bancários parcelados conforme o cronograma físico-financeiro das etapas concluídas.',
    category: 'orcamento',
  },
  {
    id: 'faq-8',
    question: 'É possível acompanhar o cronograma e receber relatórios fotográficos da obra?',
    answer:
      'Sim! O síndico, comissão de obras ou gestor predial recebe relatórios semanais com fotografias do antes, durante e depois de cada fachada ou área restaurada, além de alinhamento contínuo via canal exclusivo de WhatsApp.',
    category: 'condominios',
  },
];

interface FAQProps {
  onOpenQuoteModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenQuoteModal }) => {
  const [openId, setOpenId] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const filteredItems =
    filterCategory === 'todos'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === filterCategory);

  // Schema.org FAQPage Rich Snippet JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative z-20 rounded-t-3xl sm:rounded-t-[48px] py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 shadow-[0_-25px_50px_rgba(0,0,0,0.3)] scroll-mt-20 border-t border-slate-200"
      aria-labelledby="faq-heading"
    >
      {/* Schema.org FAQPage for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Tira-Dúvidas Técnico & Jurídico</span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-slate-900 tracking-tight"
          >
            Perguntas Frequentes sobre Reformas e Pintura Predial
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparência total para síndicos, administradoras e proprietários no Rio de Janeiro.
            Confira como atuamos com segurança, laudos e garantia.
          </p>

          {/* Quick Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            {[
              { id: 'todos', label: 'Todas as Perguntas' },
              { id: 'normas', label: 'Normas & NR-35' },
              { id: 'orcamento', label: 'Vistoria & Orçamento' },
              { id: 'garantia', label: 'Garantia & Tintas' },
              { id: 'condominios', label: 'Condomínios' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60 w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Atendimento técnico certificado com emissão de ART</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#033b7b] to-[#0170d4] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-900/20">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg">
              Ainda tem alguma dúvida sobre a sua obra?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Fale diretamente com nosso perito de engenharia pelo WhatsApp.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Tirar Dúvidas Agora</span>
          </button>
        </div>

      </div>
    </section>
  );
};

