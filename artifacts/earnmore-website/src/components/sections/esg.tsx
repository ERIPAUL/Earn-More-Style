import { motion } from "framer-motion";
import { ExternalLink, Leaf } from "lucide-react";

export default function EsgSection() {
  return (
    <section
      id="esg"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(135deg, #0f2b2b 0%, #0d3d2e 50%, #1a4d35 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <Leaf className="w-3.5 h-3.5" />
              ESG Initiative
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              EGG — Our Commitment to{" "}
              <span className="text-emerald-400 font-serif italic font-normal">
                Sustainable Growth
              </span>
            </h2>
            <p className="text-green-100/70 text-lg leading-relaxed mb-6">
              EGG (EarnMore Group's ESG Initiative) is our dedicated platform for impact-oriented investing and sustainable development. We have built frameworks that make responsible finance measurable, transparent, and genuinely impactful — not performative.
            </p>
            <p className="text-green-100/70 text-lg leading-relaxed mb-10">
              Through EGG, we provide investors, institutions, and government partners with the tools and strategies to align their portfolios and operations with their values — driving real change in communities and ecosystems around the world.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: "40+", label: "ESG Frameworks" },
                { value: "3 Continents", label: "Impact Reach" },
                { value: "GRI / TCFD", label: "Standards Aligned" },
                { value: "100%", label: "Client Retention" },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-emerald-400/30 pl-5">
                  <p className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</p>
                  <p className="text-green-300/60 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://earnmoreapp.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-full transition-all group"
            >
              Explore Earnmoreapp.co
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-emerald-400/5 border border-emerald-400/10" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl font-serif">EGG</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">EarnMore Group</p>
                    <p className="text-emerald-400 text-sm font-semibold">ESG Initiative</p>
                  </div>
                </div>

                {[
                  { label: "Environmental", text: "Climate risk analysis, clean infrastructure, carbon-efficient enterprises" },
                  { label: "Social", text: "Financial inclusion, community economic development, equitable wealth access" },
                  { label: "Governance", text: "Rigorous ethical standards, transparent reporting, fiduciary accountability" },
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4 py-5 border-b border-white/10 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">{pillar.label}</p>
                      <p className="text-green-300/60 text-sm leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-green-200/50 text-sm mb-3">Explore our ESG platform</p>
                  <a
                    href="https://earnmoreapp.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center justify-center gap-2"
                  >
                    earnmoreapp.co <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
