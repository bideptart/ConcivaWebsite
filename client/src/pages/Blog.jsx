import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem' }}>📝</div>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.04em' }}>Blog</h1>
      <p style={{ fontSize: '1.05rem', color: '#64748B', maxWidth: '480px', lineHeight: 1.7 }}>
        Insights, guides, and product updates from the Conciva AI team. Articles launching soon.
      </p>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontWeight: 700, color: '#F97316', textDecoration: 'none' }}>
        ← Back to Home
      </Link>
    </div>
  );
}
