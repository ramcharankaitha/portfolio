/* Dark Cinematic Luxury: Cinematic particle Q hero, stats, aurora blobs, asymmetric sections */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, Award } from "lucide-react";
import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";

/* Particle Q Animation */
function ParticleQ() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number;
      targetX: number; targetY: number;
      vx: number; vy: number;
      size: number;
      color: string;
      phase: number;
    }

    const colors = ["#7C3AED", "#3B82F6", "#A855F7", "#60A5FA", "#8B5CF6"];
    const particles: Particle[] = [];
    const count = 400;
    let phase = 0;
    let time = 0;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.18;

    function getQPoint(i: number, total: number) {
      const t = (i / total) * Math.PI * 2;
      const qRadius = radius;
      let x = cx + Math.cos(t) * qRadius;
      let y = cy + Math.sin(t) * qRadius;

      if (t > Math.PI * 1.5 || t < Math.PI * 0.3) {
        const tailOffset = Math.max(0, Math.cos(t - Math.PI * 1.75)) * radius * 0.4;
        const tailX = Math.cos(t - Math.PI * 0.25) * tailOffset;
        const tailY = Math.sin(t - Math.PI * 0.25) * tailOffset + tailOffset * 0.5;
        x += tailX;
        y += tailY;
      }
      return { x, y };
    }

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      particles.push({
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        targetX: cx + Math.cos(angle) * radius,
        targetY: cy + Math.sin(angle) * radius,
        vx: 0, vy: 0,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    particles.forEach((p, i) => {
      const pt = getQPoint(i, count);
      p.targetX = pt.x;
      p.targetY = pt.y;
    });

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      const cycleTime = 10;
      const cyclePos = time % cycleTime;
      phase = cyclePos / cycleTime;

      if (phase > 0.3 && phase < 0.7) {
        ctx.strokeStyle = "rgba(124, 58, 237, 0.06)";
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i += 3) {
          for (let j = i + 1; j < particles.length; j += 3) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      particles.forEach((p, i) => {
        let targetX = p.targetX;
        let targetY = p.targetY;

        if (phase > 0.7 && phase < 0.85) {
          const angle = Math.atan2(p.y - cy, p.x - cx);
          targetX = p.x + Math.cos(angle) * 200;
          targetY = p.y + Math.sin(angle) * 200;
        } else if (phase > 0.85) {
          const angle = (i / count) * Math.PI * 2 + time * 0.3;
          targetX = cx + Math.cos(angle) * radius;
          targetY = cy + Math.sin(angle) * radius;
        }

        if (phase < 0.3) {
          const orbitAngle = Math.atan2(p.y - cy, p.x - cx) + 0.005;
          const orbitRadius = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2);
          targetX = cx + Math.cos(orbitAngle) * orbitRadius;
          targetY = cy + Math.sin(orbitAngle) * orbitRadius;
        }

        const dx = targetX - p.x;
        const dy = targetY - p.y;
        p.vx = (p.vx + dx * 0.03) * 0.92;
        p.vy = (p.vy + dy * 0.03) * 0.92;
        p.x += p.vx;
        p.y += p.vy;

        const alpha = 0.4 + Math.sin(time * 2 + p.phase) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        const r = parseInt(p.color.slice(1, 3), 16);
        const g = parseInt(p.color.slice(3, 5), 16);
        const b = parseInt(p.color.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    const animId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

/* Animated Counter */
function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCounterAnimation(value, 2000, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-[#A3A3A3] font-body text-sm">{label}</div>
    </motion.div>
  );
}

/* Floating Aurora Blob */
function AuroraBlob({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-[100px] opacity-20 pointer-events-none ${className}`}
    />
  );
}

export default function Home() {
  const heroTextRef = useScrollAnimation(0.1);
  const statsRef = useScrollAnimation(0.2);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleQ />

        {/* Aurora blobs */}
        <AuroraBlob className="w-[600px] h-[600px] bg-[#7C3AED] top-[-200px] left-[-100px]" />
        <AuroraBlob className="w-[400px] h-[400px] bg-[#3B82F6] bottom-[-100px] right-[-100px]" />
        <AuroraBlob className="w-[300px] h-[300px] bg-[#A855F7] top-[40%] right-[10%] opacity-10" />

        {/* Hero content - asymmetric offset */}
        <div
          className="relative z-10 px-6 lg:px-16 max-w-5xl"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[#A3A3A3] font-body text-sm lg:text-base tracking-widest uppercase mb-6">
              Premium Digital Agency
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3, ease: [0.23, 1, 0.32, 1] }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-8"
          >
            WE BUILD{" "}
            <span className="text-gradient">DIGITAL EXPERIENCES</span>
            <br />
            THAT FEEL{" "}
            <span className="text-gradient">UNFORGETTABLE.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="flex flex-wrap items-center gap-3 lg:gap-4 mb-10"
          >
            {["Premium Websites", "Automation", "AI Solutions", "Branding", "Growth"].map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 rounded-full border border-white/10 text-[#A3A3A3] text-xs lg:text-sm font-body backdrop-blur-sm bg-white/5"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link href="/portfolio">
              <button className="group font-button font-semibold text-base px-8 py-3.5 rounded-full aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.97] flex items-center gap-2">
                Explore Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="font-button font-semibold text-base px-8 py-3.5 rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 hover:scale-[1.02] active:scale-[0.97]">
                Book Discovery Call
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <AuroraBlob className="w-[500px] h-[500px] bg-[#A855F7] top-[-200px] right-[-100px]" />
        <AuroraBlob className="w-[300px] h-[300px] bg-[#7C3AED] bottom-[-100px] left-[20%] opacity-10" />
        <div className="container">
          <div
            ref={statsRef.ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            <Counter value={200} suffix="+" label="Projects Delivered" />
            <Counter value={98} suffix="%" label="Client Satisfaction" />
            <Counter value={24} suffix="/7" label="Support" />
            <Counter value={7} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AuroraBlob className="w-[600px] h-[600px] bg-[#3B82F6] top-[30%] right-[-200px] opacity-10" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-6">
              Services That <span className="text-gradient">Transform</span>
            </h2>
            <p className="text-[#A3A3A3] font-body max-w-2xl mx-auto">
              End-to-end digital solutions engineered for ambitious brands. Every interaction, every pixel, every line of code — purposeful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={24} />, title: "Web Design & Development", desc: "Pixel-perfect, high-performance websites that convert visitors into customers." },
              { icon: <Shield size={24} />, title: "AI & Automation", desc: "Intelligent systems that streamline operations and scale your business effortlessly." },
              { icon: <Award size={24} />, title: "Branding & Identity", desc: "Strategic brand systems that communicate authority and build lasting recognition." },
              { icon: <Clock size={24} />, title: "SEO & Performance", desc: "Data-driven optimization that puts you at the top of search results." },
              { icon: <Zap size={24} />, title: "SaaS Products", desc: "Full-stack applications built for scale, security, and exceptional user experience." },
              { icon: <Shield size={24} />, title: "Maintenance & Support", desc: "Ongoing care and updates to keep your digital presence sharp and secure." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card glass-card-hover p-8 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl aurora-gradient flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-3">{service.title}</h3>
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="font-button font-semibold text-sm px-8 py-3 rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 flex items-center gap-2 mx-auto">
                View All Services
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-transparent" />
        <AuroraBlob className="w-[500px] h-[500px] bg-[#7C3AED] bottom-[-200px] left-[30%] opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Q orb watermark behind CTA */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-6 relative">
              Ready to Build Something{" "}
              <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-[#A3A3A3] font-body text-lg max-w-xl mx-auto mb-10 relative">
              Let's engineer a digital experience that sets your brand apart.
            </p>
            <Link href="/contact">
              <button className="font-button font-semibold text-base px-10 py-4 rounded-full aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.97] relative">
                Start a Project
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
