import { resolveImage } from '../utils/images'
import './ProjectThumb.css'

const STRIP_COUNT = 6

export default function ProjectThumb({ project, size = 'md' }) {
  const gallery = project.galleries?.[0]
  const cover = gallery?.images?.[0]

  if (gallery?.frame === 'phone' && gallery.images.length > 1) {
    const strip = gallery.images.slice(0, STRIP_COUNT)
    return (
      <div className={`project-thumb project-thumb--${size} project-thumb--strip`}>
        {strip.map((img) => (
          <img key={img.src} src={resolveImage(img.src)} alt="" />
        ))}
      </div>
    )
  }

  if (cover) {
    return (
      <div
        className={`project-thumb project-thumb--${size} project-thumb--photo project-thumb--${gallery.frame}`}
      >
        <img src={resolveImage(cover.src)} alt="" />
      </div>
    )
  }

  return (
    <div className={`project-thumb project-thumb--${size}`} aria-hidden="true">
      <div className="project-thumb__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-thumb__body">
        <span className="project-thumb__monogram">{project.name.charAt(0)}</span>
        <div className="project-thumb__lines">
          <span className="project-thumb__line project-thumb__line--w60" />
          <span className="project-thumb__line project-thumb__line--w40" />
          <span className="project-thumb__line project-thumb__line--w70" />
        </div>
      </div>
    </div>
  )
}
