import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

/* ── Animated count-up number ─────────────────────────────────── */
function CountUp({ target, prefix = '', suffix = '', duration = 600 }) {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const rafRef  = useRef(null);

  useEffect(() => {
    const start     = prevRef.current;
    const end       = target;
    const startTime = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const step = (now) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-expo
      const eased    = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value    = Math.round(start + (end - start) * eased);
      setDisplay(value);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else prevRef.current = target;
    };

    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return (
    <span>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

/* ── Slider row ───────────────────────────────────────────────── */
function SliderRow({ label, value, min, max, step = 1, unit, onChange, formatVal }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="calc-input-group">
      <div className="calc-label-row">
        <span className="calc-label">{label}</span>
        <span className="calc-value">{formatVal ? formatVal(value) : `${value.toLocaleString()} ${unit}`}</span>
      </div>
      <div style={{ position: 'relative' }}>
        {/* Fill track */}
        <div style={{
          position: 'absolute', top: '50%', left: 0,
          width: `${pct}%`, height: 6, marginTop: -3,
          background: 'linear-gradient(90deg,#F97316,#EA580C)',
          borderRadius: 3, pointerEvents: 'none', zIndex: 1,
        }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="calc-range-slider"
          style={{ position: 'relative', zIndex: 2 }}
        />
      </div>
    </div>
  );
}

export default function UsageCalculator() {
  const [seats,   setSeats]   = useState(15);
  const [minutes, setMinutes] = useState(12000);
  const [numbers, setNumbers] = useState(5);

  const seatCost      = seats   * 25;
  const minutesCost   = Math.round((minutes / 1000) * 12);
  const numberCost    = numbers * 4;
  const total         = seatCost + minutesCost + numberCost;
  const legacyCost    = Math.round(total * 1.65);
  const monthlySaving = legacyCost - total;
  const annualSaving  = monthlySaving * 12;

  return (
    <section className="calculator-section">
      <div className="calculator-inner">
        <div className="calc-bg-pattern" />
        <div className="calculator-glow" />

        {/* Header */}
        <div className="calc-header">
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            <Calculator size={13} />
            Interactive Cost Estimator
          </div>
          <h2>Estimate your exact monthly cost</h2>
          <p>Move the sliders — pricing updates instantly. No form. No sales call.</p>
        </div>

        <div className="calc-grid">
          {/* ── Left: sliders ── */}
          <div className="calc-inputs">
            <SliderRow
              label="Active Team Seats"
              value={seats} min={1} max={200} step={1}
              unit="seats" onChange={setSeats}
            />
            <SliderRow
              label="Monthly Call Minutes"
              value={minutes} min={500} max={100000} step={500}
              unit="mins" onChange={setMinutes}
              formatVal={(v) => `${v.toLocaleString()} mins`}
            />
            <SliderRow
              label="Virtual Phone Numbers"
              value={numbers} min={1} max={50} step={1}
              unit="numbers" onChange={setNumbers}
            />

            {/* Breakdown */}
            <motion.div
              layout
              style={{
                background: '#FFFFFF',
                border: '1px solid #F0F0F0',
                borderRadius: 16, padding: '1.25rem 1.5rem',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(0,0,0,0.45)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.85rem' }}>
                Cost Breakdown
              </div>
              {[
                { label: `${seats} seats × $25`,       val: seatCost },
                { label: `${(minutes/1000).toFixed(1)}k mins × $12`,  val: minutesCost },
                { label: `${numbers} numbers × $4`,    val: numberCost },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(0,0,0,0.5)', marginBottom: '0.5rem' }}>
                  <span>{row.label}</span>
                  <span style={{ color: 'rgba(0,0,0,0.35)', fontWeight: 600 }}>${row.val}/mo</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #F0F0F0', marginTop: '0.75rem', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 800, color: '#0A0A0A' }}>
                <span>Total</span>
                <span style={{ color: '#F97316' }}>${total.toLocaleString()}/mo</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: output card ── */}
          <div className="calc-output-card">
            <div className="calc-output-badge">
              <Sparkles size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
              Recommended: Growth & AI Plan
            </div>

            <div className="calc-total-label">Estimated Monthly Investment</div>
            <div className="calc-total-amount">
              $<CountUp target={total} duration={500} />
              <span style={{ fontSize: '1.1rem', color: 'rgba(0,0,0,0.4)', fontWeight: 500 }}>/mo</span>
            </div>
            <div className="calc-total-subtext">
              All-inclusive — AI features, carrier, and support
            </div>

            <div className="calc-savings-box">
              <div className="calc-savings-title">vs. legacy PBX infrastructure</div>
              <div className="calc-savings-value">
                Save $<CountUp target={annualSaving} duration={600} /> / year
              </div>
            </div>

            <div className="calc-perks">
              <div className="calc-perk-row">
                <CheckCircle2 size={15} color="#10B981" />
                <span>No setup fees or long-term contracts</span>
              </div>
              <div className="calc-perk-row">
                <CheckCircle2 size={15} color="#10B981" />
                <span>Scale seats up or down any time</span>
              </div>
              <div className="calc-perk-row">
                <TrendingDown size={15} color="#F97316" />
                <span>~{Math.round(((legacyCost - total) / legacyCost) * 100)}% lower total cost than legacy</span>
              </div>
            </div>

            <button
              type="button"
              className="card-cta-btn primary"
              style={{ marginTop: '1.75rem', borderRadius: 12 }}
            >
              Start free trial  <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
