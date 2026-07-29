import React from 'react';

/* ── Shield SVG for compliance tags ── */
function ShieldIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1.5L2 3.5v4c0 2.5 2.2 4.5 5 5 2.8-.5 5-2.5 5-5v-4L7 1.5z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Industry icon map (SVG, no emoji) ── */
const INDUSTRY_ICONS = {
  Healthcare: ({ color = 'currentColor' }) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="17" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke={color} strokeWidth="1.8"/>
      <path d="M14 12v6M11 15h6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  'Real Estate': ({ color = 'currentColor' }) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M3 13.5L14 4l11 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 11v12h5v-5h6v5h5V11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Finance: ({ color = 'currentColor' }) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="22" height="14" rx="2.5" stroke={color} strokeWidth="1.8"/>
      <path d="M3 12h22" stroke={color} strokeWidth="1.8"/>
      <rect x="7" y="16" width="4" height="2" rx="1" fill={color}/>
    </svg>
  ),
  'E-Commerce': ({ color = 'currentColor' }) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 4h2.5l2 10h11l2-7H8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
      <circle cx="19" cy="22" r="1.5" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
  Education: ({ color = 'currentColor' }) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 5L3 11l11 6 11-6-11-6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M7 14v6c0 1.5 3 3 7 3s7-1.5 7-3v-6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M25 11v5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Logistics: ({ color = 'currentColor' }) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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

export default function IndustryCard({ industry, isReverse, onOpenModal }) {
  return (
    <div className={`industry-card-item ${isReverse ? 'reverse' : ''}`}>
      <div className="card-content-col">
        <div className="card-header-badge-row">
          <span className="industry-icon">
            <IndustryIcon category={industry.category} />
          </span>
          <span className="industry-category-badge">{industry.category}</span>
          {industry.badge && <span className="industry-special-badge">{industry.badge}</span>}
        </div>

        <h3 className="industry-card-title">{industry.title}</h3>
        <p className="industry-card-desc">{industry.shortDesc}</p>

        <div className="industry-highlights-list">
          {industry.highlights?.map((highlight, idx) => (
            <div key={idx} className="highlight-item">
              <span className="highlight-check">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="card-action-row">
          <button className="btn-primary-sm" onClick={() => onOpenModal(industry)}>
            Explore {industry.category} Workflow →
          </button>
        </div>
      </div>

      <div className="card-metrics-col">
        <div className="metrics-box">
          <h4 className="metrics-box-heading">Impact Metrics</h4>
          <div className="metrics-grid">
            {industry.metrics?.map((m, idx) => (
              <div key={idx} className="metric-stat-card">
                <span className="metric-val">{m.value}</span>
                <span className="metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>
          {industry.compliance && (
            <div className="compliance-row">
              {industry.compliance.map((c, idx) => (
                <span key={idx} className="compliance-tag">
                  <ShieldIcon /> {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
