import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Gynecology & Obstetrics Department',
  description: "MediCare Plus Women's Health offers comprehensive gynecology, maternity, and reproductive care in a compassionate, private environment with expert obstetricians and gynaecologists.",
  alternates: { canonical: 'https://www.medicareplus.com/services/gynecology' },
}

export default function GynecologyPage() {
  return (
    <ServicePageTemplate
      icon="🌸"
      name="Gynecology"
      tagline="Empowering Women's Health at Every Stage"
      description="Our Women's Health Centre provides comprehensive obstetric, gynaecological, and reproductive care in a warm, private, and deeply supportive environment."
      heroGradient="bg-gradient-to-br from-pink-800 via-rose-700 to-pink-500"
      accentColor="bg-pink-500"
      stats={[
        { value: '5K+', label: 'Deliveries Per Year' },
        { value: '99%', label: 'Safe Delivery Rate' },
        { value: '12+', label: 'Gynaecologists' },
        { value: 'Labour', label: 'Suite with NICU Access' },
      ]}
      conditions={[
        { name: 'Pregnancy & Maternity', desc: 'Antenatal care, high-risk pregnancy management, and post-natal support for mother and baby.' },
        { name: 'PCOS', desc: 'Hormonal management, fertility counselling, and lifestyle modification for polycystic ovary syndrome.' },
        { name: 'Endometriosis', desc: 'Laparoscopic diagnosis and advanced surgical treatment for endometriosis and related infertility.' },
        { name: 'Uterine Fibroids', desc: 'Medical management, uterine fibroid embolization, and minimally invasive surgical options.' },
        { name: 'Cervical & Ovarian Cancers', desc: 'Screening, colposcopy, and gynaecologic oncology in partnership with our Cancer Centre.' },
        { name: 'Menopause Management', desc: 'Hormone therapy, lifestyle counselling, and bone health assessment for perimenopausal women.' },
      ]}
      treatments={[
        'Antenatal Check-ups', 'High-Risk Pregnancy Care', 'Normal & C-Section Delivery',
        'Laparoscopic Gynaecology', 'Hysteroscopy', 'Colposcopy & Cervical Biopsy',
        'IVF & Fertility Treatments', 'PCOS Management', 'Menopause HRT',
        'Pap Smear & Cervical Screening', 'Ultrasound & Foetal Monitoring',
      ]}
      doctors={[
        { name: 'Dr. Sunita Mehta', exp: '16 yrs', initials: 'SM' },
        { name: 'Dr. Fatima Al-Rashid', exp: '11 yrs', initials: 'FA' },
        { name: 'Dr. Helena Cruz', exp: '8 yrs', initials: 'HC' },
      ]}
      faqs={[
        { q: 'How often should women have a gynaecological check-up?', a: 'Women aged 21 and above should have a Pap smear every 3 years (or every 5 years with HPV co-testing after 30). Annual pelvic exams are recommended to screen for other conditions.' },
        { q: 'What are the signs of PCOS?', a: 'Common signs include irregular or absent periods, excessive facial/body hair, acne, weight gain, and difficulty getting pregnant. A blood test and ultrasound can confirm the diagnosis.' },
        { q: 'Is a C-section always an option if I want one?', a: 'Planned caesarean sections are considered when medically indicated or in specific circumstances. Our obstetricians will discuss all delivery options with you and support your informed choice.' },
      ]}
    />
  )
}
