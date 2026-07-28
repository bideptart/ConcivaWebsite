import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConcivaLogo from '../common/ConcivaLogo';

const COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Features',     to: '/features'   },
      { label: 'Pricing',      to: '/pricing'    },
      { label: 'FAQ',          to: '/faq'        },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Real Estate',       to: '/industries' },
      { label: 'Legal Services',    to: '/industries' },
      { label: 'E-Commerce',        to: '/industries' },
      { label: 'Restaurants',       to: '/industries' },
      { label: 'Automotive',        to: '/industries' },
      { label: 'Home Services',     to: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',   to: '/about'   },
      { label: 'Blog',    to: '/blog'    },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',   href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Acceptable Use',   href: '#' },
      { label: 'Cookie Policy',    href: '#' },
      { label: 'DPA',              href: '#' },
      { label: 'All policies',     href: '#' },
    ],
  },
];

function FooterCol({ col, mobileOpen, onToggle }) {
  const isOpen = mobileOpen === col.title;
  return (
    <div className="pf-col">
      <button
        type="button"
        className="pf-col-toggle"
        onClick={() => onToggle(isOpen ? null : col.title)}
        aria-expanded={isOpen}
      >
        <span className="pf-col-title">{col.title}</span>
        <motion.span
          className="pf-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      {/* Desktop links — always visible */}
      <ul className="pf-links pf-links-desktop">
        {col.links.map((lk) => (
          <li key={lk.label}>
            {lk.to
              ? <Link to={lk.to}>{lk.label}</Link>
              : <a href={lk.href}>{lk.label}</a>}
          </li>
        ))}
      </ul>

      {/* Mobile links — animated */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="pf-links pf-links-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {col.links.map((lk) => (
              <li key={lk.label}>
                {lk.to
                  ? <Link to={lk.to}>{lk.label}</Link>
                  : <a href={lk.href}>{lk.label}</a>}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingFooter() {
  const [mobileOpen, setMobileOpen] = useState(null);

  return (
    <footer className="pf-root" aria-label="Site footer">
      <div className="pf-container">

        {/* ── Top ── */}
        <div className="pf-top">
          {/* Brand column */}
          <div className="pf-brand">
            <Link to="/" className="pf-logo" aria-label="Conciva AI home">
              <ConcivaLogo iconSize={36} textColor="#FFFFFF" />
            </Link>
            <p className="pf-tagline">
              AI voice agents that actually sound human. Native audio,
              sub-second latency, and a self-hosted control panel that
              connects to your existing carrier.
            </p>
            <Link to="/login" className="pf-dashboard-btn">
              Customer dashboard
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* Link columns */}
          <nav className="pf-nav" aria-label="Footer navigation">
            <div className="pf-cols-grid">
              {COLUMNS.map((col) => (
                <FooterCol
                  key={col.title}
                  col={col}
                  mobileOpen={mobileOpen}
                  onToggle={setMobileOpen}
                />
              ))}
            </div>
          </nav>
        </div>

        {/* ── Mid strip: status ── */}
        <div className="pf-status-row">
          <span className="pf-status-dot" aria-hidden="true" />
          <span>All systems operational</span>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pf-bottom">
          <p className="pf-copy">
            &copy; {new Date().getFullYear()} Conciva AI. All rights reserved.
          </p>
          <p className="pf-made">
            <span className="pf-made-dot" aria-hidden="true" />
            Made for human conversations.
          </p>
        </div>

      </div>
    </footer>
  );
}
