import { useState } from "react";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // header
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo / Judul */}
        <h1 className="text-xl font-bold text-blue-600">
          Proyek Sekolah
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Beranda</a>
          <a href="#" className="hover:text-blue-600">Proyek</a>
          <a href="#" className="hover:text-blue-600">Tentang</a>
        </nav>

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Beranda</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Proyek</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Tentang</a>
        </div>
      )}
    </header>
    // end header
  );
};

export default Home;
