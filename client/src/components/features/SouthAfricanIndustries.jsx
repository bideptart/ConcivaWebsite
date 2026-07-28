import React, { useState, useEffect } from 'react';

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
  const [activeItem, setActiveItem] = useState('finance-banking');

  useEffect(() => {
    const observerCallback = (entries) => {
      if (window._saManualLock) return;
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
    const cards = document.querySelectorAll('.acc-card[data-id][data-section="sa-industries"]');
    cards.forEach(el => observer.observe(el));
    return () => cards.forEach(el => observer.unobserve(el));
  }, []);

  const toggleItem = (id) => {
    setActiveItem(prev => (prev === id ? null : id));
    window._saManualLock = true;
    setTimeout(() => { window._saManualLock = false; }, 1200);
  };

  return (
    <section id="build-setup" className="accordion-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Industry Solutions
          </div>
          <h2 className="section-title">Built for every South African industry.</h2>
          <p className="section-subtitle">
            Bespoke voice AI workflows tailored for South African enterprises.
          </p>
        </div>

        <div className="accordion-stack">
          {saIndustriesData.map((item) => {
            const isOpen = activeItem === item.id;
            return (
              <div key={item.id} data-id={item.id} data-section="sa-industries" className={`acc-card ${isOpen ? 'is-active' : ''}`}>
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
                      <span className="acc-region">{item.region}</span>
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