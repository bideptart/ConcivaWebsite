import React from 'react';
import { Check, Minus, HelpCircle, Layers } from 'lucide-react';

export default function FeatureComparisonMatrix() {
  const matrixData = [
    {
      category: 'Core Telephony & PBX',
      features: [
        { name: 'WebRTC Softphone & Mobile Apps', starter: true, growth: true, enterprise: true, custom: true },
        { name: 'Included Virtual Numbers', starter: '2 Numbers', growth: '10 Numbers', enterprise: 'Unlimited', custom: 'Custom' },
        { name: 'HD Voice & Noise Suppression', starter: true, growth: true, enterprise: true, custom: true },
        { name: 'Multi-level IVR Auto Attendant', starter: 'Basic', growth: 'Advanced', enterprise: 'Unlimited Custom', custom: 'Unlimited Custom' },
        { name: 'Call Recording & Cloud Storage', starter: '7 Days', growth: '90 Days', enterprise: 'Unlimited', custom: 'Unlimited' },
        { name: 'International DID Coverage', starter: '30+ Countries', growth: '100+ Countries', enterprise: '190+ Countries', custom: '190+ Countries' },
      ],
    },
    {
      category: 'AI & Voice Intelligence',
      features: [
        { name: 'Real-time Live Call Transcription', starter: false, growth: true, enterprise: true, custom: true },
        { name: 'AI Sentiment & Emotion Analysis', starter: false, growth: true, enterprise: true, custom: true },
        { name: 'Automated Post-call Summaries', starter: false, growth: true, enterprise: true, custom: true },
        { name: 'Conversational AI Voice Bots', starter: false, growth: '500 min/mo', enterprise: 'Custom Model', custom: 'Custom API' },
      ],
    },
    {
      category: 'Integrations & Developer Platform',
      features: [
        { name: 'Salesforce & HubSpot CRM Sync', starter: false, growth: true, enterprise: true, custom: true },
        { name: 'Zapier & Make.com Webhooks', starter: true, growth: true, enterprise: true, custom: true },
        { name: 'REST Telephony APIs & SDKs', starter: 'Basic', growth: 'Full Access', enterprise: 'Full Access', custom: 'Dedicated Carrier API' },
        { name: 'Custom Call Flow Webhooks', starter: false, growth: true, enterprise: true, custom: true },
      ],
    },
    {
      category: 'Security, Compliance & SLAs',
      features: [
        { name: 'TLS & SRTP Voice Encryption', starter: true, growth: true, enterprise: true, custom: true },
        { name: 'SOC-2 Type II & ISO 27001', starter: true, growth: true, enterprise: true, custom: true },
        { name: 'HIPAA Compliance & BAA', starter: false, growth: true, enterprise: true, custom: true },
        { name: 'Uptime SLA Guarantee', starter: '99.9%', growth: '99.95%', enterprise: '99.999%', custom: 'Custom Carrier SLA' },
      ],
    },
    {
      category: 'Support & Onboarding',
      features: [
        { name: 'Support Channel', starter: 'Email', growth: '24/7 Live Chat', enterprise: 'Dedicated Manager', custom: '24/7 Hotline' },
        { name: 'Custom SIP Trunking Setup', starter: false, growth: false, enterprise: true, custom: true },
        { name: 'Custom Carrier Routing', starter: false, growth: false, enterprise: true, custom: true },
      ],
    },
  ];

  const renderVal = (val, isPopular = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <span className={`feature-value check ${isPopular ? 'highlight' : ''}`}>
          <Check size={18} />
        </span>
      ) : (
        <span className="feature-value cross">
          <Minus size={18} />
        </span>
      );
    }
    return <span className={`feature-value ${isPopular ? 'highlight' : ''}`}>{val}</span>;
  };

  return (
    <section className="matrix-section">
      <div className="section-header">
        <div className="section-badge">
          <Layers size={16} />
          <span>Detailed Feature Matrix</span>
        </div>
        <h2 className="section-title">
          Compare plans & <span className="gradient-text">capabilities</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to select the perfect plan for your business requirement.
        </p>
      </div>

      <div className="matrix-table-container">
        <table className="matrix-table">
          <thead>
            <tr>
              <th style={{ width: '28%' }}>Feature Breakdown</th>
              <th className="tier-col">Starter</th>
              <th className="tier-col popular-header">Growth & AI</th>
              <th className="tier-col">Enterprise</th>
              <th className="tier-col">Telecom API</th>
            </tr>
          </thead>
          <tbody>
            {matrixData.map((cat, cIdx) => (
              <React.Fragment key={cIdx}>
                <tr className="matrix-category-row">
                  <td colSpan={5}>{cat.category}</td>
                </tr>
                {cat.features.map((feat, fIdx) => (
                  <tr key={fIdx}>
                    <td className="feature-name">
                      <span>{feat.name}</span>
                      <HelpCircle size={14} className="feature-tooltip-icon" title={`Details regarding ${feat.name}`} />
                    </td>
                    <td className="tier-col">{renderVal(feat.starter)}</td>
                    <td className="tier-col" style={{ background: 'rgba(249, 115, 22, 0.03)' }}>
                      {renderVal(feat.growth, true)}
                    </td>
                    <td className="tier-col">{renderVal(feat.enterprise)}</td>
                    <td className="tier-col">{renderVal(feat.custom)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
