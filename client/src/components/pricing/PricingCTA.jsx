import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const TRUST_PILLS = [
  'Sub-second setup',
  'No contracts',
  'Cancel anytime',
  '24/7 support',
];

export default function PricingCTA() {
  return (
    <section className="pricing-cta-section" aria-labelledby="pricing-cta-heading">
      <motion.div
        className="pricing-cta-inner"
        initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="pricing-cta-heading" className="cta-title">
          Try before you commit.
          <br />
          <span className="gradient-text">Talk to our AI receptionist now.</span>
        </h2>

        <p className="cta-subtitle">
          Hear voice latency, routing logic, and handoff quality firsthand — then subscribe
          only when the experience matches your contact center standards.
        </p>

        <div className="cta-actions">
          <Link to="/login" className="btn-cta-primary">
            Get started
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn-cta-secondary">
            <PhoneCall size={16} aria-hidden="true" />
            Talk to an agent
          </Link>
        </div>

        <div className="cta-trust-pill-row" role="list" aria-label="Trust highlights">
          {TRUST_PILLS.map((label, i) => (
            <motion.span
              key={label}
              className="cta-trust-pill"
              role="listitem"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
