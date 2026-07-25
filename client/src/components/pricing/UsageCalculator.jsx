import React, { useState } from 'react';
import { Calculator, TrendingDown, CheckCircle2, Sparkles } from 'lucide-react';

export default function UsageCalculator() {
  const [seats, setSeats] = useState(15);
  const [minutes, setMinutes] = useState(12000);
  const [numbers, setNumbers] = useState(5);

  // Dynamic cost calculation logic
  const calculateTotal = () => {
    const seatCost = seats * 25; // $25 per seat average
    const minutesCost = (minutes / 1000) * 12; // $12 per 1000 mins
    const numberCost = numbers * 4; // $4 per virtual number
    return Math.round(seatCost + minutesCost + numberCost);
  };

  const estimatedTotal = calculateTotal();
  const legacyTelcoCost = Math.round(estimatedTotal * 1.65); // 65% higher
  const monthlySavings = legacyTelcoCost - estimatedTotal;
  const annualSavings = monthlySavings * 12;

  return (
    <section className="calculator-section">
      <div className="calculator-glow" />

      <div className="calc-header">
        <div className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#F97316', borderColor: 'rgba(249, 115, 22, 0.4)' }}>
          <Calculator size={16} />
          <span>Interactive Estimator</span>
        </div>
        <h2>Estimate your exact monthly cost & ROI</h2>
        <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
          Adjust the sliders below to see your customized package pricing and instant telco cost savings.
        </p>
      </div>

      <div className="calc-grid">
        {/* Sliders Column */}
        <div className="calc-inputs">
          {/* Slider 1: Seats */}
          <div className="calc-input-group">
            <div className="calc-label-row">
              <span className="calc-label">Active Team Seats</span>
              <span className="calc-value">{seats} Seats</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              className="calc-range-slider"
            />
          </div>

          {/* Slider 2: Call Volume */}
          <div className="calc-input-group">
            <div className="calc-label-row">
              <span className="calc-label">Monthly Call Minutes</span>
              <span className="calc-value">{minutes.toLocaleString()} Mins</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="calc-range-slider"
            />
          </div>

          {/* Slider 3: Numbers */}
          <div className="calc-input-group">
            <div className="calc-label-row">
              <span className="calc-label">Virtual Phone Numbers</span>
              <span className="calc-value">{numbers} Numbers</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={numbers}
              onChange={(e) => setNumbers(Number(e.target.value))}
              className="calc-range-slider"
            />
          </div>
        </div>

        {/* Output Card Column */}
        <div className="calc-output-card">
          <span className="calc-output-badge">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} /> Recommended Conciva Growth Plan
          </span>

          <div className="calc-total-label">Estimated Investment</div>
          <div className="calc-total-amount">
            ${estimatedTotal}<span style={{ fontSize: '1.25rem', color: '#94A3B8', fontWeight: '500' }}>/mo</span>
          </div>
          <div className="calc-total-subtext">All-inclusive cloud platform, AI features & carriers</div>

          <div className="calc-savings-box">
            <div className="calc-savings-title">Estimated Annual Telco Savings</div>
            <div className="calc-savings-value">
              Save ${annualSavings.toLocaleString()} / year
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left', fontSize: '0.85rem', color: '#CBD5E1', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="#10B981" /> No setup fees or contracts
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="#10B981" /> Scale up or down dynamically
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingDown size={16} color="#F97316" /> ~40% lower costs than legacy PBX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
