import type { CSSProperties } from 'react'
import Glyph, { type GlyphName } from './Glyph'

export type DecoVariant = 'hero' | 'work' | 'about' | 'skills' | 'exp' | 'contact'

const sets: Record<DecoVariant, GlyphName[]> = {
  hero: ['star', 'arrow', 'spark', 'moon', 'dot', 'code', 'star', 'dot'],
  work: ['arrow', 'star', 'tri', 'spark', 'dot', 'star'],
  about: ['star', 'arrow', 'spark', 'heart', 'dot', 'moon'],
  skills: ['code', 'dot', 'spark', 'star', 'code', 'dot'],
  exp: ['dot', 'star', 'dot', 'moon', 'spark', 'dot'],
  contact: ['heart', 'star', 'spark', 'heart', 'star', 'moon'],
}
const order: DecoVariant[] = ['hero', 'work', 'about', 'skills', 'exp', 'contact']
const colors = ['', 'y', 'p']

interface Deco {
  glyph: GlyphName
  size: number
  left: string
  top: string
  d: string
  dl: string
  z: string
  color: string
}

// A seeded generator keeps every deco in the same spot on each load.
let seed = 7
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280

const built = Object.fromEntries(
  order.map((variant) => [
    variant,
    sets[variant].map<Deco>((glyph, i) => {
      const size = 14 + Math.round(rnd() * 22)
      const left = (4 + rnd() * 88).toFixed(0)
      const top = (6 + rnd() * 84).toFixed(0)
      const d = (5 + rnd() * 5).toFixed(1)
      const dl = (rnd() * 5).toFixed(1)
      const z = (0.3 + rnd() * 1.2).toFixed(2)
      return { glyph, size, left, top, d, dl, z, color: colors[i % 3] }
    }),
  ]),
) as Record<DecoVariant, Deco[]>

/** Render as the last children of a positioned section so they sit behind the content. */
export default function FloatingDecorations({ variant }: { variant: DecoVariant }) {
  return (
    <>
      {built[variant].map((d, i) => (
        <div
          key={i}
          className={`deco ${d.color}`.trim()}
          data-z={d.z}
          style={{ left: `${d.left}%`, top: `${d.top}%`, '--d': `${d.d}s`, '--dl': `-${d.dl}s` } as CSSProperties}
        >
          <Glyph name={d.glyph} size={d.size} />
        </div>
      ))}
    </>
  )
}
