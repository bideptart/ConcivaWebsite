import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, HelpCircle, Layers, ChevronDown, ChevronUp } from 'lucide-react';

const MATRIX = [
  {
    category: 'Core Telephony & PBX',
    features: [
      { name: 'WebRTC Softphone & Mobile Apps',     starter: true,         growth: true,          enterprise: true,         api: true         },
      { name: 'Included Virtual Numbers',           starter: '2 numbers',  growth: '10 numbers',  enterprise: 'Unlimited',  api: 'Custom'     },
      { name: 'HD Voice & Noise Suppression',       starter: true,         growth: true,          enterprise: true,         api: true         },
      { name: 'Multi-level IVR Auto Attendant',     starter: 'Basic',      growth: 'Advanced',    enterprise: 'Unlimited',  api: 'Unlimited'  },
      { name: 'Call Recording & Cloud Storage',     starter: '7 days',     growth: '90 days',     enterprise: 'Unlimited',  api: 'Unlimited'  },
      { name: 'International DID Coverage',         starter: '30+ ctys',   growth: '100+ ctys',   enterprise: '190+ ctys',  api: '190+ ctys'  },
    ],
  },
  {
    category: 'AI & Voice Intelligence',
    features: [
      { name: 'Real-time Call Transcription',       starter: false,        growth: true,          enterprise: true,         api: true         },
      { name: 'AI Sentiment & Emotion Analysis',    starter: false,        growth: true,          enterprise: true,         api: true         },
      { name: 'Automated Post-call Summaries',      starter: false,        growth: true,          enterprise: true,         api: true         },
      { name: 'Conversational AI Voice Bots',       starter: false,        growth: '500 min/mo',  enterprise: 'Custom',     api: 'Custom API' },
    ],
  },
  {
    category: 'Integrations & Developer Platform',
    features: [
      { name: 'Salesforce & HubSpot CRM Sync',      starter: false,        growth: true,          enterprise: true,         api: true         },
      { name: 'Zapier & Make.com Webhooks',          starter: true,         growth: true,          enterprise: true,         api: true         },
      { name: 'REST Telephony APIs & SDKs',          starter: 'Basic',      growth: 'Full',        enterprise: 'Full',       api: 'Dedicated'  },
      { name: 'Custom Call Flow Webhooks',           starter: false,        growth: true,          enterprise: true,         api: true         },
    ],
  },
  {
    category: 'Security, Compliance & SLAs',
    features: [
      { name: 'TLS & SRTP Voice Encryption',        starter: true,         growth: true,          enterprise: true,         api: true         },
      { name: 'SOC-2 Type II & ISO 27001',           starter: true,         growth: true,          enterprise: true,         api: true         },
      { name: 'HIPAA Compliance & BAA',              starter: false,        growth: true,          enterprise: true,         api: true         },
      { name: 'Uptime SLA Guarantee',                starter: '99.9%',      growth: '99.95%',      enterprise: '99.999%',    api: 'Custom'     },
    ],
  },
  {
    category: 'Support & Onboarding',
    features: [
      { name: 'Support Channel',                     starter: 'Email',      growth: '24/7 Chat',   enterprise: 'Ded. Manager', api: '24/7 Hotline' },
      { name: 'Custom SIP Trunking Setup',           starter: false,        growth: false,         enterprise: true,         api: true         },
      { name: 'Custom Carrier Routing',              starter: false,        growth: false,         enterprise: true,         api: true         },
    ],
  },
];

const TIERS = [
  { key: 'starter',    label: 'Starter',     popular: false },
  { key: 'growth',     label: 'Growth & AI', popular: true  },
  { key: 'enterprise', label: 'Enterprise',  popular: false },
  { key: 'api',        label: 'Telecom API', popular: false },
];

function CellValue({ val, popular }) {
  if (val === true)  return (
    <span className={`feature-value check ${popular ? 'highlight' : ''}`}>
      <Check size={16} strokeWidth={2.5} />
    </span>
  );
  if (val === false) return (
    <span className="feature-value cross">
      <Minus size={16} strokeWidth={2} />
    </span>
  );
  return (
    <span className={`feature-value ${popular ? 'highlight' : ''}`}>
      {val}
    </span>
  );
}

/* Collapsible category rows */
function CategorySection({ cat, index }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Category header row */}
      <motion.tr
        className="matrix-category-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        style={{ cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setOpen(o => !o)}
      >
        <td colSpan={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>{cat.category}</span>
          <span style={{ color: '#F97316', opacity: 0.7 }}>
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </td>
      </motion.tr>

      {/* Feature rows */}
      {open && cat.features.map((feat, fi) => (
        <motion.tr
          key={fi}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: fi * 0.04, duration: 0.3 }}
        >
          <td>
            <span className="feature-name">
              {feat.name}
              <HelpCircle size={13} className="feature-tooltip-icon" title={feat.name} />
            </span>
          </td>
          {TIERS.map((tier) => (
            <td
              key={tier.key}
              className={`tier-col${tier.popular ? ' popular-col' : ''}`}
            >
              <CellValue val={feat[tier.key]} popular={tier.popular} />
            </td>
          ))}
        </motion.tr>
      ))}
    </>
  );
}

export default function FeatureComparisonMatrix() {
  return (
    <section className="matrix-section">
      <div className="section-header">
        <div className="section-badge">
          <Layers size={13} />
          Detailed Feature Matrix
        </div>
        <h2 className="section-title">
          Compare plans &amp; <span className="gradient-text">capabilities</span>
        </h2>
        <p className="section-subtitle">
          Every feature, every tier — side by side. Click a category row to collapse it.
        </p>
      </div>

      <div className="matrix-table-container">
        <table className="matrix-table">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Feature</th>
              {TIERS.map((tier) => (
                <th
                  key={tier.key}
                  className={`tier-col${tier.popular ? ' popular-header' : ''}`}
                >
                  {tier.label}
                  {tier.popular && (
                    <div style={{
                      fontSize: '0.65rem', color: '#F97316',
                      fontWeight: 700, marginTop: '2px', letterSpacing: '0.05em',
                    }}>
                      ★ POPULAR
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX.map((cat, ci) => (
              <CategorySection key={ci} cat={cat} index={ci} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
