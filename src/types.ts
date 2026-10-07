import type { SocialIconName } from './components/Icons'

export interface SectionLink {
  id: string
  label: string
}

export interface SocialLink {
  icon: SocialIconName
  label: string
  url: string
}

export interface ProjectButton {
  label: string
  /** Use '#' for a placeholder. Replace with the real URL when available. */
  url: string
}

export interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  contribution: string[]
  bg: string
  image?: string
  gallery?: string[]
  buttons: ProjectButton[]
  problem: string
  solution: string
  features: string[]
}

export interface SkillGroup {
  name: string
  color: string
  items: string[]
}

export type ExperienceGroup = 'Education' | 'Organizational Experiences' | 'Certifications'

export interface ExperienceItem {
  /** Which CV group the item is listed under. */
  group: ExperienceGroup
  /** Small chip label, e.g. 'Education' or 'Organization'. */
  type: string
  title: string
  organization: string
  date: string
  /** Short line shown on the card. */
  summary: string
  /** Longer text shown at the top of the modal. */
  description: string
  /** Responsibilities / achievements shown as a list in the modal. */
  details: string[]
  /** 0-3 photo paths, e.g. '/images/experience/pmr-1.jpg' (files live in public/). */
  gallery?: string[]
  /** Optional skills related to the experience. */
  skills?: string[]
  /** Optional link to the credential or certificate page. */
  link?: string
}
