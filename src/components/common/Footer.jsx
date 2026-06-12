import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/utils/constants";

const footerLinks = {
  quickLinks: [
    { label: "About Us",         href: "/about"       },
    { label: "Our Doctors",      href: "/doctors"     },
    { label: "Services",         href: "/services"    },
    { label: "Facilities",       href: "/facilities"  },
    { label: "Book Appointment", href: "/appointment" },
    { label: "Contact Us",       href: "/contact"     },
  ],
  services: [
    { label: "Cardiology",  href: "/services/cardiology"  },
    { label: "Neurology",   href: "/services/neurology"   },
    { label: "Orthopedics", href: "/services/orthopedics" },
    { label: "Gynecology",  href: "/services/gynecology"  },
    { label: "Pediatrics",  href: "/services/pediatrics"  },
    { label: "Oncology",    href: "/services/oncology"    },
  ],
  policies: [
    { label: "Privacy Policy",     href: "/privacy-policy"  },
    { label: "Terms & Conditions", href: "/terms-condition" },
    { label: "FAQ",                href: "/faq"             },
    { label: "Blog",               href: "/blog"            },
    { label: "Sitemap",            href: "/sitemap.xml"     },
  ],
};

const SOCIALS = [
  { label: "Facebook",  href: "#", icon: "ti-brand-facebook"  },
  { label: "Instagram", href: "#", icon: "ti-brand-instagram" },
  { label: "Twitter/X", href: "#", icon: "ti-brand-x"        },
  { label: "YouTube",   href: "#", icon: "ti-brand-youtube"   },
  { label: "LinkedIn",  href: "#", icon: "ti-brand-linkedin"  },
];

const CONTACT = [
  { icon: "ti-map-pin",    content: <p>{SITE_CONFIG.address}</p> },
  {
    icon: "ti-phone-call",
    content: (
      <div>
        <a href={`tel:${SITE_CONFIG.phone}`} className="fw-cl fw-block">{SITE_CONFIG.phone}</a>
        <span className="fw-emerg fw-block fw-mt1">Emergency: {SITE_CONFIG.emergencyPhone}</span>
      </div>
    ),
  },
  { icon: "ti-mail",  content: <a href={`mailto:${SITE_CONFIG.email}`} className="fw-cl">{SITE_CONFIG.email}</a> },
  {
    icon: "ti-clock",
    content: (
      <div>
        OPD: Mon–Sat, 8 AM – 8 PM
        <div className="fw-open fw-mt1">Emergency: 24 / 7</div>
      </div>
    ),
  },
];

const quickIcons   = ["ti-building-hospital","ti-stethoscope","ti-heart-rate-monitor","ti-building","ti-calendar-plus","ti-headset"];
const serviceIcons = ["ti-heart","ti-brain","ti-bone","ti-gender-female","ti-baby-carriage","ti-dna"];

const STATS = [
  { icon: "ti-calendar-stats", num: "25+",  lbl: "Years of Care"   },
  { icon: "ti-users",          num: "50K+", lbl: "Patients Served" },
  { icon: "ti-stethoscope",    num: "120+", lbl: "Expert Doctors"  },
  { icon: "ti-bed",            num: "300+", lbl: "Hospital Beds"   },
  { icon: "ti-trophy",         num: "40+",  lbl: "Awards Won"      },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />

      <style>{`
        .fw { font-family: 'Inter','Helvetica Neue',Arial,sans-serif; }
        .fw *, .fw *::before, .fw *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .fw-block { display: block; }
        .fw-mt1   { margin-top: 4px; }

        .fw-wrap {
          background: linear-gradient(135deg,
            #FAF7F2 0%,
            #F5EFE6 25%,
            #EDE6D8 50%,
            #F0EAE0 75%,
            #F5EFE6 100%
          );
          position: relative; overflow: hidden; color: #5C4A37;
        }

        .fw-overlay {
          position: absolute; inset: 0;
          background: rgba(245,239,230,0.18);
          pointer-events: none; z-index: 0;
        }

        .fw-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .fw-orb1 { width: 420px; height: 420px; background: rgba(201,169,110,0.18); top: -100px; left: -80px; }
        .fw-orb2 { width: 360px; height: 360px; background: rgba(212,196,176,0.22); top: 0;      right: 10%; }
        .fw-orb3 { width: 300px; height: 300px; background: rgba(237,230,216,0.30); bottom: -80px; right: -60px; }
        .fw-orb4 { width: 280px; height: 280px; background: rgba(255,248,238,0.35); bottom: 0;  left: 30%; }

        .fw-topbar {
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.7) 40%, rgba(160,133,106,0.5) 70%, transparent);
          position: relative; z-index: 2;
        }

        .fw-main {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 56px 40px 44px;
          display: grid; grid-template-columns: 1.35fr 1fr 1fr 1.2fr; gap: 44px;
        }

        .fw-col {
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.78);
          border-radius: 18px; padding: 28px 24px;
          backdrop-filter: blur(12px);
        }

        .fw-logo-wrap { display: flex; align-items: center; gap: 13px; text-decoration: none; margin-bottom: 14px; }
        .fw-logo-img  { width: 50px; height: 50px; border-radius: 12px; object-fit: contain; border: 1.5px solid rgba(201,169,110,0.5); background: rgba(255,255,255,0.6); padding: 4px; flex-shrink: 0; }
        .fw-logo-name { font-family: 'Georgia',serif; font-size: 1.02rem; color: #3D2B1F; line-height: 1.35; }
        .fw-logo-tag  { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #A0856A; margin-top: 3px; display: block; }

        .fw-accred {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(201,169,110,0.15); border: 1px solid rgba(201,169,110,0.4);
          border-radius: 100px; padding: 4px 12px;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
          color: #A0856A; margin-bottom: 14px;
        }

        .fw-tagline { font-size: 0.81rem; line-height: 1.85; color: #7A6654; margin-bottom: 20px; }

        .fw-socials { display: flex; gap: 8px; flex-wrap: wrap; }
        .fw-social-btn {
          width: 36px; height: 36px; border: 1px solid rgba(160,133,106,0.4); border-radius: 9px;
          background: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center;
          color: #A0856A; text-decoration: none; font-size: 16px;
          transition: background .2s, transform .2s;
        }
        .fw-social-btn:hover { background: rgba(201,169,110,0.25); transform: translateY(-3px); color: #5C4A37; }

        .fw-col-head {
          font-family: 'Georgia',serif; font-size: 0.92rem; font-weight: 400;
          color: #3D2B1F; letter-spacing: 0.02em; margin-bottom: 16px;
          display: flex; align-items: center; gap: 9px;
        }
        .fw-col-head i { color: #C9A96E; }
        .fw-col-head::after { content: ''; flex: 1; height: 1px; background: rgba(201,169,110,0.35); }

        .fw-list { list-style: none; display: flex; flex-direction: column; gap: 3px; }
        .fw-list a {
          font-size: 0.81rem; color: #7A6654; text-decoration: none;
          display: flex; align-items: center; gap: 9px;
          padding: 6px 9px; border-radius: 8px;
          transition: background .18s, padding-left .18s, color .18s;
        }
        .fw-list a:hover { background: rgba(201,169,110,0.15); color: #3D2B1F; padding-left: 13px; }
        .fw-list i { font-size: 14px; color: #C9A96E; flex-shrink: 0; }
        .fw-list a:hover i { color: #A0856A; }

        .fw-clist { display: flex; flex-direction: column; gap: 13px; }
        .fw-citem { display: flex; align-items: flex-start; gap: 11px; }
        .fw-cicon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 9px;
          background: rgba(201,169,110,0.18); border: 1px solid rgba(201,169,110,0.4);
          display: flex; align-items: center; justify-content: center; color: #C9A96E; font-size: 16px; margin-top: 1px;
        }
        .fw-ctext { font-size: 0.8rem; color: #7A6654; line-height: 1.7; }
        .fw-cl    { color: #7A6654; text-decoration: none; transition: color .2s; }
        .fw-cl:hover { color: #3D2B1F; }
        .fw-emerg { color: #B87333; font-weight: 700; }
        .fw-open  { color: #6B8C5A; font-weight: 700; }

        .fw-stats {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 0 40px 36px;
          display: grid; grid-template-columns: repeat(5,1fr); gap: 12px;
        }
        .fw-stat {
          background: rgba(255,255,255,0.50); border: 1px solid rgba(255,255,255,0.75);
          border-radius: 14px; text-align: center; padding: 20px 10px;
          backdrop-filter: blur(10px); transition: background .2s, transform .2s;
        }
        .fw-stat:hover { background: rgba(255,255,255,0.72); transform: translateY(-3px); }
        .fw-stat i         { display: block; font-size: 22px; color: #C9A96E; margin-bottom: 8px; opacity: 0.9; }
        .fw-stat-num       { font-family: 'Georgia',serif; font-size: 1.45rem; color: #3D2B1F; line-height: 1; margin-bottom: 4px; }
        .fw-stat-lbl       { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #A0856A; }

        .fw-divider      { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        .fw-divider-line { height: 1px; background: linear-gradient(90deg, transparent, rgba(160,133,106,0.4), rgba(201,169,110,0.55), rgba(160,133,106,0.4), transparent); }

        .fw-bottom {
          position: relative; z-index: 2; max-width: 1280px; margin: 0 auto;
          padding: 20px 40px; display: flex; align-items: center;
          justify-content: space-between; gap: 14px; flex-wrap: wrap;
          background: rgba(92,74,55,0.07); backdrop-filter: blur(8px);
        }
        .fw-copy   { font-size: 0.73rem; color: #8B7D6B; }
        .fw-policies { display: flex; align-items: center; gap: 13px; flex-wrap: wrap; }
        .fw-plink  { font-size: 0.69rem; color: #8B7D6B; text-decoration: none; transition: color .2s; }
        .fw-plink:hover { color: #3D2B1F; }
        .fw-pdot   { width: 3px; height: 3px; border-radius: 50%; background: rgba(160,133,106,0.5); }
        .fw-made   { font-size: 0.69rem; color: #8B7D6B; display: flex; align-items: center; gap: 5px; }
        .fw-heart  { color: #D4847A; font-size: 13px; }

        @media (max-width: 1024px) {
          .fw-main  { grid-template-columns: 1fr 1fr; gap: 28px; }
          .fw-stats { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 640px) {
          .fw-main   { grid-template-columns: 1fr; padding: 40px 20px 32px; }
          .fw-stats  { grid-template-columns: repeat(2,1fr); padding: 0 20px 28px; }
          .fw-bottom { flex-direction: column; text-align: center; padding: 16px 20px; }
          .fw-policies { justify-content: center; }
          .fw-divider  { padding: 0 20px; }
        }
      `}</style>

      <footer className="fw">
        <div className="fw-wrap">
          <div className="fw-overlay" />
          <div className="fw-orb fw-orb1" />
          <div className="fw-orb fw-orb2" />
          <div className="fw-orb fw-orb3" />
          <div className="fw-orb fw-orb4" />

          <div className="fw-topbar" />

          <div className="fw-main">
            {/* Brand */}
            <div className="fw-col">
              <Link href="/" className="fw-logo-wrap">
                <Image src="/images/Hospital-logo.png" alt="Patil Hospital Logo" width={50} height={50} className="fw-logo-img" />
                <div>
                  <span className="fw-logo-name">Patil Multispeciality<br />Hospital</span>
                  <span className="fw-logo-tag">Caring for Life</span>
                </div>
              </Link>
              <div className="fw-accred"><i className="ti ti-rosette" aria-hidden="true" /> NABH Accredited</div>
              <p className="fw-tagline">{SITE_CONFIG.tagline}. Excellence in healthcare since {SITE_CONFIG.established}. Your health, our commitment.</p>
              <div className="fw-socials">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="fw-social-btn">
                    <i className={`ti ${icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="fw-col">
              <h3 className="fw-col-head"><i className="ti ti-layout-list" aria-hidden="true" /> Quick Links</h3>
              <ul className="fw-list">
                {footerLinks.quickLinks.map((link, i) => (
                  <li key={link.href}>
                    <Link href={link.href}><i className={`ti ${quickIcons[i]}`} aria-hidden="true" />{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="fw-col">
              <h3 className="fw-col-head"><i className="ti ti-activity" aria-hidden="true" /> Our Services</h3>
              <ul className="fw-list">
                {footerLinks.services.map((link, i) => (
                  <li key={link.href}>
                    <Link href={link.href}><i className={`ti ${serviceIcons[i]}`} aria-hidden="true" />{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="fw-col">
              <h3 className="fw-col-head"><i className="ti ti-address-book" aria-hidden="true" /> Contact Us</h3>
              <div className="fw-clist">
                {CONTACT.map(({ icon, content }, i) => (
                  <div className="fw-citem" key={i}>
                    <div className="fw-cicon"><i className={`ti ${icon}`} aria-hidden="true" /></div>
                    <div className="fw-ctext">{content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="fw-stats">
            {STATS.map(({ icon, num, lbl }) => (
              <div className="fw-stat" key={lbl}>
                <i className={`ti ${icon}`} aria-hidden="true" />
                <div className="fw-stat-num">{num}</div>
                <div className="fw-stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>

          <div className="fw-divider"><div className="fw-divider-line" /></div>

          <div className="fw-bottom">
            <p className="fw-copy">© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="fw-policies">
              {footerLinks.policies.map((link, i) => (
                <>
                  {i > 0 && <div key={`dot-${i}`} className="fw-pdot" />}
                  <Link key={link.href} href={link.href} className="fw-plink">{link.label}</Link>
                </>
              ))}
            </div>
            <p className="fw-made">Made with <i className="ti ti-heart fw-heart" aria-hidden="true" /> in India</p>
          </div>
        </div>
      </footer>
    </>
  );
}