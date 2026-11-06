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
    <section id="servicos" className="bg-[#0b2447] text-white py-5 sm:py-6 border-y-2 border-sky-400/30 shadow-lg">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-0 divide-y sm:divide-y-0 md:divide-x divide-white/20">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item)}
              className="group flex flex-col items-center justify-center text-center px-3 py-3 sm:py-2 cursor-pointer hover:bg-white/5 transition-colors rounded-lg md:rounded-none"
            >
              <div className="mb-2 p-1 text-white">
                {getServiceIcon(item.icon)}
              </div>
              <span
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
                className={`text-xs sm:text-sm font-bold tracking-tight text-white max-w-[180px] leading-snug transition-colors group-hover:text-sky-300 ${
                  isEditable ? 'outline-dashed outline-1 outline-yellow-400 px-1 bg-white/10' : ''
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
