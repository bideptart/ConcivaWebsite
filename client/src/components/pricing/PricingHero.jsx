import React from 'react';
import { Sparkles, Zap, ShieldCheck, Globe, Bot } from 'lucide-react';

export default function PricingHero({ billingCycle, setBillingCycle }) {
  return (
    <section className="pricing-hero">
      <div className="hero-glow-bg" />
      <div className="hero-mesh-grid" />

      {/* Ambient 3D Floating Widget - Left Margin (Global Carrier Network Telemetry) */}
      <div className="hero-ambient-widget left" title="Live Global Telemetry Status">
        <div className="widget-icon-box">
          <Globe size={22} color="#F97316" />
        </div>
        <div className="widget-content">
          <div className="widget-title">
            <span>Global Carrier Mesh</span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
          </div>
          <div className="widget-stat">
            <span>190+ Countries • &lt;15ms Latency</span>
          </div>
        </div>
      </div>

      {/* Ambient 3D Floating Widget - Right Margin (Live AI Assistant Stream) */}
      <div className="hero-ambient-widget right" title="Live AI Voice Bot Streaming">
        <div className="widget-icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
          <Bot size={22} color="#10B981" />
        </div>
        <div className="widget-content">
          <div className="widget-title">
            <span>AI Voice Bots Live</span>
            <div className="audio-bars">
              <div className="audio-bar" />
              <div className="audio-bar" />
              <div className="audio-bar" />
            </div>
          </div>
          <div className="widget-stat">
            <span>1,420 Concurrent AI Calls</span>
          </div>
        </div>
      </div>

      <div className="section-badge">
        <Sparkles size={16} />
        <span>Transparent & Scalable Plans</span>
      </div>

      <h1 className="section-title">
        Predictable pricing for <br />
        <span className="gradient-text">every growth stage</span>
      </h1>

      <p className="section-subtitle">
        Pick the ideal plan for your enterprise telephony, AI voice agents, and global virtual numbers. <br />
        No hidden fees. Switch or cancel anytime.
      </p>

      {/* 21.dev Style Billing Toggle */}
      <div className="billing-switch-wrapper">
        <div className="billing-switch-container">
          <button
            type="button"
            className={`billing-option-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly Billing
          </button>
          
          <button
            type="button"
            className={`billing-option-btn ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual Billing
            <span className="discount-badge">Save 20% + 2 Months Free</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem', fontSize: '0.85rem', color: '#64748B' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Zap size={14} color="#F97316" /> Instant Setup & Number Porting
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <ShieldCheck size={14} color="#10B981" /> 14-Day Money-Back Guarantee
        </span>
      </div>
    </section>
  );
}
