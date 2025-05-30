'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import { techBadgeAnimation } from '@/app/lib/animations'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full overflow-hidden py-20 pt-32 lg:h-[755px]">
      {/* Background que ocupa a tela toda */}
      <div className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat z-0" />

      {/* Conteúdo centralizado */}
      <div className="container relative z-10 flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Luis Henrique Marques</h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction?.raw ?? {}} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech}
                key={tech}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, i) => (
                <a
                  key={i}
                  href={contact.url ?? 'https://http.cat/404'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-6 h-6 flex items-center justify-center hover:text-white transition-colors"
                  aria-label={`Link para ${contact.url}`}
                >
                  {contact.iconSvg ? (
                    <span
                      className="w-6 h-6 text-white inline-block"
                      dangerouslySetInnerHTML={{ __html: contact.iconSvg }}
                    />
                  ) : (
                    <span>❌</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
            width={420}
            height={404}
            src={homeInfo.profilePicture?.url ?? 'https://http.cat/404'}
            alt="Foto de perfil do Henrique Marques"
          />
        </motion.div>
      </div>
    </section>
  )
}
