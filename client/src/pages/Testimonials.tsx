/* Dark Cinematic Luxury: Infinite carousel, glass cards, animated stars */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, NovaTech", text: "QuatrixWeb transformed our digital presence completely. The attention to detail and the premium quality exceeded all expectations. Our conversion rate increased by 340% within the first month.", rating: 5 },
  { name: "James Rodriguez", role: "Founder, Luxe Brands", text: "Working with QuatrixWeb was a game-changer. They didn't just build a website — they crafted an experience that perfectly represents our luxury brand identity.", rating: 5 },
  { name: "Emily Chen", role: "CTO, DataFlow", text: "The technical excellence is unmatched. Every animation is smooth, every interaction feels intentional. Our SaaS platform has never looked or performed better.", rating: 5 },
  { name: "Michael Park", role: "Director, Prestige Group", text: "From concept to launch, the process was seamless. QuatrixWeb delivered a website that our clients consistently compliment. True digital craftsmanship.", rating: 5 },
  { name: "Amanda Foster", role: "Marketing Lead, FitPro", text: "The results speak for themselves. Our new website generates 5x more qualified leads than the previous version. The ROI has been extraordinary.", rating: 5 },
  { name: "David Kim", role: "COO, FinanceHub", text: "QuatrixWeb understands premium digital experiences at a level I haven't seen before. Every pixel is purposeful, every animation tells a story.", rating: 5 },
];

const logos = ["NOVATECH", "LUXE BRANDS", "DATAFLOW", "PRESTIGE", "FITPRO", "FINANCEHUB", "ATLANTIS", "NEXGEN"];

export default function Testimonials() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#A855F7]/15 rounded-full blur-[120px]" />
        <div className="absolute top-[-50px] right-[-100px] w-[300px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Client Stories</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h1>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <p className="text-center text-[#A3A3A3] text-sm font-body mb-8">Trusted by leading brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {logos.map((logo) => (
              <span key={logo} className="text-white/20 font-heading font-bold text-lg lg:text-xl tracking-wider">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-[20%] right-[-150px] w-[400px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card glass-card-hover p-8 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10">
                  <Quote size={24} className="text-[#7C3AED]/40 mb-4" />
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                      >
                        <Star size={16} className="fill-[#7C3AED] text-[#7C3AED]" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full aurora-gradient flex items-center justify-center text-white font-heading font-bold text-sm shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-[#A3A3A3] font-body text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
