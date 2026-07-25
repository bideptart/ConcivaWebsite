import React, { useState } from 'react';
import { INDUSTRIES_DATA, CAPABILITIES, FAQS } from '../constants/industriesData';
import IndustryModal from '../components/industries/IndustryModal';
import '../styles/industries.css';

function Industries() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedModalIndustry, setSelectedModalIndustry] = useState(null);

  const total = INDUSTRIES_DATA.length;

  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % total);

  const industry = INDUSTRIES_DATA[activeSlide];

  const toggleFaq = (idx) => setActiveFaq(activeFaq === idx ? null : idx);

  return (
    <div className="ind-page">

      {/* ── 1. Hero ── */}
      <section className="ind-hero">
        <div className="ind-dots" aria-hidden="true">
          <span style={{ top: '10%', right: '15%', width: 12, height: 12, background: '#5B7FFF' }} />
          <span style={{ top: '22%', right: '8%', width: 8, height: 8, background: '#FF6B6B' }} />
          <span style={{ top: '38%', right: '26%', width: 10, height: 10, background: '#10B981' }} />
          <span style={{ bottom: '24%', right: '10%', width: 14, height: 14, background: '#F2701E' }} />
          <span style={{ bottom: '14%', right: '36%', width: 6, height: 6, background: '#9F7AEA' }} />
        </div>

        <div className="ind-container">
          <div className="ind-hero-grid">
            {/* Left */}
            <div className="ind-hero-left">
              <div className="ind-eyebrow">
                <span className="ind-pulse" />
                PRE-TUNED FOR THE CALLS YOU ACTUALLY TAKE
              </div>
              <h1 className="ind-hero-title">
                Built for every <br />
                <span className="ind-text-gradient">kind of phone call.</span>
              </h1>
              <p className="ind-hero-desc">
                One AI voice agent that answers calls, qualifies leads, and books appointments
                across every industry below — fluent in 10+ Indian languages, on the same simple
                plans for everyone, live in under 5 minutes.
              </p>
              <div className="ind-hero-actions">
                <a href="#ind-carousel" className="ind-btn-primary">Get Started →</a>
                <a href="#ind-faq" className="ind-btn-outline">Learn More</a>
              </div>
            </div>

            {/* Right – animated visual */}
            <div className="ind-hero-visual">
              <div className="ind-hero-ring" />
              <div className="ind-hero-soundwave">
                {[20, 30, 36, 30, 20].map((h, i) => (
                  <span key={i} style={{ '--bar-h': `${h}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="ind-lang-tag" style={{ top: 20, right: 30 }}>नमस्ते</div>
              <div className="ind-lang-tag" style={{ bottom: 80, left: 10 }}>வணக்கம்</div>
              <div className="ind-lang-tag" style={{ bottom: 30, right: 40, color: '#666' }}>
                Hello · <span style={{ color: '#5B7FFF' }}>తెలుగు</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Industry Carousel ── */}
      <section className="ind-carousel-section" id="ind-carousel">
        <div className="ind-container">
          <div className="ind-section-header">
            <span className="ind-eyebrow-label">Industry Architectures</span>
            <h2 className="ind-section-title">Engineered for Every Industry</h2>
            <p className="ind-section-sub">
              Explore custom workflows, compliance certifications, and pre-built integrations
              for your vertical.
            </p>
          </div>

          {/* Carousel card */}
          <div className="ind-kallus-carousel">
            {/* Image panel */}
            <div
              className="ind-carousel-img-panel"
              style={{ backgroundImage: `url(${industry.bgImage})` }}
            >
              <div className="ind-carousel-img-overlay" />
              <div className="ind-carousel-metric">
                <span className="ind-metric-num">{industry.metricVal}</span>
                <span className="ind-metric-lbl">{industry.metricDesc}</span>
              </div>
            </div>

            {/* Content panel */}
            <div className="ind-carousel-content">
              <span className="ind-card-badge">{industry.badge}</span>
              <h3 className="ind-card-title">{industry.title}</h3>
              <p className="ind-card-desc">{industry.shortDesc}</p>

              <div className="ind-card-tags">
                {industry.tags.map((t, i) => <span key={i} className="ind-tag">{t}</span>)}
              </div>

              <div className="ind-card-highlights">
                {industry.highlights.map((h, i) => (
                  <div key={i} className="ind-highlight-item">
                    <span className="ind-check">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="ind-card-actions">
                <button className="ind-btn-primary" onClick={() => setSelectedModalIndustry(industry)}>
                  Explore Workflows →
                </button>
              </div>
            </div>
          </div>

          {/* Nav: arrows + dots */}
          <div className="ind-carousel-nav">
            <button className="ind-carousel-arrow" onClick={prevSlide} aria-label="Previous industry">&#8592;</button>
            <div className="ind-carousel-dots">
              {INDUSTRIES_DATA.map((_, i) => (
                <button
                  key={i}
                  className={`ind-carousel-dot ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to industry ${i + 1}`}
                />
              ))}
            </div>
            <button className="ind-carousel-arrow" onClick={nextSlide} aria-label="Next industry">&#8594;</button>
          </div>
        </div>
      </section>

      {/* ── 3. Capabilities Grid ── */}
      <section className="ind-capabilities">
        <div className="ind-container">
          <div className="ind-section-header">
            <span className="ind-eyebrow-label" style={{ color: '#10B981' }}>Platform Foundation</span>
            <h2 className="ind-section-title" style={{ color: '#fff' }}>Core Modular Technology Pillars</h2>
            <p className="ind-section-sub" style={{ color: '#9CA3AF' }}>
              Every industry solution is backed by Conciva AI's carrier-grade cloud network,
              real-time AI processing engine, and enterprise compliance layer.
            </p>
          </div>
          <div className="ind-cap-grid">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="ind-cap-card">
                <div className="ind-cap-icon">⚡</div>
                <h3 className="ind-cap-title">{cap.title}</h3>
                <p className="ind-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FAQ ── */}
      <section className="ind-faq" id="ind-faq">
        <div className="ind-container">
          <div className="ind-section-header">
            <span className="ind-eyebrow-label">Got Questions?</span>
            <h2 className="ind-section-title">Frequently Asked Questions</h2>
            <p className="ind-section-sub">
              Learn how Conciva AI handles compliance, security, migration, and custom integrations.
            </p>
          </div>
          <div className="ind-faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className="ind-faq-item">
                <button className="ind-faq-q" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className="ind-faq-icon">{activeFaq === i ? '−' : '+'}</span>
                </button>
                {activeFaq === i && <div className="ind-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Banner ── */}
      <section className="ind-cta-section">
        <div className="ind-container">
          <div className="ind-cta-card">
            <h2 className="ind-cta-title">Ready to Transform Your Industry Operations?</h2>
            <p className="ind-cta-desc">
              Join thousands of healthcare providers, financial institutions, and global tech enterprises powered by Conciva AI.
            </p>
            <div className="ind-cta-buttons">
              <a href="#contact" className="ind-btn-dark">Request Custom Solution Demo</a>
              <a href="#contact" className="ind-btn-outline-white">Contact Enterprise Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
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
