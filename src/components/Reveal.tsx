import type { ElementType, HTMLAttributes } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  /** Skip the .rv base class and only add .in when visible (used by the timeline). */
  plain?: boolean
}

/** Scroll-triggered fade and slide-up. Styles live in index.css (.rv / .in). */
export default function Reveal({ as: Tag = 'div', plain = false, className = '', children, ...rest }: RevealProps) {
  const [ref, seen] = useInView<HTMLElement>()
  const cls = [plain ? '' : 'rv', className, seen ? 'in' : ''].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
