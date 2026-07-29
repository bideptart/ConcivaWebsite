import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, HelpCircle, Zap } from 'lucide-react';

const CARDS = [
  {
    id: 'industries',
    Icon: Building2,
    title: 'Industries we power',
    description: 'Pre-tuned voice agents for ten verticals — and a configurable engine for everything else.',
    to: '/industries',
  },
  {
    id: 'faq',
    Icon: HelpCircle,
    title: 'FAQ — billing, credit & compliance',
    description: 'How credit, phone numbers, and concurrency work in practice.',
    to: '/faq',
  },
  {
    id: 'launch',
    Icon: Zap,
    title: 'Launch your first agent',
    description: 'Pick a plan, optionally add a number, and you\'re live in minutes.',
    to: '/login',
  },
];

/* Flip card — front shows content, back shows on hover */
function MoreCard({ card, index }) {
  const [flipped, setFlipped] = useState(false);
  const { Icon, title, description, to } = card;

  return (
    <motion.div
      className="ml-flip-outer"
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      <motion.div
        className="ml-flip-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── FRONT ── */}
        <Link to={to} className="ml-face ml-front" tabIndex={flipped ? -1 : 0}>
          <span className="ml-arrow-wrap" aria-hidden="true">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
          <h3 className="ml-title">{title}</h3>
          <p className="ml-desc">{description}</p>
        </Link>

        {/* ── BACK ── */}
        <Link
          to={to}
          className="ml-face ml-back"
          tabIndex={flipped ? 0 : -1}
          aria-hidden={!flipped}
        >
          <span className="ml-back-icon" aria-hidden="true">
            <Icon size={32} strokeWidth={1.5} />
          </span>
          <h3 className="ml-back-title">{title}</h3>
          <span className="ml-back-cta">
            Explore <ArrowUpRight size={13} strokeWidth={2.5} />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function PricingMoreLinks() {
  return (
    <section className="ml-section" aria-labelledby="ml-heading">
      {/* Header */}
      <motion.div
        className="ml-header"
        initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="ml-heading" className="ml-heading">
          More on Conciva
        </h2>
        <p className="ml-subheading">
          Industry playbooks, FAQs, and the get-started flow.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="ml-grid">
        {CARDS.map((card, i) => (
          <MoreCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
