import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const NAV_COLS = [
  {
    title: 'Platform',
    links: [
      { label: 'Features',  to: '/features' },
      { label: 'Pricing',   to: '/pricing' },
      { label: 'FAQ',       to: '/faq' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Real Estate',   to: '/industries' },
      { label: 'Healthcare',    to: '/industries' },
      { label: 'E-Commerce',    to: '/industries' },
      { label: 'Finance',       to: '/industries' },
      { label: 'Education',     to: '/industries' },
      { label: 'Logistics',     to: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',   to: '/about' },
      { label: 'Blog',    to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',   to: '/' },
      { label: 'Terms of Service', to: '/' },
      { label: 'Acceptable Use',   to: '/' },
      { label: 'Cookie Policy',    to: '/' },
      { label: 'DPA',              to: '/' },
      { label: 'All policies',     to: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="sf-footer" aria-label="Site footer">
      <div className="sf-inner">

        {/* ── Top: brand left · nav columns right ── */}
        <div className="sf-top">

          {/* Brand */}
          <div className="sf-brand">
            <Link to="/" className="sf-logo" aria-label="Conciva AI home">
              <span className="sf-logo-box">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 2C10 2 10.6 6.2 12.5 8.1C14.4 10 18 10 18 10C18 10 14.4 10 12.5 11.9C10.6 13.8 10 18 10 18C10 18 9.4 13.8 7.5 11.9C5.6 10 2 10 2 10C2 10 5.6 10 7.5 8.1C9.4 6.2 10 2 10 2Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="sf-logo-name">
                Conciva<span className="sf-logo-accent">AI</span>
              </span>
            </Link>

            <p className="sf-tagline">
              AI voice agents that actually sound human. Native audio,
              sub-second latency, and a self-hosted control panel that
              connects to your existing carrier.
            </p>

            <Link to="/contact" className="sf-dashboard-btn">
              Customer dashboard &nbsp;↗
            </Link>
          </div>

          {/* Navigation columns */}
          <nav className="sf-nav-grid" aria-label="Footer navigation">
            {NAV_COLS.map((col) => (
              <div key={col.title} className="sf-col">
                <h3 className="sf-col-title">{col.title}</h3>
                <ul className="sf-col-links">
                  {col.links.map((lnk) => (
                    <li key={lnk.label}>
                      <Link to={lnk.to}>{lnk.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ── Status indicator ── */}
        <div className="sf-status-row">
          <span className="sf-status-dot" aria-hidden="true" />
          <span className="sf-status-text">All systems operational</span>
        </div>

        {/* ── Divider ── */}
        <div className="sf-divider" aria-hidden="true" />

        {/* ── Bottom bar ── */}
        <div className="sf-bottom">
          <p className="sf-copy">
            © {new Date().getFullYear()} Conciva AI. All rights reserved.
          </p>
          <p className="sf-made-for">
            <span className="sf-made-dot" aria-hidden="true">•</span>
            Made for human conversations.
          </p>
        </div>

      </div>
    </footer>
  );
}
