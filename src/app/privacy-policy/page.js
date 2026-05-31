import Breadcrumb from "@/components/common/Breadcrumb";
import { SITE_CONFIG } from "@/utils/constants";

export const metadata = {
  title: "Privacy Policy | Patil Multispeciality Hospital",
  description: "Privacy policy of Patil Multispeciality Hospital. Learn how we collect, use, and protect your personal and medical information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-2">Privacy Policy</h1>
            <p className="text-primary-300 text-sm">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card p-8 prose prose-slate max-w-none">
            {[
              {
                title: "1. Information We Collect",
                content: `We collect personal information you provide when booking appointments, filling contact forms, or communicating with us. This includes your name, phone number, email address, date of birth, and relevant medical information. We also collect technical data such as IP addresses and browser information through our website.`,
              },
              {
                title: "2. How We Use Your Information",
                content: `Your information is used to: schedule and manage appointments, provide medical care, send appointment reminders and confirmations, communicate important health information, improve our services and website, and comply with legal and regulatory obligations.`,
              },
              {
                title: "3. Medical Records Confidentiality",
                content: `All patient medical records are treated with the highest level of confidentiality. Medical information is accessed only by authorized healthcare professionals directly involved in your care. We strictly adhere to patient confidentiality laws and medical ethics.`,
              },
              {
                title: "4. Information Sharing",
                content: `We do not sell or rent your personal information to third parties. We may share information with: referring physicians for continuity of care, insurance companies for claims processing (with your consent), laboratories for diagnostic testing, and regulatory authorities as legally required.`,
              },
              {
                title: "5. Data Security",
                content: `We implement industry-standard security measures including SSL encryption, secure server infrastructure, access controls, and regular security audits to protect your personal and medical information from unauthorized access or disclosure.`,
              },
              {
                title: "6. Cookies",
                content: `Our website uses cookies to enhance your browsing experience, analyze website traffic, and remember your preferences. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.`,
              },
              {
                title: "7. Your Rights",
                content: `You have the right to: access your personal information, request corrections to inaccurate data, request deletion of your data (subject to legal requirements), withdraw consent for communications, and file a complaint with the relevant data protection authority.`,
              },
              {
                title: "8. Contact Us",
                content: `For privacy-related queries, contact our Data Privacy Officer at ${SITE_CONFIG.email} or write to us at ${SITE_CONFIG.address}.`,
              },
            ].map(({ title, content }) => (
              <div key={title} className="mb-8">
                <h2 className="font-heading font-bold text-xl text-slate-800 mb-3">{title}</h2>
                <p className="text-slate-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
