import React, { useState, useEffect } from 'react';

const MESSAGES = [
  { speaker: 'Customer', text: 'Hi, I need to book a clinic appointment for tomorrow morning.', lang: 'English' },
  { speaker: 'Conciva AI', text: 'नमस्ते! Dr. Sharma is available at 10:30 AM. Shall I confirm your slot?', lang: 'Hindi' },
  { speaker: 'Customer', text: 'Yes please, and send the WhatsApp confirmation.', lang: 'English' },
  { speaker: 'Conciva AI', text: 'Done! Confirmation sent to your phone. Anything else?', lang: 'Multilingual' }
];

export default function HeroVoiceConsole() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentMsg = MESSAGES[msgIndex];

  return (
    <div className="hero-console-container">
      {/* Background Orbital Rings */}
      <div className="orbital-ring ring-outer"></div>
      <div className="orbital-ring ring-inner"></div>

      {/* Floating Smart Badges */}
      <div className="console-float-badge float-top-left">
        <span className="badge-icon">🏥</span>
        <span>Appointment Booked • 10:30 AM</span>
      </div>

      <div className="console-float-badge float-top-right">
        <span className="badge-icon">⚡</span>
        <span>Sub-240ms Response</span>
      </div>

      <div className="console-float-badge float-bottom-left">
        <span className="badge-icon">🌐</span>
        <span>Hindi • Tamil • Telugu</span>
      </div>

      <div className="console-float-badge float-bottom-right">
        <span className="badge-icon">🏢</span>
        <span>Real Estate Site Visit Confirmed</span>
      </div>

      {/* Main Glass Console Card */}
      <div className="hero-console-card">
        {/* Top Status Header */}
        <div className="console-header">
          <div className="console-status">
            <span className="status-dot-pulse"></span>
            <span className="status-text">Conciva AI Call Engine — Live</span>
          </div>
          <span className="console-tag-pill">10+ Languages</span>
        </div>

        {/* Audio Waveform Equalizer */}
        <div className="console-waveform-area">
          <div className="soundwave-container">
            {[45, 80, 60, 95, 40, 75, 100, 65, 85, 50, 90, 70, 40, 85, 60, 45].map((height, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{
                  height: `${height}%`,
                  animationDelay: `${(i * 0.08).toFixed(2)}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Real-time Dynamic Dialogue Simulator */}
        <div className="console-dialogue-box">
          <div className="dialogue-header">
            <span className="speaker-name">{currentMsg.speaker}</span>
            <span className="lang-indicator">{currentMsg.lang}</span>
          </div>
          <p className="dialogue-text">"{currentMsg.text}"</p>
        </div>

        {/* Console Bottom Stats */}
        <div className="console-stats-row">
          <div className="console-stat">
            <span className="stat-val">99.8%</span>
            <span className="stat-lbl">Accuracy</span>
          </div>
          <div className="console-stat">
            <span className="stat-val">10,000+</span>
            <span className="stat-lbl">Concurrent Calls</span>
          </div>
          <div className="console-stat">
            <span className="stat-val">&lt; 0.3s</span>
            <span className="stat-lbl">Latency</span>
          </div>
        </div>
      </div>
    </div>
  );
}
