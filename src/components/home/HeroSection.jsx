import Link from "next/link";
import { Phone, Calendar, Star, Shield, Award, Clock, ArrowRight, Activity, Users, HeartPulse, Stethoscope } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

/* ─── Design Tokens ───────────────────────────────────────────
   Display: 'Playfair Display' (headings only, used sparingly)
   Body:    Inter, system-ui (all UI text — unified)
   Palette: Deep teal #0d3d4a, Gold #c8973a, White/alpha scale
──────────────────────────────────────────────────────────────── */

const T = {
  gold: "#c8973a",
  goldLight: "#e4b96a",
  goldMuted: "rgba(200,151,58,0.18)",
  goldBorder: "rgba(200,151,58,0.30)",
  white: "#ffffff",
  white85: "rgba(255,255,255,0.85)",
  white65: "rgba(255,255,255,0.65)",
  white45: "rgba(255,255,255,0.45)",
  white12: "rgba(255,255,255,0.12)",
  white08: "rgba(255,255,255,0.08)",
  white06: "rgba(255,255,255,0.06)",
  teal: "#0d3d4a",
  green: "#4ade80",
  greenMuted: "rgba(74,222,128,0.15)",
  greenBorder: "rgba(74,222,128,0.30)",
  blue: "#60a5fa",
  blueMuted: "rgba(96,165,250,0.12)",
  blueBorder: "rgba(96,165,250,0.25)",
  sectionBg: "#f5f3ee",
  divider: "rgba(255,255,255,0.10)",
};

const FONT_BODY = "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";
const FONT_DISPLAY = "'Playfair Display', Georgia, serif";

const TRUST_BADGES = [
  { icon: Star, fill: true, label: "4.9 / 5 Rating", color: T.goldLight, bg: T.goldMuted, border: T.goldBorder },
  { icon: Award, fill: false, label: "25+ Yrs Excellence", color: "#34d399", bg: "rgba(52,211,153,0.10)", border: "rgba(52,211,153,0.25)" },
  { icon: Clock, fill: false, label: "24 / 7 Emergency", color: T.blue, bg: T.blueMuted, border: T.blueBorder },
  { icon: Activity, fill: false, label: "1 Lakh+ Lives", color: "#f472b6", bg: "rgba(244,114,182,0.10)", border: "rgba(244,114,182,0.25)" },
];

const STATS = [
  { value: "150+", label: "Doctors" },
  { value: "25+", label: "Years" },
  { value: "40+", label: "Specialties" },
  { value: "1L+", label: "Patients" },
];

const DEPARTMENTS = [
  { dept: "Cardiology", slots: "8 slots", icon: <HeartPulse size={16} style={{ color: T.gold }} /> },
  { dept: "Neurology", slots: "5 slots", icon: <Activity size={16} style={{ color: T.blue }} /> },
  { dept: "Orthopaedics", slots: "12 slots", icon: <Award size={16} style={{ color: "#34d399" }} /> },
  { dept: "Paediatrics", slots: "6 slots", icon: <Users size={16} style={{ color: "#f472b6" }} /> },
];

export default function HeroSection() {
  return (
    <>
      {/* ════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

        {/* ── Background Video ── */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <video
            autoPlay muted loop playsInline preload="auto"
            style={{
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",
            }}
          >
            <source src="/videos/Patil-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── Overlay 1: Pure dark left-to-right — NO teal/color tint ── */}
        {/* Key fix: only use rgba(4,20,26,…) — never the teal color mid-stop */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, rgba(4,20,26,0.68) 0%, rgba(4,20,26,0.38) 55%, rgba(4,20,26,0.10) 100%)",
        }} />

        {/* ── Overlay 2: Bottom shadow (lighter than before) ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(4,20,26,0.55) 0%, transparent 40%)",
        }} />

        {/* ── Left accent bar ── */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
          background: `linear-gradient(to bottom, transparent 0%, ${T.gold} 40%, ${T.gold} 60%, transparent 100%)`,
          opacity: 0.7,
        }} />

        {/* ── Content ── */}
        <div
          style={{
            position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px",
            margin: "0 auto", padding: "5rem 3rem",
            display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center",
          }}
          className="hero-grid"
        >

          {/* ── LEFT: Main Copy ── */}
          <div style={{ maxWidth: "680px" }}>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: T.goldMuted, border: `1px solid ${T.goldBorder}`,
              borderRadius: "100px", padding: "7px 16px",
              marginBottom: "1.75rem",
            }}>
              <Shield size={12} style={{ color: T.gold }} />
              <span style={{
                fontFamily: FONT_BODY, fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", color: T.goldLight,
              }}>
                NABH Accredited · Latur, Maharashtra
              </span>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, flexShrink: 0 }} />
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: FONT_DISPLAY,
              fontSize: "clamp(2.4rem, 5vw, 4.1rem)",
              fontWeight: 700,
              lineHeight: 1.14,
              color: T.white,
              marginBottom: "1.25rem",
              letterSpacing: "-0.015em",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}>
              Advanced Care,
              <br />
              <span style={{ color: T.goldLight }}>Trusted Healing.</span>
            </h1>

            {/* Sub-heading */}
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: "1.08rem",
              color: T.white85,
              lineHeight: 1.8,
              maxWidth: "520px",
              marginBottom: "2rem",
              fontWeight: 400,
              textShadow: "0 1px 12px rgba(0,0,0,0.30)",
            }}>
              Patil Multispeciality Hospital brings together 150+ specialist doctors,
              state-of-the-art diagnostics, and compassionate care — delivering
              world-class outcomes for every patient, every day.
            </p>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2.25rem" }}>
              {TRUST_BADGES.map(({ icon: Icon, fill, label, color, bg, border }) => (
                <div key={label} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: bg, border: `1px solid ${border}`,
                  borderRadius: "8px", padding: "7px 13px", color,
                  fontFamily: FONT_BODY, fontSize: "12px", fontWeight: 600,
                  backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
                }}>
                  <Icon size={13} {...(fill ? { fill: "currentColor" } : {})} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "3rem" }}>
              <Link href="/appointment" style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                background: `linear-gradient(135deg, ${T.gold} 0%, #b8862e 100%)`,
                color: "#0a1f26",
                padding: "14px 28px",
                borderRadius: "10px",
                fontFamily: FONT_BODY, fontWeight: 700, fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(200,151,58,0.40)",
                letterSpacing: "0.01em",
              }}>
                <Calendar size={17} />
                Book Appointment
                <ArrowRight size={15} />
              </Link>

              <a href={`tel:${SITE_CONFIG?.emergencyPhone ?? "+911234567890"}`} style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                background: T.white08,
                border: `1.5px solid ${T.white12}`,
                color: T.white85,
                padding: "14px 26px",
                borderRadius: "10px",
                fontFamily: FONT_BODY, fontWeight: 600, fontSize: "15px",
                textDecoration: "none",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}>
                <Phone size={17} />
                Emergency Call
              </a>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: `1px solid ${T.divider}`,
              paddingTop: "1.5rem",
            }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${T.divider}` : "none",
                  padding: "0 0.75rem",
                }}>
                  <div style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
                    fontWeight: 700,
                    color: T.goldLight,
                    lineHeight: 1,
                    marginBottom: "5px",
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: FONT_BODY,
                    fontSize: "11px", color: T.white45,
                    fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.09em",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Floating Info Panel (desktop only) ── */}
          <div className="hero-panel" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            {/* Today's Availability card */}
            <div style={{
              background: T.white06,
              border: `1px solid ${T.white12}`,
              borderRadius: "16px",
              padding: "20px",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <span style={{ fontFamily: FONT_BODY, color: T.white45, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                  Today's Availability
                </span>
                <span style={{
                  background: T.greenMuted, border: `1px solid ${T.greenBorder}`,
                  color: T.green, fontFamily: FONT_BODY,
                  fontSize: "11px", fontWeight: 700, borderRadius: "100px", padding: "3px 10px",
                }}>● OPEN</span>
              </div>

              {DEPARTMENTS.map(({ dept, slots, icon }) => (
                <div key={dept} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: `1px solid ${T.white08}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {icon}
                    <span style={{ fontFamily: FONT_BODY, color: T.white85, fontSize: "14px", fontWeight: 500 }}>{dept}</span>
                  </div>
                  <span style={{ fontFamily: FONT_BODY, color: T.goldLight, fontSize: "13px", fontWeight: 600 }}>{slots}</span>
                </div>
              ))}
            </div>

            {/* OPD + Emergency cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {[
                {
                  Icon: Stethoscope, iconColor: T.gold,
                  bg: `linear-gradient(135deg, rgba(200,151,58,0.16) 0%, rgba(200,151,58,0.06) 100%)`,
                  border: T.goldBorder,
                  title: "OPD Timing", lines: ["9 AM – 6 PM", "Mon – Sat"],
                },
                {
                  Icon: HeartPulse, iconColor: T.blue,
                  bg: `linear-gradient(135deg, ${T.blueMuted} 0%, rgba(96,165,250,0.04) 100%)`,
                  border: T.blueBorder,
                  title: "Emergency", lines: ["Always Open", "24 / 7 / 365"],
                },
              ].map(({ Icon, iconColor, bg, border, title, lines }) => (
                <div key={title} style={{
                  background: bg, border: `1px solid ${border}`,
                  borderRadius: "14px", padding: "18px 16px",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                }}>
                  <Icon size={22} style={{ color: iconColor, marginBottom: "10px" }} />
                  <div style={{ fontFamily: FONT_BODY, color: T.white, fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{title}</div>
                  {lines.map(l => (
                    <div key={l} style={{ fontFamily: FONT_BODY, color: T.white45, fontSize: "12px", lineHeight: 1.6 }}>{l}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Doctor count pill */}
            <div style={{
              background: T.white06,
              border: `1px solid ${T.white12}`,
              borderRadius: "12px",
              padding: "14px 18px",
              display: "flex", alignItems: "center", gap: "14px",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            }}>
              <Users size={20} style={{ color: T.goldLight, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: FONT_BODY, color: T.white, fontWeight: 700, fontSize: "14px" }}>
                  150+ Expert Specialists on Call
                </div>
                <div style={{ fontFamily: FONT_BODY, color: T.white45, fontSize: "12px", marginTop: "3px" }}>
                  Cardiologists · Neurologists · Oncologists · 40+ more
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade into next section */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "100px",
          background: `linear-gradient(to bottom, transparent, ${T.sectionBg})`,
          pointerEvents: "none",
        }} />
      </section>

      {/* ════════════════════════════════════
          SECTION DIVIDER — diagonal stripe
      ════════════════════════════════════ */}
      <div style={{ position: "relative", marginTop: "-1px", height: "72px", background: T.sectionBg, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <polygon points="0,0 1440,0 1440,72 0,72" fill={T.sectionBg} />
          <polygon points="0,72 480,0 960,72 1440,0 1440,72 0,72" fill={T.teal} opacity="0.06" />
          <polygon points="0,72 200,20 400,72 600,20 800,72 1000,20 1200,72 1440,20 1440,72" fill={T.gold} opacity="0.11" />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center", gap: "14px",
        }}>
          <div style={{ height: "1px", width: "56px", background: `linear-gradient(to right, transparent, ${T.gold})` }} />
          <span style={{
            fontFamily: FONT_BODY, fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase", color: "#b8862e",
          }}>
            Our Services
          </span>
          <div style={{ height: "1px", width: "56px", background: `linear-gradient(to left, transparent, ${T.gold})` }} />
        </div>
      </div>

      {/* ── Responsive layout styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        .hero-grid {
          grid-template-columns: 1fr !important;
        }
        .hero-panel {
          display: none !important;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 7fr 5fr !important;
            padding: 5rem 3rem !important;
          }
          .hero-panel {
            display: flex !important;
          }
        }

        @media (max-width: 600px) {
          .hero-grid {
            padding: 4rem 1.25rem !important;
          }
        }
      `}</style>
    </>
  );
}