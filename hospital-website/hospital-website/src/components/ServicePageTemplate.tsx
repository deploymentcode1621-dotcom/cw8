import Link from 'next/link'

interface Condition { name: string; desc: string }
interface Doctor { name: string; exp: string; initials: string }
interface FAQ { q: string; a: string }

interface ServicePageProps {
  icon: string
  name: string
  tagline: string
  description: string
  heroGradient: string
  accentColor: string
  conditions: Condition[]
  treatments: string[]
  doctors: Doctor[]
  faqs: FAQ[]
  stats: { value: string; label: string }[]
}

export default function ServicePageTemplate({
  icon, name, tagline, description, heroGradient, accentColor,
  conditions, treatments, doctors, faqs, stats
}: ServicePageProps) {
  return (
    <>
     
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

      {/* CTA */}
      <section className={`${heroGradient} py-20 text-white text-center`}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-black mb-4">Start Your {name} Care Journey</h2>
          <p className="text-white/70 mb-8">Our specialists are ready to help you. Schedule your appointment today.</p>
          <Link href="/contact" className="btn-white text-primary-800">Book Your Appointment</Link>
        </div>
      </section>
    </>
  )
}
