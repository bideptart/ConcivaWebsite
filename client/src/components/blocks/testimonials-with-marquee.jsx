import { PhoneCall, Clock, TrendingUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { TestimonialCard } from "../ui/testimonial-card";

const PROOF_CHIPS = [
  { icon: PhoneCall, value: "2.4M+", label: "Calls handled / month" },
  { icon: Clock,     value: "62%",   label: "Average ops time saved" },
  { icon: TrendingUp,value: "3.1x",  label: "Lift in qualified leads" },
];

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}) {
  return (
    <section
      style={{ background: "#FAF8F5" }}
      className={cn("home-section overflow-hidden", className)}
    >
      {/* ── Header ── */}
      <div style={{ textAlign: "center", padding: "3.5rem 1.5rem 0" }}>
        {/* Eyebrow pill — matches reference */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            border: "1.5px solid #E2E8F0",
            borderRadius: "9999px",
            padding: "0.35rem 1rem",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#94A3B8",
            marginBottom: "1.5rem",
          }}
        >
          Loved by Operators
        </div>

        {/* Serif headline */}
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
            maxWidth: 680,
            margin: "0 auto 1rem",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            color: "#64748B",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 2rem",
          }}
        >
          {description}
        </p>

        {/* Proof chips row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {PROOF_CHIPS.map(({ icon: Icon, value, label }) => (
            <span
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.82rem",
                color: "#475569",
                background: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "9999px",
                padding: "0.45rem 1rem",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={14} strokeWidth={2.25} color="#F97316" />
              <strong style={{ fontWeight: 800, color: "#0F172A" }}>{value}</strong>
              <span style={{ color: "#64748B" }}>{label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Marquee ── */}
      <div style={{ position: "relative", overflow: "hidden", paddingBottom: "3rem" }}>
        <div
          className="group"
          style={{
            display: "flex",
            overflow: "hidden",
            padding: "0.5rem 0",
            gap: "var(--gap)",
            "--gap": "1rem",
            "--duration": "40s",
          }}
        >
          <div
            className="animate-marquee group-hover:[animation-play-state:paused]"
            style={{
              display: "flex",
              flexShrink: 0,
              gap: "var(--gap)",
            }}
          >
            {[...Array(4)].map((_, setIndex) =>
              testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`${setIndex}-${i}`}
                  {...testimonial}
                />
              ))
            )}
          </div>
        </div>

        {/* Fade edges */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "0",
            left: 0,
            width: "12%",
            background: "linear-gradient(to right, #FAF8F5, transparent)",
          }}
        />
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "0",
            left: "auto",
            right: 0,
            width: "12%",
            background: "linear-gradient(to left, #FAF8F5, transparent)",
          }}
        />
      </div>
    </section>
  );
}
