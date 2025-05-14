import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectsList } from '../components/pages/projects/projects-list'
import { ProjectsPageStaticData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageStaticData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies
      }
    }
    `

  return fetchHygraphQuery(
    query,
    undefined,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}
