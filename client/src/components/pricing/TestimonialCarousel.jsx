import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, TrendingUp } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Conciva's AI voice routing cut our missed call rate to virtually zero while saving us over $18,000 annually compared to our legacy PBX hardware.",
    name: 'Sarah Jenkins',
    role: 'VP of Operations · FinServe Global',
    rating: 5,
    impact: '$18k saved / year',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    company: 'FinServe Global',
  },
  {
    quote: "The smooth dashboard and instant virtual number setup let our team of 80+ agents go fully remote in under 2 hours — crystal-clear voice quality on day one.",
    name: 'Marcus Vance',
    role: 'Head of Infrastructure · TechPulse',
    rating: 5,
    impact: '80+ agents live in 2 hrs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    company: 'TechPulse',
  },
  {
    quote: "Real-time sentiment analysis on every call gave our support team insights they'd never had before. CSAT scores jumped 34% in the first quarter.",
    name: 'David Chen',
    role: 'Chief Customer Officer · Omnivolt',
    rating: 5,
    impact: '+34% CSAT improvement',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    company: 'Omnivolt',
  },
  {
    quote: "We went from five separate telecom vendors to one invoice. The migration team had us live on temporary numbers the same afternoon we signed up.",
    name: 'Rachel Monroe',
    role: 'CX Manager · Finley Home Services',
    rating: 5,
    impact: '5 vendors → 1 login',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
    company: 'Finley Home Services',
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    filter: 'blur(8px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    filter: 'blur(8px)',
    transition: { duration: 0.32 },
  }),
};

export default function TestimonialCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir]             = useState(1);

  const goNext = useCallback(() => {
    setDir(1);
    setActiveIdx((p) => (p + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDir(-1);
    setActiveIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const goTo = (i) => {
    setDir(i > activeIdx ? 1 : -1);
    setActiveIdx(i);
  };

  // Auto-advance
  useEffect(() => {
    const t = setInterval(goNext, 7000);
    return () => clearInterval(t);
  }, [goNext]);

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="testimonial-section">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <MessageSquareQuote size={13} />
          Trusted by global teams
        </div>
        <h2 className="section-title">
          Loved by modern <span className="gradient-text">sales & support floors</span>
        </h2>
      </div>

      {/* Card */}
      <div className="testimonial-outer" style={{ display: 'flex' }}>
        <div className="testimonial-side-accent" />

        <div style={{ flex: 1, overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={activeIdx}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial-inner"
            >
              {/* Top bar: stars + impact */}
              <div className="testimonial-top-bar">
                <div className="star-row">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F97316" color="#F97316" />
                  ))}
                </div>
                <div className="impact-chip">
                  <TrendingUp size={12} />
                  {current.impact}
                </div>
              </div>

              {/* Quote */}
              <p className="testimonial-quote-text">{current.quote}</p>

              {/* Author + nav */}
              <div className="testimonial-author-row">
                <div className="author-info">
                  <div className="avatar-ring-wrapper">
                    <div className="avatar-ring" />
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="author-avatar"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <div className="author-name">{current.name}</div>
                    <div className="author-role">{current.role}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  {/* Progress dots */}
                  <div className="carousel-progress-dots">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`carousel-dot ${i === activeIdx ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        style={{ border: 'none', cursor: 'pointer', padding: 0 }}
                      />
                    ))}
                  </div>

                  {/* Arrow buttons */}
                  <div className="carousel-nav">
                    <button type="button" className="carousel-btn" onClick={goPrev} aria-label="Previous">
                      <ChevronLeft size={18} />
                    </button>
                    <button type="button" className="carousel-btn" onClick={goNext} aria-label="Next">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Under-carousel stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1px',
          background: '#F0F0F0',
          borderRadius: 16,
          overflow: 'hidden',
          marginTop: '1.5rem',
          border: '1px solid #F0F0F0',
        }}
      >
        {[
          { num: '12,000+', label: 'Teams worldwide' },
          { num: '4.9 / 5',  label: 'Average rating' },
          { num: '190+',     label: 'Countries covered' },
          { num: '99.95%',   label: 'Uptime SLA' },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center', padding: '1.25rem 1rem',
              background: '#FFFFFF',
            }}
          >
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#F97316', letterSpacing: '-0.03em' }}>
              {stat.num}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.45)', fontWeight: 600, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
