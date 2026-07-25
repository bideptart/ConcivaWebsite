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

  return (
    <div className="pricing-page">
      <PricingHero />

      <div className="pricing-container">
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
      </div>

      <div className="pricing-container">
        <PricingMoreLinks />
      </div>

      <PricingFooter />
    </div>
  );
}
