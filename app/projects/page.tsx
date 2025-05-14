import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectsList } from '../components/pages/projects/projects-list'
import { ProjectPageData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectPageData> => {
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
  const { project } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={[project]} />
    </>
  )
}
