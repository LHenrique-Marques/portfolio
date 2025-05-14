import type { RichTextContent } from '@graphcms/rich-text-types'
import { ProjectSection } from './page-info'

export type HighlightedProject = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: string[]
}
export type HighlightedProjectsProps = {
  projects: HighlightedProject[]
}

export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
}

export type Technology = {
  name: string
}

export type Project = {
  slug: string
  title: string
  shortDescription: string
  description: {
    raw: RichTextContent
    text: string
  }
  thumbnail: { url: string }
  pageThumbnail: { url: string }
  technologies: string[]
  githubUrl?: string
  liveProjectUrl?: string
  section: ProjectSection[]
}
