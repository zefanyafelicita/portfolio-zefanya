import { useCallback, useState } from 'react'
import { experience } from '../data'
import type { ExperienceGroup, ExperienceItem } from '../types'
import ExperienceModal from './ExperienceModal'
import FloatingDecorations from './FloatingDecorations'
import Reveal from './Reveal'
import type { CSSProperties } from 'react'
import Glyph from './Glyph'

const groups: ExperienceGroup[] = ['Education', 'Organizational Experiences', 'Certifications']

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Experience
        </Reveal>
        <Reveal as="h2" className="title">
          Experience &amp; Education
        </Reveal>

        {groups.map((g) => (
          <div className="xgroup" key={g}>
            <Reveal as="h3" className="xhead">
              {g}
            </Reveal>
            {experience
              .filter((e) => e.group === g)
              .map((e) => (
                <Reveal className="xwrap" key={e.title + e.date}>
                  <button
                    type="button"
                    className={`xrow ${e.type === 'Education' ? 'edu' : 'org'}`}
                    onClick={() => setSelected(e)}
                    aria-haspopup="dialog"
                  >
                    <span className="xdate">{e.date}</span>
                    <span className="xmain">
                      <span className="xchip">{e.type}</span>
                      <span className="xtitle">{e.title}</span>
                      <span className="xorg">{e.organization}</span>
                      <span className="xsum">{e.summary}</span>
                    </span>
                    <span className="xgo">
                      View details <span className="arr">↗</span>
                    </span>
                  </button>
                </Reveal>
              ))}
          </div>
        ))}
      </div>
      <FloatingDecorations variant="exp" />
      <div
        className="deco y"
        data-z="1.2"
        style={{ left: '62%', top: '6%', '--d': '6s', '--dl': '-1s' } as CSSProperties}
      >
        <Glyph name="star" size={30} />
      </div>
      <div
        className="deco"
        data-z="0.8"
        style={{ left: '78%', top: '12%', '--d': '8s', '--dl': '-3s' } as CSSProperties}
      >
        <Glyph name="star" size={20} />
      </div>
      <div
        className="deco p"
        data-z="1.5"
        style={{ left: '90%', top: '4%', '--d': '7s', '--dl': '-2s' } as CSSProperties}
      >
        <Glyph name="spark" size={26} />
      </div>
      <ExperienceModal item={selected} onClose={close} />
    </section>
  )
}
