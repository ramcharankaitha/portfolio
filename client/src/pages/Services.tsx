/* Dark Cinematic Luxury: Interactive service cards with tilt, glow, expand */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Palette, Code2, Bot, Compass, Search, Gauge,
  Headphones, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Palette size={28} />,
    title: "Web Design",
    desc: "Bespoke, pixel-perfect designs that captivate audiences and reflect your brand's premium identity. Every layout is crafted with intention.",
    features: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    desc: "High-performance, scalable websites built with cutting-edge technology stacks. From landing pages to complex web applications.",
    features: ["React/Next.js", "Full-Stack Apps", "E-Commerce", "CMS Integration"],
  },
  {
    icon: <Bot size={28} />,
    title: "AI Automation",
    desc: "Intelligent automation solutions that streamline your workflows, reduce costs, and scale your operations effortlessly.",
    features: ["Chatbots", "Process Automation", "AI Integration", "Custom AI Models"],
  },
  {
    icon: <Compass size={28} />,
    title: "Branding",
    desc: "Strategic brand identity systems that communicate authority, build trust, and create lasting impressions in competitive markets.",
    features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"],
  },
  {
    icon: <Search size={28} />,
    title: "SEO",
    desc: "Data-driven search engine optimization that drives organic traffic and puts your brand at the top of relevant search results.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
  },
  {
    icon: <Gauge size={28} />,
    title: "Performance",
    desc: "Speed optimization and performance tuning that ensures your website loads instantly and provides a flawless user experience.",
    features: ["Core Web Vitals", "Speed Optimization", "CDN Setup", "Caching Strategy"],
  },
  {
    icon: <Headphones size={28} />,
    title: "Maintenance",
    desc: "Ongoing care, updates, and support to keep your digital presence secure, updated, and performing at its peak.",
    features: ["Security Updates", "Content Updates", "Bug Fixes", "Monitoring"],
  },
];

export default function Services() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[120px]" />
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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6"
          >
            Services Built for <span className="text-gradient">Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg"
          >
            End-to-end digital solutions engineered for ambitious brands. Every service is designed to drive measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-[40%] left-[-150px] w-[400px] h-[400px] bg-[#A855F7]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-100px] w-[300px] h-[300px] bg-[#3B82F6]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="glass-card glass-card-hover p-8 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                {/* Subtle border glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/0 to-transparent group-hover:via-[#7C3AED]/30 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl aurora-gradient flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#A3A3A3] text-xs font-body">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden">
        <div className="absolute top-[-100px] left-[30%] w-[400px] h-[400px] bg-[#7C3AED]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-6">
              Ready to Build Something <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-[#A3A3A3] font-body max-w-xl mx-auto mb-8">
              Let's engineer a digital experience that sets your brand apart.
            </p>
            <Link href="/contact">
              <button className="font-button font-semibold text-base px-10 py-4 rounded-full aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.97]">
                Start a Project
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
