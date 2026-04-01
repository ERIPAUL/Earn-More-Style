import { motion } from "framer-motion";
import { ArrowRight, Leaf, TrendingUp, Globe2, Award } from "lucide-react";

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

      {/* Large decorative circle */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border border-emerald-300"
        style={{ right: "-100px" }}
      />
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 border border-emerald-400"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text */}
        <div>
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

          {/* Stats row */}
          <motion.div
            className="mt-14 flex gap-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "150+", label: "Clients Served" },
              { value: "30+", label: "Countries Reached" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold text-white">{s.value}</span>
                <span className="text-xs text-green-300/60 uppercase tracking-wider mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual panel */}
        <motion.div
          className="hidden lg:flex flex-col gap-4 items-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Main card */}
          <div className="relative w-full rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
          >
            {/* Green top bar */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Sustainability Impact</p>
                  <p className="text-emerald-400 text-sm">2024 Portfolio</p>
                </div>
              </div>

              {/* Progress bars */}
              {[
                { label: "Environmental Goals", pct: 87 },
                { label: "Social Impact", pct: 74 },
                { label: "Governance Score", pct: 92 },
              ].map((item, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-green-200/70 text-xs font-medium">{item.label}</span>
                    <span className="text-emerald-400 text-xs font-bold">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.pct}%` }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating mini cards */}
          <div className="flex gap-4 w-full">
            {[
              { icon: <Globe2 className="w-5 h-5" />, value: "30+", label: "Countries" },
              { icon: <TrendingUp className="w-5 h-5" />, value: "500+", label: "Projects" },
              { icon: <Award className="w-5 h-5" />, value: "GRI", label: "Aligned" },
            ].map((card, i) => (
              <div
                key={i}
                className="flex-1 rounded-xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="w-9 h-9 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 mx-auto mb-2">
                  {card.icon}
                </div>
                <p className="text-white font-bold text-lg">{card.value}</p>
                <p className="text-green-300/50 text-xs">{card.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
