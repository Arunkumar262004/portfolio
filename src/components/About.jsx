import { profile, featureCards } from '../data/resume'
import { IconLocation, IconBriefcase, IconMail, IconClock } from './Icons'
import Reveal from './Reveal'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Introduction</p>
          <h2>About Me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-bio">
            <p>{profile.summary}</p>
            <p className="about-bio__tagline">{profile.tagline}</p>
          </Reveal>

          <Reveal className="about-card" delay={80}>
            <div className="about-card__row">
              <IconLocation className="about-card__icon" />
              <div>
                <p className="about-card__label">Location</p>
                <p className="about-card__value">{profile.location}</p>
              </div>
            </div>
            <div className="about-card__row">
              <IconBriefcase className="about-card__icon" />
              <div>
                <p className="about-card__label">Experience</p>
                <p className="about-card__value">{profile.experienceYears} Years</p>
              </div>
            </div>
            <div className="about-card__row">
              <IconMail className="about-card__icon" />
              <div>
                <p className="about-card__label">Email</p>
                <p className="about-card__value">{profile.email}</p>
              </div>
            </div>
            <div className="about-card__row">
              <IconClock className="about-card__icon" />
              <div>
                <p className="about-card__label">Availability</p>
                <p className="about-card__value about-card__value--accent">{profile.status}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="feature-grid">
          {featureCards.map((card, i) => (
            <Reveal as="div" key={card.key} className="feature-card" delay={i * 70}>
              <span className="feature-card__dot" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
