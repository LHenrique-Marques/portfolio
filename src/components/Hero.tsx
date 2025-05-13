import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="about"
      className="bg-dark text-white py-20 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Texto */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-green-400">// Olá, meu nome é</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Henrique Marques</h1>
          <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
            Sou desenvolvedor full stack apaixonado por tecnologia. Com mais de{" "}
            <span className="font-bold text-white">5 anos de experiência.</span> Meu
            objetivo é criar interfaces de usuário{" "}
            <span className="font-semibold text-white">
              bonitas e funcionais
            </span>, além de liderar equipes técnicas em projetos desafiadores. Estou
            sempre aberto a novas oportunidades e desafios.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              "Next.js",
              "Next Auth",
              "Stitches",
              "Radix",
              "TypeScript",
              "Prisma",
              "React Query",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="bg-green-800 text-sm px-3 py-1 rounded-full text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botão e redes sociais */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-dark px-6 py-3 rounded-md font-medium flex items-center gap-2 transition"
            >
              Entre em contato →
            </a>

            <div className="flex gap-4 text-gray-400 text-xl">
              <a href="https://github.com/teuGitHub" target="_blank">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/teuLinkedin" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com/teuCanal" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://wa.me/55teuNumero" target="_blank">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <img
          src={profile}
          alt="Foto de perfil"
          className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-xl mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}
