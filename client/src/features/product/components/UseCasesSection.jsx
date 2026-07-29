import React from 'react';
import FlipCard from './FlipCard';

/**
 * Use cases — 3D flip cards.
 *
 * Front: gradient visual, icon, title, subtitle.
 * Back: the four capability bullets plus a call to action.
 *
 * The visual uses the page's slate/orange gradient rather than stock
 * photography, so it stays consistent with the rest of the page. Swap
 * `flipx-visual` for an <img> if you'd rather use real imagery.
 */

const useCasesData = [
  {
    id: 'inbound',
    title: 'Inbound Receptionist & Call Steering',
    subtitle: 'Zero hold time inbound automation',
    icon: '📞',
    bullets: [
      'Answer 100% of incoming calls without queuing',
      'Automatically qualify requests and answer FAQs',
      'Warm-transfer complex cases to live agents',
      'Real-time speech-to-text intent detection'
    ]
  },
  {
    id: 'outbound',
    title: 'Outbound Sales & Reminder Campaigns',
    subtitle: 'Predictive dialing & lead qualification',
    icon: '🎯',
    bullets: [
      'Reach 10,000+ contacts simultaneously',
      'Qualify buying intent and book qualified meetings',
      'Answering machine detection under 300ms',
      'Timezone-aware compliant dialing windows'
    ]
  },
  {
    id: 'omnichannel',
    title: 'WhatsApp & SMS Handoff',
    subtitle: 'Hybrid voice + messaging workflows',
    icon: '💬',
    bullets: [
      'Send order links and PDFs over WhatsApp mid-call',
      '100% context synchronization across channels',
      'Unified dashboard for voice, SMS, and WhatsApp',
      'Automated follow-up message sequences'
    ]
  },
  {
    id: 'analytics',
    title: 'Real-Time Sentiment & CSAT',
    subtitle: 'AI conversation telemetry',
    icon: '📊',
    bullets: [
      'Monitor emotion and silence across 100% of calls',
      'Automated topic extraction and intent clustering',
      '98.5% transcription accuracy',
      'CSAT prediction score for every call'
    ]
  }
];

function Front({ item }) {
  return (
    <div className="uc-front">
      <div className="uc-visual">
        <span className="uc-orb" aria-hidden="true"></span>
        <span className="uc-ring" aria-hidden="true"></span>
        <span className="uc-icon" aria-hidden="true">{item.icon}</span>
      </div>

      <div className="uc-front-text">
        <h3 className="uc-title">{item.title}</h3>
        <p className="uc-sub">{item.subtitle}</p>
      </div>

      <span className="uc-hint">Tap to see capabilities</span>
    </div>
  );
}

function Back({ item }) {
  return (
    <div className="uc-back">
      <span className="uc-back-glow" aria-hidden="true"></span>
      <span className="uc-back-label">{item.title}</span>

      <ul className="uc-back-list">
        {item.bullets.map((line, i) => (
          <li key={i}>
            <span className="uc-tick" aria-hidden="true"></span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <span className="uc-back-btn">See it live</span>
    </div>
  );
}

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="uc-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Workflow Scenarios
          </div>
          <h2 className="section-title">
            See Conciva AI in <span className="gradient-span">action.</span>
          </h2>
          <p className="section-subtitle">
            Explore real-world scenario presets and capabilities.
          </p>
        </div>

        <div className="uc-grid">
          {useCasesData.map((item) => (
            <FlipCard
              key={item.id}
              label={`${item.title}. Show capabilities.`}
              frontContent={<Front item={item} />}
              backContent={<Back item={item} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}