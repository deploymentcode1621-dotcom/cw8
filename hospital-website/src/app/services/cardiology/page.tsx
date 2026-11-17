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
      {/* HERO — simple, professional: photo + navy gradient + clean text   */}
      {/* Palette: deep navy (#0A1628), white text, sky-blue accent         */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#0A1628]">
        {/* Background image */}
        <Image
          src="/images/Heart-care.jpg"
          alt="Anatomical heart model, red heart, and stethoscope on a white surface with an ECG heartbeat line"
          fill
          priority
          className="-z-20 object-cover object-center"
        />

        {/* Navy gradient: solid on the text side, fading out over the photo */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.82) 40%, rgba(10,22,40,0.35) 75%, rgba(10,22,40,0.15) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="text-lg leading-none" aria-hidden="true">❤️</span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">
                Cardiology Department
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Advanced Heart Care,
              <span className="block text-sky-300">Close to Home</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              Our Cardiology department combines preventive medicine with the
              most advanced interventional procedures in a compassionate,
              patient-first environment.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="rounded-xl bg-sky-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-sky-700"
              >
                Book an Appointment
              </a>
              <a
                href="#doctors"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0A1628]"
              >
                Meet Our Cardiologists
              </a>
            </div>
          </div>
        </div>

        {/* Thin accent line at the base */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-600 via-sky-400 to-transparent" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TEMPLATE — unchanged                                              */}
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