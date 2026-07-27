import React, { useMemo } from 'react';

/**
 * VoiceWaveform Component
 * Renders a real-time animated AI audio waveform with independent bar animations.
 * Orange + White Conciva brand theme.
 *
 * @param {Object} props
 * @param {boolean} [props.isActive=true] - Whether the audio waveform is actively animating
 * @param {number} [props.barCount=48] - Total number of vertical bars in the waveform
 * @param {string} [props.className=''] - Optional additional CSS class names
 */
export default function VoiceWaveform({ isActive = true, barCount = 48, className = '' }) {
  // Generate deterministic bar heights and animation profiles for natural audio look
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, index) => {
      // Create natural acoustic envelope (taller center, varied peaks)
      const centerDistance = Math.abs(index - barCount / 2) / (barCount / 2);
      const envelope = Math.max(0.25, 1 - Math.pow(centerDistance, 1.4));

      // Pseudo-random variance based on sine waves for natural wave shape
      const variance = Math.sin(index * 0.6) * 0.35 + Math.cos(index * 1.1) * 0.25;
      const baseHeight = Math.min(52, Math.max(12, Math.round(44 * envelope + variance * 24)));

      // Color palette: Conciva Orange family — deep orange → orange → amber
      let color;
      if (index % 7 === 0) {
        color = '#EA580C'; // deep orange
      } else if (index % 5 === 0) {
        color = '#FB923C'; // light orange
      } else if (index % 3 === 0) {
        color = '#FDBA74'; // amber-orange
      } else if (index % 2 === 0) {
        color = '#F97316'; // core Conciva orange
      } else {
        color = '#F97316'; // core Conciva orange
      }

      const animationDelay = (index * 0.045 + (index % 7) * 0.06).toFixed(2);
      const animationDuration = (0.75 + (index % 6) * 0.22).toFixed(2);

      return {
        id: index,
        height: baseHeight,
        color,
        animationDelay,
        animationDuration,
      };
    });
  }, [barCount]);

  return (
    <div
      className={`voice-waveform-container ${className}`}
      aria-label="Real-time AI voice waveform visualization"
    >
      {bars.map((bar) => (
        <span
          key={bar.id}
          className={`voice-bar ${isActive ? 'animate-voice-wave' : 'inactive-wave'}`}
          style={{
            height: `${bar.height}px`,
            backgroundColor: bar.color,
            animationDelay: isActive ? `${bar.animationDelay}s` : '0s',
            animationDuration: isActive ? `${bar.animationDuration}s` : '0s',
            boxShadow: isActive ? `0 0 6px rgba(249, 115, 22, 0.45)` : 'none',
          }}
        />
      ))}
    </div>
  );
}
