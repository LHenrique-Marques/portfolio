import MinhaFoto from "../assets/perfil.png"; 

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 py-16 bg-white">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Luis Henrique Marques
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Desenvolvedor Backend com foco em APIs modernas e sistemas robustos.
        </p>
        <a
          href="https://github.com/LHenrique-Marques"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
        >
          Ver GitHub
        </a>
      </div>
      <div className="flex justify-center">
        <img
          src={MinhaFoto}
          alt="Foto de Luis Henrique"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
