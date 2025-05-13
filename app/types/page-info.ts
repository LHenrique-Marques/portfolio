import type { RichTextContent } from '@graphcms/rich-text-types'

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
}
