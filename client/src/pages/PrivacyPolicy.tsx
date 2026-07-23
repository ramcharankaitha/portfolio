/* Dark Cinematic Luxury: Premium typography with sticky sidebar and cinematic depth */
import { motion } from "framer-motion";
import { Link } from "wouter";

const sections = [
  { id: "overview", title: "Overview", content: "This Privacy Policy describes how QuatrixWeb collects, uses, and protects your personal information when you use our website and services. We are committed to maintaining the trust and confidence of our visitors and clients." },
  { id: "collection", title: "Information We Collect", content: "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or engage with our services. This may include your name, email address, phone number, company name, and project details. We also collect certain information automatically, including browser type, IP address, and pages visited." },
  { id: "usage", title: "How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, communicate with you about projects and inquiries, send promotional materials (with your consent), analyze usage patterns, and comply with legal obligations. We never sell your personal information to third parties." },
  { id: "sharing", title: "Information Sharing", content: "We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business. These providers are contractually obligated to maintain the confidentiality of your information and use it only for the purposes we specify." },
  { id: "security", title: "Data Security", content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, regular security audits, and employee training on data protection practices." },
  { id: "cookies", title: "Cookies & Tracking", content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. We use both first-party and third-party cookies for analytics and functionality purposes." },
  { id: "rights", title: "Your Rights", content: "You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications and request information about how your data is processed. To exercise these rights, please contact us at privacy@quatrixweb.com." },
  { id: "changes", title: "Policy Changes", content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy periodically." },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative pt-24">
      <section className="relative min-h-[30vh] flex items-center overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[300px] h-[300px]" />
        </div>
        <div className="container relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">Privacy Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body text-sm">Effective as of January 1, 2026</motion.p>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-[20%] right-[-150px] w-[400px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sticky Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block text-[#A3A3A3] font-body text-sm hover:text-white transition-colors py-1">
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-card p-6 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/3 transition-all duration-500" />
                  <div className="relative z-10">
                    <h2 className="font-heading font-semibold text-xl text-white mb-4">{section.title}</h2>
                    <p className="text-[#A3A3A3] font-body text-sm leading-relaxed">{section.content}</p>
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-white/5 pt-8 mt-8">
                <p className="text-[#A3A3A3] font-body text-sm">
                  Questions about this policy? <Link href="/contact" className="text-[#7C3AED] hover:underline">Contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
