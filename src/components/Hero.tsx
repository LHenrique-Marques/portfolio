import MinhaFoto from "../assets/perfil.png"; 

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
            <div className="flex justify-center">
        <img
          src={MinhaFoto}
          alt="Foto de Luis Henrique"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olá, eu sou o Henrique 👋</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">Desenvolvedor focado em soluções web com React, NestJS e inteligência artificial.</p>
      </div>
    </section>
  );
}
