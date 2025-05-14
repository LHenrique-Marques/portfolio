import type { RichTextContent } from '@graphcms/rich-text-types'

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

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
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
  technologies: { name: string }[]
  githubUrl?: string
  liveProjectUrl?: string
  sections: ProjectSection[]
}
