import React from 'react';

/**
 * Industries — cursor spotlight grid.
 *
 * Interaction: a radial highlight tracks the pointer across each card and the
 * bullet list slides up on hover. On touch, everything is shown expanded
 * (see the hover media query in features.css).
 */

const saIndustriesData = [
  {
    id: 'finance-banking',
    title: 'Financial Services & Banking',
    region: 'Johannesburg & Sandton',
    icon: '💳',
    badge: 'FICA Compliant',
    bullets: [
      'POPIA & FICA automated pre-screening voice flows',
      'Sub-second core banking database query handoff',
      'Real-time collection & payment arrangement calls',
      'Multilingual code-switching (isiZulu, English, Afrikaans)'
    ]
  },
  {
    id: 'healthcare-clinics',
    title: 'Healthcare & Private Clinics',
    region: 'Cape Town & Durban',
    icon: '🏥',
    badge: 'Medical Scheme Ready',
    bullets: [
      'Instant Discovery Health & scheme membership verification',
      '24/7 emergency triage transfer to human duty nurses',
      'Automated SMS & WhatsApp appointment confirmations',
      'Prescription refill request triage'
    ]
  },
  {
    id: 'ecommerce-logistics',
    title: 'E-Commerce & Courier Logistics',
    region: 'Gauteng & Western Cape',
    icon: '🛍️',
    badge: 'Waybill Sync',
    bullets: [
      'Instant COD address & phone confirmation before dispatch',
      'Real-time Courier Guy, Pargo, and RAM waybill voice status',
      'RTO prevention via automated verification',
      'Dynamic WhatsApp delivery pin dropping'
    ]
  },
  {
    id: 'tourism-lodges',
    title: 'Tourism & Safari Lodges',
    region: 'Kruger & Garden Route',
    icon: '🦁',
    badge: '24/7 Concierge',
    bullets: [
      'Multilingual guest support (English, Afrikaans, German, French)',
      'Game drive & spa reservation calendar sync',
      'Automated airport shuttle & transfer dispatch alerts',
      'After-hours emergency guest assistance helpline'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property',
    region: 'Pretoria & Cape Peninsula',
    icon: '🏢',
    badge: 'Property24 Sync',
    bullets: [
      '5-second callback SLA on Property24 & Private Property leads',
      'Automated agent calendar viewing slot booking',
      'Tenant emergency maintenance triage',
      'Rental pre-qualification screening'
    ]
  }
];

export default function SouthAfricanIndustries() {
  const trackPointer = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="industries" className="spot-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Industry Solutions
          </div>
          <h2 className="section-title">
            Built for every South African <span className="gradient-span">industry.</span>
          </h2>
          <p className="section-subtitle">
            Bespoke voice AI workflows tailored for South African enterprises.
          </p>
        </div>

        <div className="spot-grid">
          {saIndustriesData.map((item) => (
            <article key={item.id} className="spot-card" onMouseMove={trackPointer}>
              <span className="spot-light" aria-hidden="true"></span>

              <div className="spot-face">
                <div className="spot-top">
                  <span className="spot-icon" aria-hidden="true">{item.icon}</span>
                  <span className="spot-badge">{item.badge}</span>
                </div>

                <h3 className="spot-title">{item.title}</h3>
                <p className="spot-region">{item.region}</p>

                <ul className="spot-list">
                  {item.bullets.map((line, i) => (
                    <li key={i} style={{ transitionDelay: `${0.04 * i}s` }}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}