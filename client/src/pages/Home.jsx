import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Globe2, PhoneCall, ShieldCheck, Infinity as InfinityIcon } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/home/ScrollStack';
import { TestimonialsSection } from '../components/blocks/testimonials-with-marquee';
import '../styles/home.css';

/* ─── Data ─────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: '🤖',
    bg: 'fi-orange',
    title: 'AI Voice Bot 2.0',
    desc: 'Conversational AI that handles inbound and outbound calls with human-like precision and real-time sentiment analysis.',
    tag: 'Powered by GPT-4o',
  },
  {
    icon: '📞',
    bg: 'fi-violet',
    title: 'Virtual Phone Numbers',
    desc: 'Instant local and toll-free numbers across 190+ countries. Port your existing numbers in minutes.',
    tag: '190+ Countries',
  },
  {
    icon: '🌐',
    bg: 'fi-sky',
    title: 'Elastic SIP Trunking',
    desc: 'Carrier-grade SIP trunking with dynamic capacity scaling, 99.999% uptime SLA, and global PoPs.',
    tag: '99.999% SLA',
  },
  {
    icon: '📊',
    bg: 'fi-emerald',
    title: 'Live Call Analytics',
    desc: 'Real-time transcripts, keyword alerts, CSAT scoring, and agent performance dashboards in one place.',
    tag: 'Real-time insights',
  },
  {
    icon: '🔒',
    bg: 'fi-amber',
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified, end-to-end encryption, HIPAA & GDPR compliant infrastructure out of the box.',
    tag: 'SOC 2 Certified',
  },
  {
    icon: '⚡',
    bg: 'fi-rose',
    title: 'WebRTC Softphone',
    desc: 'Crystal-clear HD audio calling directly from your browser or our mobile app. No hardware needed.',
    tag: 'Zero Hardware',
  },
];

const HOW_STEPS = [
  {
    number: '01',
    icon: '🎯',
    bg: 'fi-orange',
    title: 'Configure Your Agent',
    desc: 'Set up your AI voice bot in minutes with our no-code builder. Define personas, call flows, and escalation paths.',
    tags: ['No-code builder', 'SETUP'],
  },
  {
    number: '02',
    icon: '🔗',
    bg: 'fi-violet',
    title: 'Connect Your Systems',
    desc: 'Integrate with your CRM, helpdesk, or calendar via 200+ native integrations or our REST API.',
    tags: ['200+ integrations', 'SYNC'],
  },
  {
    number: '03',
    icon: '🚀',
    bg: 'fi-emerald',
    title: 'Go Live & Scale',
    desc: 'Launch in production instantly. Scale from 10 to 10,000 concurrent calls without infrastructure changes.',
    tags: ['10K+ concurrent', 'LIVE'],
  },
];

const MARQUEE_TESTIMONIALS = [
  {
    author: {
      name: 'Sarah Mitchell',
      handle: '@sarahmitchell · VP Operations · TechServe Global',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Conciva AI reduced our customer wait times by 73% in the first month. The AI voice bot handles tier-1 queries flawlessly — our agents now focus only on complex cases.',
    href: 'https://twitter.com',
  },
  {
    author: {
      name: 'David Chen',
      handle: '@davidchen · CTO · NovaPay Financial',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    text: "The SIP trunking quality is exceptional. We've processed over 50 million minutes with zero unplanned downtime. Best carrier decision we've ever made.",
    href: 'https://twitter.com',
  },
  {
    author: {
      name: 'Priya Nair',
      handle: '@priyanair · Head of CX · RetailFirst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    },
    text: "Integration with our Salesforce instance took under an hour. The live analytics dashboard alone saved our QA team 30 hours per week. Absolutely brilliant product.",
  },
  {
    author: {
      name: 'James Okafor',
      handle: '@jamesokafor · COO · SwiftLogix',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
    },
    text: "Switched from our legacy PBX in a weekend. The onboarding team was incredible and call quality is night-and-day better. Conciva AI just works.",
  },
  {
    author: {
      name: 'Mia Thornton',
      handle: '@miathornton · Director of Support · CloudBase',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    },
    text: "Real-time transcripts and sentiment scoring changed how we coach agents. CSAT went from 78% to 94% in two quarters. The ROI is undeniable.",
    href: 'https://twitter.com',
  },
  {
    author: {
      name: 'Ravi Sharma',
      handle: '@ravisharma · CX Lead · FinEdge',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    text: "We handle 40,000 inbound calls a day. Conciva AI scales without a hiccup. The 99.999% uptime SLA isn't marketing — it's reality.",
  },
];

const FEATURE_CHIPS = [
  { icon: Zap, label: 'Sub-second latency' },
  { icon: Globe2, label: '190+ countries' },
  { icon: PhoneCall, label: 'Carrier-grade telephony' },
  { icon: ShieldCheck, label: 'SOC 2 certified' },
  { icon: InfinityIcon, label: 'Unlimited concurrency' },
];

/* ─── Component ─────────────────────────────────────────── */

export default function Home() {
  return (
    <div>
      {/* ── 1. HERO ── */}
      <section className="hero-section home-section">
        {/* Background decorations */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid-lines" />
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
        </div>

        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-status-bar anim-fade-up">
              <span className="hero-status-live">
                <span className="hero-status-dot" /> Live
              </span>
              <span className="hero-status-divider" />
              <span className="hero-status-version">AIVB-2.0</span>
              <span className="hero-status-divider" />
              <span className="hero-status-features">
                <span aria-hidden="true">⚡</span> Real-time AI · 190+ Countries · Enterprise-grade
              </span>
            </div>

            <h1 className="hero-headline-serif anim-fade-up delay-1">
              Supercharge your<br />
              business calls with
              <br />
              <span className="hl-serif-italic">AI-powered voice.</span>
            </h1>

            <p className="hero-sub anim-fade-up delay-2">
              Conciva AI gives your team enterprise-grade telephony, intelligent
              AI voice agents, and real-time analytics — all in one unified platform.
            </p>

            <div className="hero-ctas anim-fade-up delay-3">
              <Link to="/pricing" className="btn-hero-primary">
                Build your first agent <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link to="/features" className="btn-hero-secondary">
                <Play size={15} fill="currentColor" /> Features
              </Link>
            </div>

            <div className="hero-stats-row anim-fade-up delay-4">
              <div className="hero-stat-item">
                <span className="hero-stat-value">0.3s</span>
                <span className="hero-stat-label">Sub-second latency</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">99.99%</span>
                <span className="hero-stat-label">Platform uptime</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">190+</span>
                <span className="hero-stat-label">Countries supported</span>
              </div>
            </div>
          </div>

          {/* Right — Dashboard card */}
          <div className="hero-right anim-fade-up delay-2">
            <div className="hero-card-wrapper">
              {/* Floating badge — top left */}
              <div className="hero-float-badge hero-float-badge-1">
                <span className="badge-icon" style={{ background: '#ECFDF5' }}>✓</span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>CRM</div>
                  <div style={{ color: '#059669' }}>Updated</div>
                </div>
              </div>

              {/* Main card */}
              <div className="hero-dashboard-card agent-card">
                {/* Top bar */}
                <div className="ac-topbar">
                  <div className="ac-dots">
                    <span /><span /><span />
                  </div>
                  <div className="ac-topbar-label">AGENT_SESSION · LIVE</div>
                  <div className="ac-version-badge">⚙ v1</div>
                </div>

                {/* Agent row */}
                <div className="ac-agent-row">
                  <div className="ac-avatar-pulse">
                    <span role="img" aria-label="Aria">🎙️</span>
                  </div>
                  <div className="ac-agent-info">
                    <div className="ac-agent-name">Aria · Sales Agent</div>
                    <div className="ac-agent-sub">EN-US · NEURAL-AUDIO</div>
                  </div>
                  <div className="ac-oncall-badge">
                    <span className="ac-oncall-dot" />
                    ON CALL
                  </div>
                </div>

                {/* Waveform */}
                <div className="ac-waveform" aria-hidden="true">
                  {[40,55,30,70,45,100,35,100,45,70,55,25,60,45,80,35,55,30,65,45,75,30,55,40].map((h, i) => (
                    <div
                      key={i}
                      className="ac-wave-bar"
                      style={{ height: `${h}%`, animationDelay: `${(i % 12) * 0.08}s` }}
                    />
                  ))}
                </div>

                {/* Caller message */}
                <div className="ac-msg ac-msg-caller">
                  <div className="ac-msg-meta">CALLER · 00:14</div>
                  <div className="ac-msg-text">"Hi, I'm calling about the listing on Maple Street."</div>
                </div>

                {/* Aria message */}
                <div className="ac-msg ac-msg-agent">
                  <div className="ac-msg-meta">
                    ARIA · 00:15 · <span className="ac-generating">GENERATING</span>
                  </div>
                  <div className="ac-msg-text">
                    "Of course — the 4-bed colonial. Are you looking to schedule a showing this week?"
                    <span className="ac-typing-dots"><i /><i /><i /></span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="ac-metrics">
                  <div className="ac-metric">
                    <span className="ac-metric-label">Ticket</span>
                    <span className="ac-metric-val ac-metric-orange">#9278-48XX</span>
                  </div>
                  <div className="ac-metric">
                    <span className="ac-metric-label">Sentiment</span>
                    <span className="ac-metric-val ac-metric-green">Positive</span>
                  </div>
                  <div className="ac-metric">
                    <span className="ac-metric-label">Intent</span>
                    <span className="ac-metric-val">Book showing</span>
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="hero-float-badge hero-float-badge-2">
                <span className="badge-icon" style={{ background: '#FFF7ED' }}>📅</span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>Calendar</div>
                  <div style={{ color: '#F97316' }}>Booked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURES ── */}
      <section className="features-section home-section">
        <div className="home-container">
          <div className="features-hero-grid">
            {/* Left column */}
            <div className="features-left anim-fade-up">
              <span className="eyebrow-pill">
                <span className="eyebrow-dot" /> Platform Features
              </span>

              <h2 className="features-headline-big">
                Everything your team needs<br />
                to communicate <span className="fh-highlight">at scale.</span>
              </h2>

              <p className="features-subtext">
                From AI-powered voice bots to enterprise SIP trunking, Conciva AI
                gives you the complete telephony stack without the complexity.
              </p>

              <div className="features-cta-row">
                <Link to="/features" className="btn-feature-primary">
                  See the full feature matrix <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <Link to="/contact" className="btn-feature-secondary">
                  <PhoneCall size={15} /> Book a demo
                </Link>
              </div>

              <div className="features-chip-row">
                {FEATURE_CHIPS.map(({ icon: Icon, label }) => (
                  <span className="feature-chip" key={label}>
                    <Icon size={13} strokeWidth={2.25} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — scroll stack */}
            <div className="features-right anim-fade-up delay-2">
              <ScrollStack
                className="feature-scroll-stack"
                itemDistance={90}
                itemScale={0.035}
                itemStackDistance={26}
                stackPosition="18%"
                scaleEndPosition="8%"
                baseScale={0.88}
              >
                {FEATURES.map((f, i) => (
                  <ScrollStackItem key={f.title} itemClassName="feat-stack-card">
                    <div className="stack-card-top">
                      <span className="stack-card-label">STACK · 0{i + 1}</span>
                      <span className={`stack-card-icon ${f.bg}`}>{f.icon}</span>
                    </div>
                    <h3 className="stack-card-title">{f.title}</h3>
                    <p className="stack-card-desc">{f.desc}</p>
                    <div className="stack-card-divider" />
                    <span className="stack-card-tag">✓ {f.tag}</span>
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="how-section home-section">
        <div className="home-container">
          <div className="section-header centered" style={{ width: '100%', textAlign: 'center', alignItems: 'center' }}>
            {/* Eyebrow pill — reference style */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              border: '1.5px solid #FED7AA', borderRadius: '9999px',
              padding: '0.35rem 1rem', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#EA580C', marginBottom: '1.25rem',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316', display: 'inline-block' }} />
              How It Works
            </span>

            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700, color: '#0F172A',
              lineHeight: 1.2, letterSpacing: '-0.01em',
              marginBottom: '1rem', textAlign: 'center',
              width: '100%',
            }}>
              Up and running <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>in minutes.</em>
            </h2>

            <p className="section-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              No complex onboarding, no dedicated IT team required. Three simple
              steps to replace your legacy phone system.
            </p>
          </div>

          {/* Cards grid — reference image 1 style */}
          <div className="how-steps-grid" style={{ marginTop: '2.5rem' }}>
            {HOW_STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`how-card anim-fade-up delay-${i + 1}`}
                style={i === 1 ? {
                  border: '1.5px solid #FED7AA',
                  boxShadow: '0 0 0 1px rgba(249,115,22,0.1), 0 20px 48px rgba(249,115,22,0.12)',
                } : {}}
              >
                {/* Top row: icon left, tags right */}
                <div className="how-card-top">
                  <span className={`feature-icon-wrap ${step.bg}`} style={{ fontSize: '1.3rem' }}>
                    {step.icon}
                  </span>
                  <div className="how-card-tags">
                    <span className="how-tag how-tag-fill">{step.tags[0]}</span>
                    <span className="how-tag how-tag-outline">{step.tags[1]}</span>
                  </div>
                </div>

                <span className="how-card-index">/ {step.number}</span>
                <h3 className="how-card-title">{step.title}</h3>
                <p className="how-card-desc">{step.desc}</p>

                {/* Big watermark background icon */}
                <span className="how-card-bg-icon" aria-hidden="true">{step.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <TestimonialsSection
        title={
          <>
            Teams shipping AI voice agents{' '}
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              that actually convert.
            </span>
          </>
        }
        description="From dental clinics to logistics ops, Conciva AI is answering, qualifying, and closing — 24/7, on the carrier you already use."
        testimonials={MARQUEE_TESTIMONIALS}
      />

      {/* ── 6. CTA BANNER ── */}
      <section className="cta-section home-section">
        <div className="home-container">
          <div className="cta-inner">
            <h2 className="cta-headline">
              Ready to transform your<br />customer communications?
            </h2>
            <p className="cta-sub">
              Join 14,000+ businesses using Conciva AI to handle millions of calls
              with intelligence and reliability. Start your free trial today.
            </p>
            <div className="cta-buttons">
              <Link to="/pricing" className="btn-cta-white">
                Start Free Trial <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link to="/contact" className="btn-cta-outline">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}