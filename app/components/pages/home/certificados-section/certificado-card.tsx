'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animations'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '../../../../components/link'

interface Certification {
  id: string
  title: string
  image: {
    url: string
  }
  certificateUrl?: string
}

interface CertificadoCardProps {
  cert: Certification
}

export const CertificadoCard = ({ cert }: CertificadoCardProps) => {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50 mb-4"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {cert.title}
        </motion.h3>

        {cert.certificateUrl && (
          <Link href={cert.certificateUrl} target="_blank">
            Ver certificado
            <HiArrowNarrowRight />
          </Link>
        )}
      </div>

      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={cert.image.url}
            width={420}
            height={304}
            alt={`Imagem do certificado ${cert.title}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </a>
      </motion.div>
    </motion.div>
  )
}