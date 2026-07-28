import React, { useState, useEffect } from 'react';

const platformFeatures = [
  {
    id: 'rag-sync',
    title: 'Sub-Second Voice RAG',
    subtitle: 'Retrieval Augmented Generation',
    icon: '🧠',
    bullets: [
      'Real-time indexing of Notion, Zendesk, and Google Drive',
      'Hallucination prevention with citation verifier',
      'Vector database search latency under 40ms',
      'Automatic refresh on document changes'
    ]
  },
  {
    id: 'api-tools',
    title: 'Real-Time API & Tool Calling',
    subtitle: 'Mid-conversation database lookups',
    icon: '🔗',
    bullets: [
      'REST, GraphQL, and Webhook action connectors',
      'OAuth2 authentication & API key security',
      'Parallel function execution for instant lookup',
      'Graceful retry handling during network lag'
    ]
  },
  {
    id: 'latency-tuner',
    title: 'Sub-200ms Latency Engine',
    subtitle: 'Voice activity detection & turn-taking',
    icon: '⚡',
    bullets: [
      'Barge-in / interruption threshold configuration',
      'Packet loss concealment over 4G/5G networks',
      'End-to-end latency waterfall telemetry',
      'Edge server routing for lowest round-trip ping'
    ]
  },
  {
    id: 'call-simulator',
    title: 'In-Browser Telephony Sandbox',
    subtitle: 'Test with live debug logs',
    icon: '🧪',
    bullets: [
      'Simulate background noise & bad signal conditions',
      'Live prompt inspection & variable watch window',
      'Scenario test suite runner with automated scoring',
      'One-click transcript export & audit trail'
    ]
  },
  {
    id: 'sip-trunking',
    title: 'Carrier-Grade SIP & BYOC',
    subtitle: 'Bring your own carrier',
    icon: '📡',
    bullets: [
      'Zero-downtime failover across carrier trunk lines',
      'Local DID provisioning in SA & 100+ countries',
      'E164 formatting & STIR/SHAKEN verification',
      'Warm call transfer to human agents'
    ]
  },
  {
    id: 'outbound-dialer',
    title: 'Smart Predictive Outbound Dialer',
    subtitle: 'High-throughput lead qualification',
    icon: '🎯',
    bullets: [
      'Answering machine detection (AMD) under 300ms',
      'Timezone-aware compliant dialing windows',
      'Dynamic caller ID rotation for pickup rate',
      'Automatic CRM sync (Salesforce, HubSpot, Zoho)'
    ]
  },
  {
    id: 'analytics',
    title: 'AI Conversation Analytics',
    subtitle: 'Sentiment trends & topic clustering',
    icon: '📊',
    bullets: [
      'Full-text transcript search & sentiment heatmaps',
      'Automatic key phrase & intent extraction',
      'CSAT prediction score for 100% of calls',
      'Custom webhook alerts for churn risk triggers'
    ]
  },
  {
    id: 'billing',
    title: 'Per-Second Transparent Billing',
    subtitle: 'Pay for exact seconds used',
    icon: '💰',
    bullets: [
      'VAT-compliant enterprise invoicing (ZAR)',
      'Per-agent spending limits and budget caps',
      'Real-time cost per call metric breakdowns',
      'POPIA, SOC2 Type II, and ISO 27001 compliant'
    ]
  }
];

export default function FeatureCategoryExplorer() {
  const [activeItem, setActiveItem] = useState('rag-sync');

  useEffect(() => {
    const observerCallback = (entries) => {
      if (window._fceManualLock) return;
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
    const cards = document.querySelectorAll('.acc-card[data-id][data-section="explorer"]');
    cards.forEach(el => observer.observe(el));
    return () => cards.forEach(el => observer.unobserve(el));
  }, []);

  const toggleItem = (id) => {
    setActiveItem(prev => (prev === id ? null : id));
    window._fceManualLock = true;
    setTimeout(() => { window._fceManualLock = false; }, 1200);
  };

  return (
    <section className="accordion-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Platform Infrastructure
          </div>
          <h2 className="section-title">Built for enterprise operations.</h2>
          <p className="section-subtitle">
            Core features designed for high-scale voice automation.
          </p>
        </div>

        <div className="accordion-stack">
          {platformFeatures.map((item) => {
            const isOpen = activeItem === item.id;
            return (
              <div
                key={item.id}
                data-id={item.id}
                data-section="explorer"
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