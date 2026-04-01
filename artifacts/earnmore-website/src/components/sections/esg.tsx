import { motion } from "framer-motion";
import { ExternalLink, Leaf, ArrowRight } from "lucide-react";

export default function EsgSection() {
  return (
    <section id="esg" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />
            ESG Initiative
            <span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Are You Ready to Elevate Your{" "}
            <span className="italic font-serif font-normal text-primary">ESG Future?</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: ESG pillars */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/65 leading-relaxed">
              <strong className="text-foreground">EGG</strong> — EarnMore Consultants' ESG Initiative — is our dedicated platform for impact-oriented investing and sustainable development. We have built frameworks that make responsible finance measurable, transparent, and genuinely impactful.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-8">
              Through EGG, we provide investors, institutions, and government partners with tools and strategies to align their portfolios and operations with their values — driving real change in communities and ecosystems around the world.
            </p>

            {[
              {
                label: "Environmental",
                color: "bg-emerald-50 border-emerald-100",
                dot: "bg-emerald-500",
                text: "Climate risk analysis, clean infrastructure, carbon-efficient enterprises, and renewable energy investment.",
              },
              {
                label: "Social",
                color: "bg-teal-50 border-teal-100",
                dot: "bg-teal-500",
                text: "Financial inclusion, community economic development, equitable wealth access, and social equity programs.",
              },
              {
                label: "Governance",
                color: "bg-green-50 border-green-100",
                dot: "bg-green-600",
                text: "Rigorous ethical standards, transparent reporting frameworks, and fiduciary accountability.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className={`flex gap-4 p-5 rounded-xl border ${pillar.color} group`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${pillar.dot} mt-1.5 flex-shrink-0`} />
                <div>
                  <p className="font-bold text-foreground mb-1">{pillar.label}</p>
                  <p className="text-foreground/60 text-sm leading-relaxed">{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: EGG card + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-10 mb-6"
              style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">EGG Platform</p>
                  <p className="text-emerald-400 text-sm">EarnMore Consultants ESG Initiative</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-10">
                {[
                  { value: "40+", label: "ESG Frameworks" },
                  { value: "3 Continents", label: "Impact Reach" },
                  { value: "GRI / TCFD", label: "Standards Aligned" },
                  { value: "100%", label: "Client Retention" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-emerald-400/30 pl-4">
                    <p className="text-xl font-bold text-emerald-400 mb-1">{stat.value}</p>
                    <p className="text-green-300/50 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <p className="text-green-200/50 text-sm mb-4">Explore our ESG impact platform</p>
                <a
                  href="https://earnmoreapp.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-md transition-all group"
                >
                  Visit Earnmoreapp.co
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* CTA strip */}
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 flex items-center justify-between gap-4">
              <p className="text-foreground font-semibold text-sm">
                Ready to implement an ESG framework?
              </p>
              <a
                href="#contact"
                className="flex-shrink-0 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Get started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
