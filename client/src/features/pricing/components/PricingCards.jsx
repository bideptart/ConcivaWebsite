import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import BillingToggle from './BillingToggle';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Pilot a single agent.',
    monthly: 31,
    annual: 25,
    featured: false,
    meta: '250 min · $0.13/min · 2 agents',
    features: [
      '2 AI voice agents',
      '250 included minutes',
      '$0.13/min effective rate',
      'Inbound calling',
      'Per-second billing',
      'Standard voice stack',
      'Call recording',
      'Real-time transcription',
      'Email support',
    ],
    cta: 'Get started',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Most teams start here.',
    monthly: 93,
    annual: 74,
    featured: true,
    meta: '800 min · $0.12/min · 10 agents',
    features: [
      '10 AI voice agents',
      '800 included minutes',
      '$0.12/min effective rate',
      'Inbound calling',
      'Per-second billing',
      'Standard + premium voices',
      'Call recording',
      'Real-time transcription',
      'Priority support',
    ],
    cta: 'Choose Growth',
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'High-volume call centers.',
    monthly: 316,
    annual: 253,
    featured: false,
    meta: '3,000 min · $0.11/min · Unlimited',
    features: [
      'Unlimited AI voice agents',
      '3,000 included minutes',
      '$0.11/min effective rate',
      'Inbound calling',
      'Per-second billing',
      'Realtime + premium voices',
      'Call recording',
      'Real-time transcription',
      'Dedicated success manager + SLA',
    ],
    cta: 'Get started',
  },
];

function AnimatedPrice({ value }) {
  return (
    <span className="pc-price-wrap">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          className="pc-price-num"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 30 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function PricingCards({ billingCycle, setBillingCycle }) {
  const isAnnual = billingCycle === 'annual';
  const growthMonthly = 93;
  const growthAnnual = 74;
  const annualSavingsGrowth = Math.round((growthMonthly - growthAnnual) * 12);

  return (
    <section className="pc-section">
      <div className="pc-toggle-sticky-wrap">
        <div className="pc-toggle-sticky">
          <div className="pc-toggle-row">
            <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
          </div>
        </div>
      </div>

      <div className="pc-grid">
        {PLANS.map((plan, idx) => {
          const price = isAnnual ? plan.annual : plan.monthly;
          return (
            <motion.article
              key={plan.id}
              className={`pc-card${plan.featured ? ' pc-card--featured' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {plan.featured && (
                <div className="pc-badge-row">
                  <span className="pc-badge">MOST POPULAR</span>
                </div>
              )}

              <h3 className="pc-name">{plan.name}</h3>
              <p className="pc-tagline">{plan.tagline}</p>

              <div className="pc-price-row">
                <span className="pc-currency">$</span>
                <AnimatedPrice value={price} />
                <span className="pc-period">/mo</span>
              </div>
              <p className="pc-meta">{plan.meta}</p>
              <div className="pc-divider" aria-hidden="true" />

              <AnimatePresence>
                {isAnnual && (
                  <motion.div
                    key="savings"
                    className="pc-savings"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Check size={11} strokeWidth={3} />
                    Save ${Math.round((plan.monthly - plan.annual) * 12)}/yr vs monthly
                  </motion.div>
                )}
              </AnimatePresence>

              <ul className="pc-features">
                {plan.features.map((feat) => (
                  <li key={feat} className="pc-feat">
                    <span className="pc-check" aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`pc-cta${plan.featured ? ' pc-cta--primary' : ''}`}
              >
                {plan.cta}
              </button>
            </motion.article>
          );
        })}
      </div>

      <p className="pc-footnote">
        All plans include real-time transcripts, recording, analytics, and unlimited test calls.
      </p>
    </section>
  );
}
