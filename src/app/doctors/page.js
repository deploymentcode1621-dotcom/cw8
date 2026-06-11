"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { doctors } from "@/data/doctors";

/* ─────────────────────────────────────────
   DOCTOR MODAL
───────────────────────────────────────── */
function DoctorModal({ doctor, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!doctor) return null;

  const initials = doctor.name
    ?.split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("") || "DR";

  const infoItems = [
    doctor.qualification && { icon: "🎓", label: "Qualification", value: doctor.qualification },
    doctor.experience    && { icon: "⏱", label: "Experience",    value: doctor.experience },
    doctor.specialty     && { icon: "🏥", label: "Specialty",     value: doctor.specialty },
    doctor.languages     && { icon: "🗣", label: "Languages",     value: Array.isArray(doctor.languages) ? doctor.languages.join(", ") : doctor.languages },
    doctor.availability  && { icon: "📅", label: "Availability",  value: doctor.availability },
    doctor.opd           && { icon: "🕐", label: "OPD Timings",   value: doctor.opd },
    doctor.department    && { icon: "🏬", label: "Department",    value: doctor.department },
    doctor.phone         && { icon: "📞", label: "Phone",         value: doctor.phone },
    doctor.email         && { icon: "✉️", label: "Email",         value: doctor.email },
  ].filter(Boolean);

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-label={`Doctor profile: ${doctor.name}`}
      >
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-body">
          {/* ── LEFT: Info panel ── */}
          <div className="modal-left">
            {/* Mobile avatar (shown only on small screens) */}
            <div className="mobile-avatar">
              {doctor.image ? (
                <img src={doctor.image} alt={doctor.name} className="mobile-avatar-img" />
              ) : (
                <div className="mobile-avatar-initials">{initials}</div>
              )}
            </div>

            <div className="modal-left-header">
              <h2 className="modal-name">{doctor.name}</h2>
              {doctor.specialty && (
                <span className="modal-specialty-badge">{doctor.specialty}</span>
              )}
              {doctor.qualification && (
                <p className="modal-qual-sub">{doctor.qualification}</p>
              )}
            </div>

            {/* Divider */}
            <div className="modal-divider" />

            {/* Info list */}
            <ul className="modal-info-list">
              {infoItems.map((item) => (
                <li key={item.label} className="modal-info-item">
                  <span className="info-icon" aria-hidden="true">{item.icon}</span>
                  <div className="info-text">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bio */}
            {doctor.bio && (
              <>
                <div className="modal-divider" />
                <p className="modal-bio">{doctor.bio}</p>
              </>
            )}

            {/* CTA */}
            <a
              href={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
              className="modal-book-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Appointment
            </a>
          </div>

          {/* ── RIGHT: Image panel ── */}
          <div className="modal-right">
            <div className="modal-img-wrap">
              {doctor.image ? (
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="modal-doctor-img"
                />
              ) : (
                <div className="modal-img-placeholder">
                  <span className="placeholder-initials">{initials}</span>
                </div>
              )}
              {/* Decorative tag at bottom of image */}
              <div className="modal-img-tag">
                <span className="img-tag-name">{doctor.name}</span>
                {doctor.experience && (
                  <span className="img-tag-exp">{doctor.experience} exp.</span>
                )}
              </div>
            </div>

            {/* Decorative pattern */}
            <div className="modal-right-deco" aria-hidden="true" />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Backdrop ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 18, 40, 0.72);
          backdrop-filter: blur(4px);
          z-index: 9998;
          animation: fadeIn 0.2s ease;
        }

        /* ── Modal container ── */
        .modal-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          width: min(900px, 94vw);
          max-height: 90vh;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(5,18,40,0.35), 0 0 0 1px rgba(0,0,0,0.06);
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
        }

        /* ── Close button ── */
        .modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid #dde5f0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #5a7295;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .modal-close:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }

        /* ── Body: two-column layout ── */
        .modal-body {
          display: flex;
          flex-direction: row;
          height: 100%;
          overflow: hidden;
        }

        /* ── LEFT panel ── */
        .modal-left {
          flex: 1;
          padding: 2rem 2rem 1.75rem;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #c7d8ef transparent;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .modal-left::-webkit-scrollbar { width: 4px; }
        .modal-left::-webkit-scrollbar-thumb { background: #c7d8ef; border-radius: 4px; }

        /* Mobile avatar — hidden on desktop */
        .mobile-avatar {
          display: none;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #2d8cff;
          margin-bottom: 1rem;
          box-shadow: 0 0 0 5px rgba(45,140,255,0.12);
        }
        .mobile-avatar-img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .mobile-avatar-initials {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #1a5fa8, #2d8cff);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; font-weight: 800; color: #fff;
        }

        .modal-left-header { margin-bottom: 1.25rem; }

        .modal-name {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0d2340;
          margin: 0 0 0.5rem;
          line-height: 1.2;
        }
        .modal-specialty-badge {
          display: inline-block;
          background: #e8f1fc;
          color: #1a5fa8;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 0.5rem;
          letter-spacing: 0.2px;
        }
        .modal-qual-sub {
          font-size: 0.82rem;
          color: #5a7295;
          margin: 0.3rem 0 0;
          line-height: 1.5;
        }

        .modal-divider {
          height: 1px;
          background: #edf2f9;
          margin: 1rem 0;
        }

        /* Info list */
        .modal-info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .modal-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .info-icon {
          font-size: 1rem;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: #f4f8ff;
          border: 1px solid #dde8f8;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .info-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .info-label {
          font-size: 0.67rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }
        .info-value {
          font-size: 0.88rem;
          color: #1e3a5f;
          font-weight: 500;
          line-height: 1.4;
        }

        /* Bio */
        .modal-bio {
          font-size: 0.86rem;
          color: #5a7295;
          line-height: 1.7;
          margin: 0;
        }

        /* Book CTA */
        .modal-book-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 1.5rem;
          padding: 0.85rem 1.5rem;
          background: linear-gradient(135deg, #1a5fa8, #2d8cff);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(26,95,168,0.3);
          letter-spacing: 0.2px;
        }
        .modal-book-btn:hover {
          background: linear-gradient(135deg, #0f3e7a, #1a5fa8);
          box-shadow: 0 6px 20px rgba(26,95,168,0.4);
          transform: translateY(-1px);
        }

        /* ── RIGHT panel ── */
        .modal-right {
          width: 300px;
          flex-shrink: 0;
          position: relative;
          background: linear-gradient(160deg, #0f2d52 0%, #1a5fa8 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }
        .modal-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }
        .modal-doctor-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .modal-img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #0f2d52 0%, #1a5fa8 100%);
        }
        .placeholder-initials {
          font-size: 5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.15);
          letter-spacing: 4px;
          user-select: none;
        }

        /* Bottom tag overlay on image */
        .modal-img-tag {
          position: absolute;
          bottom: 0;
          left: 0; right: 0;
          background: linear-gradient(to top, rgba(10,25,55,0.88) 0%, transparent 100%);
          padding: 1.5rem 1.2rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .img-tag-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .img-tag-exp {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }

        /* Decorative dots pattern */
        .modal-right-deco {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 80px;
          height: 80px;
          background-image: radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px);
          background-size: 10px 10px;
          border-radius: 8px;
          pointer-events: none;
        }

        /* ── Animations ── */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, -44%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .modal-container {
            width: 96vw;
            max-height: 92vh;
            border-radius: 16px;
          }
          .modal-body {
            flex-direction: column-reverse;
          }
          .modal-right {
            width: 100%;
            height: 200px;
            flex-shrink: 0;
          }
          .modal-doctor-img {
            object-position: center 20%;
          }
          .modal-left {
            padding: 1.5rem 1.25rem 1.25rem;
          }
          .mobile-avatar {
            display: flex;
          }
          .modal-right-deco { display: none; }
        }
      `}</style>
    </>
  );
}

/* ─────────────────────────────────────────
   ANIMATED DOCTOR CARD
───────────────────────────────────────── */
function DoctorCard({ doctor, index, onOpen }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = `${(index % 4) * 80}ms`;

  const initials = doctor.name
    ?.split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("") || "DR";

  return (
    <div
      ref={ref}
      className="card-wrapper"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
      }}
    >
      <button
        className="doc-card"
        onClick={() => onOpen(doctor)}
        aria-label={`View profile of ${doctor.name}`}
      >
        {/* Top accent bar */}
        <div className="card-accent-bar" />

        {/* Avatar */}
        <div className="card-avatar-ring">
          {doctor.image ? (
            <img src={doctor.image} alt={doctor.name} className="card-avatar-img" loading="lazy" />
          ) : (
            <div className="card-avatar-initials">{initials}</div>
          )}
        </div>

        {/* Info */}
        <div className="card-info">
          <h3 className="card-name">{doctor.name}</h3>
          {doctor.specialty && (
            <span className="card-specialty">{doctor.specialty}</span>
          )}
          {doctor.qualification && (
            <p className="card-qual">{doctor.qualification}</p>
          )}

          <div className="card-badges">
            {doctor.experience && (
              <span className="badge badge-orange">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {doctor.experience}
              </span>
            )}
            {doctor.availability && (
              <span className="badge badge-green">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                {doctor.availability}
              </span>
            )}
          </div>
        </div>

        {/* View profile hint */}
        <div className="card-view-hint">
          <span>View Profile</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </button>

      <style jsx>{`
        .card-wrapper {
          display: flex;
        }
        .doc-card {
          width: 100%;
          background: #fff;
          border: 1px solid #e4ecf7;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 1.1rem;
          cursor: pointer;
          text-align: center;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          box-shadow: 0 2px 10px rgba(0,50,110,0.06);
        }
        .doc-card:hover {
          box-shadow: 0 10px 36px rgba(0,50,110,0.14);
          transform: translateY(-5px);
          border-color: #b3cfee;
        }
        .doc-card:focus-visible {
          outline: 3px solid #2d8cff;
          outline-offset: 2px;
        }

        .card-accent-bar {
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #1a5fa8 0%, #2d8cff 60%, #7ec8ff 100%);
          flex-shrink: 0;
        }

        .card-avatar-ring {
          margin-top: 1.2rem;
          width: 82px;
          height: 82px;
          border-radius: 50%;
          border: 2.5px solid #2d8cff;
          padding: 3px;
          background: #f0f7ff;
          overflow: hidden;
          box-shadow: 0 0 0 5px rgba(45,140,255,0.1);
          flex-shrink: 0;
        }
        .card-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .card-avatar-initials {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a5fa8, #2d8cff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 1px;
        }

        .card-info {
          padding: 0.85rem 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        .card-name {
          font-size: 0.97rem;
          font-weight: 800;
          color: #0d2340;
          margin: 0 0 0.35rem;
          line-height: 1.25;
        }
        .card-specialty {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 700;
          color: #1a5fa8;
          background: #e8f1fc;
          border-radius: 20px;
          padding: 3px 11px;
          margin-bottom: 0.4rem;
        }
        .card-qual {
          font-size: 0.72rem;
          color: #6b8ab0;
          margin: 0 0 0.6rem;
          line-height: 1.4;
        }
        .card-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
        }
        .badge {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.68rem;
          font-weight: 600;
          border-radius: 20px;
          padding: 3px 9px;
        }
        .badge-orange {
          background: #fff4e6;
          color: #b45309;
          border: 1px solid #fcd38d;
        }
        .badge-green {
          background: #e6faf2;
          color: #065f46;
          border: 1px solid #6ee7b7;
        }

        .card-view-hint {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 0.85rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #2d8cff;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .doc-card:hover .card-view-hint {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   SPECIALTY FILTER
───────────────────────────────────────── */
function SpecialtyFilter({ specialties, active, onChange }) {
  return (
    <div className="filter-scroll">
      {["All", ...specialties].map((s) => (
        <button
          key={s}
          className={`filter-btn${active === s ? " active" : ""}`}
          onClick={() => onChange(s)}
        >
          {s}
        </button>
      ))}
      <style jsx>{`
        .filter-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .filter-scroll::-webkit-scrollbar { display: none; }
        .filter-btn {
          flex-shrink: 0;
          padding: 7px 18px;
          border-radius: 24px;
          border: 1.5px solid #c7d8ef;
          background: #fff;
          color: #1a5fa8;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .filter-btn:hover { border-color: #2d8cff; background: #f0f7ff; }
        .filter-btn.active {
          background: #1a5fa8;
          border-color: #1a5fa8;
          color: #fff;
          box-shadow: 0 2px 8px rgba(26,95,168,0.28);
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   SEARCH BAR
───────────────────────────────────────── */
function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8ab0" strokeWidth="2.2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="search"
        placeholder="Search doctors, specialties…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        aria-label="Search doctors"
      />
      <style jsx>{`
        .search-wrap { position: relative; max-width: 340px; width: 100%; }
        .search-icon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%); pointer-events: none;
        }
        .search-input {
          width: 100%;
          padding: 10px 14px 10px 36px;
          border: 1.5px solid #c7d8ef;
          border-radius: 24px;
          font-size: 0.86rem;
          color: #0d2340;
          background: #fff;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-input:focus {
          border-color: #2d8cff;
          box-shadow: 0 0 0 3px rgba(45,140,255,0.14);
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   STATS BANNER
───────────────────────────────────────── */
function StatsBanner() {
  const stats = [
    { value: "150+", label: "Expert Doctors" },
    { value: "30+",  label: "Specialties" },
    { value: "50K+", label: "Patients Treated" },
    { value: "25+",  label: "Years of Trust" },
  ];
  return (
    <div className="stats-banner">
      {stats.map((s) => (
        <div key={s.label} className="stat-item">
          <span className="stat-val">{s.value}</span>
          <span className="stat-lbl">{s.label}</span>
        </div>
      ))}
      <style jsx>{`
        .stats-banner {
          display: flex;
          flex-wrap: wrap;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          overflow: hidden;
          margin-top: 2.5rem;
          backdrop-filter: blur(8px);
          max-width: 580px;
        }
        .stat-item {
          flex: 1; min-width: 110px;
          padding: 1rem 1.1rem;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.12);
          display: flex; flex-direction: column;
        }
        .stat-item:last-child { border-right: none; }
        .stat-val { font-size: 1.55rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 0.25rem; }
        .stat-lbl { font-size: 0.68rem; color: rgba(255,255,255,0.55); font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [count, setCount] = useState(12);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = [...new Set(doctors.map((d) => d.specialty).filter(Boolean))].sort();

  const filtered = doctors.filter((d) => {
    const matchSpec = activeSpecialty === "All" || d.specialty === activeSpecialty;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      d.name?.toLowerCase().includes(q) ||
      d.specialty?.toLowerCase().includes(q) ||
      d.qualification?.toLowerCase().includes(q);
    return matchSpec && matchSearch;
  });

  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  const openDoctor = useCallback((doctor) => setSelectedDoctor(doctor), []);
  const closeDoctor = useCallback(() => setSelectedDoctor(null), []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="hero-bg-img"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container-custom hero-content">
          <Breadcrumb items={[{ label: "Our Doctors", href: "/doctors" }]} />
          <div className="hero-text">
            <div className="hero-eyebrow">World-Class Medical Team</div>
            <h1 className="hero-h1">
              Meet Our <span className="hero-accent">Expert Doctors</span>
            </h1>
            <p className="hero-desc">
              150+ experienced specialists committed to delivering compassionate,
              evidence-based care — all under one roof.
            </p>
            <StatsBanner />
          </div>
        </div>

        <style jsx>{`
          .hero-section {
            position: relative;
            min-height: 480px;
            display: flex;
            align-items: center;
            overflow: hidden;
          }
          .hero-bg { position: absolute; inset: 0; z-index: 0; }
          .hero-bg-img {
            width: 100%; height: 100%;
            object-fit: cover; object-position: center 25%;
            filter: saturate(0.8);
          }
          .hero-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(100deg, rgba(10,28,60,0.92) 0%, rgba(15,50,100,0.78) 55%, rgba(20,70,140,0.45) 100%);
          }
          .hero-content {
            position: relative; z-index: 1;
            padding-top: 4rem; padding-bottom: 4rem;
          }
          .hero-text { max-width: 640px; }
          .hero-eyebrow {
            display: inline-block;
            font-size: 0.7rem; font-weight: 700;
            letter-spacing: 2px; text-transform: uppercase;
            color: #7ec8ff;
            background: rgba(45,140,255,0.18);
            border: 1px solid rgba(45,140,255,0.35);
            border-radius: 20px; padding: 4px 14px;
            margin-bottom: 1rem;
          }
          .hero-h1 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800; color: #fff;
            margin: 0 0 0.8rem; line-height: 1.15;
          }
          .hero-accent { color: #7ec8ff; position: relative; }
          .hero-accent::after {
            content: '';
            position: absolute; left: 0; right: 0; bottom: -3px;
            height: 3px;
            background: linear-gradient(90deg, #2d8cff, transparent);
            border-radius: 2px;
          }
          .hero-desc {
            font-size: 1rem; color: rgba(255,255,255,0.7);
            line-height: 1.7; max-width: 460px; margin: 0;
          }
        `}</style>
      </section>

      {/* ── DOCTORS SECTION ── */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="toolbar">
            <SearchBar value={search} onChange={(v) => { setSearch(v); setCount(12); }} />
            <p className="result-count">
              {filtered.length} doctor{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="filter-wrap">
            <SpecialtyFilter
              specialties={specialties}
              active={activeSpecialty}
              onChange={(s) => { setActiveSpecialty(s); setCount(12); }}
            />
          </div>

          {visible.length > 0 ? (
            <div className="doctors-grid">
              {visible.map((doctor, i) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  index={i}
                  onOpen={openDoctor}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No doctors found. Try a different search or specialty.</p>
            </div>
          )}

          {hasMore && (
            <div className="load-more-wrap">
              <button className="load-more-btn" onClick={() => setCount((c) => c + 12)}>
                Load More Doctors
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          .toolbar {
            display: flex; align-items: center;
            justify-content: space-between;
            flex-wrap: wrap; gap: 12px;
            margin-bottom: 1.25rem;
          }
          .result-count { font-size: 0.82rem; color: #6b8ab0; margin: 0; white-space: nowrap; }
          .filter-wrap { margin-bottom: 2rem; }
          .doctors-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.25rem;
          }
          @media (min-width: 480px)  { .doctors-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 900px)  { .doctors-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (min-width: 1200px) { .doctors-grid { grid-template-columns: repeat(4, 1fr); } }
          .no-results { text-align: center; padding: 4rem 0; color: #6b8ab0; font-size: 0.95rem; }
          .load-more-wrap { text-align: center; margin-top: 2.5rem; }
          .load-more-btn {
            padding: 0.75rem 2.5rem;
            background: #1a5fa8; color: #fff;
            border: none; border-radius: 30px;
            font-size: 0.9rem; font-weight: 700;
            cursor: pointer;
            transition: background 0.2s, transform 0.15s;
            box-shadow: 0 4px 16px rgba(26,95,168,0.25);
          }
          .load-more-btn:hover { background: #0f3e7a; transform: translateY(-2px); }
        `}</style>
      </section>

      <AppointmentCTA />

      {/* ── MODAL ── */}
      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={closeDoctor} />
      )}
    </>
  );
}