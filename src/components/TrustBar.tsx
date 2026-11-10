import React from 'react';
import { TrustItem } from '../types/layers';
import { ShieldCheckIcon, ClockIcon, HandshakeIcon, ThumbsUpIcon } from './Icons';

interface TrustBarProps {
  items: TrustItem[];
  isEditable?: boolean;
  onUpdateTrust?: (items: TrustItem[]) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({
  items,
  isEditable = false,
  onUpdateTrust,
}) => {
  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheckIcon className="w-8 h-8 text-[#0a2f5c] transition-transform group-hover:scale-110" />;
      case 'clock':
        return <ClockIcon className="w-8 h-8 text-[#0a2f5c] transition-transform group-hover:scale-110" />;
      case 'handshake':
        return <HandshakeIcon className="w-8 h-8 text-[#0a2f5c] transition-transform group-hover:scale-110" />;
      case 'thumbs-up':
        return <ThumbsUpIcon className="w-8 h-8 text-[#0a2f5c] transition-transform group-hover:scale-110" />;
      default:
        return <ShieldCheckIcon className="w-8 h-8 text-[#0a2f5c]" />;
    }
  };

  return (
    <section className="relative z-20 bg-[#eef4fa] border-y border-slate-200/80 py-5 sm:py-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y sm:divide-y-0 md:divide-x divide-slate-300">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="group flex items-center justify-center gap-3 sm:gap-4 px-3 py-2.5 text-center sm:text-left"
            >
              <div className="shrink-0">
                {getTrustIcon(item.icon)}
              </div>
              <span
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => {
                  if (onUpdateTrust) {
                    const next = items.map((t) =>
                      t.id === item.id ? { ...t, title: e.currentTarget.textContent || '' } : t
                    );
                    onUpdateTrust(next);
                  }
                }}
                className={`text-xs sm:text-sm font-extrabold text-[#092347] tracking-tight leading-snug group-hover:text-blue-700 transition-colors ${
                  isEditable ? 'outline-dashed outline-1 outline-blue-500 px-1 bg-white' : ''
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
