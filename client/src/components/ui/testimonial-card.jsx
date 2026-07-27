import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { TrendingUp } from "lucide-react";

export function TestimonialCard({ author, text, badge, href, className }) {
  const Card = href ? "a" : "div";

  /* initials from name */
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  /* badge colours */
  const badgeStyle = badge
    ? {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        fontSize: "0.68rem",
        fontWeight: 800,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: badge.color,
        background: badge.bg,
        border: `1.5px solid ${badge.border}`,
        borderRadius: "9999px",
        padding: "0.25rem 0.65rem",
        whiteSpace: "nowrap",
      }
    : null;

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 280,
        minWidth: 280,
        background: "#FFFFFF",
        border: "1px solid #F1F5F9",
        borderRadius: "16px",
        padding: "1.1rem 1.25rem 1.25rem",
        textDecoration: "none",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
        cursor: href ? "pointer" : "default",
        flexShrink: 0,
      }}
      className={className}
      onMouseEnter={href ? (e) => {
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.10)";
        e.currentTarget.style.borderColor = "#FED7AA";
      } : undefined}
      onMouseLeave={href ? (e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#F1F5F9";
      } : undefined}
    >
      {/* Top row: badge + quote icon */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        {badge ? (
          <span style={badgeStyle}>
            <TrendingUp size={10} strokeWidth={2.5} />
            {badge.label}
          </span>
        ) : <span />}
        <span style={{ fontSize: "1.6rem", lineHeight: 1, color: "#E2E8F0", marginTop: "-4px" }}>"</span>
      </div>

      {/* Quote text — 3 line clamp */}
      <p style={{
        fontSize: "0.85rem",
        color: "#475569",
        lineHeight: 1.65,
        margin: "0 0 1rem",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        flex: 1,
      }}>
        "{text}"
      </p>

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
        <Avatar className="h-9 w-9" style={{ flexShrink: 0 }}>
          <AvatarFallback style={{
            background: "linear-gradient(135deg, #F97316, #EA580C)",
            color: "white",
            fontSize: "0.75rem",
            fontWeight: 700,
          }}>
            {initials}
          </AvatarFallback>
        </Avatar>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {author.name}
          </div>
          <div style={{ fontSize: "0.72rem", color: "#94A3B8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {author.handle}
          </div>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: "1px", flexShrink: 0 }}>
          {[1,2,3,4,5].map((s) => (
            <span key={s} style={{ color: "#F97316", fontSize: "0.75rem" }}>★</span>
          ))}
        </div>
      </div>
    </Card>
  );
}
