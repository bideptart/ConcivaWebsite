import React, { useState } from 'react';

/**
 * Expanding feature strip.
 *
 * Port of the "expand-cards" component into this project's stack:
 * plain JSX, plain CSS, no Tailwind, no TypeScript, no shadcn.
 *
 * Changes from the original, and why:
 *  - The original showed images only. These panels carry real content, so the
 *    expanded panel renders title, subtitle and bullets; collapsed panels show
 *    a vertical title so you can still read what you're about to open.
 *  - Hotlinked pbs.twimg.com URLs removed — not our assets, and they rot.
 *  - Expansion is driven by click and focus as well as hover. Hover alone
 *    left this unusable on touch devices.
 *  - h-screen / min-h-screen removed; this sits mid-page, not full-viewport.
 *  - Collapses to a vertical stack below 900px instead of overflowing.
 */
export default function ExpandingFeatureStrip({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveIndex(idx);
      return;
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((idx + 1) % items.length);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((idx - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="efs-strip">
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;

        return (
          <button
            key={item.id}
            type="button"
            className={`efs-panel${isActive ? ' is-active' : ''}`}
            aria-expanded={isActive}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            onFocus={() => setActiveIndex(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          >
            <span className="efs-sheen" aria-hidden="true"></span>

            {/* Rail shown while collapsed */}
            <span className="efs-rail">
              <span className="efs-rail-icon" aria-hidden="true">{item.icon}</span>
              <span className="efs-rail-title">{item.title}</span>
            </span>

            {/* Content shown while expanded */}
            <span className="efs-content">
              <span className="efs-content-head">
                <span className="efs-content-icon" aria-hidden="true">{item.icon}</span>
                <span className="efs-content-titles">
                  <span className="efs-content-title">{item.title}</span>
                  <span className="efs-content-sub">{item.subtitle}</span>
                </span>
              </span>

              <span className="efs-divider" aria-hidden="true"></span>

              <span className="efs-list">
                {item.bullets.map((line, i) => (
                  <span className="efs-list-item" key={i}>{line}</span>
                ))}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}