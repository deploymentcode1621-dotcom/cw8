"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validations";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
    finally { setIsSubmitting(false); }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">Message Sent!</h3>
        <p className="text-slate-600 mb-4">We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus(null)} className="btn-secondary">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
          <AlertCircle size={16} className="text-red-500" />
          <p className="text-red-700 text-sm">Failed to send. Please try again.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Name *</label>
          <input {...register("name")} placeholder="Your name" className="input-field" />
          {errors.name && <p className="error-message"><AlertCircle size={12}/>{errors.name.message}</p>}
        </div>
        <div>
          <label className="input-label">Email *</label>
          <input {...register("email")} type="email" placeholder="your@email.com" className="input-field" />
          {errors.email && <p className="error-message"><AlertCircle size={12}/>{errors.email.message}</p>}
        </div>
        <div>
          <label className="input-label">Phone</label>
          <input {...register("phone")} type="tel" placeholder="10-digit number" className="input-field" />
          {errors.phone && <p className="error-message"><AlertCircle size={12}/>{errors.phone.message}</p>}
        </div>
        <div>
          <label className="input-label">Subject *</label>
          <input {...register("subject")} placeholder="How can we help?" className="input-field" />
          {errors.subject && <p className="error-message"><AlertCircle size={12}/>{errors.subject.message}</p>}
        </div>
      </div>
      <div>
        <label className="input-label">Message *</label>
        <textarea {...register("message")} rows={4} placeholder="Your message..." className="input-field resize-none" />
        {errors.message && <p className="error-message"><AlertCircle size={12}/>{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-3.5">
        {isSubmitting ? "Sending..." : <><Send size={16}/>Send Message</>}
      </button>
    </form>
  );
}
