"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, Phone, Calendar } from "lucide-react";
import { doctors } from "@/data/doctors";

const DEMO_AVATARS = [
  "https://api.dicebear.com/7.x/personas/svg?seed=DrRajeev&backgroundColor=b6e3f4",
  "https://api.dicebear.com/7.x/personas/svg?seed=DrPriya&backgroundColor=c0aede",
  "https://api.dicebear.com/7.x/personas/svg?seed=DrAmit&backgroundColor=ffd5dc",
  "https://api.dicebear.com/7.x/personas/svg?seed=DrSneha&backgroundColor=d1f4cc",
];

const ACCENT_COLORS = [
  { bg: "#e0f2fe", border: "#0891b2", text: "#0891b2", light: "#f0f9ff" },
  { bg: "#ede9fe", border: "#7c3aed", text: "#7c3aed", light: "#f5f3ff" },
  { bg: "#fce7f3", border: "#db2777", text: "#db2777", light: "#fdf2f8" },
  { bg: "#dcfce7", border: "#16a34a", text: "#16a34a", light: "#f0fdf4" },
];

function DoctorCard({ doctor, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const avatar = doctor.image || DEMO_AVATARS[index % DEMO_AVATARS.length];

  return (
    <div
      className={`dr-card dr-card-anim ${visible ? "in" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div
        className="dr-card-bar"
        style={{ background: `linear-gradient(90deg, ${accent.border}, ${accent.border}88)` }}
      />

      {/* Avatar area */}
      <div className="dr-avatar-wrap" style={{ background: accent.bg }}>
        <img
          src={avatar}
          alt={doctor.name}
          className="dr-avatar-img"
        />
        {/* Specialty badge */}
        <span
          className="dr-specialty-badge"
          style={{ background: accent.border, color: "#fff" }}
        >
          {doctor.specialization || "Specialist"}
        </span>
      </div>

      {/* Content */}
      <div className="dr-content">
        <h3 className="dr-name">{doctor.name}</h3>
        <p className="dr-exp" style={{ color: accent.text }}>
          {doctor.experience || "10+"} yrs experience
        </p>

        {/* Rating */}
        <div className="dr-rating">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={12} fill={s <= (doctor.rating || 5) ? accent.border : "transparent"} stroke={accent.border} />
          ))}
          <span className="dr-rating-text">{doctor.rating || "5.0"}</span>
        </div>

        {/* Divider */}
        <div className="dr-divider" style={{ background: accent.bg }} />

        {/* Actions */}
        <div className="dr-actions">
          <button
            className="dr-btn-book"
            style={{
              background: hovered ? accent.border : "transparent",
              color: hovered ? "#fff" : accent.text,
              borderColor: accent.border,
            }}
          >
            <Calendar size={13} />
            Book
          </button>
          <button className="dr-btn-call" style={{ color: accent.text, borderColor: `${accent.border}40` }}>
            <Phone size={13} />
          </button>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="dr-glow"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at 50% 0%, ${accent.border}18, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default function DoctorsPreview() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const featuredDoctors = doctors.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        .dr-section {
          position: relative;
          padding: 96px 0;
          background: #f0f7ff;
          font-family: 'Sora', sans-serif;
          overflow: hidden;
        }

        /* subtle dot pattern */
        .dr-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(8,145,178,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .dr-container {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 1;
        }

        /* Header row */
        .dr-header {
          display: flex; flex-direction: column;
          gap: 20px; margin-bottom: 56px;
        }
        @media (min-width: 768px) {
          .dr-header { flex-direction: row; align-items: flex-end; justify-content: space-between; }
        }
        .dr-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(8,145,178,0.08);
          border: 1px solid rgba(8,145,178,0.25);
          color: #0891b2; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          padding: 5px 14px; border-radius: 100px; width: fit-content;
          margin-bottom: 12px;
        }
        .dr-badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #0891b2;
          animation: drPulse 1.6s ease-in-out infinite;
        }
        @keyframes drPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.6)} }
        .dr-title {
          font-size: clamp(32px, 3.5vw, 46px); font-weight: 800;
          line-height: 1.1; letter-spacing: -1.5px; color: #0f172a; margin: 0 0 8px;
        }
        .dr-title-hl {
          background: linear-gradient(100deg, #0891b2 20%, #334155 80%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .dr-subtitle { color: #64748b; font-size: 15px; line-height: 1.6; margin: 0; max-width: 420px; }
        .dr-link {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #0891b2, #334155);
          color: #fff; font-size: 13px; font-weight: 700;
          padding: 12px 24px; border-radius: 100px;
          text-decoration: none; flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(8,145,178,0.25);
          transition: opacity .2s, transform .2s;
          font-family: 'Sora', sans-serif;
        }
        .dr-link:hover { opacity: 0.88; transform: translateY(-2px); }

        /* Grid */
        .dr-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) { .dr-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .dr-grid { grid-template-columns: 1fr; } }

        /* Card */
        .dr-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(8,145,178,0.1);
          overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 2px 16px rgba(8,145,178,0.06);
          transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
        }
        .dr-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 48px rgba(8,145,178,0.15);
          border-color: rgba(8,145,178,0.3);
        }

        .dr-card-bar {
          height: 4px; width: 100%; flex-shrink: 0;
        }

        /* Avatar */
        .dr-avatar-wrap {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          padding: 28px 24px 16px;
        }
        .dr-avatar-img {
          width: 96px; height: 96px;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .dr-card:hover .dr-avatar-img { transform: scale(1.06); }
        .dr-specialty-badge {
          position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.07em; padding: 3px 12px; border-radius: 100px;
          white-space: nowrap;
        }

        /* Content */
        .dr-content {
          padding: 8px 20px 20px;
          display: flex; flex-direction: column; gap: 6px; flex: 1;
        }
        .dr-name {
          font-size: 15px; font-weight: 700; color: #0f172a;
          margin: 0; line-height: 1.3; text-align: center;
        }
        .dr-exp {
          font-size: 12px; font-weight: 500; text-align: center; margin: 0;
        }
        .dr-rating {
          display: flex; align-items: center; justify-content: center; gap: 3px; margin-top: 2px;
        }
        .dr-rating-text { font-size: 12px; color: #94a3b8; margin-left: 4px; font-weight: 500; }
        .dr-divider { height: 1px; margin: 8px 0; border-radius: 1px; }

        /* Actions */
        .dr-actions { display: flex; gap: 8px; align-items: center; }
        .dr-btn-book {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;
          font-size: 12px; font-weight: 700; padding: 8px 12px;
          border-radius: 10px; border: 1.5px solid; cursor: pointer;
          transition: background .2s, color .2s;
          font-family: 'Sora', sans-serif;
        }
        .dr-btn-call {
          width: 34px; height: 34px; border-radius: 10px;
          border: 1.5px solid; background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background .2s;
          flex-shrink: 0;
        }
        .dr-btn-call:hover { background: rgba(8,145,178,0.08); }

        /* Glow overlay */
        .dr-glow {
          position: absolute; inset: 0; pointer-events: none;
          transition: opacity 0.3s ease; z-index: 0;
        }
        .dr-content, .dr-avatar-wrap, .dr-card-bar { position: relative; z-index: 1; }

        /* Scroll animation */
        .dr-card-anim {
          opacity: 0; transform: translateY(40px) scale(0.96);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.4,0.64,1);
        }
        .dr-card-anim.in { opacity: 1; transform: none; }

        /* Header anim */
        .dr-header-anim {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .dr-header-anim.in { opacity: 1; transform: none; }
      `}</style>

      <section className="dr-section" ref={sectionRef}>
        <div className="dr-container">
          {/* Header */}
          <div className={`dr-header dr-header-anim ${visible ? "in" : ""}`}>
            <div>
              <span className="dr-badge">
                <span className="dr-badge-dot" />
                Our Team
              </span>
              <h2 className="dr-title">
                Expert <span className="dr-title-hl">Specialists</span>
              </h2>
              <p className="dr-subtitle">
                150+ experienced doctors across all specializations, committed to providing the best care.
              </p>
            </div>
            <Link href="/doctors" className="dr-link">
              Meet All Doctors
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="dr-grid">
            {featuredDoctors.map((doctor, index) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                index={index}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}