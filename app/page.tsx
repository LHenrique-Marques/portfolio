import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { WorkExperienceSection } from './components/pages/home/work-experience'
import { WorkExperience } from './types/work-experience'
import { HomeOnlyData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import CertificadosSection from './components/pages/home/certificados-section/certificados-section'

export const metadata = {
  title: 'Henrique Marques',
}

const getPageData = async (): Promise<HomeOnlyData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies
      }
    }
    certifications(first: 3, where: { highlight: true }) {
      id
      title
      image {
        url
      }
      certificateUrl
    }
  }
`
  return fetchHygraphQuery(query, undefined, 1000 * 60 * 60 * 24)
}

const getExperiences = async (): Promise<WorkExperience[]> => {
  const experiencesQuery = `
    query {
      experiences(orderBy: startDate_DESC) {
        company
        role
        startDate
        endDate
        description {
          raw
        }
      }
    }
  `
  const { experiences } = await fetchHygraphQuery<{
    experiences: WorkExperience[]
  }>(experiencesQuery)

  return experiences
}

export default async function Home() {
  const data = await getPageData()
  const experiences = await getExperiences()

  if (!data || !data.page) {
    return (
      <p>
        Erro ao carregar dados. Verifique o slug &quot;home&quot; e se os campos
        foram publicados.
      </p>
    )
  }

  const { page: pageData } = data

  return (
    <>
      {/* HERO FORA da container para o background ocupar 100% */}
      <HeroSection homeInfo={pageData} />

      {/* As demais seções alinhadas na container */}
      <div className="container flex flex-col gap-16">
        <KnownTechs techs={pageData.knownTechs} />
        <WorkExperienceSection experiences={experiences} />
        <CertificadosSection certifications={data.certifications} />
        <HighlightedProjects projects={pageData.highlightProjects} />
      </div>
    </>
  )
}
