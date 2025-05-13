interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  company,
  role,
  date,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md text-white">
      <h4 className="text-lg font-bold">{company}</h4>
      <p className="text-sm text-gray-400">{role} — {date}</p>
      <p className="text-gray-300 mt-2 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-green-800 text-sm px-3 py-1 rounded-full text-white">{tag}</span>
        ))}
      </div>
    </div>
  );
}
