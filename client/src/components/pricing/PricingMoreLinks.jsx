import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  {
    title: 'Industries we support',
    description: 'Pre-built routing for healthcare, retail, and professional services — plus a flexible engine for custom workflows.',
    to: '/industries',
  },
  {
    title: 'FAQ — billing & compliance',
    description: 'How included minutes, number porting, HIPAA, and seat licensing work in production.',
    to: '/faq',
  },
  {
    title: 'Launch your contact center',
    description: 'Pick Starter, Growth, or Enterprise, provision numbers, and go live in under three minutes.',
    to: '/login',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PricingMoreLinks() {
  return (
    <section className="pricing-more-section" aria-labelledby="pricing-more-heading">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-badge">Explore</p>
        <h2 id="pricing-more-heading" className="section-title">
          More on <span className="gradient-text">Conciva</span>
        </h2>
        <p className="section-subtitle">
          Industry playbooks, compliance FAQs, and the fastest path from signup to first answered call.
        </p>
      </motion.div>

      <ul className="pricing-more-list">
        {LINKS.map((item, i) => (
          <motion.li
            key={item.title}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to={item.to} className="pricing-more-card">
              <div className="pricing-more-card-text">
                <h3 className="pricing-more-card-title">{item.title}</h3>
                <p className="pricing-more-card-desc">{item.description}</p>
              </div>
              <span className="pricing-more-card-icon" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
