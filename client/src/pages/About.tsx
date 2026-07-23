/* Dark Cinematic Luxury: About page with mission, vision, values, timeline */
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Zap, TrendingUp, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/about-cube-bg_c81b427b.jpg" alt="About" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/70 to-[#050505]" />
        </div>
        {/* Q watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[600px] h-[600px]" />
        </div>
        <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[20%] w-[300px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6"
          >
            We Engineer <span className="text-gradient">Digital Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg"
          >
            Founded in 2019, QuatrixWeb is a premium digital agency that crafts unforgettable digital experiences for ambitious brands worldwide.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-[10%] left-[-100px] w-[400px] h-[400px] bg-[#A855F7]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target size={28} />, title: "Our Mission", desc: "To empower ambitious brands with digital experiences that drive growth, build trust, and create lasting impressions in an ever-evolving digital landscape." },
              { icon: <Eye size={28} />, title: "Our Vision", desc: "To be the global standard for premium digital craftsmanship — where every pixel, every interaction, and every line of code tells a story of excellence." },
              { icon: <Heart size={28} />, title: "Our Values", desc: "Innovation without compromise. Precision in every detail. Transparency in every interaction. And an unwavering commitment to exceeding expectations." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card glass-card-hover p-10 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl aurora-gradient flex items-center justify-center text-white mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-4">{item.title}</h3>
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 border-t border-white/5">
        <div className="absolute top-[20%] right-[-100px] w-[350px] h-[350px] bg-[#7C3AED]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#3B82F6] to-[#A855F7] opacity-30" />

            {[
              { year: "2019", title: "Founded", desc: "QuatrixWeb was born from a vision to redefine digital craftsmanship." },
              { year: "2020", title: "First 50 Clients", desc: "Rapid growth with 50+ successful projects delivered across industries." },
              { year: "2021", title: "AI Division", desc: "Launched our AI & Automation division to serve forward-thinking enterprises." },
              { year: "2022", title: "Global Expansion", desc: "Expanded operations globally with teams across 3 continents." },
              { year: "2023", title: "200+ Projects", desc: "Reached the milestone of 200+ delivered projects with 98% satisfaction." },
              { year: "2024", title: "Innovation Award", desc: "Recognized as one of the top digital agencies for innovative design." },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-center mb-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <span className="text-[#7C3AED] font-heading font-bold text-lg">{item.year}</span>
                  <h4 className="font-heading font-semibold text-white text-xl mb-2">{item.title}</h4>
                  <p className="text-[#A3A3A3] font-body text-sm">{item.desc}</p>
                </div>
                <div className="absolute left-6 lg:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.5)] z-10" />
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="absolute bottom-[10%] left-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">
              Why Choose <span className="text-gradient">QuatrixWeb</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Lightning Fast Delivery", desc: "We deliver premium quality without compromising on timelines. Our agile process ensures rapid iterations and swift launches." },
              { icon: <Award size={22} />, title: "Award-Winning Design", desc: "Our work consistently earns recognition from Awwwards, CSS Design Awards, and FWA for exceptional digital experiences." },
              { icon: <Users size={22} />, title: "Dedicated Team", desc: "Each project gets a dedicated team of designers, developers, and strategists who are deeply invested in your success." },
              { icon: <TrendingUp size={22} />, title: "Growth-Focused", desc: "We don't just build websites — we build revenue-generating machines with conversion optimization at the core." },
              { icon: <Clock size={22} />, title: "24/7 Support", desc: "Round-the-clock support ensures your digital presence is always running smoothly, with rapid response times." },
              { icon: <Target size={22} />, title: "Strategic Approach", desc: "Every decision is data-driven and strategically aligned with your business goals for maximum impact." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card glass-card-hover p-6 flex gap-5 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] shrink-0 group-hover:bg-[#7C3AED]/20 transition-colors">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="font-heading font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
