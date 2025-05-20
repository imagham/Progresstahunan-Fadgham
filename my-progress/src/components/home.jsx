import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, Instagram, Github } from "lucide-react";
import saya from "../assets/saya.jpg";

const projects = [
  {
    nama: "Taekwondo",
    kategori: "Ekstrakurikuler",
    pencapaian: "Naik Tingkat ke sabuk kuning strip hijau,dan juga menguasai materi baru seputar tendangan dan tangkisan.",
    progress: 80,
  },
  {
    nama: "Futsal",
    kategori: "Ekstrakurikuler",
    pencapaian: "Menang tanding, dan menguasai beberapa teknik dasar futsal, seperti passing, dribbling, dan teknik penyerang.",    progress: 70,
  },
  {
    nama: " Memanah",
    kategori: "Ekstrakurikuler",
    pencapaian: "Telah mempelajari beberapa Teknik dasar memanah seperti mcara memegang busur,dan juga kuncian.",
    progress: 90,
  },
  {
    nama: " Bahasa Arab",
    kategori: "Mapel",
    pencapaian: "Telah mempelajari Bahasa arab dari kitab Bayna Yadaik kitab 2 jilid 2 dari wahdah 9 sampai wahdah 11.",
    progress: 75,
  },
  {
    nama: " Tahfizh",
    kategori: "Mapel",
    pencapaian: "Telah menambah hafalan Al-Quran sebanyak 8 juz dan total hafalan yg saya miliki dalah 16 juz.",
    progress: 95,
  },
  {
    nama: "Ilmu Teknologi",
    kategori: "Mapel",
    pencapaian: "Telah Menguasai beberapa teknologi dasar seperti HTML, CSS, JavaScript, React, Tailwind, dan GIT.",
    progress: 80,
  },
  {
    nama: "Ilmu Alat",
    kategori: "Mapel",
    pencapaian: "Telah mempelajari beberapa bab baru tentang nahwu, shorof, adab , balaghah, dan lainnya.",
    progress: 80,
  },
  {
    nama: "Berenang",
    kategori: "Ekstrakurikuler",
    pencapaian: "Telah mempelajari beberapa teknik dasar berenang seperti berenang seperti, berenang gaya katak, dan gaya bebas.",
    progress: 90,
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-[#EAE4D5] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-3xl font-extrabold text-[#000000]">
            🎓 imagham
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-[#000000] font-medium text-sm">
            <a href="#beranda" className="hover:text-[#B6B09F] transition">
              Beranda
            </a>
            <a href="#proyek" className="hover:text-[#B6B09F] transition">
              Proyek
            </a>
            <a href="#tentang" className="hover:text-[#B6B09F] transition">
              Tentang
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#000000]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            className="md:hidden bg-[#F2F2F2] px-6 pb-4 space-y-3 py-4 text-[#000000] font-medium text-sm w-1/2 fixed top- right-0 z-50"
          >
            <a href="#beranda" className="block hover:text-[#B6B09F]">
              Beranda
            </a>
            <a href="#proyek" className="block hover:text-[#B6B09F]">
              Proyek
            </a>
            <a href="#tentang" className="block hover:text-[#B6B09F]">
              Tentang
            </a>
          </motion.div>
        )}
      </header>

      {/* HERnO */}
      <section className="bg-[#F2F2F2] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-[#000000] leading-snug md:leading-tight mb-4"
          >
            <span className="block text-[#B6B09F] mt-5 md:mt-8">
              Fadgham Khairul Hafizh
            </span>
            <p>
              <hr className="border-2 border-[#B6B09F] mt-8 w-1/3 mx-auto" />
            </p>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg mb-6"
          >
            Pantau dan dokumentasikan kegiatan ekstrakurikuler dan pelajaran
            sekolah secara interaktif dan rapi.
          </motion.p>
        </div>
      </section>
      {/*profile*/}
      <section className="min-h-screen bg-gradient-to-br from-[#F2F2F2] to-[#EAE4D5] flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl bg-gradient-to-br from-[#EAE4D5] to-[#F2F2F2] rounded-3xl shadow-2xl border border-[#B6B09F] overflow-hidden"
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Avatar & Socials */}
            <div className="flex flex-col items-center justify-center text-center p-10 bg-[#EAE4D5]">
              <img
                src={saya}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#B6B09F] shadow-md"
              />
              <h2 className="mt-5 text-2xl md:text-3xl font-bold text-[#000000]">
                Fadgham Khairul Hafizh
              </h2>
              <p className="text-[#B6B09F] mt-1 text-sm">
                Pelajar | Kreator | Photographer | Developer
              </p>

              <div className="flex gap-4 mt-6 text-[#000000]">
                <a
                  href="mailto:email@example.com"
                  className="hover:text-[#B6B09F] transition"
                >
                  <Mail size={22} />
                </a>
                <a
                  href="https://instagram.com/username"
                  target="_blank"
                  className="hover:text-[#B6B09F] transition"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://github.com/username"
                  target="_blank"
                  className="hover:text-[#B6B09F] transition"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>

            {/* Right: Bio Detail */}
            <div className="p-10 md:border-l border-[#B6B09F] flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                Tentang Saya
              </h3>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                Saya adalah siswa yg cukup aktif yang terus mengembangkan diri
                melalui proyek teknologi dan kegiatan ekstrakurikuler. Saya
                tertarik pada desain UI/UX, pengembangan web, photograpy,serta dalam bidang akademik dan saya juga
                membangun solusi digital yang bermanfaat bagi banyak orang.
              </p>

              <div className="mt-6">
                <h4 className="text-[#B6B09F] font-semibold mb-2">Keahlian</h4>
                <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    React
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    HTML
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    CSS
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    JavaScript
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    Figma
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    UI/UX
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    Photography
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    Bahasa arab
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    Shorof
                  </li>
                  <li className="bg-[#B6B09F] text-white px-3 py-1 rounded-full">
                    Nahwu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* End profile */}

      <section id="proyek" className="bg-[#F2F2F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <div className="inline-flex items-center gap-3 justify-center mb-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
              >
                {/* Badge Title */}
                <div className="inline-flex items-center justify-center gap-2 px-4 py-1 mb-4 rounded-full bg-[#EAE4D5] border border-[#B6B09F] shadow-sm">
                  <span className="text-sm font-medium text-[#000000] tracking-wide">
                    📌 Proyek Spesial
                  </span>
                </div>

                {/* Main Title with animation */}
                <motion.h2
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl font-extrabold text-[#000000] tracking-tight leading-tight"
                >
                  <span className="block text-[#B6B09F] mb-2">
                    Proyek Tahunan
                  </span>
                  <span className="bg-gradient-to-r from-[#000000] to-[#B6B09F] text-transparent bg-clip-text">
                    Fadgham Khairul Hafizh
                  </span>
                </motion.h2>

                {/* Subline separator */}
                <div className="mt-4 flex justify-center">
                  <div className="h-1 w-24 rounded-full bg-[#B6B09F] shadow-md" />
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm md:text-base text-[#6B6B6B] max-w-xl mx-auto">
                  Dokumentasi kreatif berbagai proyek dari semester ke semester
                  — dibuat dengan penuh semangat dan visi masa depan.
                </p>
              </motion.div>
            </div>
            <div className="h-1 w-24 mx-auto bg-[#B6B09F] rounded-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#000000] relative inline-block">
              Semester 1 - Semester 2
              <span className="block h-1 w-16 bg-[#B6B09F] mt-3 mx-auto rounded-full" />
            </h1>
            <p className="text-[#B6B09F] mt-2 text-sm md:text-base">
              Kumpulan pencapaian yang dikerjakan selama semester pertama dan semester kedua 🎯
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#EAE4D5] p-6 rounded-2xl shadow-md border border-[#B6B09F]"
              >
                <h3 className="text-xl font-semibold text-[#000000] mb-2">
                  {project.nama}
                </h3>
                <p className="text-sm text-[#B6B09F] mb-1">
                  Kategori:{" "}
                  <span className="font-medium">{project.kategori}</span>
                </p>
                <p className="text-sm text-[#B6B09F] mb-1">
                  Pencapaian: <span className="font-medium">{project.pencapaian}</span>
                </p>
                <br />
                <div className="w-full bg-[#F2F2F2] rounded-full h-3 mb-2">
                  <div
                    className="bg-[#B6B09F] h-3 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-sm text-right text-[#000000] font-semibold">
                  {project.progress}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
