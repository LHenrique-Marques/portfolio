import type { RichTextContent } from '@graphcms/rich-text-types'
import type { Project } from './projects'

export type ProjectPageData = {
  project: Project
}
export type ProjectsPageStaticData = {
  projectsPage: {
    pageTitle: string
  }
  projects: Project[]
}
export type ProjectSection = {
  __typename: 'Section'
  title: string
  image?: {
    url: string
  }
}
export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: string[]
  profilePicture: {
    url: string
  }
  socials: {
    url: string
    iconSvg: string
  }[]
  knownTechs: {
    iconSvg: string
    name: string
    startDate: string
  }[]
  highlightProjects: {
    slug: string
    thumbnail: {
      url: string
    }
    title: string
    shortDescription: string
    technologies: string[]
  }[]
}
export type HomeOnlyData = {
  page: HomePageInfo
  certifications: {
    id: string
    title: string
    image: {
      url: string
    }
    certificateUrl: string
  }[]
}
