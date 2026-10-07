import { sections } from '../data'

export default function Footer() {
  return (
    <footer>
      <nav className="fnav" aria-label="Footer">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </nav>
      © 2026 Zefanya Felicita Adithya
    </footer>
  )
}
