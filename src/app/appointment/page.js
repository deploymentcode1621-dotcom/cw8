import Breadcrumb from "@/components/common/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { Phone, Clock, MapPin, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Book Appointment | Patil Multispeciality Hospital",
  description: "Book an appointment online at Patil Multispeciality Hospital. Choose your doctor, date and time slot. Instant confirmation via email.",
  path: "/appointment",
});

const whyChoose = [
  "Instant appointment confirmation",
  "Choose your preferred doctor",
  "Flexible time slots available",
  "Same-day appointments for emergencies",
  "Reminder SMS & email before appointment",
  "Easy rescheduling if needed",
];

export default function AppointmentPage({ searchParams }) {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Book Appointment", href: "/appointment" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Book an <span className="text-primary-300">Appointment</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              Schedule a consultation with our expert doctors. Fast, easy, and confirmed instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl text-slate-800 mb-6">
                  Fill Appointment Details
                </h2>
                <AppointmentForm
                  preselectedDoctor={searchParams?.doctor}
                  preselectedDepartment={searchParams?.department}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-slate-800 text-lg mb-4">
                  Need Help?
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Call Us</div>
                      <div className="font-bold text-slate-800 text-sm">{SITE_CONFIG.phone}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">OPD Hours</div>
                      <div className="font-bold text-slate-800 text-sm">Mon–Sat: 8AM – 8PM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Address</div>
                      <div className="font-semibold text-slate-800 text-sm">{SITE_CONFIG.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-600 text-white rounded-2xl p-6">
                <div className="text-3xl mb-2">🚨</div>
                <h3 className="font-heading font-bold text-lg mb-2">Medical Emergency?</h3>
                <p className="text-red-100 text-sm mb-4">Don't wait — call our 24/7 emergency line immediately.</p>
                <a
                  href={`tel:${SITE_CONFIG.emergencyPhone}`}
                  className="w-full bg-white text-red-700 hover:bg-red-50 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={16} />
                  {SITE_CONFIG.emergencyPhone}
                </a>
              </div>

              {/* Why choose */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-slate-800 text-base mb-4">
                  Why Book With Us?
                </h3>
                <ul className="space-y-2.5">
                  {whyChoose.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={15} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
