import Breadcrumb from "@/components/common/Breadcrumb";
import { SITE_CONFIG } from "@/utils/constants";

export const metadata = {
  title: "Terms & Conditions | Patil Multispeciality Hospital",
  description: "Terms and conditions for using Patil Multispeciality Hospital's services and website.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the website and services of ${SITE_CONFIG.name}, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.`,
    },
    {
      title: "2. Medical Disclaimer",
      content: `The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for diagnosis and treatment. In case of a medical emergency, call our emergency line or visit the hospital immediately.`,
    },
    {
      title: "3. Appointment Booking",
      content: `Online appointment bookings are subject to availability and confirmation by our staff. We reserve the right to reschedule or cancel appointments due to unforeseen circumstances. Patients are required to arrive 15 minutes before their scheduled appointment time.`,
    },
    {
      title: "4. Cancellation Policy",
      content: `Appointments should be cancelled at least 24 hours in advance. Repeated no-shows may result in restrictions on future online bookings. Consultation fees paid in advance are non-refundable except at the hospital's discretion.`,
    },
    {
      title: "5. Patient Responsibilities",
      content: `Patients are responsible for providing accurate medical history and information, following prescribed treatment plans, attending scheduled follow-up appointments, and treating hospital staff with respect.`,
    },
    {
      title: "6. Intellectual Property",
      content: `All content on this website including text, images, logos, and graphics are the intellectual property of ${SITE_CONFIG.name} and may not be reproduced without written permission.`,
    },
    {
      title: "7. Limitation of Liability",
      content: `${SITE_CONFIG.name} shall not be liable for indirect, incidental, or consequential damages arising from the use of our website. Our liability is limited to the maximum extent permitted by applicable law.`,
    },
    {
      title: "8. Governing Law",
      content: `These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Latur, Maharashtra.`,
    },
    {
      title: "9. Changes to Terms",
      content: `We reserve the right to modify these terms at any time. Changes will be effective upon posting to the website. Continued use of our services constitutes acceptance of the updated terms.`,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Terms & Conditions", href: "/terms-condition" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-2">Terms & Conditions</h1>
            <p className="text-primary-300 text-sm">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card p-8">
            {sections.map(({ title, content }) => (
              <div key={title} className="mb-8">
                <h2 className="font-heading font-bold text-xl text-slate-800 mb-3">{title}</h2>
                <p className="text-slate-600 leading-relaxed">{content}</p>
              </div>
            ))}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                For questions about these terms, contact us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
