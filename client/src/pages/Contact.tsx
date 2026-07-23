/* Dark Cinematic Luxury: Premium form, Google Map, social links, WhatsApp, Email, Calendly */
import { motion } from "framer-motion";
import { MapView } from "@/components/Map";
import { Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[100px]" />
        {/* Q watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg">
            Ready to start your next project? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-[20%] left-[-150px] w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading font-semibold text-2xl text-white mb-8">Contact Information</h3>

              <div className="space-y-6 mb-10">
                {[
                  { icon: <Mail size={20} />, label: "Email", value: "hello@quatrixweb.com", href: "mailto:hello@quatrixweb.com" },
                  { icon: <Phone size={20} />, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: <MapPin size={20} />, label: "Office", value: "123 Innovation Drive, Tech District, CA 90210", href: "#" },
                  { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/15551234567" },
                  { icon: <Calendar size={20} />, label: "Calendly", value: "Book a discovery call", href: "#" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] shrink-0 group-hover:bg-[#7C3AED]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-body text-sm group-hover:text-[#A855F7] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <h4 className="font-heading font-semibold text-lg text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "Instagram", "Dribbble", "GitHub"].map((s) => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#7C3AED]/50 transition-colors"
                  >
                    <span className="text-xs font-heading font-bold">{s[0]}{s[1]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/3 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-heading font-semibold text-xl text-white mb-6">Send Us a Message</h3>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors placeholder-[#A3A3A3]/30"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors placeholder-[#A3A3A3]/30"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors placeholder-[#A3A3A3]/30"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="text-[#A3A3A3] font-body text-xs uppercase tracking-wider mb-2 block">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:border-[#7C3AED]/50 focus:outline-none transition-colors resize-none placeholder-[#A3A3A3]/30"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button type="submit" className="w-full font-button font-semibold text-base py-4 rounded-lg aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:scale-[1.01] active:scale-[0.98]">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-card p-1 rounded-xl overflow-hidden"
          >
            <div className="h-[350px] rounded-xl overflow-hidden">
              <MapView
                initialCenter={{ lat: 34.0522, lng: -118.2437 }}
                initialZoom={14}
                onMapReady={(map) => {
                  if (map && window.google) {
                    new google.maps.marker.AdvancedMarkerElement({
                      map,
                      position: { lat: 34.0522, lng: -118.2437 },
                      title: "QuatrixWeb Office",
                    });
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
