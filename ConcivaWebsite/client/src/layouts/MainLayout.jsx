import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MainLayout({ children }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="layout-root">
      {/* Site Header Navigation */}
      <header className="site-header" style={{
        background: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="container header-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          {/* Navigation Links - Center */}
          <nav className="nav-links" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            margin: 0,
            flex: 1,
            justifyContent: 'center'
          }}>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} style={{
              color: isActive('/') ? '#F2701E' : '#666',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>
              Features
            </Link>
            <Link to="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`} style={{
              color: isActive('/industries') ? '#F2701E' : '#666',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.3s',
              borderBottom: isActive('/industries') ? '2px solid #F2701E' : 'none',
              paddingBottom: '0.2rem'
            }}>
              Industries
            </Link>
            <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`} style={{
              color: isActive('/pricing') ? '#F2701E' : '#666',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>
              Pricing
            </Link>
            <a href="#blog" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>
              Blog
            </a>
            <a href="#faq" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.3s'
            }}>
              FAQ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="header-actions" style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <Link to="/contact" className="btn-login" style={{
              color: '#333',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.3s'
            }}>
              Sign in
            </Link>
            <Link to="/industries" className="btn-primary" style={{
              background: '#4F46E5',
              color: 'white',
              padding: '0.7rem 1.8rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.3s',
              border: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => e.target.style.background = '#4338CA'}
            onMouseLeave={(e) => e.target.style.background = '#4F46E5'}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main>{children}</main>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-title">
                <div className="logo-icon-box" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
                  <svg className="logo-sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }}>
                    <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <span>Conciva <span style={{ color: '#F2701E' }}>AI</span></span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginBottom: '1.2rem', maxWidth: '320px' }}>
                Carrier-grade AI communications and cloud voice automation platform engineered for high-compliance enterprise industries.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--secondary)' }}>HIPAA Ready</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--secondary)' }}>PCI-DSS Level 1</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--secondary)' }}>SOC 2 Type II</span>
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Industries</h4>
              <ul className="footer-links">
                <li><Link to="/industries#healthcare">Healthcare & Life Sciences</Link></li>
                <li><Link to="/industries#fintech">Financial Services & Banking</Link></li>
                <li><Link to="/industries#ecommerce">E-Commerce & Retail</Link></li>
                <li><Link to="/industries#realestate">Real Estate Management</Link></li>
                <li><Link to="/industries#logistics">Logistics & Supply Chain</Link></li>
                <li><Link to="/industries#saas">SaaS & Technology</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Conciva AI</Link></li>
                <li><Link to="/services">Enterprise Services</Link></li>
                <li><Link to="/pricing">Pricing & Plans</Link></li>
                <li><Link to="/contact">Contact Support</Link></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Global Network</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.8rem' }}>
                Over 100+ countries supported with redundant POP nodes worldwide.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>● All Systems Operational</span>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>99.999% SLA Guarantee</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Conciva AI Inc. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security Architecture</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
