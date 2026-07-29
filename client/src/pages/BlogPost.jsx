import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../constants/blogData';
import BlogThumb from '../components/blog/BlogThumb';
import '../styles/blog.css';
import '../styles/blog-post.css';

/**
 * BlogPost — the article page behind /blog/:slug.
 *
 * Renders whatever the post genuinely has. `content` is optional: when a post
 * in blogData.js gains a `content` array, it renders through <ArticleBody />
 * below with no further changes here. Until then the page shows the real
 * subtitle, lead and metadata rather than inventing article text.
 *
 * Supported `content` block shapes:
 *   { type: 'p',      text }
 *   { type: 'h2',     text }
 *   { type: 'quote',  text, cite? }
 *   { type: 'list',   items: [] }
 *   { type: 'code',   text }
 */

function ArticleBody({ blocks }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i} className="bp-h2">{b.text}</h2>;
          case 'quote':
            return (
              <blockquote key={i} className="bp-quote">
                <p>{b.text}</p>
                {b.cite && <cite>{b.cite}</cite>}
              </blockquote>
            );
          case 'list':
            return (
              <ul key={i} className="bp-list">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
          case 'code':
            return <pre key={i} className="bp-code"><code>{b.text}</code></pre>;
          case 'p':
          default:
            return <p key={i} className="bp-p">{b.text}</p>;
        }
      })}
    </>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => BLOG_POSTS.find(p => p.slug === slug), [slug]);

  useEffect(() => {
    document.title = post
      ? `${post.title} — Conciva AI`
      : 'Article not found — Conciva AI';
  }, [post]);

  /* Unknown slug — recoverable, not a dead end */
  if (!post) {
    return (
      <div className="blog-page bp-missing-wrap">
        <div className="blog-container bp-missing">
          <span className="bp-missing-code">404</span>
          <h1 className="bp-missing-title">We couldn&rsquo;t find that article.</h1>
          <p className="bp-missing-text">
            The link may be out of date, or the piece may have moved.
            Everything we&rsquo;ve published is on the main index.
          </p>
          <Link to="/blog" className="blog-read-btn">
            Back to all articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  }

  /* Up to two further reads, preferring the same category */
  const related = BLOG_POSTS
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => (b.category === post.category) - (a.category === post.category))
    .slice(0, 2);

  return (
    <article className="blog-page bp-page">

      {/* ── Header ── */}
      <header className="bp-header">
        <div className="bp-header-bg" aria-hidden="true" />
        <div className="blog-container bp-header-inner">
          <Link to="/blog" className="bp-back">
            <span aria-hidden="true">←</span> All articles
          </Link>

          <div className="bp-meta-row">
            <span
              className="blog-cat-label"
              style={{
                color: post.accentColor,
                borderColor: post.accentColor + '40',
                background: post.accentColor + '12',
              }}
            >
              {post.category}
            </span>
            <span className="blog-dot-sep" />
            <span className="blog-meta-text">{post.readTime}</span>
            <span className="blog-dot-sep" />
            <span className="blog-meta-text">{post.date}</span>
          </div>

          <h1 className="bp-title">{post.title}</h1>
          {post.subtitle && <p className="bp-subtitle">{post.subtitle}</p>}

          {post.tags?.length > 0 && (
            <div className="blog-tag-row bp-tags">
              {post.tags.map(t => <span key={t} className="blog-tag">{t}</span>)}
            </div>
          )}
        </div>
      </header>

      {/* ── Cover artwork ── */}
      <div className="blog-container">
        <div className="bp-cover">
          <BlogThumb category={post.category} className="bp-cover-art" />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="blog-container">
        <div className="bp-body">
          {post.excerpt && <p className="bp-lead">{post.excerpt}</p>}

          {Array.isArray(post.content) && post.content.length > 0 ? (
            <ArticleBody blocks={post.content} />
          ) : (
            <p className="bp-p bp-continues">
              The full write-up for this piece is being prepared. In the
              meantime, our team is happy to walk you through the detail
              directly — <Link to="/contact">get in touch</Link> and we&rsquo;ll
              share what we found.
            </p>
          )}
        </div>
      </div>

      {/* ── Further reading ── */}
      {related.length > 0 && (
        <div className="blog-container">
          <section className="bp-related">
            <h2 className="bp-related-title">Keep reading</h2>
            <div className="bp-related-grid">
              {related.map(r => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="bp-related-card">
                  <div className="bp-related-thumb">
                    <BlogThumb category={r.category} />
                  </div>
                  <div className="bp-related-body">
                    <span
                      className="blog-cat-label"
                      style={{
                        color: r.accentColor,
                        borderColor: r.accentColor + '40',
                        background: r.accentColor + '12',
                      }}
                    >
                      {r.category}
                    </span>
                    <h3 className="bp-related-h">{r.title}</h3>
                    <span className="blog-meta-text">{r.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ── CTA ── */}
      <div className="blog-container bp-cta-wrap">
        <div className="bp-cta">
          <h2 className="bp-cta-title">See Conciva AI handle a real call.</h2>
          <p className="bp-cta-text">
            Book a walkthrough and hear a live agent take an inbound call
            end to end — booking, CRM sync and all.
          </p>
          <Link to="/contact" className="bp-cta-btn">
            Book a demo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
