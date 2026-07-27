import React from 'react';

export default function FlippingIndustryCard({ icon, title, subtitle, description, buttonText = 'Learn More' }) {
  return (
    <div className="fc-card">
      <div className="fc-inner">
        {/* Front Face */}
        <div className="fc-face fc-front">
          <span className="fc-icon">{icon}</span>
          <h3 className="fc-title">{title}</h3>
          <p className="fc-subtitle">{subtitle}</p>
        </div>
        {/* Back Face */}
        <div className="fc-face fc-back">
          <p className="fc-back-description">{description}</p>
          <button type="button" className="fc-back-btn">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}