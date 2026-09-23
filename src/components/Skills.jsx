import { skillGroups } from '../data/resume'
import { IconCheck } from './Icons'
import Reveal from './Reveal'
import './Skills.css'

const GROUP_ICON = {
  frontend: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path strokeLinecap="round" d="M8 20h8M12 16.5V20" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4" width="17" height="6" rx="1.6" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.6" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="6" rx="7.5" ry="2.7" />
      <path d="M4.5 6v12c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7V6" />
      <path d="M4.5 12c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path strokeLinecap="round" d="M10.5 18.2h3" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a3 3 0 0 1-3.8 3.8L5 16v3h3l5.9-5.9a3 3 0 0 1 3.8-3.8L15 12l-1.3-1.3 3-3Z" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 4.5h3a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 0 0 3h3v3h-3a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 1 0 3H9v-3a1.5 1.5 0 0 0-3 0v3H4.5v-3a1.5 1.5 0 0 1 3 0h1.5v-3a1.5 1.5 0 0 0-3 0H4.5v-3H6a1.5 1.5 0 0 0 3 0Z" />
    </svg>
  ),
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Technical Skills</p>
          <h2>Technologies I Work With</h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal as="div" key={group.key} className="skill-group" delay={i * 60}>
              <div className="skill-group__head">
                <span className="skill-group__icon">{GROUP_ICON[group.key]}</span>
                <h3>{group.label}</h3>
              </div>
              <ul className="skill-group__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <IconCheck className="skill-group__check" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
