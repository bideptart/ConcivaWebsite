import React, { useState, useEffect, useRef, useCallback } from 'react';
import IndustryScene, { SCENE_COPY } from './IndustryScenes';

/* ─── SVG icons per industry id (no emojis) ─── */
const INDUSTRY_SVG = {
  'healthcare': ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="17" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke={color} strokeWidth="1.8"/>
      <path d="M14 12v6M11 15h6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  'real-estate': ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M3 13.5L14 4l11 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 11v12h5v-5h6v5h5V11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'finance-banking': ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="22" height="14" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M3 12h22" stroke={color} strokeWidth="1.8"/>
      <rect x="7" y="16" width="4" height="2" rx="1" fill={color}/>
    </svg>
  ),
  'ecommerce-retail': ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 4h2.5l2 10h11l2-7H8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
      <circle cx="19" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
  'education-edtech': ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 5L3 11l11 6 11-6-11-6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M7 14v6c0 1.5 3 3 7 3s7-1.5 7-3v-6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M25 11v5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  'logistics-hospitality': ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="10" width="22" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M8 10V7a6 6 0 0 1 12 0v3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="17" r="2" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
};

function IndustryIcon({ id, color }) {
  const Icon = INDUSTRY_SVG[id];
  if (!Icon) return null;
  return <Icon color={color} />;
}

/* ═══════════════════════════════════════════════════════════════
   ISOMETRIC ILLUSTRATION PANEL

   Original artwork — nothing traced. Composition borrows only the
   *structural* idea of a premium SaaS scene: a raised isometric stage,
   a floating conversation panel overlapping it, a device, and a
   connected glyph node. Subject matter is Conciva's own: a voice-AI
   hub taking a live call, not a room interior.

   Strictly brand palette — #F97316 / #FB923C / #FFEDD5 / #FFF7ED,
   with #111827 for the handset body. No green anywhere.

   Isometric maths: iso(x, y, z) →
     screenX = OX + (x - y) * S * cos(30°)   [S * 0.866]
     screenY = OY + (x + y) * S * sin(30°) - z * S
   with S = 30, OX = 196, OY = 250. A circle on the ground plane
   projects to an axis-aligned ellipse with rx/ry = √3, which is why
   the glow pools and rings below are plain <ellipse> elements.
═══════════════════════════════════════════════════════════════ */
function IndustryIllustration({ industry }) {
  const m0 = industry.metrics?.[0];
  const m1 = industry.metrics?.[1];
  const copy = SCENE_COPY[industry.id] || SCENE_COPY.healthcare;

  return (
    <div className="ive-illus-wrap">
      <div className="ive-illus-grid" />

      {/* ── Top status bar ── */}
      <div className="ive-illus-topbar">
        <span className="ive-illus-live-dot" />
        <span>AI Agent · Live</span>
      </div>

      <svg
        className="ive-iso"
        viewBox="0 0 460 460"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="isoTop" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFEDD5" />
          </linearGradient>
          <linearGradient id="isoLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="isoRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#F59E5A" />
          </linearGradient>
          <linearGradient id="isoModTop" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF7ED" />
          </linearGradient>
          <linearGradient id="isoModLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFEDD5" />
          </linearGradient>
          <linearGradient id="isoModRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFEDD5" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="isoAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="isoBarUp" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <radialGradient id="isoPool" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>

          <filter id="isoDrop" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="10" stdDeviation="12"
              floodColor="#9A3412" floodOpacity="0.16" />
          </filter>
          <filter id="isoDropSm" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="7"
              floodColor="#9A3412" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* ── Ambient pool under the stage ── */}
        <ellipse className="ive-iso-pool" cx="180" cy="282" rx="168" ry="96"
          fill="url(#isoPool)" />

        {/* ── Stage + the scene for this vertical (see IndustryScenes.jsx) ── */}
        <IndustryScene id={industry.id} />

        {/* ── Handset — the one constant across every vertical ── */}
        <g className="ive-iso-phone">
          <ellipse cx="342" cy="332" rx="28" ry="9"
            fill="#9A3412" fillOpacity="0.13" />
          <g transform="translate(320 240) rotate(-7)">
            <rect width="44" height="84" rx="11" fill="#111827"
              filter="url(#isoDropSm)" />
            <rect x="3.5" y="3.5" width="37" height="77" rx="8" fill="#1F2937" />
            <rect x="16" y="8" width="12" height="2.6" rx="1.3"
              fill="#FFFFFF" fillOpacity="0.28" />
            <g>
              {[9, 17, 26, 14, 20].map((h, i) => (
                <rect
                  key={i}
                  className={`ive-iso-pbar ive-iso-p${i + 1}`}
                  x={10 + i * 5.2}
                  y={45 - h / 2}
                  width="3"
                  height={h}
                  rx="1.5"
                  fill="url(#isoBarUp)"
                />
              ))}
            </g>
            <circle cx="22" cy="68" r="7.5" fill="url(#isoAccent)" />
            <path d="M 19 65.5 q 3 4.2 6 0" stroke="#FFFFFF" strokeWidth="1.6"
              fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* ── Connector: glyph node → stage ── */}
        <path className="ive-iso-wire" d="M 98 330 C 118 330, 126 306, 142 294"
          fill="none" stroke="#F97316" strokeOpacity="0.4" strokeWidth="2"
          strokeDasharray="2 6" strokeLinecap="round" />

        {/* ── Industry glyph node ── */}
        <g className="ive-iso-node">
          <rect x="46" y="304" width="54" height="54" rx="16" fill="#FFFFFF"
            stroke="rgba(249,115,22,0.15)" strokeWidth="1.5"
            filter="url(#isoDropSm)" />
          {/* IndustryIcon renders 36×36 — centres it in the 54×54 node */}
          <g transform="translate(55 313)">
            <IndustryIcon id={industry.id} color="#F97316" />
          </g>
        </g>

        {/* ── Floating conversation panel ── */}
        <g className="ive-iso-panel">
          <g filter="url(#isoDrop)">
            <rect x="238" y="56" width="202" height="124" rx="17" fill="#FFFFFF"
              stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />
          </g>
          <circle className="ive-iso-livedot" cx="254" cy="78" r="3.6" fill="#F97316" />
          <text x="265" y="82" className="ive-iso-h">Live call</text>
          <text x="424" y="82" className="ive-iso-t" textAnchor="end">02:14</text>
          <line x1="250" y1="92" x2="428" y2="92" stroke="#F1F5F9" strokeWidth="1.5" />

          <rect x="250" y="100" width="124" height="27" rx="9" fill="#F3F4F6" />
          <text x="260" y="117" className="ive-iso-msg">{copy.caller}</text>

          <rect x="272" y="133" width="156" height="27" rx="9" fill="#FFEDD5"
            stroke="rgba(249,115,22,0.22)" strokeWidth="1" />
          <text x="282" y="150" className="ive-iso-msg ive-iso-msg-ai">
            {copy.agent}
          </text>

          <g className="ive-iso-typing">
            <circle className="ive-iso-d1" cx="256" cy="169" r="3" fill="#D1D5DB" />
            <circle className="ive-iso-d2" cx="266" cy="169" r="3" fill="#D1D5DB" />
            <circle className="ive-iso-d3" cx="276" cy="169" r="3" fill="#D1D5DB" />
          </g>
        </g>
      </svg>

      {/* ── Bottom metric dock ── */}
      {(m0 || m1) && (
        <div className="ive-illus-footer">
          {m0 && (
            <div className="ive-illus-metric-chip">
              <span className="ive-illus-metric-val">{m0.value}</span>
              <span className="ive-illus-metric-lbl">{m0.label}</span>
            </div>
          )}
          {m1 && (
            <div className="ive-illus-metric-chip">
              <span className="ive-illus-metric-val">{m1.value}</span>
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
