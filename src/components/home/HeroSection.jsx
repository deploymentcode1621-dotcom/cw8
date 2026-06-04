import Link from "next/link";
import { Phone, Calendar, Star, Shield, Award, Clock, ArrowRight, Activity, Users, HeartPulse, Stethoscope } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/utils/constants";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* ── BACKGROUND HOSPITAL IMAGE with deep overlay ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Multi-layer overlay: rich deep teal gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e38]/97 via-[#0d3d4a]/90 to-[#0a2e38]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e26]/80 via-transparent to-transparent" />

        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative accent — glowing orb top right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #c8973a 0%, transparent 70%)" }}
        />

        {/* ── VERTICAL ACCENT BAR left edge ── */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c8973a] to-transparent opacity-60" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── LEFT CONTENT ── */}
            <div className="lg:col-span-7">

              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2.5 mb-7"
                style={{
                  background: "rgba(200, 151, 58, 0.12)",
                  border: "1px solid rgba(200, 151, 58, 0.35)",
                  borderRadius: "100px",
                  padding: "8px 18px",
                }}>
                <Shield size={13} style={{ color: "#dc2626" }} />
                <span style={{
                  color: "#450a0a,",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  NABH Accredited · Latur, Maharashtra
                </span>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              </div>

              {/* Main heading */}
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#1e3a5f",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}>
                Advanced Care,{" "}
                <br />
                <span style={{
                  color: "#14532d",
                }}>
                  Trusted Healing.
                </span>
              </h1>

              <p style={{
                fontSize: "1.1rem",
                color: "#1e1b4b (255,255,255,0.68)",
                lineHeight: 1.75,
                maxWidth: "540px",
                marginBottom: "2.2rem",
                fontWeight: 400,
              }}>
                Patil Multispeciality Hospital brings together 150+ specialist doctors,
                state-of-the-art diagnostics, and compassionate care — delivering world-class
                outcomes for every patient, every day.
              </p>

              {/* Trust badges row */}
              <div className="flex flex-wrap gap-3 mb-9">
                {[
                  { icon: <Star size={13} fill="currentColor" />, label: "4.9 / 5 Rating", color: "#c8973a", bg: "rgba(200,151,58,0.12)", border: "rgba(200,151,58,0.3)" },
                  { icon: <Award size={13} />, label: "25+ Yrs Excellence", color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)" },
                  { icon: <Clock size={13} />, label: "24/7 Emergency", color: "#60a5fa", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.25)" },
                  { icon: <Activity size={13} />, label: "1L+ Lives Cared", color: "#f472b6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.25)" },
                ].map(({ icon, label, color, bg, border }) => (
                  <div key={label} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: bg, border: `1px solid ${border}`,
                    borderRadius: "8px", padding: "7px 13px", color,
                    fontSize: "12px", fontWeight: 600,
                  }}>
                    {icon} {label}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/appointment" style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  background: "linear-gradient(135deg, #b8862e 0%, #0891b2 100%)",
                  color: "#fff",
                  padding: "14px 30px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(200,151,58,0.35)",
                  letterSpacing: "0.01em",
                }}>
                  <Calendar size={17} />
                  Book Appointment
                  <ArrowRight size={15} />
                </Link>

                <a href={`tel:${SITE_CONFIG?.emergencyPhone || "+911234567890"}`} style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                }}>
                  <Phone size={17} />
                  Emergency Call
                </a>
              </div>

              {/* Stats row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "1.5rem",
              }}>
                {[
                  { value: "150+", label: "Doctors" },
                  { value: "25+", label: "Years" },
                  { value: "40+", label: "Specialties" },
                  { value: "1L+", label: "Patients" },
                ].map((stat, i) => (
                  <div key={stat.label} style={{
                    textAlign: "center",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    padding: "0 1rem",
                  }}>
                    <div style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      color: "#e4b96a",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}>{stat.value}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT CONTENT — Floating Info Panel ── */}
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">

              {/* Availability card */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px 22px",
                backdropFilter: "blur(16px)",
              }}>
                <div className="flex items-center justify-between mb-4">
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                    Today's Availability
                  </span>
                  <span style={{
                    background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)",
                    color: "#4ade80", fontSize: "11px", fontWeight: 700, borderRadius: "100px", padding: "3px 10px",
                  }}>● OPEN</span>
                </div>
                {[
                  { dept: "Cardiology", slots: "8 slots", icon: "❤️" },
                  { dept: "Neurology", slots: "5 slots", icon: "🧠" },
                  { dept: "Orthopaedics", slots: "12 slots", icon: "🦴" },
                  { dept: "Paediatrics", slots: "6 slots", icon: "👶" },
                ].map(({ dept, slots, icon }) => (
                  <div key={dept} className="flex items-center justify-between" style={{
                    padding: "9px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}>
                    <div className="flex items-center gap-2.5">
                      <span style={{ fontSize: "16px" }}>{icon}</span>
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500 }}>{dept}</span>
                    </div>
                    <span style={{ color: "#e4b96a", fontSize: "13px", fontWeight: 600 }}>{slots}</span>
                  </div>
                ))}
              </div>

              {/* Quick contact cards */}
              <div className="grid grid-cols-2 gap-4">
                <div style={{
                  background: "linear-gradient(135deg, rgba(200,151,58,0.18) 0%, rgba(200,151,58,0.08) 100%)",
                  border: "1px solid rgba(200,151,58,0.25)",
                  borderRadius: "14px",
                  padding: "18px 16px",
                  backdropFilter: "blur(12px)",
                }}>
                  <Stethoscope size={22} style={{ color: "#e4b96a", marginBottom: "10px" }} />
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>OPD Timing</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>9 AM – 6 PM</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Mon – Sat</div>
                </div>
                <div style={{
                  background: "linear-gradient(135deg, rgba(96,165,250,0.15) 0%, rgba(96,165,250,0.06) 100%)",
                  border: "1px solid rgba(96,165,250,0.22)",
                  borderRadius: "14px",
                  padding: "18px 16px",
                  backdropFilter: "blur(12px)",
                }}>
                  <HeartPulse size={22} style={{ color: "#60a5fa", marginBottom: "10px" }} />
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>Emergency</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Always Open</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>24 / 7 / 365</div>
                </div>
              </div>

              {/* Doctor count pill */}
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "14px 18px",
                display: "flex", alignItems: "center", gap: "14px",
                backdropFilter: "blur(12px)",
              }}>
                <Users size={20} style={{ color: "#e4b96a", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>150+ Expert Specialists on Call</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginTop: "2px" }}>
                    Cardiologists · Neurologists · Oncologists · and 40+ more
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── BOTTOM FADE for section transition ── */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #f5f3ee)" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
           UNIQUE SECTION TRANSITION — Diagonal Stripe Divider
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative -mt-1 overflow-hidden" style={{ height: "80px", background: "#f5f3ee" }}>
        {/* Diagonal colored accent stripe */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <polygon points="0,0 1440,0 1440,80 0,80" fill="#f5f3ee" />
          <polygon points="0,80 480,0 960,80 1440,0 1440,80 0,80" fill="#0d3d4a" opacity="0.06" />
          <polygon points="0,80 200,20 400,80 600,20 800,80 1000,20 1200,80 1440,20 1440,80" fill="#c8973a" opacity="0.12" />
        </svg>
        {/* Center label */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "12px",
        }}>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c8973a)" }} />
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#b8862e",
          }}>
            Our Services
          </span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c8973a)" }} />
        </div>
      </div>
    </>
  );
}