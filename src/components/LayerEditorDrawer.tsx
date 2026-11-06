import React, { useState } from 'react';
import { SiteLayersData } from '../types/layers';
import {
  X,
  Layers,
  Edit3,
  RotateCcw,
  Download,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Eye,
  Sliders,
} from 'lucide-react';

interface LayerEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  layers: SiteLayersData;
  onUpdateLayers: (newLayers: SiteLayersData) => void;
  onSave?: (savedLayers: SiteLayersData) => void;
  onResetLayers: () => void;
  isDirectEditMode: boolean;
  onToggleDirectEdit: () => void;
}

export const LayerEditorDrawer: React.FC<LayerEditorDrawerProps> = ({
  isOpen,
  onClose,
  layers,
  onUpdateLayers,
  onSave,
  onResetLayers,
  isDirectEditMode,
  onToggleDirectEdit,
}) => {
  const [copied, setCopied] = useState(false);
  const [openSection, setOpenSection] = useState<string>('hero');

  if (!isOpen) return null;

  const handleSaveAndClose = () => {
    if (onSave) {
      onSave(layers);
    } else {
      onClose();
    }
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(layers, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(layers, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'ak_reformas_camadas.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const toggleSection = (sec: string) => {
    setOpenSection(openSection === sec ? '' : sec);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Slide-out Drawer Container */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden border-l border-slate-200">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#0a284e] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 rounded-lg shadow-sm">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg">Painel de Camadas de Texto</h3>
              <p className="text-xs text-blue-200">Edite todos os textos da página em tempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveAndClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer"
              title="Salvar todas as alterações nas camadas"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Salvar</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar painel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Direct Edit Toggle & Action buttons */}
        <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <button
            onClick={onToggleDirectEdit}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              isDirectEditMode
                ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isDirectEditMode ? 'Edição na Tela: ATIVA' : 'Ativar Edição na Tela'}</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyJSON}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer"
              title="Copiar estrutura JSON das camadas"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar JSON'}</span>
            </button>
            <button
              onClick={handleDownloadJSON}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer"
              title="Baixar arquivo JSON das camadas"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar</span>
            </button>
          </div>
        </div>

        {/* Scrollable Layer Accordion */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          
          {/* Section 1: Cabeçalho */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => toggleSection('header')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left font-bold text-sm text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                1. Cabeçalho & Logotipo
              </span>
              {openSection === 'header' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {openSection === 'header' && (
              <div className="p-3.5 space-y-3 bg-white border-t border-slate-200 text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Subtítulo da Marca (Tagline)</label>
                  <input
                    type="text"
                    value={layers.header.brandTagline}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        header: { ...layers.header, brandTagline: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Slogan da Marca</label>
                  <input
                    type="text"
                    value={layers.header.brandSlogan}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        header: { ...layers.header, brandSlogan: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Texto do Botão CTA do Topo</label>
                  <input
                    type="text"
                    value={layers.header.ctaButton}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        header: { ...layers.header, ctaButton: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Itens de Menu (Header & Footer)</label>
                  <div className="space-y-1.5">
                    {layers.header.navItems.map((item, idx) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-mono w-4">{idx + 1}.</span>
                        <input
                          type="text"
                          value={item.label}
                          onChange={(e) => {
                            const updated = layers.header.navItems.map((n) =>
                              n.id === item.id ? { ...n, label: e.target.value } : n
                            );
                            onUpdateLayers({
                              ...layers,
                              header: { ...layers.header, navItems: updated },
                            });
                          }}
                          className="flex-1 px-2.5 py-1 rounded border border-slate-300 focus:outline-blue-600 font-medium text-xs"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Banner Principal (Hero) */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => toggleSection('hero')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left font-bold text-sm text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                2. Banner Principal (Hero)
              </span>
              {openSection === 'hero' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {openSection === 'hero' && (
              <div className="p-3.5 space-y-3 bg-white border-t border-slate-200 text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Selo Amarelo Superior</label>
                  <input
                    type="text"
                    value={layers.hero.badgeText}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        hero: { ...layers.hero, badgeText: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Título - Linha 1 (Branco)</label>
                  <input
                    type="text"
                    value={layers.hero.headlineLine1}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        hero: { ...layers.hero, headlineLine1: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Linha 2 (Branco)</label>
                    <input
                      type="text"
                      value={layers.hero.headlineLine2White}
                      onChange={(e) =>
                        onUpdateLayers({
                          ...layers,
                          hero: { ...layers.hero, headlineLine2White: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Linha 2 (Amarelo)</label>
                    <input
                      type="text"
                      value={layers.hero.headlineLine2Yellow}
                      onChange={(e) =>
                        onUpdateLayers({
                          ...layers,
                          hero: { ...layers.hero, headlineLine2Yellow: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Título - Linha 3 (Amarelo Destaque)</label>
                  <input
                    type="text"
                    value={layers.hero.headlineLine3}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        hero: { ...layers.hero, headlineLine3: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                  />
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-slate-700 font-bold">Inclinação da Frase (Ângulo)</label>
                    <span className="font-mono text-blue-700 font-extrabold bg-blue-100 px-2 py-0.5 rounded text-[11px]">
                      {(layers.hero.headlineAngle ?? -6.8).toFixed(1)}°
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-14"
                    max="0"
                    step="0.2"
                    value={layers.hero.headlineAngle ?? -6.8}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        hero: { ...layers.hero, headlineAngle: parseFloat(e.target.value) },
                      })
                    }
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Mais inclinada (-14°)</span>
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateLayers({
                          ...layers,
                          hero: { ...layers.hero, headlineAngle: -6.8 },
                        })
                      }
                      className="text-blue-600 font-bold underline"
                    >
                      Padrão (-6.8°)
                    </button>
                    <span>Horizontal (0°)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Parágrafo Descritivo</label>
                  <textarea
                    rows={3}
                    value={layers.hero.paragraph}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        hero: { ...layers.hero, paragraph: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium leading-relaxed"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Título do Botão</label>
                    <input
                      type="text"
                      value={layers.hero.buttonTitle}
                      onChange={(e) =>
                        onUpdateLayers({
                          ...layers,
                          hero: { ...layers.hero, buttonTitle: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Subtexto do Botão</label>
                    <input
                      type="text"
                      value={layers.hero.buttonSubtitle}
                      onChange={(e) =>
                        onUpdateLayers({
                          ...layers,
                          hero: { ...layers.hero, buttonSubtitle: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Faixa de Serviços */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left font-bold text-sm text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                3. Faixa de Serviços (6 Itens)
              </span>
              {openSection === 'services' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {openSection === 'services' && (
              <div className="p-3.5 space-y-2.5 bg-white border-t border-slate-200 text-xs">
                {layers.servicesBar.items.map((serv, idx) => (
                  <div key={serv.id} className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono w-4">{idx + 1}.</span>
                    <input
                      type="text"
                      value={serv.title}
                      onChange={(e) => {
                        const next = [...layers.servicesBar.items];
                        next[idx] = { ...next[idx], title: e.target.value };
                        onUpdateLayers({
                          ...layers,
                          servicesBar: { items: next },
                        });
                      }}
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 focus:outline-blue-600 font-medium"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 4: Diferenciais & Cards */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => toggleSection('whyChoose')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left font-bold text-sm text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                4. Por que escolher a AK Reformas?
              </span>
              {openSection === 'whyChoose' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {openSection === 'whyChoose' && (
              <div className="p-3.5 space-y-3 bg-white border-t border-slate-200 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Prefixo do Título</label>
                    <input
                      type="text"
                      value={layers.whyChoose.titlePrefix}
                      onChange={(e) =>
                        onUpdateLayers({
                          ...layers,
                          whyChoose: { ...layers.whyChoose, titlePrefix: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Destaque do Título</label>
                    <input
                      type="text"
                      value={layers.whyChoose.titleHighlight}
                      onChange={(e) =>
                        onUpdateLayers({
                          ...layers,
                          whyChoose: { ...layers.whyChoose, titleHighlight: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1.5">6 Benefícios (Checkmarks Amarelos)</label>
                  <div className="space-y-1.5">
                    {layers.whyChoose.benefits.map((b, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={b}
                        onChange={(e) => {
                          const next = [...layers.whyChoose.benefits];
                          next[idx] = e.target.value;
                          onUpdateLayers({
                            ...layers,
                            whyChoose: { ...layers.whyChoose, benefits: next },
                          });
                        }}
                        className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1.5">Legendas dos Cards da Galeria (6 Cards)</label>
                  <div className="space-y-1.5">
                    {layers.whyChoose.showcase.map((card, idx) => (
                      <input
                        key={card.id}
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const next = [...layers.whyChoose.showcase];
                          next[idx] = { ...next[idx], title: e.target.value };
                          onUpdateLayers({
                            ...layers,
                            whyChoose: { ...layers.whyChoose, showcase: next },
                          });
                        }}
                        className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Depoimentos */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => toggleSection('testimonials')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left font-bold text-sm text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                5. Depoimentos dos Clientes
              </span>
              {openSection === 'testimonials' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {openSection === 'testimonials' && (
              <div className="p-3.5 space-y-3 bg-white border-t border-slate-200 text-xs">
                {layers.testimonials.items.map((test, idx) => (
                  <div key={test.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                    <div className="font-bold text-slate-700">Cliente {idx + 1}</div>
                    <textarea
                      rows={2}
                      value={test.quote}
                      onChange={(e) => {
                        const next = [...layers.testimonials.items];
                        next[idx] = { ...next[idx], quote: e.target.value };
                        onUpdateLayers({
                          ...layers,
                          testimonials: { ...layers.testimonials, items: next },
                        });
                      }}
                      className="w-full px-2 py-1 rounded border border-slate-300 font-medium"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={test.name}
                        onChange={(e) => {
                          const next = [...layers.testimonials.items];
                          next[idx] = { ...next[idx], name: e.target.value };
                          onUpdateLayers({
                            ...layers,
                            testimonials: { ...layers.testimonials, items: next },
                          });
                        }}
                        placeholder="Nome"
                        className="px-2 py-1 rounded border border-slate-300 font-medium"
                      />
                      <input
                        type="text"
                        value={test.location}
                        onChange={(e) => {
                          const next = [...layers.testimonials.items];
                          next[idx] = { ...next[idx], location: e.target.value };
                          onUpdateLayers({
                            ...layers,
                            testimonials: { ...layers.testimonials, items: next },
                          });
                        }}
                        placeholder="Localização"
                        className="px-2 py-1 rounded border border-slate-300 font-medium"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 6: Rodapé */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => toggleSection('footer')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left font-bold text-sm text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                6. Rodapé & Chamada Final
              </span>
              {openSection === 'footer' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {openSection === 'footer' && (
              <div className="p-3.5 space-y-3 bg-white border-t border-slate-200 text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Título da Chamada</label>
                  <input
                    type="text"
                    value={layers.footer.headline}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        footer: { ...layers.footer, headline: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Subtítulo (Amarelo)</label>
                  <input
                    type="text"
                    value={layers.footer.subheadline}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        footer: { ...layers.footer, subheadline: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Texto do Botão Orçamento</label>
                  <input
                    type="text"
                    value={layers.footer.ctaButton}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        footer: { ...layers.footer, ctaButton: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Selo de Cobertura Regional</label>
                  <input
                    type="text"
                    value={layers.footer.coverageBadge}
                    onChange={(e) =>
                      onUpdateLayers({
                        ...layers,
                        footer: { ...layers.footer, coverageBadge: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 font-medium"
                  />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onResetLayers}
            className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-bold px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Originais</span>
          </button>
          <button
            onClick={handleSaveAndClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-extrabold rounded-xl shadow-md shadow-emerald-700/25 transition-all cursor-pointer"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>Salvar e Concluir Edição</span>
          </button>
        </div>

      </div>
    </div>
  );
};
