import { Phone, MapPin, Clock, Ambulance } from "lucide-react";
import { SITE_CONFIG, EMERGENCY_INFO } from "@/utils/constants";

export default function EmergencySection() {
  return (
    <>
      <div style={{
        background: "linear-gradient(135deg, #eef6ff 0%, #f0edff 50%, #edfaf4 100%)",
        borderRadius: "24px",
        padding: "2.5rem",
        margin: "2rem 0",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Soft decorative blobs */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "220px", height: "220px", borderRadius: "50%",
          background: "rgba(139,92,246,0.07)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", left: "10%",
          width: "160px", height: "160px", borderRadius: "50%",
          background: "rgba(34,197,94,0.07)", pointerEvents: "none",
        }} />

        {/* ── Top row ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.75rem",
          position: "relative", zIndex: 1,
        }}>
          {/* Live dot + heading */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ position: "relative", width: "32px", height: "32px", flexShrink: 0 }}>
              <div className="ec-pulse-ring" style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "2px solid rgba(239,68,68,0.4)",
              }} />
              <div style={{
                position: "absolute", inset: "7px", borderRadius: "50%",
                background: "#ef4444",
              }} />
            </div>
            <div>
              <div style={{
                fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.12em",
                color: "#ef4444", marginBottom: "4px",
              }}>
                Live Emergency Services
              </div>
              <h2 style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 700, margin: 0, lineHeight: 1.2,
                color: "#1e293b",
              }}>
                We're <span style={{ color: "#6366f1", fontStyle: "italic" }}>Always</span> Here For You
              </h2>
            </div>
          </div>

          {/* 24/7 badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "10px 18px",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
          }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%",
              background: "rgba(99,102,241,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Clock size={16} style={{ color: "#6366f1" }} />
            </div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", lineHeight: 1 }}>24 / 7</div>
              <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Always Open</div>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
          position: "relative", zIndex: 1,
        }} className="ec-cards">

          {/* Card 1 — Emergency Helpline */}
          <a
            href={`tel:${EMERGENCY_INFO.phone}`}
            style={{
              display: "flex", alignItems: "center", gap: "14px",
              padding: "1.1rem 1.25rem",
              border: "1px solid rgba(239,68,68,0.18)",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.18s ease, box-shadow 0.18s ease",
              boxShadow: "0 2px 12px rgba(239,68,68,0.06)",
            }}
            className="ec-card ec-card-red"
          >
            <div style={{
              width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
              border: "1px solid rgba(239,68,68,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Phone size={22} style={{ color: "#ef4444" }} />
            </div>
            <div>
              <div style={{
                fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "#ef4444", marginBottom: "4px",
              }}>Emergency Helpline</div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#1e293b", lineHeight: 1.1 }}>
                {EMERGENCY_INFO.phone}
              </div>
              <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "3px" }}>Tap to call instantly</div>
            </div>
          </a>

          {/* Card 2 — Ambulance */}
          <a
            href={`tel:${EMERGENCY_INFO.ambulance}`}
            style={{
              display: "flex", alignItems: "center", gap: "14px",
              padding: "1.1rem 1.25rem",
              border: "1px solid rgba(234,179,8,0.2)",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.18s ease, box-shadow 0.18s ease",
              boxShadow: "0 2px 12px rgba(234,179,8,0.06)",
            }}
            className="ec-card ec-card-amber"
          >
            <div style={{
              width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)",
              border: "1px solid rgba(234,179,8,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Ambulance size={22} style={{ color: "#d97706" }} />
            </div>
            <div>
              <div style={{
                fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "#d97706", marginBottom: "4px",
              }}>Ambulance Service</div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#1e293b", lineHeight: 1.1 }}>
                {EMERGENCY_INFO.ambulance}
              </div>
              <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "3px" }}>Rapid response · citywide</div>
            </div>
          </a>

          {/* Card 3 — Location */}
          <div style={{
            display: "flex", alignItems: "center", gap: "14px",
            padding: "1.1rem 1.25rem",
            border: "1px solid rgba(99,102,241,0.15)",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 2px 12px rgba(99,102,241,0.05)",
          }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
              border: "1px solid rgba(99,102,241,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <MapPin size={22} style={{ color: "#6366f1" }} />
            </div>
            <div>
              <div style={{
                fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "#6366f1", marginBottom: "4px",
              }}>Our Location</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b", lineHeight: 1.4 }}>
                {SITE_CONFIG.address}
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px", color: "#6366f1",
                  display: "inline-block", marginTop: "3px",
                  textDecoration: "none", fontWeight: 500,
                }}
              >
                Get directions →
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .ec-card-red:hover  { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(239,68,68,0.14) !important; }
        .ec-card-amber:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(234,179,8,0.14) !important; }

        @keyframes ec-ring-pulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(1.9); opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .ec-pulse-ring {
          animation: ec-ring-pulse 2s ease-out infinite;
        }
        @media (max-width: 820px) {
          .ec-cards { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .ec-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}