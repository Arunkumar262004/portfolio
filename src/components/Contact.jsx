import { useRef, useState } from 'react'
import { profile } from '../data/resume'
import { IconMail, IconPhone, IconLocation, IconArrowRight } from './Icons'
import { gmailComposeHref } from '../utils/mail'
import { sendEnquiryEmail, isEmailjsConfigured } from '../utils/emailjs'
import Reveal from './Reveal'
import './Contact.css'

const EMPTY = { name: '', company: '', email: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate({ name, email, message }) {
  const errors = {}
  if (!name) errors.name = 'Please enter your name.'
  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'
  if (!message) errors.message = 'Please enter a message.'
  else if (message.length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const sendingRef = useRef(false)

  const update = (field) => (e) => {
    const { value } = e.target
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((errs) => (errs[field] ? { ...errs, [field]: undefined } : errs))
    setStatus((s) => (s === 'sent' || s === 'error' ? 'idle' : s))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // The ref blocks a second submit before React has re-rendered the disabled button.
    if (sendingRef.current) return

    const trimmed = {
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    }
    const found = validate(trimmed)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }

    if (!isEmailjsConfigured()) {
      console.error(
        'EmailJS is not configured: set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.',
      )
      setStatus('error')
      return
    }

    sendingRef.current = true
    setStatus('sending')
    try {
      await sendEnquiryEmail(trimmed)
      setStatus('sent')
      setForm(EMPTY)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    } finally {
      sendingRef.current = false
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Get In Touch</p>
          <h2>Let&rsquo;s Work Together</h2>
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-info">
            <p className="contact-info__text">
              Have a project in mind or want to discuss an opportunity? Feel free to reach out, I&rsquo;d
              love to hear from you.
            </p>

            <div className="contact-info__row">
              <IconMail className="contact-info__icon" />
              <div>
                <p className="contact-info__label">Email</p>
                <a href={gmailComposeHref(profile.email)} target="_blank" rel="noreferrer">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="contact-info__row">
              <IconPhone className="contact-info__icon" />
              <div>
                <p className="contact-info__label">Phone</p>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              </div>
            </div>
            <div className="contact-info__row">
              <IconLocation className="contact-info__icon" />
              <div>
                <p className="contact-info__label">Location</p>
                <p>{profile.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal as="form" className="contact-form" delay={90} onSubmit={handleSubmit} noValidate>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                required
                value={form.name}
                name="name"
                onChange={update('name')}
                aria-invalid={Boolean(errors.name)}
                placeholder="Your name"
              />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </label>

            <label className="field">
              <span>Company</span>
              <input
                type="text"
                value={form.company}
                name="company"
                onChange={update('company')}
                placeholder="Company (optional)"
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                required
                value={form.email}
                name="email"
                onChange={update('email')}
                aria-invalid={Boolean(errors.email)}
                placeholder="Your email"
              />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                name="message"
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                placeholder="Your message"
              />
              {errors.message && <span className="field__error">{errors.message}</span>}
            </label>

            <div className="contact-form__footer" aria-live="polite">
              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === 'sending'}
                aria-busy={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                <IconArrowRight />
              </button>
              {status === 'sent' && (
                <span className="contact-form__sent">Message sent — I&rsquo;ll get back to you soon.</span>
              )}
              {status === 'error' && (
                <span className="contact-form__error">
                  Couldn&rsquo;t send that — email me directly at{' '}
                  <a href={gmailComposeHref(profile.email)} target="_blank" rel="noreferrer">
                    {profile.email}
                  </a>
                  .
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
