import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar } from "lucide-react";

export default function ServiceDetails({ service }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <div className="card p-6">
          <h2 className="font-heading font-bold text-slate-800 text-2xl mb-4">
            About {service.name}
          </h2>
          <p className="text-slate-600 leading-relaxed">{service.description}</p>
        </div>
        <div className="card p-6">
          <h2 className="font-heading font-bold text-slate-800 text-xl mb-4">
            Our Services Include
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features?.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
        {service.procedures?.length > 0 && (
          <div className="card p-6">
            <h2 className="font-heading font-bold text-slate-800 text-xl mb-4">
              Procedures Offered
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.procedures.map((p) => (
                <span key={p} className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="lg:col-span-1">
        <div className="bg-primary-600 text-white rounded-2xl p-6 sticky top-24">
          <h3 className="font-heading font-bold text-xl mb-3">
            Book a Consultation
          </h3>
          <p className="text-primary-200 text-sm mb-5">
            Consult with our {service.name} specialists today.
          </p>
          <Link
            href={`/appointment?department=${service.slug}`}
            className="w-full bg-white text-primary-700 hover:bg-primary-50 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
