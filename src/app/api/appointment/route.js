import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";
import connectDB from "@/lib/db";
import { sendAppointmentConfirmation } from "@/lib/mail";

// Mongoose model (inline to avoid separate model file)
import mongoose from "mongoose";

const appointmentSchema_db = new mongoose.Schema(
  {
    patientName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true },
    email: { type: String, default: "" },
    department: { type: String, required: true },
    doctor: { type: String, required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    message: { type: String, default: "" },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    appointmentId: { type: String, unique: true },
  },
  { timestamps: true }
);

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema_db);

function generateAppointmentId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `PMH-${timestamp}-${random}`;
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate
    const validationResult = appointmentSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const appointmentId = generateAppointmentId();

    // Save to DB
    await connectDB();
    const appointment = await Appointment.create({
      ...data,
      appointmentId,
    });

    // Send confirmation email (non-blocking)
    if (data.email) {
      sendAppointmentConfirmation({ ...data, appointmentId }).catch((err) =>
        console.error("Email send failed:", err)
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully",
        appointmentId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment booking error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
