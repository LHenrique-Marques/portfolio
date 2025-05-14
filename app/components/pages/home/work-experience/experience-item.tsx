'use client'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { motion } from 'framer-motion'
import { WorkExperience } from '@/app/types/work-experience'
import { RichText } from '@/app/components/rich-text'
import { fadeUpAnimation } from '@/app/lib/animations'
type ExperienceItemProps = {
  experience: WorkExperience
}
export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { endDate, company, description, role } = experience
  const startDate = new Date(experience.startDate)
  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'O momento'
  const end = endDate ? new Date(endDate) : new Date()
  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12
  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`
  return (
    <motion.div
      className="grid grid-cols-[1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <strong className="text-gray-300">{role}</strong>
          <span className="text-gray-400 font-medium">@ {company}</span>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={description?.raw ?? {}} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
