/* Dark Cinematic Luxury: Culture, Benefits, Open Positions, Application Form */
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Globe, Zap, Coffee, BookOpen, Users } from "lucide-react";

const positions = [
  { title: "Senior UI/UX Designer", type: "Full-time", location: "Remote", category: "Design" },
  { title: "React Developer", type: "Full-time", location: "Remote", category: "Engineering" },
  { title: "Full-Stack Engineer", type: "Full-time", location: "Hybrid", category: "Engineering" },
  { title: "AI/ML Engineer", type: "Full-time", location: "Remote", category: "Engineering" },
  { title: "Brand Strategist", type: "Full-time", location: "On-site", category: "Branding" },
  { title: "Project Manager", type: "Full-time", location: "Remote", category: "Management" },
];

const benefits = [
  { icon: <Heart size={22} />, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs." },
  { icon: <Globe size={22} />, title: "Remote-First", desc: "Work from anywhere in the world with flexible hours." },
  { icon: <Zap size={22} />, title: "Cutting-Edge Tools", desc: "Access to the latest design and development tools." },
  { icon: <BookOpen size={22} />, title: "Learning Budget", desc: "Annual budget for courses, conferences, and books." },
  { icon: <Coffee size={22} />, title: "Unlimited PTO", desc: "Take the time you need to recharge and create." },
  { icon: <Users size={22} />, title: "Collaborative Culture", desc: "Work with talented, passionate people from around the world." },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] right-[-100px] w-[350px] h-[350px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Join Our Team</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            Build the <span className="text-gradient">Future</span> With Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg">
            We're looking for exceptional talent who share our passion for digital excellence.
          </motion.p>
        </div>
      </section>

      {/* Culture */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden">
        <div className="absolute top-[20%] right-[-150px] w-[400px] h-[400px] bg-[#A855F7]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">Our <span className="text-gradient">Culture</span></h2>
            <p className="text-[#A3A3A3] font-body max-w-2xl mx-auto">
              We believe in craftsmanship, innovation, and creating an environment where the best work of your career happens.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="glass-card glass-card-hover p-8 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] mb-5 group-hover:bg-[#7C3AED]/20 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-[#A3A3A3] font-body text-sm">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute bottom-[10%] left-[-100px] w-[300px] h-[300px] bg-[#7C3AED]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">Open <span className="text-gradient">Positions</span></h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:border-[#7C3AED]/30 cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedRole(pos.title)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/3 transition-all duration-500" />
                <div className="relative z-10">
                  <h4 className="font-heading font-semibold text-white group-hover:text-[#A855F7] transition-colors">{pos.title}</h4>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[#A3A3A3] font-body text-xs">{pos.type}</span>
                    <span className="text-white/20">|</span>
                    <span className="text-[#A3A3A3] font-body text-xs">{pos.location}</span>
                    <span className="text-white/20">|</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-body">{pos.category}</span>
                  </div>
                </div>
                <button className="relative z-10 font-button font-semibold text-sm text-[#7C3AED] flex items-center gap-2 group/btn">
                  Apply Now
                  <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedRole && (
        <section className="relative py-24 border-t border-white/5 overflow-hidden">
          <div className="absolute top-[-100px] left-[30%] w-[400px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 lg:p-12 max-w-2xl mx-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/3 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-2xl text-white mb-2">Apply for {selectedRole}</h3>
                <p className="text-[#A3A3A3] font-body text-sm mb-8">Fill out the form below and we'll get back to you within 48 hours.</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Portfolio URL</label>
                    <input type="url" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Cover Letter</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors resize-none" />
                  </div>
                  <div>
                    <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Resume (PDF)</label>
                    <input type="file" accept=".pdf" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors" />
                  </div>
                  <button type="submit" className="w-full font-button font-semibold py-4 rounded-lg aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] active:scale-[0.98]">
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
