export default function ContactForm() {
  return (
    <section id="contact" className="bg-dark text-white py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-green-400 mb-2">// Contato</h2>
      <h3 className="text-3xl font-bold mb-10">Vamos trabalhar juntos? Entre em contato</h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full p-3 rounded bg-[#1e293b] text-white outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full p-3 rounded bg-[#1e293b] text-white outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          rows={4}
          placeholder="Mensagem"
          className="w-full p-3 rounded bg-[#1e293b] text-white outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-dark font-semibold transition-colors"
        >
          Enviar mensagem →
        </button>
      </form>
    </section>
  );
}
