import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── SVG icons for capability cards (no emojis) ─── */
const CapIcons = {
  Performance: ({ color = '#111827' }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={color} strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  Language: ({ color = '#111827' }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.7"/>
      <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M3 12h18" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Integration: ({ color = '#111827' }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Voice: ({ color = '#111827' }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="2" width="6" height="12" rx="3" stroke={color} strokeWidth="1.7"/>
      <path d="M5 10a7 7 0 0 0 14 0" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M12 19v3M8 22h8" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Automation: ({ color = '#111827' }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.7"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Infrastructure: ({ color = '#111827' }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="1.7"/>
      <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M6 8h.01M9 8h6" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M6 11h.01M9 11h6" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
};

/* ─── Card config ───────────────────────────────────────────────────
   Icons render dark (#111827, the brand Text colour) on a light tile so
   they stay legible on every card. Glows are orange-family only; the
   previous per-card violet / sky / green / amber accents were off-brand
   and were being derived by sniffing substrings out of the rgba() string,
   which is why a green icon reached production. Colours are explicit now. */
const ICON_COLOR = '#111827';
const TAG_COLOR  = '#C2410C';

const CARD_PALETTE = [
  { glow: 'rgba(249,115,22,0.70)', IconComp: CapIcons.Performance,    tag: 'Performance'    },
  { glow: 'rgba(251,146,60,0.62)', IconComp: CapIcons.Language,       tag: 'Language'       },
  { glow: 'rgba(234,88,12,0.58)',  IconComp: CapIcons.Integration,    tag: 'Integration'    },
  { glow: 'rgba(249,115,22,0.55)', IconComp: CapIcons.Voice,          tag: 'Voice'          },
  { glow: 'rgba(251,146,60,0.58)', IconComp: CapIcons.Automation,     tag: 'Automation'     },
  { glow: 'rgba(234,88,12,0.52)',  IconComp: CapIcons.Infrastructure, tag: 'Infrastructure' },
];

/* ─── Single sticky card ─── */
function PillarCard({ capability, index, total }) {
  const stickyRef  = useRef(null);
  const cardRef    = useRef(null);
  const glowRef    = useRef(null);
  const pal        = CARD_PALETTE[index % CARD_PALETTE.length];
  const targetScale = 1 - (total - index) * 0.045;
  const topOffset   = index * 26; // px stagger so cards visually stack

  useEffect(() => {
    const sticky = stickyRef.current;
    const card   = cardRef.current;
    const glow   = glowRef.current;
    if (!sticky || !card) return;

    /* Initial state */
    gsap.set(card, { scale: 1, transformOrigin: 'center top' });

    /* Scale-down on scroll (stacking effect) */
    const st = ScrollTrigger.create({
      trigger: sticky,
      start: 'top center',
      end: 'bottom center',
      scrub: 1.2,
      onUpdate: (self) => {
        const scale = gsap.utils.interpolate(1, targetScale, self.progress);
        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: 'center top',
        });
      },
    });

    /* Glow pulse on card entrance */
    gsap.fromTo(
      glow,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1, scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sticky,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    /* Card slide-up entrance */
    gsap.fromTo(
      card,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sticky,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => st.kill();
  }, [index, total, targetScale]);

  return (
    /* Outer sticky lane — gives each card its own scroll height */
    <div
      ref={stickyRef}
      className="scc-sticky-lane"
    >
      <div
        ref={cardRef}
        className="scc-card"
        style={{
          /* surface comes from .scc-card in industries.css */
          top: `calc(88px + ${topOffset}px)`,  /* stagger peek */
        }}
      >
        {/* ── Conic electric border ── */}
        <div
          className="scc-electric-border"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${pal.glow} 60deg,
              ${pal.glow.replace('0.', '0.5')} 120deg,
              transparent 180deg,
              ${pal.glow.replace('0.', '0.3')} 240deg,
              transparent 360deg
            )`,
          }}
        />

        {/* ── Ambient glow blob ── */}
        <div
          ref={glowRef}
          className="scc-glow-blob"
          style={{ background: pal.glow.replace(/[\d.]+\)$/, '0.18)') }}
        />

        {/* ── Glass shine strips ── */}
        <div className="scc-shine-top" />
        <div className="scc-shine-side" />

        {/* ── Dot grid texture ── */}
        <div className="scc-dot-grid" />

        {/* ── Content ── */}
        <div className="scc-content">
          {/* Left: number + tag */}
          <div className="scc-left-col">
            <span className="scc-index">0{index + 1}</span>
            <span className="scc-tag" style={{ color: TAG_COLOR }}>
              {pal.tag}
            </span>
          </div>

          {/* Centre: icon + title + desc */}
          <div className="scc-centre-col">
            <div className="scc-icon-wrap">
              <pal.IconComp color={ICON_COLOR} />
            </div>
            <h3 className="scc-title">{capability.title}</h3>
            <p className="scc-desc">{capability.desc}</p>
          </div>

          {/* Right: metric chip */}
          <div className="scc-right-col">
            <div className="scc-kpi-chip" style={{ borderColor: pal.glow.replace(/[\d.]+\)$/, '0.35)') }}>
              <pal.IconComp color={ICON_COLOR} />
              <span className="scc-kpi-label">Live</span>
            </div>
          </div>
        </div>

        {/* ── Frosted texture overlay ── */}
        <div className="scc-frosted" />
      </div>
    </div>
  );
}

/* ─── Section wrapper ─── */
export default function StackedCapabilityCards({ capabilities }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    gsap.fromTo(
      wrap,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={wrapRef} className="scc-wrapper">
      {/* Section heading */}
      <div className="scc-heading-block">
        <span className="scc-eyebrow">Platform Foundation</span>
        <h2 className="scc-section-title">
          Core Modular <span className="scc-title-accent">Technology Pillars</span>
        </h2>
        <p className="scc-section-sub">
          Every industry solution is backed by Conciva AI's carrier-grade cloud network,
          real-time AI processing engine, and enterprise compliance layer.
        </p>
      </div>

      {/* Stacked cards */}
      <div className="scc-cards-stack">
        {capabilities.map((cap, i) => (
          <PillarCard
            key={i}
            capability={cap}
            index={i}
            total={capabilities.length}
          />
        ))}
      </div>
    </div>
  );
}
