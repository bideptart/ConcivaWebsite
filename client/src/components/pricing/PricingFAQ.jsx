import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'How does pricing work across Starter, Growth, and Enterprise?',
    a: 'Each tier bundles included voice minutes, agent seats, and channel access. You pay a flat monthly fee (or yearly with 20% off). Overages bill per second at published rates. Upgrade anytime; changes prorate on your next invoice.',
  },
  {
    q: 'Do included minutes roll over month to month?',
    a: 'Included minutes reset each billing cycle so forecasting stays simple. Enterprise customers can request pooled minute banks across regions. All plans show live usage in the admin dashboard with optional alerts at 80% and 100%.',
  },
  {
    q: 'Are there hidden fees for numbers, AI, or integrations?',
    a: 'No setup fees and no separate AI surcharge — the receptionist is included. Additional local or toll-free numbers are add-ons with published rates. CRM connectors on Growth+ are included; custom API work is scoped on Enterprise.',
  },
  {
    q: 'Do you offer refunds if we cancel early?',
    a: 'Monthly plans cancel at period end with no penalty. Yearly plans include a 20% discount; if you cancel mid-term, unused months refund pro-rata to your original payment method within 5–7 business days.',
  },
  {
    q: 'Can we exceed standard minute bundles on Enterprise?',
    a: 'Yes. Enterprise includes negotiable minute pools and committed-use discounts. Your success manager can raise caps, enable burst concurrency, or attach a custom overage schedule without changing your core contract.',
  },
];

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  function toggle(idx) {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  }

  return (
    <section className="faq-section" aria-labelledby="pricing-faq-heading">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-badge">FAQ</p>
        <h2 id="pricing-faq-heading" className="section-title">
          Billing questions, <span className="gradient-text">answered</span>
        </h2>
        <p className="section-subtitle">
          Straight answers on credit, billing cycles, and what happens when your minutes run out — no jargon, no surprise charges.
        </p>
      </motion.div>

      <div className="faq-grid">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <motion.div
              key={faq.q}
              className={`faq-item ${isOpen ? 'open' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                id={buttonId}
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{faq.q}</span>
                <motion.span
                  className="faq-icon-wrap"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                >
                  <Plus size={18} strokeWidth={2.25} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
