/* Dark Cinematic Luxury: Accordion FAQ with smooth animation and Q watermark */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does QuatrixWeb offer?", a: "We offer end-to-end digital services including web design, web development, AI automation, branding, SEO, performance optimization, and ongoing maintenance. Each service is tailored to your specific business needs." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during our discovery phase." },
  { q: "What is your pricing model?", a: "We offer project-based pricing tailored to your specific needs. After an initial discovery call, we provide a detailed proposal with transparent pricing. We believe in value-based pricing that reflects the quality and impact of our work." },
  { q: "Do you offer ongoing support after launch?", a: "Absolutely. We offer maintenance packages that include security updates, content updates, performance monitoring, and priority support. We're committed to the long-term success of every project we deliver." },
  { q: "What technologies do you work with?", a: "We specialize in React, Next.js, TypeScript, TailwindCSS, Node.js, and modern AI/ML frameworks. We choose the best technology stack for each project based on requirements, scalability needs, and performance goals." },
  { q: "Can you work with existing designs or brands?", a: "Yes. We can work within your existing brand guidelines, enhance current designs, or create entirely new brand systems. Our team is experienced in both building from scratch and iterating on existing work." },
  { q: "What is your design process?", a: "Our process follows five phases: Discovery, Research, Design, Development, and Launch. Each phase includes client checkpoints to ensure alignment and satisfaction throughout the project lifecycle." },
  { q: "Do you offer refunds?", a: "We have a detailed refund policy outlined on our Refund Policy page. Generally, milestones are delivered incrementally, and we work to ensure satisfaction at each stage before proceeding." },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="glass-card border border-white/5 overflow-hidden group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/3 transition-all duration-500" />
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left relative z-10"
      >
        <span className="font-heading font-semibold text-white text-sm lg:text-base pr-4">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-[#7C3AED] shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 pb-6 relative z-10">
              <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative pt-24">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#A855F7]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Got Questions?</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h1>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-[30%] left-[-150px] w-[400px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container max-w-3xl relative">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
