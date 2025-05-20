'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '../../../../components/section-title'

interface Certification {
  id: string
  title: string
  image: {
    url: string
  }
  certificateUrl?: string
}

interface CertificadosSectionProps {
  certifications?: Certification[]
}

export default function CertificadosSection({
  certifications = [],
  }: CertificadosSectionProps) {
  return (
    <section className="w-full">
      <SectionTitle subtitle="../certificados" title="Certificados" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {certifications.map(cert => (
          <div
            key={cert.id}
            className="flex flex-col items-center text-center justify-between"
          >
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

      <div className="w-full flex justify-center mt-10">
        <Link
          href="/certificados"
          className="text-gray-100 hover:underline text-sm md:text-base"
        >
          Ver todos certificados →
        </Link>
      </div>
    </section>
  )
}