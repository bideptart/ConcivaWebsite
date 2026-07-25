import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const ROWS = [
  { feature: 'Included minutes',   starter: '250 min',              growth: '800 min',                   scale: '3,000 min'                    },
  { feature: 'Effective rate',     starter: '$0.13/min',            growth: '$0.12/min',                 scale: '$0.11/min'                    },
  { feature: 'AI voice agents',    starter: '2',                    growth: '10',                        scale: 'Unlimited'                    },
  { feature: 'Voice stack',        starter: 'Standard voice stack', growth: 'Standard + premium voices', scale: 'Realtime + premium voices'    },
  { feature: 'Inbound calling',    starter: true,                   growth: true,                        scale: true                           },
  { feature: 'Per-second billing', starter: true,                   growth: true,                        scale: true                           },
  { feature: 'Call recording',     starter: true,                   growth: true,                        scale: true                           },
  { feature: 'Transcription',      starter: true,                   growth: true,                        scale: true                           },
  { feature: 'Support',            starter: 'Email support',        growth: 'Priority support',          scale: 'Dedicated success manager + SLA' },
  { feature: 'SLA',                starter: false,                  growth: false,                       scale: true                           },
];

function Cell({ value, featured, hovered }) {
  if (value === true) {
    return (
      <motion.span
        className="comparison-check"
        aria-label="Included"
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        <Check size={16} strokeWidth={2.5} />
      </motion.span>
    );
  }
  if (value === false) {
    return (
      <motion.span
        className="comparison-dash"
        aria-label="Not included"
        animate={{ opacity: hovered ? 0.4 : 0.65 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        &mdash;
      </motion.span>
    );
  }
  return (
    <motion.span
      className={featured ? 'comparison-highlight-text' : ''}
      animate={{ fontWeight: hovered && featured ? 700 : featured ? 700 : 400 }}
      transition={{ duration: 0.2 }}
    >
      {value}
    </motion.span>
  );
}

export default function PricingComparison() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className="comparison-section" aria-labelledby="comparison-heading">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-badge">&middot; Comparison</p>
        <h2 id="comparison-heading" className="section-title">
          Compare plans <span className="gradient-text">side by side.</span>
        </h2>
        <p className="section-subtitle">
          See exactly what you get at every tier &mdash; included minutes, effective rate,
          and support level, all in one view.
        </p>
      </motion.div>

      <motion.div
        className="comparison-table-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <table className="comparison-table" role="table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col"><strong>Starter</strong></th>
              <th scope="col" className="col-featured">
                <span className="col-featured-popular">
                  <strong>Growth</strong>
                  <span className="col-popular-badge">MOST POPULAR</span>
                </span>
              </th>
              <th scope="col"><strong>Scale</strong></th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => {
              const isHovered = hoveredRow === i;
              return (
                <motion.tr
                  key={row.feature}
                  className={isHovered ? 'row-hovered' : ''}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onHoverStart={() => setHoveredRow(i)}
                  onHoverEnd={() => setHoveredRow(null)}
                  style={{ cursor: 'default' }}
                >
                  {/* Feature label cell — shows orange left border on hover */}
                  <td className={isHovered ? 'td-feature td-feature--hovered' : 'td-feature'}>
                    <motion.span
                      animate={{
                        color: isHovered
                          ? 'var(--color-text-primary)'
                          : 'var(--color-text-secondary)',
                        x: isHovered ? 4 : 0,
                      }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'inline-block' }}
                    >
                      {row.feature}
                    </motion.span>
                  </td>

                  {/* Starter */}
                  <td>
                    <Cell value={row.starter} hovered={isHovered} />
                  </td>

                  {/* Growth — featured column */}
                  <motion.td
                    className="col-featured"
                    animate={{
                      backgroundColor: isHovered
                        ? 'rgba(249, 115, 22, 0.12)'
                        : 'rgba(249, 115, 22, 0.06)',
                    }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Cell value={row.growth} featured hovered={isHovered} />
                  </motion.td>

                  {/* Scale */}
                  <td>
                    <Cell value={row.scale} hovered={isHovered} />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
