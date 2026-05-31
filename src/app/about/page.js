import SectionTitle from "@/components/common/SectionTitle";
import Breadcrumb from "@/components/common/Breadcrumb";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { CheckCircle, Award, Users, Building2, Heart } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/utils/constants";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "About Us | Patil Multispeciality Hospital",
  description: "Learn about Patil Multispeciality Hospital — our history, mission, vision, and commitment to providing world-class healthcare in Latur, Maharashtra.",
  path: "/about",
});

const values = [
  { icon: Heart, title: "Compassionate Care", desc: "Every patient is treated with empathy, dignity, and respect." },
  { icon: Award, title: "Clinical Excellence", desc: "Evidence-based medicine and continuous quality improvement." },
  { icon: Users, title: "Patient First", desc: "All decisions are guided by the best interests of our patients." },
  { icon: Building2, title: "Innovation", desc: "Embracing latest technology to deliver better outcomes." },
];

const milestones = [
  { year: "1998", event: "Hospital founded by Dr. Ramchandra Patil" },
  { year: "2003", event: "Expanded to 100 beds and added ICU facility" },
  { year: "2008", event: "Launched Cardiac Catheterization Laboratory" },
  { year: "2012", event: "NABH Accreditation achieved" },
  { year: "2016", event: "300-bed expansion & Cancer Care Centre" },
  { year: "2020", event: "Launched telemedicine and robotic surgery" },
  { year: "2023", event: "Serving 1 Lakh+ patients milestone" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "About Us", href: "/about" }]} />
          <div className="max-w-2xl mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              About <span className="text-primary-300">{SITE_CONFIG.name}</span>
            </h1>
            <p className="text-primary-200 text-lg">
              Over 25 years of trusted healthcare, serving the people of Latur
              and surrounding districts with compassion and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-600 text-white rounded-3xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="font-heading font-bold text-2xl mb-3">Our Mission</h2>
              <p className="text-primary-100 leading-relaxed">
                To provide accessible, affordable, and world-class healthcare services
                to every patient with compassion, competence, and commitment — treating
                each person as a member of our own family.
              </p>
            </div>
            <div className="bg-secondary-600 text-white rounded-3xl p-8">
              <div className="text-4xl mb-4">👁️</div>
              <h2 className="font-heading font-bold text-2xl mb-3">Our Vision</h2>
              <p className="text-secondary-100 leading-relaxed">
                To be the most trusted multispeciality hospital in Maharashtra,
                known for clinical excellence, patient safety, and a culture
                of continuous innovation in healthcare delivery.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-primary-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <SectionTitle
            badge="Our Values"
            title="What Drives"
            highlight="Everything We Do"
            center
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <SectionTitle
            badge="Our Journey"
            title="Milestones"
            highlight="Through the Years"
            center
            className="mb-10"
          />
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary-200" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex items-center gap-6 mb-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="card p-4 inline-block">
                    <div className="font-heading font-bold text-primary-600 text-lg">{m.year}</div>
                    <div className="text-slate-700 text-sm">{m.event}</div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-primary-100 z-10 flex-shrink-0" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
