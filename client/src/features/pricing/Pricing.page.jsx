import React, { useState, useEffect } from 'react';
import './pricing-tokens.css';
import './pricing.css';

import PricingHero         from './components/PricingHero';
import PricingCards        from './components/PricingCards';
import PricingComparison   from './components/PricingComparison';
import PricingTestimonials from './components/PricingTestimonials';
import PricingFAQ          from './components/PricingFAQ';
import PricingCTA          from './components/PricingCTA';
import PricingMoreLinks    from './components/PricingMoreLinks';
import PricingFooter       from './components/PricingFooter';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual');

  useEffect(() => {
    document.title = 'Pricing — Conciva AI';
  }, []);

  return (
    <div className="pricing-page">
      <PricingHero />
      <div className="pricing-container">
        <PricingCards
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
        <PricingComparison />
        <PricingTestimonials />
        <PricingFAQ />
        <PricingCTA />
        <PricingMoreLinks />
      </div>
      <PricingFooter />
    </div>
  );
}