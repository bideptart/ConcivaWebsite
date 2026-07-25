import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import '../styles/home.css';

/* ─── Data ─────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    stack: '01',
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    title: 'Answers every call, 24/7',
    desc: 'Conciva AI picks up instantly — no hold music, no voicemail. Every inbound call is handled with human-like conversation, any time of day.',
    bullet: 'Zero missed calls',
  },
  {
    stack: '02',
    iconBg: '#F0FDF4',
    iconColor: '#16A34A',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Books and routes',
    desc: 'Schedules appointments on your calendar, qualifies leads, takes messages, and warm-transfers to a human when it matters.',
    bullet: 'Calendar booking + warm transfer',
  },
  {
    stack: '03',
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Bring your own numbers',
    desc: 'Keep your existing phone numbers and carrier. Point your line and go live — no migrations, no new hardware.',
    bullet: 'Keep your number and carrier',
  },
  {
    stack: '04',
    iconBg: '#FFF7ED',
    iconColor: '#EA580C',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Live call analytics',
    desc: 'Real-time transcripts, sentiment scoring, and agent performance dashboards. Know exactly what is happening on every call.',
    bullet: 'Real-time transcripts + CSAT',
  },
  {
    stack: '05',
    iconBg: '#F5F3FF',
    iconColor: '#7C3AED',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Enterprise security',
    desc: 'SOC 2 Type II certified. End-to-end encryption. HIPAA and GDPR compliant infrastructure out of the box, on every plan.',
    bullet: 'SOC 2 · HIPAA · GDPR',
  },
  {
    stack: '06',
    iconBg: '#F0FDF4',
    iconColor: '#16A34A',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
      </svg>
    ),
    title: 'Native integrations',
    desc: 'Connect with 200+ apps including Salesforce, HubSpot, and Zapier. Bi-directional sync, no middleware, no upgrade required.',
    bullet: '200+ native integrations',
  },
];

const HOW_STEPS = [
  {
    number: '01',
    title: 'Configure your agent',
    desc: 'Set up your AI voice bot in minutes with our no-code builder. Define personas, call flows, and escalation paths.',
  },
  {
    number: '02',
    title: 'Connect your systems',
    desc: 'Integrate with your CRM, helpdesk, or calendar via 200+ native integrations or our REST API.',
  },
  {
    number: '03',
    title: 'Go live and scale',
    desc: 'Launch in production instantly. Scale from 10 to 10,000 concurrent calls without infrastructure changes.',
  },
];

const STATS = [
  { val: '2.4B+',   label: 'Minutes handled monthly' },
  { val: '99.99%',  label: 'Platform uptime SLA' },
  { val: '190+',    label: 'Countries supported' },
  { val: '14,000+', label: 'Enterprise customers' },
];

const TESTIMONIALS = [
  {
    text: 'Conciva AI reduced our customer wait times by 73% in the first month. The AI voice bot handles tier-1 queries flawlessly — our agents now focus only on complex cases.',
    name: 'Sarah Mitchell',
    role: 'VP Operations · TechServe Global',
    initials: 'SM',
    color: '#2563EB',
  },
  {
    text: "The SIP trunking quality is exceptional. We've processed over 50 million minutes with zero unplanned downtime. Best carrier decision we've ever made.",
    name: 'David Chen',
    role: 'CTO · NovaPay Financial',
    initials: 'DC',
    color: '#7C3AED',
  },
  {
    text: "Integration with our Salesforce instance took under an hour. The live analytics dashboard alone saved our QA team 30 hours per week. Absolutely brilliant product.",
    name: 'Priya Nair',
    role: 'Head of CX · RetailFirst',
    initials: 'PN',
    color: '#16A34A',
  },
];

/* ─── Capability Stack (kallus-style) ───────────────────── */

function CapabilityStack() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrolled = -rect.top;
      const total = sectionHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const idx = Math.min(
        CAPABILITIES.length - 1,
        Math.floor(progress * CAPABILITIES.length)
      );
      setActiveIdx(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cap-section home-section" ref={sectionRef}>
      <div className="cap-inner">
        {/* ── Left: sticky headline ── */}
        <div className="cap-left">
          <span className="cap-badge">THE CAPABILITY LIBRARY</span>

          <h2 className="cap-headline">
            Everything your business needs —{' '}
            <span className="cap-hl">at machine scale.</span>
          </h2>

          <p className="cap-body">
            Conciva AI answers, understands, books, and routes every call.
            Here's what powers the conversation.
          </p>

          <div className="cap-ctas">
            <Link to="/features" className="btn-cap-primary">
              See the full feature matrix <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link to="/contact" className="btn-cap-secondary">
              Book a demo
            </Link>
          </div>

          {/* progress dots */}
          <div className="cap-dots" aria-hidden="true">
            {CAPABILITIES.map((_, i) => (
              <span
                key={i}
                className={`cap-dot${i === activeIdx ? ' cap-dot--active' : i < activeIdx ? ' cap-dot--done' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* ── Right: scroll-driven card stack ── */}
        <div className="cap-right">
          <div className="cap-card-stack">
            {CAPABILITIES.map((cap, i) => {
              const offset = i - activeIdx;
              const isActive  = offset === 0;
              const isBelow1  = offset === 1;
              const isBelow2  = offset === 2;
              const isAbove   = offset < 0;

              let transform = 'translateY(0) scale(1)';
              let opacity   = 1;
              let zIndex    = 10 - Math.abs(offset);

              if (isAbove) {
                transform = `translateY(-${Math.abs(offset) * 12}px) scale(${1 - Math.abs(offset) * 0.03})`;
                opacity   = Math.max(0, 1 - Math.abs(offset) * 0.35);
              } else if (isBelow1) {
                transform = 'translateY(14px) scale(0.97)';
                opacity   = 0.72;
              } else if (isBelow2) {
                transform = 'translateY(26px) scale(0.94)';
                opacity   = 0.44;
              } else if (offset > 2) {
                transform = 'translateY(36px) scale(0.91)';
                opacity   = 0;
              }

              return (
                <div
                  key={cap.stack}
                  className={`cap-card${isActive ? ' cap-card--active' : ''}`}
                  style={{ transform, opacity, zIndex }}
                  aria-hidden={!isActive}
                >
                  <div className="cap-card-header">
                    <span className="cap-card-stack-no">STACK · {cap.stack}</span>
                    <span
                      className="cap-card-icon"
                      style={{ background: cap.iconBg, color: cap.iconColor }}
                    >
                      {cap.icon}
                    </span>
                  </div>

                  <h3 className="cap-card-title">{cap.title}</h3>
                  <p className="cap-card-desc">{cap.desc}</p>

                  <div className="cap-card-bullet">
                    <span className="cap-card-check" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {cap.bullet}
                  </div>
                </div>
              );
            })}
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
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid-lines" />
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge anim-fade-up">
              <span className="hero-badge-dot" />
              New · AI Voice Bot 2.0 is live
            </div>

            <h1 className="hero-headline anim-fade-up delay-1">
              Supercharge your<br />
              business calls with<br />
              <span className="hl-blue">AI-powered voice</span>
            </h1>

            <p className="hero-sub anim-fade-up delay-2">
              Conciva AI gives your team enterprise-grade telephony, intelligent
              AI voice agents, and real-time analytics — all in one unified platform.
            </p>

            <div className="hero-ctas anim-fade-up delay-3">
              <Link to="/pricing" className="btn-hero-primary">
                Start free trial <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link to="/features" className="btn-hero-secondary">
                <Play size={14} fill="currentColor" /> Watch demo
              </Link>
            </div>

            <div className="hero-trust-line anim-fade-up delay-4">
              <div className="hero-avatars" aria-label="Customer avatars">
                {['SR', 'DC', 'PN', 'AK'].map((init, i) => (
                  <div key={i} className="hero-avatar">{init}</div>
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
              <div className="hero-float-badge hero-float-badge-1">
                <span className="badge-icon" style={{ background: '#EFF6FF', color: '#2563EB' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>Active Calls</div>
                  <div style={{ color: '#0F172A', fontWeight: 700 }}>1,247 Live</div>
                </div>
              </div>

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

                <div className="hdc-wave" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="hdc-bar" />
                  ))}
                </div>

                <div className="hdc-metrics">
                  {[['98.7%','Accuracy'],['0.3s','Latency'],['4.9★','CSAT']].map(([v,l]) => (
                    <div key={l} className="hdc-metric">
                      <span className="hdc-metric-val">{v}</span>
                      <span className="hdc-metric-label">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-float-badge hero-float-badge-2">
                <span className="badge-icon" style={{ background: '#F0FDF4', color: '#16A34A' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>AI Handled</div>
                  <div style={{ color: '#16A34A', fontWeight: 700 }}>↑ 73% more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CAPABILITY STACK (kallus-style) ── */}
      <CapabilityStack />

      {/* ── 3. HOW IT WORKS ── */}
      <section className="how-section home-section">
        <div className="home-container">
          <div className="section-header centered">
            <span className="section-eyebrow">HOW IT WORKS</span>
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
                <span className="stat-val">{s.val}</span>
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
            <span className="section-eyebrow">CUSTOMER STORIES</span>
            <h2 className="section-title">Loved by teams at scale</h2>
            <p className="section-sub">
              From fast-growing startups to Fortune 500 enterprises, teams rely on
              Conciva AI to run their critical voice operations.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testimonial-card anim-fade-up delay-${i + 1}`}>
                <div className="tc-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="tc-star">★</span>
                  ))}
                </div>
                <p className="tc-text">{t.text}</p>
                <div className="tc-author">
                  <div className="tc-avatar" style={{ background: t.color }} aria-hidden="true">
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

      {/* ── 6. CTA ── */}
      <section className="cta-section home-section">
        <div className="home-container">
          <div className="cta-inner">
            <h2 className="cta-headline">
              Ready to transform your<br />customer communications?
            </h2>
            <p className="cta-sub">
              Join 14,000+ businesses using Conciva AI to handle millions of calls
              with intelligence and reliability.
            </p>
            <div className="cta-buttons">
              <Link to="/pricing" className="btn-cta-primary">
                Start free trial <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link to="/contact" className="btn-cta-ghost">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
