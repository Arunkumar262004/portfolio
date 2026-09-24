import emailjs from '@emailjs/browser'

// Vite inlines VITE_* variables at build time. Locally they come from `.env`;
// on Vercel they must be set under Project Settings → Environment Variables.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const PLACEHOLDER_VALUES = new Set(['your_service_id', 'your_template_id', 'your_public_key', '', undefined])

export function isEmailjsConfigured() {
  return (
    !PLACEHOLDER_VALUES.has(SERVICE_ID) &&
    !PLACEHOLDER_VALUES.has(TEMPLATE_ID) &&
    !PLACEHOLDER_VALUES.has(PUBLIC_KEY)
  )
}

// Template variables available in the EmailJS template:
// {{title}}, {{name}}, {{from_name}}, {{company}}, {{email}}, {{from_email}}, {{reply_to}}, {{message}}, {{time}}
export function sendEnquiryEmail({ name, company, email, message }) {
  const time = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name,
      email,
      time,
      title: company ? `${name} (${company})` : name,
      from_name: name,
      company: company || 'Not specified',
      from_email: email,
      reply_to: email,
      message,
    },
    {
      publicKey: PUBLIC_KEY,
      // Rejects a repeat send within 10s, as a second guard against double submits.
      limitRate: { id: 'contact-form', throttle: 10000 },
    },
  )
}
