/* Dark Cinematic Luxury: Large Q Logo, Navigation, Newsletter, Social, Copyright */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Web Design" },
    { href: "/services", label: "Web Development" },
    { href: "/services", label: "AI Automation" },
    { href: "/services", label: "Branding" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-8">
      {/* Aurora glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/manus-storage/q-logo_14636ce6.png"
                alt="QUATRIXWEB"
                className="h-12 w-12"
              />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                QUATRIX<span className="text-gradient">WEB</span>
              </span>
            </div>
            <p className="text-[#A3A3A3] font-body text-sm leading-relaxed max-w-xs mb-8">
              We build digital experiences that feel unforgettable. Premium websites, AI solutions, and brand experiences for ambitious brands.
            </p>

            {/* Newsletter */}
            <div className="glass-card p-1 flex items-center max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-white text-sm px-4 py-2.5 flex-1 font-body placeholder-[#A3A3A3]/50"
              />
              <button className="aurora-gradient text-white text-sm font-button font-semibold px-5 py-2.5 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] active:scale-[0.97] flex items-center gap-2">
                <Mail size={14} />
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-[#A3A3A3] text-sm font-body hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-[#A3A3A3] text-sm font-body hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-[#A3A3A3] text-sm font-body hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm mb-6">Connect</h4>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#7C3AED]/50 transition-colors duration-300"
                >
                  <span className="text-xs font-heading font-bold">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-xs font-body">
            &copy; {new Date().getFullYear()} QuatrixWeb. All rights reserved.
          </p>
          <p className="text-[#A3A3A3] text-xs font-body">
            Designed & Built with precision by <span className="text-gradient font-semibold">QuatrixWeb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
