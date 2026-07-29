import React from 'react';
import ExpandingFeatureStrip from './ExpandingFeatureStrip';

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
  return (
    <section id="platform" className="efs-section scroll-reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Platform Infrastructure
          </div>
          <h2 className="section-title">
            Built for enterprise <span className="gradient-span">operations.</span>
          </h2>
          <p className="section-subtitle">
            Core features designed for high-scale voice automation.
          </p>
        </div>

        <ExpandingFeatureStrip items={platformFeatures} />

        <p className="efs-hint">Hover or tap a panel to open it</p>
      </div>
    </section>
  );
}