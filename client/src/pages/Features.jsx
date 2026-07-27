import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeaturesHero from '../components/features/FeaturesHero';
import SouthAfricanIndustries from '../components/features/SouthAfricanIndustries';
import TrustedBusinesses from '../components/features/TrustedBusinesses';
import FeatureCategoryExplorer from '../components/features/FeatureCategoryExplorer';
import UseCasesSection from '../components/features/UseCasesSection';
import SecurityCompliance from '../components/features/SecurityCompliance';
import FeaturesCTA from '../components/features/FeaturesCTA';
import '../styles/features.css';

const Icons = {
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 7.92c0 .13.001.261.001.393a7.5 7.5 0 0 0-7.92 7.92c0 .13-.001.261-.001.393a7.5 7.5 0 0 0-7.92-7.92c0-.13-.001-.261-.001-.393a7.5 7.5 0 0 0 7.92-7.92z" />
    </svg>
  )
};

export default function Features() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Smooth scroll reveal listener using IntersectionObserver
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.scroll-reveal');

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="features-page">
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 100,
          background: '#1F2937',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '9999px',
          fontSize: '13px',
          fontWeight: '600',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Icons.Sparkles /> {toastMessage}
        </div>
      )}

      {/* 1. Hero Section with Responsive Phone Frame */}
      <FeaturesHero onToast={showToast} />

      {/* 2. Replacement 1: South African Industries Accordion (Replaces "Build & Setup") */}
      <SouthAfricanIndustries />

      {/* 3. Replacement 2: Trusted South African Businesses Showcase (Replaces "24/7 AI Receptionist & Call Steering") */}
      <TrustedBusinesses />

      {/* 4. Core Feature Explorer */}
      <FeatureCategoryExplorer />

      {/* 5. Interactive Use Case Workflow Scenarios */}
      <UseCasesSection />

      {/* 6. Security & POPIA Compliance Grid */}
      <SecurityCompliance />

      {/* 7. Bottom Call to Action Banner */}
      <FeaturesCTA onToast={showToast} />

     <style jsx>{`
        .features-page {
          overflow-x: hidden;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}