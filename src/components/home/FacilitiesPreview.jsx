import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { facilities } from "@/data/facilities";
import { ArrowRight, Clock } from "lucide-react";

export default function FacilitiesPreview() {
  const featured = facilities.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            badge="Facilities"
            title="World-Class"
            highlight="Infrastructure"
            subtitle="State-of-the-art equipment and facilities to ensure the highest quality of care."
          />
          <Link href="/facilities" className="btn-secondary flex-shrink-0">
            All Facilities
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((facility) => (
            <Link
              key={facility.id}
              href={`/facilities/${facility.slug}`}
              className="card group p-6 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <span>{facility.id === 1 ? "🏥" : facility.id === 2 ? "👶" : facility.id === 3 ? "🔬" : facility.id === 4 ? "❤️" : facility.id === 5 ? "💧" : "💊"}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-slate-800 text-base mb-1">
                    {facility.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Clock size={11} className="text-secondary-600" />
                    <span className="text-xs text-secondary-600 font-semibold">
                      {facility.available}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">{facility.shortDesc}</p>
              <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                Know More <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
