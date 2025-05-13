export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-dark z-50 py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-end">
        <ul className="flex gap-12 items-center">
          <li>
            <a href="#about" className="inline-flex items-center gap-12 text-green-400 hover:underline">
              <span>#</span>
              <span className="text-gray-300">Home</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="inline-flex items-center gap-12 text-green-400 hover:underline">
              <span>#</span>
              <span className="text-white font-semibold">Projetos</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
