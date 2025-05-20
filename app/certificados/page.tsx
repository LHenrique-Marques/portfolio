import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'
import { SectionTitle } from '../components/section-title'
import { CertificadosContent } from './certificados-content'
import { HomeOnlyData } from '../types/page-info'

export const metadata = {
  title: 'Certificados',
}

export default async function CertificadosPage() {
  const query = `
    query {
        certifications {
          id
          title
          certificateUrl
          image {
            url
          }
        }
    }
  `
  const { certifications: pageData } = await fetchHygraphQuery<HomeOnlyData>(query)

  return (
    <section className="container w-full py-10 pt-32">
      <div className="flex flex-col items-center">
        <SectionTitle 
          subtitle="../certificados" 
          title="Todos os Certificados" 
          className="text-center [&>h3]:text-4xl" 
        />
        <CertificadosContent certifications={pageData} />
      </div>
    </section>
  )
}
