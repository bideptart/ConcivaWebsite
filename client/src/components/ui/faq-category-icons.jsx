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

export function GeneralIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 10.5 L12 4.5 L20 10.5" stroke="#F97316" strokeWidth="2" />
      <path d="M6 9.5 V19.5 A0.8 0.8 0 0 0 6.8 20.3 H17.2 A0.8 0.8 0 0 0 18 19.5 V9.5" stroke="#F97316" strokeWidth="2" />
      <path d="M10 20.3 V14.2 H14 V20.3" stroke="#FB923C" strokeWidth="2" />
      <path d="M19 6 L20.5 4.5" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export function BillingIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="#F97316" strokeWidth="2" />
      <path d="M3 9.8 H21" stroke="#F97316" strokeWidth="2" />
      <path d="M6.5 14.5 H11" stroke="#FB923C" strokeWidth="2" />
      <path d="M15 14.5 H17.5" stroke="#FB923C" strokeWidth="2" />
      <circle cx="19.5" cy="4" r="1" fill="#FB923C" />
    </svg>
  );
}

export function AIAgentsIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="5.5" y="5.5" width="13" height="12" rx="3.5" stroke="#F97316" strokeWidth="2" />
      <path d="M9 10.2 H9.01" stroke="#FB923C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15 10.2 H15.01" stroke="#FB923C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9.5 14 H14.5" stroke="#FB923C" strokeWidth="2" />
      <path d="M12 3.5 V5.5" stroke="#F97316" strokeWidth="2" />
      <circle cx="12" cy="3" r="1" fill="#F97316" />
      <path d="M3.5 12 H5.5" stroke="#F97316" strokeWidth="2" />
      <path d="M18.5 12 H20.5" stroke="#F97316" strokeWidth="2" />
    </svg>
  );
}

export function ComplianceIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3.5 L19.5 6 V11.5 C19.5 16 16.5 19.3 12 20.5 C7.5 19.3 4.5 16 4.5 11.5 V6 L12 3.5 Z" stroke="#F97316" strokeWidth="2" />
      <path d="M13 8 L11 11.5 L12.5 11.5 L11.5 15" stroke="#FB923C" strokeWidth="2" />
      <path d="M15.5 8.5 V10" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export function ConnectivityIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="6.5" y="5" width="11" height="17" rx="2.2" stroke="#F97316" strokeWidth="2" />
      <path d="M9.5 18.5 H14.5" stroke="#F97316" strokeWidth="2" />
      <circle cx="12" cy="19.3" r="0.55" fill="#F97316" />
      <path d="M9.5 7.8 H14.5" stroke="#FB923C" strokeWidth="2" />
      <path d="M9.5 10.5 H12.5" stroke="#FB923C" strokeWidth="2" />
      <path d="M3.2 8 L4.7 9.5" stroke="#FB923C" strokeWidth="2" />
      <path d="M3.2 12 L4.7 12" stroke="#FB923C" strokeWidth="2" />
      <path d="M3.2 16 L4.7 14.5" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export function AccountIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="#F97316" strokeWidth="2" />
      <path d="M8 10.5 V7.5 A4 4 0 0 1 16 7.5 V10.5" stroke="#F97316" strokeWidth="2" />
      <circle cx="12" cy="15.5" r="1.4" stroke="#FB923C" strokeWidth="2" />
      <path d="M12 16.9 V18.3" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export function HelpSupportIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="4" y="4" width="16" height="14" rx="3" stroke="#F97316" strokeWidth="2" />
      <path d="M7.5 18 L5 21 L11 18" stroke="#F97316" strokeWidth="2" />
      <path d="M9.8 8.6 C9.8 6.6 11.5 6.3 12.8 6.3 C14.4 6.3 15.6 7.6 15.6 9.3 C15.6 10.6 14.6 11.3 14.3 12.2" stroke="#FB923C" strokeWidth="2" />
      <circle cx="12.5" cy="15.5" r="1" fill="#FB923C" />
      <circle cx="19.5" cy="5.5" r="0.6" fill="#FB923C" />
      <circle cx="21.2" cy="7.3" r="0.5" fill="#FB923C" />
    </svg>
  );
}

export function SupportIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3.5" y="4.5" width="14" height="14" rx="4" stroke="#F97316" strokeWidth="2" />
      <path d="M17.5 16.5 L21 20 L18 16" stroke="#F97316" strokeWidth="2" />
      <path d="M6.5 8.2 H9.5 A0.7 0.7 0 0 1 10.2 8.9 V9.6" stroke="#FB923C" strokeWidth="2" />
      <path d="M6.5 11.2 H9.5 A0.7 0.7 0 0 1 10.2 11.9 V12.6" stroke="#FB923C" strokeWidth="2" />
      <path d="M13.2 9.5 A1.9 1.9 0 1 1 16 11.3 C15.1 12 14.6 12.3 14.6 13.2" stroke="#F97316" strokeWidth="2" />
      <circle cx="14.6" cy="15.8" r="1" fill="#F97316" />
      <path d="M19 6 V7.5" stroke="#FB923C" strokeWidth="2" />
      <path d="M18.25 6.75 H19.75" stroke="#FB923C" strokeWidth="2" />
    </svg>
  );
}

export const FAQ_CATEGORY_ICONS = {
  general: GeneralIcon,
  billing: BillingIcon,
  'ai-voice': AIAgentsIcon,
  features: ComplianceIcon,
  integrations: ConnectivityIcon,
  security: AccountIcon,
  support: HelpSupportIcon,
  'help-support': HelpSupportIcon,
};

export default FAQ_CATEGORY_ICONS;
