import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Illustration panel — geometric isometric visual per industry ─── */
function IndustryIllustration({ industry }) {
  const palettes = {
    healthcare: { bg: '#FFF7ED', accent: '#F97316', soft: '#FED7AA' },
    'real-estate': { bg: '#FFF7ED', accent: '#F97316', soft: '#FED7AA' },
    'finance-banking': { bg: '#FFF7ED', accent: '#F97316', soft: '#FED7AA' },
    'ecommerce-retail': { bg: '#FFF7ED', accent: '#F97316', soft: '#FED7AA' },
    'education-edtech': { bg: '#FFF7ED', accent: '#F97316', soft: '#FED7AA' },
    'logistics-hospitality': { bg: '#FFF7ED', accent: '#F97316', soft: '#FED7AA' },
  };
  const pal = palettes[industry.id] || palettes.healthcare;

  return (
    <div className="ive-illus-wrap" style={{ background: pal.bg }}>
      {/* Central big icon */}
      <div className="ive-illus-center">
        <div className="ive-illus-icon-ring" style={{ borderColor: pal.soft }}>
          <span className="ive-illus-icon">{industry.icon}</span>
        </div>

        {/* Floating chat bubble — simulates AI call UI */}
        <div className="ive-bubble ive-bubble-top" style={{ borderColor: pal.soft }}>
          <span className="ive-bubble-dot" style={{ background: pal.accent }} />
          <span className="ive-bubble-label">AI Agent · Live</span>
        </div>

        {/* Floating stat card */}
        <div className="ive-stat-float ive-stat-tl" style={{ borderColor: pal.soft }}>
          <span className="ive-stat-val" style={{ color: pal.accent }}>{industry.metrics?.[0]?.value}</span>
          <span className="ive-stat-lbl">{industry.metrics?.[0]?.label}</span>
        </div>

        <div className="ive-stat-float ive-stat-br" style={{ borderColor: pal.soft }}>
          <span className="ive-stat-val" style={{ color: pal.accent }}>{industry.metrics?.[1]?.value}</span>
          <span className="ive-stat-lbl">{industry.metrics?.[1]?.label}</span>
        </div>

        {/* Use case pills */}
        <div className="ive-pills-row">
          {industry.useCases?.slice(0, 2).map((uc, i) => (
            <span key={i} className="ive-pill" style={{ background: pal.soft, color: '#7C2D12' }}>
              {uc}
            </span>
          ))}
        </div>
      </div>

      {/* Background subtle grid */}
      <div className="ive-illus-grid" />
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
