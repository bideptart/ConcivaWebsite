import React, { useState } from 'react';

export default function IndustryVerticalExplorer({ industries, onOpenModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="compact-swiper-container">
      {/* Top Controls Row */}
      <div className="swiper-controls-row">
        <div className="swiper-dots-indicator">
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              className={`swiper-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="swiper-arrow-buttons">
          <button className="swiper-arrow-btn" onClick={prevSlide} aria-label="Previous Industry">
            ←
          </button>
          <button className="swiper-arrow-btn" onClick={nextSlide} aria-label="Next Industry">
            →
          </button>
        </div>
      </div>

      {/* Compact Cards Grid / Swiping Track */}
      <div className="compact-cards-grid">
        {industries.map((ind, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={ind.id}
              className={`compact-frame-card ${isActive ? 'active-frame' : ''}`}
              onClick={() => {
                setCurrentIndex(idx);
              }}
            >
              {/* Card Header */}
              <div className="frame-card-header">
                <span className="frame-icon">{ind.icon}</span>
                <span className="frame-cat-badge">{ind.category}</span>
                {ind.badge && <span className="frame-status-badge">{ind.badge}</span>}
              </div>

              {/* Card Body */}
              <h3 className="frame-title">{ind.title}</h3>
              <p className="frame-desc">{ind.shortDesc}</p>

              {/* Impact Metrics Row */}
              <div className="frame-metrics-grid">
                {ind.metrics?.slice(0, 2).map((m, mIdx) => (
                  <div key={mIdx} className="frame-metric-pill">
                    <span className="m-pill-val">{m.value}</span>
                    <span className="m-pill-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Highlights Bullet Tags */}
              <div className="frame-bullets">
                {ind.highlights?.slice(0, 2).map((h, hIdx) => (
                  <div key={hIdx} className="frame-bullet-item">
                    <span className="bullet-check">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer Button */}
              <div className="frame-card-footer">
                <button
                  className="btn-primary-sm"
                  style={{ width: '100%' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(ind);
                  }}
                >
                  Explore Workflow →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
