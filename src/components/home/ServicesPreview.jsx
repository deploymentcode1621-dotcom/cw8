import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const SERVICE_ICONS = {
  cardiology: "❤️",
  neurology: "🧠",
  orthopedics: "🦴",
  gynecology: "👩‍⚕️",
  pediatrics: "👶",
  oncology: "🎗️",
  emergency: "🚨",
  diagnostics: "🔬",
};

const SERVICE_COLORS = {
  red: "from-red-50 to-red-100 border-red-200 hover:border-red-400",
  purple: "from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400",
  blue: "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400",
  pink: "from-pink-50 to-pink-100 border-pink-200 hover:border-pink-400",
  green: "from-green-50 to-green-100 border-green-200 hover:border-green-400",
  orange: "from-orange-50 to-orange-100 border-orange-200 hover:border-orange-400",
  teal: "from-teal-50 to-teal-100 border-teal-200 hover:border-teal-400",
};

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 8);

  return (
    <section className="section-padding section-bg-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            badge="Our Services"
            title="40+ Medical"
            highlight="Specializations"
            subtitle="Comprehensive healthcare services delivered by expert specialists using cutting-edge technology."
          />
          <Link href="/services" className="btn-secondary flex-shrink-0">
            All Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={`group bg-gradient-to-br ${SERVICE_COLORS[service.color] || SERVICE_COLORS.blue} border rounded-2xl p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{SERVICE_ICONS[service.slug] || "🏥"}</div>
              <h3 className="font-heading font-bold text-slate-800 text-base mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {service.shortDesc}
              </p>
              <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
