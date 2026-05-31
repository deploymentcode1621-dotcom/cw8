import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Send appointment confirmation to patient
 */
export async function sendAppointmentConfirmation(appointment) {
  const { patientName, email, doctor, date, timeSlot, department, appointmentId } =
    appointment;

  const patientMail = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: `Appointment Confirmed - Patil Multispeciality Hospital`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
          .detail-row { display: flex; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
          .label { font-weight: bold; color: #64748b; width: 150px; }
          .value { color: #1e293b; }
          .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 12px; }
          .btn { background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 20px 0; }
          .badge { background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏥 Patil Multispeciality Hospital</h1>
            <p>Appointment Confirmation</p>
          </div>
          <div class="content">
            <p>Dear <strong>${patientName}</strong>,</p>
            <p>Your appointment has been successfully confirmed. <span class="badge">✓ Confirmed</span></p>
            
            <h3>Appointment Details:</h3>
            <div class="detail-row">
              <span class="label">Appointment ID:</span>
              <span class="value">#${appointmentId}</span>
            </div>
            <div class="detail-row">
              <span class="label">Doctor:</span>
              <span class="value">${doctor}</span>
            </div>
            <div class="detail-row">
              <span class="label">Department:</span>
              <span class="value">${department}</span>
            </div>
            <div class="detail-row">
              <span class="label">Date:</span>
              <span class="value">${date}</span>
            </div>
            <div class="detail-row">
              <span class="label">Time Slot:</span>
              <span class="value">${timeSlot}</span>
            </div>

            <h3>Important Instructions:</h3>
            <ul>
              <li>Please arrive 15 minutes before your scheduled appointment.</li>
              <li>Carry all previous medical records and reports.</li>
              <li>Carry your government ID proof.</li>
              <li>For any queries, call: <strong>+91-9876543210</strong></li>
            </ul>

            <p>For emergency, please call: <strong style="color: red;">+91-9876543211</strong></p>
            
            <p>Thank you for choosing Patil Multispeciality Hospital.</p>
          </div>
          <div class="footer">
            <p>Patil Multispecility Hospital in Barshi Road, Latur</p>
            <p>Phone: +91-9876543210 | Email: info@patilhospital.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  const adminMail = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `New Appointment - ${patientName} with ${doctor}`,
    html: `
      <h2>New Appointment Booking</h2>
      <p><strong>Appointment ID:</strong> #${appointmentId}</p>
      <p><strong>Patient:</strong> ${patientName}</p>
      <p><strong>Doctor:</strong> ${doctor}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${timeSlot}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${appointment.mobile}</p>
      ${appointment.message ? `<p><strong>Message:</strong> ${appointment.message}</p>` : ""}
    `,
  };

  await Promise.all([
    transporter.sendMail(patientMail),
    transporter.sendMail(adminMail),
  ]);
}

/**
 * Send contact form email
 */
export async function sendContactEmail(contactData) {
  const { name, email, phone, subject, message } = contactData;

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
}
