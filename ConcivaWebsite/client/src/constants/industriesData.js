export const INDUSTRIES_DATA = [
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    category: 'Healthcare',
    shortDesc: 'Automate appointment scheduling, patient follow-ups, prescription reminders, and emergency triage with HIPAA-compliant AI agents.',
    icon: '🏥',
    badge: 'HIPAA Compliant',
    metrics: [
      { label: 'No-show reduction', value: '45%' },
      { label: 'Avg response time', value: '< 2s' },
      { label: 'Patients handled/day', value: '10,000+' }
    ],
    highlights: [
      '24/7 OPD & Doctor appointment booking',
      'Automated lab test result notifications',
      'Multi-lingual symptom triage'
    ],
    fullDesc: 'Conciva AI transforms hospital and clinic communications by handling thousands of patient calls simultaneously. From scheduling appointments with specific doctors to sending pre-procedure instructions, our voice agents operate around the clock with empathetic, human-sounding voice models.',
    useCases: ['Appointment Booking', 'Prescription Refills', 'Post-Op Check-ins', 'Insurance Verification'],
    compliance: ['HIPAA Compliant', 'ISO 27001 Certified', 'End-to-End Encryption']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property',
    category: 'Real Estate',
    shortDesc: 'Qualify buyer inquiries, schedule property site visits, and follow up with leads instantly across phone calls and WhatsApp.',
    icon: '🏢',
    badge: 'High Conversion',
    metrics: [
      { label: 'Lead qualification', value: '3x Faster' },
      { label: 'Site visit bookings', value: '+65%' },
      { label: 'Cost per lead', value: '-40%' }
    ],
    highlights: [
      'Instant callback on Facebook & Google ads',
      'Automated site visit calendar sync',
      'Budget & location preference matching'
    ],
    fullDesc: 'Never lose a property buyer to slow response times. Conciva AI calls back leads within 5 seconds of form submission, qualifies their budget, desired location, and timeline, and seamlessly books site visits directly onto your agents calendar.',
    useCases: ['Ad Lead Instant Callback', 'Site Visit Scheduling', 'Tenant Maintenance Requests', 'Property Inquiry Triage'],
    compliance: ['RERA Workflow Ready', 'CRM Auto Sync', '256-bit SSL Security']
  },
  {
    id: 'finance-banking',
    title: 'Finance & BFSI',
    category: 'Finance',
    shortDesc: 'Drive loan EMI collection reminders, credit card application qualification, and fraud alert verifications with Bank-Grade security.',
    icon: '💳',
    badge: 'Bank-Grade Security',
    metrics: [
      { label: 'Collection rate', value: '+38%' },
      { label: 'Cost reduction', value: '70%' },
      { label: 'Security SLA', value: '99.99%' }
    ],
    highlights: [
      'Personalized payment reminder calls',
      'Instant KYC pre-screening & document collection',
      'Interactive voice payment gateways'
    ],
    fullDesc: 'Empower financial institutions to handle high-volume debt collection, credit card lead qualification, and customer support without scaling human headcount. Built with strict PCI-DSS and data residency compliance.',
    useCases: ['EMI Payment Reminders', 'Loan Application Qualification', 'Card Activation Support', 'Fraud Alert Confirmations'],
    compliance: ['PCI-DSS Level 1', 'SOC 2 Type II', 'RBI Data Localization Compliant']
  },
  {
    id: 'ecommerce-retail',
    title: 'E-Commerce & Retail',
    category: 'E-Commerce',
    shortDesc: 'Automate Cash-on-Delivery (COD) order confirmations, order tracking inquiries, and return/exchange logistics calls.',
    icon: '🛍️',
    badge: 'RTO Reduction',
    metrics: [
      { label: 'RTO reduction', value: '32%' },
      { label: 'Order verification', value: 'Instant' },
      { label: 'CSAT Score', value: '4.8/5' }
    ],
    highlights: [
      'Instant COD address & order confirmation',
      'Real-time shipment tracking via voice',
      'Automated abandon cart recovery calls'
    ],
    fullDesc: 'Slash Return-To-Origin (RTO) losses by verifying COD orders via interactive voice calls right after checkout. Answer customer queries on delivery timelines in 10+ languages effortlessly.',
    useCases: ['COD Order Verification', 'Shipment Tracking Inquiries', 'Return & Refund Processing', 'Cart Abandonment Follow-up'],
    compliance: ['Shopify & WooCommerce Sync', 'GDPR Compliant', 'Encrypted PII Storage']
  },
  {
    id: 'education-edtech',
    title: 'Education & EdTech',
    category: 'Education',
    shortDesc: 'Handle course inquiry calls, entrance exam counseling, fee payment follow-ups, and student onboarding at scale.',
    icon: '🎓',
    badge: 'Scalable Admissions',
    metrics: [
      { label: 'Admissions growth', value: '+50%' },
      { label: 'Counseling capacity', value: '100x' },
      { label: 'Parent CSAT', value: '96%' }
    ],
    highlights: [
      '24/7 admissions helpline voice assistant',
      'Automated entrance test reminder calls',
      'Multi-lingual counseling in regional languages'
    ],
    fullDesc: 'Transform student admissions by engaging prospective applicants immediately. Answer queries about curriculum, fees, placement records, and campus facilities while scheduling 1-on-1 counselor meetings.',
    useCases: ['Inbound Admission Helpline', 'Counseling Session Booking', 'Fee Reminder Notifications', 'Alumni Engagement Calls'],
    compliance: ['FERPA Compliant', 'Role-Based Access Control', 'Multi-tenant Isolation']
  },
  {
    id: 'logistics-hospitality',
    title: 'Logistics & Hospitality',
    category: 'Logistics',
    shortDesc: 'Streamline fleet dispatch calls, hotel reservation booking, table reservations, and guest check-in concierges.',
    icon: '🏨',
    badge: '24/7 Operations',
    metrics: [
      { label: 'Booking conversion', value: '+40%' },
      { label: 'Call resolution', value: '90%' },
      { label: 'Cost savings', value: '60%' }
    ],
    highlights: [
      'Room & table reservation voice bot',
      'Driver delivery status & location updates',
      'Guest feedback collection post checkout'
    ],
    fullDesc: 'Deliver 5-star guest experiences with AI virtual concierges that handle hotel reservations, room service requests, and delivery coordination flawlessly in multiple languages.',
    useCases: ['Hotel Room Reservation', 'Table Booking Concierge', 'Delivery Driver Dispatch', 'Guest Feedback Surveys'],
    compliance: ['Opera & PMS Integrations', 'Global Telecom Compliance', 'Encrypted Voice Logs']
  }
];

export const CAPABILITIES = [
  {
    title: 'Sub-300ms Ultra Latency',
    desc: 'Powered by custom neural streaming models, delivering realistic, uninterrupted human conversation without awkward pauses.'
  },
  {
    title: '10+ Indian Languages & Accents',
    desc: 'Fluent in Hindi, Hinglish, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati, Punjabi, and English with natural accents.'
  },
  {
    title: 'Enterprise CRM & API Sync',
    desc: 'Out-of-the-box integrations with Salesforce, HubSpot, Zoho, LeadSquared, Shopify, and custom Webhooks.'
  },
  {
    title: 'Custom Voice Cloning',
    desc: 'Create bespoke brand voice personas or choose from dozens of pre-tuned industry-specific voice templates.'
  },
  {
    title: 'Autonomous Action Execution',
    desc: 'Executes real-time database lookups, calendar bookings, OTP verifications, and SMS/WhatsApp message dispatches during live calls.'
  },
  {
    title: 'Carrier-Grade Infrastructure',
    desc: 'Built on dedicated telephony trunks ensuring 99.99% uptime, crystal clear audio, and zero jitter during peak volumes.'
  }
];

export const FAQS = [
  {
    q: 'How fast can we launch Conciva AI for our industry?',
    a: 'You can go live in under 5 minutes! Simply select a pre-built industry template, customize your phone number and workflow, and start taking or making calls instantly.'
  },
  {
    q: 'Can Conciva AI integrate with our existing CRM and database?',
    a: 'Yes. Conciva AI natively connects with Salesforce, HubSpot, Zoho, LeadSquared, Google Calendar, and any REST API / Webhook so customer data updates in real-time.'
  },
  {
    q: 'What languages and accents are supported?',
    a: 'We support over 10 Indian languages including Hindi, Hinglish, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati, Punjabi, as well as Global English.'
  },
  {
    q: 'Is customer voice data secure and compliant?',
    a: 'Absolutely. All voice data is encrypted at rest (AES-256) and in transit (TLS 1.3). We adhere strictly to HIPAA, SOC 2 Type II, ISO 27001, and local data protection regulations.'
  },
  {
    q: 'How does the AI handle complex customer edge cases?',
    a: 'When the AI encounters an edge case beyond its configured scope, it gracefully transfers the live call to a human agent along with a real-time transcript summary.'
  }
];
