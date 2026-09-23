import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, projectCategories } from '../data/resume'
import { IconArrowRight } from './Icons'
import ProjectThumb from './ProjectThumb'
import Reveal from './Reveal'
import './Projects.css'

export default function Projects() {
  const [category, setCategory] = useState('all')

  const visible = category === 'all' ? projects : projects.filter((p) => p.category === category)

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">My Work</p>
          <h2>Featured Projects</h2>
        </Reveal>

        <div className="project-tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`project-tab${category === cat.key ? ' project-tab--active' : ''}`}
              onClick={() => setCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <Reveal as="article" key={project.key} className="project-card" delay={i * 90}>
              <ProjectThumb project={project} />

              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to={`/projects/${project.key}`} className="project-card__link">
                View Case Study
                <IconArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
