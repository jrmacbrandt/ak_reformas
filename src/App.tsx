import React, { useState, useEffect } from 'react';
import { SiteLayersData, initialSiteLayers, ShowcaseCard, ServiceItem } from './types/layers';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesBar } from './components/ServicesBar';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustBar } from './components/TrustBar';
import { Testimonials } from './components/Testimonials';
import { FooterCTA } from './components/FooterCTA';
import { LayerEditorDrawer } from './components/LayerEditorDrawer';
import { QuoteModal } from './components/QuoteModal';
import { ShowcaseModal } from './components/ShowcaseModal';
import { FloatingTools } from './components/FloatingTools';
import { OriginalComparisonModal } from './components/OriginalComparisonModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { CookieConsent } from './components/CookieConsent';
import { Breadcrumbs } from './components/Breadcrumbs';
import { FAQ } from './components/FAQ';

export default function App() {
  // Load saved layers from localStorage if available, otherwise use initialSiteLayers
  const [layers, setLayers] = useState<SiteLayersData>(() => {
    try {
      const saved = localStorage.getItem('ak_reformas_layers_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        const savedCards: any[] = parsed.whyChoose?.showcase || [];
        const hasCard6 = savedCards.some((c: any) => c.id === 'card-6');
        const finalShowcase = hasCard6 && savedCards.length >= 6
          ? savedCards
          : initialSiteLayers.whyChoose.showcase;

        const savedServices: any[] = parsed.servicesBar?.items || [];
        const hasServ6 = savedServices.some((s: any) => s.id === 'serv-6');
        const finalServices = hasServ6 && savedServices.length >= 6
          ? savedServices
          : initialSiteLayers.servicesBar.items;

        const savedNav: any[] = parsed.header?.navItems || [];
        const hasValidNav = savedNav.length >= 5 && savedNav.some((n: any) => n.href === '#faq');
        const finalNavItems = hasValidNav ? savedNav : initialSiteLayers.header.navItems;

        return {
          ...initialSiteLayers,
          ...parsed,
          header: {
            ...initialSiteLayers.header,
            ...parsed.header,
            navItems: finalNavItems,
          },
          hero: {
            ...initialSiteLayers.hero,
            ...parsed.hero,
          },
          servicesBar: {
            ...initialSiteLayers.servicesBar,
            ...parsed.servicesBar,
            items: finalServices,
          },
          whyChoose: {
            ...initialSiteLayers.whyChoose,
            ...parsed.whyChoose,
            showcase: finalShowcase,
          },
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved layers, using default', e);
    }
    return initialSiteLayers;
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ak_reformas_layers_v2', JSON.stringify(layers));
    } catch (e) {
      console.warn('Failed to save layers to localStorage', e);
    }
  }, [layers]);

  // UI state
  const [isDirectEditMode, setIsDirectEditMode] = useState<boolean>(false);
  const [isLayerEditorOpen, setIsLayerEditorOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteService, setQuoteService] = useState<string>('Pintura de Fachadas e Áreas Externas');
  const [selectedShowcaseCard, setSelectedShowcaseCard] = useState<ShowcaseCard | null>(null);
  const [isComparing, setIsComparing] = useState<boolean>(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('privacy');
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleSaveLayers = (savedLayers: SiteLayersData) => {
    setLayers(savedLayers);
    try {
      localStorage.setItem('ak_reformas_layers_v2', JSON.stringify(savedLayers));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
    setIsLayerEditorOpen(false);
    setSaveToast('✓ Todas as alterações foram salvas com sucesso!');
    setTimeout(() => setSaveToast(null), 3500);
  };

  // Update layer handlers
  const handleUpdateHeader = (field: string, val: any) => {
    setLayers((prev) => ({
      ...prev,
      header: { ...prev.header, [field]: val },
    }));
  };

  const handleUpdateHero = (field: string, val: string | number) => {
    setLayers((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: val },
    }));
  };

  const handleUpdateServices = (items: ServiceItem[]) => {
    setLayers((prev) => ({
      ...prev,
      servicesBar: { items },
    }));
  };

  const handleUpdateWhyChoose = (field: string, val: any) => {
    setLayers((prev) => ({
      ...prev,
      whyChoose: { ...prev.whyChoose, [field]: val },
    }));
  };

  const handleUpdateTrust = (items: any[]) => {
    setLayers((prev) => ({
      ...prev,
      trustBar: { items },
    }));
  };

  const handleUpdateTestimonials = (field: string, val: any) => {
    setLayers((prev) => ({
      ...prev,
      testimonials: { ...prev.testimonials, [field]: val },
    }));
  };

  const handleUpdateFooter = (field: string, val: string) => {
    setLayers((prev) => ({
      ...prev,
      footer: { ...prev.footer, [field]: val },
    }));
  };

  const handleResetLayers = () => {
    if (window.confirm('Deseja restaurar todos os textos originais da arte?')) {
      setLayers(initialSiteLayers);
      localStorage.removeItem('ak_reformas_layers_v1');
      localStorage.removeItem('ak_reformas_layers_v2');
    }
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setQuoteService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative selection:bg-blue-600 selection:text-white">
      
      {/* Toast Notification when layers are saved */}
      {saveToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white font-extrabold text-sm px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-emerald-400">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span>{saveToast}</span>
        </div>
      )}

      {/* 1. Header (Navbar, Logo, Menu, Top CTA) */}
      <Header
        brandTagline={layers.header.brandTagline}
        brandSlogan={layers.header.brandSlogan}
        navItems={layers.header.navItems}
        ctaButton={layers.header.ctaButton}
        whatsappNumber={layers.header.whatsappNumber}
        isEditable={isDirectEditMode}
        onUpdateHeader={handleUpdateHeader}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Structural Breadcrumbs Navigation with Schema.org JSON-LD */}
      <Breadcrumbs currentSection="Pintura e Manutenção Predial no RJ" />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section (Headline, Value proposition, Yellow CTA, Contractor photo, Quality badge) */}
        <Hero
          badgeText={layers.hero.badgeText}
          headlineLine1={layers.hero.headlineLine1 || 'Transformando'}
          headlineLine2White={layers.hero.headlineLine2White || 'ambientes,'}
          headlineLine2Yellow={layers.hero.headlineLine2Yellow || 'valorizando'}
          headlineLine3={layers.hero.headlineLine3 || 'seu patrimônio!'}
          headlineAngle={layers.hero.headlineAngle ?? -6.8}
          paragraph={layers.hero.paragraph}
          buttonTitle={layers.hero.buttonTitle}
          buttonSubtitle={layers.hero.buttonSubtitle}
          backgroundImage={layers.hero.backgroundImage || '/extracted/header_bg.webp'}
          isEditable={isDirectEditMode}
          onUpdateHero={handleUpdateHero}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 3. Services Ribbon (Dark Blue bar with 5 icons and titles) */}
        <ServicesBar
          items={layers.servicesBar.items}
          isEditable={isDirectEditMode}
          onUpdateServices={handleUpdateServices}
          onSelectService={(service) => handleOpenQuoteWithService(service.title)}
        />

        {/* 4. Why Choose Us Section (6 checkmark benefits + 5 perspective showcase cards) */}
        <WhyChooseUs
          titlePrefix={layers.whyChoose.titlePrefix}
          titleHighlight={layers.whyChoose.titleHighlight}
          benefits={layers.whyChoose.benefits}
          showcase={layers.whyChoose.showcase}
          isEditable={isDirectEditMode}
          onUpdateWhyChoose={handleUpdateWhyChoose}
          onSelectCard={(card) => setSelectedShowcaseCard(card)}
        />

        {/* 5. Trust Bar (4 guarantees with light backdrop) */}
        <TrustBar
          items={layers.trustBar.items}
          isEditable={isDirectEditMode}
          onUpdateTrust={handleUpdateTrust}
        />

        {/* 6. Testimonials ("O que nossos clientes dizem?" + 3 client cards) */}
        <Testimonials
          titlePrefix={layers.testimonials.titlePrefix}
          titleHighlight={layers.testimonials.titleHighlight}
          items={layers.testimonials.items}
          isEditable={isDirectEditMode}
          onUpdateTestimonials={handleUpdateTestimonials}
        />

        {/* 6.1 Interactive FAQ Section with Schema.org FAQPage Rich Snippets */}
        <FAQ onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 7. Footer CTA (Rio de Janeiro Skyline, Final CTA button, Regional coverage, AK Brand Logo) */}
        <FooterCTA
          headline={layers.footer.headline}
          subheadline={layers.footer.subheadline}
          ctaButton={layers.footer.ctaButton}
          coverageBadge={layers.footer.coverageBadge}
          brandTagline={layers.footer.brandTagline}
          brandSlogan={layers.footer.brandSlogan}
          isEditable={isDirectEditMode}
          onUpdateFooter={handleUpdateFooter}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenLegal={handleOpenLegal}
        />

      </main>

      {/* Floating Tools Controls (Layers Drawer, Live Edit, Compare with Original, Quick WhatsApp) */}
      <FloatingTools
        onOpenLayerEditor={() => setIsLayerEditorOpen(true)}
        isDirectEditMode={isDirectEditMode}
        onToggleDirectEdit={() => setIsDirectEditMode(!isDirectEditMode)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onToggleOriginalComparison={() => setIsComparing(true)}
        isComparing={isComparing}
      />

      {/* Layer Management Drawer */}
      <LayerEditorDrawer
        isOpen={isLayerEditorOpen}
        onClose={() => setIsLayerEditorOpen(false)}
        layers={layers}
        onUpdateLayers={setLayers}
        onSave={handleSaveLayers}
        onResetLayers={handleResetLayers}
        isDirectEditMode={isDirectEditMode}
        onToggleDirectEdit={() => setIsDirectEditMode(!isDirectEditMode)}
      />

      {/* Interactive WhatsApp Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        whatsappNumber={layers.header.whatsappNumber}
        defaultService={quoteService}
      />

      {/* Showcase Card Detail Modal */}
      <ShowcaseModal
        card={selectedShowcaseCard}
        onClose={() => setSelectedShowcaseCard(null)}
        onRequestQuote={handleOpenQuoteWithService}
      />

      {/* 100% Visual Comparison Modal */}
      <OriginalComparisonModal
        isOpen={isComparing}
        onClose={() => setIsComparing(false)}
      />

      {/* Institutional Legal Modal (Política de Privacidade, Termos de Uso & Cookies) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setIsLegalModalOpen(false)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* LGPD Cookie Consent Banner */}
      <CookieConsent
        onOpenCookiesPolicy={() => handleOpenLegal('cookies')}
      />

    </div>
  );
}
