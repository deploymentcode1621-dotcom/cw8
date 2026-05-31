import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await sendContactEmail(result.data);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
