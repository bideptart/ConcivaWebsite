import React from 'react';
import { Link } from 'react-router-dom';

const Icons = {
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  )
};

export default function FeaturesCTA({ onToast }) {
  return (
    <section className="cta-banner-section scroll-reveal">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to transform your contact center with Voice AI?</h2>
          <p>Deploy your first LetsDial voice agent in under 10 minutes. Tailored for South African enterprises.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary" onClick={() => onToast && onToast('Redirecting to trial setup...')}>
              Start 14-Day Free Trial
              <span className="btn-icon-circle">
                <Icons.ArrowRight />
              </span>
            </Link>
            <Link to="/contact" className="btn-secondary cta-secondary-btn">
              Request Demo Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
