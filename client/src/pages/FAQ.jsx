import React, {
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search, X, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import '../styles/faq.css';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════════
   FAQ DATA  — original Conciva content
═══════════════════════════════════════════════════════════════ */
const FAQ_CATEGORIES = [
  {
    id: 'general',
    label: 'General',
    icon: '🏠',
    description: 'Start here — the basics about Conciva and who it serves.',
    items: [
      {
        id: 'g1',
        q: 'What is Conciva?',
        a: 'Conciva is an enterprise-grade AI telephony platform that unifies intelligent voice agents, virtual phone numbers, SIP trunking, and real-time analytics into one dashboard. It automates inbound and outbound calls, qualifies leads, books appointments, and routes conversations — at machine scale.',
      },
      {
        id: 'g2',
        q: 'What services does Conciva provide?',
        a: 'Conciva offers four core services: AI Voice Agents for fully automated calls, Virtual Phone Numbers across 190+ countries, Elastic SIP Trunking with a 99.999% uptime SLA, and a WebRTC Softphone for browser and mobile calling. Everything is managed from a single control panel.',
      },
      {
        id: 'g3',
        q: 'Who can use Conciva?',
        a: 'Conciva is built for teams of every size — from early-stage startups to Fortune 500 enterprises. It is especially powerful for sales, customer support, scheduling, and operations teams that need 24/7 call coverage without expanding headcount.',
      },
      {
        id: 'g4',
        q: 'Is Conciva available in my country?',
        a: 'Yes. Conciva supports virtual phone numbers and SIP trunking in 190+ countries. You can acquire local or toll-free numbers in new markets and route calls globally from a single control panel — no local entity required.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Pricing',
    icon: '💳',
    description: 'Transparent pricing with no contracts and no hidden fees.',
    items: [
      {
        id: 'b1',
        q: 'How does Conciva pricing work?',
        a: 'Conciva uses per-second billing with no contracts and no minimum commitments. AI voice usage starts at $0.13 per minute and scales to $0.11 per minute at higher volumes. SIP trunking, virtual numbers, and outbound campaigns are billed separately. Visit our Pricing page for the full breakdown.',
      },
      {
        id: 'b2',
        q: 'Are there any hidden fees?',
        a: 'None. There are no setup fees, per-seat charges, or surprise invoices. Number porting is free. API access is included on every plan. You pay only for what you use — down to the second.',
      },
      {
        id: 'b3',
        q: 'Can I change my plan at any time?',
        a: 'Yes. You can upgrade, downgrade, or cancel at any time from your account dashboard. Changes take effect immediately and are prorated to the day — you are never locked into a billing cycle.',
      },
      {
        id: 'b4',
        q: 'Do you offer refunds?',
        a: 'Unused pre-paid credits are fully refundable within 30 days of purchase. For subscription plans, we handle refund requests on a case-by-case basis. Contact our billing team at billing@conciva.ai and we will make it right.',
      },
      {
        id: 'b5',
        q: 'Is there a free trial?',
        a: 'Yes. Every new account receives a 14-day free trial with $20 in credits — enough to handle hundreds of calls. No credit card is required to start, and you can upgrade to a paid plan at any point during or after the trial.',
      },
    ],
  },
  {
    id: 'ai-voice',
    label: 'AI Voice Agents',
    icon: '🤖',
    description: 'How our AI handles calls with human-like precision.',
    items: [
      {
        id: 'ai1',
        q: 'What are Conciva AI Voice Agents?',
        a: 'Conciva AI Voice Agents are autonomous software agents that answer, understand, and act on phone calls using large language models. They can qualify leads, book appointments, answer knowledge-base questions, collect information, and warm-transfer to a human — all in real time, without a script.',
      },
      {
        id: 'ai2',
        q: 'How does the AI voice agent work?',
        a: 'Each call is transcribed in real time using speech-to-text. The transcript is processed by GPT-4o, grounded in your private knowledge base via RAG (Retrieval-Augmented Generation), and the response is synthesised to speech in under 400ms. The result is a natural, context-aware conversation indistinguishable from a trained human agent.',
      },
      {
        id: 'ai3',
        q: 'Can the AI agent transfer calls to a human?',
        a: 'Yes. You can define escalation rules — for example, transfer when the caller requests a human, when sentiment drops below a threshold, or when a specific keyword is detected. The AI performs a warm transfer, handing off full context and a summary to the live agent so the caller never has to repeat themselves.',
      },
      {
        id: 'ai4',
        q: 'Can I customise my AI voice agent?',
        a: 'Completely. You define the agent\'s name, persona, speaking style, language, knowledge base, call goals, and escalation paths in plain English using the no-code Agent Builder. Multiple personas can be created for different use cases — no prompt engineering or developer involvement required.',
      },
      {
        id: 'ai5',
        q: 'Does the AI support multiple languages?',
        a: 'Yes. Conciva AI detects the caller\'s language from the first utterance and responds in kind, or you can configure fixed-language routing rules. Supported languages include English, Spanish, French, German, Portuguese, Arabic, Hindi, Mandarin, Japanese, and more.',
      },
    ],
  },
  {
    id: 'features',
    label: 'Features & Capabilities',
    icon: '⚡',
    description: 'Explore the full depth of what Conciva can do.',
    items: [
      {
        id: 'f1',
        q: 'Does Conciva support both inbound and outbound calls?',
        a: 'Yes. Conciva handles both directions from a single dashboard. Inbound: route incoming calls to AI agents, queues, or IVR flows. Outbound: launch AI-powered campaigns from a contact list with configurable call windows, goals, and retry logic. All calls are recorded, transcribed, and synced to your CRM.',
      },
      {
        id: 'f2',
        q: 'Can I monitor conversations in real time?',
        a: 'Yes. The Live Monitor dashboard shows active calls with real-time transcripts, sentiment indicators, and agent status. Supervisors can silently listen, whisper to the agent, or barge in on any call. Post-call summaries, recordings, and analytics are available immediately after each conversation.',
      },
      {
        id: 'f3',
        q: 'Can I customise AI agent behaviour without coding?',
        a: 'Yes. The no-code Agent Builder lets you describe your agent\'s behaviour, personality, and rules in plain English. You can define conversation flows, set goals, connect integrations, and publish — all without writing a single line of code. Advanced users can access the API and webhooks for deeper customisation.',
      },
      {
        id: 'f4',
        q: 'Does Conciva support call recording and transcription?',
        a: 'Yes. Every call is automatically recorded and transcribed. Transcripts are searchable, timestamped, and synced to your CRM or data warehouse. You can configure retention policies per number, per campaign, or account-wide. Recordings are stored encrypted in your chosen region.',
      },
    ],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: '🔗',
    description: 'Connect Conciva to the tools your team already uses.',
    items: [
      {
        id: 'i1',
        q: 'Can Conciva integrate with my CRM?',
        a: 'Yes. Conciva offers native bi-directional integrations with Salesforce, HubSpot, Zoho CRM, Pipedrive, Close, and more. Every call automatically creates or updates contacts, logs activity, and pushes AI-generated summaries and follow-up tasks — without any manual data entry.',
      },
      {
        id: 'i2',
        q: 'Can I connect my existing phone number?',
        a: 'Yes. You can port your existing number from any carrier in 3–5 business days, or set up call forwarding from your current number to Conciva instantly to go live today. Conciva also supports bring-your-own-carrier (BYOC) if you want to keep your existing carrier relationship.',
      },
      {
        id: 'i3',
        q: 'Does Conciva provide API access?',
        a: 'Yes. The Conciva REST API provides programmatic access to calls, numbers, agents, analytics, and configuration. Webhooks deliver real-time events to your own systems. An SDK is available for Node.js and Python. API access is included on all plans at no extra charge.',
      },
      {
        id: 'i4',
        q: 'Can Conciva connect to scheduling and calendar tools?',
        a: 'Yes. Conciva integrates natively with Google Calendar, Outlook, and Calendly. AI agents can check availability, book appointments, send confirmation messages, and handle reschedules — all within the same call, with zero manual intervention.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security & Privacy',
    icon: '🔒',
    description: 'Enterprise-grade security on every plan.',
    items: [
      {
        id: 's1',
        q: 'How does Conciva protect customer data?',
        a: 'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Conciva is SOC 2 Type II certified, HIPAA-ready, GDPR compliant, and ISO 27001 aligned. Infrastructure runs on isolated, region-pinned environments with role-based access controls and full audit logging.',
      },
      {
        id: 's2',
        q: 'Is my data secure with Conciva?',
        a: 'Yes. You own your data entirely. Conciva does not use your call recordings, transcripts, or agent configurations to train AI models. You can delete all data at any time from the dashboard. Data residency options are available for EU, US, and APAC regions.',
      },
      {
        id: 's3',
        q: 'How is customer information handled during a call?',
        a: 'Caller data collected during a conversation is processed in-memory and logged only according to your configured retention policy. PII can be redacted automatically from transcripts and CRM sync. All processing occurs within your designated data region.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: '💬',
    description: 'Real humans ready to help — no escalation ladder.',
    items: [
      {
        id: 'su1',
        q: 'How can I get started with Conciva?',
        a: 'Sign up for free at conciva.ai — no credit card required. The onboarding flow guides you through creating your first AI agent, connecting a phone number, and making a test call in under 15 minutes. Our onboarding team is available via live chat if you need a hand.',
      },
      {
        id: 'su2',
        q: 'How can I contact Conciva support?',
        a: 'You can reach our support team via in-app live chat, email at support@conciva.ai, or phone (Enterprise plans). We also offer scheduled onboarding calls and a dedicated Customer Success Manager for Growth and Enterprise customers.',
      },
      {
        id: 'su3',
        q: 'What support options are available?',
        a: 'Starter plans include email and in-app chat with a 4-hour response SLA. Growth plans add priority support with a 1-hour SLA and a dedicated CSM. Enterprise plans include 24/7 phone support, a named support engineer, and guaranteed response within 15 minutes for P1 issues.',
      },
      {
        id: 'su4',
        q: 'Is there documentation and self-serve learning material?',
        a: 'Yes. Conciva provides a comprehensive documentation portal, full API reference, video tutorials, and a community forum. The knowledge base covers initial setup through advanced agent configuration, integration guides, and troubleshooting playbooks.',
      },
    ],
  },
];

const ALL_ITEMS = FAQ_CATEGORIES.flatMap(c => c.items.map(i => ({ ...i, catId: c.id, catLabel: c.label })));

/* ═══════════════════════════════════════════════════════════════
   ACCORDION ITEM  — height-based smooth animation
═══════════════════════════════════════════════════════════════ */
function AccordionItem({ item, isOpen, onToggle, index }) {
  const bodyRef  = useRef(null);
  const innerRef = useRef(null);

  /* animate height */
  useEffect(() => {
    if (!innerRef.current || !bodyRef.current) return;
    const h = isOpen ? innerRef.current.scrollHeight : 0;
    bodyRef.current.style.height = `${h}px`;
  }, [isOpen]);

  return (
    <div
      className={`fai-item${isOpen ? ' fai-item--open' : ''}`}
      style={{ '--stagger': index }}
    >
      <button
        className="fai-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`fai-body-${item.id}`}
        id={`fai-btn-${item.id}`}
      >
        <span className="fai-q">{item.q}</span>
        <span className="fai-chevron-wrap" aria-hidden="true">
          <ChevronDown className="fai-chevron" size={20} strokeWidth={2.2} />
        </span>
      </button>

      <div
        id={`fai-body-${item.id}`}
        role="region"
        aria-labelledby={`fai-btn-${item.id}`}
        className="fai-body"
        ref={bodyRef}
      >
        <div className="fai-inner" ref={innerRef}>
          <p className="fai-answer">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CATEGORY SECTION  — scroll-revealed
═══════════════════════════════════════════════════════════════ */
function CategorySection({ category, openItems, onToggle }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const heading = el.querySelector('.faq-cat-heading');
    const items   = el.querySelectorAll('.fai-item');

    gsap.fromTo(
      heading,
      { opacity: 0, y: 22 },
      {
        opacity: 1, y: 0, duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
      }
    );

    gsap.fromTo(
      items,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0,
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [category.id]);

  return (
    <section
      id={`faq-cat-${category.id}`}
      className="faq-cat-section"
      ref={sectionRef}
      aria-labelledby={`faq-cat-heading-${category.id}`}
    >
      <div className="faq-cat-heading-row">
        <span className="faq-cat-icon" aria-hidden="true">{category.icon}</span>
        <div>
          <h2
            className="faq-cat-heading"
            id={`faq-cat-heading-${category.id}`}
          >
            {category.label}
          </h2>
          {category.description && (
            <p className="faq-cat-desc">{category.description}</p>
          )}
        </div>
        <span className="faq-cat-count">{category.items.length}</span>
      </div>

      <div className="fai-list" role="list">
        {category.items.map((item, idx) => (
          <div key={item.id} role="listitem">
            <AccordionItem
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => onToggle(item.id)}
              index={idx}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════ */
export default function FAQ() {
  const [activeTab,   setActiveTab]   = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems,   setOpenItems]   = useState(new Set(['g1']));

  const heroRef    = useRef(null);
  const navRef     = useRef(null);
  const tabsBarRef = useRef(null);

  /* ── hero entrance animation ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !heroRef.current) return;

    const badge = heroRef.current.querySelector('.faq-hero-badge');
    const h1    = heroRef.current.querySelector('.faq-hero-h1');
    const sub   = heroRef.current.querySelector('.faq-hero-sub');
    const bar   = heroRef.current.querySelector('.faq-search-wrap');
    const stats = heroRef.current.querySelector('.faq-hero-stats');

    gsap.fromTo(
      [badge, h1, sub, bar, stats],
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.05 }
    );
  }, []);

  /* ── tabs bar entrance ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !tabsBarRef.current) return;

    gsap.fromTo(
      tabsBarRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: tabsBarRef.current, start: 'top 90%', once: true },
      }
    );
  }, []);

  /* ── accordion toggle ── */
  const toggleItem = useCallback((id) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  /* ── filter ── */
  const searchLower = searchQuery.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    if (searchLower) {
      const matchingItems = ALL_ITEMS.filter(
        i => i.q.toLowerCase().includes(searchLower) || i.a.toLowerCase().includes(searchLower)
      );
      if (!matchingItems.length) return [];
      // group back into pseudo-categories
      const grouped = {};
      matchingItems.forEach(i => {
        if (!grouped[i.catId]) grouped[i.catId] = { ...FAQ_CATEGORIES.find(c => c.id === i.catId), items: [] };
        grouped[i.catId].items.push(i);
      });
      return Object.values(grouped);
    }
    if (activeTab === 'all') return FAQ_CATEGORIES;
    return FAQ_CATEGORIES.filter(c => c.id === activeTab);
  }, [searchLower, activeTab]);

  /* ── scroll to section ── */
  const handleTabClick = (id) => {
    setActiveTab(id);
    setSearchQuery('');
    if (id !== 'all') {
      setTimeout(() => {
        const el = document.getElementById(`faq-cat-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  const totalVisible = visibleCategories.reduce((s, c) => s + c.items.length, 0);

  return (
    <div className="faq-page">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="faq-hero" ref={heroRef} aria-label="FAQ hero">
        <div className="faq-hero-bg" aria-hidden="true">
          <div className="faq-hero-blob faq-hero-blob-1" />
          <div className="faq-hero-blob faq-hero-blob-2" />
          <div className="faq-hero-grid" />
        </div>

        <div className="faq-hero-inner">
          <div className="faq-hero-badge">
            <span className="faq-hero-badge-dot" aria-hidden="true" />
            Help Center
          </div>

          <h1 className="faq-hero-h1">
            Frequently Asked<br />
            <span className="faq-hero-hl">Questions</span>
          </h1>

          <p className="faq-hero-sub">
            Find answers to common questions about Conciva, our AI voice
            solutions, features, integrations, pricing, and support.
          </p>

          {/* Search */}
          <div className="faq-search-wrap" role="search">
            <span className="faq-search-ico" aria-hidden="true">
              <Search size={17} strokeWidth={2.2} />
            </span>
            <input
              className="faq-search-input"
              type="search"
              placeholder="Search your question…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search FAQ"
            />
            {searchQuery && (
              <button
                className="faq-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={14} strokeWidth={2.5} />
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="faq-hero-stats">
            {[
              { val: `${ALL_ITEMS.length}+`, label: 'Questions answered' },
              { val: '7', label: 'Topic categories' },
              { val: '< 4h', label: 'Support response' },
            ].map(s => (
              <div key={s.label} className="faq-hero-stat">
                <span className="faq-hero-stat-val">{s.val}</span>
                <span className="faq-hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CATEGORY NAVIGATION
      ════════════════════════════════════════ */}
      <nav
        className="faq-tabs-bar"
        ref={tabsBarRef}
        aria-label="FAQ categories"
      >
        <div className="faq-tabs-inner" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`faq-tab${activeTab === 'all' ? ' faq-tab--active' : ''}`}
            onClick={() => handleTabClick('all')}
          >
            <HelpCircle size={14} strokeWidth={2} aria-hidden="true" />
            All topics
            <span className="faq-tab-pill">{ALL_ITEMS.length}</span>
          </button>

          {FAQ_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`faq-tab${activeTab === cat.id ? ' faq-tab--active' : ''}`}
              onClick={() => handleTabClick(cat.id)}
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label}
              <span className="faq-tab-pill">{cat.items.length}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ════════════════════════════════════════
          ACCORDION CONTENT
      ════════════════════════════════════════ */}
      <main className="faq-main">
        <div className="faq-container">

          {/* Search result count */}
          {searchLower && (
            <div className="faq-search-meta" role="status" aria-live="polite">
              {totalVisible > 0
                ? <><strong>{totalVisible}</strong> result{totalVisible !== 1 ? 's' : ''} for "<em>{searchQuery}</em>"</>
                : null}
            </div>
          )}

          {/* Empty */}
          {visibleCategories.length === 0 && (
            <div className="faq-empty">
              <span className="faq-empty-icon" aria-hidden="true">
                <MessageCircle size={36} strokeWidth={1.5} />
              </span>
              <h3 className="faq-empty-h">No results found</h3>
              <p className="faq-empty-p">
                Nothing matched "<strong>{searchQuery}</strong>". Try a different keyword or{' '}
                <button
                  className="faq-empty-reset"
                  onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                >
                  browse all topics
                </button>.
              </p>
            </div>
          )}

          {/* Categories */}
          {visibleCategories.map(cat => (
            <CategorySection
              key={cat.id}
              category={cat}
              openItems={openItems}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </main>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="faq-cta-section">
        <div className="faq-container">
          <div className="faq-cta-card">
            <div className="faq-cta-glow" aria-hidden="true" />
            <div className="faq-cta-glow faq-cta-glow-2" aria-hidden="true" />

            <div className="faq-cta-icon-wrap" aria-hidden="true">
              <MessageCircle size={26} strokeWidth={1.75} />
            </div>

            <h2 className="faq-cta-h">Still have questions?</h2>
            <p className="faq-cta-p">
              Our team is here to help. Get in touch with Conciva and find
              the right solution for your needs.
            </p>

            <div className="faq-cta-btns">
              <Link to="/contact" className="faq-btn-cta-primary">
                Contact us <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link to="/pricing" className="faq-btn-cta-secondary">
                View pricing
              </Link>
            </div>

            <p className="faq-cta-note">
              Avg. response under 4 hours · No credit card required
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
