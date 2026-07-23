/* Dark Cinematic Luxury: Magazine layout with featured article and cards */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Design", "Development", "AI", "Branding", "Growth"];

const posts = [
  { title: "The Future of Web Design: AI-Powered Interfaces", category: "Design", date: "Jul 15, 2026", readTime: "8 min", featured: true },
  { title: "Building Scalable React Applications in 2026", category: "Development", date: "Jul 10, 2026", readTime: "12 min", featured: false },
  { title: "How AI Automation is Transforming Small Businesses", category: "AI", date: "Jul 5, 2026", readTime: "6 min", featured: false },
  { title: "Brand Identity Systems That Last: A Complete Guide", category: "Branding", date: "Jun 28, 2026", readTime: "10 min", featured: false },
  { title: "SEO Strategies for Premium Brands in 2026", category: "Growth", date: "Jun 22, 2026", readTime: "7 min", featured: false },
  { title: "Motion Design Principles for Web Experiences", category: "Design", date: "Jun 15, 2026", readTime: "9 min", featured: false },
];

export default function Blog() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] right-[-100px] w-[300px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#7C3AED] font-body text-sm tracking-widest uppercase mb-4">Insights & Ideas</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6">
            Our <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#A3A3A3] font-body max-w-2xl mx-auto text-lg">
            Insights, trends, and strategies from the forefront of digital innovation.
          </motion.p>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-[30%] right-[-150px] w-[400px] h-[400px] bg-[#A855F7]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-body font-medium border border-white/10 text-[#A3A3A3] hover:text-white hover:border-[#7C3AED]/50 transition-all duration-300">
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-1 rounded-xl mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/3 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden relative z-10">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[400px]">
                <img src="/manus-storage/hero-bg_8c9647b1.jpg" alt="Featured" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 to-transparent lg:bg-gradient-to-l" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-[#7C3AED] font-body text-xs tracking-wider uppercase mb-3">Featured</span>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-[#A3A3A3] font-body text-sm leading-relaxed mb-6">
                  Exploring how artificial intelligence is reshaping the way we design and build digital interfaces, from generative layouts to intelligent user experiences.
                </p>
                <div className="flex items-center gap-4 text-[#A3A3A3] text-xs font-body">
                  <span>{posts[0].date}</span>
                  <span>{posts[0].readTime} read</span>
                </div>
                <button className="mt-6 font-button font-semibold text-sm text-[#7C3AED] flex items-center gap-2 group hover:text-[#A855F7] transition-colors">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card glass-card-hover p-6 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-transparent group-hover:from-[#7C3AED]/5 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 bg-white/5">
                    <img src="/manus-storage/about-cube-bg_c81b427b.jpg" alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[#7C3AED] font-body text-xs tracking-wider uppercase">{post.category}</span>
                  <h3 className="font-heading font-semibold text-lg text-white mt-2 mb-3 group-hover:text-[#A855F7] transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-3 text-[#A3A3A3] text-xs font-body">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
