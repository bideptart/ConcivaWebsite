import React, { useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const OPTIONS = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'annual', label: 'Yearly', badge: '−20%' },
];

export default function BillingToggle({ billingCycle, setBillingCycle, className = '' }) {
  const isAnnual = billingCycle === 'annual';
  const trackRef = useRef(null);

  const focusOption = useCallback((id) => {
    const btn = trackRef.current?.querySelector(`[data-billing="${id}"]`);
    btn?.focus();
  }, []);

  function handleKeyDown(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const next = isAnnual ? 'monthly' : 'annual';
    setBillingCycle(next);
    focusOption(next);
  }

  return (
    <div className={`billing-switch-wrapper ${className}`}>
      <div
        ref={trackRef}
        className="billing-toggle-track"
        role="tablist"
        aria-label="Billing cycle"
        onKeyDown={handleKeyDown}
      >
        {OPTIONS.map((opt) => {
          const active = (opt.id === 'annual') === isAnnual;
          return (
            <button
              key={opt.id}
              type="button"
              role="tab"
              data-billing={opt.id}
              aria-selected={active}
              className={`billing-option-btn ${active ? 'active' : ''}`}
              onClick={() => setBillingCycle(opt.id)}
            >
              {active && (
                <motion.span
                  layoutId="billing-pill"
                  className="billing-pill-bg"
                  transition={{ type: 'spring', stiffness: 480, damping: 34 }}
                />
              )}
              <span className="billing-option-label">
                {opt.label}
                {opt.badge && active && (
                  <AnimatePresence>
                    <motion.span
                      key="badge"
                      className="save-badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                    >
                      {opt.badge}
                    </motion.span>
                  </AnimatePresence>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {!isAnnual && (
          <motion.span
            key="nudge"
            className="billing-nudge"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3 }}
          >
            <TrendingUp size={13} aria-hidden="true" /> Save 20% on yearly billing
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
