import { z } from "zod";

export const appointmentSchema = z.object({
  patientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .regex(/^[a-zA-Z\s.]+$/, "Name can only contain letters and spaces"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),

  email: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),

  department: z.string().min(1, "Please select a department"),

  doctor: z.string().min(1, "Please select a doctor"),

  date: z
    .string()
    .min(1, "Please select a date")
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected > today;
    }, "Please select a future date"),

  timeSlot: z.string().min(1, "Please select a time slot"),

  message: z.string().max(500, "Message too long").optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long"),

  email: z.string().email("Enter a valid email address"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number")
    .optional()
    .or(z.literal("")),

  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message too long"),
});
