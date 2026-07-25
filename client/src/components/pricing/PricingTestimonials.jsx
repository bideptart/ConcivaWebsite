import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Rocket } from 'lucide-react';

const CARDS = [
  {
    id: 'conversion',
    metric: '+38% conversion',
    Icon: TrendingUp,
    quote: '"The agent handles objections better than half my SDRs — prospects don\'t realize it\'s AI until we tell them."',
    author: 'Marcus Chen',
    role: 'Head of Sales, Northwind Solar',
  },
  {
    id: 'hours',
    metric: 'Saved 60 hrs/week',
    Icon: Clock,
    quote: '"Aria handles every inbound after-hours call now. Our reply time dropped from 14 minutes to under one."',
    author: 'Lina Okafor',
    role: 'VP Operations, Marlowe Realty',
  },
  {
    id: 'live',
    metric: 'Live in 4 days',
    Icon: Rocket,
    quote: '"I was quoted 6 months by an enterprise vendor. We had a working voice agent in production by day four."',
    author: 'Daniel Reyes',
    role: 'CTO, Bright Dental Group',
  },
];

function FlipCard({ card, index }) {
  const { metric, Icon, quote, author, role } = card;
  return (
    <motion.div
      className="flip-card-outer"
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flip-card-inner">
        {/* ── FRONT ── */}
        <div className="flip-face flip-front" aria-hidden="true">
          <div className="flip-front-top">
            <span className="flip-metric">{metric}</span>
            <span className="flip-icon-wrap" aria-hidden="true">
              <Icon size={15} strokeWidth={2.2} />
            </span>
          </div>
          <p className="flip-quote">{quote}</p>
          <p className="flip-author">{author} &middot; {role}</p>
        </div>
        {/* ── BACK (shown on hover via CSS flip) ── */}
        <div className="flip-face flip-back" aria-hidden="true">
          <div className="flip-back-icon">
            <Icon size={28} strokeWidth={1.8} />
          </div>
          <p className="flip-back-quote">{quote}</p>
          <div className="flip-back-author">
            <span className="flip-back-name">{author}</span>
            <span className="flip-back-role">{role}</span>
          </div>
        </div>
      </div>

      {/* Accessible text (hidden visually, readable by screen readers) */}
      <span className="sr-only">
        {metric}. {quote} — {author}, {role}
      </span>
    </motion.div>
  );
}

export default function PricingTestimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-badge">· Social proof</p>
        <h2 id="testimonials-heading" className="section-title">
          Real results from <span className="gradient-text">real teams.</span>
        </h2>
        <p className="section-subtitle">
          Hover each card to read the full story.
        </p>
      </motion.div>

      <div className="flip-cards-grid">
        {CARDS.map((card, i) => (
          <FlipCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
