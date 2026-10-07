import { useEffect } from 'react'

/** Moves every .deco element slightly with the pointer, scaled by its data-z depth. */
export function useParallax() {
  useEffect(() => {
    const decos = Array.from(document.querySelectorAll<HTMLElement>('.deco'))
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      decos.forEach((d) => {
        const z = Number(d.dataset.z) * 22
        d.style.transform = `translate(${x * z}px,${y * z}px)`
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
}
