"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { doctors } from "@/data/doctors";

/* ═══════════════════════════════════════════════════
   DESIGN TOKENS — same as HeroSection & AboutPage
   ═══════════════════════════════════════════════════
   Display : Playfair Display  (headings, stat numbers)
   Body    : Inter, system-ui  (all UI text)
   Palette : Deep teal #0d3d4a · Gold #c8973a · White scale
*/
const T = {
  navy:        "#04141a",
  teal:        "#0d3d4a",
  teal2:       "#0f4a5a",
  gold:        "#c8973a",
  goldLight:   "#e4b96a",
  goldDark:    "#9a7228",
  goldMuted:   "rgba(200,151,58,0.12)",
  goldBorder:  "rgba(200,151,58,0.28)",
  white:       "#ffffff",
  white85:     "rgba(255,255,255,0.85)",
  white65:     "rgba(255,255,255,0.65)",
  white45:     "rgba(255,255,255,0.45)",
  white12:     "rgba(255,255,255,0.12)",
  white08:     "rgba(255,255,255,0.08)",
  cream:       "#f8f5ee",
  ivory:       "#f5f3ee",
  slate:       "#4a5e72",
  border:      "#dde4ee",
  blue:        "#2563a8",
  blueMuted:   "rgba(37,99,168,0.08)",
  blueBorder:  "rgba(37,99,168,0.18)",
};

const FD = "'Playfair Display', Georgia, serif";
const FB = "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";

/* ─── GLOBAL STYLES injected once ─── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:#f5f3ee;color:#0d3d4a;-webkit-font-smoothing:antialiased}

/* ── Animations ── */
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideUp{from{opacity:0;transform:translate(-50%,-44%)}to{opacity:1;transform:translate(-50%,-50%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(200,151,58,0.6)}70%{box-shadow:0 0 0 9px rgba(200,151,58,0)}100%{box-shadow:0 0 0 0 rgba(200,151,58,0)}}

/* ── Modal ── */
.dp-backdrop{position:fixed;inset:0;background:rgba(4,20,26,0.75);backdrop-filter:blur(4px);z-index:9998;animation:fadeIn 0.22s ease}
.dp-modal{
  position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
  z-index:9999;width:min(880px,94vw);max-height:90vh;
  background:#fff;border-radius:20px;overflow:hidden;
  box-shadow:0 28px 80px rgba(4,20,26,0.38),0 0 0 1px rgba(0,0,0,0.06);
  animation:slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1);
  display:flex;flex-direction:column;
}
.dp-modal-body{display:flex;flex-direction:row;overflow:hidden;flex:1}
.dp-modal-left{flex:1;padding:2rem 2rem 1.75rem;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#c7d8ef transparent;display:flex;flex-direction:column}
.dp-modal-left::-webkit-scrollbar{width:4px}
.dp-modal-left::-webkit-scrollbar-thumb{background:#c7d8ef;border-radius:4px}
.dp-modal-right{width:290px;flex-shrink:0;position:relative;background:linear-gradient(160deg,${T.teal} 0%,${T.teal2} 100%);display:flex;align-items:flex-end;justify-content:center;overflow:hidden}

/* ── Card hover ── */
.dp-card:hover{transform:translateY(-6px)!important;box-shadow:0 20px 50px rgba(4,20,26,0.13)!important;border-color:${T.goldBorder}!important}
.dp-card:hover .dp-card-bar{transform:scaleX(1)!important}
.dp-card:hover .dp-view-hint{opacity:1!important}
.dp-card:hover .dp-avatar-ring{border-color:${T.gold}!important;box-shadow:0 0 0 5px ${T.goldMuted}!important}

/* ── Filter button ── */
.dp-filter-btn{flex-shrink:0;padding:7px 18px;border-radius:24px;border:1.5px solid ${T.border};background:#fff;color:${T.slate};font-family:${FB};font-size:0.82rem;font-weight:600;cursor:pointer;transition:all 0.2s;white-space:nowrap}
.dp-filter-btn:hover{border-color:${T.gold};background:${T.goldMuted};color:${T.goldDark}}
.dp-filter-btn.active{background:${T.teal};border-color:${T.teal};color:#fff;box-shadow:0 3px 10px rgba(13,61,74,0.28)}

/* ── Load more ── */
.dp-load-more:hover{background:${T.teal2}!important;transform:translateY(-2px)}

/* ── Book btn ── */
.dp-book-btn:hover{background:linear-gradient(135deg,${T.goldDark},${T.gold})!important;box-shadow:0 8px 24px rgba(200,151,58,0.5)!important;transform:translateY(-1px)}

/* ── Modal close ── */
.dp-close:hover{background:#fee2e2!important;border-color:#fca5a5!important;color:#dc2626!important}

/* ── Search ── */
.dp-search:focus{border-color:${T.gold}!important;box-shadow:0 0 0 3px ${T.goldMuted}!important}

@media(max-width:640px){
  .dp-modal-body{flex-direction:column-reverse}
  .dp-modal-right{width:100%;height:180px;flex-shrink:0}
  .dp-modal-right img{object-position:center 20%}
  .dp-modal-left{padding:1.5rem 1.25rem 1.25rem}
  .dp-mobile-avatar{display:flex!important}
}
@media(max-width:960px){.dp-hero-floats{display:none!important}}
`;

/* ═══════════════════════════════════════════════════
   DOCTOR MODAL
═══════════════════════════════════════════════════ */
function DoctorModal({ doctor, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  if (!doctor) return null;

  const initials = doctor.name?.split(" ").slice(0, 2).map(n => n[0]).join("") || "DR";

  const infoItems = [
    doctor.qualification && { icon: "🎓", label: "Qualification", value: doctor.qualification },
    doctor.experience    && { icon: "⏱",  label: "Experience",    value: doctor.experience    },
    doctor.specialty     && { icon: "🏥", label: "Specialty",     value: doctor.specialty     },
    doctor.languages     && { icon: "🗣",  label: "Languages",     value: Array.isArray(doctor.languages) ? doctor.languages.join(", ") : doctor.languages },
    doctor.availability  && { icon: "📅", label: "Availability",  value: doctor.availability  },
    doctor.opd           && { icon: "🕐", label: "OPD Timings",   value: doctor.opd           },
    doctor.department    && { icon: "🏬", label: "Department",    value: doctor.department    },
    doctor.phone         && { icon: "📞", label: "Phone",         value: doctor.phone         },
    doctor.email         && { icon: "✉️", label: "Email",         value: doctor.email         },
  ].filter(Boolean);

  return (
    <>
      <div className="dp-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="dp-modal" role="dialog" aria-modal="true" aria-label={`Doctor profile: ${doctor.name}`}>

        {/* Close */}
        <button className="dp-close" onClick={onClose} aria-label="Close" style={{
          position: "absolute", top: 14, right: 14, zIndex: 10,
          width: 36, height: 36, borderRadius: "50%",
          border: `1.5px solid ${T.border}`, background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: T.slate, transition: "all 0.2s",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="dp-modal-body">

          {/* ── LEFT ── */}
          <div className="dp-modal-left">

            {/* Mobile avatar */}
            <div className="dp-mobile-avatar" style={{
              display: "none", width: 80, height: 80, borderRadius: "50%",
              overflow: "hidden", border: `3px solid ${T.gold}`,
              marginBottom: "1rem", boxShadow: `0 0 0 5px ${T.goldMuted}`,
            }}>
              {doctor.image
                ? <img src={doctor.image} alt={doctor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                : <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg,${T.teal},${T.teal2})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", fontWeight: 700, color: "#fff", fontFamily: FD }}>{initials}</div>
              }
            </div>

            {/* Header */}
            <div style={{ marginBottom: "1.25rem" }}>
              <h2 style={{ fontFamily: FD, fontSize: "1.5rem", fontWeight: 700, color: T.teal, margin: "0 0 0.5rem", lineHeight: 1.2 }}>
                {doctor.name}
              </h2>
              {doctor.specialty && (
                <span style={{
                  display: "inline-block", background: T.goldMuted, color: T.goldDark,
                  fontFamily: FB, fontSize: "0.74rem", fontWeight: 700,
                  padding: "4px 14px", borderRadius: 20, marginBottom: "0.5rem",
                  border: `1px solid ${T.goldBorder}`,
                }}>{doctor.specialty}</span>
              )}
              {doctor.qualification && (
                <p style={{ fontFamily: FB, fontSize: "0.82rem", color: T.slate, margin: "0.3rem 0 0", lineHeight: 1.5 }}>
                  {doctor.qualification}
                </p>
              )}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: T.border, margin: "0 0 1rem" }} />

            {/* Info list */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {infoItems.map(item => (
                <li key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{
                    fontSize: "0.95rem", flexShrink: 0, width: 32, height: 32,
                    background: T.goldMuted, border: `1px solid ${T.goldBorder}`,
                    borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}>{item.icon}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <span style={{ fontFamily: FB, fontSize: "0.66rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.7px" }}>{item.label}</span>
                    <span style={{ fontFamily: FB, fontSize: "0.87rem", color: T.teal, fontWeight: 500, lineHeight: 1.4 }}>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bio */}
            {doctor.bio && (
              <>
                <div style={{ height: 1, background: T.border, margin: "1rem 0" }} />
                <p style={{ fontFamily: FB, fontSize: "0.86rem", color: T.slate, lineHeight: 1.75, margin: 0, fontWeight: 400 }}>{doctor.bio}</p>
              </>
            )}

            {/* Book CTA */}
            <a
              href={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
              className="dp-book-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                marginTop: "1.5rem", padding: "0.85rem 1.5rem",
                background: `linear-gradient(135deg, ${T.gold}, ${T.goldLight})`,
                color: T.navy, fontFamily: FB, fontSize: "0.9rem", fontWeight: 700,
                borderRadius: 12, textDecoration: "none",
                transition: "all 0.22s", boxShadow: "0 4px 16px rgba(200,151,58,0.32)",
                letterSpacing: "0.02em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Appointment
            </a>
          </div>

          {/* ── RIGHT: Image ── */}
          <div className="dp-modal-right">
            <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
              {doctor.image
                ? <img src={doctor.image} alt={doctor.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: FD, fontSize: "5rem", fontWeight: 700, color: "rgba(255,255,255,0.12)", letterSpacing: 4 }}>{initials}</span>
                  </div>
              }
              {/* Name tag overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(4,20,26,0.88) 0%, transparent 100%)",
                padding: "1.5rem 1.2rem 1rem",
              }}>
                <div style={{ fontFamily: FD, fontSize: "0.88rem", fontWeight: 700, color: T.white, lineHeight: 1.3 }}>{doctor.name}</div>
                {doctor.experience && (
                  <div style={{ fontFamily: FB, fontSize: "0.72rem", color: T.white65, marginTop: 3, fontWeight: 500 }}>{doctor.experience} exp.</div>
                )}
              </div>
              {/* Dot deco */}
              <div style={{
                position: "absolute", top: 16, right: 16, width: 80, height: 80,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px", borderRadius: 8, pointerEvents: "none",
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   DOCTOR CARD
═══════════════════════════════════════════════════ */
function DoctorCard({ doctor, index, onOpen }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delay = `${(index % 4) * 75}ms`;
  const initials = doctor.name?.split(" ").slice(0, 2).map(n => n[0]).join("") || "DR";

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(26px)",
      transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
      display: "flex",
    }}>
      <button
        className="dp-card"
        onClick={() => onOpen(doctor)}
        aria-label={`View profile of ${doctor.name}`}
        style={{
          width: "100%", background: "#fff",
          border: `1px solid ${T.border}`,
          borderRadius: 16, overflow: "hidden",
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "0 0 1.2rem", cursor: "pointer", textAlign: "center",
          transition: "box-shadow 0.25s, transform 0.25s, border-color 0.25s",
          boxShadow: "0 2px 12px rgba(4,20,26,0.06)",
        }}
      >
        {/* Gold accent bar */}
        <div className="dp-card-bar" style={{
          width: "100%", height: 4, flexShrink: 0,
          background: `linear-gradient(90deg, ${T.teal} 0%, ${T.gold} 60%, ${T.goldLight} 100%)`,
          transform: "scaleX(0.3)", transformOrigin: "left",
          transition: "transform 0.32s ease",
        }} />

        {/* Avatar */}
        <div className="dp-avatar-ring" style={{
          marginTop: "1.2rem", width: 80, height: 80, borderRadius: "50%",
          border: `2.5px solid ${T.border}`, padding: 3,
          background: T.ivory, overflow: "hidden",
          boxShadow: `0 0 0 5px rgba(200,151,58,0.06)`,
          flexShrink: 0, transition: "border-color 0.25s, box-shadow 0.25s",
        }}>
          {doctor.image
            ? <img src={doctor.image} alt={doctor.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
            : <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: `linear-gradient(135deg, ${T.teal}, ${T.teal2})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: FD, fontSize: "1.35rem", fontWeight: 700, color: "#fff",
              }}>{initials}</div>
          }
        </div>

        {/* Info */}
        <div style={{ padding: "0.85rem 1rem 0", display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
          <h3 style={{ fontFamily: FD, fontSize: "1rem", fontWeight: 700, color: T.teal, margin: "0 0 0.35rem", lineHeight: 1.25 }}>
            {doctor.name}
          </h3>
          {doctor.specialty && (
            <span style={{
              display: "inline-block", fontFamily: FB,
              fontSize: "0.72rem", fontWeight: 700, color: T.goldDark,
              background: T.goldMuted, borderRadius: 20, padding: "3px 11px",
              marginBottom: "0.4rem", border: `1px solid ${T.goldBorder}`,
            }}>{doctor.specialty}</span>
          )}
          {doctor.qualification && (
            <p style={{ fontFamily: FB, fontSize: "0.71rem", color: T.slate, margin: "0 0 0.6rem", lineHeight: 1.4, fontWeight: 400 }}>
              {doctor.qualification}
            </p>
          )}

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
            {doctor.experience && (
              <span style={{
                display: "flex", alignItems: "center", gap: 3,
                fontFamily: FB, fontSize: "0.68rem", fontWeight: 600,
                borderRadius: 20, padding: "3px 9px",
                background: T.goldMuted, color: T.goldDark, border: `1px solid ${T.goldBorder}`,
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {doctor.experience}
              </span>
            )}
            {doctor.availability && (
              <span style={{
                display: "flex", alignItems: "center", gap: 3,
                fontFamily: FB, fontSize: "0.68rem", fontWeight: 600,
                borderRadius: 20, padding: "3px 9px",
                background: "rgba(74,222,128,0.1)", color: "#065f46",
                border: "1px solid rgba(74,222,128,0.25)",
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                {doctor.availability}
              </span>
            )}
          </div>
        </div>

        {/* View hint */}
        <div className="dp-view-hint" style={{
          display: "flex", alignItems: "center", gap: 4,
          marginTop: "0.85rem", fontFamily: FB,
          fontSize: "0.7rem", fontWeight: 700, color: T.gold,
          opacity: 0, transition: "opacity 0.2s",
        }}>
          <span>View Profile</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SPECIALTY FILTER
═══════════════════════════════════════════════════ */
function SpecialtyFilter({ specialties, active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
      {["All", ...specialties].map(s => (
        <button
          key={s}
          className={`dp-filter-btn${active === s ? " active" : ""}`}
          onClick={() => onChange(s)}
        >{s}</button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SEARCH BAR
═══════════════════════════════════════════════════ */
function SearchBar({ value, onChange }) {
  return (
    <div style={{ position: "relative", maxWidth: 340, width: "100%" }}>
      <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.slate} strokeWidth="2.2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="search"
        placeholder="Search doctors, specialties…"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="dp-search"
        aria-label="Search doctors"
        style={{
          width: "100%", padding: "10px 14px 10px 36px",
          border: `1.5px solid ${T.border}`, borderRadius: 24,
          fontFamily: FB, fontSize: "0.86rem", color: T.teal,
          background: "#fff", outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export default function DoctorsPage() {
  const [search,          setSearch]          = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [count,           setCount]           = useState(12);
  const [selectedDoctor,  setSelectedDoctor]  = useState(null);
  const [scrollY,         setScrollY]         = useState(0);
  const [heroVisible,     setHeroVisible]     = useState(false);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const specialties = [...new Set(doctors.map(d => d.specialty).filter(Boolean))].sort();

  const filtered = doctors.filter(d => {
    const matchSpec   = activeSpecialty === "All" || d.specialty === activeSpecialty;
    const q           = search.toLowerCase();
    const matchSearch = !q || d.name?.toLowerCase().includes(q) || d.specialty?.toLowerCase().includes(q) || d.qualification?.toLowerCase().includes(q);
    return matchSpec && matchSearch;
  });

  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  const openDoctor  = useCallback(d  => setSelectedDoctor(d),    []);
  const closeDoctor = useCallback(()  => setSelectedDoctor(null), []);

  /* Hero stat items */
  const heroStats = [
    { value: "150+", label: "Expert Doctors"   },
    { value: "30+",  label: "Specialties"       },
    { value: "1L+",  label: "Patients Treated"  },
    { value: "25+",  label: "Years of Trust"    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        overflow: "hidden", background: T.navy,
      }}>
        {/* Parallax bg */}
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80"
          alt="PMH Medical Team"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "115%",
            top: "-7.5%", objectFit: "cover", objectPosition: "center 30%",
            willChange: "transform",
            transform: `translateY(${scrollY * 0.18}px)`,
          }}
        />

        {/* Overlays — identical layering to home/about */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(4,14,26,0.55)" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom,
            rgba(4,20,26,0.40) 0%,
            rgba(4,20,26,0.00) 30%,
            rgba(4,20,26,0.00) 48%,
            rgba(4,20,26,0.90) 78%,
            rgba(4,20,26,1.00) 100%)`,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(105deg, rgba(13,61,74,0.58) 0%, transparent 55%)`,
        }} />

        {/* Left accent bar */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: `linear-gradient(to bottom, transparent, ${T.gold} 35%, ${T.gold} 65%, transparent)`,
          opacity: 0.65,
        }} />

        {/* Gold bottom rule */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 2, zIndex: 15,
          background: `linear-gradient(90deg, transparent, ${T.gold} 30%, ${T.goldLight} 50%, ${T.gold} 70%, transparent)`,
          opacity: 0.75,
        }} />

        {/* Floating info cards — right */}
        <div className="dp-hero-floats" style={{
          position: "absolute", right: "clamp(24px,5vw,80px)", top: "50%",
          transform: "translateY(-42%)", display: "flex", flexDirection: "column",
          gap: 14, zIndex: 12,
        }}>
          {[
            { icon: "👨‍⚕️", n: "150+", l: "Expert Specialists"  },
            { icon: "🏅",   n: "25+",  l: "Years of Excellence" },
            { icon: "🕐",   n: "24/7", l: "Emergency Care"      },
          ].map((c, i) => (
            <div key={c.l} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 20px", borderRadius: 14,
              background: "rgba(4,20,26,0.72)", border: `1px solid ${T.goldBorder}`,
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              minWidth: 210,
              opacity: 0, animation: `fadeUp 0.7s ${1.0 + i * 0.15}s ease forwards`,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                background: T.goldMuted, border: `1px solid ${T.goldBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: FD, fontSize: "1.3rem", fontWeight: 700, color: T.white, lineHeight: 1 }}>{c.n}</div>
                <div style={{ fontFamily: FB, fontSize: "11px", color: T.white45, marginTop: 3, letterSpacing: "0.06em", textTransform: "uppercase" }}>{c.l}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1280, margin: "0 auto", width: "100%",
          padding: "0 clamp(20px,4vw,52px) 88px",
        }}>
          <Breadcrumb items={[{ label: "Our Doctors", href: "/doctors" }]} />

          <div style={{ maxWidth: 660, marginTop: 26 }}>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "7px 18px 7px 12px", borderRadius: 100,
              background: T.goldMuted, border: `1px solid ${T.goldBorder}`,
              color: T.goldLight, fontFamily: FB,
              fontSize: "11.5px", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 24,
              opacity: 0, animation: "fadeUp 0.85s 0.35s ease forwards",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.gold, animation: "pulse 2.2s 1.5s infinite" }} />
              World-Class Medical Team · Latur
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: FD, fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 700, lineHeight: 1.07, color: T.white, letterSpacing: "-0.02em", marginBottom: 10 }}>
              <span style={{ display: "block", opacity: 0, animation: "fadeUp 0.85s 0.5s ease forwards" }}>Meet Our</span>
              <span style={{ display: "block", opacity: 0, animation: "fadeUp 0.85s 0.65s ease forwards" }}>Expert</span>
              <span style={{ display: "block", color: T.goldLight, fontStyle: "italic", opacity: 0, animation: "fadeUp 0.85s 0.80s ease forwards" }}>Doctors.</span>
            </h1>

            {/* Gold rule */}
            <div style={{
              width: 60, height: 2, marginTop: 22, marginBottom: 22,
              background: `linear-gradient(90deg, ${T.gold}, transparent)`,
              opacity: 0, animation: "fadeUp 0.6s 0.92s ease forwards",
            }} />

            {/* Sub */}
            <p style={{
              fontFamily: FB, fontSize: "1.05rem", color: T.white65,
              lineHeight: 1.82, maxWidth: 480, fontWeight: 400,
              opacity: 0, animation: "fadeUp 0.85s 1.0s ease forwards",
            }}>
              150+ experienced specialists committed to delivering compassionate,
              evidence-based care — all under one roof in Latur.
            </p>

            {/* Stats strip */}
            <div style={{
              display: "flex", flexWrap: "wrap",
              background: T.white08, border: `1px solid ${T.white12}`,
              borderRadius: 14, overflow: "hidden", marginTop: 32, maxWidth: 560,
              backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
              opacity: 0, animation: "fadeUp 0.85s 1.12s ease forwards",
            }}>
              {heroStats.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1, minWidth: 110, padding: "1rem 1.1rem", textAlign: "center",
                  borderRight: i < heroStats.length - 1 ? `1px solid ${T.white12}` : "none",
                  display: "flex", flexDirection: "column",
                }}>
                  <span style={{ fontFamily: FD, fontSize: "1.6rem", fontWeight: 700, color: T.white, lineHeight: 1, marginBottom: "0.25rem" }}>{s.value}</span>
                  <span style={{ fontFamily: FB, fontSize: "0.67rem", color: T.white45, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        {heroVisible && (
          <div style={{
            position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
            zIndex: 15, display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
            color: T.white45, fontFamily: FB, fontSize: "9.5px",
            letterSpacing: "0.16em", textTransform: "uppercase",
            animation: "cueFloat 2.8s 2s ease-in-out infinite",
          }}>
            <style>{`@keyframes cueFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}`}</style>
            <span>Scroll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        )}

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 100,
          background: `linear-gradient(to bottom, transparent, ${T.ivory})`,
          pointerEvents: "none",
        }} />
      </section>

      {/* ══════════════════════════════════
          DOCTORS SECTION
      ══════════════════════════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 14px", borderRadius: 100,
                background: T.goldMuted, border: `1px solid ${T.goldBorder}`,
                color: T.goldDark, fontFamily: FB, fontSize: "10.5px", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: T.goldDark }} />
                Our Medical Team
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(1.6rem,2.8vw,2.3rem)", fontWeight: 700, color: T.teal, letterSpacing: "-0.015em" }}>
                Find Your <em style={{ color: T.gold, fontStyle: "italic" }}>Specialist</em>
              </h2>
            </div>
            <p style={{ fontFamily: FB, fontSize: "0.82rem", color: T.slate, margin: 0, whiteSpace: "nowrap", fontWeight: 500 }}>
              {filtered.length} doctor{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Toolbar: search + filter */}
          <div style={{ marginBottom: "1.25rem" }}>
            <SearchBar value={search} onChange={v => { setSearch(v); setCount(12); }} />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <SpecialtyFilter
              specialties={specialties}
              active={activeSpecialty}
              onChange={s => { setActiveSpecialty(s); setCount(12); }}
            />
          </div>

          {/* Grid */}
          {visible.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.25rem",
            }}
              className="dp-grid"
            >
              <style>{`
                @media(min-width:480px){.dp-grid{grid-template-columns:repeat(2,1fr)!important}}
                @media(min-width:900px){.dp-grid{grid-template-columns:repeat(3,1fr)!important}}
                @media(min-width:1200px){.dp-grid{grid-template-columns:repeat(4,1fr)!important}}
              `}</style>
              {visible.map((d, i) => (
                <DoctorCard key={d.id} doctor={d} index={i} onOpen={openDoctor} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 0", color: T.slate, fontFamily: FB, fontSize: "0.95rem" }}>
              <p>No doctors found. Try a different search or specialty.</p>
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <button
                className="dp-load-more"
                onClick={() => setCount(c => c + 12)}
                style={{
                  padding: "0.8rem 2.5rem", background: T.teal, color: "#fff",
                  border: "none", borderRadius: 30, fontFamily: FB,
                  fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                  transition: "background 0.2s, transform 0.15s",
                  boxShadow: "0 4px 16px rgba(13,61,74,0.25)",
                }}
              >
                Load More Doctors
              </button>
            </div>
          )}
        </div>
      </section>

      <AppointmentCTA />

      {/* Modal */}
      {selectedDoctor && <DoctorModal doctor={selectedDoctor} onClose={closeDoctor} />}
    </>
  );
}