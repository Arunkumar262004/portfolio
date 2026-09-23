import { useState } from 'react'
import { profile } from '../data/resume'
import { IconMail, IconPhone, IconLocation, IconArrowRight } from './Icons'
import { openGmailCompose, gmailComposeHref } from '../utils/mail'
import { sendEnquiryEmail, isEmailjsConfigured } from '../utils/emailjs'
import Reveal from './Reveal'
import './Contact.css'

const EMPTY = { name: '', company: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isEmailjsConfigured()) {
      const subject = `Portfolio enquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`
      const body = [
        `Name: ${form.name}`,
        form.company && `Company: ${form.company}`,
        `Reply-to email: ${form.email}`,
        '',
        form.message,
      ]
        .filter(Boolean)
        .join('\n')

      openGmailCompose({ to: profile.email, subject, body })
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      await sendEnquiryEmail(form)
      setStatus('sent')
      setForm(EMPTY)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
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

          <Reveal as="form" className="contact-form" delay={90} onSubmit={handleSubmit}>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
              />
            </label>

            <label className="field">
              <span>Company</span>
              <input
                type="text"
                value={form.company}
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
                onChange={update('email')}
                placeholder="Your email"
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Your message"
              />
            </label>

            <div className="contact-form__footer">
              <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
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
