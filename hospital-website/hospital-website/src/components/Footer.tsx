import Link from 'next/link'
import Image from "next/image"

const services = [
  { name: 'Cardiology', href: '/services/cardiology' },
  { name: 'Neurology', href: '/services/neurology' },
  { name: 'Orthopedics', href: '/services/orthopedics' },
  { name: 'Pediatrics', href: '/services/pediatrics' },
  { name: 'Gynecology', href: '/services/gynecology' },
  { name: 'Oncology', href: '/services/oncology' },
]

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden text-white">

      {/* ── WAVE TRANSITION ── */}
      <div className="relative w-full leading-none" style={{ marginBottom: '-2px' }}>
        <svg
          viewBox="0 0 1440 160"
          className="w-full block"
          style={{ height: '160px' }}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glowing wave border line */}
          <defs>
            <filter id="glow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#7DD3FC" stopOpacity="0.0" />
              <stop offset="20%"  stopColor="#BAE6FD" stopOpacity="0.9" />
              <stop offset="50%"  stopColor="#E0F2FE" stopOpacity="1.0" />
              <stop offset="80%"  stopColor="#BAE6FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Dark fill that matches footer bg */}
          <path
            d="M0,160 L0,100 C180,140 360,60 540,80 C720,100 900,155 1080,130 C1260,105 1350,60 1440,80 L1440,160 Z"
            fill="#0A1628"
          />

          {/* Glowing border stroke along the wave top */}
          <path
            d="M0,100 C180,140 360,60 540,80 C720,100 900,155 1080,130 C1260,105 1350,60 1440,80"
            fill="none"
            stroke="url(#waveGlow)"
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* ── FOOTER BODY ── */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(180deg, #0A1628 0%, #06101D 100%)',
          boxShadow: 'inset 0 1px 0 0 rgba(125, 211, 252, 0.12)',
        }}
      >
        {/* Faint sky-blue top shining border */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(186,230,253,0.0) 5%, rgba(186,230,253,0.55) 30%, rgba(224,242,254,0.85) 50%, rgba(186,230,253,0.55) 70%, rgba(186,230,253,0.0) 95%, transparent 100%)',
            boxShadow: '0 0 12px 2px rgba(125,211,252,0.25)',
          }}
        />

        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/Hospital-logo.png"
                  alt="Patil Hospital Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Patil Hospital
                  </h3>
                  <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
                    Compassion First
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Committed to advancing health outcomes through compassionate care, leading-edge technology, and a team of world-class specialists.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs font-bold text-white capitalize">
                      {social[0].toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Doctors', href: '/doctors' },
                  { name: 'Facilities', href: '/facilities' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Specialties</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.href}
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">123 Medical Center Drive<br />Healthcare City, HC 45678</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">+1 (800) 555-0199</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">info@patilhospital.com</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">Emergency: 24/7 Open<br />OPD: Mon–Sat 8AM–8PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative py-6"
          style={{
            borderTop: '1px solid rgba(125, 211, 252, 0.12)',
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Faint sky-blue bottom border glow */}
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(125,211,252,0.0) 10%, rgba(186,230,253,0.4) 35%, rgba(224,242,254,0.6) 50%, rgba(186,230,253,0.4) 65%, rgba(125,211,252,0.0) 90%, transparent 100%)',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Patil Hospital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}