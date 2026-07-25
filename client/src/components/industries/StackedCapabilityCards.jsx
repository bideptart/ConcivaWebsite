import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Card accent colours (one per pillar, all harmonised with #F97316) ─── */
const CARD_PALETTE = [
  { bg: 'linear-gradient(145deg,#1E293B 0%,#0F172A 100%)', glow: 'rgba(249,115,22,0.7)',  icon: '⚡', tag: 'Performance'  },
  { bg: 'linear-gradient(145deg,#1E293B 0%,#0F172A 100%)', glow: 'rgba(139,92,246,0.6)',  icon: '🌐', tag: 'Language'     },
  { bg: 'linear-gradient(145deg,#1E293B 0%,#0F172A 100%)', glow: 'rgba(14,165,233,0.6)',  icon: '🔗', tag: 'Integration'  },
  { bg: 'linear-gradient(145deg,#1E293B 0%,#0F172A 100%)', glow: 'rgba(249,115,22,0.55)', icon: '🎙️', tag: 'Voice'        },
  { bg: 'linear-gradient(145deg,#1E293B 0%,#0F172A 100%)', glow: 'rgba(16,185,129,0.6)',  icon: '🤖', tag: 'Automation'   },
  { bg: 'linear-gradient(145deg,#1E293B 0%,#0F172A 100%)', glow: 'rgba(245,158,11,0.6)',  icon: '🏗️', tag: 'Infrastructure'},
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
          background: pal.bg,
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
            <span
              className="scc-tag"
              style={{ color: pal.glow.includes('249') ? '#F97316' :
                             pal.glow.includes('139') ? '#A78BFA' :
                             pal.glow.includes('14,165') ? '#38BDF8' :
                             pal.glow.includes('16,185') ? '#34D399' :
                             pal.glow.includes('245') ? '#FCD34D' : '#F97316' }}
            >
              {pal.tag}
            </span>
          </div>

          {/* Centre: icon + title + desc */}
          <div className="scc-centre-col">
            <div className="scc-icon-wrap">
              <span className="scc-icon">{pal.icon}</span>
            </div>
            <h3 className="scc-title">{capability.title}</h3>
            <p className="scc-desc">{capability.desc}</p>
          </div>

          {/* Right: metric chip (re-uses first two capability words as a KPI badge) */}
          <div className="scc-right-col">
            <div className="scc-kpi-chip" style={{ borderColor: pal.glow.replace(/[\d.]+\)$/, '0.35)') }}>
              <span className="scc-kpi-icon">{pal.icon}</span>
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
