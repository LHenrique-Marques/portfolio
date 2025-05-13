interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-xl text-white shadow-md hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-green-800 text-sm px-3 py-1 rounded-full text-white">{tag}</span>
        ))}
      </div>
      <a href="#" className="text-green-400 inline-block mt-4 hover:underline">
        Ver projeto →
      </a>
    </div>
  );
}
