import React from 'react';

function IndustryModal({ industry, onClose }) {
  if (!industry) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header-hero" style={{ borderBottom: `4px solid ${industry.accentColor}` }}>
          <span className="eyebrow-badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
            {industry.category}
          </span>
          <h2 className="modal-title">{industry.title}</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
            Detailed Architecture, Compliance Protocols & Workflows
          </p>
        </div>

        <div className="modal-body">
          <div>
            <h4 className="modal-section-title">Core Use Cases & Workflows</h4>
            <div className="use-cases-grid">
              {industry.useCases.map((uc, idx) => (
                <div key={idx} className="use-case-box">
                  <div className="uc-name">{uc.name}</div>
                  <div className="uc-desc">{uc.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="modal-section-title">Pre-Built Integrations & Ecosystem</h4>
            <div className="integrations-flex">
              {industry.integrations.map((item, idx) => (
                <span key={idx} className="integ-badge">⚡ {item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="modal-section-title">Security & Industry Certifications</h4>
            <div className="integrations-flex">
              {industry.certifications.map((item, idx) => (
                <span 
                  key={idx} 
                  className="integ-badge"
                  style={{ background: 'var(--secondary-light)', color: 'var(--secondary-dark)' }}
                >
                  🔒 {item}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary-dark)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                Ready to implement {industry.category} workflows?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Get connected with our enterprise solutions architect team.
              </p>
            </div>
            <a href="#demo" className="btn-primary" onClick={onClose}>
              Schedule Technical Deep-Dive
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryModal;
