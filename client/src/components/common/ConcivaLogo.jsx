import React from 'react';

/**
 * ConcivaLogo - Official Brand Logo component matching Image 2
 * Features the orange headset with soundwave speech bubble and mic,
 * plus "Conciva" in dark/navy and "AI" in brand orange.
 */
export const ConcivaIcon = ({ size = 38, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`conciva-logo-icon ${className}`}
    aria-hidden="true"
  >
    {/* Headband */}
    <path
      d="M 32 68 C 32 28, 118 28, 118 68"
      fill="none"
      stroke="#FF5E00"
      strokeWidth="12"
      strokeLinecap="round"
    />

    {/* Left Ear Cup (Speech Bubble) */}
    <path
      d="M 22 62 C 22 53, 29 46, 38 46 L 54 46 C 63 46, 70 53, 70 62 L 70 86 C 70 95, 63 102, 54 102 L 36 102 L 18 114 L 20 100 C 14 96, 10 89, 10 82 Z"
      fill="#FF5E00"
    />

    {/* Soundwaves inside Left Ear Cup */}
    <circle cx="27" cy="74" r="3.5" fill="white" />
    <line x1="36" y1="64" x2="36" y2="84" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <line x1="46" y1="58" x2="46" y2="90" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <line x1="56" y1="64" x2="56" y2="84" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="63" cy="74" r="3.5" fill="white" />

    {/* Right Ear Cup */}
    <rect x="114" y="60" width="18" height="42" rx="9" fill="#FF5E00" />

    {/* Mic Boom Arm */}
    <path
      d="M 123 100 C 123 125, 80 134, 56 127"
      fill="none"
      stroke="#FF5E00"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Mic Capsule */}
    <rect x="42" y="121" width="14" height="10" rx="5" fill="#FF5E00" />
  </svg>
);

export const ConcivaLogo = ({
  iconSize = 36,
  showText = true,
  className = '',
  textColor = 'currentColor',
  aiColor = '#FF5E00',
  textSize = '1.3rem'
}) => {
  return (
    <div
      className={`conciva-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.55rem',
        textDecoration: 'none',
        lineHeight: 1,
      }}
    >
      <ConcivaIcon size={iconSize} />
      {showText && (
        <span
          className="conciva-logo-text"
          style={{
            fontSize: textSize,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: textColor,
            fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Conciva
          <span
            className="conciva-logo-ai"
            style={{ color: aiColor, marginLeft: '1px' }}
          >
            AI
          </span>
        </span>
      )}
    </div>
  );
};

export default ConcivaLogo;
