import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}
