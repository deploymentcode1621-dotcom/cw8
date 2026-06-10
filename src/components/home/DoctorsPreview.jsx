"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, Phone, Calendar } from "lucide-react";
import { doctors } from "@/data/doctors";

const DEMO_IMAGES = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

const ACCENTS = [
  { bar: "#e11d7a", light: "#fce7f3", text: "#e11d7a", avatarRing: "#f9a8d4" },
  { bar: "#7c3aed", light: "#ede9fe", text: "#7c3aed", avatarRing: "#c4b5fd" },
  { bar: "#db2777", light: "#fdf2f8", text: "#db2777", avatarRing: "#f9a8d4" },
  { bar: "#9333ea", light: "#f5f3ff", text: "#9333ea", avatarRing: "#d8b4fe" },
];

function DoctorCard({ doctor, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const a = ACCENTS[index % ACCENTS.length];
  const photo = doctor.image || DEMO_IMAGES[index % DEMO_IMAGES.length];

  return (
    <div
      className={`dr-card dr-anim ${visible ? "in" : ""}`}
      style={{ transitionDelay: `${index * 0.13}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow bg */}
      <div className="dr-glow" style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(ellipse at 50% 0%, ${a.bar}22, transparent 65%)` }} />

      {/* Top gradient bar */}
      <div className="dr-bar" style={{ background: `linear-gradient(90deg, ${a.bar}, ${a.bar}77)` }} />

      {/* Avatar */}
      <div className="dr-avatar-bg" style={{ background: `linear-gradient(160deg, ${a.light}, #fff)` }}>
        <div className="dr-avatar-ring" style={{ borderColor: a.avatarRing }}>
          <img src={photo} alt={doctor.name} className="dr-avatar-img" />
        </div>
        <span className="dr-spec-badge" style={{ background: a.bar }}>{doctor.specialization || "Specialist"}</span>
      </div>

      {/* Info */}
      <div className="dr-body">
        <h3 className="dr-name">{doctor.name}</h3>
        <p className="dr-exp" style={{ color: a.text }}>{doctor.experience || "12+"}  yrs experience</p>
        <div className="dr-stars">
          {[1,2,3,4,5].map(s => (
            <Star key={s} size={12} fill={s <= (doctor.rating || 5) ? a.bar : "none"} stroke={a.bar} strokeWidth={1.8} />
          ))}
          <span className="dr-rate-val">{doctor.rating || "5.0"}</span>
        </div>
        <div className="dr-sep" style={{ background: a.light }} />
        <div className="dr-actions">
          <button
            className="dr-btn-book"
            style={{
              background: hovered ? a.bar : "transparent",
              color: hovered ? "#fff" : a.text,
              borderColor: a.bar,
            }}
          >
            <Calendar size={12} /> Book
          </button>
          <button className="dr-btn-call" style={{ borderColor: `${a.bar}44`, color: a.text }}
            onMouseEnter={e => e.currentTarget.style.background = a.light}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <Phone size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DoctorsPreview() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const featuredDoctors = doctors.slice(0, 4);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        .dr-section {
          position: relative; padding: 96px 0;
          background: #fef6f8;
          font-family: 'Sora', sans-serif; overflow: hidden;
        }
        .dr-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(225,29,122,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        /* soft blobs */
        .dr-blob {
          position: absolute; border-radius: 50%;
          filter: blur(90px); opacity: 0.14; pointer-events: none;
          animation: blobFloat 9s ease-in-out infinite alternate;
        }
        .dr-blob-1 { width: 420px; height: 420px; background: #e11d7a; top: -120px; left: -80px; }
        .dr-blob-2 { width: 320px; height: 320px; background: #7c3aed; bottom: -60px; right: -60px; animation-delay: -4s; }
        @keyframes blobFloat { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(20px,16px) scale(1.08)} }

        .dr-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }

        /* Header */
        .dr-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 20px; margin-bottom: 52px; flex-wrap: wrap;
        }
        .dr-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(225,29,122,0.08); border: 1px solid rgba(225,29,122,0.25);
          color: #e11d7a; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: .12em;
          padding: 5px 14px; border-radius: 100px; width: fit-content; margin-bottom: 12px;
        }
        .dr-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #e11d7a; animation: dpulse 1.6s ease-in-out infinite; }
        @keyframes dpulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }
        .dr-title { font-size: clamp(32px,3.5vw,46px); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; color: #1e0a16; margin: 0 0 8px; }
        .dr-title-hl { background: linear-gradient(100deg, #e11d7a 20%, #7c3aed 80%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .dr-subtitle { color: #6b3a52; font-size: 15px; line-height: 1.65; margin: 0; max-width: 400px; }
        .dr-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #e11d7a, #7c3aed);
          color: #fff; font-size: 13px; font-weight: 700;
          padding: 13px 26px; border-radius: 100px; text-decoration: none;
          box-shadow: 0 6px 24px rgba(225,29,122,0.28);
          transition: opacity .2s, transform .2s; flex-shrink: 0;
          font-family: 'Sora', sans-serif;
        }
        .dr-cta:hover { opacity: .88; transform: translateY(-2px); }

        /* Grid */
        .dr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 1080px) { .dr-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .dr-grid { grid-template-columns: 1fr; } }

        /* Card */
        .dr-card {
          position: relative; background: #fff;
          border-radius: 22px; border: 1px solid rgba(225,29,122,0.1);
          overflow: hidden; display: flex; flex-direction: column;
          box-shadow: 0 2px 18px rgba(225,29,122,0.07);
          transition: transform .32s cubic-bezier(.34,1.56,.64,1), box-shadow .28s, border-color .28s;
        }
        .dr-card:hover {
          transform: translateY(-10px) scale(1.025);
          box-shadow: 0 24px 56px rgba(225,29,122,0.16);
          border-color: rgba(225,29,122,0.28);
        }
        .dr-glow { position: absolute; inset: 0; pointer-events: none; transition: opacity .3s; z-index: 0; }
        .dr-bar { height: 4px; width: 100%; position: relative; z-index: 1; }

        /* Avatar area */
        .dr-avatar-bg {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center;
          padding: 28px 20px 22px; gap: 0;
        }
        .dr-avatar-ring {
          width: 100px; height: 100px; border-radius: 50%;
          border: 3px solid; padding: 3px;
          background: #fff;
          box-shadow: 0 6px 22px rgba(225,29,122,0.15);
          transition: transform .3s ease, box-shadow .3s;
        }
        .dr-card:hover .dr-avatar-ring {
          transform: scale(1.07);
          box-shadow: 0 10px 32px rgba(225,29,122,0.22);
        }
        .dr-avatar-img {
          width: 100%; height: 100%; border-radius: 50%;
          object-fit: cover; display: block;
        }
        .dr-spec-badge {
          margin-top: 12px;
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .07em; padding: 4px 13px; border-radius: 100px;
          color: #fff; white-space: nowrap;
        }

        /* Body */
        .dr-body { position: relative; z-index: 1; padding: 4px 18px 20px; display: flex; flex-direction: column; gap: 5px; flex: 1; }
        .dr-name { font-size: 14.5px; font-weight: 700; color: #1e0a16; margin: 0; text-align: center; line-height: 1.3; }
        .dr-exp { font-size: 11.5px; font-weight: 500; text-align: center; margin: 0; }
        .dr-stars { display: flex; align-items: center; justify-content: center; gap: 2px; margin-top: 2px; }
        .dr-rate-val { font-size: 11px; color: #b07090; margin-left: 4px; font-weight: 500; }
        .dr-sep { height: 1px; margin: 8px 0; border-radius: 1px; }
        .dr-actions { display: flex; gap: 7px; align-items: center; }
        .dr-btn-book {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;
          font-size: 12px; font-weight: 700; padding: 8px 10px; border-radius: 10px;
          border: 1.5px solid; cursor: pointer; transition: background .18s, color .18s;
          font-family: 'Sora', sans-serif;
        }
        .dr-btn-call {
          width: 34px; height: 34px; border-radius: 10px; border: 1.5px solid;
          background: transparent; display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0; transition: background .18s;
        }

        /* Header + card scroll anim */
        .dr-header-anim { opacity: 0; transform: translateY(20px); transition: opacity .6s ease, transform .6s ease; }
        .dr-header-anim.in { opacity: 1; transform: none; }
        .dr-anim { opacity: 0; transform: translateY(38px) scale(.96); transition: opacity .55s ease, transform .55s cubic-bezier(.34,1.4,.64,1); }
        .dr-anim.in { opacity: 1; transform: none; }
      `}</style>

      <section className="dr-section" ref={ref}>
        <div className="dr-blob dr-blob-1" />
        <div className="dr-blob dr-blob-2" />

        <div className="dr-container">
          {/* Header */}
          <div className={`dr-header dr-header-anim ${visible ? "in" : ""}`}>
            <div>
              <span className="dr-badge"><span className="dr-badge-dot" />Our Team</span>
              <h2 className="dr-title">Expert <span className="dr-title-hl">Specialists</span></h2>
              <p className="dr-subtitle">150+ experienced doctors across all specializations, committed to providing the best care.</p>
            </div>
            <Link href="/doctors" className="dr-cta">
              Meet All Doctors <ArrowRight size={15} />
            </Link>
          </div>

          {/* Cards */}
          <div className="dr-grid">
            {featuredDoctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} visible={visible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}