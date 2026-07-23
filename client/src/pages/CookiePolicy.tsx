/* Dark Cinematic Luxury: Modern card layout for Cookie Policy */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Cookie, BarChart3, Settings, Shield } from "lucide-react";

const cookieTypes = [
  { icon: <Shield size={24} />, title: "Essential Cookies", desc: "These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas.", duration: "Session" },
  { icon: <BarChart3 size={24} />, title: "Analytics Cookies", desc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.", duration: "2 years" },
  { icon: <Settings size={24} />, title: "Preference Cookies", desc: "These cookies allow the website to remember choices you make and provide enhanced, personalized features.", duration: "1 year" },
  { icon: <Cookie size={24} />, title: "Marketing Cookies", desc: "These cookies are used to deliver relevant advertisements and track the effectiveness of marketing campaigns.", duration: "90 days" },
];

export default function CookiePolicy() {
  return (
    <div className="relative pt-24">
      <section className="relative min-h-[30vh] flex items-center overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[300px] h-[300px]" />
        </div>
        <div className="container relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">Cookie Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body text-sm">Last updated: January 1, 2026</motion.p>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#7C3AED]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[#A3A3A3] font-body text-sm leading-relaxed mb-6">
              This Cookie Policy explains how QuatrixWeb uses cookies and similar technologies to enhance your experience on our website. We use cookies to ensure the website functions properly, analyze usage, and improve our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {cookieTypes.map((cookie, i) => (
              <motion.div
                key={cookie.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 flex gap-5 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/3 transition-all duration-500" />
                <div className="relative z-10 w-12 h-12 rounded-xl aurora-gradient flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  {cookie.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading font-semibold text-white mb-1">{cookie.title}</h3>
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed mb-2">{cookie.desc}</p>
                  <span className="text-[#7C3AED] font-body text-xs">Duration: {cookie.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 mt-12">
            <p className="text-[#A3A3A3] font-body text-sm">
              You can manage your cookie preferences through your browser settings. For questions, <Link href="/contact" className="text-[#7C3AED] hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
