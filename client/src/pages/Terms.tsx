/* Dark Cinematic Luxury: Premium typography with cinematic depth */
import { motion } from "framer-motion";
import { Link } from "wouter";

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the QuatrixWeb website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
  { title: "Services", content: "QuatrixWeb provides digital design, development, branding, and consulting services. The scope, deliverables, and timeline of each project are defined in individual project agreements." },
  { title: "Intellectual Property", content: "Upon full payment, ownership of final deliverables transfers to the client. QuatrixWeb retains the right to display completed work in our portfolio and case studies unless otherwise agreed in writing." },
  { title: "Payment Terms", content: "Payment terms are outlined in individual project proposals. Typically, a deposit is required before work begins, with milestone payments throughout the project lifecycle." },
  { title: "Client Responsibilities", content: "Clients are responsible for providing timely feedback, required assets, and access to necessary accounts and systems. Delays in client communication may impact project timelines." },
  { title: "Limitation of Liability", content: "QuatrixWeb's liability is limited to the total fees paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages." },
  { title: "Termination", content: "Either party may terminate a project agreement with written notice. Upon termination, the client is responsible for payment of all work completed to date." },
  { title: "Governing Law", content: "These terms are governed by the laws of the jurisdiction in which QuatrixWeb operates. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal remedies." },
];

export default function Terms() {
  return (
    <div className="relative pt-24">
      <section className="relative min-h-[30vh] flex items-center overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[300px] h-[300px]" />
        </div>
        <div className="container relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">Terms of Service</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body text-sm">Effective as of January 1, 2026</motion.p>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#A855F7]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="container max-w-3xl relative space-y-10">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/3 transition-all duration-500" />
              <div className="relative z-10">
                <h2 className="font-heading font-semibold text-xl text-white mb-3">{s.title}</h2>
                <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{s.content}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/5 pt-8">
            <p className="text-[#A3A3A3] font-body text-sm">Questions? <Link href="/contact" className="text-[#7C3AED] hover:underline">Contact us</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
