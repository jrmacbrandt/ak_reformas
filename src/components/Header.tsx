import React, { useState } from 'react';
import { NavItem } from '../types/layers';
import { AKBrandLogo, WhatsAppIcon } from './Icons';
import { Home, Wrench, Users, Star, Mail, Menu, X, ChevronRight, HelpCircle } from 'lucide-react';

interface HeaderProps {
  brandTagline: string;
  brandSlogan: string;
  navItems: NavItem[];
  ctaButton: string;
  whatsappNumber: string;
  isEditable?: boolean;
  onUpdateHeader?: (field: string, val: any) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  brandTagline,
  brandSlogan,
  navItems,
  ctaButton,
  whatsappNumber,
  isEditable = false,
  onUpdateHeader,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState('nav-1');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-4 h-4 transition-colors ${
      isActive ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
    }`;
    switch (iconName) {
      case 'home':
        return <Home className={iconClass} />;
      case 'wrench':
        return <Wrench className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'star':
        return <Star className={iconClass} />;
      case 'mail':
        return <Mail className={iconClass} />;
      case 'help':
      case 'faq':
        return <HelpCircle className={iconClass} />;
      default:
        return <Home className={iconClass} />;
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenQuoteModal();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Logo & Text Layers */}
        <div className="shrink min-w-0 flex items-center">
          <a href="#inicio" className="group flex items-center">
            <AKBrandLogo
              tagline={brandTagline}
              slogan={brandSlogan}
              isEditable={isEditable}
              onEdit={(field, val) =>
                onUpdateHeader && onUpdateHeader(field === 'tagline' ? 'brandTagline' : 'brandSlogan', val)
              }
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Items with Icon + Text (Home, Quem Somos, Serviços, Contato) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegação Principal">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0070f3] text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-100/80'
                }`}
              >
                {getNavIcon(item.icon, isActive)}
                <span
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    if (onUpdateHeader) {
                      const updated = navItems.map((n) =>
                        n.id === item.id ? { ...n, label: e.currentTarget.textContent || '' } : n
                      );
                      onUpdateHeader('navItems', updated);
                    }
                  }}
                  className={isEditable ? 'outline-dashed outline-1 outline-blue-400 px-1' : ''}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Right: Green WhatsApp CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs sm:text-sm py-1.5 sm:py-2 px-2.5 sm:px-4 rounded-full shadow-md shadow-emerald-500/25 transition-all duration-200 group whitespace-nowrap cursor-pointer shrink-0"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center p-0.5 shrink-0">
              <WhatsAppIcon size={14} className="text-white fill-current" />
            </div>
            <span
              contentEditable={isEditable}
              suppressContentEditableWarning
              onClick={(e) => isEditable && e.stopPropagation()}
              onBlur={(e) => onUpdateHeader && onUpdateHeader('ctaButton', e.currentTarget.textContent || '')}
              className={`tracking-tight ${isEditable ? 'outline-dashed outline-1 outline-white px-1' : ''}`}
            >
              <span className="hidden sm:inline">{ctaButton}</span>
              <span className="sm:hidden">Orçamento</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 shrink-0" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl focus:outline-none transition-colors shrink-0 z-10"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 mb-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3.5 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {getNavIcon(item.icon, isActive)}
                  </div>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Quick WhatsApp CTA */}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <WhatsAppIcon size={18} className="text-white fill-current" />
              <span>Fale Conosco pelo WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
