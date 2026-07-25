<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../styles/pricing-tokens.css';
import '../styles/pricing.css';

import PricingHero         from '../components/pricing/PricingHero';
import PricingCards        from '../components/pricing/PricingCards';
import PricingComparison   from '../components/pricing/PricingComparison';
import PricingTestimonials from '../components/pricing/PricingTestimonials';
import PricingFAQ          from '../components/pricing/PricingFAQ';
import PricingCTA          from '../components/pricing/PricingCTA';
import PricingMoreLinks    from '../components/pricing/PricingMoreLinks';
import PricingFooter       from '../components/pricing/PricingFooter';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual');

  useEffect(() => {
    document.title = 'Pricing — Conciva AI Cloud Contact Center';
  }, []);
=======
import React, { useState, useEffect, useRef } from 'react';
import '../styles/pricing-tokens.css';
import '../styles/pricing.css';

import PricingHero          from '../components/pricing/PricingHero';
import PricingCards         from '../components/pricing/PricingCards';
import PricingComparison    from '../components/pricing/PricingComparison';
import PricingTestimonials  from '../components/pricing/PricingTestimonials';
import PricingFAQ           from '../components/pricing/PricingFAQ';
import PricingCTA           from '../components/pricing/PricingCTA';
import PricingMoreLinks     from '../components/pricing/PricingMoreLinks';
import PricingFooter        from '../components/pricing/PricingFooter';
import PlanFinderWizard     from '../components/pricing/PlanFinderWizard';
import UsageCalculator      from '../components/pricing/UsageCalculator';
import FeatureComparisonMatrix from '../components/pricing/FeatureComparisonMatrix';
import TestimonialCarousel  from '../components/pricing/TestimonialCarousel';

/* ─── Intersection-observer based reveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── Trust / integrations logo strip ─── */
const TRUST_LOGOS = [
  { icon: '🔗', label: 'Salesforce' },
  { icon: '🟠', label: 'HubSpot' },
  { icon: '🟦', label: 'Zoho CRM' },
  { icon: '⚡', label: 'Zapier' },
  { icon: '🛍️', label: 'Shopify' },
  { icon: '📊', label: 'LeadSquared' },
  { icon: '💬', label: 'WhatsApp' },
  { icon: '📅', label: 'Google Calendar' },
];

function TrustStrip() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`trust-strip ${visible ? 'reveal-up' : ''}`}>
      <p className="trust-strip-label">Integrates with tools your team already uses</p>
      <div className="trust-strip-logos">
        {TRUST_LOGOS.map((t, i) => (
          <span
            key={t.label}
            className={`trust-logo-pill ${visible ? `reveal-up delay-${Math.min(i + 1, 6)}` : ''}`}
          >
            <span className="trust-logo-icon">{t.icon}</span>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Social proof stat counter strip ─── */
const STATS = [
  { val: '14,000+', lbl: 'Businesses using Conciva AI' },
  { val: '99.99%',  lbl: 'Uptime SLA guarantee' },
  { val: '10+',     lbl: 'Indian languages supported' },
  { val: '<300ms',  lbl: 'Average AI response latency' },
];

function StatCounterStrip() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`stat-counter-strip ${visible ? 'reveal-scale' : ''}`}>
      {STATS.map((s, i) => (
        <div key={i} className="stat-counter-cell">
          <span className="stat-counter-val">{s.val}</span>
          <span className="stat-counter-lbl">{s.lbl}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Enterprise contact row ─── */
function EnterpriseRow() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`enterprise-row ${visible ? 'reveal-up' : ''}`}>
      <div className="enterprise-row-text">
        <span className="enterprise-row-title">Need a custom enterprise or carrier plan?</span>
        <span className="enterprise-row-sub">
          Dedicated SIP trunks, 99.999% SLA, HIPAA BAA, and white-glove onboarding.
        </span>
      </div>
      <div className="enterprise-row-actions">
        <a href="/contact" className="enterprise-btn-primary">
          Talk to Enterprise Sales →
        </a>
        <a href="/contact" className="enterprise-btn-outline">
          Schedule a Demo
        </a>
      </div>
    </div>
  );
}

/* ─── Reveal wrapper for each section ─── */
function RevealSection({ children, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`${visible ? 'reveal-up' : ''} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Page ─── */
export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual');
>>>>>>> d16d53b2e3c29e81a0d108f59c1f2c68c737efe6

  return (
    <div className="pricing-page">
      <div className="pricing-container">
<<<<<<< HEAD
        <PricingCards
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
      </div>

      <div className="pricing-container">
        <PricingComparison />
      </div>

      <div className="pricing-container">
        <PricingTestimonials />
      </div>

      <div className="pricing-container">
        <PricingFAQ />
      </div>

      <div className="pricing-container">
        <PricingCTA />
=======
        <PricingHero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

        {/* 2. Social proof stats */}
        <StatCounterStrip />

        {/* 3. Trust / integrations logo strip */}
        <TrustStrip />

        {/* 4. Pricing cards */}
        <RevealSection>
          <PricingCards billingCycle={billingCycle} />
        </RevealSection>

        {/* 5. Enterprise contact row */}
        <EnterpriseRow />

        {/* 6. Plan finder wizard */}
        <RevealSection>
          <PlanFinderWizard
            onSelectRecommended={(plan) => {
              document.getElementById('pricing-cards-anchor')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </RevealSection>

        {/* 7. Usage & ROI calculator */}
        <RevealSection>
          <UsageCalculator />
        </RevealSection>

        {/* 8. Feature comparison matrix */}
        <RevealSection>
          <FeatureComparisonMatrix />
        </RevealSection>

        {/* 9. Testimonial carousel */}
        <RevealSection>
          <TestimonialCarousel />
        </RevealSection>

        {/* 10. FAQ */}
        <RevealSection>
          <PricingFAQ />
        </RevealSection>

        {/* 11. CTA banner */}
        <RevealSection>
          <PricingCTA />
        </RevealSection>
>>>>>>> d16d53b2e3c29e81a0d108f59c1f2c68c737efe6
      </div>

      <div className="pricing-container">
        <PricingMoreLinks />
      </div>

      <PricingFooter />
    </div>
  );
}
