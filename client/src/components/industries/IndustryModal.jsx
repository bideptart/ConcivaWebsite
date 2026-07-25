import React from 'react';

export default function IndustryModal({ industry, onClose }) {
  if (!industry) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header-hero">
          <span className="card-badge-tag" style={{ background: 'var(--primary)', color: 'white' }}>
            {industry.badge}
          </span>
          <h2 className="modal-title">{industry.title}</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            {industry.shortDesc}
          </p>
        </div>

        <div className="modal-body">
          {/* Key Use Cases */}
          <div>
            <h3 className="modal-section-title">Pre-built Industry Workflows</h3>
            <div className="use-cases-grid">
              {industry.useCases.map((uc, idx) => (
                <div key={idx} className="use-case-box">
                  <div className="uc-name">{uc.name}</div>
                  <div className="uc-desc">{uc.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="modal-section-title">Supported Integrations & Protocols</h3>
            <div className="integrations-flex">
              {industry.integrations.map((integ, idx) => (
                <span key={idx} className="integ-badge">
                  {integ}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button className="btn-outline" onClick={onClose}>
              Close
            </button>
            <a href="#contact" className="btn-primary" onClick={onClose}>
              Deploy This Architecture →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
