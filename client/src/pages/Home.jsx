import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import '../styles/home.css';

/* ─── Data ─────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: '🛡️ ', 
    bg: 'fi-orange',
    title: 'Self-hosted control panel',
    desc: 'Your data, your stack, your firewall — total ownership without compromise.',
    tag: 'Powered by GPT-4o',
  },
  {
    icon: '📞',
    bg: 'fi-violet',
    title: 'Bring-your-own-carrier',
    desc: 'Connect your existing carrier account in two clicks with zero porting downtime',
    tag: '190+ Countries',
  },
  {
    icon: '✍️',
    bg: 'fi-sky',
    title: 'Plain-English agent design ',
    desc: 'describe your agent in natural language and ship it without code.',
    tag: '99.999% SLA',
  },
  {
    icon: '📊',
    bg: 'fi-emerald',
    title: 'RAG-powered knowledge sync',
    desc: 'answers exclusively from your source of truth with live document sync and citations.',
    tag: 'Real-time insights',
  },
  {
    icon: '🔄',
    bg: 'fi-amber',
    title: 'Inbound and outbound from one dashboard',
    desc: 'route incoming calls and trigger outbound campaigns from the same interface.',
    tag: 'SOC 2 Certified',
  },
  {
    icon: '⏱️',
    bg: 'fi-rose',
    title: 'Per-second billing with no contracts ',
    desc: 'pay only for the seconds you talk, scale from $0.13/min to $0.11/min.',
    tag: 'Zero Hardware',
  },
];

const HOW_STEPS = [
  {
    number: '01',
    icon: '🎯',
    title: 'Configure Your Agent',
    desc: 'Set up your AI voice bot in minutes with our no-code builder. Define personas, call flows, and escalation paths.',
  },
  {
    number: '02',
    icon: '🔗',
    title: 'Connect Your Systems',
    desc: 'Integrate with your CRM, helpdesk, or calendar via 200+ native integrations or our REST API.',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Go Live & Scale',
    desc: 'Launch in production instantly. Scale from 10 to 10,000 concurrent calls without infrastructure changes.',
  },
];

const STATS = [
  { val: '2.4B+',  label: 'Minutes Handled Monthly',  suffix: '' },
  { val: '99.99',  label: 'Platform Uptime SLA',       suffix: '%' },
  { val: '190+',   label: 'Countries Supported',        suffix: '' },
  { val: '14,000+',label: 'Enterprise Customers',       suffix: '' },
];

const CAPABILITIES = [
  {
    stack: '01',
    icon: '📅',
    title: 'Books and routes',
    desc: 'Schedules appointments on your calendar, qualifies leads, takes messages, and warm-transfers to a human when it matters.',
    check: true,
  },
  {
    stack: '02',
    icon: '📞',
    title: 'Bring your own numbers',
    desc: 'Keep your existing phone numbers and carrier. Point your line and go live — no migrations, no new hardware.',
    check: true,
  },
  {
    stack: '03',
    icon: '🔌',
    title: 'Native integrations',
    desc: 'Connect with 200+ apps including Salesforce, HubSpot, Zapier, and more without complex setup.',
    check: true,
  },
  {
    stack: '04',
    icon: '📊',
    title: 'Real-time analytics',
    desc: 'Track call volume, sentiment, resolution rates, and ROI with live dashboards and detailed reports.',
    check: true,
  },
];

const TESTIMONIALS = [
  {
    text: 'Conciva AI reduced our customer wait times by 73% in the first month. The AI voice bot handles tier-1 queries flawlessly — our agents now focus only on complex cases.',
    name: 'Sarah Mitchell',
    role: 'VP Operations · TechServe Global',
    initials: 'SM',
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
  },
  {
    text: "The SIP trunking quality is exceptional. We've processed over 50 million minutes with zero unplanned downtime. Best carrier decision we've ever made.",
    name: 'David Chen',
    role: 'CTO · NovaPay Financial',
    initials: 'DC',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
  },
  {
    text: "Integration with our Salesforce instance took under an hour. The live analytics dashboard alone saved our QA team 30 hours per week. Absolutely brilliant product.",
    name: 'Priya Nair',
    role: 'Head of CX · RetailFirst',
    initials: 'PN',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
  },
];

/* ─── Feature Carousel ──────────────────────────────────── */

function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    if (animating || idx === activeIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setAnimating(false);
    }, 320);
  };

  const next = () => goTo((activeIndex + 1) % FEATURES.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, animating]);

  const stackedIndices = [...Array(FEATURES.length).keys()].filter(
    (i) => i !== activeIndex
  );

  return (
    <section className="features-section home-section">
      <div className="home-container">
        <div className="feat-carousel-layout">
          {/* Left — heading + dot nav */}
          <div className="feat-carousel-left">
            <span className="section-eyebrow">⚡ Platform Features</span>
            <h2 className="section-title">
              Everything your team needs<br />to communicate at scale
            </h2>
            <p className="section-sub">
              From AI-powered voice bots to enterprise SIP trunking, Conciva AI
              gives you the complete telephony stack without the complexity.
            </p>

            {/* Dot indicators */}
            <div className="feat-dots" role="tablist" aria-label="Feature navigation">
              {FEATURES.map((f, i) => (
                <button
                  key={f.title}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Feature: ${f.title}`}
                  className={`feat-dot${i === activeIndex ? ' feat-dot--active' : ''}`}
                  onClick={() => {
                    clearInterval(intervalRef.current);
                    goTo(i);
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="feat-progress-bar" aria-hidden="true">
              <div
                key={activeIndex}
                className="feat-progress-fill"
                style={{ animationDuration: '3.5s' }}
              />
            </div>
          </div>

          {/* Right — stacked cards */}
          <div className="feat-carousel-right" aria-live="polite">
            <div className="feat-stack">
              {/* Background ghost cards (depth effect) */}
              {[2, 1].map((depth) => {
                const ghostIdx = stackedIndices[stackedIndices.length - depth];
                if (ghostIdx === undefined) return null;
                const ghost = FEATURES[ghostIdx];
                return (
                  <div
                    key={`ghost-${depth}`}
                    className={`feat-card feat-card--ghost feat-card--depth-${depth}`}
                    aria-hidden="true"
                  >
                    <div className={`feature-icon-wrap ${ghost.bg}`}>
                      <span role="img" aria-label="">{ghost.icon}</span>
                    </div>
                    <h3 className="feature-card-title">{ghost.title}</h3>
                  </div>
                );
              })}

              {/* Active foreground card */}
              <div
                className={`feat-card feat-card--active${animating ? ' feat-card--exit' : ''}`}
              >
                <div className="feat-card-stack-label">
                  STACK · {String(activeIndex + 1).padStart(2, '0')}
                </div>

                <div className="feat-card-top-row">
                  <div className={`feature-icon-wrap ${FEATURES[activeIndex].bg} feat-icon-lg`}>
                    <span role="img" aria-label={FEATURES[activeIndex].title}>
                      {FEATURES[activeIndex].icon}
                    </span>
                  </div>
                </div>

                <h3 className="feature-card-title feat-card--active-title">
                  {FEATURES[activeIndex].title}
                </h3>
                <p className="feature-card-desc">
                  {FEATURES[activeIndex].desc}
                </p>

                {/* Bullet check */}
                <div className="feat-card-check">
                  <span className="check-icon">✓</span>
                  <span className="feature-card-tag" style={{ background: 'none', padding: 0, margin: 0 }}>
                    ✦ {FEATURES[activeIndex].tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            <div className="hero-badge anim-fade-up">
              <span className="hero-badge-dot" />
              New · AI Voice Bot 2.0 is live
            </div>

            <h1 className="hero-headline anim-fade-up delay-1">
              Supercharge Your<br />
              Business Calls with<br />
              <span className="hl-gradient">AI-Powered Voice</span>
            </h1>

            <p className="hero-sub anim-fade-up delay-2">
              Conciva AI gives your team enterprise-grade telephony, intelligent
              AI voice agents, and real-time analytics — all in one unified platform.
            </p>

            <div className="hero-ctas anim-fade-up delay-3">
              <Link to="/pricing" className="btn-hero-primary">
                Start Free Trial <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link to="/features" className="btn-hero-secondary">
                <Play size={15} fill="currentColor" /> Watch Demo
              </Link>
            </div>

            <div className="hero-trust-line anim-fade-up delay-4">
              <div className="hero-avatars" aria-label="Customer avatars">
                {['SR', 'DC', 'PN', 'AK'].map((initials, i) => (
                  <div key={i} className="hero-avatar">{initials}</div>
                ))}
              </div>
              <span className="hero-trust-text">
                Trusted by <strong>14,000+</strong> businesses worldwide
              </span>
            </div>
          </div>

          {/* Right — Dashboard card */}
          <div className="hero-right anim-fade-up delay-2">
            <div className="hero-card-wrapper">
              {/* Floating badge — top left */}
              <div className="hero-float-badge hero-float-badge-1">
                <span className="badge-icon" style={{ background: '#ECFDF5' }}>📞</span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>Active Calls</div>
                  <div style={{ color: '#0F172A' }}>1,247 Live</div>
                </div>
              </div>

              {/* Main card */}
              <div className="hero-dashboard-card">
                <div className="hdc-header">
                  <div className="hdc-avatar">CA</div>
                  <div>
                    <div className="hdc-title">AI Voice Analytics</div>
                    <div className="hdc-sub">Real-time dashboard</div>
                  </div>
                  <div className="hdc-live-badge">
                    <span className="hdc-live-dot" />
                    Live
                  </div>
                </div>

                {/* Waveform bars */}
                <div className="hdc-wave" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="hdc-bar" />
                  ))}
                </div>

                {/* Metrics */}
                <div className="hdc-metrics">
                  <div className="hdc-metric">
                    <span className="hdc-metric-val">98.7%</span>
                    <span className="hdc-metric-label">Accuracy</span>
                  </div>
                  <div className="hdc-metric">
                    <span className="hdc-metric-val">0.3s</span>
                    <span className="hdc-metric-label">Latency</span>
                  </div>
                  <div className="hdc-metric">
                    <span className="hdc-metric-val">4.9★</span>
                    <span className="hdc-metric-label">CSAT</span>
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="hero-float-badge hero-float-badge-2">
                <span className="badge-icon" style={{ background: '#FFF7ED' }}>🤖</span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>AI Handled</div>
                  <div style={{ color: '#F97316' }}>↑ 73% more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURES ── */}
      <FeatureCarousel />

      {/* ── 3. HOW IT WORKS ── */}
      <section className="how-section home-section">
        <div className="home-container">
          <div className="section-header centered">
            <span className="section-eyebrow">🗺 How It Works</span>
            <h2 className="section-title">Up and running in minutes</h2>
            <p className="section-sub">
              No complex onboarding, no dedicated IT team required. Three simple
              steps to replace your legacy phone system.
            </p>
          </div>

          <div className="how-steps">
            {HOW_STEPS.map((step, i) => (
              <div key={step.number} className={`how-step anim-fade-up delay-${i + 1}`}>
                <div className="how-step-number">{step.number}</div>
                <span className="how-step-icon" role="img" aria-label="">{step.icon}</span>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STATS ── */}
      <section className="stats-section home-section">
        <div className="stats-bg-glow" aria-hidden="true" />
        <div className="home-container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className={`stat-item anim-fade-up delay-${i + 1}`}>
                <span className="stat-val">
                  <span className="stat-orange">{s.val}</span>{s.suffix}
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section className="testimonials-section home-section">
        <div className="home-container">
          <div className="section-header centered">
            <span className="section-eyebrow">💬 Customer Stories</span>
            <h2 className="section-title">Loved by teams at scale</h2>
            <p className="section-sub">
              From fast-growing startups to Fortune 500 enterprises, teams rely on
              Conciva AI to run their critical voice operations.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testimonial-card anim-fade-up delay-${i + 1}`}>
                <span className="tc-quote-icon" aria-hidden="true">"</span>
                <div className="tc-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="tc-star">★</span>
                  ))}
                </div>
                <p className="tc-text">{t.text}</p>
                <div className="tc-author">
                  <div
                    className="tc-avatar"
                    style={{ background: t.gradient }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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