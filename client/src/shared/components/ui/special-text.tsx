import React, { useEffect, useMemo, useRef, useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type SpecialTextProps = {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  /**
   * Duration of the per-character typing / reveal animation in milliseconds.
   * Total animation will be approximately `(characters * speedMs) + settleMs`.
   */
  speedMs?: number;
  /**
   * Extra milliseconds before the final character is locked in to give the
   * "scramble" effect room to resolve.
   */
  settleMs?: number;
  /**
   * Delay in milliseconds before the animation begins. Useful for entry
   * choreography.
   */
  delayMs?: number;
  /**
   * If true, the animation replays whenever the `text` prop changes. Defaults
   * to true so the component stays declarative.
   */
  animateOnChange?: boolean;
  /**
   * Charset used for the placeholder "scramble" characters during the reveal.
   * Keep it short — punctuation and mixed case tends to read best.
   */
  scrambleChars?: string;
  /**
   * How often each character re-rolls a new random glyph while it's still
   * "typing". Lower values = more flicker / scrambling.
   */
  flickerMs?: number;
  /**
   * Optional accessible label override. Defaults to `text`.
   */
  ariaLabel?: string;
  /**
   * Callback fired when the reveal animation finishes and the full text is
   * visible. Runs once per animation cycle.
   */
  onComplete?: () => void;
};

const DEFAULT_SCRAMBLE =
  '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * SpecialText
 *
 * A small, reusable shadcn/ui-style component that renders a single string
 * with a per-character animated typing / random-scramble reveal effect.
 *
 * - Every character is independently wrapped, so you can target it with
 *   Tailwind utilities on the parent (tracking, leading, size, weight, …).
 * - Whitespace characters are never scrambled so word boundaries stay stable
 *   while the text settles.
 * - Fully accessible: exposes the final text via a visually-hidden span for
 *   screen readers and a stable `aria-label`.
 */
export const SpecialText = forwardRef<HTMLElement, SpecialTextProps>(
  function SpecialText(
    {
      text,
      className = '',
      as: Tag = 'span',
      speedMs = 45,
      settleMs = 220,
      delayMs = 0,
      animateOnChange = true,
      scrambleChars = DEFAULT_SCRAMBLE,
      flickerMs = 35,
      ariaLabel,
      onComplete,
    },
    ref,
  ) {
    const characters = useMemo(() => Array.from(text), [text]);
    const [revealedCount, setRevealedCount] = useState<number>(() =>
      animateOnChange ? 0 : characters.length,
    );
    const completedRef = useRef(false);

    // When the source text changes, restart the reveal (when enabled).
    useEffect(() => {
      if (!animateOnChange) {
        setRevealedCount(characters.length);
        return undefined;
      }

      completedRef.current = false;
      setRevealedCount(0);

      let cancelled = false;
      let index = 0;

      const tick = () => {
        if (cancelled) return;
        index += 1;
        if (index <= characters.length) {
          setRevealedCount(index);
          window.setTimeout(tick, speedMs);
        } else {
          window.setTimeout(() => {
            if (!cancelled) {
              setRevealedCount(characters.length);
              if (!completedRef.current) {
                completedRef.current = true;
                onComplete?.();
              }
            }
          }, settleMs);
        }
      };

      const startHandle = window.setTimeout(tick, delayMs);

      return () => {
        cancelled = true;
        window.clearTimeout(startHandle);
      };
    }, [
      text,
      characters.length,
      speedMs,
      settleMs,
      delayMs,
      animateOnChange,
      onComplete,
    ]);

    // Flicker loop: every `flickerMs` re-render the unscramble text so the
    // placeholder glyphs feel like they're "typing".
    const [, forceFlicker] = useState(0);
    useEffect(() => {
      if (revealedCount >= characters.length) return undefined;
      const id = window.setInterval(
        () => forceFlicker((n) => (n + 1) % 1_000_000),
        flickerMs,
      );
      return () => window.clearInterval(id);
    }, [revealedCount, characters.length, flickerMs]);

    const Component = Tag as unknown as React.ElementType;

    return (
      <Component
        ref={ref}
        role="text"
        aria-label={ariaLabel ?? text}
        className={
          'inline-flex flex-wrap items-center justify-center select-none ' +
          className
        }
      >
        {characters.map((ch, i) => {
          const locked = i < revealedCount;
          const isWhitespace = ch.trim() === '';
          const glyph =
            locked || isWhitespace
              ? ch
              : scrambleChars[Math.floor(Math.random() * scrambleChars.length)] ??
                '•';
          const display = isWhitespace ? '\u00A0' : glyph;

          return (
            <motion.span
              key={`${i}-${ch}`}
              initial={{ opacity: locked ? 1 : 0.55 }}
              animate={{
                opacity: locked ? 1 : 0.62,
                filter: locked ? 'blur(0px)' : 'blur(0.25px)',
              }}
              transition={{ duration: 0.08, ease: 'easeOut' }}
              className="inline-block tabular-nums"
            >
              {display}
            </motion.span>
          );
        })}
        <span className="sr-only">{text}</span>
        <AnimatePresence>
          {revealedCount < characters.length && (
            <motion.span
              key="cursor"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              aria-hidden="true"
              className="inline-block ml-0.5 w-[1ch] text-[0.85em] -translate-y-0.05em opacity-80"
            >
              |
            </motion.span>
          )}
        </AnimatePresence>
      </Component>
    );
  },
);

export default SpecialText;
