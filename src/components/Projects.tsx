import { projects } from '../data'
import FloatingDecorations from './FloatingDecorations'
import Reveal from './Reveal'
import TagList from './TagList'

export default function Projects({ onOpen }: { onOpen: (index: number) => void }) {
  return (
    <section id="portfolio">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Portfolio
        </Reveal>
        <Reveal as="h2" className="title">
          Selected Works
        </Reveal>
        <div id="projects">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              className="proj"
              key={p.title}
              tabIndex={0}
              onClick={() => onOpen(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onOpen(i)
              }}
            >
              <div>
                <div className="cat">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <TagList items={p.tech} />
                <div className="row">
                  {p.buttons.map((b, j) => (
                    <span key={b.label} className={`btn${j ? '' : ' pri'}`}>
                      {b.label} <span className="arr">↗</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="shot">
                <div className="img" style={{ background: p.bg }}>
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} screenshot`} />
                  ) : (
                    <>
                      {p.title}
                      <br />
                      screenshot
                    </>
                  )}
                </div>

                <div className="ov">
                  <span>View details →</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <FloatingDecorations variant="work" />
    </section>
  )
}
