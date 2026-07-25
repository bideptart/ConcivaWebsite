import React, { useEffect } from 'react';

export default function IndustryModal({ industry, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!industry) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-header-badge-row">
            <span className="modal-icon">{industry.icon}</span>
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
                  <span key={idx} className="modal-compliance-tag">🔒 {c}</span>
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
