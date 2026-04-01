import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f2b2b 0%, #0d3d2e 40%, #1a4d35 70%, #0f3a28 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full opacity-10 border border-green-400" />
      <div className="absolute top-1/3 right-24 w-48 h-48 rounded-full opacity-10 border border-green-400" />
      <div className="absolute bottom-24 left-1/3 w-64 h-64 rounded-full opacity-5 bg-emerald-300" style={{ filter: "blur(60px)" }} />
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-5 bg-green-400" style={{ filter: "blur(50px)" }} />

      {/* Subtle leaf pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-green-300"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              top: `${10 + i * 15}%`,
              right: `${5 + i * 8}%`,
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <Leaf className="w-3.5 h-3.5" />
              Sustainability Consultancy
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Driving Change,{" "}
            <span
              className="font-serif italic font-normal"
              style={{ color: "#34d399" }}
            >
              Delivering Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-green-100/80 mb-10 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At EarnMore, we leverage our extensive expertise to steer change and offer tangible, impactful sustainability solutions to propel your organization toward a greener, more prosperous future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all group"
            >
              Book a Free Clarity Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "150+", label: "Clients Served" },
            { value: "30+", label: "Countries Reached" },
            { value: "500+", label: "Projects Delivered" },
          ].map((stat, i) => (
            <div key={i} className="border-l border-white/10 pl-6">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-green-300/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
