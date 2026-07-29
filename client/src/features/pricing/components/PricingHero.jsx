import React from 'react';
import { motion } from 'framer-motion';

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function PricingHero() {
  return (
    <section className="pricing-hero" aria-labelledby="pricing-hero-heading">
      <div className="hero-mesh-grid" aria-hidden="true" />
      <div className="pricing-hero-inner">

        <motion.div
          className="hero-eyebrow-pill"
          variants={fade(0)}
          initial="hidden"
          animate="visible"
        >
          <span className="hero-eyebrow-dot" aria-hidden="true" />
          <span className="hero-eyebrow-accent">Per-second billing</span>
          &nbsp;&mdash; pay only for the seconds you use.
        </motion.div>

        <motion.h1
          id="pricing-hero-heading"
          className="hero-headline"
          variants={fade(0.07)}
          initial="hidden"
          animate="visible"
        >
          Pricing built for{' '}
          <span className="gradient-text">real conversations.</span>
        </motion.h1>

        <motion.p
          className="hero-subtext"
          variants={fade(0.14)}
          initial="hidden"
          animate="visible"
        >
          Included minutes, a real phone number, and AI features on every plan.
          Pick a tier and go live in minutes&mdash;no migration committee required.
        </motion.p>
      </div>
    </section>
  );
}
