import Link from "next/link";
import {
  Heart, Brain, Bone, Baby, Ribbon, Zap, Scan,
  FlaskConical, Eye, Ear, Stethoscope, Shield,
  ArrowRight, ArrowUpRight,
} from "lucide-react";

/* ── Brand tokens (same as Hero / Emergency sections) ── */
const T = {
  teal:      "#0d3d4a",
  tealDk:    "#081f26",
  tealMid:   "#0f4a5a",
  tealLt:    "#1a6070",
  gold:      "#c8973a",
  goldLt:    "#e4b96a",
  goldMuted: "rgba(200,151,58,0.12)",
  goldBdr:   "rgba(200,151,58,0.28)",
  cream:     "#f7f4ef",
  white:     "#ffffff",
  ink:       "#0d1f26",
  muted:     "#5a7a84",
  border:    "rgba(13,61,74,0.10)",
  borderMd:  "rgba(13,61,74,0.16)",
};

const FONT_BODY    = "'Inter', 'Segoe UI', system-ui, sans-serif";
const FONT_DISPLAY = "'Playfair Display', Georgia, serif";

/* ── Department data ── */
const DEPARTMENTS = [
  {
    icon: Heart,
    name: "Cardiology",
    desc: "Advanced cardiac care — angioplasty, bypass surgery, echocardiography, and 24/7 CCU monitoring.",
    tag: "Heart & Vascular",
    accent: T.teal,
  },
  {
    icon: Brain,
    name: "Neurology",
    desc: "Expert diagnosis and treatment for brain, spine, and nervous system conditions including stroke care.",
    tag: "Brain & Spine",
    accent: T.tealMid,
  },
  {
    icon: Bone,
    name: "Orthopedics",
    desc: "Complete bone, joint, and muscle care — joint replacements, arthroscopy, trauma, and sports injuries.",
    tag: "Bone & Joint",
    accent: T.teal,
  },
  {
    icon: Baby,
    name: "Gynecology & Obstetrics",
    desc: "Comprehensive women's health — high-risk pregnancies, laparoscopy, and neonatal intensive care.",
    tag: "Women's Health",
    accent: T.tealMid,
  },
  {
    icon: Stethoscope,
    name: "Pediatrics & Neonatology",
    desc: "Specialized care for newborns and children, including Level III NICU and developmental clinics.",
    tag: "Child Care",
    accent: T.teal,
  },
  {
    icon: Ribbon,
    name: "Oncology",
    desc: "Multidisciplinary cancer care — chemotherapy, radiation, surgical oncology, and palliative support.",
    tag: "Cancer Care",
    accent: T.tealMid,
  },
  {
    icon: Zap,
    name: "Emergency & Trauma",
    desc: "24/7 emergency services with a dedicated trauma bay, rapid response team, and critical care ICU.",
    tag: "Emergency",
    accent: T.teal,
  },
  {
    icon: Scan,
    name: "Diagnostics & Imaging",
    desc: "State-of-the-art MRI, CT, digital X-ray, ultrasound, and fully automated pathology laboratory.",
    tag: "Diagnostics",
    accent: T.tealMid,
  },
];

export default function ServicesSection() {
  return (
    <>
      {/*
        ─────────────────────────────────────────────────────
        SEAMLESS FLOW: This section uses the same cream (#f7f4ef)
        background as the page body so there is zero visible
        section break from the hero divider above.
        ─────────────────────────────────────────────────────
      */}
      <section style={{
        background: T.cream,
        padding: "clamp(72px,9vw,120px) clamp(24px,5vw,72px)",
        /* No border-top, no box-shadow — flows straight from sectionBg */
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* ── Header row ── */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "56px",
          }}>
            {/* Left: eyebrow + heading */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                fontFamily: FONT_BODY, fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: T.gold, marginBottom: "14px",
              }}>
                <span style={{ display: "block", width: "24px", height: "1px", background: T.gold, opacity: 0.55 }} />
                Our Specializations
              </div>

              <h2 style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2rem, 3.2vw, 3rem)",
                fontWeight: 400, lineHeight: 1.15,
                color: T.ink, letterSpacing: "-0.01em", margin: 0,
              }}>
                40+ Medical{" "}
                <em style={{ fontStyle: "italic", color: T.tealLt }}>Specializations</em>
              </h2>

              <p style={{
                fontFamily: FONT_BODY,
                fontSize: "0.9rem", fontWeight: 300,
                lineHeight: 1.8, color: T.muted,
                maxWidth: "480px", marginTop: "12px",
              }}>
                Comprehensive healthcare delivered by expert specialists using
                cutting-edge technology — under one trusted roof.
              </p>
            </div>

            {/* Right: All Services CTA */}
            <Link
              href="/services"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontFamily: FONT_BODY, fontSize: "13px", fontWeight: 600,
                color: T.teal, textDecoration: "none",
                border: `1.5px solid ${T.borderMd}`,
                borderRadius: "10px", padding: "12px 22px",
                transition: "border-color 0.2s, background 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              className="sv-all-btn"
            >
              All Services <ArrowRight size={15} />
            </Link>
          </div>

          {/* ── Department cards grid ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            border: `1px solid ${T.borderMd}`,
            borderRadius: "20px",
            overflow: "hidden",
            background: T.white,
            boxShadow: "0 4px 32px rgba(13,61,74,0.06)",
          }} className="sv-grid">

            {DEPARTMENTS.map(({ icon: Icon, name, desc, tag }, i) => {
              /* 4-col: border-right on col 1-3, border-bottom on row 1 */
              const isLastInRow  = (i + 1) % 4 === 0;
              const isLastRow    = i >= DEPARTMENTS.length - 4;
              return (
                <Link
                  key={name}
                  href={`/services/${name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="sv-card"
                  style={{
                    display: "flex", flexDirection: "column",
                    gap: "0",
                    padding: "36px 28px",
                    textDecoration: "none",
                    background: T.white,
                    borderRight: !isLastInRow ? `1px solid ${T.border}` : "none",
                    borderBottom: !isLastRow  ? `1px solid ${T.border}` : "none",
                    position: "relative", overflow: "hidden",
                    transition: "background 0.24s ease",
                  }}
                >
                  {/* top accent line — reveals on hover */}
                  <span className="sv-accent-bar" style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, ${T.teal}, ${T.gold})`,
                    transform: "scaleX(0)", transformOrigin: "left",
                    transition: "transform 0.28s ease",
                  }} />

                  {/* Tag pill */}
                  <span style={{
                    display: "inline-block",
                    fontFamily: FONT_BODY, fontSize: "9px", fontWeight: 700,
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: T.gold,
                    background: T.goldMuted,
                    border: `1px solid ${T.goldBdr}`,
                    borderRadius: "100px", padding: "4px 10px",
                    marginBottom: "18px", alignSelf: "flex-start",
                    transition: "background 0.24s, color 0.24s",
                  }} className="sv-tag">
                    {tag}
                  </span>

                  {/* Icon */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "rgba(13,61,74,0.07)", color: T.teal,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "18px",
                    transition: "background 0.24s, color 0.24s",
                  }} className="sv-icon">
                    <Icon size={22} />
                  </div>

                  {/* Name */}
                  <div style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "1.05rem", fontWeight: 600,
                    color: T.ink, lineHeight: 1.2,
                    marginBottom: "10px",
                    transition: "color 0.24s",
                  }} className="sv-name">
                    {name}
                  </div>

                  {/* Desc */}
                  <p style={{
                    fontFamily: FONT_BODY,
                    fontSize: "0.8rem", fontWeight: 300,
                    lineHeight: 1.8, color: T.muted,
                    margin: "0 0 20px",
                    flexGrow: 1,
                    transition: "color 0.24s",
                  }} className="sv-desc">
                    {desc}
                  </p>

                  {/* Learn more */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    fontFamily: FONT_BODY, fontSize: "11px", fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: T.teal,
                    borderBottom: `1.5px solid ${T.goldBdr}`,
                    paddingBottom: "2px", alignSelf: "flex-start",
                    transition: "color 0.24s, gap 0.2s",
                  }} className="sv-learn">
                    Learn More <ArrowUpRight size={12} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ── Bottom CTA strip ── */}
          <div style={{
            marginTop: "40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "16px",
            padding: "28px 36px",
            background: T.teal,
            borderRadius: "16px",
            border: `1px solid rgba(255,255,255,0.06)`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 0 4px rgba(74,222,128,0.20)",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: FONT_BODY, fontSize: "14px", fontWeight: 500,
                color: "rgba(255,255,255,0.80)",
              }}>
                Can't find your specialty?{" "}
                <span style={{ color: T.goldLt }}>We cover 40+ departments.</span>
              </span>
            </div>
            <Link
              href="/services"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontFamily: FONT_BODY, fontSize: "13px", fontWeight: 700,
                color: T.tealDk, textDecoration: "none",
                background: `linear-gradient(135deg, ${T.gold} 0%, #b8862e 100%)`,
                borderRadius: "10px", padding: "11px 22px",
                boxShadow: "0 4px 16px rgba(200,151,58,0.30)",
                transition: "transform 0.2s, filter 0.2s",
              }}
              className="sv-cta-btn"
            >
              View All Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hover interaction styles ── */}
      <style>{`
        .sv-card:hover {
          background: ${T.teal} !important;
        }
        .sv-card:hover .sv-accent-bar {
          transform: scaleX(1) !important;
        }
        .sv-card:hover .sv-tag {
          background: rgba(200,151,58,0.18) !important;
          color: ${T.goldLt} !important;
          border-color: rgba(200,151,58,0.40) !important;
        }
        .sv-card:hover .sv-icon {
          background: rgba(200,151,58,0.14) !important;
          color: ${T.goldLt} !important;
        }
        .sv-card:hover .sv-name {
          color: ${T.white} !important;
        }
        .sv-card:hover .sv-desc {
          color: rgba(255,255,255,0.42) !important;
        }
        .sv-card:hover .sv-learn {
          color: ${T.goldLt} !important;
          gap: 10px !important;
          border-bottom-color: rgba(200,151,58,0.50) !important;
        }
        .sv-all-btn:hover {
          background: ${T.teal} !important;
          color: ${T.white} !important;
          border-color: ${T.teal} !important;
        }
        .sv-cta-btn:hover {
          transform: translateY(-2px) !important;
          filter: brightness(1.06) !important;
        }

        /* Responsive grid breakpoints */
        @media (max-width: 1100px) {
          .sv-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 760px) {
          .sv-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .sv-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}