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
        return <PaintRollerIcon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />;
      case 'wall':
        return <WallIcon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />;
      case 'building':
        return <BuildingIcon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />;
      case 'shield':
        return <ShieldCheckIcon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />;
      case 'cleaner':
        return <FacadeCleanerIcon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />;
      case 'structural':
        return <StructuralIcon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />;
      default:
        return <PaintRollerIcon className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="servicos" className="relative z-20 -mt-4 sm:-mt-5 rounded-t-2xl sm:rounded-t-3xl bg-[#0b2447] text-white py-5 sm:py-6 border-t-2 border-sky-400/40 shadow-[0_-10px_25px_rgba(0,0,0,0.3)] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-0 divide-y sm:divide-y-0 md:divide-x divide-white/20 items-stretch">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item)}
              className="group flex flex-col items-center justify-start text-center px-3 py-3 sm:py-2 cursor-pointer hover:bg-white/5 transition-colors rounded-lg md:rounded-none h-full"
            >
              <div className="mb-2 p-1 text-white shrink-0">
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
                className={`text-xs sm:text-sm font-bold tracking-tight text-white max-w-[180px] leading-snug transition-colors group-hover:text-sky-300 m-0 ${
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
