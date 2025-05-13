import MinhaFoto from "../assets/perfil.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-24 bg-white text-gray-900">
      <img
        src={MinhaFoto}
        alt="Foto de Luis Henrique"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-md border border-gray-300"
      />
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Olá, eu sou o Henrique 👋</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Desenvolvedor focado em soluções web com <strong>React</strong>, <strong>NestJS</strong> e <strong>Inteligência Artificial</strong>.
        </p>
      </div>
    </section>
  );
}
