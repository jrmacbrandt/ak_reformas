import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-6 h-6',
  size = 24,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.83.896 2.79.897 3.183 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.766-5.767-5.766zm3.385 8.156c-.144.405-.837.774-1.17.824-.312.045-.694.074-1.127-.066-.271-.087-.621-.222-1.062-.413-1.874-.814-3.089-2.712-3.184-2.837-.094-.125-.761-1.014-.761-1.933 0-.92.482-1.372.653-1.562.172-.19.375-.238.5-.238.125 0 .25.002.359.007.115.006.27-.044.423.324.156.377.534 1.303.58 1.398.047.095.078.207.016.332-.063.125-.094.203-.188.312-.094.11-.198.245-.282.329-.094.094-.193.197-.083.385.11.188.487.804 1.045 1.301.719.64 1.326.839 1.514.933.188.094.298.078.407-.047.11-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.063 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.097.858z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.308A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167a8.136 8.136 0 01-4.214-1.17l-.302-.18-3.126.82.835-3.048-.198-.314A8.146 8.146 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"
    />
  </svg>
);

// Paint Roller Icon
export const PaintRollerIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="3" width="16" height="6" rx="2" />
    <path d="M18 6h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8a1 1 0 0 0-1 1v4" />
    <rect x="10" y="17" width="4" height="6" rx="1" />
  </svg>
);

// Wall / Cladding Icon
export const WallIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
    <path d="M3 13h18" />
    <path d="M3 17h18" />
  </svg>
);

// Building / Maintenance Icon
export const BuildingIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 6h.01M12 10h.01M12 14h.01" />
  </svg>
);

// Shield Waterproofing Icon
export const ShieldCheckIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Facade Cleaner / Squeegee Icon
export const FacadeCleanerIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 6h18M5 6l2 8h10l2-8" />
    <path d="M12 14v7" />
    <circle cx="12" cy="4" r="1.5" />
    <path d="M8 21h8" />
  </svg>
);

// Structural Recovery & Masonry Icon
export const StructuralIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="14" width="18" height="8" rx="1" />
    <path d="M7 14v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
    <path d="m11 2 4 4-2.5 2.5-4-4L11 2Z" />
    <path d="m7 7-2 2" />
  </svg>
);

// Quick Service / Clock Icon
export const ClockIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-blue-900',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Fair Price / Handshake Icon
export const HandshakeIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-blue-900',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="m12 5 3 3-4 4-2-2" />
    <path d="m8 14 3-3" />
  </svg>
);

// Thumbs Up / Client Satisfaction Icon
export const ThumbsUpIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-blue-900',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

// Yellow Checkmark Badge
export const YellowCheckBadge: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20,
}) => (
  <div
    style={{ width: size, height: size }}
    className={`rounded-full bg-[#f8be14] flex items-center justify-center shrink-0 shadow-sm ${className}`}
  >
    <svg
      viewBox="0 0 16 16"
      className="w-3.5 h-3.5 text-slate-900 stroke-[3]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 8.5 6.5 12 13 4.5" />
    </svg>
  </div>
);

// 5 Stars Rating
export const StarRating: React.FC<{ stars?: number; className?: string }> = ({
  stars = 5,
  className = '',
}) => (
  <div className={`flex items-center gap-1 ${className}`} aria-label={`${stars} de 5 estrelas`}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < stars ? 'text-[#f5a623] fill-[#f5a623]' : 'text-slate-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// AK Brand Logo Component with pure HTML text layers + Paint Brush Swoosh
export const AKBrandLogo: React.FC<{
  tagline: string;
  slogan: string;
  theme?: 'dark' | 'light';
  isEditable?: boolean;
  onEdit?: (field: 'tagline' | 'slogan', val: string) => void;
  className?: string;
}> = ({
  tagline,
  slogan,
  theme = 'dark',
  isEditable = false,
  onEdit,
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col items-center sm:items-start select-none ${className}`}>
      {/* Top AK Mark with Paint Brush Swoosh */}
      <div className="relative flex items-center justify-center">
        <span
          className={`font-display text-4xl sm:text-5xl font-black tracking-tighter ${
            isLight ? 'text-white drop-shadow-md' : 'text-[#0e3568]'
          }`}
          style={{ letterSpacing: '-0.04em' }}
        >
          AK
        </span>
        {/* Dynamic paint brush stroke sweeping up to the right */}
        <div className="absolute -top-1 right-[-24px] sm:right-[-28px] w-12 sm:w-14 h-9 pointer-events-none">
          <svg viewBox="0 0 80 50" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Brush handle */}
            <path
              d="M65 8 L54 22 L51 19 L62 5 Z"
              fill={isLight ? '#0c3870' : '#102e54'}
            />
            {/* Metal ferrule */}
            <path
              d="M54 22 L46 29 L43 26 L51 19 Z"
              fill="#cbd5e1"
            />
            {/* Cyan/Blue paint bristles and sweeping splash */}
            <path
              d="M46 29 C40 34, 25 38, 5 36 C25 43, 44 42, 50 31 Z"
              fill="#00b4d8"
            />
            <path
              d="M48 30 C35 34, 18 36, 0 35 C15 39, 36 39, 44 32 Z"
              fill="#0077b6"
            />
          </svg>
        </div>
      </div>

      {/* Layer 2: Subtitle / Brand Tagline (Pure HTML Text Layer) */}
      <div className="mt-1 text-center sm:text-left">
        <span
          contentEditable={isEditable}
          suppressContentEditableWarning
          onBlur={(e) => onEdit && onEdit('tagline', e.currentTarget.textContent || '')}
          className={`block text-[11px] sm:text-[12px] font-black tracking-wider uppercase transition-colors ${
            isLight ? 'text-white' : 'text-[#0d2e58]'
          } ${isEditable ? 'outline-dashed outline-1 outline-blue-400 cursor-text px-1 bg-blue-50/50' : ''}`}
        >
          {tagline}
        </span>

        {/* Layer 3: Slogan (Pure HTML Text Layer) */}
        <span
          contentEditable={isEditable}
          suppressContentEditableWarning
          onBlur={(e) => onEdit && onEdit('slogan', e.currentTarget.textContent || '')}
          className={`block text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.22em] uppercase transition-colors ${
            isLight ? 'text-slate-200' : 'text-[#1e4474]'
          } ${isEditable ? 'outline-dashed outline-1 outline-blue-400 cursor-text px-1 bg-blue-50/50' : ''}`}
        >
          {slogan}
        </span>
      </div>
    </div>
  );
};
