import React, { useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Clock } from 'lucide-react';
import SpecialText from '../../../shared/components/ui/special-text';

const OPTIONS = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'annual', label: 'Yearly', badge: 'Save 20%' },
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
        role="tablist"
        aria-label="Billing cycle"
        onKeyDown={handleKeyDown}
        className="billing-toggle-track"
      >
        {OPTIONS.map((opt) => {
          const active = opt.id === 'annual' ? isAnnual : !isAnnual;
          return (
            <button
              key={opt.id}
              type="button"
              role="tab"
              data-billing={opt.id}
              aria-selected={active}
              onClick={() => setBillingCycle(opt.id)}
              className={`billing-option-btn ${active ? 'active' : ''}`}
            >
              {active && (
                <motion.span
                  layoutId="billing-pill"
                  className="billing-pill-bg"
                  transition={{ type: 'spring', stiffness: 480, damping: 34 }}
                />
              )}
              <span className="billing-option-label">
                <span>{opt.label}</span>
                {opt.badge && active && (
                  <AnimatePresence>
                    <motion.span
                      key={`badge-${opt.id}`}
                      initial={{ scale: 0.7, opacity: 0, y: 2 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.7, opacity: 0, y: 2 }}
                      transition={{ type: 'spring', stiffness: 520, damping: 28 }}
                      className="save-badge"
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
        {isAnnual && (
          <motion.div
            key="annual-savings"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pc-savings-line"
          >
            <SpecialText
              as="span"
              text="Switching to yearly saves you $223 on Growth."
              speedMs={42}
              settleMs={180}
              delayMs={80}
              flickerMs={30}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pc-billing-info" role="note" aria-label="Per-second billing info">
        <span className="pc-billing-info__icon" aria-hidden="true">
          <Clock size={18} strokeWidth={2.25} />
        </span>
        <p className="pc-billing-info__text">
          <strong>Per-second billing</strong>
          <span className="pc-billing-info__dash">—</span>
          pay only for the seconds you use.
        </p>
      </div>
    </div>
  );
}
