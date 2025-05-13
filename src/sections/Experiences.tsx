import ExperienceCard from "../components/ExperienceCard";

export default function Experiences() {
  const experiences = [
    {
      company: "Workwolf",
      role: "Desenvolvedor Front-End",
      date: "Out 2022 — o momento",
      description:
        "Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, TypeScript e Figma. Para o planejamento dos sprints, é utilizado o Jira.",
      tags: ["Next.js", "Next Auth", "Stitches", "Radix", "TypeScript", "Prisma", "React Query"],
    },
    {
      company: "Cidade Alta",
      role: "Desenvolvedor Front-End",
      date: "Mai 2022 — o momento",
      description:
        "Desenvolvimento e manutenção de interfaces usando React, Vite, Typescript, Redux, Styled Components e Figma. Para o planejamento dos sprints, é utilizado o Azure DevOps. Painel administrativo, sistema de inventário e visualização 3D.",
      tags: ["Vite", "React", "Redux", "Azure DevOps", "TypeScript"],
    },
  ];

  return (
    <section id="experiences" className="bg-dark text-white py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-green-400 mb-2">// experiências</h2>
      <h3 className="text-3xl font-bold mb-10">Experiência Profissional</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
}
