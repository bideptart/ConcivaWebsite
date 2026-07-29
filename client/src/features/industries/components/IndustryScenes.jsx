import React from 'react';

/* ═══════════════════════════════════════════════════════════════
   ISOMETRIC SCENE KIT — original artwork for Conciva AI.

   Six distinct environments, one per vertical. Nothing here is traced;
   the only thing borrowed from premium SaaS illustration is the *idea*
   of a raised isometric stage with a floating UI panel over it.

   Projection (true 2:1-ish isometric, 30° axes):
     screenX = OX + (x - y) · S · cos30°
     screenY = OY + (x + y) · S · sin30° - z · S

   Two useful consequences, both used below:
     · A ground-plane circle projects to an axis-aligned ellipse with
       rx/ry = √3, so pools and discs are plain <ellipse> elements.
     · Each visible face is an affine shear of a flat rectangle, so
       artwork (screens, doors, charts) is drawn in ordinary 2-D
       coordinates and pushed onto the face with a matrix().

   Palette is strictly brand: #F97316 · #FB923C · #FFEDD5 · #FFF7ED,
   with #111827 / #1F2937 reserved for screens and tyres. No green.
═══════════════════════════════════════════════════════════════ */

const S = 29;              // one grid unit, in px
const OX = 180;            // stage origin on the 460×460 canvas
const OY = 268;
const KX = S * 0.8660254;  // horizontal step per unit
const KY = S * 0.5;        // vertical step per unit

const p = (x, y, z = 0) => [
  OX + (x - y) * KX,
  OY + (x + y) * KY - z * S,
];
const pt = (x, y, z = 0) => p(x, y, z).map(n => n.toFixed(1)).join(',');

/* Surface tones — each object gets a top / left / right triple so the
   implied light source (upper-left) stays consistent scene to scene. */
const TONE = {
  paper: { t: '#FFFFFF', l: '#FFF7ED', r: '#FFEDD5' },
  sand:  { t: '#FFF7ED', l: '#FFEDD5', r: '#FED7AA' },
  peach: { t: '#FFEDD5', l: '#FED7AA', r: '#FDBA74' },
  amber: { t: '#FED7AA', l: '#FDBA74', r: '#F59E5A' },
  brand: { t: '#FDBA74', l: '#FB923C', r: '#F97316' },
  ink:   { t: '#374151', l: '#1F2937', r: '#111827' },
};

/* ── A rectangular prism: three visible faces ── */
function Box({ x, y, z = 0, w = 1, d = 1, h = 1, tone = 'sand', opacity = 1 }) {
  const c = TONE[tone] || TONE.sand;
  return (
    <g opacity={opacity}>
      <polygon
        points={`${pt(x, y + d, z + h)} ${pt(x + w, y + d, z + h)} ${pt(x + w, y + d, z)} ${pt(x, y + d, z)}`}
        fill={c.l}
      />
      <polygon
        points={`${pt(x + w, y, z + h)} ${pt(x + w, y + d, z + h)} ${pt(x + w, y + d, z)} ${pt(x + w, y, z)}`}
        fill={c.r}
      />
      <polygon
        points={`${pt(x, y, z + h)} ${pt(x + w, y, z + h)} ${pt(x + w, y + d, z + h)} ${pt(x, y + d, z + h)}`}
        fill={c.t}
      />
    </g>
  );
}

/* ── A cylinder: body + elliptical cap ── */
function Cyl({ x, y, z = 0, r = 0.5, h = 1, tone = 'sand' }) {
  const c = TONE[tone] || TONE.sand;
  const [cx, topY] = p(x, y, z + h);
  const [, botY] = p(x, y, z);
  const rx = r * S * 1.2247;
  const ry = r * S * 0.7071;
  return (
    <g>
      <path
        d={`M ${cx - rx} ${topY} L ${cx - rx} ${botY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${botY} L ${cx + rx} ${topY} Z`}
        fill={c.r}
      />
      <ellipse cx={cx} cy={topY} rx={rx} ry={ry} fill={c.t} />
    </g>
  );
}

/* ── Ground-plane disc (shadow / glow pool) ── */
function Disc({ x, y, z = 0, r = 1, fill = '#9A3412', opacity = 0.12 }) {
  const [cx, cy] = p(x, y, z);
  return (
    <ellipse cx={cx} cy={cy} rx={r * S * 1.2247} ry={r * S * 0.7071}
      fill={fill} opacity={opacity} />
  );
}

/* ── Face transforms: draw flat art, land it on a face ──
   Local units are px. Width/height of the drawable area are
   (w or d) * S  ×  h * S. */
const faceL = (x, y, z, w, d, h) => {
  const [ox, oy] = p(x, y + d, z + h);
  return `matrix(0.8660254, 0.5, 0, 1, ${ox}, ${oy})`;
};
const faceR = (x, y, z, w, d, h) => {
  const [ox, oy] = p(x + w, y + d, z + h);
  return `matrix(0.8660254, -0.5, 0, 1, ${ox}, ${oy})`;
};

/* ── The shared raised stage every scene sits on ── */
function Stage() {
  const E = 2.7;
  const TH = 0.48;
  return (
    <g className="ivs-stage">
      <polygon
        points={`${pt(-E, E, 0)} ${pt(E, E, 0)} ${pt(E, E, -TH)} ${pt(-E, E, -TH)}`}
        fill="#FDBA74"
      />
      <polygon
        points={`${pt(E, -E, 0)} ${pt(E, E, 0)} ${pt(E, E, -TH)} ${pt(E, -E, -TH)}`}
        fill="#F59E5A"
      />
      <polygon
        points={`${pt(-E, -E)} ${pt(E, -E)} ${pt(E, E)} ${pt(-E, E)}`}
        fill="#FFF3E4"
      />
      <polygon
        points={`${pt(-E, -E)} ${pt(E, -E)} ${pt(E, E)} ${pt(-E, E)}`}
        fill="none" stroke="#F97316" strokeOpacity="0.2" strokeWidth="1.4"
      />
      <ellipse {...(() => { const [cx, cy] = p(0, 0); return { cx, cy }; })()}
        rx={2.05 * S * 1.2247} ry={2.05 * S * 0.7071}
        fill="none" stroke="#F97316" strokeOpacity="0.14"
        strokeWidth="1.4" strokeDasharray="4 8" />
      <ellipse className="ivs-ripple"
        {...(() => { const [cx, cy] = p(0, 0); return { cx, cy }; })()}
        rx={1.45 * S * 1.2247} ry={1.45 * S * 0.7071}
        fill="none" stroke="#F97316" strokeOpacity="0.18"
        strokeWidth="1.4" strokeDasharray="3 7" />
    </g>
  );
}

/* Small reusable bits ------------------------------------------------ */

/* Screen glyph helper: a lit panel on a left-facing surface */
function ScreenL({ x, y, z, w, d, h, children }) {
  return <g transform={faceL(x, y, z, w, d, h)}>{children}</g>;
}
function ScreenR({ x, y, z, w, d, h, children }) {
  return <g transform={faceR(x, y, z, w, d, h)}>{children}</g>;
}

/* A little potted plant — softens the harder scenes */
function Plant({ x, y, z = 0 }) {
  const [lx, ly] = p(x, y, z + 0.42);
  return (
    <g>
      <Cyl x={x} y={y} z={z} r={0.3} h={0.42} tone="peach" />
      <path d={`M ${lx} ${ly} q -12 -14 -3 -25 q 9 7 3 25 Z`} fill="#FB923C" opacity="0.85" />
      <path d={`M ${lx} ${ly} q 13 -12 6 -24 q -11 6 -6 24 Z`} fill="#F97316" opacity="0.7" />
      <path d={`M ${lx} ${ly} q -2 -18 2 -27 q 6 12 -2 27 Z`} fill="#FDBA74" />
    </g>
  );
}

/* Animated voice bars, drawn on a left-facing surface */
function BarsL({ x, y, z, w, d, h, bars, bw = 4, gap = 3, cy = null, prefix }) {
  const midY = cy == null ? (h * S) / 2 : cy;
  return (
    <ScreenL x={x} y={y} z={z} w={w} d={d} h={h}>
      {bars.map((bh, i) => (
        <rect
          key={i}
          className={`ivs-bar ivs-b${(i % 6) + 1}`}
          x={5 + i * (bw + gap)}
          y={midY - bh / 2}
          width={bw}
          height={bh}
          rx={bw / 2}
          fill="#F97316"
        />
      ))}
    </ScreenL>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE 1 — HEALTHCARE & CLINICS
   Reception counter, cross totem, vitals monitor, waiting stool.
═══════════════════════════════════════════════════════════════ */
function SceneHealthcare() {
  return (
    <g>
      <Disc x={0.1} y={0.1} r={2.0} opacity={0.1} />

      {/* cross totem */}
      <Box x={0.95} y={-2.15} w={0.62} d={0.62} h={2.25} tone="paper" />
      <ScreenL x={0.95} y={-2.15} z={0} w={0.62} d={0.62} h={2.25}>
        <rect x="4" y="12" width="8" height="22" rx="2" fill="#F97316" />
        <rect x="-1" y="19" width="18" height="8" rx="2" fill="#F97316" />
      </ScreenL>

      {/* reception counter */}
      <Box x={-2.1} y={-1.5} w={2.7} d={0.85} h={1.15} tone="sand" />
      <Box x={-2.25} y={-1.62} w={3.0} d={1.1} h={0.14} z={1.15} tone="paper" />
      <ScreenL x={-2.1} y={-1.5} z={0} w={2.7} d={0.85} h={1.15}>
        <rect x="8" y="10" width="50" height="3" rx="1.5" fill="#F97316" opacity="0.28" />
        <rect x="8" y="17" width="34" height="3" rx="1.5" fill="#F97316" opacity="0.18" />
      </ScreenL>

      {/* vitals monitor on the counter */}
      <Box x={-1.5} y={-1.2} w={1.15} d={0.16} h={0.8} z={1.29} tone="ink" />
      <ScreenL x={-1.5} y={-1.2} z={1.29} w={1.15} d={0.16} h={0.8}>
        <rect x="2" y="2" width="25" height="16" rx="2.5" fill="#1F2937" />
        <path d="M 4 11 l 4 0 l 2 -5 l 3 9 l 2.5 -4 l 2.5 0 l 2 -2 l 4 0"
          stroke="#FB923C" strokeWidth="1.4" fill="none"
          strokeLinecap="round" strokeLinejoin="round" />
      </ScreenL>

      {/* waiting stool + plant */}
      <Cyl x={-0.55} y={1.5} r={0.42} h={0.5} tone="peach" />
      <Plant x={1.95} y={1.55} />

      {/* clipboard leaning on the counter */}
      <Box x={0.25} y={-0.35} w={0.5} d={0.12} h={0.66} z={1.29} tone="paper" />
      <ScreenL x={0.25} y={-0.35} z={1.29} w={0.5} d={0.12} h={0.66}>
        <rect x="2" y="4" width="9" height="2" rx="1" fill="#FDBA74" />
        <rect x="2" y="9" width="7" height="2" rx="1" fill="#FED7AA" />
      </ScreenL>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE 2 — REAL ESTATE & PROPERTY
   Gabled house with a lit window, sale-board, hedge.
═══════════════════════════════════════════════════════════════ */
function SceneRealEstate() {
  const eave = 1.62;
  const ridge = 2.5;
  const x0 = -1.55, x1 = 1.15, yB = -1.5, yF = 1.0, yM = -0.25;
  return (
    <g>
      <Disc x={-0.2} y={-0.2} r={2.0} opacity={0.1} />

      {/* body */}
      <Box x={-1.45} y={-1.4} w={2.5} d={2.3} h={1.62} tone="paper" />

      {/* door + window on the front-left elevation */}
      <ScreenL x={-1.45} y={-1.4} z={0} w={2.5} d={2.3} h={1.62}>
        <rect x="9" y="14" width="15" height="26" rx="2" fill="#FB923C" />
        <circle cx="21" cy="28" r="1.4" fill="#FFF7ED" />
        <rect x="33" y="12" width="21" height="16" rx="2.5" fill="#FFEDD5"
          stroke="#F97316" strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="43.5" y1="12" x2="43.5" y2="28" stroke="#F97316"
          strokeOpacity="0.3" strokeWidth="1.2" />
      </ScreenL>

      {/* roof — front-left plane + gable end */}
      <polygon
        points={`${pt(x0, yF, eave)} ${pt(x1, yF, eave)} ${pt(x1, yM, ridge)} ${pt(x0, yM, ridge)}`}
        fill="#FB923C"
      />
      <polygon
        points={`${pt(x1, yB, eave)} ${pt(x1, yF, eave)} ${pt(x1, yM, ridge)}`}
        fill="#F97316"
      />
      <polygon
        points={`${pt(x0, yB, eave)} ${pt(x1, yB, eave)} ${pt(x1, yM, ridge)} ${pt(x0, yM, ridge)}`}
        fill="#FDBA74" opacity="0.55"
      />

      {/* sale board */}
      <Box x={1.75} y={0.9} w={0.12} d={0.12} h={1.15} tone="peach" />
      <Box x={1.35} y={0.86} w={0.95} d={0.1} h={0.6} z={0.72} tone="paper" />
      <ScreenL x={1.35} y={0.86} z={0.72} w={0.95} d={0.1} h={0.6}>
        <rect x="4" y="4" width="16" height="3" rx="1.5" fill="#F97316" />
        <rect x="4" y="10" width="11" height="2.5" rx="1.25" fill="#FDBA74" />
      </ScreenL>

      {/* hedges */}
      <Box x={-2.25} y={0.95} w={0.85} d={0.55} h={0.42} tone="amber" />
      <Cyl x={-0.35} y={1.85} r={0.3} h={0.38} tone="peach" />
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE 3 — FINANCE & BFSI
   Teller desk with card terminal, coin stacks, secure vault block.
═══════════════════════════════════════════════════════════════ */
function SceneFinance() {
  return (
    <g>
      <Disc x={0} y={0} r={2.0} opacity={0.1} />

      {/* vault block */}
      <Box x={0.75} y={-2.2} w={1.5} d={1.5} h={1.9} tone="sand" />
      <ScreenL x={0.75} y={-2.2} z={0} w={1.5} d={1.5} h={1.9}>
        <circle cx="19" cy="24" r="11" fill="none" stroke="#F97316"
          strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="19" cy="24" r="4.5" fill="#FB923C" />
        <rect x="18" y="8" width="2" height="7" rx="1" fill="#F97316" opacity="0.5" />
        <rect x="18" y="33" width="2" height="7" rx="1" fill="#F97316" opacity="0.5" />
      </ScreenL>

      {/* teller desk */}
      <Box x={-2.2} y={-0.9} w={2.6} d={1.1} h={1.0} tone="paper" />
      <Box x={-2.32} y={-1.02} w={2.85} d={1.35} h={0.13} z={1.0} tone="peach" />

      {/* card terminal */}
      <Box x={-1.7} y={-0.55} w={0.72} d={0.5} h={0.5} z={1.13} tone="ink" />
      <ScreenL x={-1.7} y={-0.55} z={1.13} w={0.72} d={0.5} h={0.5}>
        <rect x="2.5" y="2" width="13" height="8" rx="1.5" fill="#374151" />
        <rect x="4" y="4.5" width="8" height="1.6" rx="0.8" fill="#FB923C" />
      </ScreenL>

      {/* the card itself, floating out of the terminal */}
      <g className="ivs-lift">
        <Box x={-1.15} y={-0.5} w={0.62} d={0.42} h={0.05} z={1.85} tone="brand" />
      </g>

      {/* coin stacks */}
      <Cyl x={1.05} y={0.95} r={0.4} h={0.62} tone="brand" />
      <Cyl x={1.05} y={0.95} z={0.62} r={0.4} h={0.42} tone="amber" />
      <Cyl x={1.9} y={0.45} r={0.4} h={0.38} tone="amber" />

      {/* growth bars */}
      <Box x={-1.9} y={1.35} w={0.32} d={0.32} h={0.45} tone="peach" />
      <Box x={-1.4} y={1.35} w={0.32} d={0.32} h={0.8} tone="amber" />
      <Box x={-0.9} y={1.35} w={0.32} d={0.32} h={1.15} tone="brand" />
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE 4 — E-COMMERCE & RETAIL
   Conveyor with taped parcels, trolley, verified label.
═══════════════════════════════════════════════════════════════ */
function SceneEcommerce() {
  const tape = (x, y, z, w, d) => (
    <polygon
      points={`${pt(x + w / 2 - 0.07, y, z)} ${pt(x + w / 2 + 0.07, y, z)} ${pt(x + w / 2 + 0.07, y + d, z)} ${pt(x + w / 2 - 0.07, y + d, z)}`}
      fill="#F97316" opacity="0.6"
    />
  );
  return (
    <g>
      <Disc x={0} y={0} r={2.0} opacity={0.1} />

      {/* conveyor bed */}
      <Box x={-2.35} y={-1.15} w={4.3} d={1.25} h={0.34} tone="peach" />
      <ScreenL x={-2.35} y={-1.15} z={0} w={4.3} d={1.25} h={0.34}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <rect key={i} x={6 + i * 13} y="2" width="4" height="5" rx="2"
            fill="#9A3412" opacity="0.22" />
        ))}
      </ScreenL>

      {/* parcels */}
      <Box x={-1.95} y={-0.95} w={1.0} d={0.95} h={0.95} z={0.34} tone="sand" />
      {tape(-1.95, -0.95, 1.29, 1.0, 0.95)}
      <Box x={-1.75} y={-0.75} w={0.62} d={0.6} h={0.55} z={1.29} tone="paper" />

      <Box x={-0.55} y={-0.85} w={0.8} d={0.78} h={0.78} z={0.34} tone="paper" />
      {tape(-0.55, -0.85, 1.12, 0.8, 0.78)}

      <Box x={0.62} y={-0.9} w={0.9} d={0.85} h={0.62} z={0.34} tone="sand" />
      {tape(0.62, -0.9, 0.96, 0.9, 0.85)}

      {/* verified shipping label floating above */}
      <g className="ivs-lift">
        <Box x={0.7} y={-0.8} w={0.7} d={0.5} h={0.05} z={1.5} tone="brand" />
      </g>

      {/* trolley */}
      <Box x={0.95} y={0.95} w={1.15} d={0.9} h={0.62} z={0.28} tone="paper" />
      <ScreenL x={0.95} y={0.95} z={0.28} w={1.15} d={0.9} h={0.62}>
        <rect x="3" y="3" width="23" height="10" rx="2" fill="none"
          stroke="#F97316" strokeOpacity="0.5" strokeWidth="1.6" />
      </ScreenL>
      <Cyl x={1.1} y={1.05} r={0.13} h={0.28} tone="ink" />
      <Cyl x={1.85} y={1.6} r={0.13} h={0.28} tone="ink" />

      {/* small stacked returns box */}
      <Box x={-2.0} y={1.2} w={0.68} d={0.62} h={0.5} tone="amber" />
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE 5 — EDUCATION & EDTECH
   Presentation board, study desk with laptop, book stack, cap.
═══════════════════════════════════════════════════════════════ */
function SceneEducation() {
  return (
    <g>
      <Disc x={0} y={0} r={2.0} opacity={0.1} />

      {/* board */}
      <Box x={-2.15} y={-2.15} w={3.5} d={0.16} h={2.05} tone="paper" />
      <ScreenL x={-2.15} y={-2.15} z={0} w={3.5} d={0.16} h={2.05}>
        <rect x="6" y="8" width="76" height="36" rx="3" fill="#FFF7ED"
          stroke="#F97316" strokeOpacity="0.25" strokeWidth="1.2" />
        <rect x="13" y="30" width="9" height="10" rx="1.5" fill="#FDBA74" />
        <rect x="26" y="24" width="9" height="16" rx="1.5" fill="#FB923C" />
        <rect x="39" y="17" width="9" height="23" rx="1.5" fill="#F97316" />
        <path d="M 55 34 l 9 -9 l 6 5 l 8 -12" stroke="#F97316" strokeWidth="1.8"
          fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </ScreenL>
      {/* desk */}
      <Box x={-1.45} y={0.0} w={2.4} d={1.15} h={0.9} tone="sand" />
      <Box x={-1.58} y={-0.12} w={2.65} d={1.4} h={0.12} z={0.9} tone="paper" />

      {/* laptop: base + tilted lid */}
      <Box x={-1.05} y={0.25} w={0.95} d={0.66} h={0.07} z={1.02} tone="ink" />
      <Box x={-1.05} y={0.22} w={0.95} d={0.08} h={0.6} z={1.09} tone="ink" />
      <ScreenL x={-1.05} y={0.22} z={1.09} w={0.95} d={0.08} h={0.6}>
        <rect x="2" y="2" width="20" height="11" rx="1.5" fill="#1F2937" />
        <rect x="4" y="4.5" width="11" height="1.6" rx="0.8" fill="#FB923C" />
        <rect x="4" y="8" width="7" height="1.6" rx="0.8" fill="#F97316" opacity="0.6" />
      </ScreenL>

      {/* book stack */}
      <Box x={0.35} y={0.35} w={0.78} d={0.58} h={0.15} z={1.02} tone="brand" />
      <Box x={0.3} y={0.42} w={0.78} d={0.58} h={0.14} z={1.17} tone="amber" />
      <Box x={0.4} y={0.3} w={0.78} d={0.58} h={0.13} z={1.31} tone="peach" />

      {/* graduation cap on a plinth */}
      <Cyl x={1.85} y={1.15} r={0.42} h={0.6} tone="sand" />
      <polygon
        points={`${pt(1.4, 0.7, 0.72)} ${pt(2.3, 0.7, 0.72)} ${pt(2.3, 1.6, 0.72)} ${pt(1.4, 1.6, 0.72)}`}
        fill="#F97316"
      />
      <Box x={1.68} y={0.98} w={0.34} d={0.34} h={0.16} z={0.6} tone="brand" />

      <Plant x={-2.0} y={1.5} />
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE 6 — LOGISTICS & HOSPITALITY
   Delivery van, palletised crates, concierge bell.
═══════════════════════════════════════════════════════════════ */
function SceneLogistics() {
  return (
    <g>
      <Disc x={0} y={0} r={2.0} opacity={0.1} />

      {/* route line scored into the stage */}
      <path
        className="ivs-route"
        d={`M ${pt(-2.3, 2.0)} L ${pt(0.35, 2.0)} L ${pt(0.35, 0.2)} L ${pt(2.3, 0.2)}`}
        fill="none" stroke="#F97316" strokeOpacity="0.35" strokeWidth="2"
        strokeDasharray="4 6" strokeLinecap="round"
      />

      {/* van — cargo body then cab */}
      <Box x={-2.1} y={-1.55} w={1.85} d={1.35} h={1.35} tone="paper" />
      <ScreenL x={-2.1} y={-1.55} z={0} w={1.85} d={1.35} h={1.35}>
        <rect x="6" y="8" width="28" height="18" rx="2.5" fill="none"
          stroke="#F97316" strokeOpacity="0.45" strokeWidth="1.6" />
        <path d="M 13 17 l 4 4 l 8 -9" stroke="#F97316" strokeWidth="2"
          fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </ScreenL>
      <Box x={-0.25} y={-1.55} w={0.85} d={1.35} h={0.95} tone="brand" />
      <ScreenR x={-0.25} y={-1.55} z={0} w={0.85} d={1.35} h={0.95}>
        <rect x="5" y="4" width="22" height="10" rx="2" fill="#FFEDD5" opacity="0.85" />
      </ScreenR>
      <Cyl x={-1.6} y={-0.3} r={0.2} h={0.22} tone="ink" />
      <Cyl x={0.05} y={-0.3} r={0.2} h={0.22} tone="ink" />

      {/* pallet + crates */}
      <Box x={0.95} y={0.85} w={1.25} d={1.1} h={0.16} tone="amber" />
      <Box x={1.05} y={0.95} w={0.55} d={0.5} h={0.55} z={0.16} tone="sand" />
      <Box x={1.68} y={1.0} w={0.45} d={0.42} h={0.42} z={0.16} tone="peach" />
      <Box x={1.05} y={0.95} w={0.55} d={0.5} h={0.4} z={0.71} tone="paper" />

      {/* concierge bell */}
      <Cyl x={-1.85} y={1.55} r={0.42} h={0.16} tone="sand" />
      <path
        {...(() => {
          const [cx, cy] = p(-1.85, 1.55, 0.16);
          return { d: `M ${cx - 15} ${cy} a 15 15 0 0 1 30 0 Z` };
        })()}
        fill="#FB923C"
      />
      <circle
        {...(() => {
          const [cx, cy] = p(-1.85, 1.55, 0.16);
          return { cx, cy: cy - 17 };
        })()}
        r="3" fill="#F97316"
      />
    </g>
  );
}

/* ── Registry ── */
const SCENES = {
  'healthcare': SceneHealthcare,
  'real-estate': SceneRealEstate,
  'finance-banking': SceneFinance,
  'ecommerce-retail': SceneEcommerce,
  'education-edtech': SceneEducation,
  'logistics-hospitality': SceneLogistics,
};

/* Per-vertical call snippet — the panel copy changes with the scene */
export const SCENE_COPY = {
  'healthcare': { caller: 'Can I see Dr. Rao?', agent: 'Booked — Tue, 11 AM' },
  'real-estate': { caller: 'Is the 3BHK free?', agent: 'Visit set — Thu, 3 PM' },
  'finance-banking': { caller: 'When is my EMI due?', agent: 'Paid — receipt sent' },
  'ecommerce-retail': { caller: 'Where is my order?', agent: 'Out for delivery' },
  'education-edtech': { caller: 'What are the fees?', agent: 'Counsellor booked' },
  'logistics-hospitality': { caller: 'A room for tonight?', agent: 'Deluxe — confirmed' },
};

export { Stage };

export default function IndustryScene({ id }) {
  const Scene = SCENES[id] || SceneHealthcare;
  return (
    <g className="ivs-scene">
      <Stage />
      <Scene />
    </g>
  );
}
