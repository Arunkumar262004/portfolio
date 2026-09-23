import { useEffect, useState } from 'react'
import { resolveImage } from '../utils/images'
import './ProjectGallery.css'

export default function ProjectGallery({ galleries }) {
  const [active, setActive] = useState(null)

  const step = (delta) => {
    setActive((cur) => {
      if (!cur) return cur
      const imgs = galleries[cur.galleryIndex].images
      const next = (cur.imageIndex + delta + imgs.length) % imgs.length
      return { ...cur, imageIndex: next }
    })
  }

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  if (!galleries || galleries.length === 0) return null

  const activeImage = active ? galleries[active.galleryIndex].images[active.imageIndex] : null
  const activeFrame = active ? galleries[active.galleryIndex].frame : null

  return (
    <div className="project-gallery">
      {galleries.map((gallery, gi) => (
        <div key={gallery.label} className="project-gallery__section">
          <p className="project-gallery__label">{gallery.label}</p>
          <div className={`project-gallery__grid project-gallery__grid--${gallery.frame}`}>
            {gallery.images.map((img, ii) => (
              <button
                key={img.src}
                type="button"
                className={`project-gallery__thumb project-gallery__thumb--${gallery.frame}`}
                onClick={() => setActive({ galleryIndex: gi, imageIndex: ii })}
              >
                <img src={resolveImage(img.src)} alt={img.caption} loading="lazy" />
                <span className="project-gallery__caption">{img.caption}</span>
              </button>
            ))}
          </div>
        </div>
      ))}

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button type="button" className="lightbox__close" onClick={() => setActive(null)} aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5 8 12l7 7" />
            </svg>
          </button>

          <figure
            className={`lightbox__frame lightbox__frame--${activeFrame}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={resolveImage(activeImage.src)} alt={activeImage.caption} />
            <figcaption>{activeImage.caption}</figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
