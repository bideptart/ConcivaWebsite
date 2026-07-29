import React from 'react';

/* ═══════════════════════════════════════════════════════════════
   BLOG THUMBNAILS — original generated artwork, one motif per
   category. No photography, no stock, no emoji: every card gets a
   distinct geometric illustration that renders crisply at any size
   and costs nothing to load.

   Palette is brand-only: #F97316 · #FB923C · #FED7AA · #FFEDD5 ·
   #FFF7ED, with #111827 reserved for the one dark accent per motif.

   Card motifs draw on a 320×150 viewBox; the featured scene uses
   420×420. Both scale via preserveAspectRatio, so the same component
   serves the grid, the marquee and the hero panel.
═══════════════════════════════════════════════════════════════ */

let uid = 0;
const nextId = () => `bt${(uid += 1)}`;

/* ── Shared backdrop: soft wash + dot grid ── */
function Backdrop({ id, w, h }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FFEDD5" />
        </linearGradient>
        <linearGradient id={`${id}-up`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF7ED" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="#F97316" fillOpacity="0.14" />
        </pattern>
      </defs>
      <rect width={w} height={h} fill={`url(#${id}-bg)`} />
      <rect width={w} height={h} fill={`url(#${id}-dots)`} />
      <ellipse cx={w * 0.5} cy={h * 0.55} rx={w * 0.42} ry={h * 0.46}
        fill={`url(#${id}-glow)`} />
    </>
  );
}

/* ── AI & Voice — live waveform through a listening ring ── */
function MotifVoice({ id }) {
  const bars = [14, 28, 44, 24, 58, 22, 42, 30, 16];
  return (
    <g>
      <circle cx="160" cy="76" r="52" fill="none" stroke="#F97316"
        strokeOpacity="0.2" strokeWidth="1.6" strokeDasharray="3 8" />
      <circle cx="160" cy="76" r="66" fill="none" stroke="#F97316"
        strokeOpacity="0.12" strokeWidth="1.6" strokeDasharray="3 10" />
      {bars.map((h, i) => (
        <rect key={i} x={112 + i * 12} y={76 - h / 2} width="6" height={h}
          rx="3" fill={`url(#${id}-up)`} />
      ))}
      <circle cx="248" cy="40" r="13" fill="#111827" />
      <rect x="245" y="34" width="6" height="12" rx="3" fill="#FB923C" />
    </g>
  );
}

/* ── Industry Insights — isometric skyline of verticals ── */
function MotifIndustry({ id }) {
  const K = 15, M = 8.7;
  const P = (x, y, z = 0) => `${160 + (x - y) * K},${96 + (x + y) * M - z * 15}`;
  const Blk = ({ x, y, h, tone }) => (
    <g>
      <polygon points={`${P(x, y + 1, h)} ${P(x + 1, y + 1, h)} ${P(x + 1, y + 1)} ${P(x, y + 1)}`} fill={tone[1]} />
      <polygon points={`${P(x + 1, y, h)} ${P(x + 1, y + 1, h)} ${P(x + 1, y + 1)} ${P(x + 1, y)}`} fill={tone[2]} />
      <polygon points={`${P(x, y, h)} ${P(x + 1, y, h)} ${P(x + 1, y + 1, h)} ${P(x, y + 1, h)}`} fill={tone[0]} />
    </g>
  );
  return (
    <g>
      <polygon points={`${P(-2.4, -2.4)} ${P(2.4, -2.4)} ${P(2.4, 2.4)} ${P(-2.4, 2.4)}`}
        fill="#FFFFFF" fillOpacity="0.55" stroke="#F97316" strokeOpacity="0.18" strokeWidth="1.4" />
      <Blk x={-1.9} y={-0.5} h={1.5} tone={['#FFFFFF', '#FFEDD5', '#FED7AA']} />
      <Blk x={-0.7} y={-1.4} h={2.6} tone={['#FED7AA', '#FDBA74', '#FB923C']} />
      <Blk x={0.5} y={-0.6} h={1.9} tone={['#FFFFFF', '#FFEDD5', '#FED7AA']} />
      <Blk x={0.6} y={0.7} h={1.1} tone={['#FDBA74', '#FB923C', '#F97316']} />
    </g>
  );
}

/* ── Product Updates — release card with a version badge ── */
function MotifProduct({ id }) {
  return (
    <g>
      <rect x="86" y="34" width="148" height="84" rx="14" fill={`url(#${id}-face)`}
        stroke="#F97316" strokeOpacity="0.28" strokeWidth="1.6" />
      <rect x="102" y="52" width="62" height="8" rx="4" fill="#F97316" />
      <rect x="102" y="70" width="106" height="6" rx="3" fill="#FED7AA" />
      <rect x="102" y="84" width="84" height="6" rx="3" fill="#FED7AA" />
      <rect x="102" y="98" width="46" height="6" rx="3" fill="#FDBA74" />
      <circle cx="228" cy="40" r="19" fill="#111827" />
      <path d="M 228 32 v 16 M 220 40 h 16" stroke="#FB923C" strokeWidth="3"
        strokeLinecap="round" />
      <circle cx="92" cy="112" r="7" fill={`url(#${id}-up)`} />
    </g>
  );
}

/* ── Case Studies — outcome chart climbing ── */
function MotifCase({ id }) {
  const bars = [26, 40, 34, 58, 74];
  return (
    <g>
      <line x1="88" y1="122" x2="238" y2="122" stroke="#F97316"
        strokeOpacity="0.3" strokeWidth="1.6" />
      {bars.map((h, i) => (
        <rect key={i} x={98 + i * 28} y={122 - h} width="17" height={h} rx="5"
          fill={i === bars.length - 1 ? `url(#${id}-up)` : '#FED7AA'} />
      ))}
      <path d="M 100 74 L 128 62 L 156 68 L 184 44 L 212 30"
        stroke="#F97316" strokeWidth="2.6" fill="none"
        strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="212" cy="30" r="7" fill="#111827" />
      <circle cx="212" cy="30" r="13" fill="#F97316" fillOpacity="0.16" />
    </g>
  );
}

/* ── Compliance — shield over an audited record ── */
function MotifCompliance({ id }) {
  return (
    <g>
      <rect x="92" y="36" width="88" height="82" rx="11" fill={`url(#${id}-face)`}
        stroke="#F97316" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="106" y="54" width="46" height="6" rx="3" fill="#FED7AA" />
      <rect x="106" y="68" width="58" height="6" rx="3" fill="#FED7AA" />
      <rect x="106" y="82" width="38" height="6" rx="3" fill="#FDBA74" />
      <rect x="106" y="96" width="50" height="6" rx="3" fill="#FED7AA" />
      <path d="M 206 30 L 246 44 v 30 c 0 22 -18 34 -40 42 c -22 -8 -40 -20 -40 -42 V 44 Z"
        fill={`url(#${id}-up)`} />
      <path d="M 190 74 l 11 11 l 22 -24" stroke="#FFFFFF" strokeWidth="4.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/* ── Engineering — service graph with one hot path ── */
function MotifEngineering({ id }) {
  const nodes = [
    [104, 42], [168, 30], [232, 54], [120, 108], [196, 110],
  ];
  const edges = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2], [1, 4]];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#F97316" strokeOpacity={i === 3 || i === 4 ? 0.75 : 0.24}
          strokeWidth={i === 3 || i === 4 ? 2.6 : 1.6} strokeLinecap="round" />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="16" fill="#FFFFFF"
            stroke="#F97316" strokeOpacity="0.3" strokeWidth="1.6" />
          <circle cx={cx} cy={cy} r="7"
            fill={i === 3 ? '#111827' : `url(#${id}-up)`} />
        </g>
      ))}
    </g>
  );
}

const MOTIFS = {
  'AI & Voice': MotifVoice,
  'Industry Insights': MotifIndustry,
  'Product Updates': MotifProduct,
  'Case Studies': MotifCase,
  'Compliance': MotifCompliance,
  'Engineering': MotifEngineering,
};

/* ── Card thumbnail ── */
export default function BlogThumb({ category, className = '' }) {
  const id = React.useMemo(nextId, []);
  const Motif = MOTIFS[category] || MotifVoice;
  return (
    <svg
      className={`blog-thumb ${className}`.trim()}
      viewBox="0 0 320 150"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Backdrop id={id} w={320} h={150} />
      <Motif id={id} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED SCENE — "signal to insight".

   Three translucent isometric planes stacked in depth, each holding one
   stage of how a field report actually gets made: raw call signal at the
   bottom, transcribed lines in the middle, the finished chart on top.
   Data risers climb the corners between them.

   Chosen over another plinth-with-floating-panels because that device is
   already doing duty on the Industries page — this reads as editorial
   analysis rather than product UI, and nothing else on the site uses
   stacked glass planes.
═══════════════════════════════════════════════════════════════ */
export function BlogFeaturedArt() {
  const id = React.useMemo(nextId, []);
  const K = 34, M = 19.6;          // iso steps
  const E = 2;                      // plane half-extent, in grid units
  const LEVELS = [300, 212, 124];   // screen-y of each plane centre

  const pt = (x, y, cy) => `${(210 + (x - y) * K).toFixed(1)},${(cy + (x + y) * M).toFixed(1)}`;
  const quad = (x, y, w, d, cy) =>
    `${pt(x, y, cy)} ${pt(x + w, y, cy)} ${pt(x + w, y + d, cy)} ${pt(x, y + d, cy)}`;

  /* a prism standing on a plane */
  const Riser = ({ x, y, w, d, h, cy, hot }) => (
    <g>
      <polygon points={`${pt(x, y + d, cy - h)} ${pt(x + w, y + d, cy - h)} ${pt(x + w, y + d, cy)} ${pt(x, y + d, cy)}`}
        fill={hot ? '#FB923C' : '#FED7AA'} />
      <polygon points={`${pt(x + w, y, cy - h)} ${pt(x + w, y + d, cy - h)} ${pt(x + w, y + d, cy)} ${pt(x + w, y, cy)}`}
        fill={hot ? '#F97316' : '#FDBA74'} />
      <polygon points={quad(x, y, w, d, cy - h)} fill={hot ? '#FDBA74' : '#FFEDD5'} />
    </g>
  );

  /* corner risers connecting the planes */
  const corners = [
    [210 - E * 2 * K, LEVELS[0]],                    // left
    [210 + E * 2 * K, LEVELS[0]],                    // right
    [210, LEVELS[0] + E * 2 * M],                    // front
  ];

  return (
    <svg
      className="blog-feature-art"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-up`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
        <filter id={`${id}-lift`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="7" stdDeviation="9"
            floodColor="#9A3412" floodOpacity="0.15" />
        </filter>
        <radialGradient id={`${id}-pool`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-sh`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="9" stdDeviation="12"
            floodColor="#9A3412" floodOpacity="0.13" />
        </filter>
      </defs>

      <ellipse cx="210" cy="318" rx="190" ry="86" fill={`url(#${id}-pool)`} />

      {/* corner risers — drawn behind the planes */}
      {corners.map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={cx} y2={cy - (LEVELS[0] - LEVELS[2])}
            stroke="#F97316" strokeOpacity="0.28" strokeWidth="1.6"
            strokeDasharray="3 6" />
          <circle className={`bfa-spark bfa-s${i + 1}`} cx={cx} cy={cy} r="3.4"
            fill="#F97316" />
        </g>
      ))}

      {/* ── Plane 1 (bottom) — raw call signal ── */}
      <g className="bfa-plane bfa-p1" filter={`url(#${id}-lift)`}>
        <polygon points={quad(-E, -E, E * 2, E * 2, LEVELS[0])}
          fill={`url(#${id}-glass)`} />
        <polygon points={quad(-E, -E, E * 2, E * 2, LEVELS[0])}
          fill="none" stroke="#F97316" strokeOpacity="0.5" strokeWidth="1.7" />
        <path
          d={[-1.5, -1.1, -0.7, -0.3, 0.1, 0.5, 0.9, 1.3]
            .map((x, i) => {
              const y = [-0.45, 0.35, -0.65, 0.5, -0.25, 0.55, -0.55, 0.3][i];
              return `${i ? 'L' : 'M'} ${pt(x, y, LEVELS[0])}`;
            }).join(' ')}
          fill="none" stroke="#F97316" strokeOpacity="0.85" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ── Plane 2 (middle) — transcribed lines ── */}
      <g className="bfa-plane bfa-p2" filter={`url(#${id}-lift)`}>
        <polygon points={quad(-E, -E, E * 2, E * 2, LEVELS[1])}
          fill={`url(#${id}-glass)`} />
        <polygon points={quad(-E, -E, E * 2, E * 2, LEVELS[1])}
          fill="none" stroke="#F97316" strokeOpacity="0.5" strokeWidth="1.7" />
        {[1.9, 1.35, 1.65, 0.95].map((w, i) => (
          <polygon key={i}
            points={quad(-1.3, -0.85 + i * 0.46, w, 0.17, LEVELS[1])}
            fill={i === 0 ? '#F97316' : '#FDBA74'}
            fillOpacity={i === 0 ? 0.85 : 0.6} />
        ))}
      </g>

      {/* ── Plane 3 (top) — the finished chart ── */}
      <g className="bfa-plane bfa-p3" filter={`url(#${id}-sh)`}>
        <polygon points={quad(-E, -E, E * 2, E * 2, LEVELS[2])}
          fill={`url(#${id}-glass)`} />
        <polygon points={quad(-E, -E, E * 2, E * 2, LEVELS[2])}
          fill="none" stroke="#F97316" strokeOpacity="0.58" strokeWidth="1.7" />
        {[16, 30, 23, 44, 60].map((h, i) => (
          <Riser key={i} x={-1.2 + i * 0.52} y={-0.3} w={0.34} d={0.5}
            h={h} cy={LEVELS[2]} hot={i === 4} />
        ))}
      </g>
    </svg>
  );
}
