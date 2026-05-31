import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export default function FacilityCard({ facility }) {
  const emojis = { 1: "🏥", 2: "👶", 3: "🔬", 4: "❤️", 5: "💧", 6: "💊", 7: "🩸", 8: "🚑" };

  return (
    <div className="card group overflow-hidden hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary-600 transition-colors flex-shrink-0">
            {emojis[facility.id] || "🏥"}
          </div>
          <div>
            <h3 className="font-heading font-bold text-slate-800 text-base mb-1">
              {facility.name}
            </h3>
            <div className="flex items-center gap-1">
              <Clock size={11} className="text-secondary-600" />
              <span className="text-xs text-secondary-600 font-semibold">{facility.available}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-4">{facility.shortDesc}</p>
        <ul className="space-y-1.5 mb-5">
          {facility.highlights?.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <Link
          href={`/facilities/${facility.slug}`}
          className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm group-hover:gap-2.5 transition-all"
        >
          Learn More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
