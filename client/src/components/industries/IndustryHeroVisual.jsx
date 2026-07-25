import React, { useState, useEffect } from 'react';

const INDUSTRY_TILES = [
  { icon: '🏥', label: 'Healthcare', stat: '10,000+ Patients/day', color: '#EF4444', bg: '#FEF2F2' },
  { icon: '🏢', label: 'Real Estate', stat: '3x Lead Conversion', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: '💳', label: 'Finance & BFSI', stat: '70% Cost Reduction', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: '🛍️', label: 'E-Commerce', stat: '32% RTO Reduction', color: '#10B981', bg: '#ECFDF5' },
  { icon: '🎓', label: 'EdTech', stat: '+50% Admissions', color: '#F59E0B', bg: '#FFFBEB' },
  { icon: '🏨', label: 'Hospitality', stat: '60% Cost Savings', color: '#EC4899', bg: '#FDF2F8' },
];

const STATS = [
  { val: '10+', label: 'Languages' },
  { val: '99.8%', label: 'Accuracy' },
  { val: '<0.3s', label: 'Latency' },
  { val: '6', label: 'Industries' },
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
      <div className="ind-center-badge" style={{ background: activeTile.bg, borderColor: activeTile.color + '44' }}>
        <span className="ind-center-icon">{activeTile.icon}</span>
        <span className="ind-center-label" style={{ color: activeTile.color }}>{activeTile.label}</span>
        <span className="ind-center-stat">{activeTile.stat}</span>
        <div className="ind-center-ring" style={{ borderColor: activeTile.color + '30' }} />
        <div className="ind-center-ring ind-ring-2" style={{ borderColor: activeTile.color + '18' }} />
      </div>

      {/* Orbiting industry tiles */}
      {INDUSTRY_TILES.map((tile, idx) => {
        const angle = (idx / INDUSTRY_TILES.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const radius = 170;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const isActive = idx === activeIdx;

        return (
          <button
            key={tile.label}
            className={`ind-orbit-tile ${isActive ? 'ind-orbit-active' : ''}`}
            style={{
              left: `calc(50% + ${x}px - 38px)`,
              top: `calc(50% + ${y}px - 38px)`,
              background: isActive ? tile.bg : '#FFFFFF',
              borderColor: isActive ? tile.color : 'var(--border-light, #E2E8F0)',
              boxShadow: isActive ? `0 8px 24px ${tile.color}33` : '0 4px 12px rgba(15,23,42,0.05)',
              transform: isActive ? 'scale(1.15)' : 'scale(1)',
            }}
            onClick={() => setActiveIdx(idx)}
            title={tile.label}
          >
            <span style={{ fontSize: '1.5rem' }}>{tile.icon}</span>
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
