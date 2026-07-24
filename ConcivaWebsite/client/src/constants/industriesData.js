export const INDUSTRIES_DATA = [
  {
    id: 'healthcare',
    category: 'Healthcare & Life Sciences',
    title: 'HIPAA-Compliant Patient Engagement & Intelligent Care Routing',
    shortDesc: 'Automate appointment scheduling, emergency patient triage, and prescription reminders while maintaining strict HIPAA & HITECH compliance.',
    badge: 'HIPAA & HITRUST Certified',
    metric: '68%',
    metricLabel: 'Reduction in appointment no-shows',
    accentColor: '#10B981', // LetsDial Emerald Green
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Patient Triage', 'EHR Integration', 'Telehealth Voice', 'HIPAA Secure SMS'],
    highlights: [
      'Zero-latency automated IVR voice triage for urgent symptom routing',
      'Two-way EHR sync (Epic, Cerner, AthenaHealth) for real-time patient records',
      'Automated prescription refill notifications & appointment SMS check-ins',
      'End-to-end encrypted audio call recording with audit-ready log trails'
    ],
    useCases: [
      { name: 'Patient Triage & Intake', desc: 'AI assistant screens callers by symptom urgency before routing to nurses.' },
      { name: 'Appointment Sync & Reminders', desc: 'Automated 2-way SMS/Voice reminders reduce costly clinic open slots.' },
      { name: 'Virtual Care Hotlines', desc: 'Secure high-definition SIP channels connecting doctors to remote patients.' }
    ],
    integrations: ['Epic Systems', 'Cerner', 'AthenaHealth', 'Kareo', 'Salesforce Health Cloud'],
    certifications: ['HIPAA Compliant', 'HITECH Certified', 'SOC 2 Type II', 'ISO 27001']
  },
  {
    id: 'fintech',
    category: 'Financial Services & Banking',
    title: 'Bank-Grade Voice Authentication & Instant Fraud Alerts',
    shortDesc: 'Deliver frictionless phone banking, real-time transaction verification, and secure KYC workflows backed by PCI-DSS Level 1 infrastructure.',
    badge: 'PCI-DSS Level 1',
    metric: '4.2x',
    metricLabel: 'Faster fraud escalation & account lock',
    accentColor: '#F2701E', // LetsDial Signature Orange
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    tags: ['Voice Biometrics', 'PCI-DSS Compliance', '2FA SMS/Voice', 'Fraud Alerts'],
    highlights: [
      'Passive biometric voiceprint matching for instant identity verification',
      'PCI-compliant DTMF audio masking for secure credit card collection over phone',
      'Real-time automated transaction alert broadcasts via SMS & Voice OTP',
      'Encrypted audio archival with instant legal & compliance search taggers'
    ],
    useCases: [
      { name: 'Instant Fraud Prevention', desc: 'Auto-trigger IVR verification calls for high-value suspicious card transactions.' },
      { name: 'Biometric Phone Banking', desc: 'Authenticate callers in under 3 seconds using voice frequency footprinting.' },
      { name: 'Debt Recovery Workflows', desc: 'Compliant automated outbound campaigns with dynamic local caller ID.' }
    ],
    integrations: ['Salesforce Financial Services', 'Twilio API', 'Plaid', 'Stripe', 'Thought Machine'],
    certifications: ['PCI-DSS Level 1', 'GLBA Compliant', 'SOC 2 Type II', 'ISO 27001']
  },
  {
    id: 'ecommerce',
    category: 'E-Commerce & Retail',
    title: '24/7 Omnichannel Voice AI & High-Converting Order Hotlines',
    shortDesc: 'Scale support during flash sales, trigger automated SMS delivery updates, and turn phone inquiries into instant checkout opportunities.',
    badge: 'Omnichannel Automation',
    metric: '85%',
    metricLabel: 'First Contact Resolution rate',
    accentColor: '#F2701E', // LetsDial Primary Orange
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Order Tracking', 'WhatsApp API', 'Click-to-Call', 'Post-Purchase Care'],
    highlights: [
      'Natural AI Voice Bot handles order status, returns, and track & trace queries',
      'Seamless click-to-call links embedded directly in store checkout pages',
      'Proactive WhatsApp & SMS order status notifications with carrier integration',
      'Dynamic agent routing based on customer VIP tier and cart lifetime value'
    ],
    useCases: [
      { name: 'Order Status Concierge', desc: 'AI instantly looks up Shopify orders by incoming phone number.' },
      { name: 'Flash Sale Traffic Spikes', desc: 'Auto-scale from 10 to 10,000 concurrent calls with zero dropped connections.' },
      { name: 'Post-Purchase Feedback', desc: 'Automated CSAT voice surveys sent immediately after order delivery.' }
    ],
    integrations: ['Shopify Plus', 'Magento', 'Zendesk', 'Gorgias', 'Klaviyo'],
    certifications: ['GDPR Compliant', 'CCPA Ready', 'PCI-DSS Certified', 'SOC 2 Type II']
  },
  {
    id: 'realestate',
    category: 'Real Estate & Property Management',
    title: 'Instant Lead Capture & 24/7 Maintenance Hotline Dispatch',
    shortDesc: 'Never miss a property buyer or tenant emergency. Route calls by property location and dispatch maintenance workers automatically.',
    badge: 'Instant Dispatch',
    metric: '92%',
    metricLabel: 'Faster response to high-intent buyers',
    accentColor: '#06B6D4', // LetsDial Cyan
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Property Hotlines', 'Agent Round-Robin', 'Emergency Dispatch', 'Tenant SMS'],
    highlights: [
      'Smart virtual phone numbers assigned per listing to track marketing ROI',
      'Simultaneous multi-agent ringing ensuring listing calls get answered in < 5s',
      'After-hours tenant emergency IVR with auto-dispatch to on-call contractors',
      'Automated SMS tour confirmations and location directions'
    ],
    useCases: [
      { name: 'Listing Lead Capture', desc: 'Instantly connect buyers to listing agent or trigger SMS property brochure.' },
      { name: 'Emergency Tenant Hotline', desc: '24/7 AI triages urgent leaks or heating issues to duty technicians.' },
      { name: 'Automated Showing Reminders', desc: 'Reduce no-shows for open houses with automated 2-way SMS check-ins.' }
    ],
    integrations: ['AppFolio', 'Yardi', 'Buildium', 'HubSpot CRM', 'Salesforce'],
    certifications: ['SOC 2 Type II', 'TCPA Compliant', 'ISO 27001']
  },
  {
    id: 'logistics',
    category: 'Logistics & Supply Chain',
    title: 'Driver Dispatch Automation & Multi-Nation Fleet Alerts',
    shortDesc: 'Unify communications across drivers, dispatch hubs, and end customers with global voice routing, SMS alerts, and IVR updates.',
    badge: 'Global Fleet Sync',
    metric: '40%',
    metricLabel: 'Reduction in driver check-in call volume',
    accentColor: '#10B981', // LetsDial Emerald Green
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Driver Hotline', 'ETA Broadcasts', 'Number Masking', 'Dispatch Sync'],
    highlights: [
      'Number masking protects driver and customer privacy during delivery calls',
      'Automated IVR driver status updates keep logistics managers informed',
      'Emergency broadcast SMS to all regional drivers during weather disruptions',
      'Multi-language voice prompts supporting global fleet workforces'
    ],
    useCases: [
      { name: 'Private Driver-Customer Calls', desc: 'Masked phone numbers allow direct contact without revealing personal numbers.' },
      { name: 'Automated Delivery ETA Calls', desc: 'Outbound voice bot confirms customer availability before delivery attempts.' },
      { name: 'Warehouse Gate Check-in', desc: 'IVR self-service for arriving truckers reduces dock congestion.' }
    ],
    integrations: ['Samsara', 'Geotab', 'Project44', 'ServiceNow', 'SAP Logistics'],
    certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant']
  },
  {
    id: 'education',
    category: 'Education & EdTech',
    title: 'Campus Emergency Broadcasts & Automated Admissions Line',
    shortDesc: 'Streamline student inquiries, manage high-volume admissions call seasons, and launch instant emergency voice/SMS safety broadcasts.',
    badge: 'Campus Ready',
    metric: '100k+',
    metricLabel: 'Concurrent emergency SMS notifications sent/sec',
    accentColor: '#F2701E', // LetsDial Signature Orange
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    tags: ['Emergency Alerts', 'Admissions IVR', 'Parent Broadcast', 'EdTech Voice'],
    highlights: [
      'Mass emergency broadcast engine delivers voice and SMS alerts in seconds',
      'Smart admissions IVR answers tuition, deadline, and prerequisite questions',
      'Automated parent notification for attendance and academic performance',
      'Virtual office hours phone lines with custom queue routing for professors'
    ],
    useCases: [
      { name: 'High-Volume Admissions Season', desc: 'Self-service IVR resolves common application questions without staff overhead.' },
      { name: 'Campus Safety Alerts', desc: 'One-click emergency alert sends SMS and automated calls to all students.' },
      { name: 'Parent-Teacher Communications', desc: 'Secure localized calling numbers for international student families.' }
    ],
    integrations: ['Canvas', 'Blackboard', 'Ellucian Banner', 'Salesforce Education', 'Workday'],
    certifications: ['FERPA Compliant', 'COPPA Compliant', 'SOC 2 Type II']
  },
  {
    id: 'saas',
    category: 'SaaS & Technology',
    title: 'Global Customer Support Lines & Multi-Tenant SIP Infrastructure',
    shortDesc: 'Embed voice calling directly into your app, provision multi-country numbers in milliseconds, and automate SLA-based escalation.',
    badge: '99.999% SLA Uptime',
    metric: '99.999%',
    metricLabel: 'Carrier-grade uptime SLA guarantee',
    accentColor: '#06B6D4', // LetsDial Cyan
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    tags: ['WebRTC SDK', 'Global Numbers', 'SIP Trunking', 'AI Sentiment Analysis'],
    highlights: [
      'In-app WebRTC calling SDK for frictionless browser and mobile voice chat',
      'Instant API provisioning of local and toll-free numbers in 100+ countries',
      'Real-time call transcriptions & AI sentiment analysis piped to your CRM',
      'Intelligent tier-3 tech support escalation rules based on customer SLA'
    ],
    useCases: [
      { name: 'In-App WebRTC Support', desc: 'Customers call support with 1 click directly inside your web application.' },
      { name: 'Global Number Management', desc: 'API-driven virtual phone number purchasing for global expansion.' },
      { name: 'AI Call Analytics', desc: 'Extract sentiment scores, topic tags, and action items from every support call.' }
    ],
    integrations: ['Zendesk', 'Intercom', 'HubSpot', 'Jira', 'Slack', 'Zapier'],
    certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'HIPAA Ready']
  }
];

export const CAPABILITIES = [
  { title: 'Conversational Voice AI', desc: 'Human-like voice bots capable of understanding context, interruptions, and multi-turn industry dialogues.' },
  { title: 'Omnichannel Messaging', desc: 'Unify SMS, WhatsApp, Voice, and WebRTC channels into a single synchronized customer record.' },
  { title: 'Enterprise Compliance & Audit', desc: 'HIPAA, PCI-DSS Level 1, FERPA, and SOC 2 Type II compliant storage with automated PII redaction.' },
  { title: 'Intelligent Skills Routing', desc: 'Dynamically route callers based on VIP tier, language preference, CRM history, or agent availability.' },
  { title: 'Real-Time Voice Analytics', desc: 'Live call transcription, sentiment analysis, key keyword alerts, and automated call summary notes.' },
  { title: 'Global Carrier Infrastructure', desc: 'Direct Tier-1 telco connections in 100+ countries with sub-50ms latency and 99.999% SLA uptime.' }
];

export const FAQS = [
  { q: 'How does Conciva ensure industry-specific compliance like HIPAA and PCI-DSS?', a: 'Conciva is architected with security-first principles. For Healthcare, we sign Business Associate Agreements (BAAs) and encrypt all audio and transcripts in transit (TLS 1.3) and at rest (AES-256). For Financial Services, our DTMF audio masking ensures sensitive credit card details never touch your agents or storage systems.' },
  { q: 'Can Conciva integrate with our existing CRM, EHR, or PBX phone system?', a: 'Yes! Conciva offers 50+ pre-built native integrations (Salesforce, Epic, Shopify, Zendesk, AppFolio) as well as open REST APIs and Webhooks. We support direct SIP trunk peering with Cisco, Avaya, Microsoft Teams, and legacy PBX hardware.' },
  { q: 'How fast can our business deploy an industry-tailored solution?', a: 'Most standard industry workflows (e.g., automated appointment reminders, after-hours emergency IVR, or order tracking bots) can be deployed in under 48 hours using our no-code workflow builder.' },
  { q: 'What level of call quality and uptime SLA do you guarantee?', a: 'Conciva guarantees a 99.999% network uptime SLA backed by redundant multi-cloud carrier pop-nodes around the globe. Our adaptive WebRTC and SIP codecs automatically adjust to network fluctuations.' },
  { q: 'Do you support international phone numbers and multi-language AI bots?', a: 'Absolutely. Conciva provides instant provisioning of local, national, and toll-free virtual phone numbers across 100+ countries with support for over 50 languages.' }
];
