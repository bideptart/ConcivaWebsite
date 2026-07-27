import React, { useState, useEffect } from 'react';

const complianceData = [
  {
    id: 'popia-fica',
    title: 'POPIA & FICA Compliant',
    icon: '🛡️',
    badge: 'SA Privacy Law',
    bullets: [
      'Encrypted voice session logs with zero raw audio storage',
      'POPIA consent recording and explicit opt-in verifications',
      'Automated PII data masking for bank account and ID numbers'
    ]
  },
  {
    id: 'stir-shaken',
    title: 'STIR / SHAKEN Verification',
    icon: '🔒',
    badge: 'Carrier Auth',
    bullets: [
      'Digital certificate signing for caller ID authenticity',
      'Dramatic reduction in unanswered outbound call flags',
      'E.164 formatting across South African telecom trunks'
    ]
  },
  {
    id: 'soc2-iso',
    title: 'SOC 2 Type II & ISO 27001',
    icon: '⚡',
    badge: 'Enterprise',
    bullets: [
      'AES-256 encryption at rest and TLS 1.3 in transit',
      'Annual third-party security audits and pen testing',
      'Multi-tenant workspace isolation with role-based access'
    ]
  },
  {
    id: 'gdpr-hipaa',
    title: 'GDPR & HIPAA Data Ready',
    icon: '🌐',
    badge: 'Global',
    bullets: [
      'Zero-log voice streaming for medical and legal calls',
      'Right-to-be-forgotten API for instant data deletion',
      'HIPAA Business Associate Agreement (BAA) supported'
    ]
  }
];

export default function SecurityCompliance() {
  const [activeItem, setActiveItem] = useState('popia-fica');

  useEffect(() => {
    const observerCallback = (entries) => {
      if (window._scManualLock) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) setActiveItem(id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-25% 0px -35% 0px',
      threshold: 0.2
    });
    const cards = document.querySelectorAll('.acc-card[data-id][data-section="compliance"]');
    cards.forEach(el => observer.observe(el));
    return () => cards.forEach(el => observer.unobserve(el));
  }, []);

  const toggleItem = (id) => {
    setActiveItem(prev => (prev === id ? null : id));
    window._scManualLock = true;
    setTimeout(() => { window._scManualLock = false; }, 1200);
  };

  return (
    <section className="accordion-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Enterprise Security
          </div>
          <h2 className="section-title">Security & <span className="gradient-span">Compliance</span></h2>
          <p className="section-subtitle">
            Built to meet South African POPIA data privacy laws and global telecom standards.
          </p>
        </div>

        <div className="accordion-stack">
          {complianceData.map((item) => {
            const isOpen = activeItem === item.id;
            return (
              <div
                key={item.id}
                data-id={item.id}
                data-section="compliance"
                className={`acc-card ${isOpen ? 'is-active' : ''}`}
              >
                <button
                  type="button"
                  className="acc-header"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  id={`${item.id}-header`}
                >
                  <div className="acc-header-left">
                    <span className="acc-icon-box">{item.icon}</span>
                    <div className="acc-titles">
                      <div className="acc-title-row">
                        <h3 className="acc-title">{item.title}</h3>
                        <span className="acc-badge">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                  <svg className={`acc-chevron ${isOpen ? 'rotate-180' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>
                <div
                  className={`acc-body ${isOpen ? 'is-open' : ''}`}
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={`${item.id}-header`}
                >
                  <div className="acc-body-inner">
                    <ul className="acc-bullets">
                      {item.bullets.map((b, i) => (
                        <li key={i}><span className="acc-check">✓</span><span>{b}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}