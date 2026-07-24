import React, { useState } from 'react';
import { INDUSTRIES_DATA, CAPABILITIES, FAQS } from '../constants/industriesData';
import IndustryCard from '../components/industries/IndustryCard';
import IndustryModal from '../components/industries/IndustryModal';

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
      <section className="hero-section" style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)' }}>
        {/* Floating decorative dots */}
        <div style={{ position: 'absolute', top: '10%', right: '15%', width: '12px', height: '12px', borderRadius: '50%', background: '#5B7FFF', opacity: 0.8 }}></div>
        <div style={{ position: 'absolute', top: '20%', right: '8%', width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B6B', opacity: 0.6 }}></div>
        <div style={{ position: 'absolute', top: '35%', right: '25%', width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', opacity: 0.7 }}></div>
        <div style={{ position: 'absolute', bottom: '25%', right: '10%', width: '14px', height: '14px', borderRadius: '50%', background: '#F2701E', opacity: 0.6 }}></div>
        <div style={{ position: 'absolute', bottom: '15%', right: '35%', width: '6px', height: '6px', borderRadius: '50%', background: '#9F7AEA', opacity: 0.8 }}></div>

        <div className="container" style={{ zIndex: 2, position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Left Content */}
            <div>
              <div className="eyebrow-badge" style={{ marginBottom: '2rem', display: 'inline-block', background: '#E3F2FF', padding: '0.6rem 1.2rem', borderRadius: '20px', color: '#1E40AF', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                <span className="badge-pulse" style={{ background: '#1E40AF', marginRight: '0.5rem' }}></span>
                PRE-TUNED FOR THE CALLS YOU ACTUALLY TAKE
              </div>

              <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#000' }}>
                Built for every <br /> kind of phone call.
              </h1>

              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: '2rem', maxWidth: '90%' }}>
                One AI voice agent that answers calls, qualifies leads, and books appointments across every industry below — fluent in 10+ Indian languages, on the same simple plans for everyone, live in under 5 minutes.
              </p>

              <div className="hero-actions" style={{ display: 'flex', gap: '1rem' }}>
                <a href="#explore-industries" className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 700 }}>
                  Get Started →
                </a>
                <a href="#contact" className="btn-outline" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 700 }}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Right - Visualization */}
            <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Background globe/circle */}
              <div style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                border: '2px solid rgba(91, 127, 255, 0.1)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(91, 127, 255, 0.05) 0%, transparent 70%)'
              }}></div>

              {/* Center sound wave icon */}
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                background: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 40px rgba(91, 127, 255, 0.2)',
                zIndex: 10
              }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end' }}>
                  <div style={{ width: '4px', height: '20px', background: '#5B7FFF', borderRadius: '2px', animation: 'pulse 0.8s ease-in-out infinite' }}></div>
                  <div style={{ width: '4px', height: '30px', background: '#5B7FFF', borderRadius: '2px', animation: 'pulse 0.8s ease-in-out 0.1s infinite' }}></div>
                  <div style={{ width: '4px', height: '35px', background: '#5B7FFF', borderRadius: '2px', animation: 'pulse 0.8s ease-in-out 0.2s infinite' }}></div>
                  <div style={{ width: '4px', height: '30px', background: '#5B7FFF', borderRadius: '2px', animation: 'pulse 0.8s ease-in-out 0.1s infinite' }}></div>
                  <div style={{ width: '4px', height: '20px', background: '#5B7FFF', borderRadius: '2px', animation: 'pulse 0.8s ease-in-out infinite' }}></div>
                </div>
              </div>

              {/* Language tags */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                background: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#5B7FFF'
              }}>
                नमस्ते
              </div>

              <div style={{
                position: 'absolute',
                bottom: '80px',
                left: '10px',
                background: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#5B7FFF'
              }}>
                வணக்கம்
              </div>

              <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '40px',
                background: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#666'
              }}>
                Hello · <span style={{ color: '#5B7FFF' }}>తెలుగు</span>
              </div>

              <style>{`
                @keyframes pulse {
                  0%, 100% { height: 20px; opacity: 0.4; }
                  50% { height: 40px; opacity: 1; }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Switcher & Filter Bar (Sticky Filter Bar - 9278.io pattern) */}
      <section className="filter-bar-section" id="explore-industries">
        <div className="container">
          <div className="filter-flex">
            <div className="search-input-wrapper">
              <span className="search-icon-pos">🔍</span>
              <input 
                type="text"
                className="search-input"
                placeholder="Search industry or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-pills">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry Feature Showcase Cards (Zig-Zag Layout) */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Industry Architectures</span>
            <h2 className="section-title">Engineered for Industry Specific Challenges</h2>
            <p className="section-subtitle">
              Choose your vertical to explore custom workflows, security compliance certifications, and pre-built integrations.
            </p>
          </div>

          <div className="industries-list">
            {filteredIndustries.length > 0 ? (
              filteredIndustries.map((ind, idx) => (
                <IndustryCard 
                  key={ind.id} 
                  industry={ind} 
                  isReverse={idx % 2 !== 0}
                  onOpenModal={(industry) => setSelectedModalIndustry(industry)}
                />
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
                <h3>No matching industries found</h3>
                <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search query or filter category.</p>
                <button className="btn-outline" style={{ marginTop: '1rem' }} onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Matrix */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: 'var(--secondary)' }}>Platform Foundation</span>
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
              <a href="#contact" className="btn-primary" style={{ background: 'var(--bg-dark)', color: 'white', padding: '0.9rem 2.2rem', fontSize: '1.05rem', fontWeight: 800 }}>
                Request Custom Solution Demo
              </a>
              <a href="#contact" class="btn-outline" style={{ color: 'white', borderColor: 'white' }}>
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
