import { Phone, Ambulance, Clock, MapPin } from "lucide-react";
import { SITE_CONFIG, EMERGENCY_INFO } from "@/utils/constants";

export default function EmergencySection() {
  return (
    <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Emergency Title */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              <span className="text-red-200 font-bold uppercase tracking-wider text-sm">
                Emergency Services
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">
              Available 24/7
            </h2>
          </div>

          {/* Emergency Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <div className="text-red-200 text-sm font-medium">Emergency Helpline</div>
              <a
                href={`tel:${EMERGENCY_INFO.phone}`}
                className="text-xl md:text-2xl font-bold hover:text-red-100 transition-colors"
              >
                {EMERGENCY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Ambulance */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🚑</span>
            </div>
            <div>
              <div className="text-red-200 text-sm font-medium">Ambulance Service</div>
              <a
                href={`tel:${EMERGENCY_INFO.ambulance}`}
                className="text-xl md:text-2xl font-bold hover:text-red-100 transition-colors"
              >
                {EMERGENCY_INFO.ambulance}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <div className="text-red-200 text-sm font-medium">Location</div>
              <div className="font-semibold text-sm leading-tight">
                {SITE_CONFIG.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
