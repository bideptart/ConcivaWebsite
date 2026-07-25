import React, { useState } from 'react';
import { INDUSTRIES_DATA, CAPABILITIES, FAQS } from '../constants/industriesData';
import IndustryCard from '../components/industries/IndustryCard';
import IndustryModal from '../components/industries/IndustryModal';
import IndustryHeroVisual from '../components/industries/IndustryHeroVisual';
import IndustryVerticalExplorer from '../components/industries/IndustryVerticalExplorer';
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
                <span className="ind-trust-pill">🏥 HIPAA</span>
                <span className="ind-trust-pill">💳 PCI-DSS</span>
                <span className="ind-trust-pill">🔒 ISO 27001</span>
                <span className="ind-trust-pill">⚡ Sub-300ms</span>
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

            {/* Right — Animated Industry Orbiter */}
            <IndustryHeroVisual />
          </div>
        </div>
      </section>

      {/* 2. Industry Feature Showcase (Interactive Vertical Explorer Hub) */}
      <section className="industries-section" id="explore-industries">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Industry Architectures</span>
            <h2 className="section-title">Engineered for Industry Specific Challenges</h2>
            <p className="section-subtitle">
              Choose your vertical to explore custom workflows, security compliance certifications, and pre-built integrations.
            </p>
          </div>

          <IndustryVerticalExplorer
            industries={INDUSTRIES_DATA}
            onOpenModal={(industry) => setSelectedModalIndustry(industry)}
          />
        </div>
      </section>

      {/* 4. Core Capabilities Matrix */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: 'var(--primary)' }}>Platform Foundation</span>
            <h2 className="section-title">Core Modular Technology Pillars</h2>
            <p className="section-subtitle">
              Every industry solution is backed by Conciva AI's carrier-grade cloud network, real-time AI processing engine, and enterprise compliance layer.
            </p>
          </div>

          <div className="cap-grid">
            {CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="cap-card">
                <div className="cap-icon-box">⚡</div>
                <h3 className="cap-title">{cap.title}</h3>
                <p className="cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
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
