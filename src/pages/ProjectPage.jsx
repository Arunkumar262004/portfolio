import { useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { projects, profile } from '../data/resume'
import ProjectDetail from '../components/ProjectDetail'

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.key === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) document.title = `${project.name} · ${profile.name}`
    return () => {
      document.title = `${profile.name} · Full Stack Developer`
    }
  }, [project])

  if (!project) return <Navigate to="/#projects" replace />

  return (
    <section className="section project-page">
      <div className="container">
        <ProjectDetail project={project} onBack={() => navigate('/#projects')} />
      </div>
    </section>
  )
}
