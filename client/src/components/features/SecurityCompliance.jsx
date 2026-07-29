import React, { useState, useRef, useEffect } from 'react';

/**
 * Security & compliance — hover-open accordion.
 *
 * Moving the cursor onto a row opens it; no click required. Click and keyboard
 * focus do the same thing so touch and keyboard users are not stranded.
 * Bullets inside the open row reveal one after another rather than all at once.
 */

const complianceData = [
  {
    id: 'popia-fica',
    title: 'POPIA & FICA Compliant',
    icon: '🛡️',
    badge: 'SA Privacy Law',
    region: 'South African privacy regulation',
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
    region: 'Caller identity signing',
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
    region: 'Independently audited controls',
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
    region: 'International data handling',
    bullets: [
      'Zero-log voice streaming for medical and legal calls',
      'Right-to-be-forgotten API for instant data deletion',
      'HIPAA Business Associate Agreement (BAA) supported'
    ]
  }
];

export default function SecurityCompliance() {
  const [activeId, setActiveId] = useState(complianceData[0].id);
  const leaveRef = useRef(null);

  useEffect(() => {
    return () => {
      if (leaveRef.current) clearTimeout(leaveRef.current);
    };
  }, []);

  // Opening on hover means the row under the cursor wins immediately.
  const open = (id) => {
    if (leaveRef.current) clearTimeout(leaveRef.current);
    setActiveId(id);
  };

  // Clicking an already-open row closes it; otherwise it opens.
  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const onKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section id="security" className="comply-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Enterprise Security
          </div>
          <h2 className="section-title">
            Security &amp; <span className="gradient-span">compliance.</span>
          </h2>
          <p className="section-subtitle">
            Built to meet South African POPIA data privacy laws and global telecom standards.
          </p>
        </div>

        <div className="comply-stack">
          {complianceData.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`comply-row${isOpen ? ' is-open' : ''}`}
                onMouseEnter={() => open(item.id)}
              >
                <button
                  type="button"
                  className="comply-head"
                  aria-expanded={isOpen}
                  aria-controls={`comply-${item.id}-panel`}
                  id={`comply-${item.id}-head`}
                  onClick={() => toggle(item.id)}
                  onFocus={() => open(item.id)}
                  onKeyDown={(e) => onKeyDown(e, item.id)}
                >
                  <span className="comply-head-left">
                    <span className="comply-icon" aria-hidden="true">{item.icon}</span>
                    <span className="comply-titles">
                      <span className="comply-title-row">
                        <span className="comply-name">{item.title}</span>
                        <span className="comply-badge">{item.badge}</span>
                      </span>
                      <span className="comply-region">{item.region}</span>
                    </span>
                  </span>

                  <span className="comply-chev" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.4"
                         strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  className="comply-panel"
                  id={`comply-${item.id}-panel`}
                  role="region"
                  aria-labelledby={`comply-${item.id}-head`}
                >
                  <div className="comply-panel-inner">
                    <ul className="comply-bullets">
                      {item.bullets.map((line, i) => (
                        <li key={i} style={{ transitionDelay: `${0.12 + i * 0.09}s` }}>
                          <span className="comply-tick" aria-hidden="true"></span>
                          <span className="comply-line">{line}</span>
                        </li>
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