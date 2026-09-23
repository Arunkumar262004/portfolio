import emailjs from '@emailjs/browser'

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

export function sendEnquiryEmail({ name, company, email, message }) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: name,
      company: company || 'Not specified',
      from_email: email,
      message,
    },
    { publicKey: PUBLIC_KEY },
  )
}
