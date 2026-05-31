import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServiceCard({ service }) {
  const icons = {
    cardiology: "❤️", neurology: "🧠", orthopedics: "🦴",
    gynecology: "👩‍⚕️", pediatrics: "👶", oncology: "🎗️",
    emergency: "🚨", diagnostics: "🔬",
  };

  return (
    <div className="card group overflow-hidden hover:-translate-y-1">
      <div className="p-6">
        <div className="text-4xl mb-4">{icons[service.slug] || "🏥"}</div>
        <h3 className="font-heading font-bold text-slate-800 text-lg mb-2">
          {service.name}
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {service.shortDesc}
        </p>
        <div className="space-y-1.5 mb-5">
          {service.features?.slice(0, 3).map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle size={12} className="text-secondary-500 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm group-hover:gap-2.5 transition-all"
        >
          Learn More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
