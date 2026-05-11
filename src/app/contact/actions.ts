/* Server Action for the contact form — runs on the server, never in the browser */
"use server";

/* Form field structure */
export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  /* Extract and validate fields */
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const vehicle = (formData.get("vehicle") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  /* Basic server-side validation */
  if (!name || !phone || !vehicle || !message) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
    };
  }

  /* Log submission to console for dev visibility */
  console.log("[Contact Form Submission]", {
    name,
    phone,
    email,
    vehicle,
    message,
    receivedAt: new Date().toISOString(),
  });

  /* TODO: Send email using Resend or Nodemailer
   *
   * Example with Resend (https://resend.com):
   *
   *   import { Resend } from "resend";
   *   const resend = new Resend(process.env.RESEND_API_KEY);
   *
   *   await resend.emails.send({
   *     from: "website@goodealtransmissions.com",
   *     to: "your-email@example.com",
   *     subject: `New contact form: ${name} — ${vehicle}`,
   *     html: `
   *       <p><strong>Name:</strong> ${name}</p>
   *       <p><strong>Phone:</strong> ${phone}</p>
   *       <p><strong>Email:</strong> ${email}</p>
   *       <p><strong>Vehicle:</strong> ${vehicle}</p>
   *       <p><strong>Message:</strong> ${message}</p>
   *     `,
   *   });
   *
   * Add RESEND_API_KEY to your .env.local file.
   */

  return {
    status: "success",
    message: "Thanks! We’ll be in touch soon.",
  };
}
