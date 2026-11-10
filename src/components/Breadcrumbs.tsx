import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  currentSection?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentSection = 'Reformas e Manutenção Predial' }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://ak-reformas.vercel.app/#inicio',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Rio de Janeiro',
        'item': 'https://ak-reformas.vercel.app/#sobre-nos',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': currentSection,
        'item': 'https://ak-reformas.vercel.app/',
      },
    ],
  };

  return (
    <nav
      aria-label="Navegação Estrutural (Breadcrumb)"
      className="bg-slate-100/90 border-b border-slate-200/80 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-600 backdrop-blur-sm"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[1240px] mx-auto flex items-center gap-1.5 flex-wrap">
        <a
          href="#inicio"
          className="flex items-center gap-1 hover:text-blue-700 font-semibold transition-colors"
          title="Ir para o Início da AK Reformas"
        >
          <Home className="w-3.5 h-3.5 text-blue-600" />
          <span>Home</span>
        </a>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        <a
          href="#sobre-nos"
          className="hover:text-blue-700 transition-colors"
        >
          Rio de Janeiro - RJ
        </a>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        <span className="font-bold text-slate-800" aria-current="page">
          {currentSection}
        </span>
      </div>
    </nav>
  );
};
