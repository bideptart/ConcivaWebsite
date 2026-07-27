import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ParticleCard, GlobalSpotlight, useMobileDetection, DEFAULT_GLOW_COLOR } from './MagicBentoEffects';

const ROWS = [
  { feature: 'Included minutes',   starter: '250 min',              growth: '800 min',                   scale: '3,000 min'                       },
  { feature: 'Effective rate',     starter: '$0.13/min',            growth: '$0.12/min',                 scale: '$0.11/min'                       },
  { feature: 'AI voice agents',    starter: '2',                    growth: '10',                        scale: 'Unlimited'                       },
  { feature: 'Voice stack',        starter: 'Standard',             growth: 'Standard + premium',        scale: 'Realtime + premium'              },
  { feature: 'Inbound calling',    starter: true,                   growth: true,                        scale: true                              },
  { feature: 'Per-second billing', starter: true,                   growth: true,                        scale: true                              },
  { feature: 'Call recording',     starter: true,                   growth: true,                        scale: true                              },
  { feature: 'Transcription',      starter: true,                   growth: true,                        scale: true                              },
  { feature: 'Support',            starter: 'Email',                growth: 'Priority',                  scale: 'Dedicated manager + SLA'         },
  { feature: 'SLA guarantee',      starter: false,                  growth: false,                       scale: true                              },
];

function Cell({ value, featured, rowHovered }) {
  if (value === true) {
    return (
      <motion.span
        className="cmp-check"
        aria-label="Included"
        animate={{ scale: rowHovered ? 1.18 : 1 }}
        transition={{ type: 'spring', stiffness: 420, damping: 22 }}
      >
        <Check size={14} strokeWidth={2.5} />
      </motion.span>
    );
  }
  if (value === false) return <span className="cmp-dash" aria-label="Not included">&mdash;</span>;
  return <span className={featured ? 'cmp-highlight' : ''}>{value}</span>;
}

export default function PricingComparison() {
  const [hovered, setHovered] = useState(null);
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();

  return (
    <section className="cmp-section mb-section" aria-labelledby="cmp-heading">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-badge">· Comparison</p>
        <h2 id="cmp-heading" className="section-title">
          Compare plans <span className="gradient-text">side by side.</span>
        </h2>
        <p className="section-subtitle">
          Included minutes, effective rate, and support level — all in one view.
        </p>
      </motion.div>

      {/* Ambient cursor spotlight, scoped to this section via .mb-section above */}
      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={isMobile}
        enabled
        spotlightRadius={320}
        glowColor={DEFAULT_GLOW_COLOR}
      />

      <div ref={gridRef}>
        <ParticleCard
          className="cmp-wrap mb-card mb-card--border-glow"
          disableAnimations={isMobile}
          particleCount={8}
          glowColor={DEFAULT_GLOW_COLOR}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <table className="cmp-table">
              <thead>
                <tr>
                  <th className="cmp-th cmp-th--feature">Feature</th>
                  <th className="cmp-th">Starter</th>
                  <th className="cmp-th cmp-th--featured">
                    Growth <span className="cmp-popular">POPULAR</span>
                  </th>
                  <th className="cmp-th">Scale</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => {
                  const isHovered = hovered === i;
                  return (
                    <motion.tr
                      key={row.feature}
                      className={`cmp-row${isHovered ? ' cmp-row--hovered' : ''}`}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      animate={{ x: isHovered ? 3 : 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <td className={`cmp-td cmp-td--feature${isHovered ? ' cmp-td--feature-hovered' : ''}`}>
                        {row.feature}
                      </td>
                      <td className="cmp-td"><Cell value={row.starter} rowHovered={isHovered} /></td>
                      <td className="cmp-td cmp-td--featured"><Cell value={row.growth} featured rowHovered={isHovered} /></td>
                      <td className="cmp-td"><Cell value={row.scale} rowHovered={isHovered} /></td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        </ParticleCard>
      </div>
    </section>
  );
}