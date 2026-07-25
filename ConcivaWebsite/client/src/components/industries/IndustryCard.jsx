import React from 'react';

export default function IndustryCard({ industry, isReverse, onOpenModal }) {
  return (
    <div className={`industry-card-item ${isReverse ? 'reverse' : ''}`}>
      <div className="card-content-col">
        <div className="card-header-badge-row">
          <span className="industry-icon">{industry.icon}</span>
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
                <span key={idx} className="compliance-tag">🛡️ {c}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
