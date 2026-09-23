import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/resume'
import { IconDownload } from './Icons'
import ThemeToggle from './ThemeToggle'
import './Nav.css'

const LINKS = [
  { href: '/#top', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="nav">
      <div className={`nav__bar${scrolled ? ' nav__bar--scrolled' : ''}`}>
        <div className="container nav__inner">
          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__right">
            <ThemeToggle />
            <a className="nav__cv" href={profile.resumeFile} download>
              <IconDownload />
              Download CV
            </a>
            <button
              className={`nav__toggle${open ? ' nav__toggle--open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`nav__backdrop${open ? ' nav__backdrop--open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav className={`nav__mobile${open ? ' nav__mobile--open' : ''}`} aria-label="Mobile">
        {LINKS.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a className="nav__cv nav__cv--mobile" href={profile.resumeFile} download>
          <IconDownload />
          Download CV
        </a>
      </nav>
    </header>
  )
}
