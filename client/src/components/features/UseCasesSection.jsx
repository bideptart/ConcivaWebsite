import React, { useState, useEffect } from 'react';

const useCasesData = [
  {
    id: 'inbound',
    title: '📞 Inbound Receptionist & Call Steering',
    subtitle: 'Zero hold time inbound automation',
    bullets: [
      'Answer 100% of incoming calls without queuing',
      'Automatically qualify requests and answer FAQs',
      'Warm-transfer complex cases to live agents',
      'Real-time speech-to-text intent detection'
    ]
  },
  {
    id: 'outbound',
    title: '🎯 Outbound Sales & Reminder Campaigns',
    subtitle: 'Predictive dialing & lead qualification',
    bullets: [
      'Reach 10,000+ contacts simultaneously',
      'Qualify buying intent and book qualified meetings',
      'Answering machine detection under 300ms',
      'Timezone-aware compliant dialing windows'
    ]
  },
  {
    id: 'omnichannel',
    title: '💬 WhatsApp & SMS Handoff',
    subtitle: 'Hybrid voice + messaging workflows',
    bullets: [
      'Send order links and PDFs over WhatsApp mid-call',
      '100% context synchronization across channels',
      'Unified dashboard for voice, SMS, and WhatsApp',
      'Automated follow-up message sequences'
    ]
  },
  {
    id: 'analytics',
    title: '📊 Real-Time Sentiment & CSAT',
    subtitle: 'AI conversation telemetry',
    bullets: [
      'Monitor emotion and silence across 100% of calls',
      'Automated topic extraction and intent clustering',
      '98.5% transcription accuracy',
      'CSAT prediction score for every call'
    ]
  }
];

export default function UseCasesSection() {
  const [activeId, setActiveId] = useState('inbound');

  useEffect(() => {
    const observerCallback = (entries) => {
      if (window._ucManualLock) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) setActiveId(id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-25% 0px -35% 0px',
      threshold: 0.2
    });
    const cards = document.querySelectorAll('.acc-card[data-id][data-section="usecases"]');
    cards.forEach(el => observer.observe(el));
    return () => cards.forEach(el => observer.unobserve(el));
  }, []);

  const toggleItem = (id) => {
    setActiveId(prev => (prev === id ? null : id));
    window._ucManualLock = true;
    setTimeout(() => { window._ucManualLock = false; }, 1200);
  };

  return (
    <section className="accordion-section accordion-section--alt scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Workflow Scenarios
          </div>
          <h2 className="section-title">See LetsDial in Action</h2>
          <p className="section-subtitle">
            Explore real-world scenario presets and capabilities.
          </p>
        </div>

        <div className="accordion-stack">
          {useCasesData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                data-id={item.id}
                data-section="usecases"
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
                    <div className="acc-titles">
                      <h3 className="acc-title">{item.title}</h3>
                      <span className="acc-region">{item.subtitle}</span>
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