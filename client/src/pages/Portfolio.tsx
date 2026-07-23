/* Dark Cinematic Luxury: Portfolio with masonry grid, filter animation, hover effects */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Restaurant", "SaaS", "Fitness", "Real Estate", "Fashion", "Finance", "Luxury Cars"];

const projects = [
  { title: "Maison Luxe Dining", category: "Restaurant", image: "/manus-storage/portfolio-restaurant_e8d00944.jpg", desc: "Premium restaurant brand with immersive dining experience." },
  { title: "CloudScale SaaS", category: "SaaS", image: "/manus-storage/portfolio-saas_f685cbae.jpg", desc: "Enterprise cloud management platform." },
  { title: "PeakFit Pro", category: "Fitness", image: "/manus-storage/portfolio-fitness_41a165cb.jpg", desc: "Elite fitness tracking and coaching platform." },
  { title: "Prestige Estates", category: "Real Estate", image: "/manus-storage/portfolio-realestate_583e5aa1.jpg", desc: "Luxury real estate listing and virtual tours." },
  { title: "Atelier Noir", category: "Fashion", image: "/manus-storage/portfolio-fashion_55fbee32.jpg", desc: "High-end fashion brand e-commerce experience." },
  { title: "Quantum Finance", category: "Finance", image: "/manus-storage/portfolio-finance_4801a715.jpg", desc: "Next-gen trading platform with AI insights." },
  { title: "Velvet Motors", category: "Luxury Cars", image: "/manus-storage/portfolio-restaurant_e8d00944.jpg", desc: "Ultra-luxury car configurator and showroom." },
  { title: "Nova Dining", category: "Restaurant", image: "/manus-storage/portfolio-saas_f685cbae.jpg", desc: "Michelin-star restaurant digital experience." },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#A855F7]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        {/* Q watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[500px] h-[500px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg"
          >
            A curated selection of our finest work across industries and disciplines.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-[30%] right-[-150px] w-[400px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "aurora-gradient text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    : "border border-white/10 text-[#A3A3A3] hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative rounded-xl overflow-hidden glass-card"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-14 h-14 rounded-full aurora-gradient flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.4)]">
                        <ArrowUpRight size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[#7C3AED] font-body text-xs tracking-wider uppercase">{project.category}</span>
                    <h3 className="font-heading font-semibold text-lg text-white mt-2 mb-2">{project.title}</h3>
                    <p className="text-[#A3A3A3] font-body text-sm">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
