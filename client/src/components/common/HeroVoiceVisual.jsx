import React from 'react';
import '../../styles/hero-visual.css';

/**
 * HeroVoiceVisual — original Conciva AI hero illustration.
 *
 * Concept: "the conversation pipeline" — a live voice call enters from the left,
 * is handled by the AI core at centre, and fans out into a live transcript,
 * CRM/workflow automation, and analytics. Soft-3D rather than hard isometric:
 * lifted cards with thickness edges, layered translucent fills, and glow.
 *
 * Pure SVG on a 16:9 viewBox with a transparent background, so it scales to any
 * container and can be exported as a flat asset. Every moving part sits in its
 * own <g class="hv-layer-*"> so animations stay independent and cheap.
 *
 * Palette: #F97316 primary · #FB923C secondary · #FFEDD5 accent ·
 *          #FFF7ED background · #111827 text · rgba(249,115,22,0.15) border.
 */
export default function HeroVoiceVisual({ className = '' }) {
  return (
    <div className={`hv-root ${className}`.trim()}>
      <svg
        className="hv-svg"
        viewBox="0 0 960 540"
        role="img"
        aria-label="Conciva AI handling a live customer call: voice agent, real-time transcript, CRM automation and analytics"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Gradients ── */}
          <radialGradient id="hvCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.38" />
            <stop offset="55%" stopColor="#F97316" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="hvCoreFill" cx="38%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="62%" stopColor="#FFF7ED" />
            <stop offset="100%" stopColor="#FFEDD5" />
          </radialGradient>

          <linearGradient id="hvCardFill" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="hvAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          <linearGradient id="hvBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          <linearGradient id="hvLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#F97316" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="hvSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* ── Filters ── */}
          <filter id="hvCardShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="7" stdDeviation="11"
              floodColor="#9A3412" floodOpacity="0.13" />
          </filter>

          <filter id="hvCoreShadow" x="-45%" y="-45%" width="190%" height="190%">
            <feDropShadow dx="0" dy="12" stdDeviation="20"
              floodColor="#EA580C" floodOpacity="0.22" />
          </filter>

          <filter id="hvSoftBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="26" />
          </filter>

          {/* Dot-grid, faded at the edges so it never reads as a hard box */}
          <pattern id="hvDots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="1.6" fill="#F97316" fillOpacity="0.16" />
          </pattern>
          <radialGradient id="hvDotMaskGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="hvDotMask">
            <rect width="960" height="540" fill="url(#hvDotMaskGrad)" />
          </mask>
        </defs>

        {/* ═══ LAYER 1 — ambient backdrop ═══ */}
        <g className="hv-layer-backdrop">
          <rect width="960" height="540" fill="url(#hvDots)" mask="url(#hvDotMask)" />
          <ellipse className="hv-glow" cx="458" cy="268" rx="238" ry="178"
            fill="url(#hvCoreGlow)" />
          <ellipse cx="792" cy="150" rx="150" ry="120" fill="#FB923C"
            fillOpacity="0.07" filter="url(#hvSoftBlur)" />
          <ellipse cx="150" cy="430" rx="140" ry="112" fill="#F97316"
            fillOpacity="0.06" filter="url(#hvSoftBlur)" />
        </g>

        {/* ═══ LAYER 2 — connection lines ═══ */}
        <g className="hv-layer-links" fill="none" strokeLinecap="round">
          {[
            'M 314 152 C 352 152, 358 208, 380 242',
            'M 538 244 C 570 236, 580 198, 606 180',
            'M 515 325 C 556 358, 592 366, 636 374',
            'M 401 325 C 360 358, 316 366, 270 374',
          ].map((d, i) => (
            <g key={i}>
              <path d={d} stroke="url(#hvLine)" strokeWidth="2" />
              <path
                className={`hv-flow hv-flow-${i + 1}`}
                d={d}
                pathLength="100"
                stroke="#F97316"
                strokeWidth="3"
                strokeDasharray="7 93"
              />
            </g>
          ))}
        </g>

        {/* ═══ LAYER 3 — AI core ═══ */}
        <g className="hv-layer-core">
          {/* concentric orbit rings */}
          <circle className="hv-ring hv-ring-1" cx="458" cy="268" r="106"
            fill="none" stroke="#F97316" strokeOpacity="0.32"
            strokeWidth="1.5" strokeDasharray="3 9" />
          <circle className="hv-ring hv-ring-2" cx="458" cy="268" r="132"
            fill="none" stroke="#F97316" strokeOpacity="0.2"
            strokeWidth="1.5" strokeDasharray="3 12" />

          {/* satellite tracing the inner ring */}
          <g className="hv-orbit">
            <circle cx="458" cy="162" r="14" fill="#F97316" fillOpacity="0.16" />
            <circle cx="458" cy="162" r="6" fill="url(#hvAccent)" />
          </g>

          {/* disc */}
          <g filter="url(#hvCoreShadow)">
            <circle cx="458" cy="268" r="80" fill="url(#hvCoreFill)" />
            <circle cx="458" cy="268" r="80" fill="none"
              stroke="#F97316" strokeOpacity="0.22" strokeWidth="1.5" />
            <path d="M 458 188 A 80 80 0 0 1 528 228"
              fill="none" stroke="#FFFFFF" strokeOpacity="0.9"
              strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* live voice waveform */}
          <g className="hv-wave">
            {[22, 38, 56, 30, 68, 34, 52, 40, 24].map((h, i) => (
              <rect
                key={i}
                className={`hv-wave-bar hv-wb-${i + 1}`}
                x={411 + i * 11}
                y={262 - h / 2}
                width="6"
                height={h}
                rx="3"
                fill="url(#hvBar)"
              />
            ))}
          </g>

          <text x="458" y="322" className="hv-core-label" textAnchor="middle">
            CONCIVA AI
          </text>

          {/* status pill under the disc */}
          <g className="hv-status">
            <rect x="398" y="360" width="120" height="34" rx="17"
              fill="#FFFFFF" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5"
              filter="url(#hvCardShadow)" />
            <circle className="hv-pulse-dot" cx="418" cy="377" r="5" fill="#F97316" />
            <text x="432" y="382" className="hv-pill-text">Answering</text>
          </g>
        </g>

        {/* ═══ LAYER 4 — omnichannel intake ═══
             Three inbound channels converging on one agent. Replaces the
             earlier "incoming call" card, which carried an invented person
             and a placeholder phone number — this says something only
             Conciva can say instead. */}
        <g className="hv-layer-caller hv-float-a">
          <rect x="48" y="94" width="266" height="112" rx="20"
            fill="#FDBA74" fillOpacity="0.35" />
          <g filter="url(#hvCardShadow)">
            <rect x="48" y="88" width="266" height="112" rx="20"
              fill="url(#hvCardFill)" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />
          </g>
          <rect x="48" y="88" width="266" height="112" rx="20" fill="url(#hvSheen)" />

          <text x="66" y="110" className="hv-card-title hv-title-sm">
            One agent, every channel
          </text>

          {/* Each channel drops onto a shared bus that runs into the agent.
              Routing them straight across would hide two of the three paths
              behind the neighbouring tiles. */}
          <g fill="none" strokeLinecap="round">
            {[
              'M 79 144 L 79 149 Q 79 154 84 154 L 213 154',
              'M 113 144 L 113 149 Q 113 154 118 154 L 213 154',
              'M 147 144 L 147 149 Q 147 154 152 154 L 213 154',
            ].map((d, i) => (
              <g key={i}>
                <path d={d} stroke="#F97316" strokeOpacity="0.24" strokeWidth="2" />
                <path className={`hv-chan hv-chan-${i + 1}`} d={d} pathLength="100"
                  stroke="#F97316" strokeWidth="2.6" strokeDasharray="9 91" />
              </g>
            ))}
          </g>

          {/* channel tiles — voice, message, web */}
          {[0, 1, 2].map(i => (
            <g key={i} transform={`translate(${66 + i * 34} 118)`}>
              <rect width="26" height="26" rx="8" fill="#FFFFFF"
                stroke="rgba(249,115,22,0.28)" strokeWidth="1.4" />
              {i === 0 && (
                <g fill="#F97316">
                  <rect x="8" y="9" width="2.6" height="8" rx="1.3" />
                  <rect x="12" y="6.5" width="2.6" height="13" rx="1.3" />
                  <rect x="16" y="9.5" width="2.6" height="7" rx="1.3" />
                </g>
              )}
              {i === 1 && (
                <g fill="#F97316">
                  <rect x="6" y="7.5" width="14" height="10" rx="3.2" />
                  <path d="M 9.5 17 L 9.5 21.5 L 13.5 17 Z" />
                </g>
              )}
              {i === 2 && (
                <g fill="none" stroke="#F97316" strokeWidth="1.6">
                  <circle cx="13" cy="13" r="6.2" />
                  <path d="M 6.8 13 h 12.4" />
                  <ellipse cx="13" cy="13" rx="2.7" ry="6.2" />
                </g>
              )}
            </g>
          ))}

          {/* the single agent they all land on */}
          <g className="hv-hub">
            <circle cx="230" cy="154" r="20" fill="#F97316" fillOpacity="0.12" />
            <circle cx="230" cy="154" r="15" fill="url(#hvAccent)" />
            <g fill="#FFFFFF">
              <rect x="224" y="150.5" width="2.2" height="7" rx="1.1" />
              <rect x="227.5" y="147.5" width="2.2" height="13" rx="1.1" />
              <rect x="231" y="149.5" width="2.2" height="9" rx="1.1" />
              <rect x="234.5" y="151.5" width="2.2" height="5" rx="1.1" />
            </g>
          </g>

          <circle className="hv-pulse-dot" cx="70" cy="186" r="4.2" fill="#F97316" />
          <text x="82" y="190" className="hv-micro">Answered in one ring · no queue</text>
        </g>

        {/* ═══ LAYER 5 — live transcript ═══ */}
        <g className="hv-layer-transcript hv-float-b">
          <rect x="606" y="98" width="306" height="186" rx="22"
            fill="#FDBA74" fillOpacity="0.32" />
          <g filter="url(#hvCardShadow)">
            <rect x="606" y="92" width="306" height="186" rx="22"
              fill="url(#hvCardFill)" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />
          </g>
          <rect x="606" y="92" width="306" height="186" rx="22" fill="url(#hvSheen)" />

          <text x="630" y="126" className="hv-card-title">Live transcript</text>
          <g>
            <rect x="828" y="110" width="62" height="24" rx="12"
              fill="#FFEDD5" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
            <text x="859" y="126" className="hv-tag" textAnchor="middle">EN · HI</text>
          </g>

          {/* caller bubble */}
          <rect x="630" y="144" width="212" height="44" rx="13"
            fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
          <text x="646" y="171" className="hv-bubble">I&#39;d like a site visit</text>

          {/* agent bubble */}
          <rect x="676" y="196" width="212" height="44" rx="13"
            fill="#FFEDD5" stroke="rgba(249,115,22,0.22)" strokeWidth="1" />
          <text x="692" y="223" className="hv-bubble hv-bubble-ai">
            Thursday 3 PM — booked
          </text>

          {/* typing indicator */}
          <g className="hv-typing">
            <circle className="hv-dot-1" cx="642" cy="258" r="4" fill="#D1D5DB" />
            <circle className="hv-dot-2" cx="656" cy="258" r="4" fill="#D1D5DB" />
            <circle className="hv-dot-3" cx="670" cy="258" r="4" fill="#D1D5DB" />
          </g>
        </g>

        {/* ═══ LAYER 6 — workflow / CRM automation ═══ */}
        <g className="hv-layer-crm hv-float-c">
          <rect x="636" y="336" width="276" height="136" rx="20"
            fill="#FDBA74" fillOpacity="0.32" />
          <g filter="url(#hvCardShadow)">
            <rect x="636" y="330" width="276" height="136" rx="20"
              fill="url(#hvCardFill)" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />
          </g>
          <rect x="636" y="330" width="276" height="136" rx="20" fill="url(#hvSheen)" />

          <text x="660" y="364" className="hv-card-title">Workflow automation</text>

          <g>
            <circle cx="668" cy="392" r="9" fill="url(#hvAccent)" />
            <path d="M 664 392 l 3 3 l 6 -6" stroke="#FFFFFF" strokeWidth="2"
              fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="688" y="397" className="hv-row">Contact synced to CRM</text>
          </g>
          <g>
            <circle cx="668" cy="422" r="9" fill="url(#hvAccent)" />
            <path d="M 664 422 l 3 3 l 6 -6" stroke="#FFFFFF" strokeWidth="2"
              fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="688" y="427" className="hv-row">Site visit confirmed</text>
          </g>

          <rect x="660" y="446" width="228" height="7" rx="3.5" fill="#FFEDD5" />
          <rect className="hv-progress" x="660" y="446" width="228" height="7"
            rx="3.5" fill="url(#hvAccent)" />
        </g>

        {/* ═══ LAYER 7 — analytics ═══ */}
        <g className="hv-layer-analytics hv-float-d">
          <rect x="60" y="346" width="210" height="142" rx="20"
            fill="#FDBA74" fillOpacity="0.32" />
          <g filter="url(#hvCardShadow)">
            <rect x="60" y="340" width="210" height="142" rx="20"
              fill="url(#hvCardFill)" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />
          </g>
          <rect x="60" y="340" width="210" height="142" rx="20" fill="url(#hvSheen)" />

          <text x="84" y="374" className="hv-card-title">Resolution rate</text>
          <text x="84" y="420" className="hv-metric">94%</text>

          <g>
            {[18, 26, 20, 34, 28, 40].map((h, i) => (
              <rect
                key={i}
                className={`hv-chart-bar hv-cb-${i + 1}`}
                x={84 + i * 22}
                y={462 - h}
                width="12"
                height={h}
                rx="3"
                fill="url(#hvBar)"
                fillOpacity={i === 5 ? 1 : 0.45}
              />
            ))}
          </g>
        </g>

        {/* ═══ LAYER 8 — floating latency chip ═══ */}
        <g className="hv-layer-chip hv-float-e">
          <g filter="url(#hvCardShadow)">
            <rect x="292" y="52" width="128" height="40" rx="20"
              fill="#FFFFFF" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />
          </g>
          <circle className="hv-pulse-dot" cx="314" cy="72" r="5" fill="#FB923C" />
          <text x="328" y="78" className="hv-pill-text">&lt; 300ms</text>
        </g>
      </svg>
    </div>
  );
}
