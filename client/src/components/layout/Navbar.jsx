import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import '../../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Features',   to: '/features'    },
  { label: 'Industries', to: '/industries'  },
  { label: 'Pricing',    to: '/pricing'     },
  { label: 'Blog',       to: '/blog'        },
  { label: 'FAQ',        to: '/faq'         },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  /* Shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile drawer on route change */
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar-header${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        {/* ── Logo ── */}
        <Link to="/" className="navbar-brand" aria-label="Conciva AI – Home">
          {/* Orange rounded-square icon with 4-pointed star */}
          <span className="navbar-logo-icon" aria-hidden="true">
            {/* 4-pointed star SVG matching the reference */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2C10 2 10.6 6.2 12.5 8.1C14.4 10 18 10 18 10C18 10 14.4 10 12.5 11.9C10.6 13.8 10 18 10 18C10 18 9.4 13.8 7.5 11.9C5.6 10 2 10 2 10C2 10 5.6 10 7.5 8.1C9.4 6.2 10 2 10 2Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="navbar-brand-text">
            Conciva<span className="brand-ai">AI</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <nav className="navbar-menu" aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link${isActive(to) ? ' active' : ''}`}
                >
                  {label}
                  <span className="nav-link-underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Right Actions ── */}
        <div className="navbar-actions">
          <Link to="/login" className="btn-nav-login">Log In</Link>
          <Link to="/pricing" className="btn-nav-trial">
            Get Started <ArrowRight size={15} strokeWidth={2.5} />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`mobile-nav-drawer${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <nav>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`mobile-nav-item${isActive(to) ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-drawer-footer">
          <Link to="/login"    className="btn-mobile-login"   onClick={() => setMobileOpen(false)}>Log In</Link>
          <Link to="/pricing"  className="btn-mobile-trial"   onClick={() => setMobileOpen(false)}>
            Get Started <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
