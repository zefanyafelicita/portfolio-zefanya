import { useEffect, useState } from 'react'
import { sections, social } from '../data'
import { SocialIcon } from './Icons'

export default function Navbar({ active }: { active: string }) {
  const [small, setSmall] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="hd" className={small ? 'small' : ''}>
      <div className="pill">
        <a className="logo" href="#home">
          zefanya.✦
        </a>
        <nav id="nav" className={open ? 'open' : ''}>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? 'on' : ''} onClick={() => setOpen(false)}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="soc">
          {social.map((s) => (
            <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
        <button
          className={`burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i></i>
        </button>
      </div>
    </header>
  )
}
