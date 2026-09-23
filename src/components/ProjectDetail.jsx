import { profile } from '../data/resume'
import { IconArrowLeft, IconCheck, IconGithub } from './Icons'
import ProjectThumb from './ProjectThumb'
import ProjectGallery from './ProjectGallery'
import './ProjectDetail.css'

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="project-detail">
      <button type="button" className="project-detail__back" onClick={onBack}>
        <IconArrowLeft />
        Back to Projects
      </button>

      <div className="project-detail__top">
        <ProjectThumb project={project} size="lg" />

        <div className="project-detail__info">
          <h3>{project.name}</h3>
          <p className="project-detail__tagline">{project.tagline}</p>
          <p className="project-detail__desc">{project.description}</p>

          <div className="project-detail__stack">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <a
            className="btn btn--ghost project-detail__github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub />
            View on GitHub
          </a>
        </div>
      </div>

      <div className="project-detail__grid">
        <div>
          <h4>My Contribution</h4>
          <ul className="project-detail__list">
            {project.contribution.map((item, i) => (
              <li key={i}>
                <IconCheck className="project-detail__check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Key Features</h4>
          <ul className="project-detail__list">
            {project.features.map((item, i) => (
              <li key={i}>
                <IconCheck className="project-detail__check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ProjectGallery galleries={project.galleries} />
    </div>
  )
}
