import SectionTitle from "@/components/common/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding section-bg-light">
      <div className="container-custom">
        <SectionTitle
          badge="Testimonials"
          title="What Our"
          highlight="Patients Say"
          subtitle="Thousands of families trust us for their healthcare needs. Here are some of their stories."
          center
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6 relative">
              <Quote
                size={36}
                className="text-primary-100 fill-primary-100 absolute top-4 right-4"
              />
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              {/* Treatment badge */}
              <span className="badge-blue mb-3 inline-flex">{testimonial.treatment}</span>
              {/* Review */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-4">
                "{testimonial.review}"
              </p>
              {/* Patient Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-card px-8 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-800">4.9/5</span>
              <span className="text-slate-500 ml-2 text-sm">Overall Rating</span>
            </div>
            <div className="border-l border-slate-200 pl-4">
              <div className="font-bold text-slate-800">1000+</div>
              <div className="text-xs text-slate-500">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
