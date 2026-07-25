import React, { useState } from 'react';
import '../styles/pricing.css';

import PricingHero from '../components/pricing/PricingHero';
import PricingCards from '../components/pricing/PricingCards';
import PlanFinderWizard from '../components/pricing/PlanFinderWizard';
import UsageCalculator from '../components/pricing/UsageCalculator';
import FeatureComparisonMatrix from '../components/pricing/FeatureComparisonMatrix';
import TestimonialCarousel from '../components/pricing/TestimonialCarousel';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingCTA from '../components/pricing/PricingCTA';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        {/* 1. Hero & Billing Switch */}
        <PricingHero
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        {/* 2. 3D Pricing Cards */}
        <PricingCards billingCycle={billingCycle} />

        {/* 3. Interactive Plan Finder Recommendation Wizard */}
        <PlanFinderWizard />

        {/* 4. 21.dev Style Usage & ROI Calculator */}
        <UsageCalculator />

        {/* 5. Feature Comparison Matrix (9278.io Structure) */}
        <FeatureComparisonMatrix />

        {/* 6. 21.dev Style Testimonial Carousel */}
        <TestimonialCarousel />

        {/* 7. Frequently Asked Questions */}
        <PricingFAQ />

        {/* 8. Call To Action Banner */}
        <PricingCTA />
      </div>
    </div>
  );
}
