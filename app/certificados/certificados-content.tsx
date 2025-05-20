'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Certification {
  id: string
  title: string
  certificateUrl: string
  image: {
    url: string
  }
}

export function CertificadosContent({
  certifications,
}: {
  certifications: Certification[]
}) {
  const [search, setSearch] = useState('')

  const filtered = certifications.filter((cert) =>
    cert.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 mt-4 mb-8 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 "
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {filtered.map((cert) => (
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
    </>
  )
}
