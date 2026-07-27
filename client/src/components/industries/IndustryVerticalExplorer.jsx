import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Illustration panel — geometric isometric visual per industry ─── */
function IndustryIllustration({ industry }) {
  const palettes = {
    healthcare: { bg: '#FEF2F2', accent: '#EF4444', soft: '#FECACA' },
    'real-estate': { bg: '#EFF6FF', accent: '#3B82F6', soft: '#BFDBFE' },
    'finance-banking': { bg: '#F5F3FF', accent: '#8B5CF6', soft: '#DDD6FE' },
    'ecommerce-retail': { bg: '#ECFDF5', accent: '#10B981', soft: '#A7F3D0' },
    'education-edtech': { bg: '#FFFBEB', accent: '#F59E0B', soft: '#FDE68A' },
    'logistics-hospitality': { bg: '#FDF2F8', accent: '#EC4899', soft: '#FBCFE8' },
  };
  const pal = palettes[industry.id] || palettes.healthcare;
  const m0 = industry.metrics?.[0];
  const m1 = industry.metrics?.[1];

  return (
    <div className="ive-illus-wrap" style={{ background: pal.bg }}>
      {/* Background subtle grid */}
      <div className="ive-illus-grid" />

      {/* Soft glow behind icon */}
      <div className="ive-illus-glow" style={{ background: `radial-gradient(circle, ${pal.accent}33 0%, transparent 70%)` }} />

      {/* Top status bar — pinned, never overlaps anything */}
      <div className="ive-illus-topbar">
        <span className="ive-illus-live-dot" style={{ background: pal.accent }} />
        <span>AI Agent · Live</span>
      </div>

      {/* Central icon */}
      <div className="ive-illus-center">
        <div className="ive-illus-icon-ring" style={{ borderColor: pal.accent, boxShadow: `0 16px 40px ${pal.accent}26` }}>
          <span className="ive-illus-icon">{industry.icon}</span>
        </div>
      </div>

      {/* Bottom metric dock — two chips side by side, never wraps into other elements */}
      {(m0 || m1) && (
        <div className="ive-illus-footer">
          {m0 && (
            <div className="ive-illus-metric-chip">
              <span className="ive-illus-metric-val" style={{ color: pal.accent }}>{m0.value}</span>
              <span className="ive-illus-metric-lbl">{m0.label}</span>
            </div>
          )}
          {m1 && (
            <div className="ive-illus-metric-chip">
              <span className="ive-illus-metric-val" style={{ color: pal.accent }}>{m1.value}</span>
              <span className="ive-illus-metric-lbl">{m1.label}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Main carousel component ─── */
export default function IndustryVerticalExplorer({ industries, onOpenModal }) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState('next'); // 'next' | 'prev'
  const timerRef = useRef(null);
  const total = industries.length;

  const go = useCallback(
    (idx, direction = 'next') => {
      if (animating || idx === active) return;
      setDir(direction);
      setAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setAnimating(false);
      }, 420);
    },
    [animating, active]
  );

  const next = useCallback(() => go((active + 1) % total, 'next'), [active, total, go]);
  const prev = useCallback(() => go((active - 1 + total) % total, 'prev'), [active, total, go]);

  /* Auto-advance every 4 seconds */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleManual = (fn) => {
    fn();
    resetTimer();
  };

  const ind = industries[active];

  return (
    <div className="ive-root">

      {/* ── Two-column hero layout ── */}
      <div className={`ive-stage ${animating ? (dir === 'next' ? 'ive-anim-next' : 'ive-anim-prev') : ''}`}>

        {/* LEFT — illustration panel */}
        <div className="ive-left">
          <IndustryIllustration industry={ind} />
        </div>

        {/* RIGHT — content panel */}
        <div className="ive-right">

          {/* Section super-title */}
          <p className="ive-super">
            See <span className="ive-brand">Conciva AI</span> in action
          </p>

          {/* Industry name */}
          <h3 className="ive-industry-name">{ind.title}</h3>

          {/* Tag chips: category + badge */}
          <div className="ive-tag-row">
            <span className="ive-tag-cat">{ind.category}</span>
            {ind.badge && <span className="ive-tag-sep">·</span>}
            {ind.badge && <span className="ive-tag-badge">{ind.badge}</span>}
          </div>

          {/* Description */}
          <p className="ive-desc">{ind.shortDesc}</p>

          {/* Highlight bullets */}
          <ul className="ive-bullets">
            {ind.highlights?.slice(0, 3).map((h, i) => (
              <li key={i} className="ive-bullet">
                <span className="ive-bullet-dot" />
                {h}
              </li>
            ))}
          </ul>

          {/* Bottom row: arrows + explore link */}
          <div className="ive-bottom-row">
            <div className="ive-arrows">
              <button
                className="ive-arrow-btn"
                onClick={() => handleManual(prev)}
                aria-label="Previous industry"
              >
                ←
              </button>
              <button
                className="ive-arrow-btn ive-arrow-active"
                onClick={() => handleManual(next)}
                aria-label="Next industry"
              >
                →
              </button>
            </div>

            <button
              className="ive-explore-btn"
              onClick={() => onOpenModal(ind)}
            >
              Explore Workflow →
            </button>
          </div>

          {/* Progress dots */}
          <div className="ive-progress-row">
            {industries.map((_, i) => (
              <button
                key={i}
                className={`ive-prog-dot ${i === active ? 'ive-prog-dot-active' : ''}`}
                onClick={() => handleManual(() => go(i, i > active ? 'next' : 'prev'))}
                aria-label={`Go to ${industries[i].title}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ── Auto-play progress bar ── */}
      <div className="ive-progress-bar-wrap">
        <div
          key={active}
          className="ive-progress-bar-fill"
        />
      </div>

    </div>
  );
}
