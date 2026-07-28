import React, { useState } from 'react';
import { INDUSTRIES_DATA, CAPABILITIES, FAQS } from '../constants/industriesData';
import IndustryCard from '../components/industries/IndustryCard';
import IndustryModal from '../components/industries/IndustryModal';
import HeroVoiceVisual from '../components/common/HeroVoiceVisual';
import IndustryVerticalExplorer from '../components/industries/IndustryVerticalExplorer';
import StackedCapabilityCards from '../components/industries/StackedCapabilityCards';
import '../styles/industries.css';

function Industries() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedModalIndustry, setSelectedModalIndustry] = useState(null);

  // Extract unique category tabs
  const categories = ['All', ...INDUSTRIES_DATA.map(i => i.category)];

  // Filter industries by active tab and search query
  const filteredIndustries = INDUSTRIES_DATA.filter(ind => {
    const matchesCategory = selectedCategory === 'All' || ind.category === selectedCategory;
    const matchesSearch = ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="industries-page-wrapper">
      {/* 1. Hero Section */}
      <section className="hero-section ind-hero-revamp">
        {/* Ambient background blobs */}
        <div className="ind-blob ind-blob-1" />
        <div className="ind-blob ind-blob-2" />
        <div className="ind-blob ind-blob-3" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ind-hero-inner">

            {/* Left — Content */}
            <div className="ind-hero-content">
              <div className="eyebrow-badge">
                <span className="badge-pulse" />
                PRE-TUNED FOR THE CALLS YOU ACTUALLY TAKE
              </div>

              <h1 className="ind-hero-h1">
                One AI. Every <br />
                <span className="ind-hero-gradient-text">Industry.</span>
              </h1>

              <p className="ind-hero-sub">
                Voice agents that answer calls, qualify leads, and book appointments — across Healthcare, Real Estate, Finance, EdTech, and more. Fluent in 10+ Indian languages. Live in 5 minutes.
              </p>

              {/* Trust badges */}
              <div className="ind-trust-row">
                <span className="ind-trust-pill">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="2" y="3" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M5 3V2a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="7" cy="7.5" r="1" fill="currentColor"/></svg>
                  HIPAA
                </span>
                <span className="ind-trust-pill">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1.5" y="4" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 6h11" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="7.5" width="2.5" height="1.5" rx="0.5" fill="currentColor"/></svg>
                  PCI-DSS
                </span>
                <span className="ind-trust-pill">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1L2 3v4c0 2.8 2.2 4.5 5 5 2.8-.5 5-2.2 5-5V3L7 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ISO 27001
                </span>
                <span className="ind-trust-pill">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5L2.5 7h4.5L5.5 12.5 11.5 7H7L7 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/></svg>
                  Sub-300ms
                </span>
              </div>

              <div className="hero-actions">
                <a href="#explore-industries" className="btn-primary">
                  Explore Industries →
                </a>
                <a href="#contact" className="btn-outline">
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Right — AI voice pipeline illustration */}
            <HeroVoiceVisual />
          </div>
        </div>
      </section>

      {/* 2. Industry Feature Showcase (Interactive Vertical Explorer Hub) */}
      <section className="industries-section" id="explore-industries">
        <div className="container">
         <div className="scc-heading-block" style={{ padding: '0 0 3rem' }}>
            <span className="scc-eyebrow">Industry Architectures</span>
            <h2 className="scc-section-title">
              Industry <span className="scc-title-accent">Architectures</span>
            </h2>
            <p className="scc-section-sub">
              Engineered for Industry Specific Challenges — every vertical gets its own workflows, compliance certifications, and pre-built integrations.
            </p>
          </div>

          <IndustryVerticalExplorer
            industries={INDUSTRIES_DATA}
            onOpenModal={(industry) => setSelectedModalIndustry(industry)}
          />
        </div>
      </section>

      {/* 4. Core Capabilities — Stacked Scroll Cards */}
      <StackedCapabilityCards capabilities={CAPABILITIES} />

   {/* 5. Frequently Asked Questions */}
      <section className="faq-section">
        <div className="container">
          <div className="scc-heading-block" style={{ padding: '0 0 3rem' }}>
            <span className="scc-eyebrow">Got Questions?</span>
            <h2 className="scc-section-title">
              Frequently Asked <span className="scc-title-accent">Questions</span>
            </h2>
            <p className="scc-section-sub">
              Learn how Conciva AI handles compliance, security, migration, and custom industry integrations.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Conversion CTA */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Transform Your Industry Operations?</h2>
            <p className="cta-desc">
              Join thousands of healthcare providers, financial institutions, and global tech enterprises powered by Conciva AI.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">
                Request Custom Solution Demo
              </a>
              <a href="#contact" className="btn-outline">
                Contact Enterprise Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Drawer Overlay */}
      {selectedModalIndustry && (
        <IndustryModal
          industry={selectedModalIndustry}
          onClose={() => setSelectedModalIndustry(null)}
        />
      )}
    </div>
  );
}

export default Industries;
