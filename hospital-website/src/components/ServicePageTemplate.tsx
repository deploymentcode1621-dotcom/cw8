import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'

interface Condition { name: string; desc: string }
interface Doctor { name: string; exp: string; initials: string }
interface FAQ { q: string; a: string }

interface ServicePageProps {
  icon: string
  name: string
  tagline: string
  description: string
  heroGradient?: string // no longer used by the hero, kept so existing pages don't break
  accentColor: string
  conditions: Condition[]
  treatments: string[]
  doctors: Doctor[]
  faqs: FAQ[]
  stats: { value: string; label: string }[]
}

export default function ServicePageTemplate({
  icon, name, tagline, description, accentColor,
  conditions, treatments, doctors, faqs, stats
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <ServiceHero
        icon={icon}
        name={name}
        tagline={tagline}
        description={description}
        stats={stats}
        nextBg="#ffffff"
      />

      {/* Conditions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">What We Diagnose & Treat</span>
            <h2 className="section-title">Conditions We Address</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <div key={c.name} className="card p-6 group hover:border-primary-200">
                <div className={`w-10 h-10 rounded-xl ${accentColor} mb-4 flex items-center justify-center`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{c.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Advanced Procedures</span>
            <h2 className="section-title">Treatments & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {treatments.map((t) => (
              <div key={t} className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
                <span className="w-2 h-2 bg-primary-500 rounded-full" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Our Specialists</span>
            <h2 className="section-title">{name} Experts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="card p-6 flex items-center gap-5">
                <div className={`w-16 h-16 ${accentColor} rounded-2xl flex items-center justify-center text-white font-display font-black text-xl flex-shrink-0`}>
                  {d.initials}
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy">{d.name}</h3>
                  <p className="text-primary-600 text-sm">{name} Specialist</p>
                  <p className="text-gray-400 text-xs mt-0.5">{d.exp} Experience</p>
                  <Link href="/contact" className="text-xs text-primary-600 font-semibold hover:underline mt-1 inline-block">Book →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-warmgray">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-navy mb-2 flex items-start gap-3">
                  <span className="text-primary-500 font-bold text-lg leading-tight">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — always a dark navy background so the white text is readable */}
      <section
        className="relative w-full overflow-hidden py-20 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0C4A6E 100%)' }}
      >
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[48px] border-white/[0.04]" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[36px] border-white/[0.04]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-200">
            Get Started
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start Your {name} <span className="text-sky-300">Care Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Our specialists are ready to help you. Schedule your appointment today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-xl bg-sky-500 px-9 py-4 text-base font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-sky-400 sm:w-auto"
            >
              Book Your Appointment
            </Link>
            <a
              href="tel:+918001234567"
              className="w-full rounded-xl border border-white/40 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0A1628] sm:w-auto"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}