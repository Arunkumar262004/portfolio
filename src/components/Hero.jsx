import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, experience } from '../data/resume'
import { IconGithub, IconLinkedIn, IconMail, IconArrowRight } from './Icons'
import { gmailComposeHref } from '../utils/mail'
import headshot from '../assets/arun-headshot.jpg'
import './Hero.css'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const innerOrbit = [
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
]

const outerOrbit = [
  { name: 'Express.js', icon: 'express/express-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
]

const roles = ['Node.js Full Stack Developer', 'Backend API Engineer', 'AI-Integrated App Builder']

const terminalLines = [
  { kind: 'cmd', text: 'ask("what do you build?")' },
  { kind: 'out', text: 'Scalable REST APIs, ERP systems & LLM-powered features.' },
  { kind: 'cmd', text: 'stack.primary' },
  { kind: 'out', text: "['Node.js', 'Express', 'React', 'MongoDB']" },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useTypewriter(words) {
  const [text, setText] = useState(words[0])

  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    let word = 0
    let len = words[0].length
    let deleting = true
    let timer

    const tick = () => {
      let delay
      if (deleting) {
        len -= 1
        delay = 35
        if (len === 0) {
          deleting = false
          word = (word + 1) % words.length
          delay = 300
        }
      } else {
        len += 1
        delay = 70
        if (len === words[word].length) {
          deleting = true
          delay = 2200
        }
      }
      setText(words[word].slice(0, len))
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 2200)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

function useTerminal(lines) {
  const [shown, setShown] = useState(() =>
    prefersReducedMotion() ? lines.map((l) => l.text) : [''],
  )

  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    let line = 0
    let char = 0
    let timer

    const tick = () => {
      char += 1
      setShown((prev) => {
        const next = prev.slice(0, line)
        next[line] = lines[line].text.slice(0, char)
        return next
      })

      if (char < lines[line].text.length) {
        timer = setTimeout(tick, lines[line].kind === 'cmd' ? 55 : 18)
      } else if (line < lines.length - 1) {
        line += 1
        char = 0
        timer = setTimeout(tick, 450)
      } else {
        line = 0
        char = 0
        timer = setTimeout(() => {
          setShown([''])
          timer = setTimeout(tick, 400)
        }, 4000)
      }
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [lines])

  return shown
}

function Orbit({ items, className, duration }) {
  return (
    <div className={`orbit ${className}`} style={{ '--dur': duration }} aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={item.name}
          className="orbit__item"
          style={{ '--angle': `${(360 / items.length) * i}deg` }}
        >
          <span className="orbit__chip" title={item.name}>
            <img src={`${DEVICON}/${item.icon}`} alt="" loading="lazy" />
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const role = useTypewriter(roles)
  const terminal = useTerminal(terminalLines)

  const handlePointerMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const stats = [
    { value: profile.experienceYears, label: 'Years experience' },
    { value: experience.length, label: 'Companies' },
    { value: '20+', label: 'Projects shipped' },
  ]

  return (
    <section id="top" className="hero" ref={heroRef} onPointerMove={handlePointerMove}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__grid-lines" />
        <span className="hero__aurora hero__aurora--a" />
        <span className="hero__aurora hero__aurora--b" />
        <span className="hero__aurora hero__aurora--c" />
        <span className="hero__spotlight" />
      </div>

      <div className="container hero__layout">
        <div className="hero__main">
          <p className="hero__badge">
            <span className="hero__pulse" aria-hidden="true" />
            {profile.status} &middot; Building with AI
          </p>

          <p className="hero__greeting">Hello, I&rsquo;m</p>
          <h1 className="hero__name">
            {profile.firstName} <span className="hero__gradient">{profile.lastName}</span>
          </h1>

          <p className="hero__role" aria-label={roles[0]}>
            <span className="hero__role-prefix" aria-hidden="true">&gt;_</span>
            <span aria-hidden="true">{role}</span>
            <span className="hero__caret" aria-hidden="true" />
          </p>

          <p className="hero__intro">{profile.heroIntro}</p>

          <div className="hero__actions">
            <Link className="btn hero__btn-primary" to="/#projects">
              View My Projects
              <IconArrowRight />
            </Link>
            <Link className="btn hero__btn-ghost" to="/#contact">
              <IconMail />
              Contact Me
            </Link>
          </div>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__social">
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
        </div>

        <div className="hero__visual">
          <div className="hero__orbits">
            <span className="orbit__ring orbit__ring--outer" aria-hidden="true" />
            <span className="orbit__ring orbit__ring--inner" aria-hidden="true" />
            <Orbit items={outerOrbit} className="orbit--outer" duration="60s" />
            <Orbit items={innerOrbit} className="orbit--inner" duration="38s" />

            <div className="hero__photo">
              <span className="hero__photo-ring" aria-hidden="true" />
              <img src={headshot} alt={`Portrait of ${profile.name}`} />
            </div>

            <span className="hero__chip hero__chip--ai" aria-hidden="true">
              <span className="hero__spark">&#10022;</span> LLM integrations
            </span>
            <span className="hero__chip hero__chip--api" aria-hidden="true">
              <span className="hero__dot" /> REST APIs &middot; 200 OK
            </span>
          </div>

          <div className="hero__terminal" aria-hidden="true">
            <div className="hero__terminal-bar">
              <span />
              <span />
              <span />
              <p>arun@ai-dev: ~</p>
            </div>
            <div className="hero__terminal-body">
              {terminal.map((text, i) => (
                <p key={i} className={`hero__term-line hero__term-line--${terminalLines[i].kind}`}>
                  {terminalLines[i].kind === 'cmd' ? '❯ ' : '✦ '}
                  {text}
                  {i === terminal.length - 1 && <span className="hero__caret hero__caret--sm" />}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
