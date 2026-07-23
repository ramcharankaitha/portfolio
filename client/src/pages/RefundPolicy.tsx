/* Dark Cinematic Luxury: Premium typography with cinematic depth */
import { motion } from "framer-motion";
import { Link } from "wouter";

const sections = [
  { title: "Overview", content: "QuatrixWeb is committed to client satisfaction. This Refund Policy outlines the conditions under which refunds may be requested and processed." },
  { title: "Milestone-Based Payments", content: "Projects are structured with milestone-based payments. Each milestone represents a deliverable phase. Clients are expected to review and approve milestones before proceeding to the next phase." },
  { title: "Refund Eligibility", content: "Refund requests may be considered if: (a) a milestone was not delivered as agreed, (b) the project was terminated before significant work was completed, or (c) there was a material breach of the project agreement by QuatrixWeb." },
  { title: "Non-Refundable Deposits", content: "The initial project deposit covers discovery, planning, and resource allocation costs. Deposits are non-refundable unless QuatrixWeb fails to commence work within the agreed timeframe." },
  { title: "Refund Process", content: "To request a refund, clients must submit a written request to refunds@quatrixweb.com within 14 days of the relevant milestone payment. Refund requests will be reviewed within 5 business days." },
  { title: "Dispute Resolution", content: "If a refund request is declined, clients may escalate the matter to our management team. We are committed to resolving disputes amicably and fairly." },
];

export default function RefundPolicy() {
  return (
    <div className="relative pt-24">
      <section className="relative min-h-[30vh] flex items-center overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[300px] h-[300px]" />
        </div>
        <div className="container relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">Refund Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body text-sm">Effective as of January 1, 2026</motion.p>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-[30%] right-[-150px] w-[400px] h-[400px] bg-[#3B82F6]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container max-w-3xl relative">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/3 transition-all duration-500" />
                <div className="relative z-10">
                  <h2 className="font-heading font-semibold text-xl text-white mb-3">{s.title}</h2>
                  <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{s.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-8 mt-12">
            <p className="text-[#A3A3A3] font-body text-sm">Questions? <Link href="/contact" className="text-[#7C3AED] hover:underline">Contact us</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
