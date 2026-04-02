import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 50%, #0f2b2b 100%)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border border-emerald-300"
        style={{ right: "-100px" }}
      />
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 border border-emerald-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 w-full">
        <div className="max-w-3xl">
          <motion.p
            className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-8 h-px bg-emerald-400 inline-block" />
            Welcome to Earnmore Consultants
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Driving Change,{" "}
            <span className="italic font-serif font-normal" style={{ color: "#34d399" }}>
              Delivering Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-green-100/70 text-lg leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At EarnMore, we leverage our extensive expertise to steer change and offer tangible, impactful sustainability solutions to propel your organization toward a greener, more prosperous future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-md transition-all group"
            >
              Discover More
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <a
              href="#services"
              className="text-sm font-semibold text-white/70 hover:text-emerald-300 transition-colors flex items-center gap-2"
            >
              Our Services <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
