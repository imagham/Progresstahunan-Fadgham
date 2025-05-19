import { useState } from "react";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-[#EAE4D5] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Judul */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#000000] tracking-tight">
            🎓 Progres imagham
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-[#000000] font-medium text-sm">
            <a href="#beranda" className="hover:text-[#B6B09F] transition">Beranda</a>
            <a href="#proyek" className="hover:text-[#B6B09F] transition">Proyek</a>
            <a href="#tentang" className="hover:text-[#B6B09F] transition">Tentang</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#000000]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 flex flex-col gap-3 text-[#000000] text-sm font-medium">
            <a href="#beranda" className="hover:text-[#B6B09F]">Beranda</a>
            <a href="#proyek" className="hover:text-[#B6B09F]">Proyek</a>
            <a href="#tentang" className="hover:text-[#B6B09F]">Tentang</a>
          </div>
        </div>
      </header>

      {/* HERO */}
     <section className="bg-[#F2F2F2] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[#000000] mb-6 leading-tight"
        >
          Selamat Datang di Dashboard<br />
          <span className="text-[#B6B09F]">Progress Tahunan Fadgham Khairul Hafizh</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#B6B09F] max-w-2xl mx-auto text-lg mb-8"
        >
          Pantau dan dokumentasikan semua proyek kegiatan ekstrakurikuler dan mata pelajaran
          dengan visualisasi interaktif yang rapi, modern, dan informatif.
        </motion.p>

        <motion.a
          href="#proyek"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#B6B09F] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#a59b8a] transition"
        >
          Lihat Proyek Sekarang
        </motion.a>
      </div>
    </section>
    </>
  );
};

export default Home;
