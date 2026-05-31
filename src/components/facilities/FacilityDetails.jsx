import { Clock, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/utils/constants";

export default function FacilityDetails({ facility }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <div className="card p-6">
          <h2 className="font-heading font-bold text-slate-800 text-2xl mb-4">{facility.name}</h2>
          <p className="text-slate-600 leading-relaxed">{facility.description}</p>
        </div>
        <div className="card p-6">
          <h3 className="font-heading font-bold text-slate-800 text-xl mb-4">Key Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {facility.highlights?.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={18} className="text-primary-600" />
            <span className="font-bold text-slate-800">Availability: {facility.available}</span>
          </div>
          <Link href="/appointment" className="btn-primary w-full justify-center mb-3">Book Appointment</Link>
          <a href={`tel:${SITE_CONFIG.emergencyPhone}`} className="btn-secondary w-full justify-center">
            <Phone size={15} /> Emergency
          </a>
        </div>
      </div>
    </div>
  );
}
