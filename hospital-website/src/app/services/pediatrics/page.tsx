import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Pediatrics Department',
  description: "MediCare Plus Pediatrics delivers expert, child-friendly healthcare for newborns to teenagers — from routine vaccinations to complex neonatal and paediatric care.",
  alternates: { canonical: 'https://www.medicareplus.com/services/pediatrics' },
}

export default function PediatricsPage() {
  return (
    <ServicePageTemplate
      icon="👶"
      name="Pediatrics"
      tagline="Little Patients. Big Heart."
      description="Our dedicated Pediatrics department creates a warm, child-friendly environment where our specialists provide comprehensive care from newborns to adolescents."
      heroGradient="bg-gradient-to-br from-amber-700 via-yellow-600 to-orange-500"
      accentColor="bg-yellow-500"
      stats={[
        { value: '15K+', label: 'Children Treated' },
        { value: '30+', label: 'Paediatric Beds' },
        { value: '10+', label: 'Paediatricians' },
        { value: 'NICU', label: 'Level III Unit' },
      ]}
      conditions={[
        { name: 'Neonatal Conditions', desc: 'Level III NICU care for premature infants and newborns with critical medical needs.' },
        { name: 'Respiratory Infections', desc: 'Diagnosis and treatment of pneumonia, bronchiolitis, RSV, and asthma in children.' },
        { name: 'Childhood Asthma', desc: 'Allergy testing, inhaler education, and long-term asthma control plans for children.' },
        { name: 'Nutritional Disorders', desc: 'Paediatric dietitian-led management of malnutrition, obesity, and feeding difficulties.' },
        { name: 'Developmental Delays', desc: 'Early screening, therapy referral, and multidisciplinary support for developmental challenges.' },
        { name: 'Paediatric Emergencies', desc: 'Dedicated paediatric emergency bays staffed 24/7 by specialist paediatric nurses and doctors.' },
      ]}
      treatments={[
        'Well-Baby Visits', 'Immunisation Programme', 'Neonatal Intensive Care (NICU)',
        'Paediatric Respiratory Care', 'Growth & Development Monitoring', 'Allergy Testing',
        'Child & Adolescent Psychiatry', 'Paediatric Surgery', 'Phototherapy for Jaundice',
        'Childhood Oncology', 'Developmental Paediatrics',
      ]}
      doctors={[
        { name: 'Dr. Priya Nair', exp: '12 yrs', initials: 'PN' },
        { name: 'Dr. Kavita Rao', exp: '9 yrs', initials: 'KR' },
        { name: 'Dr. Ethan Woods', exp: '7 yrs', initials: 'EW' },
      ]}
      faqs={[
        { q: 'At what age should a child see a paediatrician regularly?', a: 'Regular check-ups are recommended at birth, 1 month, 2, 4, 6, 9, 12, 15, 18 months, then annually from age 2. These visits monitor growth, development, and ensure the vaccination schedule is up to date.' },
        { q: 'What is a Level III NICU?', a: 'A Level III NICU provides the highest level of care for the most critically ill or premature neonates, including ventilator support, surgical intervention, and subspecialty consultations on site.' },
        { q: 'How do I know if my child needs an allergy test?', a: 'If your child has recurrent skin rashes, digestive issues, or respiratory problems triggered by food or environment, an allergy evaluation by our paediatric allergist can identify triggers and inform a management plan.' },
      ]}
    />
  )
}
