export type GlyphName = 'star' | 'moon' | 'spark' | 'dot' | 'arrow' | 'code' | 'heart' | 'tri'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2 } as const

export default function Glyph({ name, size }: { name: GlyphName; size: number }) {
  const box = { width: size, height: size, viewBox: '0 0 24 24' }
  switch (name) {
    case 'star':
      return (
        <svg {...box} {...stroke} strokeLinejoin="round" strokeLinecap="round">
          <path d="M12 3l2.6 5.8 6.2.7-4.6 4.2 1.3 6.2L12 16.8 6.5 20l1.3-6.2L3.2 9.5l6.2-.7z" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...box} {...stroke} strokeLinecap="round">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...box} {...stroke} strokeLinecap="round">
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
        </svg>
      )
    case 'dot':
      return (
        <svg {...box}>
          <circle cx="12" cy="12" r="8" fill="currentColor" />
        </svg>
      )
    case 'arrow':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" {...stroke} strokeLinecap="round">
          <path d="M6 36c10-4 22-8 30-22M36 14l-9 2M36 14l1 9" />
        </svg>
      )
    case 'code':
      return (
        <svg {...box} {...stroke} strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...box} {...stroke} strokeLinejoin="round">
          <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" />
        </svg>
      )
    case 'tri':
      return (
        <svg {...box} {...stroke} strokeLinejoin="round">
          <path d="M12 4l9 16H3z" />
        </svg>
      )
  }
}
