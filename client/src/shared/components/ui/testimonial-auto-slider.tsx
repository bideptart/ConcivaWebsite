import * as React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

export type TestimonialBadge = {
  label: string;
  color: string;
  background: string;
  border: string;
};

export type TestimonialAuthor = {
  name: string;
  designation: string;
};

export type TestimonialItem = {
  id: string;
  badge: TestimonialBadge;
  quote: string;
  author: TestimonialAuthor;
};

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'deflection',
    badge: {
      label: '73% DEFLECTION',
      color: '#F97316',
      background: '#FFF7ED',
      border: '#FED7AA',
    },
    quote:
      'Conciva AI reduced our customer wait times by 73% in the first month. The AI voice bot handles tier-1 queries flawlessly — our agents now focus only on complex cases.',
    author: {
      name: 'Sarah Mitchell',
      designation: 'VP Operations',
    },
  },
  {
    id: 'sip-quality',
    badge: {
      label: 'LIVE IN 4 DAYS',
      color: '#EA580C',
      background: '#FFF7ED',
      border: '#FED7AA',
    },
    quote:
      "The SIP trunking quality is exceptional. We've processed over 50 million minutes with zero unplanned downtime. Best carrier decision we've ever made.",
    author: {
      name: 'David Chen',
      designation: 'CTO',
    },
  },
  {
    id: 'hours-saved',
    badge: {
      label: '30 HRS/WEEK SAVED',
      color: '#16A34A',
      background: '#F0FDF4',
      border: '#BBF7D0',
    },
    quote:
      'Integration with our Salesforce instance took under an hour. The live analytics dashboard alone saved our QA team 30 hours per week.',
    author: {
      name: 'Priya Nair',
      designation: 'Head of CX',
    },
  },
  {
    id: 'zero-downtime',
    badge: {
      label: 'ZERO DOWNTIME',
      color: '#7C3AED',
      background: '#F5F3FF',
      border: '#DDD6FE',
    },
    quote:
      'Switched from our legacy PBX in a weekend. The onboarding team was incredible and call quality is night-and-day better. Conciva AI just works.',
    author: {
      name: 'James Okafor',
      designation: 'COO',
    },
  },
  {
    id: 'csat',
    badge: {
      label: 'CSAT 94%',
      color: '#2563EB',
      background: '#EFF6FF',
      border: '#BFDBFE',
    },
    quote:
      'Real-time transcripts and sentiment scoring changed how we coach agents. CSAT went from 78% to 94% in two quarters. The ROI is undeniable.',
    author: {
      name: 'Mia Thornton',
      designation: 'Director of Support',
    },
  },
];

type TestimonialCardProps = {
  item: TestimonialItem;
  className?: string;
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

function TestimonialCard({ item, className }: TestimonialCardProps) {
  const initials = getInitials(item.author.name);

  return (
    <div
      className={cn(
        'w-[280px] min-w-[280px] shrink-0 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[300px] sm:min-w-[300px]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.08em]"
          style={{
            color: item.badge.color,
            background: item.badge.background,
            borderColor: item.badge.border,
          }}
        >
          {item.badge.label}
        </span>
        <span className="text-[1.35rem] leading-none text-slate-200">"</span>
      </div>

      <p
        className="mt-3 text-sm leading-relaxed text-slate-600"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        "{item.quote}"
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-[0.72rem] font-bold text-white">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-[0.85rem] font-bold text-slate-900">
            {item.author.name}
          </div>
          <div className="truncate text-[0.75rem] text-slate-400">
            {item.author.designation}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={`${item.id}-star-${idx}`}
              className="h-3.5 w-3.5 text-[#F97316]"
              style={{ fill: '#F97316' }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export type TestimonialAutoSliderProps = {
  testimonials?: TestimonialItem[];
  className?: string;
  durationSeconds?: number;
  gapPx?: number;
  repeat?: number;
};

export function TestimonialAutoSlider({
  testimonials = DEFAULT_TESTIMONIALS,
  className,
  durationSeconds = 36,
  gapPx = 16,
  repeat = 4,
}: TestimonialAutoSliderProps) {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];
  const sets = Math.max(2, repeat);
  const items = Array.from({ length: sets }, (_, idx) =>
    safeTestimonials.map((t) => ({ setIndex: idx, item: t })),
  ).flat();

  return (
    <div
      className={cn('group w-full overflow-hidden', className)}
      style={
        {
          '--duration': `${durationSeconds}s`,
          '--gap': `${gapPx}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="flex overflow-hidden py-2"
        style={{ gap: 'var(--gap)' }}
      >
        <div
          className="animate-marquee flex shrink-0 group-hover:[animation-play-state:paused]"
          style={{ gap: 'var(--gap)' }}
        >
          {items.map(({ setIndex, item }, idx) => (
            <div key={`${setIndex}-${item.id}-${idx}`} aria-hidden={setIndex > 0}>
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialAutoSlider;
