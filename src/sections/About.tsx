import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-center text-gray-700">
      <SectionTitle>Sobre mim</SectionTitle>
      <p className="text-lg leading-relaxed">
        Sou desenvolvedor fullstack com foco em <strong>React</strong>, <strong>NestJS</strong> e <strong>FastAPI</strong>. 
        Tenho experiência com integração de APIs, arquitetura de software e soluções inteligentes com IA.
      </p>
    </div>
  );
};

export default About;
