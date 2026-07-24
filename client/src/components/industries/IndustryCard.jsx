import React, { useRef } from 'react';

export default function IndustryCard({ industry, isReverse, onOpenModal }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`industry-card bento-spotlight ${isReverse ? 'reverse' : ''}`}
    >
      <div 
        className="card-visual" 
        style={{ backgroundImage: `url(${industry.bgImage})` }}
      >
        <div className="card-visual-overlay" />
        <div className="card-metric-badge">
          <div className="metric-number">{industry.metricVal}</div>
          <div className="metric-desc">{industry.metricDesc}</div>
        </div>
      </div>

      <div className="card-content">
        <span className="card-badge-tag">{industry.badge}</span>
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
          >
            Explore Workflows →
          </button>
        </div>
      </div>
    </div>
  );
}
