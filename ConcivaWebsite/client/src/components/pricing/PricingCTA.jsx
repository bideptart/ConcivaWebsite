import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

export default function PricingCTA() {
  return (
    <div className="pricing-cta-banner">
      <div className="cta-glow-accent" />
      <div className="cta-content">
        <div className="section-badge" style={{ background: 'rgba(249, 115, 22, 0.15)', borderColor: 'rgba(249, 115, 22, 0.4)', color: '#F97316' }}>
          <Sparkles size={16} />
          <span>Supercharge Your Communication</span>
        </div>

        <h2 className="cta-title">
          Ready to transform your business phone system?
        </h2>
        <p className="cta-subtitle">
          Join thousands of fast-growing businesses using Conciva & Letsdial to power their global calls, AI routing, and virtual numbers.
        </p>

        <div className="cta-actions">
          <button type="button" className="btn-cta-primary">
            Start 14-Day Free Trial <ArrowRight size={18} style={{ display: 'inline', marginLeft: '6px', verticalAlign: 'middle' }} />
          </button>
          <button type="button" className="btn-cta-secondary">
            <PhoneCall size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} /> Schedule Live Demo
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.85rem', color: '#94A3B8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={16} color="#10B981" /> Instant activation
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={16} color="#10B981" /> Cancel anytime
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={16} color="#10B981" /> No credit card needed
          </span>
        </div>
      </div>
    </div>
  );
}
