import React, { useState } from 'react';
import { Compass, Check, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

export default function PlanFinderWizard({ onSelectRecommended }) {
  const [step, setStep] = useState(1);
  const [useCase, setUseCase] = useState('ai'); // 'ai' | 'team' | 'cpaas'
  const [teamSize, setTeamSize] = useState('medium'); // 'small' | 'medium' | 'large' | 'enterprise'
  const [compliance, setCompliance] = useState('standard'); // 'standard' | 'strict'
  const [result, setResult] = useState(null);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate recommendation
      let recommendedPlan = 'growth';
      let matchScore = '98%';

      if (teamSize === 'small' && useCase === 'team') {
        recommendedPlan = 'starter';
        matchScore = '96%';
      } else if (teamSize === 'enterprise' || compliance === 'strict' || useCase === 'cpaas') {
        recommendedPlan = 'scale';
        matchScore = '99%';
      } else {
        recommendedPlan = 'growth';
        matchScore = '98%';
      }

      setResult({ recommendedPlan, matchScore });
    }
  };

  const handleReset = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <div className="plan-wizard-card">
      <div className="wizard-glow" />

      <div className="wizard-header">
        <div className="section-badge" style={{ background: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.3)', color: '#F97316' }}>
          <Compass size={16} />
          <span>Interactive Plan Assistant</span>
        </div>
        <h3 className="wizard-title">Not sure which plan fits your business?</h3>
        <p className="wizard-subtitle">Answer 3 quick questions to discover your optimal plan match.</p>
      </div>

      {!result ? (
        <div className="wizard-content">
          {/* Progress Indicators */}
          <div className="wizard-steps-bar">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Use Case</div>
            <div className="step-line" />
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Team Size</div>
            <div className="step-line" />
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3. SLA & Compliance</div>
          </div>

          {/* Question Step 1 */}
          {step === 1 && (
            <div className="wizard-question-box">
              <label className="wizard-question-label">What is your primary goal?</label>
              <div className="wizard-options-grid">
                <button
                  type="button"
                  className={`wizard-opt-btn ${useCase === 'ai' ? 'selected' : ''}`}
                  onClick={() => setUseCase('ai')}
                >
                  <div className="opt-title">🤖 AI Voice Bot Automation</div>
                  <div className="opt-desc">Automate customer calls with natural AI voice agents & live transcription</div>
                </button>
                <button
                  type="button"
                  className={`wizard-opt-btn ${useCase === 'team' ? 'selected' : ''}`}
                  onClick={() => setUseCase('team')}
                >
                  <div className="opt-title">📞 Team Phone System</div>
                  <div className="opt-desc">HD voice softphones, virtual numbers, and IVR auto-attendant for staff</div>
                </button>
                <button
                  type="button"
                  className={`wizard-opt-btn ${useCase === 'cpaas' ? 'selected' : ''}`}
                  onClick={() => setUseCase('cpaas')}
                >
                  <div className="opt-title">🌐 CPaaS & Carrier APIs</div>
                  <div className="opt-desc">Programmable SIP trunking, SMS webhooks, and raw carrier connectivity</div>
                </button>
              </div>
            </div>
          )}

          {/* Question Step 2 */}
          {step === 2 && (
            <div className="wizard-question-box">
              <label className="wizard-question-label">How many team members need active seats?</label>
              <div className="wizard-options-grid">
                <button
                  type="button"
                  className={`wizard-opt-btn ${teamSize === 'small' ? 'selected' : ''}`}
                  onClick={() => setTeamSize('small')}
                >
                  <div className="opt-title">1 – 5 User Seats</div>
                  <div className="opt-desc">Perfect for startups and small boutique teams</div>
                </button>
                <button
                  type="button"
                  className={`wizard-opt-btn ${teamSize === 'medium' ? 'selected' : ''}`}
                  onClick={() => setTeamSize('medium')}
                >
                  <div className="opt-title">6 – 25 User Seats</div>
                  <div className="opt-desc">Growing companies requiring CRM sync & AI tools</div>
                </button>
                <button
                  type="button"
                  className={`wizard-opt-btn ${teamSize === 'large' ? 'selected' : ''}`}
                  onClick={() => setTeamSize('large')}
                >
                  <div className="opt-title">26 – 100 User Seats</div>
                  <div className="opt-desc">Mid-size businesses needing smart round-robin queues</div>
                </button>
                <button
                  type="button"
                  className={`wizard-opt-btn ${teamSize === 'enterprise' ? 'selected' : ''}`}
                  onClick={() => setTeamSize('enterprise')}
                >
                  <div className="opt-title">100+ Enterprise Seats</div>
                  <div className="opt-desc">High volume contact centers with dedicated infrastructure</div>
                </button>
              </div>
            </div>
          )}

          {/* Question Step 3 */}
          {step === 3 && (
            <div className="wizard-question-box">
              <label className="wizard-question-label">Do you require enterprise security & custom SLAs?</label>
              <div className="wizard-options-grid">
                <button
                  type="button"
                  className={`wizard-opt-btn ${compliance === 'standard' ? 'selected' : ''}`}
                  onClick={() => setCompliance('standard')}
                >
                  <div className="opt-title">Standard Cloud Security</div>
                  <div className="opt-desc">99.9% Uptime, TLS Encryption & WebRTC protocol</div>
                </button>
                <button
                  type="button"
                  className={`wizard-opt-btn ${compliance === 'strict' ? 'selected' : ''}`}
                  onClick={() => setCompliance('strict')}
                >
                  <div className="opt-title">Strict Compliance & 99.999% SLA</div>
                  <div className="opt-desc">HIPAA BAA, SOC-2 Type II, dedicated SIP trunks & account manager</div>
                </button>
              </div>
            </div>
          )}

          <div className="wizard-footer-actions">
            {step > 1 && (
              <button type="button" className="btn-wizard-back" onClick={() => setStep(step - 1)}>
                Back
              </button>
            )}
            <button type="button" className="btn-wizard-next" onClick={handleNext}>
              {step === 3 ? 'Reveal My Recommendation' : 'Next Step'} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="wizard-result-box">
          <div className="result-match-badge">
            <Sparkles size={16} /> Match Score: {result.matchScore}
          </div>

          <h4 className="result-title">
            Recommended Plan: <span style={{ color: '#F97316' }}>{result.recommendedPlan.toUpperCase()} PLAN</span>
          </h4>
          <p className="result-desc">
            Based on your selections, the <strong>{result.recommendedPlan.toUpperCase()}</strong> tier provides the optimal combination of user seats, AI voice features, and carrier reliability for your growth target.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button type="button" className="btn-wizard-next" onClick={() => onSelectRecommended && onSelectRecommended(result.recommendedPlan)}>
              Select {result.recommendedPlan.toUpperCase()} Plan <Check size={16} />
            </button>
            <button type="button" className="btn-wizard-back" onClick={handleReset}>
              <RotateCcw size={16} /> Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
