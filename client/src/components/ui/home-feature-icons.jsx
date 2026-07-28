import React from 'react';

const baseProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  'aria-hidden': 'true',
};

export function AIVoiceIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="5.5" y="4.5" width="13" height="10" rx="3.5" stroke="#1F2937" strokeWidth="2" />
      <path d="M9 8.2 H9.01" stroke="#F97316" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M15 8.2 H15.01" stroke="#F97316" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M9.3 11.5 C10.1 12.3 13.9 12.3 14.7 11.5" stroke="#F97316" strokeWidth="2" />
      <path d="M12 3.2 V4.5" stroke="#1F2937" strokeWidth="2" />
      <circle cx="12" cy="2.7" r="0.75" fill="#F97316" />
      <path d="M4 12 V12.8" stroke="#1F2937" strokeWidth="2" />
      <path d="M20 12 V12.8" stroke="#1F2937" strokeWidth="2" />
      <path d="M8 14.5 V16.5 H16 V14.5" stroke="#1F2937" strokeWidth="2" />
      <path d="M12 16.5 V19.2" stroke="#1F2937" strokeWidth="2" />
      <path d="M9 19.2 H15" stroke="#1F2937" strokeWidth="2" />
      <circle cx="21" cy="3.5" r="0.6" fill="#FB923C" />
      <circle cx="21.8" cy="5.3" r="0.5" fill="#FB923C" />
    </svg>
  );
}

export function PhoneNumbersIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8 4 H12 C14.5 4 16.5 6 16.5 8.5 V15.5 C16.5 17.7 14.7 19.5 12.5 19.5 H8 C5.8 19.5 4 17.7 4 15.5 V8 C4 5.8 5.8 4 8 4 Z" stroke="#1F2937" strokeWidth="2" />
      <path d="M7 9 H13.5" stroke="#F97316" strokeWidth="2" />
      <path d="M7 11.5 H12" stroke="#F97316" strokeWidth="2" />
      <path d="M7 14 H10" stroke="#F97316" strokeWidth="2" />
      <circle cx="14.5" cy="17.2" r="0.6" fill="#FB923C" />
      <path d="M3 6.2 C2.3 7.1 2.1 8.2 2.5 9.5" stroke="#FB923C" strokeWidth="2" />
      <circle cx="2.5" cy="10.2" r="0.5" fill="#FB923C" />
    </svg>
  );
}

export function SIPTrunkingIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="#1F2937" strokeWidth="2" />
      <path d="M3.5 12 H20.5" stroke="#1F2937" strokeWidth="2" />
      <path d="M12 3.5 C15 5.5 15 18.5 12 20.5" stroke="#F97316" strokeWidth="2" />
      <path d="M12 3.5 C9 5.5 9 18.5 12 20.5" stroke="#F97316" strokeWidth="2" />
      <path d="M8.5 6.2 H8.51" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
      <path d="M15.5 6.2 H15.51" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="0.8" fill="#F97316" />
    </svg>
  );
}

export function CallAnalyticsIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3.5" y="4" width="17" height="15.5" rx="2.5" stroke="#1F2937" strokeWidth="2" />
      <path d="M7 15 V10" stroke="#F97316" strokeWidth="2" />
      <path d="M11 15 V7" stroke="#F97316" strokeWidth="2" />
      <path d="M15 15 V11" stroke="#F97316" strokeWidth="2" />
      <path d="M19 15 V8.5" stroke="#F97316" strokeWidth="2" />
      <path d="M6.2 7.2 H6.21" stroke="#FB923C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M5.5 6.5 H6.9" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export function EnterpriseSecurityIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3.2 L19.8 5.5 V11.5 C19.8 15.8 16.8 19.2 12 20.5 C7.2 19.2 4.2 15.8 4.2 11.5 V5.5 L12 3.2 Z" stroke="#1F2937" strokeWidth="2" />
      <rect x="9.5" y="10.5" width="5" height="6.5" rx="1" stroke="#F97316" strokeWidth="2" />
      <path d="M11 10.5 V9.2 C11 8.3 11.8 7.7 12.5 7.7 C13.2 7.7 14 8.3 14 9.2 V10.5" stroke="#F97316" strokeWidth="2" />
      <circle cx="12" cy="13.8" r="0.55" fill="#FB923C" />
      <path d="M12 14.3 V15.8" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export function WebRTCSoftphoneIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="6" y="3.5" width="12" height="18" rx="3" stroke="#1F2937" strokeWidth="2" />
      <path d="M9 6.5 H15" stroke="#F97316" strokeWidth="2" />
      <path d="M12 20.2 V20.8" stroke="#1F2937" strokeWidth="2" />
      <path d="M8.5 7.8 L15.5 13.8" stroke="#F97316" strokeWidth="2" />
      <path d="M9.3 9.5 L11.2 8" stroke="#FB923C" strokeWidth="2" />
      <path d="M12.8 13.6 L14.7 12.1" stroke="#FB923C" strokeWidth="2" />
      <path d="M8 16.5 H16" stroke="#F97316" strokeWidth="2" />
    </svg>
  );
}

export function HelpSupportIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 6.5 C4 5.12 5.12 4 6.5 4 H17.5 C18.88 4 20 5.12 20 6.5 V13.5 C20 14.88 18.88 16 17.5 16 H12.5 L8.5 20 L9 16 H6.5 C5.12 16 4 14.88 4 13.5 V6.5 Z" stroke="#1F2937" strokeWidth="2"/>
      <path d="M9.8 8.8 C9.8 7 11.2 6.6 12.5 6.6 C14.1 6.6 15.4 7.8 15.4 9.4 C15.4 10.7 14.3 11.4 14 12.4" stroke="#F97316" strokeWidth="2"/>
      <circle cx="12.5" cy="14.5" r="0.9" fill="#F97316"/>
      <circle cx="20.5" cy="3.8" r="0.55" fill="#FB923C"/>
      <path d="M18.5 3 C19.6 2.3 20.9 2.6 21.6 3.7" stroke="#FB923C" strokeWidth="1.8"/>
    </svg>
  );
}

export const HOME_FEATURE_ICONS = {
  'ai-voice': AIVoiceIcon,
  'phone-numbers': PhoneNumbersIcon,
  'sip-trunking': SIPTrunkingIcon,
  'call-analytics': CallAnalyticsIcon,
  'enterprise-security': EnterpriseSecurityIcon,
  'webrtc-softphone': WebRTCSoftphoneIcon,
  'help-support': HelpSupportIcon,
};

export default HOME_FEATURE_ICONS;
