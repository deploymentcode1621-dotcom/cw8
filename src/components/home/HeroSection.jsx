import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, Star, ChevronRight, Shield, Award, Clock } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/utils/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-pattern overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-green-50/30 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/60 to-transparent -z-10" />
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl -z-10" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield size={14} />
              NABH Accredited Hospital
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-6">
              Your Health Is Our{" "}
              <span className="gradient-text">Top Priority</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Patil Multispeciality Hospital provides world-class healthcare with
              150+ expert doctors, cutting-edge technology, and compassionate
              care — available 24/7 for you and your family.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-lg">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-yellow-700">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg">
                <Award size={14} className="text-green-600" />
                <span className="text-sm font-semibold text-green-700">25+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
                <Clock size={14} className="text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">24/7 Emergency</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/appointment" className="btn-primary text-base py-3.5 px-8">
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a
                href={`tel:${SITE_CONFIG.emergencyPhone}`}
                className="btn-emergency text-base py-3.5 px-8"
              >
                <Phone size={18} />
                Emergency Call
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-2xl md:text-3xl text-primary-700">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image / Visual */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🏥</div>
                  <p className="text-primary-700 font-semibold text-lg">
                    Patil Multispeciality Hospital
                  </p>
                  <p className="text-primary-500 text-sm mt-1">Latur, Maharashtra</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👨‍⚕️</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">150+ Doctors</div>
                  <div className="text-xs text-slate-500">Expert Specialists</div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">❤️</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">1 Lakh+</div>
                  <div className="text-xs text-slate-500">Happy Patients</div>
                </div>
              </div>

              <div className="absolute right-0 top-0 bg-primary-600 text-white rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-primary-200">Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
