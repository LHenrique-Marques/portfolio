export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-xl font-semibold text-gray-800 tracking-tight">
          Henrique.dev
        </span>
        <ul className="flex gap-6 text-sm text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition-colors">
              Projetos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
