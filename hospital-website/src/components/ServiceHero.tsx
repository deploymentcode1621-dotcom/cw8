import Link from 'next/link'

/**
 * Professional hero for service / department pages.
 * Matches the footer theme: deep navy + sky-blue glow + wave edge.
 */
interface Stat { value: string; label: string }

interface ServiceHeroProps {
  icon: string
  name: string
  tagline: string
  description: string
  stats?: Stat[]
  nextBg?: string
}

export default function ServiceHero({
  icon,
  name,
  tagline,
  description,
  stats = [],
  nextBg = '#ffffff',
}: ServiceHeroProps) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(160deg, #0A1628 0%, #0B2447 55%, #0A3A5C 100%)' }}
    >
      {/* Soft glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.28) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 65%)' }}
      />

      {/* Fine grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(186,230,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(186,230,253,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
        }}
      />

      {/* Top shining line (same as footer) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(186,230,253,0.5) 30%, rgba(224,242,254,0.85) 50%, rgba(186,230,253,0.5) 70%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 lg:pt-32 lg:pb-48">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* ── LEFT: message ── */}
          <div className="lg:col-span-7">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-sky-200/70">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#services" className="transition-colors hover:text-white">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{name}</span>
            </nav>

            {/* Department badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-white/5 py-2 pl-2 pr-5 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/15 text-xl ring-1 ring-sky-300/30">
                {icon}
              </span>
              <span className="text-sm font-medium text-sky-100">{name} Department</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {tagline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-sky-100/75 sm:text-lg">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-7 py-3.5 text-sm font-semibold text-[#06101D] shadow-lg shadow-sky-500/25 transition hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
              >
                Book an appointment
              </Link>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-200/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
              >
                Meet our doctors
              </Link>
            </div>
          </div>

          {/* ── RIGHT: stats panel ── */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-3xl border border-sky-200/15 p-2 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))',
                boxShadow: '0 30px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(125,211,252,0.06)',
              }}
            >
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-[#0A1628]/60">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`p-6 sm:p-7 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-sky-200/10`}
                  >
                    <p className="text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
                    <p className="mt-1.5 text-sm leading-snug text-sky-100/65">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Emergency strip */}
              <div className="mt-2 flex items-center gap-4 rounded-2xl bg-sky-400/10 px-6 py-4 ring-1 ring-sky-300/15">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">Emergency care open 24/7</p>
                  <a
                    href="tel:+18005550199"
                    className="text-sm text-sky-200 transition-colors hover:text-white"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Glowing wave edge (same style as footer) ── */}
      <div className="absolute bottom-0 left-0 w-full leading-none" style={{ marginBottom: '-2px' }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: '110px' }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="heroGlow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="heroWaveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0" />
              <stop offset="25%" stopColor="#BAE6FD" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#E0F2FE" stopOpacity="1" />
              <stop offset="75%" stopColor="#BAE6FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 L0,60 C200,100 380,20 580,45 C780,70 960,115 1140,90 C1280,70 1360,40 1440,55 L1440,120 Z"
            fill={nextBg}
          />
          <path
            d="M0,60 C200,100 380,20 580,45 C780,70 960,115 1140,90 C1280,70 1360,40 1440,55"
            fill="none"
            stroke="url(#heroWaveGlow)"
            strokeWidth="2"
            filter="url(#heroGlow)"
          />
        </svg>
      </div>
    </section>
  )
}