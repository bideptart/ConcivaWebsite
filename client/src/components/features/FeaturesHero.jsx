import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Icons = {
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 7.92c0 .13.001.261.001.393a7.5 7.5 0 0 0-7.92 7.92c0 .13-.001.261-.001.393a7.5 7.5 0 0 0-7.92-7.92c0-.13-.001-.261-.001-.393a7.5 7.5 0 0 0 7.92-7.92z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Zap: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Languages: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
    </svg>
  ),
  Headphones: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
};

export default function FeaturesHero({ onToast }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    if (onToast) {
      onToast(isPlayingAudio ? 'Audio stream paused' : 'Simulating live South African voice stream...');
    }
  };

  return (
    <section className="hero-section scroll-reveal">
      <div className="container hero-grid">
        <div className="hero-text-block">
          <div className="badge-tag">
            <span className="pulse-dot"></span>
            Features Overview
          </div>
          <h1 className="hero-title">
            Everything your <span className="gradient-span">voice agent</span> needs to scale.
          </h1>
          <p className="hero-subtitle">
            From drag-and-drop workflow builders to sub-second voice latency tuning — enterprise AI tools tailored for modern call centers.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary" onClick={() => onToast && onToast('Launching agent builder...')}>
              Build your first agent
              <span className="btn-icon-circle">
                <Icons.ArrowRight />
              </span>
            </Link>

            <Link to="/contact" className="btn-secondary">
              <Icons.Phone />
              Talk to Sales
            </Link>
          </div>

          <div className="hero-feature-pills">
            <span className="pill-item">
              <span className="pill-icon"><Icons.Languages /></span> 25+ Global Languages
            </span>
            <span className="pill-item">
              <span className="pill-icon"><Icons.Headphones /></span> 24/7 Always On
            </span>
            <span className="pill-item">
              <span className="pill-icon"><Icons.Zap /></span> Sub-200ms Latency
            </span>
            <span className="pill-item">
              <span className="pill-icon"><Icons.ShieldCheck /></span> POPIA & TRAI Compliant
            </span>
          </div>
        </div>

        {/* Right Visual — LetsDial Responsive Phone + Live Transcription */}
        <div className="hero-widget-wrapper">
          <div className="mobile-hero-layout">
            {/* Phone Frame */}
            <div className="phone-frame">
              <div className="phone-inner">
                {/* Ambient glow layers */}
                <div className="phone-glow phone-glow--top" aria-hidden="true"></div>
                <div className="phone-glow phone-glow--bottom" aria-hidden="true"></div>

                {/* Status Bar */}
                <div className="phone-status-bar">
                  <span className="status-time">09:41</span>
                  <div className="dynamic-island">
                    <span className="di-left">
                      <Icons.Sparkles />
                      <span className="di-timer">{isPlayingAudio ? '04:12' : '00:00'}</span>
                    </span>
                    <span className="di-live-dot"></span>
                  </div>
                  <span className="status-icons">
                    <svg viewBox="0 0 18 12" className="status-signal" fill="currentColor" aria-hidden="true">
                      <rect x="0" y="8" width="3" height="4" rx="0.75" />
                      <rect x="5" y="6" width="3" height="6" rx="0.75" />
                      <rect x="10" y="3" width="3" height="9" rx="0.75" />
                      <rect x="15" y="0" width="3" height="12" rx="0.75" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="status-wifi" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" />
                    </svg>
                    <svg viewBox="0 0 25 12" className="status-battery" fill="none" aria-hidden="true">
                      <rect x="0.75" y="0.75" width="20.5" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <rect x="2.25" y="2.25" width="17.5" height="7.5" rx="1.5" fill="currentColor" />
                      <path d="M23 4.5v3a1.5 1.5 0 0 0 0-3z" fill="currentColor" opacity="0.4" />
                    </svg>
                  </span>
                </div>

                {/* Call Content */}
                <div className="phone-call-content">
                  <span className="call-label">INBOUND CALL</span>

                  <div className="phone-avatar-wrapper">
                    <span className="phone-avatar-halo" aria-hidden="true"></span>
                    <span className="phone-avatar-ring">
                      <span className="phone-avatar">
                        <span className="phone-avatar-shine" aria-hidden="true"></span>
                        <span className="phone-avatar-letter">C</span>
                      </span>
                    </span>
                    <span className="phone-avatar-ai-badge">
                      <Icons.Sparkles />
                    </span>
                  </div>

                  <div className="phone-caller-name">Conciva AI</div>
                  <p className="phone-caller-number">+27 (011) 555-0199</p>
                  <span className="phone-caller-type">South Africa · Live</span>

                  {/* Waveform */}
                  <div className="phone-wave-wrap" onClick={toggleAudio} title="Click to toggle audio playback">
                    <div className="phone-wave">
                      {[22, 36, 44, 30, 22, 17, 9, 21, 37, 36, 37, 31, 12, 12, 21, 25, 38, 43, 28, 20, 17, 10, 24, 39].map((h, i) => (
                        <span
                          key={i}
                          className="phone-wave-bar"
                          style={{
                            height: isPlayingAudio ? `${h}%` : '12%',
                            animationDelay: `${i * 0.06}s`
                          }}
                        ></span>
                      ))}
                    </div>
                  </div>

                  {/* Live Timer Pill */}
                  <span className="phone-live-pill">
                    <span className="phone-live-dot"></span>
                    <span className="phone-live-time">{isPlayingAudio ? '04:12' : '00:00'}</span>
                  </span>
                </div>

                {/* Call Action Grid */}
                <div className="phone-actions">
                  <div className="phone-actions-grid">
                    <button className="phone-action-btn" onClick={toggleAudio} aria-label="Mute mic">
                      <span className="action-circle">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 19v3" /><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" /><path d="M16.95 16.95A7 7 0 0 1 5 12v-2" /><path d="M18.89 13.23A7 7 0 0 0 19 12v-2" /><path d="m2 2 20 20" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
                        </svg>
                      </span>
                      <span className="action-label">{isPlayingAudio ? 'mute' : 'unmute'}</span>
                    </button>
                    <button className="phone-action-btn" aria-label="Keypad">
                      <span className="action-circle">
                        <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
                          <circle cx="3" cy="3" r="1.6" /><circle cx="9" cy="3" r="1.6" /><circle cx="15" cy="3" r="1.6" />
                          <circle cx="3" cy="9" r="1.6" /><circle cx="9" cy="9" r="1.6" /><circle cx="15" cy="9" r="1.6" />
                          <circle cx="3" cy="15" r="1.6" /><circle cx="9" cy="15" r="1.6" /><circle cx="15" cy="15" r="1.6" />
                        </svg>
                      </span>
                      <span className="action-label">keypad</span>
                    </button>
                    <button className="phone-action-btn" aria-label="Speaker">
                      <span className="action-circle">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                        </svg>
                      </span>
                      <span className="action-label">speaker</span>
                    </button>
                  </div>

                  {/* End Call Button */}
                  <button className="phone-end-call" onClick={toggleAudio} aria-label="End Call">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                    </svg>
                  </button>
                </div>

                <div className="phone-home-bar"><span></span></div>
                <div className="phone-glass-overlay" aria-hidden="true"></div>
              </div>
            </div>

            {/* Live Transcription Panel (beside phone) */}
            <div className="transcript-panel">
              <div className="transcript-panel-header">
                <div className="transcript-panel-dot-group">
                  <span className="tp-live-dot"></span>
                  <span className="tp-live-dot"></span>
                </div>
                <span className="transcript-panel-title">// live transcription</span>
                <span className="transcript-panel-lang">en-ZA · auto</span>
              </div>

              <div className="transcript-ai-badge">
                <Icons.Sparkles />
                <span>Handled by Conciva AI</span>
              </div>

              <div className="transcript-lines">
                <div className="transcript-line">
                  <span className="transcript-role transcript-role--caller">Customer</span>
                  <p>"Hey, sorry to bother you again — I still haven't heard back about my loan application. It's been almost two weeks."</p>
                </div>
                <div className="transcript-line">
                  <span className="transcript-role transcript-role--ai">Conciva AI</span>
                  <p>"No trouble at all, let me check that for you now... okay, I can see it went through — you were approved yesterday and your FICA documents are already verified on our end."</p>
                </div>
                <div className="transcript-line">
                  <span className="transcript-role transcript-role--caller">Customer</span>
                  <p>"Oh wow, finally! Is there any way you can send that to me in writing, just so I have it?"</p>
                </div>
                <div className="transcript-line transcript-line--typing">
                  <span className="transcript-role transcript-role--ai">Conciva AI</span>
                  <span className="typing-dots">
                    <span></span><span></span><span></span>
                  </span>
                  <span className="typing-label">sending confirmation…</span>
                </div>
              </div>

              <div className="transcript-panel-footer">
                <p><strong>POPIA Compliant.</strong> Instant CRM Sync.</p>
                <span className="transcript-footer-tag">live · 0.18s lag</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}