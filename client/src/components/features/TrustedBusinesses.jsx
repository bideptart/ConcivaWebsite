import React, { useState } from 'react';

const trustedBusinessData = [
  {
    id: 'enterprise-telecoms',
    title: 'Enterprise Contact Centers & Telecoms',
    subtitle: '100,000+ daily calls managed',
    icon: '⚡',
    tag: 'Enterprise',
    features: [
      'SIP Trunking failover across major South African carriers',
      'Dynamic intent recognition with live transcript scoring',
      'Warm call handoff with real-time agent context injection'
    ]
  },
  {
    id: 'financial-insurance',
    title: 'Financial Institutions & Insurance',
    subtitle: 'Bank-grade POPIA & FSCA compliance',
    icon: '🛡️',
    tag: 'POPIA Ready',
    features: [
      'Encrypted voice session logs with zero raw audio storage',
      'Automated premium reminder calls and payment integration',
      'Bi-directional sync with Salesforce, HubSpot & REST APIs'
    ]
  },
  {
    id: 'automotive-dealerships',
    title: 'Automotive Dealerships & Service Centers',
    subtitle: 'Test drives & maintenance reminders',
    icon: '🚗',
    tag: 'Sales Growth',
    features: [
      'Automated test drive calendar booking into dealership CRM',
      'Vehicle service reminder dispatches via SMS and WhatsApp',
      '24/7 roadside assistance intake and location triage'
    ]
  },
  {
    id: 'legal-advisory',
    title: 'Legal & Professional Advisory',
    subtitle: 'Confidential client intake & scheduling',
    icon: '⚖️',
    tag: 'Confidential',
    features: [
      'Strict confidentiality guardrails and taboo topic filtering',
      'Direct integration with Google Workspace & Outlook calendars',
      'Automated intake summary emails sent to duty attorneys'
    ]
  }
];

export default function TrustedBusinesses() {
  const [flippedIds, setFlippedIds] = useState(new Set());

  const toggleFlip = (id) => {
    setFlippedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip(id);
    }
  };

  return (
    <section id="trusted-businesses" className="flip-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Enterprise Trust
          </div>
          <h2 className="section-title">Trusted by South African businesses.</h2>
          <p className="section-subtitle">
            How leading organizations leverage LetsDial for seamless voice automation.
          </p>
        </div>

        <div className="flip-grid">
          {trustedBusinessData.map((item) => {
            const isFlipped = flippedIds.has(item.id);
            return (
              <div
                key={item.id}
                className="flip-card"
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${item.title}, ${isFlipped ? 'showing capabilities, press to show overview' : 'press to show capabilities'}`}
                onClick={() => toggleFlip(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
              >
                <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  <div className="flip-card-face flip-card-front">
                    <span className="flip-card-icon">{item.icon}</span>
                    <h3 className="flip-card-title">{item.title}</h3>
                    <span className="flip-card-subtitle">{item.subtitle}</span>
                    <span className="acc-badge acc-badge--green flip-card-tag">{item.tag}</span>
                    <span className="flip-card-hint">Tap to see capabilities</span>
                  </div>
                  <div className="flip-card-face flip-card-back">
                    <span className="flip-card-back-label">{item.title}</span>
                    <ul className="acc-bullets flip-card-bullets">
                      {item.features.map((f, i) => (
                        <li key={i}><span className="acc-check">✓</span><span>{f}</span></li>
                      ))}
                    </ul>
                    <span className="flip-card-hint">Tap to flip back</span>
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