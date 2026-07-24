import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../../constants/industriesData';

function RoiEstimator() {
  const [selectedIndustryId, setSelectedIndustryId] = useState(INDUSTRIES_DATA[0].id);
  const [teamSize, setTeamSize] = useState(25);
  const [callVolume, setCallVolume] = useState(15000);

  // Dynamic ROI calculation logic
  const selectedInd = INDUSTRIES_DATA.find(i => i.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  // Base savings factors per industry
  const hourlyRate = 28; // Avg support / agent cost ($28/hr)
  const avgCallDurationMins = 5.5;
  const automationRate = 0.45; // 45% automated by AI bot

  const totalMonthlyCallMins = callVolume * avgCallDurationMins;
  const minsSavedMonthly = totalMonthlyCallMins * automationRate;
  const hoursSavedMonthly = Math.round(minsSavedMonthly / 60);

  const estimatedCostSavings = Math.round(hoursSavedMonthly * hourlyRate);
  const estimatedCsatIncrease = '+18%';

  return (
    <div className="roi-card">
      <div className="roi-inputs">
        <div>
          <span className="section-eyebrow">Interactive ROI Calculator</span>
          <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
            Estimate Your Annual Industry Savings
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Select your industry and team scale to see calculated operational efficiency gains with Conciva.
          </p>
        </div>

        <div className="input-group">
          <label htmlFor="roi-industry-select">Select Industry Vertical</label>
          <select 
            id="roi-industry-select"
            className="select-custom"
            value={selectedIndustryId}
            onChange={(e) => setSelectedIndustryId(e.target.value)}
          >
            {INDUSTRIES_DATA.map((ind) => (
              <option key={ind.id} value={ind.id}>{ind.category}</option>
            ))}
          </select>
        </div>

        <div className="range-slider-wrap">
          <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
            <span>Active Team / Agent Count</span>
            <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{teamSize} Agents</span>
          </label>
          <input 
            type="range" 
            className="range-slider" 
            min="5" 
            max="250" 
            step="5" 
            value={teamSize}
            onChange={(e) => setCallVolume(e.target.value * 600) || setTeamSize(e.target.value)}
          />
        </div>

        <div className="range-slider-wrap">
          <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
            <span>Monthly Inbound/Outbound Calls</span>
            <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{callVolume.toLocaleString()} calls</span>
          </label>
          <input 
            type="range" 
            className="range-slider" 
            min="1000" 
            max="100000" 
            step="2000" 
            value={callVolume}
            onChange={(e) => setCallVolume(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="roi-results-box">
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)' }}>
            Projected Impact for {selectedInd.category}
          </span>
          <h4 style={{ fontSize: '1.4rem', color: 'white', marginTop: '0.2rem' }}>ROI Summary</h4>
        </div>

        <div className="res-item">
          <div className="res-val">${(estimatedCostSavings * 12).toLocaleString()}</div>
          <div className="res-lbl">Estimated Annual Support Cost Savings</div>
        </div>

        <div className="res-item">
          <div className="res-val">{hoursSavedMonthly.toLocaleString()} hrs</div>
          <div className="res-lbl">Monthly Operational Hours Saved via Voice AI</div>
        </div>

        <div className="res-item">
          <div className="res-val" style={{ color: '#00D2A0' }}>{estimatedCsatIncrease}</div>
          <div className="res-lbl">Average Customer Satisfaction (CSAT) Increase</div>
        </div>

        <button className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
          Download Full Industry ROI Report →
        </button>
      </div>
    </div>
  );
}

export default RoiEstimator;
