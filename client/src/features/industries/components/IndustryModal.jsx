import React, { useEffect } from 'react';

/* ── Lock SVG for compliance tags ── */
function LockIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="2.5" y="6" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="7" cy="9.5" r="1" fill="currentColor"/>
    </svg>
  );
}

/* ── Industry icon map (SVG, no emoji) ── */
const INDUSTRY_ICONS = {
  Healthcare: ({ color = 'currentColor' }) => (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="17" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke={color} strokeWidth="1.8"/>
      <path d="M14 12v6M11 15h6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  'Real Estate': ({ color = 'currentColor' }) => (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M3 13.5L14 4l11 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 11v12h5v-5h6v5h5V11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Finance: ({ color = 'currentColor' }) => (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="22" height="14" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M3 12h22" stroke={color} strokeWidth="1.8"/>
      <rect x="7" y="16" width="4" height="2" rx="1" fill={color}/>
    </svg>
  ),
  'E-Commerce': ({ color = 'currentColor' }) => (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 4h2.5l2 10h11l2-7H8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
      <circle cx="19" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
  Education: ({ color = 'currentColor' }) => (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 5L3 11l11 6 11-6-11-6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M7 14v6c0 1.5 3 3 7 3s7-1.5 7-3v-6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M25 11v5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Logistics: ({ color = 'currentColor' }) => (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="10" width="22" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M8 10V7a6 6 0 0 1 12 0v3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="17" r="2" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
};

function IndustryIcon({ category, color }) {
  const Icon = INDUSTRY_ICONS[category] || INDUSTRY_ICONS['Finance'];
  return <Icon color={color || 'var(--primary, #F97316)'} />;
}

export default function IndustryModal({ industry, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!industry) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>

        <div className="modal-header">
          <div className="modal-header-badge-row">
            <span className="modal-icon">
              <IndustryIcon category={industry.category} />
            </span>
            <span className="modal-category">{industry.category}</span>
          </div>
          <h2 className="modal-title">{industry.title} Solution Architecture</h2>
          <p className="modal-subtitle">{industry.shortDesc}</p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Overview & Impact</h3>
            <p>{industry.fullDesc}</p>
          </div>

          {industry.useCases && (
            <div className="modal-section">
              <h3>Key Use Cases</h3>
              <div className="use-case-grid">
                {industry.useCases.map((uc, idx) => (
                  <div key={idx} className="use-case-pill">
                    <span className="use-case-dot"></span>
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {industry.metrics && (
            <div className="modal-section">
              <h3>Proven Performance Metrics</h3>
              <div className="modal-metrics-grid">
                {industry.metrics.map((m, idx) => (
                  <div key={idx} className="modal-metric-card">
                    <div className="modal-metric-val">{m.value}</div>
                    <div className="modal-metric-lbl">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {industry.compliance && (
            <div className="modal-section">
              <h3>Security & Compliance</h3>
              <div className="compliance-pills">
                {industry.compliance.map((c, idx) => (
                  <span key={idx} className="modal-compliance-tag">
                    <LockIcon /> {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-primary" style={{ width: '100%' }} onClick={onClose}>
            Deploy {industry.category} AI Voice Agent
          </button>
        </div>
      </div>
    </div>
  );
}
