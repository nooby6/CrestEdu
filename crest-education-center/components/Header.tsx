export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Crest Education Center</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
