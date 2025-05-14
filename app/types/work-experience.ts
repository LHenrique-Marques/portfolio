import type { RichTextContent } from '@graphcms/rich-text-types'

export type WorkExperience = {
  company: string
  role: string
  startDate: string
  endDate?: string | null
  description: {
    raw: RichTextContent
  }
}
