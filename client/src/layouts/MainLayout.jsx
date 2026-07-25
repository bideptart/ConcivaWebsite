import React from 'react';
import Navbar from '../components/layout/Navbar';

export default function MainLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}
