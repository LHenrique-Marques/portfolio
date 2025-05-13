import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import About from "./sections/About";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <section className="pt-28 pb-20 border-b border-gray-200">
          <Hero />
        </section>

        <section id="about" className="py-20 border-b border-gray-200">
          <SectionTitle>Sobre mim</SectionTitle>
          <About />
        </section>

        <section id="projects" className="py-20 border-b border-gray-200">
          <SectionTitle>Projetos</SectionTitle>
          <Projects />
        </section>

        <section id="skills" className="py-20 border-b border-gray-200">
          <SectionTitle>Habilidades</SectionTitle>
          <Skills />
        </section>

        <section id="contact" className="py-20">
          <SectionTitle>Contato</SectionTitle>
          <Contact />
        </section>
      </main>
    </div>
  );
}