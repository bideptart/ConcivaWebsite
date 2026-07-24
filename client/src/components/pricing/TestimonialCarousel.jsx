import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Building } from 'lucide-react';

export default function TestimonialCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote: "Conciva's AI voice routing cut our missed call rate to virtually zero while saving us over $18,000 annually compared to our legacy PBX hardware.",
      name: "Sarah Jenkins",
      role: "VP of Operations at FinServe Global",
      rating: 5,
      impact: "Saved $18k / year",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "The 21.dev style smooth dashboard and instant virtual number setup allowed our sales team of 80+ agents to go remote in under 2 hours with crystal-clear voice quality.",
      name: "Marcus Vance",
      role: "Head of Infrastructure at TechPulse",
      rating: 5,
      impact: "80+ Agents Deployed",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "Real-time AI sentiment analysis on every call gave our support team actionable insights instantly. Customer satisfaction scores jumped by 34%.",
      name: "David Chen",
      role: "Chief Customer Officer at Omnivolt",
      rating: 5,
      impact: "+34% CSAT Increase",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const current = testimonials[activeIdx];

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <div className="section-badge">
          <MessageSquareQuote size={16} />
          <span>Trusted by Global Leaders</span>
        </div>
        <h2 className="section-title">
          Loved by modern <span className="gradient-text">engineering & sales teams</span>
        </h2>
      </div>

      <div className="carousel-card-container">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F97316" color="#F97316" />
              ))}
            </div>

            <span className="discount-badge" style={{ background: '#0F172A', color: '#F97316', border: '1px solid rgba(249, 115, 22, 0.4)' }}>
              {current.impact}
            </span>
          </div>

          <p className="testimonial-quote">"{current.quote}"</p>
        </div>

        <div className="testimonial-author-row">
          <div className="author-info">
            <img src={current.avatar} alt={current.name} className="author-avatar" />
            <div>
              <div className="author-name">{current.name}</div>
              <div className="author-role">{current.role}</div>
            </div>
          </div>

          <div className="carousel-nav">
            <button type="button" onClick={handlePrev} className="carousel-btn" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={handleNext} className="carousel-btn" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
