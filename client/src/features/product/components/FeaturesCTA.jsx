import React from 'react';
import { Link } from 'react-router-dom';
import Icons from './Icons';

export default function FeaturesCTA({ onToast }) {
  return (
    <section className="cta-banner-section scroll-reveal">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to transform your contact center with voice AI?</h2>
          <p>
            Deploy your first Conciva AI voice agent in under 10 minutes.
            Built for South African enterprises.
          </p>
          <div className="cta-actions">
            <Link
              to="/contact"
              className="btn-primary"
              onClick={() => onToast && onToast('Opening trial setup')}
            >
              Start 14-day free trial
              <span className="btn-icon-circle">
                <Icons.ArrowRight />
              </span>
            </Link>
            <Link to="/contact" className="btn-secondary cta-secondary-btn">
              Request a demo call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}