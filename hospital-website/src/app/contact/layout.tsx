import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us & Book Appointment',
  description: "Book an appointment at MediCare Plus Hospital. Contact our team for consultations, emergencies, or facility enquiries. We respond within 2 hours.",
  alternates: { canonical: 'https://www.medicareplus.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
