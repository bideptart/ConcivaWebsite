import React from 'react';
import FlippingIndustryCard from './FlippingIndustryCard';

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
  return (
    <section id="trusted-businesses" className="fc-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Enterprise Trust
          </div>
          <h2 className="section-title">Trusted by South African <span className="gradient-span">businesses.</span></h2>
          <p className="section-subtitle">
            How leading organizations leverage LetsDial for seamless voice automation.
          </p>
        </div>

        <div className="fc-grid">
          {trustedBusinessData.map((item) => (
            <FlippingIndustryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}