import { useCallback, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { projects, sectionIds } from './data'
import type { Project } from './types'
import { useActiveSection } from './hooks/useActiveSection'
import { useParallax } from './hooks/useParallax'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'


export default function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const active = useActiveSection(sectionIds)
  useParallax()
  const close = useCallback(() => setSelected(null), [])

  return (
    <MotionConfig reducedMotion="user">
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={(i) => setSelected(projects[i])} />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={close} />
    </MotionConfig>
  )
}
