import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery($slug: String!) {
    project(where: {slug: $slug}) {
      pageThumbnail { url }
      thumbnail { url }
      section {
        __typename
        ... on Section {
          title
          image { url }
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies
      liveProjectUrl
      githubUrl
    }
  }
`
  const data = await fetchHygraphQuery<ProjectPageData>(
    query,
    { slug },
    1000 * 60 * 60 * 24,
  )

  return data
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug)

  if (!project?.title) return notFound()

  return (
    <>
      <ProjectDetails project={project} />
      {Array.isArray(project.section) && (
        <ProjectSections sections={project.section} />
      )}
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query {
      projects {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description?.text ?? '',
    openGraph: {
      images: [
        {
          url: project.thumbnail?.url ?? 'https://http.cat/404',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
