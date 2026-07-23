/* Dark Cinematic Luxury: Project process, communication rules, timeline, assets, deliverables, support */
import { motion } from "framer-motion";
import { ClipboardList, MessageSquare, Calendar, FolderOpen, Package, Headphones } from "lucide-react";

const guidelines = [
  {
    icon: <ClipboardList size={24} />,
    title: "Project Process",
    items: [
      "Every project begins with a discovery call to understand your goals and requirements.",
      "We provide a detailed proposal with scope, timeline, and pricing before starting.",
      "Work progresses in milestone phases with client reviews at each stage.",
      "Final delivery includes all assets, documentation, and source files.",
    ],
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Communication",
    items: [
      "We communicate primarily via email and scheduled video calls.",
      "Response time: within 24 hours on business days.",
      "Weekly progress updates are provided for all active projects.",
      "Urgent matters are addressed via phone or instant messaging.",
    ],
  },
  {
    icon: <Calendar size={24} />,
    title: "Timeline Expectations",
    items: [
      "Discovery & Planning: 1-2 weeks",
      "Design Phase: 2-4 weeks",
      "Development Phase: 4-8 weeks",
      "Testing & Launch: 1-2 weeks",
      "Total typical project: 8-16 weeks depending on complexity.",
    ],
  },
  {
    icon: <FolderOpen size={24} />,
    title: "Client Assets",
    items: [
      "Please provide brand guidelines, logos, and visual assets before the design phase begins.",
      "Content (text, images, videos) should be provided at least 1 week before development starts.",
      "Login credentials for hosting, domains, and third-party services are required.",
      "Feedback on deliverables should be consolidated and provided within 3 business days.",
    ],
  },
  {
    icon: <Package size={24} />,
    title: "Deliverables",
    items: [
      "All source files are delivered upon final payment.",
      "Design files include Figma/Sketch source files and exported assets.",
      "Development includes clean, documented, version-controlled code.",
      "Documentation covers setup, deployment, and maintenance procedures.",
    ],
  },
  {
    icon: <Headphones size={24} />,
    title: "Post-Launch Support",
    items: [
      "All projects include 30 days of complimentary post-launch support.",
      "Extended maintenance packages are available for ongoing care.",
      "Bug fixes and minor adjustments are included in the support period.",
      "Major feature additions are handled as separate project engagements.",
    ],
  },
];

export default function Guidelines() {
  return (
    <div className="relative pt-24">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] right-[-100px] w-[300px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[100px]" />
        {/* Q watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">How We Work Together</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            Client <span className="text-gradient">Guidelines</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg">
            A clear framework for how we collaborate to deliver exceptional results.
          </motion.p>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-[30%] right-[-150px] w-[400px] h-[400px] bg-[#A855F7]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-8 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl aurora-gradient flex items-center justify-center text-white mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    {g.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-5">{g.title}</h3>
                  <ul className="space-y-3">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                        <span className="text-[#A3A3A3] font-body text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
