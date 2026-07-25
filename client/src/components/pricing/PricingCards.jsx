import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import BillingToggle from './BillingToggle';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Zap,
    tagline: 'Launch voice and chat for a small team.',
    monthly: 49,
    annual: 39,
    featured: false,
    meta: '500 included minutes · 3 agent seats · 1 local number',
    features: [
      'AI receptionist included',
      'Voice, chat & SMS channels',
      'Unified team inbox',
      'Call recording & transcripts',
      'Business-hours routing',
      'Email support',
    ],
    cta: 'Start Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    icon: Rocket,
    tagline: 'Scale routing, CRM sync, and AI handoffs.',
    monthly: 129,
    annual: 103,
    featured: true,
    meta: '2,500 included minutes · 15 agent seats · 3 numbers',
    features: [
      'Everything in Starter',
      'CRM integrations (HubSpot, Salesforce)',
      'Video callbacks & screen share',
      'Custom IVR & skill-based queues',
      'SOC 2 Type II compliance',
      'Priority support',
    ],
    cta: 'Choose Growth',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Building2,
    tagline: 'Global contact centers with custom SLAs.',
    monthly: 349,
    annual: 279,
    featured: false,
    meta: '10,000 included minutes · Unlimited seats · Dedicated CSM',
    features: [
      'Everything in Growth',
      'HIPAA BAA & data residency',
      'SSO / SCIM & audit logs',
      'Custom AI playbooks & APIs',
      'Multi-region redundancy',
      '24/7 dedicated support',
    ],
    cta: 'Talk to sales',
  },
];

function AnimatedPrice({ value }) {
  return (
    <span className="card-price-animated-wrap">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          className="card-price"
          initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const wrapperVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PricingCards({ billingCycle, setBillingCycle }) {
  const isAnnual = billingCycle === 'annual';

  return (
    <section className="pricing-cards-section">
      <motion.div
        className="pricing-block-header"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
      </motion.div>

      <div className="pricing-cards-grid">
        {PLANS.map((plan, index) => {
          const Icon = plan.icon;
          const price = isAnnual ? plan.annual : plan.monthly;
          return (
            <motion.div
              key={plan.id}
              className={`pricing-card-wrapper${plan.featured ? ' featured' : ''}`}
              variants={wrapperVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={index}
            >
              <div className="pricing-card">
                <div className="card-corner-accent" aria-hidden="true" />
                <div className="card-sheen" aria-hidden="true" />

                <h3 className="card-title">
                  {plan.name}
                  {plan.featured && (
                    <motion.span
                      className="popular-tag-wrap"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35, type: 'spring', stiffness: 380, damping: 22 }}
                    >
                      <span className="popular-tag">MOST POPULAR</span>
                    </motion.span>
                  )}
                </h3>
                <p className="card-description">{plan.tagline}</p>

                <div className="card-price-box">
                  <span className="card-currency">$</span>
                  <AnimatedPrice value={price} />
                  <span className="card-period">/mo</span>
                </div>
                <p className="card-price-meta">{plan.meta}</p>

                <AnimatePresence>
                  {isAnnual && (
                    <motion.div
                      key="savings"
                      className="card-savings-pill"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Check size={11} strokeWidth={3} />
                      Save ${(plan.monthly - plan.annual) * 12}/yr vs monthly
                    </motion.div>
                  )}
                </AnimatePresence>

                <ul className="card-features">
                  {plan.features.map((feat, i) => (
                    <motion.li
                      key={feat}
                      className="card-feature-item"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.12 + i * 0.05,
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="feature-check-icon" aria-hidden="true">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`card-cta-btn${plan.featured ? ' primary' : ''}`}
                  aria-label={`${plan.cta} — ${plan.name} plan`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '1.25rem',
          fontSize: '0.82rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        All plans include real-time transcripts, recording, analytics, and unlimited test calls in the playground.
      </motion.p>
    </section>
  );
}
