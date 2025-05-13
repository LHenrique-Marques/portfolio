interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Ver no GitHub →
      </a>
    </div>
  );
}
