import type { CSSProperties, ReactNode } from 'react';

// Inline SVG glyphs. Unicode arrows/stars render as emoji on iOS, so we draw them instead.
type Props = { className?: string; style?: CSSProperties };

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const svg = (children: ReactNode, { className, style }: Props, filled = false) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={`glyph ${className ?? ''}`} style={style} {...(filled ? { fill: 'currentColor' } : stroke)}>
    {children}
  </svg>
);

export const ArrowRight = (p: Props) => svg(<path d="M4 12h16M14 6l6 6-6 6" />, p);
export const ArrowLeft = (p: Props) => svg(<path d="M20 12H4M10 6l-6 6 6 6" />, p);
export const ArrowUpRight = (p: Props) => svg(<path d="M7 17 17 7M8 7h9v9" />, p);
export const ArrowDownRight = (p: Props) => svg(<path d="M7 7l10 10M17 8v9H8" />, p);
export const Check = (p: Props) => svg(<path d="M4 12.5 9.5 18 20 6" />, p);
export const Cross = (p: Props) => svg(<path d="M6 6l12 12M18 6 6 18" />, p);
export const Star4 = (p: Props) => svg(<path d="M12 0C12.8 7 17 11.2 24 12 17 12.8 12.8 17 12 24 11.2 17 7 12.8 0 12 7 11.2 11.2 7 12 0Z" />, p, true);
