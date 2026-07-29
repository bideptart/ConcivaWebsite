import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES } from './blogData';
import BlogThumb, { BlogFeaturedArt } from './BlogThumb';
import './blog.css';

/* ─── Intersection-observer reveal hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Category pill ─── */
function CategoryPill({ label, active, onClick }) {
  return (
    <button
      className={`blog-cat-pill ${active ? 'blog-cat-pill-active' : ''}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

/* ─── Featured hero post ─── */
function FeaturedPost({ post }) {
  const [ref, visible] = useReveal(0.08);
  return (
    <article ref={ref} className={`blog-featured ${visible ? 'blog-reveal-up' : ''}`}>
      <div className="blog-featured-inner">
        <div className="blog-featured-content">
          <div className="blog-featured-meta">
            <span className="blog-cat-label" style={{ color: post.accentColor, borderColor: post.accentColor + '40', background: post.accentColor + '12' }}>
              {post.category}
            </span>
            <span className="blog-dot-sep" />
            <span className="blog-meta-text">{post.readTime}</span>
            <span className="blog-dot-sep" />
            <span className="blog-meta-text">{post.date}</span>
          </div>
          <h2 className="blog-featured-title">{post.title}</h2>
          <p className="blog-featured-subtitle">{post.subtitle}</p>
          <p className="blog-featured-excerpt">{post.excerpt}</p>
          <div className="blog-featured-footer">
            <Link to={`/blog/${post.slug}`} className="blog-read-btn">
              Read article <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="blog-tag-row">
            {post.tags.map(t => <span key={t} className="blog-tag">{t}</span>)}
          </div>
        </div>
        <div className="blog-featured-visual">
          <div className="blog-visual-grid" />
          <BlogFeaturedArt />
          <div className="blog-float-card blog-float-card-tl">
            <span className="blog-float-val" style={{ color: post.accentColor }}>2.4M</span>
            <span className="blog-float-lbl">Calls analysed</span>
          </div>
          <div className="blog-float-card blog-float-card-br">
            <span className="blog-float-val" style={{ color: post.accentColor }}>+65%</span>
            <span className="blog-float-lbl">Booking rate lift</span>
          </div>
        </div>
      </div>
      <div className="blog-pinned-ribbon" style={{ background: post.accentColor }}>
        <span>★ Featured Story</span>
      </div>
    </article>
  );
}

/* ─── Single marquee card ─── */
function MarqueeCard({ post }) {
  return (
    <article className="bmc-card">
      <div className="blog-thumb-wrap">
        <BlogThumb category={post.category} />
      </div>
      <div className="bmc-card-bar" style={{ background: post.accentColor }} />
      <div className="bmc-card-body">
        <div className="bmc-card-meta">
          <span className="blog-cat-label"
            style={{ color: post.accentColor, borderColor: post.accentColor + '40', background: post.accentColor + '12' }}>
            {post.category}
          </span>
          <span className="blog-meta-text">{post.readTime}</span>
        </div>
        <h3 className="bmc-card-title">{post.title}</h3>
        <p className="bmc-card-excerpt">{post.excerpt}</p>
        <div className="blog-tag-row">
          {post.tags.slice(0, 2).map(t => <span key={t} className="blog-tag">{t}</span>)}
        </div>
      </div>
      <div className="bmc-card-footer">
        <span className="blog-meta-text bmc-footer-date">{post.date}</span>
        <Link to={`/blog/${post.slug}`} className="blog-card-link" onClick={e => e.stopPropagation()}>
          Read →
        </Link>
      </div>
    </article>
  );
}

/* ─── Infinite drag-to-scroll marquee carousel ─── */
function BlogMarquee({ posts }) {
  const trackRef = useRef(null);
  const animRef  = useRef(null);
  const posRef   = useRef(0);
  const speedRef = useRef(0.55);
  const pausedRef = useRef(false);
  const drag = useRef({ active: false, startX: 0, startPos: 0 });

  const items = [...posts, ...posts, ...posts];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const singleWidth = () => track.scrollWidth / 3;
    const tick = () => {
      if (!pausedRef.current) {
        posRef.current -= speedRef.current;
        if (Math.abs(posRef.current) >= singleWidth()) posRef.current += singleWidth();
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [posts]);

  const handleEnter = () => { pausedRef.current = true; };
  const handleLeave = () => { if (!drag.current.active) pausedRef.current = false; };
  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.clientX, startPos: posRef.current };
    pausedRef.current = true;
    trackRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    posRef.current = drag.current.startPos + (e.clientX - drag.current.startX);
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };
  const onMouseUp = () => {
    drag.current.active = false;
    pausedRef.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };
  const onTouchStart = (e) => {
    drag.current = { active: true, startX: e.touches[0].clientX, startPos: posRef.current };
    pausedRef.current = true;
  };
  const onTouchMove = (e) => {
    if (!drag.current.active) return;
    posRef.current = drag.current.startPos + (e.touches[0].clientX - drag.current.startX);
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };
  const onTouchEnd = () => {
    drag.current.active = false;
    pausedRef.current = false;
  };

  return (
    <div
      className="bmc-viewport"
      onMouseEnter={handleEnter}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={e => { onMouseUp(); handleLeave(); }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="bmc-fade-left"  aria-hidden="true" />
      <div className="bmc-fade-right" aria-hidden="true" />
      <div ref={trackRef} className="bmc-track">
        {items.map((post, i) => (
          <div key={`${post.id}-${i}`} className="bmc-slide">
            <MarqueeCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Newsletter capture bar ─── */
function NewsletterBar() {
  const [ref, visible] = useReveal(0.1);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); if (email) setSubmitted(true); };
  return (
    <div ref={ref} className={`blog-newsletter ${visible ? 'blog-reveal-up' : ''}`}>
      <div className="blog-newsletter-glow" />
      <div className="blog-newsletter-inner">
        <div className="blog-newsletter-text">
          <span className="blog-newsletter-eyebrow">
            <span className="blog-nl-dot" /> Weekly dispatch
          </span>
          <h3 className="blog-newsletter-title">Voice AI field notes, straight to your inbox.</h3>
          <p className="blog-newsletter-sub">
            Join 4,200+ practitioners getting weekly insights on AI voice deployments,
            compliance updates, and product deep-dives. No noise, unsubscribe any time.
          </p>
        </div>
        <div className="blog-newsletter-form-wrap">
          {!submitted ? (
            <form className="blog-nl-form" onSubmit={handleSubmit}>
              <input type="email" className="blog-nl-input" placeholder="your@email.com"
                value={email} onChange={e => setEmail(e.target.value)} required aria-label="Email address" />
              <button type="submit" className="blog-nl-btn">Subscribe →</button>
            </form>
          ) : (
            <div className="blog-nl-success">
              <span className="blog-nl-success-icon">✓</span>
              You're on the list — look out for your first dispatch!
            </div>
          )}
          <p className="blog-nl-fine">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Sidebar ─── */
function BlogSidebar({ activeCategory, onCategory }) {
  const trending = BLOG_POSTS.slice(0, 4);
  return (
    <aside className="blog-sidebar">
      <div className="blog-sidebar-block">
        <h4 className="blog-sidebar-heading">Browse topics</h4>
        <div className="blog-sidebar-topics">
          {BLOG_CATEGORIES.filter(c => c !== 'All').map(cat => (
            <button key={cat} type="button"
              className={`blog-sidebar-topic ${activeCategory === cat ? 'blog-sidebar-topic-active' : ''}`}
              onClick={() => onCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="blog-sidebar-block">
        <h4 className="blog-sidebar-heading">Trending reads</h4>
        <ul className="blog-trending-list">
          {trending.map((p, i) => (
            <li key={p.id} className="blog-trending-item">
              <span className="blog-trending-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <Link to={`/blog/${p.slug}`} className="blog-trending-title">{p.title}</Link>
                <span className="blog-meta-text">{p.readTime}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-sidebar-cta">
        <div className="blog-sidebar-cta-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="7" width="16" height="12" rx="3.5"
              stroke="#F97316" strokeWidth="1.8" />
            <path d="M12 3v4" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="3" r="1.5" fill="#F97316" />
            <path d="M9 12v2M12 11v4M15 12v2" stroke="#F97316"
              strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h4 className="blog-sidebar-cta-title">See it live</h4>
        <p className="blog-sidebar-cta-text">Watch Conciva AI handle a real clinic call in under 2 seconds.</p>
        <Link to="/contact" className="blog-sidebar-cta-btn">Book a demo →</Link>
      </div>
    </aside>
  );
}

/* ─── Page ─── */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [heroRef, heroVisible] = useReveal(0.05);

  const featured    = BLOG_POSTS.find(p => p.featured);
  const nonFeatured = BLOG_POSTS.filter(p => !p.featured);

  const filtered = nonFeatured.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q)
      || p.excerpt.toLowerCase().includes(q)
      || p.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const showMarquee = activeCategory === 'All' && !searchQuery;

  return (
    <div className="blog-page">

      {/* ── Hero header ── */}
      <header ref={heroRef} className={`blog-header ${heroVisible ? 'blog-reveal-up' : ''}`}>
        <div className="blog-header-bg" />
        <div className="blog-container">
          <div className="blog-header-eyebrow">
            <span className="blog-header-dot" /> Field Notes · Singapore
          </div>
          <h1 className="blog-header-title">
            Field notes from<br />
            <span className="blog-header-accent">Singapore's front desk.</span>
          </h1>
          <p className="blog-header-sub">
            Insights, case studies, and engineering deep-dives from the team building
            AI voice agents for Asia's fastest-moving businesses.
          </p>
          <div className="blog-search-wrap">
           <span className="blog-search-icon" aria-hidden="true">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</span>
            <input type="search" className="blog-search-input" placeholder="Search articles…"
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)} aria-label="Search articles" />
          </div>
          <div className="blog-cats-row" role="tablist" aria-label="Filter by category">
            {BLOG_CATEGORIES.map(cat => (
              <CategoryPill key={cat} label={cat} active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)} />
            ))}
          </div>
        </div>
      </header>

      {/* ── Featured post ── */}
      {featured && activeCategory === 'All' && !searchQuery && (
        <div className="blog-container" style={{ paddingTop: '2.5rem' }}>
          <FeaturedPost post={featured} />
        </div>
      )}

      {/* ── Marquee section label ── */}
      {showMarquee && (
        <div className="blog-container">
          <div className="bmc-section-header">
            <h2 className="bmc-section-title">Latest articles</h2>
            <p className="bmc-section-hint">Drag to explore · auto-scrolling</p>
          </div>
        </div>
      )}

      {/* ── Marquee carousel OR filtered grid ── */}
      {showMarquee ? (
        <BlogMarquee posts={nonFeatured} />
      ) : (
        <div className="blog-container">
          {filtered.length > 0 ? (
            <div className="blog-content-row">
              <main className="blog-main">
                <div className="blog-grid">
                  {filtered.map((post, i) => (
                    <article key={post.id} className="blog-card blog-reveal-up"
                      style={{ animationDelay: `${(i % 3) * 0.08}s` }}>
                      <div className="blog-thumb-wrap">
                        <BlogThumb category={post.category} />
                      </div>
                      <div className="blog-card-bar" style={{ background: post.accentColor }} />
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span className="blog-cat-label"
                            style={{ color: post.accentColor, borderColor: post.accentColor + '40', background: post.accentColor + '12' }}>
                            {post.category}
                          </span>
                          <span className="blog-meta-text blog-card-read">{post.readTime}</span>
                        </div>
                        <h3 className="blog-card-title">{post.title}</h3>
                        <p className="blog-card-excerpt">{post.excerpt}</p>
                        <div className="blog-tag-row">
                          {post.tags.slice(0, 2).map(t => <span key={t} className="blog-tag">{t}</span>)}
                        </div>
                      </div>
                      <div className="blog-card-footer">
                        <span className="blog-meta-text">{post.date}</span>
                        <Link to={`/blog/${post.slug}`} className="blog-card-link">Read →</Link>
                      </div>
                    </article>
                  ))}
                </div>
              </main>
              <BlogSidebar activeCategory={activeCategory} onCategory={setActiveCategory} />
            </div>
          ) : (
            <div className="blog-empty">
              <span className="blog-empty-icon">
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</span>
              <p>No articles match your search. Try a different keyword or category.</p>
              <button type="button" className="blog-empty-reset"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Newsletter ── */}
      <div className="blog-container" style={{ paddingBottom: '5rem' }}>
        <NewsletterBar />
      </div>

    </div>
  );
}
