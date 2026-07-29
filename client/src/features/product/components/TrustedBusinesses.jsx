import React from 'react';

/**
 * Trusted businesses — bento grid with pointer tilt.
 *
 * Interaction: cards tilt in 3D toward the pointer and a glow tracks the
 * cursor along the border. The grid is deliberately asymmetric so the first
 * tile reads as the anchor rather than four equal boxes.
 *
 * Replaces the previous hover-flip cards, whose back face was unreachable
 * on touch. Nothing here is hidden behind an interaction.
 */

const trustedBusinessData = [
  {
    id: 'enterprise-telecoms',
    title: 'Enterprise Contact Centers & Telecoms',
    subtitle: '100,000+ daily calls managed',
    icon: '⚡',
    description: 'SIP Trunking failover across major South African carriers, dynamic intent recognition with live transcript scoring, and warm call handoff with real-time agent context injection.',
    buttonText: 'View Capabilities'
  },
  {
    id: 'financial-insurance',
    title: 'Financial Institutions & Insurance',
    subtitle: 'Bank-grade POPIA & FSCA compliance',
    icon: '🛡️',
    description: 'Encrypted voice session logs with zero raw audio storage, automated premium reminder calls, and bi-directional sync with Salesforce, HubSpot & REST APIs.',
    buttonText: 'View Capabilities'
  },
  {
    id: 'automotive-dealerships',
    title: 'Automotive Dealerships & Service Centers',
    subtitle: 'Test drives & maintenance reminders',
    icon: '🚗',
    description: 'Automated test drive booking into dealership CRM, vehicle service reminders via SMS/WhatsApp, and 24/7 roadside assistance intake and location triage.',
    buttonText: 'View Capabilities'
  },
  {
    id: 'legal-advisory',
    title: 'Legal & Professional Advisory',
    subtitle: 'Confidential client intake & scheduling',
    icon: '⚖️',
    description: 'Strict confidentiality guardrails and taboo topic filtering, direct integration with Google Workspace & Outlook, and automated intake summaries to duty attorneys.',
    buttonText: 'View Capabilities'
  }
];

export default function TrustedBusinesses() {
  const tilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    card.style.setProperty('--tilt-x', `${(0.5 - py) * 7}deg`);
    card.style.setProperty('--tilt-y', `${(px - 0.5) * 9}deg`);
    card.style.setProperty('--glow-x', `${px * 100}%`);
    card.style.setProperty('--glow-y', `${py * 100}%`);
  };

  const reset = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <section id="trusted-businesses" className="bento-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Enterprise Trust
          </div>
          <h2 className="section-title">
            Trusted by South African <span className="gradient-span">businesses.</span>
          </h2>
          <p className="section-subtitle">
            How leading organizations use Conciva AI for seamless voice automation.
          </p>
        </div>

        <div className="bento-grid">
          {trustedBusinessData.map((item, idx) => (
            <article
              key={item.id}
              className={`bento-tile${idx === 0 ? ' bento-tile--lead' : ''}`}
              onMouseMove={tilt}
              onMouseLeave={reset}
            >
              <span className="bento-glow" aria-hidden="true"></span>
              <div className="bento-inner">
                <span className="bento-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="bento-title">{item.title}</h3>
                <span className="bento-metric">{item.subtitle}</span>
                <p className="bento-copy">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}