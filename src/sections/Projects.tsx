import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "BookWise",
      description: "Plataforma de avaliação de livros feita com Next.js e Prisma.",
      tags: ["Next.js", "Next Auth", "Stitches", "Radix", "TypeScript", "Prisma", "React Query"],
    },
    {
      title: "Ignite Call",
      description: "Sistema de agendamento de chamadas com integração com Google Calendar.",
      tags: ["Next.js", "Next Auth", "Stitches", "Radix", "TypeScript", "Prisma", "React Query"],
    },
  ];

  return (
    <section id="projects" className="bg-dark text-white py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-green-400 mb-2">// destaques</h2>
      <h3 className="text-3xl font-bold mb-10">Projetos em destaque</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
      <p className="mt-10 text-right text-sm text-gray-400">
        Se interessou?{" "}
        <a href="#" className="text-green-400 hover:underline">Ver todos →</a>
      </p>
    </section>
  );
}
