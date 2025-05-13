import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML5", years: "3 anos de experiência", icon: <FaHtml5 /> },
  { name: "CSS", years: "3 anos de experiência", icon: <FaCss3Alt /> },
  { name: "JavaScript", years: "3 anos de experiência", icon: <FaJs /> },
  { name: "TypeScript", years: "3 anos de experiência", icon: <SiTypescript /> },
  { name: "React", years: "3 anos de experiência", icon: <FaReact /> },
  { name: "Next.js", years: "3 anos de experiência", icon: <SiNextdotjs /> },
  { name: "Node.js", years: "3 anos de experiência", icon: <FaNodeJs /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-dark text-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-green-400 text-sm mb-2">// competências</h2>
        <h3 className="text-3xl font-bold mb-10">Conhecimentos</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl flex flex-col items-start gap-2 shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-2xl text-green-400">{skill.icon}</div>
              <div className="font-semibold">{skill.name}</div>
              <div className="text-gray-400 text-sm">{skill.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
