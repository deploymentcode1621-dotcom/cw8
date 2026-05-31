"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

const faqs = [
  {
    category: "Appointments",
    items: [
      {
        q: "How do I book an appointment?",
        a: "You can book an appointment online through our website, call us at +91-9876543210, or visit the hospital directly. Online booking is available 24/7.",
      },
      {
        q: "Can I reschedule or cancel my appointment?",
        a: "Yes, you can reschedule or cancel by calling us at least 24 hours before your appointment. For online bookings, use the link in your confirmation email.",
      },
      {
        q: "What documents should I bring for my appointment?",
        a: "Please bring a government-issued photo ID, your previous medical records, prescriptions, test reports, and your insurance card if applicable.",
      },
      {
        q: "Are same-day appointments available?",
        a: "Yes, same-day appointments may be available for urgent cases. Please call our helpline for availability.",
      },
    ],
  },
  {
    category: "Facilities & Services",
    items: [
      {
        q: "Does the hospital have a 24/7 emergency service?",
        a: "Yes, our Emergency & Trauma department is fully operational 24 hours a day, 7 days a week, including all public holidays.",
      },
      {
        q: "Is ambulance service available?",
        a: "Yes, we have a fleet of Advanced Life Support (ALS) ambulances available 24/7. Call +91-9876543212 for ambulance services.",
      },
      {
        q: "Does the hospital have parking facilities?",
        a: "Yes, we have ample free parking space for patients and visitors, including dedicated spots for people with disabilities.",
      },
      {
        q: "Is the pharmacy open 24/7?",
        a: "Yes, our in-house pharmacy is open round the clock and stocks all medications including emergency and controlled substances.",
      },
    ],
  },
  {
    category: "Insurance & Billing",
    items: [
      {
        q: "Does the hospital accept health insurance?",
        a: "Yes, we are empanelled with all major health insurance providers and TPA companies. Please check with our billing department for your specific insurer.",
      },
      {
        q: "Is cashless treatment available?",
        a: "Yes, cashless treatment is available for patients with insurance from our empanelled providers. Please present your insurance card at the time of admission.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept cash, credit/debit cards, UPI, net banking, and all major digital payment platforms.",
      },
    ],
  },
  {
    category: "Visiting Hours",
    items: [
      {
        q: "What are the visiting hours?",
        a: "General visiting hours are 10:00 AM – 12:00 PM and 5:00 PM – 7:00 PM. ICU visiting is from 11:00 AM – 12:00 PM only.",
      },
      {
        q: "How many visitors are allowed per patient?",
        a: "A maximum of 2 visitors are allowed at a time for general ward patients. ICU and special care patients are limited to 1 visitor.",
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 text-sm">{q}</span>
        <ChevronDown
          size={18}
          className={cn("text-slate-400 flex-shrink-0 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />
          <div className="mt-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Frequently Asked <span className="text-primary-300">Questions</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-xl">
              Find answers to common questions about our hospital, appointments, and services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {faqs.map((section) => (
            <div key={section.category} className="mb-10">
              <h2 className="font-heading font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-600 rounded-full inline-block" />
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
