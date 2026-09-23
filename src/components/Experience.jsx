import { experience, education } from '../data/resume'
import Reveal from './Reveal'
import './Experience.css'

const CAP_ICON = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinejoin="round" d="M12 4.5 2.5 9 12 13.5 21.5 9 12 4.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 11.2v4.3c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4.3" />
    <path strokeLinecap="round" d="M21.5 9v6" />
  </svg>
)

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Career</p>
          <h2>Experience &amp; Education</h2>
        </Reveal>

        <div className="exp-layout">
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal as="div" key={job.company} className="timeline-item" delay={i * 90}>
                <div className="timeline-item__date">
                  {job.start} – {job.end}
                </div>

                <div className="timeline-item__rail">
                  <span className={`timeline-item__dot${job.current ? ' timeline-item__dot--current' : ''}`} />
                  <span className="timeline-item__line" aria-hidden="true" />
                </div>

                <div className="timeline-item__body">
                  <h3 className="timeline-item__role">{job.role}</h3>
                  <p className="timeline-item__company">{job.company}</p>

                  <ul className="timeline-item__points">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="education">
            <p className="education__heading">Education</p>
            <div className="education__list">
              {education.map((item, i) => (
                <Reveal as="div" key={item.degree} className="education__item" delay={i * 70}>
                  <span className="education__icon">{CAP_ICON}</span>
                  <div>
                    <h4>{item.degree}</h4>
                    <p className="education__school">{item.school}</p>
                    {item.period && <p className="education__period">{item.period}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
