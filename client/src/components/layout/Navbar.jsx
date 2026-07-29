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
          {/* Full lockup — icon + wordmark live inside the PNG, so no
              separate text node. width/height set to stop layout shift. */}
          <img
            src="/conciva-logo.png"
            alt="Conciva AI"
            className="navbar-logo-img"
            width="148"
            height="36"
          />
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
          <Link to="/contact" className="btn-nav-login">Log In</Link>
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
          <Link to="/contact"  className="btn-mobile-login"   onClick={() => setMobileOpen(false)}>Log In</Link>
          <Link to="/pricing"  className="btn-mobile-trial"   onClick={() => setMobileOpen(false)}>
            Get Started <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
