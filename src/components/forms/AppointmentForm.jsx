"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "@/lib/validations";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { getMinBookingDate, getMaxBookingDate } from "@/utils/formatDate";
import { Calendar, User, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM",
];

export default function AppointmentForm({ preselectedDoctor, preselectedDepartment }) {
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctor: preselectedDoctor || "",
      department: preselectedDepartment || "",
    },
  });

  const selectedDepartment = watch("department");
  const filteredDoctors = selectedDepartment
    ? doctors.filter((d) =>
        d.department.toLowerCase().includes(selectedDepartment.toLowerCase())
      )
    : doctors;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-slate-800 mb-2">
          Appointment Confirmed!
        </h3>
        <p className="text-slate-600 mb-6">
          You'll receive a confirmation email shortly. Please arrive 15 minutes early.
        </p>
        <button onClick={() => setStatus(null)} className="btn-primary">
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
          <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Patient Name */}
        <div>
          <label className="input-label">
            <User size={13} className="inline mr-1" />
            Patient Name *
          </label>
          <input
            {...register("patientName")}
            placeholder="Enter full name"
            className="input-field"
          />
          {errors.patientName && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.patientName.message}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="input-label">
            <Phone size={13} className="inline mr-1" />
            Mobile Number *
          </label>
          <input
            {...register("mobile")}
            placeholder="10-digit mobile number"
            type="tel"
            maxLength={10}
            className="input-field"
          />
          {errors.mobile && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="input-label">
            <Mail size={13} className="inline mr-1" />
            Email Address
          </label>
          <input
            {...register("email")}
            placeholder="your@email.com (optional)"
            type="email"
            className="input-field"
          />
          {errors.email && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="input-label">Department *</label>
          <select {...register("department")} className="input-field">
            <option value="">Select Department</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.department.message}
            </p>
          )}
        </div>

        {/* Doctor */}
        <div>
          <label className="input-label">Preferred Doctor *</label>
          <select {...register("doctor")} className="input-field">
            <option value="">Select Doctor</option>
            {filteredDoctors.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name} - {d.department}
              </option>
            ))}
          </select>
          {errors.doctor && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.doctor.message}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="input-label">
            <Calendar size={13} className="inline mr-1" />
            Preferred Date *
          </label>
          <input
            {...register("date")}
            type="date"
            min={getMinBookingDate()}
            max={getMaxBookingDate()}
            className="input-field"
          />
          {errors.date && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Time Slot */}
        <div>
          <label className="input-label">
            <Clock size={13} className="inline mr-1" />
            Preferred Time *
          </label>
          <select {...register("timeSlot")} className="input-field">
            <option value="">Select Time Slot</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.timeSlot && (
            <p className="error-message">
              <AlertCircle size={12} />
              {errors.timeSlot.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="input-label">Additional Message</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Describe your symptoms or any special requirements..."
          className="input-field resize-none"
        />
        {errors.message && (
          <p className="error-message">
            <AlertCircle size={12} />
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center py-4 text-base"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Booking...
          </>
        ) : (
          <>
            <Calendar size={18} />
            Book Appointment
          </>
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By booking, you agree to our{" "}
        <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a>.
        We'll confirm your appointment within 2 hours.
      </p>
    </form>
  );
}
