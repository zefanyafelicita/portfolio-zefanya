import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ExperienceItem } from '../types'
import TagList from './TagList'

interface Props {
  item: ExperienceItem | null
  onClose: () => void
}

/** Detail modal for Experience / Education. Reuses the .modal / .mbox / .x styles from ProjectModal. */
export default function ExperienceModal({ item, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [zoom, setZoom] = useState<string | null>(null)
  const [broken, setBroken] = useState<string[]>([])

  // Reset lightbox / broken-image state whenever a different item opens.
  useEffect(() => {
    setZoom(null)
    setBroken([])
  }, [item])

  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      // ESC closes the enlarged photo first, then the modal.
      if (zoom) setZoom(null)
      else onClose()
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose, zoom])

  const images = (item?.gallery ?? []).slice(0, 3).filter((src) => !broken.includes(src))

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key={item.title + item.date}
          className="modal open"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
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
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <button className="x" aria-label="Close" onClick={onClose} ref={closeRef}>
              ×
            </button>

            <span className="xchip">{item.type}</span>
            <h2 className="xmt">{item.title}</h2>
            <div className="xmeta">
              <strong>{item.organization}</strong>
              <span className="xmdate">{item.date}</span>
            </div>

            <h4>Overview</h4>
            <p>{item.description}</p>

            {item.details.length > 0 && (
              <>
                <h4>
                  {item.group === 'Education'
                    ? 'Highlights'
                    : item.group === 'Certifications'
                      ? 'What I Learned'
                      : 'Responsibilities'}
                </h4>
                <ul>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </>
            )}
            
            {images.length > 0 && (
              <>
                <h4>Gallery</h4>
                <div className={`xgal n${images.length}`}>
                  {images.map((src, i) => (
                    <button
                      type="button"
                      key={src}
                      className="xph"
                      aria-label={`Enlarge photo ${i + 1} of ${images.length}`}
                      onClick={() => setZoom(src)}
                    >
                      <img
                        src={src}
                        alt={`${item.title} photo ${i + 1}`}
                        loading="lazy"
                        onError={() => setBroken((b) => [...b, src])}
                      />
                    </button>
                  ))}
                </div>
              </>
            )}

            {item.skills && item.skills.length > 0 && (
              <>
                <h4>Skills</h4>
                <TagList items={item.skills} />
              </>
            )}

            {item.link && (
              <a
                className="btn pri"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 24 }}
              >
                View Credential <span className="arr">↗</span>
              </a>
            )}
          </motion.div>

          <AnimatePresence>
            {zoom && (
              <motion.div
                key="zoom"
                className="xlight"
                role="dialog"
                aria-modal="true"
                aria-label="Enlarged photo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom(null)
                }}
              >
                <motion.img
                  src={zoom}
                  alt={`${item.title} enlarged`}
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <button className="x" aria-label="Close photo" onClick={() => setZoom(null)}>
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
