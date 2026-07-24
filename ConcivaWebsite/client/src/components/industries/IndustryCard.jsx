import React from 'react';

function IndustryCard({ industry, isReverse, onOpenModal }) {
  return (
    <div className={`industry-card ${isReverse ? 'reverse' : ''}`} id={`industry-${industry.id}`}>
      <div 
        className="card-visual" 
        style={{ backgroundImage: `url(${industry.heroImage})` }}
      >
        <div className="card-visual-overlay" />
        <div className="card-metric-badge">
          <div className="metric-number">{industry.metric}</div>
          <div className="metric-desc">{industry.metricLabel}</div>
        </div>
      </div>

      <div className="card-content">
        <span className="card-badge-tag" style={{ borderLeft: `3px solid ${industry.accentColor}` }}>
          {industry.badge}
        </span>

        <h3 className="card-title">{industry.title}</h3>
        <p className="card-desc">{industry.shortDesc}</p>

        <div className="card-tags">
          {industry.tags.map((tag, idx) => (
            <span key={idx} className="tag-item">{tag}</span>
          ))}
        </div>

        <div className="card-highlights">
          {industry.highlights.map((item, idx) => (
            <div key={idx} className="highlight-item">
              <span className="check-icon">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="card-actions">
          <button 
            className="btn-primary" 
            onClick={() => onOpenModal(industry)}
            style={{ background: `linear-gradient(135deg, ${industry.accentColor} 0%, #0B132B 120%)` }}
          >
            Explore Solution & Architecture →
          </button>
          <a href="#demo" className="btn-outline">
            Schedule Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
