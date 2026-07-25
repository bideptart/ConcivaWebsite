import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/features.css';

// SVG Icon components for high performance and zero missing dependencies
const Icons = {
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 7.92c0 .13.001.261.001.393a7.5 7.5 0 0 0-7.92 7.92c0 .13-.001.261-.001.393a7.5 7.5 0 0 0-7.92-7.92c0-.13-.001-.261-.001-.393a7.5 7.5 0 0 0 7.92-7.92z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Zap: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Languages: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
    </svg>
  ),
  Headphones: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  ChevronDown: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Mic: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  ),
  Bot: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  ),
  Database: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Activity: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 14 21 10 3 6 12 2 12" />
    </svg>
  ),
  Share2: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  Lock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  MessageSquare: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Globe: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
};

// Feature Explorer Categories Data
const featureCategories = [
  {
    id: 'build-setup',
    num: 1,
    title: 'Build & Setup',
    shortDesc: 'Spin up AI agents with custom voice signatures and personalities in seconds.',
    icon: Icons.Bot,
    items: [
      {
        id: 'multi-agent',
        name: 'Multi-Agent Fleet Management',
        summary: 'Provision and orchestrate unlimited specialized AI agents under one centralized enterprise organization.',
        bullets: [
          'Role-based agent isolation and workspace scoping',
          'Instant agent duplication and staging environments',
          'Custom brand voice personas and accent profiles',
          'Dynamic multi-language auto-switching'
        ],
        codeSnippet: `const agent = await conciva.agents.create({\n  name: "Sales Concierge",\n  voice: "maya-hi-en",\n  temperature: 0.2,\n  fallbackNumber: "+18005550199"\n});`
      },
      {
        id: 'voice-selection',
        name: 'Neural Voice & Tone Tuning',
        summary: 'Choose from 25+ human-like neural voices with full control over speech rate, emotion, and pauses.',
        bullets: [
          'Ultra-realistic Indian & Global accent library',
          'Prosody, pitch, and pacing fine-tuning controls',
          'Instant voice clone creation from 30s audio sample',
          'Bilingual code-switching (Hinglish, Tamil-English, etc.)'
        ],
        codeSnippet: `agent.setVoiceTone({\n  speed: 1.05,\n  warmth: "high",\n  interruptibility: "medium_strict"\n});`
      },
      {
        id: 'custom-prompts',
        name: 'Dynamic Prompt & Persona Canvas',
        summary: 'Define clear agent boundaries, guardrails, and conversation flows using markdown or visual nodes.',
        bullets: [
          'Strict compliance & taboo topic filtering',
          'Context variable injection from CRM metadata',
          'Sentiment-aware conversation steering',
          'Automatic escalation to human agent on frustration'
        ],
        codeSnippet: `// System Guardrail Prompt\nSYSTEM: "You are Conciva Support. Never promise refunds > $500 without manager approval."`
      }
    ]
  },
  {
    id: 'train-knowledge',
    num: 2,
    title: 'Train & Knowledge Base',
    shortDesc: 'Connect docs, PDFs, databases, and APIs for dynamic ground-truth voice answers.',
    icon: Icons.Database,
    items: [
      {
        id: 'rag-sync',
        name: 'Sub-Second Voice RAG (Retrieval Augmented Generation)',
        summary: 'Index website content, PDFs, and internal wikis so voice agents give instant factual answers.',
        bullets: [
          'Real-time indexing of Notion, Zendesk, and Google Drive',
          'Hallucination prevention with citation verifier',
          'Vector database search latency under 40ms',
          'Automatic auto-refresh on document changes'
        ],
        codeSnippet: `await conciva.knowledgeBase.upload({\n  sourceUrl: "https://docs.yourcompany.com/faq",\n  chunkSize: 512,\n  syncInterval: "1h"\n});`
      },
      {
        id: 'api-webhooks',
        name: 'Real-Time API & Tool Calling',
        summary: 'Allow agents to check order status, book calendar slots, and query databases mid-conversation.',
        bullets: [
          'REST, GraphQL, and Webhook action connectors',
          'OAuth2 authentication & API key security',
          'Parallel function execution for instant lookup',
          'Graceful retry handling during network lag'
        ],
        codeSnippet: `agent.registerTool("checkOrderStatus", async ({ orderId }) => {\n  return db.orders.find({ id: orderId });\n});`
      }
    ]
  },
  {
    id: 'test-playground',
    num: 3,
    title: 'Test & Voice Playground',
    shortDesc: 'Simulate live telephony calls in browser and tune latency before deploying to production.',
    icon: Icons.Activity,
    items: [
      {
        id: 'latency-tuner',
        name: 'Sub-200ms Latency Optimization Engine',
        summary: 'Fine-tune acoustic voice activity detection (VAD) and speech turn-taking for fluid, natural dialogue.',
        bullets: [
          'Barge-in / interruption threshold configuration',
          'Packet loss concealment over 4G/5G mobile networks',
          'End-to-end latency waterfall telemetry',
          'Edge server routing for lowest round-trip ping'
        ],
        codeSnippet: `conciva.telemetry.on("turnLatency", (metric) => {\n  console.log(\`STT: \${metric.stt}ms | LLM: \${metric.llm}ms | TTS: \${metric.tts}ms\`);\n});`
      },
      {
        id: 'call-simulator',
        name: 'In-Browser Telephony Inspector & Sandbox',
        summary: 'Test agent responses using browser microphone with live turn-by-turn debug logs.',
        bullets: [
          'Simulate background noise & bad signal conditions',
          'Live prompt inspection & variable watch window',
          'Scenario test suite runner with automated scoring',
          'One-click transcript export & audit trail'
        ],
        codeSnippet: `const simulation = await conciva.sandbox.testCall({\n  scenario: "Refund Request with Upset Customer",\n  assertSentiment: "de-escalated"\n});`
      }
    ]
  },
  {
    id: 'operate-dispatch',
    num: 4,
    title: 'Operate & Telephony Dispatch',
    shortDesc: 'Connect SIP trunks, toll-free numbers, and run automated outbound campaigns.',
    icon: Icons.Share2,
    items: [
      {
        id: 'sip-trunking',
        name: 'Carrier-Grade Native SIP & BYOC (Bring Your Own Carrier)',
        summary: 'Plug your existing Twilio, Vonage, Airtel, or Tata SIP credentials directly into Conciva.',
        bullets: [
          'Zero-downtime failover across carrier trunk lines',
          'Local DID phone number provisioning in 100+ countries',
          'E164 phone formatting & STIR/SHAKEN caller verification',
          'Warm call transfer to human call center agents'
        ],
        codeSnippet: `await conciva.sip.connectTrunk({\n  host: "sip.airtel.in",\n  username: "conciva_user",\n  authSecret: process.env.SIP_SECRET\n});`
      },
      {
        id: 'outbound-dialer',
        name: 'Smart Predictive Outbound Dialer',
        summary: 'Run high-throughput lead qualification and appointment reminder outbound phone campaigns.',
        bullets: [
          'Answering machine detection (AMD) under 300ms',
          'Timezone-aware compliant dialing windows',
          'Dynamic caller ID rotation to maximize pickup rate',
          'Automatic CRM sync (Salesforce, HubSpot, Zoho)'
        ],
        codeSnippet: `const campaign = await conciva.campaigns.start({\n  name: "Q3 Renewal Followups",\n  leadsListId: "lead_88392",\n  maxConcurrentCalls: 50\n});`
      }
    ]
  },
  {
    id: 'analytics-security',
    num: 5,
    title: 'Analytics, Security & Billing',
    shortDesc: 'Deep conversation analytics, TRAI compliance, and per-second usage billing.',
    icon: Icons.Lock,
    items: [
      {
        id: 'realtime-analytics',
        name: 'AI Conversation Analytics & Topic Clustering',
        summary: 'Uncover why customers are calling with automated transcript summaries and sentiment trends.',
        bullets: [
          'Full-text transcript search & sentiment heatmaps',
          'Automatic key phrase & intent extraction',
          'CSAT prediction score for 100% of calls',
          'Custom webhook alerts for churn risk triggers'
        ],
        codeSnippet: `conciva.analytics.on("callFinished", ({ summary, csatScore, intent }) => {\n  crm.updateLead({ lastCallSummary: summary, csat: csatScore });\n});`
      },
      {
        id: 'per-second-billing',
        name: 'Granular Per-Second Transparent Billing',
        summary: 'Never pay for unused minutes. Pay strictly for exact seconds of voice connection with zero vendor markup.',
        bullets: [
          'GST-compliant enterprise invoicing',
          'Per-agent spending limits and hard budget caps',
          'Real-time cost per call metric breakdowns',
          'SOC2 Type II, ISO 27001, and TRAI compliant'
        ],
        codeSnippet: `// Standard Usage Metric\nCost = (ConnectedTimeInSeconds / 60) * $0.035`
      }
    ]
  }
];

export default function Features() {
  const [activeVoice, setActiveVoice] = useState('maya');
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('build-setup');
  const [expandedItems, setExpandedItems] = useState({ 'multi-agent': true, 'rag-sync': true });
  const [activeTab, setActiveTab] = useState('inbound');
  const [toastMessage, setToastMessage] = useState('');

  // Audio wave toggle
  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    showToast(isPlayingAudio ? 'Audio paused' : 'Simulating live AI voice stream...');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const toggleAccordion = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Scroll spy listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      featureCategories.forEach(cat => {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveCategory(cat.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter features based on search
  const filteredCategories = featureCategories.map(cat => {
    const matchingItems = cat.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bullets.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return { ...cat, items: matchingItems };
  }).filter(cat => cat.items.length > 0);

  return (
    <div className="features-page">
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 100,
          background: '#0F172A',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '9999px',
          fontSize: '13px',
          fontWeight: '600',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Icons.Sparkles /> {toastMessage}
        </div>
      )}



      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="animate-fade-in">
            <div className="badge-tag">
              <span className="pulse-dot"></span>
              Features Overview
            </div>
            <h1 className="hero-title">
              Everything your <span className="gradient-span">voice agent</span> needs to scale.
            </h1>
            <p className="hero-subtitle">
              From drag-and-drop workflow builders to real-time voice latency tuning — every enterprise tool built for modern contact centers.
            </p>

            <div className="hero-cta-group">
              <Link to="/contact" className="btn-primary" onClick={() => showToast('Launching agent builder...')}>
                Build your first agent
                <span className="btn-icon-circle">
                  <Icons.ArrowRight />
                </span>
              </Link>

              <Link to="/contact" className="btn-secondary">
                <Icons.Phone />
                Talk to Sales
              </Link>
            </div>

            <div className="hero-feature-pills">
              <span className="pill-item">
                <span className="pill-icon"><Icons.Languages /></span> 25+ Global Languages
              </span>
              <span className="pill-item">
                <span className="pill-icon"><Icons.Headphones /></span> 24/7 Always On
              </span>
              <span className="pill-item">
                <span className="pill-icon"><Icons.Zap /></span> Sub-200ms Latency
              </span>
              <span className="pill-item">
                <span className="pill-icon"><Icons.ShieldCheck /></span> STIR / TRAI Compliant
              </span>
            </div>
          </div>

          {/* Right Visual — Letsdial-style Mobile Phone + Live Transcription */}
          <div className="hero-widget-wrapper animate-fade-in">
            <div className="mobile-hero-layout">
              {/* iPhone Frame */}
              <div className="phone-frame">
                <div className="phone-inner">
                  {/* Ambient glow layers */}
                  <div className="phone-glow phone-glow--top" aria-hidden="true"></div>
                  <div className="phone-glow phone-glow--bottom" aria-hidden="true"></div>

                  {/* Status Bar */}
                  <div className="phone-status-bar">
                    <span className="status-time">9:41</span>
                    <div className="dynamic-island">
                      <span className="di-left">
                        <Icons.Sparkles />
                        <span className="di-timer">{isPlayingAudio ? '04:12' : '00:00'}</span>
                      </span>
                      <span className="di-live-dot"></span>
                    </div>
                    <span className="status-icons">
                      {/* Signal */}
                      <svg viewBox="0 0 18 12" className="status-signal" fill="currentColor" aria-hidden="true">
                        <rect x="0" y="8" width="3" height="4" rx="0.75" />
                        <rect x="5" y="6" width="3" height="6" rx="0.75" />
                        <rect x="10" y="3" width="3" height="9" rx="0.75" />
                        <rect x="15" y="0" width="3" height="12" rx="0.75" />
                      </svg>
                      {/* Wifi */}
                      <svg viewBox="0 0 24 24" className="status-wifi" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" />
                      </svg>
                      {/* Battery */}
                      <svg viewBox="0 0 25 12" className="status-battery" fill="none" aria-hidden="true">
                        <rect x="0.75" y="0.75" width="20.5" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                        <rect x="2.25" y="2.25" width="17.5" height="7.5" rx="1.5" fill="currentColor" />
                        <path d="M23 4.5v3a1.5 1.5 0 0 0 0-3z" fill="currentColor" opacity="0.4" />
                      </svg>
                    </span>
                  </div>

                  {/* Call Content */}
                  <div className="phone-call-content">
                    <span className="call-label">
                      {activeVoice === 'maya' ? 'Support Request' : activeVoice === 'rohan' ? 'Sales Inquiry' : 'VIP Concierge'}
                    </span>

                    {/* Caller Avatar */}
                    <div className="phone-avatar-wrapper">
                      <span className="phone-avatar-halo" aria-hidden="true"></span>
                      <span className="phone-avatar-ring">
                        <span className="phone-avatar">
                          <span className="phone-avatar-shine" aria-hidden="true"></span>
                          <span className="phone-avatar-letter">
                            {activeVoice === 'maya' ? 'M' : activeVoice === 'rohan' ? 'R' : 'E'}
                          </span>
                        </span>
                      </span>
                      <span className="phone-avatar-ai-badge">
                        <Icons.Sparkles />
                      </span>
                    </div>

                    <div className="phone-caller-name">
                      {activeVoice === 'maya' ? 'Alex Johnson' : activeVoice === 'rohan' ? 'Rohan Mehra' : 'Elena Torres'}
                    </div>
                    <p className="phone-caller-number">+1 (415) 555-0142</p>
                    <span className="phone-caller-type">mobile</span>

                    {/* Waveform */}
                    <div className="phone-wave-wrap">
                      <div className="phone-wave">
                        {[22, 36, 44, 30, 22, 17, 9, 21, 37, 36, 37, 31, 12, 12, 21, 25, 38, 43, 28, 20, 17, 10, 24, 39].map((h, i) => (
                          <span
                            key={i}
                            className="phone-wave-bar"
                            style={{
                              height: isPlayingAudio ? `${h}%` : '12%',
                              animationDelay: `${i * 0.06}s`
                            }}
                          ></span>
                        ))}
                      </div>
                    </div>

                    {/* Live Timer Pill */}
                    <span className="phone-live-pill">
                      <span className="phone-live-dot"></span>
                      <span className="phone-live-time">{isPlayingAudio ? '04:12' : '00:00'}</span>
                    </span>
                  </div>

                  {/* Call Action Grid */}
                  <div className="phone-actions">
                    <div className="phone-actions-grid">
                      <button className="phone-action-btn" onClick={toggleAudio}>
                        <span className="action-circle">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19v3" /><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" /><path d="M16.95 16.95A7 7 0 0 1 5 12v-2" /><path d="M18.89 13.23A7 7 0 0 0 19 12v-2" /><path d="m2 2 20 20" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
                          </svg>
                        </span>
                        <span className="action-label">mute</span>
                      </button>
                      <button className="phone-action-btn">
                        <span className="action-circle">
                          <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
                            <circle cx="3" cy="3" r="1.6" /><circle cx="9" cy="3" r="1.6" /><circle cx="15" cy="3" r="1.6" />
                            <circle cx="3" cy="9" r="1.6" /><circle cx="9" cy="9" r="1.6" /><circle cx="15" cy="9" r="1.6" />
                            <circle cx="3" cy="15" r="1.6" /><circle cx="9" cy="15" r="1.6" /><circle cx="15" cy="15" r="1.6" />
                          </svg>
                        </span>
                        <span className="action-label">keypad</span>
                      </button>
                      <button className="phone-action-btn">
                        <span className="action-circle">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                          </svg>
                        </span>
                        <span className="action-label">speaker</span>
                      </button>
                      <button className="phone-action-btn">
                        <span className="action-circle">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" />
                          </svg>
                        </span>
                        <span className="action-label">add call</span>
                      </button>
                      <button className="phone-action-btn">
                        <span className="action-circle">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" />
                          </svg>
                        </span>
                        <span className="action-label">video</span>
                      </button>
                      <button className="phone-action-btn">
                        <span className="action-circle">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <span className="action-label">contacts</span>
                      </button>
                    </div>

                    {/* End Call */}
                    <button className="phone-end-call" onClick={toggleAudio}>
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                      </svg>
                    </button>
                  </div>

                  {/* Home Indicator */}
                  <div className="phone-home-bar">
                    <span></span>
                  </div>

                  {/* Glass overlay */}
                  <div className="phone-glass-overlay" aria-hidden="true"></div>
                </div>

                {/* Physical buttons */}
                <span className="phone-btn phone-btn--silent" aria-hidden="true"></span>
                <span className="phone-btn phone-btn--volup" aria-hidden="true"></span>
                <span className="phone-btn phone-btn--voldown" aria-hidden="true"></span>
                <span className="phone-btn phone-btn--power" aria-hidden="true"></span>
              </div>

              {/* Live Transcription Panel (beside phone) */}
              <div className="transcript-panel">
                <div className="transcript-panel-header">
                  <div className="transcript-panel-dot-group">
                    <span className="tp-live-dot"></span>
                    <span className="tp-live-dot"></span>
                  </div>
                  <span className="transcript-panel-title">// live transcription</span>
                  <span className="transcript-panel-lang">en-US · auto</span>
                </div>

                <div className="transcript-ai-badge">
                  <Icons.Sparkles />
                  <span>Picked up by AI</span>
                </div>

                <div className="transcript-lines">
                  <div className="transcript-line">
                    <span className="transcript-role transcript-role--caller">Caller</span>
                    <p>"Hi, I'd like to reschedule my appointment for tomorrow afternoon."</p>
                  </div>
                  <div className="transcript-line">
                    <span className="transcript-role transcript-role--ai">Conciva AI</span>
                    <p>"Of course! I have 2:00 PM and 4:30 PM available tomorrow. Which works best for you?"</p>
                  </div>
                  <div className="transcript-line">
                    <span className="transcript-role transcript-role--caller">Caller</span>
                    <p>"4:30 works great."</p>
                  </div>
                  <div className="transcript-line transcript-line--typing">
                    <span className="transcript-role transcript-role--ai">Conciva AI</span>
                    <span className="typing-dots">
                      <span></span><span></span><span></span>
                    </span>
                    <span className="typing-label">transcribing…</span>
                  </div>
                </div>

                <div className="transcript-panel-footer">
                  <p><strong>Every word.</strong> Searchable. In your CRM.</p>
                  <span className="transcript-footer-tag">live · 0.4s lag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main Features Explorer Section */}
      <section className="features-explorer-section">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">
              <span className="pulse-dot"></span>
              What's Included
            </div>
            <h2 className="section-title">Built for enterprise front desks, not basic chatbots.</h2>
            <p className="section-subtitle">
              From carrier setup to per-second billing — explore every feature designed to automate customer interactions with human-level empathy.
            </p>
          </div>

          {/* Usability Enhancement: Live Search & Filter Bar */}
          <div className="features-filter-bar">
            <div className="search-input-wrapper">
              <span className="search-icon"><Icons.Search /></span>
              <input
                type="text"
                className="search-input"
                placeholder="Search features (e.g. RAG, SIP, Latency, Billing, WhatsApp)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && (
              <button className="filter-btn active" onClick={() => setSearchTerm('')}>
                Clear Search
              </button>
            )}
          </div>

          {/* Two-Column Explorer Layout */}
          <div className="explorer-layout">
            {/* Sticky Navigation Sidebar */}
            <aside className="sticky-sidebar">
              <div className="sidebar-heading">Feature Categories</div>
              <ul className="sidebar-nav-list">
                {featureCategories.map(cat => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      className={`sidebar-nav-item ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span className="nav-num">{cat.num}</span>
                      <div>
                        <div className="nav-title">{cat.title}</div>
                        <div className="nav-desc">{cat.shortDesc}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Feature Cards Column */}
            <div>
              {(() => {
                const categoriesToRender = searchTerm
                  ? filteredCategories
                  : filteredCategories.filter(cat => cat.id === activeCategory);

                if (categoriesToRender.length === 0) {
                  return (
                    <div style={{ padding: '40px', textAlign: 'center', background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                      <h3>No features found matching "{searchTerm}"</h3>
                      <p style={{ color: '#64748B', marginTop: '8px' }}>Try searching for keywords like "voice", "SIP", "RAG", or "billing".</p>
                      <button className="btn-primary" style={{ marginTop: '16px' }} onClick={() => setSearchTerm('')}>
                        Reset Search Filter
                      </button>
                    </div>
                  );
                }

                return categoriesToRender.map(cat => {
                  const CategoryIcon = cat.icon;
                  return (
                    <section id={cat.id} key={cat.id} className="category-section">
                      <div className="category-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ color: '#F97316' }}><CategoryIcon /></div>
                          <h3 className="category-title">{cat.title}</h3>
                        </div>
                        <span className="category-count">{cat.items.length} Features</span>
                      </div>
                      <p className="category-desc">{cat.shortDesc}</p>

                      <div className="features-accordion-stack">
                        {cat.items.map(item => {
                          const isExpanded = !!expandedItems[item.id];
                          return (
                            <div key={item.id} className={`feature-card ${isExpanded ? 'expanded' : ''}`}>
                              <div className="feature-card-header" onClick={() => toggleAccordion(item.id)}>
                                <div className="feature-icon-box">
                                  <CategoryIcon />
                                </div>
                                <div className="feature-info">
                                  <h4 className="feature-name">
                                    {item.name}
                                  </h4>
                                  <p className="feature-summary">{item.summary}</p>
                                </div>
                                <div className="chevron-icon">
                                  <Icons.ChevronDown />
                                </div>
                              </div>

                              {isExpanded && (
                                <div className="feature-card-body">
                                  <div className="feature-bullet-list">
                                    {item.bullets.map((bullet, idx) => (
                                      <div key={idx} className="bullet-item">
                                        <span className="check-icon"><Icons.Check /></span>
                                        <span>{bullet}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {item.codeSnippet && (
                                    <div className="code-preview-block">
                                      <pre><code>{item.codeSnippet}</code></pre>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="usecases-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">See Conciva in Action Across Key Use Cases</h2>
            <p className="section-subtitle">Switch between interactive solution presets to explore workflow automation.</p>
          </div>

          <div className="tab-buttons-container">
            <button className={`tab-btn ${activeTab === 'inbound' ? 'active' : ''}`} onClick={() => setActiveTab('inbound')}>
              📞 Inbound Receptionist
            </button>
            <button className={`tab-btn ${activeTab === 'outbound' ? 'active' : ''}`} onClick={() => setActiveTab('outbound')}>
              🎯 Outbound Sales Leads
            </button>
            <button className={`tab-btn ${activeTab === 'omnichannel' ? 'active' : ''}`} onClick={() => setActiveTab('omnichannel')}>
              💬 Omnichannel Messaging
            </button>
            <button className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
              📊 Voice Analytics
            </button>
          </div>

          <div className="tab-content-card">
            {activeTab === 'inbound' && (
              <>
                <div className="tab-text">
                  <h3>24/7 AI Receptionist & Call Steering</h3>
                  <p>Answer 100% of incoming business phone calls without holding callers. Automatically qualify requests, answer FAQs from docs, and warm transfer complex cases to human representatives.</p>
                  <div className="tab-metrics">
                    <div className="metric-box">
                      <div className="metric-num">0 sec</div>
                      <div className="metric-label">Hold Time for Callers</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-num">84%</div>
                      <div className="metric-label">First-Call Resolution</div>
                    </div>
                  </div>
                </div>
                <div style={{ background: '#0F172A', padding: '24px', borderRadius: '16px', color: '#fff' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#F97316', marginBottom: '12px' }}>INBOUND CALL FLOW DEBUGGER</div>
                  <div style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                    [00:00.12] 📞 Call Received from +1 (415) 555-0142<br />
                    [00:00.24] 🎙️ Speech-to-Text: "I want to modify my appointment"<br />
                    [00:00.38] 🧠 Intent Detected: [APPOINTMENT_RESCHEDULE]<br />
                    [00:00.52] ⚡ API Call: Google Calendar API → Slots Available [14:00, 16:30]<br />
                    [00:00.78] 🗣️ TTS Generated: "I have 2:00 PM or 4:30 PM today available. Which works best?"
                  </div>
                </div>
              </>
            )}

            {activeTab === 'outbound' && (
              <>
                <div className="tab-text">
                  <h3>High-Velocity Outbound Sales & Reminders</h3>
                  <p>Reach 10,000+ contacts simultaneously. Conciva dials leads, qualifies buying intent, and automatically books qualified meetings into your sales team calendar.</p>
                  <div className="tab-metrics">
                    <div className="metric-box">
                      <div className="metric-num">4.2x</div>
                      <div className="metric-label">More Connect Rates</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-num">&lt;300ms</div>
                      <div className="metric-label">AMD Detection Speed</div>
                    </div>
                  </div>
                </div>
                <div style={{ background: '#0F172A', padding: '24px', borderRadius: '16px', color: '#fff' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#F97316', marginBottom: '12px' }}>CAMPAIGN TELEMETRY</div>
                  <div style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                    🎯 Campaign Status: ACTIVE<br />
                    📞 Dialing Speed: 50 concurrent calls<br />
                    ✅ Connect Rate: 68.4%<br />
                    🤖 Voicemails Skipped: 312<br />
                    📅 Meetings Booked Today: 47
                  </div>
                </div>
              </>
            )}

            {activeTab === 'omnichannel' && (
              <>
                <div className="tab-text">
                  <h3>Seamless Voice + WhatsApp + SMS Handoff</h3>
                  <p>Send instant order links, invoice PDFs, or appointment directions directly over WhatsApp while maintaining active voice conversation on the call.</p>
                  <div className="tab-metrics">
                    <div className="metric-box">
                      <div className="metric-num">100%</div>
                      <div className="metric-label">Unified Context Sync</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-num">5 Channels</div>
                      <div className="metric-label">In Single Dashboard</div>
                    </div>
                  </div>
                </div>
                <div style={{ background: '#0F172A', padding: '24px', borderRadius: '16px', color: '#fff' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#10B981', marginBottom: '12px' }}>WHATSAPP HYBRID TRIGGER</div>
                  <div style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                    💬 Customer: "Can you message me the payment link?"<br />
                    🤖 Conciva Agent: Triggering WhatsApp API...<br />
                    ✅ Message Sent via Meta Cloud API<br />
                    📲 Delivered: Invoice #9910 with Razorpay Link
                  </div>
                </div>
              </>
            )}

            {activeTab === 'analytics' && (
              <>
                <div className="tab-text">
                  <h3>Real-Time Sentiment & CSAT Scoring</h3>
                  <p>Monitor customer emotion, silence duration, and interruption rates across 100% of calls with automated AI topic extraction.</p>
                  <div className="tab-metrics">
                    <div className="metric-box">
                      <div className="metric-num">98.5%</div>
                      <div className="metric-label">Transcription Accuracy</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-num">Real-Time</div>
                      <div className="metric-label">Sentiment Telemetry</div>
                    </div>
                  </div>
                </div>
                <div style={{ background: '#0F172A', padding: '24px', borderRadius: '16px', color: '#fff' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#8B5CF6', marginBottom: '12px' }}>LIVE CALL INSIGHTS</div>
                  <div style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                    🟢 Overall Sentiment: Positive (88%)<br />
                    ⚡ Average Latency: 184ms<br />
                    📌 Main Customer Intent: Pricing Inquiry<br />
                    ⭐ Predicted CSAT: 4.9 / 5.0
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Enterprise Security & Compliance Grid */}
      <section className="compliance-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Security & Regulatory Compliance</h2>
            <p className="section-subtitle">Engineered to meet strict telecom regulations and global data privacy standards.</p>
          </div>

          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="compliance-icon"><Icons.ShieldCheck /></div>
              <h4>TRAI & DLT Compliant</h4>
              <p>Registered telecom routing compliant with Indian DLT sender regulations.</p>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon"><Icons.Lock /></div>
              <h4>STIR / SHAKEN Verification</h4>
              <p>Authenticates outbound calls to eliminate spam flagging and boost pickup rates.</p>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon"><Icons.Zap /></div>
              <h4>SOC2 Type II Certified</h4>
              <p>End-to-end TLS/SRTP voice encryption and audited data storage protocols.</p>
            </div>
            <div className="compliance-card">
              <div className="compliance-icon"><Icons.Globe /></div>
              <h4>GDPR & HIPAA Ready</h4>
              <p>PII redaction and zero data retention mode available for sensitive voice logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to transform your contact center with AI?</h2>
            <p>Deploy your first Conciva voice agent in under 10 minutes. No credit card required.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary" onClick={() => showToast('Redirecting to agent setup...')}>
                Start 14-Day Free Trial
                <span className="btn-icon-circle">
                  <Icons.ArrowRight />
                </span>
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Request Demo Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="brand-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                <div className="brand-icon"><Icons.Sparkles /></div>
                <div className="brand-text">Conciva<span>AI</span></div>
              </Link>
              <p style={{ maxWidth: '280px', lineHeight: '1.6' }}>
                Next-generation voice AI and omnichannel contact center platform for modern enterprises.
              </p>
            </div>

            <div className="footer-col">
              <h5>Platform</h5>
              <ul className="footer-links">
                <li><Link to="/features">All Features</Link></li>
                <li><Link to="/features#build-setup">Voice Agents</Link></li>
                <li><Link to="/features#train-knowledge">Voice RAG</Link></li>
                <li><Link to="/features#operate-dispatch">SIP Trunking</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Solutions</h5>
              <ul className="footer-links">
                <li><Link to="/services">Enterprise Support</Link></li>
                <li><Link to="/services">Outbound Sales</Link></li>
                <li><Link to="/services">Healthcare Desk</Link></li>
                <li><Link to="/services">E-Commerce AI</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Resources</h5>
              <ul className="footer-links">
                <li><Link to="/pricing">Pricing Plans</Link></li>
                <li><Link to="/about">Documentation</Link></li>
                <li><Link to="/about">API Reference</Link></li>
                <li><Link to="/about">Compliance</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>
              <ul className="footer-links">
                <li><Link to="/about">About Conciva</Link></li>
                <li><Link to="/contact">Contact Sales</Link></li>
                <li><Link to="/contact">Privacy Policy</Link></li>
                <li><Link to="/contact">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} Conciva AI, Inc. All rights reserved.</div>
            <div className="status-badge">
              <span className="pulse-dot" style={{ background: '#10B981', width: '6px', height: '6px' }}></span>
              All Systems Operational · 99.99% Uptime
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
