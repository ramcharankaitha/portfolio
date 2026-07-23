/* Dark Cinematic Luxury: 404 page with Q watermark and aurora blobs */
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Aurora blobs */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[120px]" />
      {/* Q watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img src="/manus-storage/q-logo_14636ce6.png" alt="" className="w-[400px] h-[400px]" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading font-bold text-8xl lg:text-[10rem] text-gradient leading-none mb-4"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading font-semibold text-2xl lg:text-3xl text-white mb-6"
          >
            Page Not Found
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#A3A3A3] font-body max-w-md mx-auto mb-10"
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setLocation("/")}
            className="font-button font-semibold text-base px-8 py-3.5 rounded-full aurora-gradient text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.97] inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Return Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
