import { SectionTitle } from '../components/section-title'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'
import Image from 'next/image'

export const metadata = {
  title: 'Certificados',
}
interface Certification {
  id: string
  title: string
  image: {
    url: string
  }
  certificateUrl: string
}

async function getCertifications(): Promise<Certification[]> {
  const query = `
    query {
      certifications(orderBy: title_ASC) {
        id
        title
        image {
          url
        }
        certificateUrl
      }
    }
  `
  const { certifications } = await fetchHygraphQuery<{
    certifications: Certification[]
  }>(query)

  return certifications
}

export default async function CertificadosPage() {
  const certifications = await getCertifications()

  return (
    <section className="container w-full py-10">
      <SectionTitle subtitle="../certificados" title="Todos os Certificados" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {certifications.map(cert => (
          <div key={cert.id} className="flex flex-col items-center text-center">
            <h3 className="text-lg text-gray-100 font-semibold mb-2 min-h-[48px]">
              {cert.title}
            </h3>
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[420px]"
            >
              <Image
                width={420}
                height={300}
                src={cert.image.url}
                alt={`Certificado: ${cert.title}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
