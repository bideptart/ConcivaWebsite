import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Can I port my existing business phone numbers to Conciva?',
      a: 'Yes, absolutely! We support seamless full-LNP (Local Number Portability) across 100+ countries with zero downtime. Our telecom engineers handle the technical transition for free.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to the Growth & AI plan features with complimentary call test credits. No credit card is required to initiate your trial.',
    },
    {
      q: 'Can I upgrade or downgrade my plan at any time?',
      a: 'Yes. You can adjust your plan tier or add/remove seats dynamically from your Conciva admin dashboard. Prorated adjustments will reflect instantly on your invoice.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and ACH/Wire transfers for annual or enterprise contracts.',
    },
    {
      q: 'Are there any hidden setup fees or contracts?',
      a: 'No. All our monthly plans are commitment-free cancelable anytime. Annual plans come with a 20% discount and 2 months free.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="section-header">
        <div className="section-badge">
          <HelpCircle size={16} />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="section-title">
          Got questions? We've <span className="gradient-text">got answers</span>
        </h2>
      </div>

      <div className="faq-grid">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleFAQ(idx)}
              >
                <span>{faq.q}</span>
                {isOpen ? <ChevronUp size={20} color="#F97316" /> : <ChevronDown size={20} color="#64748B" />}
              </button>
              {isOpen && <div className="faq-answer">{faq.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
