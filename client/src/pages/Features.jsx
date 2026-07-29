import React, { useState, useRef, useEffect, useCallback } from 'react';
import FeaturesHero from '../components/features/FeaturesHero';
import SouthAfricanIndustries from '../components/features/SouthAfricanIndustries';
import FeatureCategoryExplorer from '../components/features/FeatureCategoryExplorer';
import UseCasesSection from '../components/features/UseCasesSection';
import TrustedBusinesses from '../components/features/TrustedBusinesses';
import SecurityCompliance from '../components/features/SecurityCompliance';
import FeaturesCTA from '../components/features/FeaturesCTA';
import Icons from '../components/features/icons';
import '../styles/features.css';

/**
 * Features page — composition shell.
 *
 * This file used to be a ~900 line monolith that rendered its own hero, phone
 * mockup, feature explorer, tabs, compliance grid and footer, none of which
 * had matching CSS. All of that is now handled by the section components.
 *
 * Critical fix included here: features.css sets `.scroll-reveal { opacity: 0 }`
 * and only reveals on `.is-visible`. Nothing was ever adding that class, so
 * every section below the hero rendered invisible. The observer below is what
 * the CSS comment always assumed existed.
 */
export default function Features() {
  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMessage(''), 3000);
  }, []);

  // Clear any pending toast timer on unmount (previously leaked a setState
  // call after unmount).
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // Scroll reveal — adds .is-visible to each .scroll-reveal section.
  useEffect(() => {
    const sections = document.querySelectorAll('.features-page .scroll-reveal');

    // Respect reduced-motion and missing IntersectionObserver by revealing
    // everything immediately.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      sections.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // reveal once, then stop watching
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="features-page">
      {/* Toast */}
      {toastMessage && (
        <div className="toast" role="status" aria-live="polite">
          <Icons.Sparkles />
          <span>{toastMessage}</span>
        </div>
      )}

      <FeaturesHero onToast={showToast} />
      <SouthAfricanIndustries />
      <FeatureCategoryExplorer />
      <UseCasesSection />
      <TrustedBusinesses />
      <SecurityCompliance />
      <FeaturesCTA onToast={showToast} />
    </div>
  );
}