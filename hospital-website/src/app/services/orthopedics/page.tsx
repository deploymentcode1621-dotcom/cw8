import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Orthopedics Department',
  description: 'MediCare Plus Orthopedics offers joint replacement, sports injury care, spine surgery, and trauma management — helping you move better and live fully.',
  alternates: { canonical: 'https://www.medicareplus.com/services/orthopedics' },
}

export default function OrthopedicsPage() {
  return (
    <ServicePageTemplate
      icon="🦴"
      name="Orthopedics"
      tagline="Move Better. Live Fully."
      description="Our Orthopedic department specialises in restoring mobility and reducing pain through evidence-based treatments, minimally invasive surgery, and personalised rehabilitation."
      heroGradient="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600"
      accentColor="bg-blue-600"
      stats={[
        { value: '8K+', label: 'Joint Replacements' },
        { value: '96%', label: 'Patient Recovery Rate' },
        { value: '18+', label: 'Orthopedic Surgeons' },
        { value: '2 Days', label: 'Avg. Hospital Stay' },
      ]}
      conditions={[
        { name: 'Osteoarthritis', desc: 'Total knee and hip replacement using robotic-arm assisted techniques for precision outcomes.' },
        { name: 'Sports Injuries', desc: 'ACL reconstruction, rotator cuff repair, and cartilage restoration for athletes at all levels.' },
        { name: 'Spinal Disorders', desc: 'Disc herniation, scoliosis, and degenerative spine conditions treated medically or surgically.' },
        { name: 'Fractures & Trauma', desc: 'Immediate trauma care, internal fixation, and complex fracture reconstruction.' },
        { name: 'Osteoporosis', desc: 'Bone density assessment, medication, and lifestyle management to prevent fragility fractures.' },
        { name: 'Paediatric Orthopedics', desc: 'Growth-related bone and joint conditions including clubfoot, hip dysplasia, and scoliosis in children.' },
      ]}
      treatments={[
        'Total Knee Replacement', 'Total Hip Replacement', 'Robotic-Arm Assisted Surgery',
        'Arthroscopy', 'ACL Reconstruction', 'Spinal Fusion', 'Disc Replacement',
        'PRP Therapy', 'Physiotherapy & Rehab', 'Trauma & Fracture Care', 'Bone Grafting',
      ]}
      doctors={[
        { name: 'Dr. James Okafor', exp: '20 yrs', initials: 'JO' },
        { name: 'Dr. Seema Pillai', exp: '13 yrs', initials: 'SP' },
        { name: 'Dr. Alex Brandt', exp: '8 yrs', initials: 'AB' },
      ]}
      faqs={[
        { q: 'How long does recovery from knee replacement take?', a: 'Most patients walk with assistance within 24 hours of surgery. Full recovery — including return to daily activities — typically takes 6–12 weeks, with physiotherapy throughout.' },
        { q: 'Is robotic surgery safer than traditional joint replacement?', a: 'Robotic-arm assisted procedures improve precision in implant positioning, which is associated with better long-term outcomes and reduced revision rates.' },
        { q: 'Can I avoid joint replacement with physiotherapy alone?', a: 'For mild-to-moderate arthritis, physiotherapy, weight management, and injections can provide significant relief. Surgery is considered when conservative management no longer controls pain or function.' },
      ]}
    />
  )
}
