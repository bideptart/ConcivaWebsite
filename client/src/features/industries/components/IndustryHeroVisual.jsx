import React, { useState, useEffect } from 'react';

/* ── Clean SVG icons — no emojis ── */
const Icons = {
  Healthcare: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="17" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke={color} strokeWidth="1.8"/>
      <path d="M14 12v6M11 15h6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  RealEstate: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M3 13.5L14 4l11 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 11v12h5v-5h6v5h5V11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Finance: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="22" height="14" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M3 12h22" stroke={color} strokeWidth="1.8"/>
      <rect x="7" y="16" width="4" height="2" rx="1" fill={color}/>
    </svg>
  ),
  ECommerce: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 4h2.5l2 10h11l2-7H8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
      <circle cx="19" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
  EdTech: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 5L3 11l11 6 11-6-11-6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M7 14v6c0 1.5 3 3 7 3s7-1.5 7-3v-6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M25 11v5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Hospitality: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="10" width="22" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M8 10V7a6 6 0 0 1 12 0v3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="17" r="2" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
};

const INDUSTRY_TILES = [
  { Icon: Icons.Healthcare,  label: 'Healthcare',    stat: '10,000+ Patients/day', color: '#EF4444', bg: '#FEF2F2' },
  { Icon: Icons.RealEstate,  label: 'Real Estate',   stat: '3x Lead Conversion',   color: '#3B82F6', bg: '#EFF6FF' },
  { Icon: Icons.Finance,     label: 'Finance & BFSI',stat: '70% Cost Reduction',   color: '#8B5CF6', bg: '#F5F3FF' },
  { Icon: Icons.ECommerce,   label: 'E-Commerce',    stat: '32% RTO Reduction',    color: '#10B981', bg: '#ECFDF5' },
  { Icon: Icons.EdTech,      label: 'EdTech',        stat: '+50% Admissions',      color: '#F59E0B', bg: '#FFFBEB' },
  { Icon: Icons.Hospitality, label: 'Hospitality',   stat: '60% Cost Savings',     color: '#EC4899', bg: '#FDF2F8' },
];

const STATS = [
  { val: '10+',   label: 'Languages'  },
  { val: '99.8%', label: 'Accuracy'   },
  { val: '<0.3s', label: 'Latency'    },
  { val: '6',     label: 'Industries' },
];

export default function IndustryHeroVisual() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % INDUSTRY_TILES.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const activeTile = INDUSTRY_TILES[activeIdx];

  return (
    <div className="ind-hero-visual">
      {/* Central glowing badge */}
      <div
        className="ind-center-badge"
        style={{ background: activeTile.bg, borderColor: activeTile.color + '44' }}
      >
        <div className="ind-center-icon">
          <activeTile.Icon color={activeTile.color} />
        </div>
        <span className="ind-center-label" style={{ color: activeTile.color }}>
          {activeTile.label}
        </span>
        <span className="ind-center-stat">{activeTile.stat}</span>
        <div className="ind-center-ring" style={{ borderColor: activeTile.color + '30' }} />
        <div className="ind-center-ring ind-ring-2" style={{ borderColor: activeTile.color + '18' }} />
      </div>

      {/* Orbiting industry tiles */}
      {INDUSTRY_TILES.map((tile, idx) => {
        const angle  = (idx / INDUSTRY_TILES.length) * 360;
        const rad    = (angle * Math.PI) / 180;
        const radius = 170;
        const x      = Math.cos(rad) * radius;
        const y      = Math.sin(rad) * radius;
        const isActive = idx === activeIdx;

        return (
          <button
            key={tile.label}
            className={`ind-orbit-tile ${isActive ? 'ind-orbit-active' : ''}`}
            style={{
              left:        `calc(50% + ${x}px - 38px)`,
              top:         `calc(50% + ${y}px - 38px)`,
              background:  isActive ? tile.bg : '#FFFFFF',
              borderColor: isActive ? tile.color : 'var(--border-light, #E2E8F0)',
              boxShadow:   isActive ? `0 8px 24px ${tile.color}33` : '0 4px 12px rgba(15,23,42,0.05)',
              transform:   isActive ? 'scale(1.15)' : 'scale(1)',
            }}
            onClick={() => setActiveIdx(idx)}
            title={tile.label}
          >
            <tile.Icon color={isActive ? tile.color : '#94A3B8'} />
          </button>
        );
      })}

      {/* Bottom stats strip */}
      <div className="ind-stats-strip">
        {STATS.map((s) => (
          <div key={s.label} className="ind-stat-chip">
            <span className="ind-stat-val">{s.val}</span>
            <span className="ind-stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
