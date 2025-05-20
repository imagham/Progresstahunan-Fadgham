import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const project = state?.project;

  if (!project) {
    // fallback kalau akses langsung ke /project-detail
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-[#000000]">Tidak ada data proyek.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F2F2F2] to-[#EAE4D5] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#000000] hover:text-[#B6B09F] mb-8"
        >
          <ArrowLeft size={20} />
          Kembali
        </button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#EAE4D5] border border-[#B6B09F] p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-[#000000] mb-2">
            {project.nama}
          </h2>
          <p className="text-[#6B6B6B] mb-4 italic">{project.kategori}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-[#B6B09F] mb-2">Pencapaian:</h4>
            <p className="text-[#000000] leading-relaxed">
              {project.pencapaian}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-[#B6B09F] mb-2">Progress:</h4>
            <div className="w-full bg-[#F2F2F2] h-3 rounded-full">
              <div
                className="bg-[#B6B09F] h-3 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1 text-[#000000] font-medium">
              {project.progress}% Selesai
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
