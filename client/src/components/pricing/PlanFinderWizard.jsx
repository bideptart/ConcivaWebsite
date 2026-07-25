import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, RotateCcw, Sparkles, Check } from 'lucide-react';

const STEPS = [
  {
    key: 'useCase',
    question: 'What is your primary goal?',
    options: [
      { value: 'ai',    emoji: '🤖', title: 'AI Voice Automation',   desc: 'Automate customer calls with natural AI voice agents' },
      { value: 'team',  emoji: '📞', title: 'Team Phone System',      desc: 'HD softphones, virtual numbers, and IVR for your staff' },
      { value: 'cpaas', emoji: '🌐', title: 'CPaaS & Carrier APIs',   desc: 'Programmable SIP trunking, SMS webhooks, carrier access' },
    ],
  },
  {
    key: 'teamSize',
    question: 'How many seats do you need?',
    options: [
      { value: 'small',      emoji: '👤', title: '1 – 5 seats',       desc: 'Perfect for startups and boutique teams' },
      { value: 'medium',     emoji: '👥', title: '6 – 25 seats',      desc: 'Growing companies needing CRM sync & AI' },
      { value: 'large',      emoji: '🏢', title: '26 – 100 seats',    desc: 'Mid-size businesses with smart call queues' },
      { value: 'enterprise', emoji: '🏭', title: '100+ seats',        desc: 'High-volume contact centers, dedicated infra' },
    ],
  },
  {
    key: 'compliance',
    question: 'Security & compliance requirements?',
    options: [
      { value: 'standard', emoji: '🔒', title: 'Standard Cloud',      desc: '99.9% uptime, TLS encryption, WebRTC protocol' },
      { value: 'strict',   emoji: '🛡️', title: 'Enterprise-grade',   desc: 'HIPAA BAA · SOC-2 Type II · 99.999% SLA · dedicated manager' },
    ],
  },
];

function getRecommendation(answers) {
  const { useCase, teamSize, compliance } = answers;
  if (teamSize === 'small' && useCase === 'team' && compliance === 'standard')
    return { plan: 'Starter',    score: '96%', color: '#0A0A0A' };
  if (teamSize === 'enterprise' || compliance === 'strict' || useCase === 'cpaas')
    return { plan: 'Enterprise', score: '99%', color: '#F97316' };
  return   { plan: 'Growth & AI', score: '98%', color: '#F97316' };
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, filter: 'blur(6px)' }),
  center:        ({ x: 0, opacity: 1, filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }),
  exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, filter: 'blur(6px)',
    transition: { duration: 0.28 } }),
};

export default function PlanFinderWizard() {
  const [step,    setStep]    = useState(0);
  const [dir,     setDir]     = useState(1);
  const [answers, setAnswers] = useState({ useCase: '', teamSize: '', compliance: '' });
  const [result,  setResult]  = useState(null);

  const current = STEPS[step];

  const handleSelect = (key, val) => setAnswers(prev => ({ ...prev, [key]: val }));

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setDir(1);
      setStep(s => s + 1);
    } else {
      setResult(getRecommendation(answers));
    }
  };

  const handleBack = () => {
    setDir(-1);
    setStep(s => s - 1);
  };

  const handleReset = () => {
    setStep(0); setDir(1);
    setAnswers({ useCase: '', teamSize: '', compliance: '' });
    setResult(null);
  };

  const canProceed = !!answers[current?.key];

  return (
    <section className="plan-wizard-section">
      <div className="plan-wizard-card">
        <div className="wizard-glow" />

        {/* Header */}
        <div className="wizard-header">
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            <Compass size={13} />
            Interactive Plan Assistant
          </div>
          <h3 className="wizard-title">Not sure which plan fits?</h3>
          <p className="wizard-subtitle">3 quick questions — we'll match you to the right tier instantly.</p>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="wizard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Progress track */}
              <div className="wizard-progress-track" style={{ marginBottom: '2.5rem' }}>
                {STEPS.map((s, i) => (
                  <React.Fragment key={s.key}>
                    <div className={`wiz-step ${i === step ? 'active' : i < step ? 'done' : ''}`}>
                      <div className="wiz-step-circle">
                        {i < step ? <Check size={14} strokeWidth={3} /> : i + 1}
                      </div>
                      <span className="wiz-step-label">{['Use Case', 'Team Size', 'Compliance'][i]}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`wiz-connector ${i < step ? 'done' : ''}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Question + options */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="wizard-question-box"
                >
                  <label className="wizard-question-label">{current.question}</label>
                  <div className="wizard-options-grid">
                    {current.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`wizard-opt-btn ${answers[current.key] === opt.value ? 'selected' : ''}`}
                        onClick={() => handleSelect(current.key, opt.value)}
                      >
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{opt.emoji}</div>
                        <div className="opt-title">{opt.title}</div>
                        <div className="opt-desc">{opt.desc}</div>
                        {answers[current.key] === opt.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{
                              position: 'absolute', top: '0.75rem', right: '0.75rem',
                              width: 20, height: 20, borderRadius: '50%',
                              background: '#F97316',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                          >
                            <Check size={11} color="#fff" strokeWidth={3} />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav */}
              <div className="wizard-footer-actions" style={{ marginTop: '2rem' }}>
                {step > 0 && (
                  <button type="button" className="btn-wizard-back" onClick={handleBack}>
                    ← Back
                  </button>
                )}
                <button
                  type="button"
                  className="btn-wizard-next"
                  onClick={handleNext}
                  disabled={!canProceed}
                  style={{ opacity: canProceed ? 1 : 0.4, cursor: canProceed ? 'pointer' : 'not-allowed' }}
                >
                  {step === STEPS.length - 1 ? 'Reveal my match' : 'Next'}
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ) : (
            /* ── Result ── */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="wizard-result-box"
            >
              <motion.div
                className="result-match-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.15 }}
              >
                <Sparkles size={14} />
                Match Score: {result.score}
              </motion.div>

              <h4 className="result-title">
                Your best fit:&nbsp;
                <span style={{ color: result.color }}>{result.plan}</span>
              </h4>
              <p className="result-desc">
                Based on your answers, the <strong style={{ color: '#0A0A0A' }}>{result.plan}</strong> plan
                gives you the optimal balance of features, capacity, and carrier reliability
                for where you're headed.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn-wizard-next">
                  Select {result.plan} <Check size={15} />
                </button>
                <button type="button" className="btn-wizard-back" onClick={handleReset}>
                  <RotateCcw size={14} /> Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
