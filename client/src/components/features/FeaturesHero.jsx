import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from './icons';

/**
 * Hero section.
 *
 * The live transcription panel that sat to the right of the phone has been
 * removed. The phone now occupies that space on its own, centred in the
 * column with breathing room above it.
 *
 * Note: this section deliberately does NOT carry the `scroll-reveal` class.
 * Above-the-fold content starting at opacity:0 delays LCP and flashes.
 */
export default function FeaturesHero({ onToast }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const toggleAudio = () => {
    setIsPlayingAudio((playing) => {
      if (onToast) {
        onToast(playing ? 'Audio stream paused' : 'Playing live South African voice stream');
      }
      return !playing;
    });
  };

  return (
    <section className="hero-section">
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
            From drag-and-drop workflow builders to sub-second voice latency tuning —
            enterprise AI tools tailored for modern call centers.
          </p>

          <div className="hero-cta-group">
            <Link
              to="/contact"
              className="btn-primary"
              onClick={() => onToast && onToast('Opening the agent builder')}
            >
              Build your first agent
              <span className="btn-icon-circle">
                <Icons.ArrowRight />
              </span>
            </Link>

            <Link to="/contact" className="btn-secondary">
              <Icons.Phone />
              Talk to sales
            </Link>
          </div>

          <div className="hero-feature-pills">
            <span className="pill-item">
              <span className="pill-icon"><Icons.Languages /></span> 25+ global languages
            </span>
            <span className="pill-item">
              <span className="pill-icon"><Icons.Headphones /></span> 24/7 always on
            </span>
            <span className="pill-item">
              <span className="pill-icon"><Icons.Zap /></span> Sub-200ms latency
            </span>
            <span className="pill-item">
              <span className="pill-icon"><Icons.ShieldCheck /></span> POPIA compliant
            </span>
          </div>
        </div>

        {/* Right visual — live-network stage around the phone */}
        <div className="hero-widget-wrapper">
          <div className="phone-stage">
            {/* Drifting ambient mesh */}
            <span className="stage-mesh stage-mesh--a" aria-hidden="true"></span>
            <span className="stage-mesh stage-mesh--b" aria-hidden="true"></span>

            {/* Signal pulses radiating from the handset */}
            <span className="stage-pulse stage-pulse--1" aria-hidden="true"></span>
            <span className="stage-pulse stage-pulse--2" aria-hidden="true"></span>
            <span className="stage-pulse stage-pulse--3" aria-hidden="true"></span>

            {/* Radar sweep + orbit track */}
            <span className="stage-scan" aria-hidden="true"></span>
            <span className="stage-orbit" aria-hidden="true">
              <span className="stage-orbit-dot"></span>
            </span>
            <span className="stage-orbit stage-orbit--fast" aria-hidden="true">
              <span className="stage-orbit-dot stage-orbit-dot--green"></span>
            </span>

            {/* Rising sparks */}
            <span className="spark spark--1" aria-hidden="true"></span>
            <span className="spark spark--2" aria-hidden="true"></span>
            <span className="spark spark--3" aria-hidden="true"></span>
            <span className="spark spark--4" aria-hidden="true"></span>
            <span className="spark spark--5" aria-hidden="true"></span>

            {/* Floating status chips, each wired to the handset */}
            <span className="float-chip float-chip--latency" aria-hidden="true">
              <span className="chip-link"></span>
              <span className="float-chip-icon"><Icons.Zap /></span>
              <span className="float-chip-text">
                <strong>184ms</strong>
                <em>response</em>
              </span>
            </span>

            <span className="float-chip float-chip--lang" aria-hidden="true">
              <span className="chip-link"></span>
              <span className="float-chip-icon"><Icons.Languages /></span>
              <span className="float-chip-text">
                <strong>en-ZA</strong>
                <em>auto-detect</em>
              </span>
            </span>

            <span className="float-chip float-chip--popia" aria-hidden="true">
              <span className="chip-link"></span>
              <span className="float-chip-icon"><Icons.ShieldCheck /></span>
              <span className="float-chip-text">
                <strong>POPIA</strong>
                <em>compliant</em>
              </span>
            </span>

            <span className="float-chip float-chip--crm" aria-hidden="true">
              <span className="chip-link"></span>
              <span className="float-chip-icon"><Icons.Sparkles /></span>
              <span className="float-chip-text">
                <strong>CRM synced</strong>
                <em>0.4s ago</em>
              </span>
            </span>

            <div className="phone-frame">
            <div className="phone-inner">
              {/* Ambient glow layers */}
              <div className="phone-glow phone-glow--top" aria-hidden="true"></div>
              <div className="phone-glow phone-glow--bottom" aria-hidden="true"></div>

              {/* Status bar */}
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

              {/* Call content */}
              <div className="phone-call-content">
                <span className="call-label">Inbound call</span>

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
                <button
                  type="button"
                  className="phone-wave-wrap"
                  onClick={toggleAudio}
                  aria-label={isPlayingAudio ? 'Pause audio preview' : 'Play audio preview'}
                >
                  <span className="phone-wave">
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
                  </span>
                </button>

                {/* Live timer pill */}
                <span className="phone-live-pill">
                  <span className="phone-live-dot"></span>
                  <span className="phone-live-time">{isPlayingAudio ? '04:12' : '00:00'}</span>
                </span>
              </div>

              {/* Call action grid */}
              <div className="phone-actions">
                <div className="phone-actions-grid">
                  <button
                    type="button"
                    className="phone-action-btn"
                    onClick={toggleAudio}
                    aria-label={isPlayingAudio ? 'Mute microphone' : 'Unmute microphone'}
                  >
                    <span className="action-circle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 19v3" /><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" /><path d="M16.95 16.95A7 7 0 0 1 5 12v-2" /><path d="M18.89 13.23A7 7 0 0 0 19 12v-2" /><path d="m2 2 20 20" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
                      </svg>
                    </span>
                    <span className="action-label">{isPlayingAudio ? 'mute' : 'unmute'}</span>
                  </button>

                  <button type="button" className="phone-action-btn" aria-label="Open keypad">
                    <span className="action-circle">
                      <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <circle cx="3" cy="3" r="1.6" /><circle cx="9" cy="3" r="1.6" /><circle cx="15" cy="3" r="1.6" />
                        <circle cx="3" cy="9" r="1.6" /><circle cx="9" cy="9" r="1.6" /><circle cx="15" cy="9" r="1.6" />
                        <circle cx="3" cy="15" r="1.6" /><circle cx="9" cy="15" r="1.6" /><circle cx="15" cy="15" r="1.6" />
                      </svg>
                    </span>
                    <span className="action-label">keypad</span>
                  </button>

                  <button type="button" className="phone-action-btn" aria-label="Turn on speaker">
                    <span className="action-circle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                      </svg>
                    </span>
                    <span className="action-label">speaker</span>
                  </button>
                </div>

                {/* End call */}
                <button
                  type="button"
                  className="phone-end-call"
                  onClick={toggleAudio}
                  aria-label="End call"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                  </svg>
                </button>
              </div>

              <div className="phone-home-bar"><span></span></div>
              <div className="phone-glass-overlay" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}