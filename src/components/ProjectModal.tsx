import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../types'
import TagList from './TagList'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.title}
          className="modal open"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            className="mbox"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <button className="x" aria-label="Close" onClick={onClose} ref={closeRef}>
              ×
            </button>
            <div className="shot" style={{ marginBottom: 20 }}>
              <div className="img" style={{ background: project.bg }}>
                {project.image ? (
                  <img src={project.image} alt={`${project.title} screenshot`} />
                ) : (
                  project.title
                )}
              </div>
            </div>
            <div className="cat">{project.category}</div>
            <h2>{project.title}</h2>
            <h4>Overview</h4>
            <p>{project.description}</p>
            <h4>Problem</h4>
            <p>{project.problem}</p>
            <h4>Solution</h4>
            <p>{project.solution}</p>
            <h4>Features</h4>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h4>Technology</h4>
            <TagList items={project.tech} />
            <h4>My contribution</h4>
            <ul>
              {project.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h4>Gallery</h4>
            <div className="gal">
              {project.gallery?.length
                ? project.gallery.map((src, i) => (
                    <div key={src}>
                      <img src={src} alt={`${project.title} screen ${i + 1}`} loading="lazy" />
                    </div>
                  ))
                : [
                    { bg: '#F6C6D8', label: 'Screen 1' },
                    { bg: '#FFF0A8', label: 'Screen 2' },
                    { bg: '#E9E7FF', label: 'Screen 3' },
                  ].map((s) => (
                    <div key={s.label} style={{ background: s.bg }}>
                      {s.label}
                    </div>
                  ))}
            </div>
            <h4>Links</h4>
            <div className="row">
              {project.buttons.map((b) =>
                b.url === '#' ? (
                  <a key={b.label} className="btn" href="#" onClick={(e) => e.preventDefault()}>
                    {b.label} ↗
                  </a>
                ) : (
                  <a key={b.label} className="btn" href={b.url} target="_blank" rel="noopener noreferrer">
                    {b.label} ↗
                  </a>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
