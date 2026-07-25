export const INDUSTRIES_DATA = [
  {
    id: 'healthcare',
    title: 'Healthcare & Clinical Operations',
    category: 'Healthcare',
    shortDesc: 'Automate patient appointment scheduling, prescription refills, and post-discharge follow-ups with HIPAA-compliant AI voice agents.',
    bgImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    metricVal: '85%',
    metricDesc: 'Reduction in patient call wait times',
    tags: ['HIPAA Compliant', 'EHR Integration', 'Multi-lingual', '24/7 Scheduling'],
    highlights: [
      'Seamless integration with Epic, Cerner, and AthenaHealth',
      'Automated appointment reminders via call & SMS',
      'Emergency triage routing with instant escalation'
    ],
    badge: 'HIPAA CERTIFIED',
    useCases: [
      { name: 'Patient Booking', desc: 'Direct sync with clinic calendar slots.' },
      { name: 'Rx Refill Request', desc: 'Automated collection of pharmacy & dosage details.' },
      { name: 'Pre-Op Reminders', desc: 'Custom pre-procedure voice instruction delivery.' }
    ],
    integrations: ['Epic', 'Cerner', 'AthenaHealth', 'Twilio', 'Salesforce Health']
  },
  {
    id: 'finance',
    title: 'Banking & Financial Services',
    category: 'Finance',
    shortDesc: 'Handle balance inquiries, payment reminders, and fraud alerts securely with SOC2 Type II certified voice automation.',
    bgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    metricVal: '99.9%',
    metricDesc: 'Voice biometric auth accuracy',
    tags: ['SOC 2 Type II', 'PCI-DSS', 'Fraud Prevention', 'Core Banking Sync'],
    highlights: [
      'PCI-DSS compliant payment processing over phone',
      'Real-time voice verification and authentication',
      'Automate loan application status check calls'
    ],
    badge: 'SOC2 TYPE II',
    useCases: [
      { name: 'Account Balance Check', desc: 'Instant identification via voice biometric OTP.' },
      { name: 'Collections & Reminders', desc: 'Polite, automated payment arrangement calls.' },
      { name: 'Fraud Verification', desc: 'Immediate outbound alert calls on suspicious transactions.' }
    ],
    integrations: ['Plaid', 'Stripe', 'Finacle', 'Salesforce', 'Thought Machine']
  },
  {
    id: 'retail',
    title: 'E-Commerce & Retail Logistics',
    category: 'Retail',
    shortDesc: 'Manage order tracking, returns processing, and VIP customer inquiries effortlessly during peak holiday surges.',
    bgImage: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=800&q=80',
    metricVal: '4.8x',
    metricDesc: 'Faster order resolution rate',
    tags: ['Shopify Sync', 'Order Tracking', 'Returns AI', 'Omnichannel'],
    highlights: [
      'Live order lookup connected directly to Shopify/Shopify Plus',
      'Automated return label generation & SMS dispatch',
      'Personalized upsell & re-order phone recommendations'
    ],
    badge: 'RETAIL READY',
    useCases: [
      { name: 'Order Status Inquiry', desc: 'Provides real-time courier tracking updates.' },
      { name: 'Return Authorization', desc: 'Qualifies return requests and emails shipping labels.' },
      { name: 'Loyalty Desk', desc: 'Handles VIP member rewards and tier status queries.' }
    ],
    integrations: ['Shopify', 'WooCommerce', 'Zendesk', 'Gorgias', 'FedEx API']
  },
  {
    id: 'realestate',
    title: 'Real Estate & Property Management',
    category: 'Real Estate',
    shortDesc: 'Qualify inbound buyer leads instantly, schedule property tours, and handle urgent maintenance dispatch calls.',
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    metricVal: '100%',
    metricDesc: 'Inbound lead response under 60s',
    tags: ['Lead Qualification', 'Tour Booking', 'Tenant Desk', 'CRM Sync'],
    highlights: [
      'Instant 24/7 lead response so no buyer call is missed',
      'Automated calendar sync for open house & agent tours',
      'Emergency maintenance triage for property managers'
    ],
    badge: '24/7 LEAD CAPTURE',
    useCases: [
      { name: 'Buyer Qualification', desc: 'Asks budget, timeline, and location preferences.' },
      { name: 'Showing Scheduler', desc: 'Books agent calendar based on property availability.' },
      { name: 'Maintenance Hotline', desc: 'Routes urgent leak/HVAC issues to local vendors.' }
    ],
    integrations: ['Follow Up Boss', 'Buildium', 'AppFolio', 'Salesforce', 'HubSpot']
  }
];

export const CAPABILITIES = [
  {
    title: 'Multi-lingual Voice Synthesis',
    desc: 'Native fluency in 10+ Indian regional languages and 30+ global dialects with natural emotion, accent adaptation, and sub-300ms response latency.'
  },
  {
    title: 'Carrier-Grade Telephony Engine',
    desc: 'High-availability SIP trunking with 99.99% uptime SLA, automatic failover, local phone number provisioning, and crystal-clear audio codecs.'
  },
  {
    title: 'Enterprise Compliance & Security',
    desc: 'Built-in SOC 2 Type II, HIPAA, PCI-DSS, and GDPR compliance with end-to-end media encryption and customizable PII redaction.'
  },
  {
    title: 'Bi-Directional CRM & API Sync',
    desc: 'Pre-built connectors for Salesforce, HubSpot, Zendesk, and custom Webhooks to automatically update call transcripts, recordings, and lead status.'
  },
  {
    title: 'Real-Time Sentiment Analytics',
    desc: 'Instant intent detection, sentiment scoring, and live call transfer to human agents with full context when high friction is detected.'
  },
  {
    title: 'Custom Workflow Builder',
    desc: 'Drag-and-drop visual logic designer to customize call flows, conditional branching, dynamic variable injection, and automated follow-ups.'
  }
];

export const FAQS = [
  {
    q: 'How fast can Conciva AI be deployed for our industry?',
    a: 'Most standard workflows (like appointment booking or lead qualification) can be configured and live in under 5 minutes using our pre-tuned templates. Complex enterprise integrations with custom CRMs or EHRs typically take 1-3 business days.'
  },
  {
    q: 'Is Conciva AI HIPAA and SOC 2 compliant?',
    a: 'Yes! All voice data, transcriptions, and call logs are processed with enterprise-grade encryption (TLS 1.3 in transit, AES-256 at rest). We execute Business Associate Agreements (BAAs) for healthcare clients.'
  },
  {
    q: 'Can the AI voice agent transfer calls to a human agent?',
    a: 'Absolutely. You can set up smart escalation rules based on caller sentiment, specific requests, or keywords. The call is seamlessly handed over to your team alongside a live summary transcript.'
  },
  {
    q: 'Which languages and accents are supported?',
    a: 'Conciva AI supports over 30 languages globally, with specialized multi-lingual models for 10+ Indian regional languages including Hindi, Tamil, Telugu, Kannada, Bengali, and Gujarati.'
  }
];
