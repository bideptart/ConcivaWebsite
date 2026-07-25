import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/* Pages that should NOT render the shared Navbar / Footer */
const FULL_BLEED_ROUTES = ['/login'];
const NO_GLOBAL_FOOTER_ROUTES = ['/pricing'];

export default function MainLayout({ children }) {
  const location = useLocation();
  const isFullBleed = FULL_BLEED_ROUTES.includes(location.pathname);
  const hideGlobalFooter = NO_GLOBAL_FOOTER_ROUTES.includes(location.pathname);

  if (isFullBleed) {
    return <>{children}</>;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      {!hideGlobalFooter && <Footer />}
    </div>
  );
}
