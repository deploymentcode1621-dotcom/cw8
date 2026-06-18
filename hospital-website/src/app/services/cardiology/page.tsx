import type { Metadata } from 'next'
import Image from 'next/image'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Cardiology Department',
  description: 'Expert cardiac care at MediCare Plus — from preventive cardiology to complex interventional procedures, our cardiologists deliver heart-centered excellence.',
  alternates: { canonical: 'https://www.medicareplus.com/services/cardiology' },
}

export default function CardiologyPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* CUSTOM IMAGE HERO — full-bleed reference photo, light theme       */}
      {/* Sits above ServicePageTemplate; template's own hero renders below */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden min-h-[640px] flex items-center">
        {/* Background image */}
        <Image
          src="/images/Heart-care.jpg"
          alt="Anatomical heart model, red heart, and stethoscope on a white surface with an ECG heartbeat line"
          fill
          priority
          className="object-cover object-center -z-20"
        />

        {/* No white wash overlay — background image renders clean and unobscured */}

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/30 backdrop-blur px-4 py-2 shadow-sm ring-1 ring-white/20">
              <span className="text-2xl leading-none">❤️</span>
              <span className="text-sm font-semibold tracking-wide text-white">
                Cardiology Department
              </span>
            </div>

           <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
  Advanced Heart Care,
  <span className="block text-blue-900">Close to Home</span>
</h1>

            <p className="mt-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:text-xl">
              Our Cardiology department combines preventive medicine with the
              most advanced interventional procedures in a compassionate,
              patient-first environment.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="rounded-xl bg-red-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-red-700"
              >
                Book an Appointment
              </a>
              <a
                href="#doctors"
                className="rounded-xl border-2 border-white/80 bg-black/20 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                Meet Our Cardiologists
              </a>
            </div>
          </div>

          {/* Quick stat strip echoing the hero's red / steel-blue palette */}
          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: '10K+', label: 'Cardiac Procedures' },
              { value: '98%', label: 'Success Rate' },
              { value: '15+', label: 'Cardiologists' },
              { value: '24/7', label: 'Cardiac ICU' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-black/30 px-4 py-4 text-center shadow-sm ring-1 ring-white/20 backdrop-blur"
              >
                <div className="text-2xl font-bold text-red-400 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-white/90 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thin steel-blue accent line at the base, echoing the stethoscope tubing */}
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-red-600" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TEMPLATE — only props that already exist in the original code.   */}
      {/* heroGradient switched from rose/orange to a light red→blue tint   */}
      {/* so the template's own hero (which still renders) matches the     */}
      {/* photo above instead of clashing with it.                         */}
      {/* ---------------------------------------------------------------- */}
      <ServicePageTemplate
        icon="❤️"
        name="Cardiology"
        tagline="Advanced Heart Care, Close to Home"
        description="Our Cardiology department combines preventive medicine with the most advanced interventional procedures in a compassionate, patient-first environment."
        heroGradient="bg-gradient-to-br from-red-50 via-white to-blue-50"
        accentColor="bg-red-600"
        stats={[
          { value: '10K+', label: 'Cardiac Procedures' },
          { value: '98%', label: 'Success Rate' },
          { value: '15+', label: 'Cardiologists' },
          { value: '24/7', label: 'Cardiac ICU' },
        ]}
        conditions={[
          { name: 'Coronary Artery Disease', desc: 'Diagnosis and management of blocked or narrowed coronary arteries causing angina or heart attack.' },
          { name: 'Heart Failure', desc: 'Comprehensive management of chronic and acute heart failure using latest device therapies.' },
          { name: 'Arrhythmias', desc: 'Diagnosis and ablation of irregular heart rhythms including atrial fibrillation and SVT.' },
          { name: 'Valvular Heart Disease', desc: 'Repair or replacement of damaged heart valves using surgical and transcatheter techniques.' },
          { name: 'Hypertensive Heart Disease', desc: 'Structured care plans for high blood pressure and its cardiovascular complications.' },
          { name: 'Congenital Heart Defects', desc: 'Paediatric and adult congenital cardiology services from diagnosis to intervention.' },
        ]}
        treatments={[
          'Coronary Angiography & Angioplasty', 'Pacemaker Implantation', 'Electrophysiology Studies',
          'TAVR / TAVI', 'Cardiac Catheterization', 'Open Heart Surgery', 'Echocardiography',
          'Cardiac Rehabilitation', 'Holter Monitoring', 'Stress Testing', 'Device Implantation (ICD/CRT)',
        ]}
        doctors={[
          { name: 'Dr. Aanya Sharma', exp: '18 yrs', initials: 'AS' },
          { name: 'Dr. Rajan Kapoor', exp: '14 yrs', initials: 'RK' },
          { name: 'Dr. Lisa Chen', exp: '10 yrs', initials: 'LC' },
        ]}
        faqs={[
          { q: 'When should I see a cardiologist?', a: 'Visit a cardiologist if you experience chest pain, shortness of breath, palpitations, dizziness, or have risk factors such as diabetes, high blood pressure, or a family history of heart disease.' },
          { q: 'Is angioplasty painful?', a: "Angioplasty is performed under local anesthesia and sedation, so most patients feel minimal discomfort. You'll be awake but relaxed throughout the procedure." },
          { q: 'How long does cardiac rehabilitation take?', a: 'A typical cardiac rehab programme runs 6–12 weeks, with supervised exercise sessions 3 times per week alongside education and lifestyle counselling.' },
        ]}
      />
    </>
  )
}