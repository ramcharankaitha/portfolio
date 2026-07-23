/* Dark Cinematic Luxury: Horizontal timeline with animated steps */
import { motion } from "framer-motion";
import { Compass, Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: <Compass size={28} />, title: "Discover", desc: "We dive deep into your brand, goals, audience, and competitive landscape to build a strategic foundation." },
  { icon: <Search size={28} />, title: "Research", desc: "Data-driven insights, user research, and market analysis shape every design and technical decision." },
  { icon: <PenTool size={28} />, title: "Design", desc: "Wireframes, prototypes, and high-fidelity designs crafted with precision and tested for maximum impact." },
  { icon: <Code2 size={28} />, title: "Develop", desc: "Clean, performant code brought to life with cutting-edge technology stacks and rigorous testing." },
  { icon: <Rocket size={28} />, title: "Launch", desc: "Strategic deployment, performance monitoring, and ongoing optimization to ensure lasting success." },
];

export default function Process() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[100px]" />
        {/* Q watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">How We Work</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            Our <span className="text-gradient">Process</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg">
            A proven, refined methodology that delivers exceptional results every time.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-[30%] left-[-100px] w-[350px] h-[350px] bg-[#A855F7]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-between relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-px bg-gradient-to-r from-[#7C3AED]/30 via-[#3B82F6]/30 to-[#A855F7]/30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex-1 relative"
              >
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 rounded-full aurora-gradient flex items-center justify-center text-white font-heading font-bold text-sm mx-auto mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Glass card */}
                <div className="glass-card glass-card-hover p-6 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="text-[#7C3AED] mb-4">{step.icon}</div>
                    <h3 className="font-heading font-semibold text-lg text-white mb-3">{step.title}</h3>
                    <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden">
        <div className="absolute top-[-100px] left-[40%] w-[400px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-6">
              Ready to Start Your <span className="text-gradient">Journey?</span>
            </h2>
            <p className="text-[#A3A3A3] font-body max-w-xl mx-auto mb-8">
              Let's discuss your vision and build something extraordinary together.
            </p>
            <a href="/contact">
              <button className="font-button font-semibold text-base px-10 py-4 rounded-full aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.97]">
                Book a Discovery Call
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
