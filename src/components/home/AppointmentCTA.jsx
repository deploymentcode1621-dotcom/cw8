import Link from "next/link";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

export default function AppointmentCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Accepting Appointments
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-primary-200 text-lg mb-8 leading-relaxed">
            Book your appointment online or call us. Our team is ready to provide
            you with the best medical care. Same day appointments available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Book Online Appointment
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-transparent border-2 border-white/50 hover:border-white text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call {SITE_CONFIG.phone}
            </a>
          </div>
          <p className="text-primary-300 text-sm mt-5">
            Free consultation for new patients • No waiting time
          </p>
        </div>
      </div>
    </section>
  );
}
