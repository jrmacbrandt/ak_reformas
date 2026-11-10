import React from 'react';
import { ServiceItem } from '../types/layers';
import {
  PaintRollerIcon,
  WallIcon,
  BuildingIcon,
  ShieldCheckIcon,
  FacadeCleanerIcon,
  StructuralIcon,
} from './Icons';

interface ServicesBarProps {
  items: ServiceItem[];
  isEditable?: boolean;
  onUpdateServices?: (items: ServiceItem[]) => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesBar: React.FC<ServicesBarProps> = ({
  items,
  isEditable = false,
  onUpdateServices,
  onSelectService,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'roller':
        return <PaintRollerIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
      case 'wall':
        return <WallIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
      case 'building':
        return <BuildingIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
      case 'shield':
        return <ShieldCheckIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
      case 'cleaner':
        return <FacadeCleanerIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
      case 'structural':
        return <StructuralIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
      default:
        return <PaintRollerIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />;
    }
  };

  return (
    <section id="servicos" className="relative z-20 rounded-t-3xl sm:rounded-t-[40px] -mt-6 sm:-mt-8 bg-[#0b2447] text-white py-6 border-t-2 border-sky-400/50 shadow-[0_-25px_50px_rgba(0,0,0,0.5)] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-0 divide-y sm:divide-y-0 md:divide-x divide-white/20 items-stretch">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item)}
              className="group flex flex-col items-center justify-start text-center px-3 py-3 sm:py-2.5 cursor-pointer hover:bg-white/15 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 rounded-xl md:rounded-lg h-full border border-transparent hover:border-sky-400/40"
            >
              <div className="mb-2 p-1 text-white group-hover:text-yellow-300 shrink-0 transition-colors duration-300">
                {getServiceIcon(item.icon)}
              </div>
              <h3
                contentEditable={isEditable}
                suppressContentEditableWarning
                onClick={(e) => isEditable && e.stopPropagation()}
                onBlur={(e) => {
                  if (onUpdateServices) {
                    const next = items.map((s) =>
                      s.id === item.id ? { ...s, title: e.currentTarget.textContent || '' } : s
                    );
                    onUpdateServices(next);
                  }
                }}
                className={`text-xs sm:text-sm font-bold tracking-tight text-white max-w-[180px] leading-snug transition-colors duration-200 group-hover:text-yellow-300 m-0 ${
                  isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1 bg-white/10' : ''
                }`}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
