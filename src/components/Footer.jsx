import { Link } from 'react-router-dom'
import { profile } from '../data/resume'
import { IconGithub, IconLinkedIn, IconMail } from './Icons'
import { gmailComposeHref } from '../utils/mail'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__tagline">Let&rsquo;s build something great.</p>
          <Link className="btn btn--primary footer__cta" to="/#contact">
            Contact Me
          </Link>
        </div>

        <div className="footer__meta">
          <div className="footer__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
            <a href={gmailComposeHref(profile.email)} target="_blank" rel="noreferrer" aria-label="Email">
              <IconMail />
            </a>
          </div>

          <p className="footer__copy">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
