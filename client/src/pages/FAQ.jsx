import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, X, MessageCircle } from 'lucide-react';
import '../styles/faq.css';

/* ═══════════════════════════════════════════════════════
   FAQ DATA
═══════════════════════════════════════════════════════ */

const FAQ_DATA = [
  /* ── General ── */
  {
    id: 'g1', cat: 'General',
    q: 'What is Conciva AI?',
    a: 'Conciva AI is an enterprise-grade AI telephony platform that combines intelligent voice agents, virtual phone numbers, SIP trunking, and real-time analytics into one unified dashboard. It is designed to automate inbound and outbound calls, qualify leads, book appointments, and route conversations — all at machine scale.',
  },
  {
    id: 'g2', cat: 'General',
    q: 'Who is Conciva AI built for?',
    a: 'Conciva AI is built for businesses of every size — from fast-growing startups to Fortune 500 enterprises — that rely on phone communication for sales, customer support, scheduling, or operations. It is especially powerful for teams that want to eliminate hold times, reduce staffing costs, and ensure 24/7 call coverage.',
  },
  {
    id: 'g3', cat: 'General',
    q: 'Is Conciva AI available globally?',
    a: 'Yes. Conciva AI supports virtual phone numbers and SIP trunking in 190+ countries. You can port your existing numbers, acquire local or toll-free numbers in new markets, and route calls globally — all from a single control panel.',
  },
  {
    id: 'g4', cat: 'General',
    q: 'What makes Conciva AI different from a traditional IVR or phone system?',
    a: 'Traditional IVR systems follow rigid scripts and offer limited options. Conciva AI uses large language models (LLMs) to have natural, context-aware conversations. It understands intent, asks follow-up questions, accesses your knowledge base in real time, and can complete tasks like booking appointments or updating a CRM record — without any human intervention.',
  },

  /* ── Services ── */
  {
    id: 's1', cat: 'Services',
    q: 'What telephony services does Conciva AI offer?',
    a: 'Conciva AI offers four core services: (1) AI Voice Agents for fully automated inbound and outbound calls, (2) Virtual Phone Numbers across 190+ countries, (3) Elastic SIP Trunking with 99.999% uptime SLA for enterprise carrier connectivity, and (4) a WebRTC Softphone so your team can make and receive calls from any browser or mobile device.',
  },
  {
    id: 's2', cat: 'Services',
    q: 'Can I keep my existing phone numbers?',
    a: 'Absolutely. Conciva AI supports number porting from any carrier. The process typically completes within 3–5 business days. You can also forward calls from your current numbers to Conciva AI instantly — meaning you can go live today without waiting for a port to complete.',
  },
  {
    id: 's3', cat: 'Services',
    q: 'Does Conciva AI support outbound calling campaigns?',
    a: 'Yes. You can configure outbound AI campaigns directly from the dashboard — upload a contact list, define the conversation script and goals, schedule call windows, and Conciva AI handles the rest. All calls are recorded, transcribed, and synced to your CRM automatically.',
  },
  {
    id: 's4', cat: 'Services',
    q: 'What is SIP trunking and do I need it?',
    a: 'SIP trunking replaces traditional phone lines (PRI/POTS) with a digital, internet-based connection between your business phone system (PBX) and the public telephone network. If you already have an on-premises or cloud PBX, Conciva AI SIP Trunking connects it to carrier-grade infrastructure with dynamic capacity, low latency, and global reach — at a fraction of the cost of legacy lines.',
  },

  /* ── AI & Technology ── */
  {
    id: 'ai1', cat: 'AI & Technology',
    q: 'What AI models power Conciva AI voice agents?',
    a: 'Conciva AI voice agents run on GPT-4o for language understanding and response generation, combined with best-in-class speech-to-text and text-to-speech models tuned for low latency telephony. The result is sub-400ms response times with near-human conversational fluency.',
  },
  {
    id: 'ai2', cat: 'AI & Technology',
    q: 'How does the AI handle complex or unexpected questions?',
    a: 'The AI is grounded in your knowledge base via Retrieval-Augmented Generation (RAG). When a caller asks something outside its configured scope, the agent can gracefully acknowledge the limit, take a message, or warm-transfer to a human agent — whichever behavior you configure. It never fabricates answers.',
  },
  {
    id: 'ai3', cat: 'AI & Technology',
    q: 'Can I customise the voice agent\'s personality and tone?',
    a: 'Yes. You can define the agent\'s name, persona, speaking style, language, and escalation rules entirely in plain English through the no-code Agent Builder. Multiple personas can be created for different use cases — for example, a friendly scheduling assistant for your clinic and a professional collections agent for your finance team.',
  },
  {
    id: 'ai4', cat: 'AI & Technology',
    q: 'Does the AI support multiple languages?',
    a: 'Yes. Conciva AI supports real-time multilingual conversations. The agent can detect the caller\'s language from the first utterance and switch automatically, or you can configure language routing rules. Currently supported languages include English, Spanish, French, German, Portuguese, Arabic, Hindi, Mandarin, and more.',
  },
  {
    id: 'ai5', cat: 'AI & Technology',
    q: 'What is the average response latency?',
    a: 'Our average end-to-end latency — from the caller finishing a sentence to the AI\'s first spoken word — is under 400 milliseconds on standard deployments. Enterprise dedicated deployments can achieve sub-300ms latency. This ensures conversations feel natural rather than robotic.',
  },

  /* ── Pricing ── */
  {
    id: 'p1', cat: 'Pricing',
    q: 'How is Conciva AI priced?',
    a: 'Conciva AI uses per-second billing with no contracts and no minimum commitments. Pricing starts at $0.13 per minute for AI voice usage and scales down to $0.11 per minute at higher volumes. SIP trunking, virtual numbers, and outbound campaigns are billed separately. Visit our Pricing page for a full breakdown.',
  },
  {
    id: 'p2', cat: 'Pricing',
    q: 'Is there a free trial?',
    a: 'Yes. Every new account gets a 14-day free trial with $20 in free credits — enough to handle hundreds of calls. No credit card is required to start. You can upgrade to a paid plan at any time during or after the trial.',
  },
  {
    id: 'p3', cat: 'Pricing',
    q: 'Are there any setup fees or hidden charges?',
    a: 'No setup fees, no hidden charges. You pay only for what you use. Number porting is free. API access is included on all plans. There are no per-seat fees for the dashboard — invite your entire team at no extra cost.',
  },
  {
    id: 'p4', cat: 'Pricing',
    q: 'Do you offer custom enterprise pricing?',
    a: 'Yes. For organisations with high call volumes or specific compliance requirements, we offer custom enterprise agreements with dedicated infrastructure, volume discounts, SLA guarantees, a dedicated account manager, and priority support. Contact our sales team to get a tailored quote.',
  },

  /* ── Getting Started ── */
  {
    id: 'gs1', cat: 'Getting Started',
    q: 'How quickly can I go live?',
    a: 'Most customers complete their first live call within 15 minutes of signing up. The onboarding flow guides you through: (1) creating your first AI agent, (2) acquiring or connecting a phone number, and (3) making a test call. No engineering work is required for standard deployments.',
  },
  {
    id: 'gs2', cat: 'Getting Started',
    q: 'What integrations does Conciva AI support?',
    a: 'Conciva AI offers 200+ native integrations including Salesforce, HubSpot, Zoho CRM, Zendesk, Calendly, Google Calendar, Zapier, Slack, and more. All integrations are bi-directional — meaning Conciva AI can both read and write data. A REST API and webhooks are available for custom integrations.',
  },
  {
    id: 'gs3', cat: 'Getting Started',
    q: 'Do I need technical skills to set up Conciva AI?',
    a: 'No. The Agent Builder is entirely no-code. You describe your agent\'s behaviour in plain English, connect your integrations through OAuth, and publish — no prompt engineering or developer involvement required. Advanced users can access the API for deeper customisation.',
  },
  {
    id: 'gs4', cat: 'Getting Started',
    q: 'Can I migrate from my existing contact centre solution?',
    a: 'Yes. Conciva AI is designed for parallel and phased migration. You can run it alongside your existing system, gradually shifting call volume as you gain confidence. Our onboarding team provides dedicated migration support for enterprise customers, including data migration, number porting coordination, and agent training.',
  },

  /* ── Support ── */
  {
    id: 'su1', cat: 'Support',
    q: 'What support options are available?',
    a: 'All plans include email and in-app chat support with a response SLA of under 4 hours. Growth and Enterprise plans include priority support with a 1-hour SLA and access to a dedicated Customer Success Manager. Enterprise customers also receive 24/7 phone support.',
  },
  {
    id: 'su2', cat: 'Support',
    q: 'Is there documentation and self-serve learning material?',
    a: 'Yes. Conciva AI offers a comprehensive documentation portal, API reference, video tutorials, and a community forum. The knowledge base covers everything from initial setup to advanced agent configuration, integration guides, and troubleshooting.',
  },
  {
    id: 'su3', cat: 'Support',
    q: 'What is your uptime SLA?',
    a: 'Conciva AI guarantees a 99.99% uptime SLA on the voice platform and a 99.999% SLA on SIP trunking infrastructure. In the unlikely event of an incident, our status page provides real-time updates and post-incident reports. Customers are automatically notified via email and webhook.',
  },
  {
    id: 'su4', cat: 'Support',
    q: 'Is my data secure with Conciva AI?',
    a: 'Security is foundational to everything we build. Conciva AI is SOC 2 Type II certified, HIPAA-ready, GDPR compliant, and ISO 27001 aligned. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Call recordings are stored in your designated region with configurable retention policies. You own your data entirely.',
  },
];

const CATEGORIES = ['All', 'General', 'Services', 'AI & Technology', 'Pricing', 'Getting Started', 'Support'];

/* ═══════════════════════════════════════════════════════
   ACCORDION ITEM
═══════════════════════════════════════════════════════ */

function AccordionItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`faq-accordion-item${isOpen ? ' faq-accordion-item--open' : ''}`}>
      <button
        className="faq-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${item.id}`}
        id={`faq-trigger-${item.id}`}
      >
        <span className="faq-accordion-question">{item.q}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </span>
      </button>

      <div
        id={`faq-body-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        className="faq-accordion-body"
        style={{ height: `${height}px` }}
      >
        <div ref={bodyRef} className="faq-accordion-answer">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN FAQ PAGE
═══════════════════════════════════════════════════════ */

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery]       = useState('');
  const [openItems, setOpenItems]           = useState(new Set(['g1']));

  /* filter logic */
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FAQ_DATA.filter(item => {
      const matchesCat = activeCategory === 'All' || item.cat === activeCategory;
      const matchesSearch = !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  /* group by category for display */
  const grouped = useMemo(() => {
    if (activeCategory !== 'All' || searchQuery.trim()) {
      return [{ cat: activeCategory === 'All' ? 'Results' : activeCategory, items: filtered }];
    }
    const map = {};
    CATEGORIES.slice(1).forEach(c => { map[c] = []; });
    filtered.forEach(item => { if (map[item.cat]) map[item.cat].push(item); });
    return Object.entries(map).map(([cat, items]) => ({ cat, items })).filter(g => g.items.length > 0);
  }, [filtered, activeCategory, searchQuery]);

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const clearSearch = () => setSearchQuery('');

  /* counts per category for badge */
  const countFor = (cat) => cat === 'All'
    ? FAQ_DATA.length
    : FAQ_DATA.filter(i => i.cat === cat).length;

  return (
    <div className="faq-page">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="faq-hero">
        {/* decorative blobs */}
        <div className="faq-hero-blob faq-hero-blob-1" aria-hidden="true" />
        <div className="faq-hero-blob faq-hero-blob-2" aria-hidden="true" />
        <div className="faq-hero-grid"                 aria-hidden="true" />

        <div className="faq-hero-inner">
          <div className="faq-hero-badge">
            <span className="faq-hero-badge-dot" aria-hidden="true" />
            Help Center
          </div>

          <h1 className="faq-hero-title">
            Frequently Asked<br />
            <span className="faq-hero-title-hl">Questions</span>
          </h1>

          <p className="faq-hero-sub">
            Everything you need to know about Conciva AI — from pricing and
            setup to AI technology and enterprise security.
          </p>

          {/* Search bar */}
          <div className="faq-search-wrap">
            <span className="faq-search-icon" aria-hidden="true">
              <Search size={18} strokeWidth={2} />
            </span>
            <input
              className="faq-search-input"
              type="search"
              placeholder="Search your question…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search FAQ questions"
            />
            {searchQuery && (
              <button className="faq-search-clear" onClick={clearSearch} aria-label="Clear search">
                <X size={16} strokeWidth={2.5} />
              </button>
            )}
          </div>

          {/* quick stats */}
          <div className="faq-hero-stats" aria-hidden="true">
            {[
              { val: '24+', label: 'Questions answered' },
              { val: '6',   label: 'Topic categories' },
              { val: '< 4h', label: 'Support response time' },
            ].map(s => (
              <div key={s.label} className="faq-hero-stat">
                <span className="faq-hero-stat-val">{s.val}</span>
                <span className="faq-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY TABS  +  ACCORDION
      ══════════════════════════════════════════ */}
      <section className="faq-body-section">
        <div className="faq-container">

          {/* Category tabs */}
          <div className="faq-tabs-wrap" role="tablist" aria-label="FAQ categories">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`faq-tab${activeCategory === cat ? ' faq-tab--active' : ''}`}
                onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
              >
                {cat}
                <span className="faq-tab-count">{countFor(cat)}</span>
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="faq-results">
            {filtered.length === 0 ? (
              <div className="faq-empty">
                <span className="faq-empty-icon" aria-hidden="true">
                  <MessageCircle size={40} strokeWidth={1.5} />
                </span>
                <h3 className="faq-empty-title">No results found</h3>
                <p className="faq-empty-sub">
                  We couldn't find anything matching "<strong>{searchQuery}</strong>".
                  Try a different keyword or{' '}
                  <button className="faq-empty-reset" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                    browse all questions
                  </button>.
                </p>
              </div>
            ) : (
              grouped.map(group => (
                <div key={group.cat} className="faq-group">
                  {(activeCategory === 'All' && !searchQuery.trim()) && (
                    <div className="faq-group-header">
                      <span className="faq-group-title">{group.cat}</span>
                      <span className="faq-group-count">{group.items.length} questions</span>
                    </div>
                  )}

                  <div className="faq-accordion" role="list">
                    {group.items.map(item => (
                      <div key={item.id} role="listitem">
                        <AccordionItem
                          item={item}
                          isOpen={openItems.has(item.id)}
                          onToggle={() => toggleItem(item.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="faq-cta-section">
        <div className="faq-container">
          <div className="faq-cta-card">
            {/* decorative glow */}
            <div className="faq-cta-glow" aria-hidden="true" />

            <div className="faq-cta-icon" aria-hidden="true">
              <MessageCircle size={28} strokeWidth={1.75} />
            </div>

            <h2 className="faq-cta-title">Still have questions?</h2>
            <p className="faq-cta-sub">
              Our team is ready to help. Talk to a real human who knows the
              platform inside out — no bots, no hold music.
            </p>

            <div className="faq-cta-actions">
              <Link to="/contact" className="faq-btn-primary">
                Talk to our team <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link to="/pricing" className="faq-btn-secondary">
                View pricing
              </Link>
            </div>

            <p className="faq-cta-note">
              Average response time under 4 hours · No credit card required to start
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
