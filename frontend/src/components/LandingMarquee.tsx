import React from 'react';
import { Star4 } from './Glyph';

export function LandingMarquee() {
  return (
    <div className="ticker" aria-hidden="true">
      <span>Learn slowly. Trade wisely. Keep your capital. &nbsp; <Star4 /> &nbsp; Learn slowly. Trade wisely. Keep your capital. &nbsp; <Star4 /> &nbsp;</span>
    </div>
  );
}
