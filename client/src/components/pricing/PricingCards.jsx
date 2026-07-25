import React, { useState } from 'react';
import { Check, PhoneCall, Bot, Building2, Globe, ArrowRight, Zap } from 'lucide-react';

export default function PricingCards({ billingCycle }) {
  // Mouse 3D tilt tracking state
  const [tilt, setTilt] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position within card
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate maximum 12 degrees
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ [index]: { rotateX, rotateY } });
  };

  const handleMouseLeave = (index) => {
    setTilt({ [index]: { rotateX: 0, rotateY: 0 } });
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: PhoneCall,
      description: 'Ideal for small teams requiring dependable VoIP and virtual phone numbers.',
      monthlyPrice: 29,
      annualPrice: 23,
      features: [
        'Up to 5 User Seats',
        '2 Local or Toll-Free Numbers',
        'Unlimited Domestic Calls',
        'HD Voice & WebRTC Softphone',
        'Basic IVR Auto-Attendant',
        'Email Support & 99.9% SLA'
      ],
      ctaText: 'Start Free Trial',
      featured: false,
    },
    {
      id: 'growth',
      name: 'Growth & AI',
      icon: Bot,
      description: 'Designed for scaling companies wanting automated AI voice agents & CRM syncing.',
      monthlyPrice: 79,
      annualPrice: 63,
      features: [
        'Up to 25 User Seats',
        '10 Global Virtual Numbers',
        'Unlimited AI Call Summaries & Transcripts',
        'AI Conversational Bot (500 min/mo)',
        'Salesforce & HubSpot CRM Integrations',
        'Smart Call Queueing & Round-Robin Routing',
        'Priority 24/7 Live Support'
      ],
      ctaText: 'Get Started with Growth',
      featured: true,
      popularTag: 'Most Popular Choice',
    },
    {
      id: 'scale',
      name: 'Enterprise',
      icon: Building2,
      description: 'Full telecom infrastructure for high-volume call centers and global operations.',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Unlimited User Seats',
        'Unlimited International Numbers',
        'Dedicated SIP Trunking & Carrier Connectivity',
        'Custom AI Voice Model Training',
        '99.999% Uptime Guarantee & SLA',
        'HIPAA & SOC-2 Type II Compliance',
        'Dedicated Account Manager & Solution Engineer'
      ],
      ctaText: 'Contact Enterprise Team',
      featured: false,
    },
    {
      id: 'custom',
      name: 'Telecom API',
      icon: Globe,
      description: 'Custom carrier pricing for custom CPaaS, SMS APIs, and carrier-grade routing.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: [
        'Pay-per-minute or custom volume discounts',
        'Direct Tier-1 Carrier Interconnects',
        'Programmable Voice & SMS APIs',
        'Custom Webhooks & Real-time Call Events',
        'Whitelabel Admin Dashboard',
        '24/7 Telecom Engineer Hotline'
      ],
      ctaText: 'Talk to Engineers',
      featured: false,
    }
  ];

  return (
    <div className="pricing-cards-grid">
      {plans.map((plan, index) => {
        const IconComponent = plan.icon;
        const cardTilt = tilt[index] || { rotateX: 0, rotateY: 0 };

        const price = plan.monthlyPrice === 'Custom'
          ? 'Custom'
          : billingCycle === 'annual'
            ? plan.annualPrice
            : plan.monthlyPrice;

        return (
          <div
            key={plan.id}
            className={`pricing-card-wrapper ${plan.featured ? 'featured' : ''}`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg) ${
                plan.featured ? 'scale(1.03)' : 'scale(1)'
              }`,
            }}
          >
            <div className="pricing-card">
              <div className="card-sheen" />

              {plan.popularTag && (
                <div className="popular-tag">
                  {plan.popularTag}
                </div>
              )}

              <div className="card-header-icon">
                <IconComponent size={24} />
              </div>

              <h3 className="card-title">{plan.name}</h3>
              <p className="card-description">{plan.description}</p>

              <div className="card-price-box">
                {price !== 'Custom' && <span className="card-currency">$</span>}
                <span className="card-price">{price}</span>
                {price !== 'Custom' && (
                  <span className="card-period">
                    / seat / {billingCycle === 'annual' ? 'mo (billed annually)' : 'mo'}
                  </span>
                )}
              </div>

              <div className="card-features-title">What's included:</div>
              <ul className="card-features">
                {plan.features.map((feat, fIndex) => (
                  <li key={fIndex} className="card-feature-item">
                    <span className="feature-check-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`card-cta-btn ${plan.featured ? 'primary' : ''}`}
              >
                <span>{plan.ctaText}</span>
                {plan.featured ? <Zap size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
