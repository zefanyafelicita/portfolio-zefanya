import { skills } from '../data'
import FloatingDecorations from './FloatingDecorations'
import Reveal from './Reveal'
import TagList from './TagList'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Skills
        </Reveal>
        <Reveal as="h2" className="title">
          Technologies I Use
        </Reveal>
        <div className="grid" id="skgrid">
          {skills.map((g) => (
            <Reveal className="sk" key={g.name}>
              <h3>
                <span className="dot" style={{ background: g.color }}></span>
                {g.name}
              </h3>
              <TagList items={g.items} />
            </Reveal>
          ))}
        </div>
      </div>
      <FloatingDecorations variant="skills" />
    </section>
  )
}
