export interface NavItem {
  id: string;
  label: string;
  icon: 'home' | 'wrench' | 'users' | 'star' | 'mail';
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: 'roller' | 'wall' | 'building' | 'shield' | 'cleaner' | 'structural';
  description?: string;
}

export interface ShowcaseCard {
  id: string;
  title: string;
  image: string;
  description: string;
  tag: string;
}

export interface TrustItem {
  id: string;
  title: string;
  icon: 'shield' | 'clock' | 'handshake' | 'thumbs-up';
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  stars: number;
  avatar: string;
}

export interface SiteLayersData {
  header: {
    brandName: string;
    brandTagline: string;
    brandSlogan: string;
    navItems: NavItem[];
    ctaButton: string;
    whatsappNumber: string;
  };
  hero: {
    badgeText: string;
    headlineLine1: string; // "Transformando"
    headlineLine2White: string; // "ambientes,"
    headlineLine2Yellow: string; // "valorizando"
    headlineLine3: string; // "seu patrimônio!"
    headlineAngle?: number; // Tilt angle in degrees (e.g. -6.8)
    paragraph: string;
    buttonTitle: string;
    buttonSubtitle: string;
  };
  servicesBar: {
    items: ServiceItem[];
  };
  whyChoose: {
    titlePrefix: string;
    titleHighlight: string;
    benefits: string[];
    showcase: ShowcaseCard[];
  };
  trustBar: {
    items: TrustItem[];
  };
  testimonials: {
    titlePrefix: string;
    titleHighlight: string;
    items: TestimonialItem[];
  };
  footer: {
    headline: string;
    subheadline: string;
    ctaButton: string;
    coverageBadge: string;
    brandTagline: string;
    brandSlogan: string;
  };
}

export const initialSiteLayers: SiteLayersData = {
  header: {
    brandName: 'AK',
    brandTagline: 'REFORMAS E MANUTENÇÃO PREDIAL',
    brandSlogan: 'PINTURA QUE VALORIZA SEU ESPAÇO',
    navItems: [
      { id: 'nav-1', label: 'Home', icon: 'home', href: '#inicio' },
      { id: 'nav-2', label: 'Quem Somos', icon: 'users', href: '#sobre-nos' },
      { id: 'nav-3', label: 'Serviços', icon: 'wrench', href: '#servicos' },
      { id: 'nav-4', label: 'Contato', icon: 'mail', href: '#contato' },
    ],
    ctaButton: 'Solicite seu Orçamento',
    whatsappNumber: '5521999999999',
  },
  hero: {
    badgeText: 'Qualidade em cada detalhe!',
    headlineLine1: 'Transformando',
    headlineLine2White: 'ambientes,',
    headlineLine2Yellow: 'valorizando',
    headlineLine3: 'seu patrimônio!',
    headlineAngle: -6.8,
    paragraph:
      'A AK Reformas e Manutenção Predial oferece soluções completas para seu prédio, empresa ou condomínio, com qualidade, segurança e o melhor custo-benefício.',
    buttonTitle: 'Fale Conosco Agora!',
    buttonSubtitle: 'Peça seu orçamento sem compromisso',
  },
  servicesBar: {
    items: [
      {
        id: 'serv-1',
        title: 'Pintura em Geral',
        icon: 'roller',
        description:
          'Pintura predial, residencial e comercial com tintas de alta durabilidade e acabamento premium.',
      },
      {
        id: 'serv-2',
        title: 'Revestimento e Correção de Paredes',
        icon: 'wall',
        description:
          'Tratamento de fissuras, regularização de reboco, emassamento e texturização especializada.',
      },
      {
        id: 'serv-3',
        title: 'Manutenção Predial',
        icon: 'building',
        description:
          'Serviços preventivos e corretivos para condomínios comerciais e residenciais.',
      },
      {
        id: 'serv-4',
        title: 'Impermeabilização',
        icon: 'shield',
        description:
          'Proteção contra infiltrações, umidade e intempéries em lajes, fachadas e áreas molhadas.',
      },
      {
        id: 'serv-5',
        title: 'Limpeza de Fachadas',
        icon: 'cleaner',
        description:
          'Lavagem por hidrojateamento e limpeza técnica de vidros com equipe habilitada em NR-35.',
      },
      {
        id: 'serv-6',
        title: 'Recuperação Estrutural',
        icon: 'structural',
        description:
          'Tratamento de fissuras, restauração de pastilhas, corrosão de armaduras e recuperação de concreto em fachadas.',
      },
    ],
  },
  whyChoose: {
    titlePrefix: 'Por que escolher a',
    titleHighlight: 'AK Reformas?',
    benefits: [
      'Profissionais Qualificados',
      'Pintura de Fachadas e Áreas Externas',
      'Revestimento e Correção de Paredes',
      'Equipe Especializada em Altura',
      'Compromisso com Prazos',
      'Segurança em Todos os Serviços',
    ],
    showcase: [
      {
        id: 'card-1',
        title: 'Fachadas Prediais',
        image: '/extracted/card_fachadas.jpg',
        description:
          'Restauração completa de fachadas, pastilhas, pintura externa e revitalização estética para edifícios.',
        tag: 'Pintura & Manutenção Externa',
      },
      {
        id: 'card-2',
        title: 'Casas e Apartamentos',
        image: '/extracted/card_casas.jpg',
        description:
          'Reformas residenciais sob medida, acabamentos nobres e valorização imediata do imóvel.',
        tag: 'Residencial Alto Padrão',
      },
      {
        id: 'card-3',
        title: 'Pintura Interna',
        image: '/extracted/card_interna.jpg',
        description:
          'Proteção de pisos e móveis, nivelamento perfeito de paredes e aplicação de tintas laváveis e acrílicas.',
        tag: 'Acabamento Fino',
      },
      {
        id: 'card-4',
        title: 'Textura e Acabamento',
        image: '/extracted/card_textura.jpg',
        description:
          'Texturas rústicas, grafiato, cimento queimado e efeitos decorativos modernos.',
        tag: 'Efeitos Especiais & Grafiato',
      },
      {
        id: 'card-5',
        title: 'Limpeza de Vidros',
        image: '/extracted/card_vidros.jpg',
        description:
          'Limpeza profissional de esquadrias e envidraçamentos em altura com equipamentos certificados de rapel e balancim.',
        tag: 'Limpeza de Fachada & Vidros',
      },
      {
        id: 'card-6',
        title: 'Trabalho em Altura',
        image: '/extracted/trabalho_em_altura.jpg',
        description:
          'Equipe de alpinismo industrial certificada em NR-35 para pintura, impermeabilização e manutenção em fachadas prediais com rapel.',
        tag: 'Alpinismo Industrial NR-35',
      },
    ],
  },
  trustBar: {
    items: [
      { id: 'trust-1', title: 'Qualidade Garantida', icon: 'shield' },
      { id: 'trust-2', title: 'Atendimento Rápido', icon: 'clock' },
      { id: 'trust-3', title: 'Preço Justo', icon: 'handshake' },
      { id: 'trust-4', title: 'Satisfação dos Clientes', icon: 'thumbs-up' },
    ],
  },
  testimonials: {
    titlePrefix: 'O que nossos',
    titleHighlight: 'clientes dizem?',
    items: [
      {
        id: 'test-1',
        name: 'Maria Silva',
        location: 'Rio de Janeiro',
        quote: '“Serviço impecável! Equipe pontual e muito profissional.”',
        stars: 5,
        avatar: '/extracted/avatar_maria.png',
      },
      {
        id: 'test-2',
        name: 'Carlos Mendes',
        location: 'RJ',
        quote: '“Excelente trabalho, resultado acima do esperado.”',
        stars: 5,
        avatar: '/extracted/avatar_carlos.png',
      },
      {
        id: 'test-3',
        name: 'Ana Paula',
        location: 'Barra da Tijuca',
        quote: '“Super recomendo! Qualidade e compromisso.”',
        stars: 5,
        avatar: '/extracted/avatar_ana.png',
      },
    ],
  },
  footer: {
    headline: 'Não deixe para depois!',
    subheadline: 'Valorize seu imóvel com quem entende!',
    ctaButton: 'Solicite seu Orçamento Agora',
    coverageBadge: 'Atendimento em todo o Rio de Janeiro',
    brandTagline: 'REFORMAS E MANUTENÇÃO PREDIAL',
    brandSlogan: 'PINTURA QUE VALORIZA SEU ESPAÇO',
  },
};
