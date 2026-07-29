import React, { useState } from 'react';

/**
 * 3D flipping card.
 *
 * Port of the shadcn/Tailwind "flipping-card" into this project's stack:
 * plain JSX, plain CSS, no cn(), no Tailwind, no TypeScript.
 *
 * Kept from the original: perspective, preserve-3d, backface-visibility,
 * and the translateZ(70px) scale(.93) depth lift on both faces.
 *
 * Changed: the original flipped on hover only, which meant the back face —
 * and its button — were unreachable on every touch device. Flip is now
 * driven by click, Enter/Space, and hover on pointer devices.
 */
export default function FlipCard({ frontContent, backContent, label }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((v) => !v);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
    if (e.key === 'Escape' && flipped) setFlipped(false);
  };

  return (
    <div
      className={`flipx${flipped ? ' is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={label}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="flipx-inner">
        <div className="flipx-face flipx-front">
          <div className="flipx-lift">{frontContent}</div>
        </div>

        <div className="flipx-face flipx-back">
          <div className="flipx-lift">{backContent}</div>
        </div>
      </div>
    </div>
  );
}