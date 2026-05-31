import Breadcrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Contact Us | Patil Multispeciality Hospital",
  description: "Get in touch with Patil Multispeciality Hospital. Call, email, or visit us. 24/7 emergency available.",
  path: "/contact",
});

const contactDetails = [
  {
    icon: Phone, label: "Phone", color: "bg-primary-600",
    lines: [
      { text: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
      { text: `Emergency: ${SITE_CONFIG.emergencyPhone}`, href: `tel:${SITE_CONFIG.emergencyPhone}`, cls: "text-red-500" },
    ],
  },
  {
    icon: Mail, label: "Email", color: "bg-secondary-600",
    lines: [{ text: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` }],
  },
  {
    icon: MapPin, label: "Address", color: "bg-accent-500",
    lines: [{ text: SITE_CONFIG.address }],
  },
  {
    icon: Clock, label: "OPD Hours", color: "bg-slate-700",
    lines: [
      { text: "Mon–Sat: 8:00 AM – 8:00 PM" },
      { text: "Emergency: 24/7", cls: "text-green-600 font-semibold" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Contact Us", href: "/contact" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Get In <span className="text-primary-300">Touch</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              We're here to help. Reach out for appointments, queries, or emergencies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactDetails.map(({ icon: Icon, label, color, lines }) => (
              <div key={label} className="card p-5 text-center hover:-translate-y-1 transition-transform">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-sm mb-2">{label}</h3>
                {lines.map((line, i) =>
                  line.href ? (
                    <a key={i} href={line.href} className={`block text-sm hover:text-primary-600 transition-colors ${line.cls || "text-slate-600"}`}>
                      {line.text}
                    </a>
                  ) : (
                    <p key={i} className={`text-sm ${line.cls || "text-slate-600"}`}>{line.text}</p>
                  )
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="card p-6 md:p-8">
              <h2 className="font-heading font-bold text-2xl text-slate-800 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Map & WhatsApp */}
            <div className="space-y-6">
              {/* Google Map embed */}
              <div className="card overflow-hidden">
                <iframe
                  src={SITE_CONFIG.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Patil Hospital Location"
                />
                <div className="p-4">
                  <p className="font-semibold text-slate-800 text-sm">{SITE_CONFIG.name}</p>
                  <p className="text-slate-500 text-sm">{SITE_CONFIG.address}</p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%2C%20I%20need%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="font-bold text-base">Chat on WhatsApp</div>
                  <div className="text-green-100 text-sm">Instant replies during business hours</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
