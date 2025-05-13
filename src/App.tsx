import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="about" className="p-8 max-w-4xl mx-auto">
        <SectionTitle>Sobre mim</SectionTitle>
        <p className="text-gray-700 text-lg">
          Sou um desenvolvedor com foco em back-end e front-end, com experiência em projetos como o RightChoiceAI usando React, NestJS e FastAPI.
        </p>
      </section>

      <section id="projects" className="p-8 max-w-6xl mx-auto">
        <SectionTitle>Projetos</SectionTitle>
        <Projects />
      </section>

      <section id="skills" className="p-8 max-w-6xl mx-auto">
        <SectionTitle>Habilidades</SectionTitle>
        <Skills />
      </section>

      <section id="contact" className="p-8 max-w-4xl mx-auto">
        <SectionTitle>Contato</SectionTitle>
        <Contact />
      </section>
    </>
  );
}

export default App;
