import { motion } from "framer-motion";
import { ExternalLink, Leaf, TrendingUp, Shield, Globe, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";

export default function EggPage() {
  return (
    <>
      <Seo
        title="EGG, EarnMore Growth Gateway | Impact Investing Platform"
        description="EGG (EarnMore Growth Gateway) is EarnMore Consultants' dedicated platform for impact-oriented investing and sustainable development. GRI, TCFD, ICMA aligned."
        keywords="EarnMore Growth Gateway, EGG platform, impact investing, ESG platform, sustainable finance, green bonds, responsible investing"
        canonical="/egg"
        ogImage="https://earnmoregroup.com/og/egg.jpg"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 md:pb-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 60%, #0a2e28 100%)" }}
      >
        {/* decorative circles */}
        <div className="hidden md:block absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="hidden md:block absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-teal-400/5 blur-2xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              EarnMore Growth Gateway
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-emerald-400">EGG</span> Platform
            </h1>
            <p className="text-green-100/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Our dedicated platform for impact-oriented investing and sustainable development. We have built frameworks that make responsible finance measurable, transparent, and genuinely impactful.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://earnmoreapp.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-md transition-all group"
              >
                Visit Earnmoreapp.co
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-emerald-400/50 text-white font-semibold px-8 py-3.5 rounded-md transition-all"
              >
                Talk to Us
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is EGG */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">What is EGG?</p>
              <h2 className="text-4xl font-bold text-foreground leading-tight mb-6">
                Impact Finance,{" "}
                <span className="italic font-serif font-normal text-primary">Made Measurable</span>
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-5">
                <strong className="text-foreground">EGG</strong>, the EarnMore Growth Gateway, is our proprietary platform connecting investors, institutions, and government partners with verified impact opportunities.
              </p>
              <p className="text-foreground/65 leading-relaxed mb-5">
                Through EGG, we provide tools and strategies to align portfolios and operations with values, driving real change in communities and ecosystems around the world.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                Every opportunity on the EGG platform is rigorously screened against internationally recognised frameworks, ensuring your capital creates the change it is intended to.
              </p>
            </motion.div>

            {/* EGG card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="rounded-2xl p-10"
                style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">EGG Platform</p>
                    <p className="text-emerald-400 text-sm">EarnMore Growth Gateway</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { label: "GRI Aligned", desc: "Global Reporting Initiative frameworks" },
                    { label: "TCFD Aligned", desc: "Climate-related financial disclosures" },
                    { label: "NDC Screened", desc: "National determined contribution pipelines" },
                    { label: "ICMA Aligned", desc: "Green and social bond principles" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-emerald-400 text-sm font-bold mb-1">{item.label}</p>
                      <p className="text-green-300/50 text-xs leading-snug">{item.desc}</p>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-16 md:py-24 bg-[#f0fdf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">Our Framework</p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Built on Three{" "}
              <span className="italic font-serif font-normal text-primary">Pillars</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                label: "Environmental",
                color: "bg-emerald-50 border-emerald-200",
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-600",
                dot: "bg-emerald-500",
                text: "Climate risk analysis, clean infrastructure, carbon-efficient enterprises, and renewable energy investment.",
              },
              {
                icon: TrendingUp,
                label: "Social",
                color: "bg-teal-50 border-teal-200",
                iconBg: "bg-teal-100",
                iconColor: "text-teal-600",
                dot: "bg-teal-500",
                text: "Financial inclusion, community economic development, equitable wealth access, and social equity programs.",
              },
              {
                icon: Shield,
                label: "Governance",
                color: "bg-green-50 border-green-200",
                iconBg: "bg-green-100",
                iconColor: "text-green-700",
                dot: "bg-green-600",
                text: "Rigorous ethical standards, transparent reporting frameworks, and fiduciary accountability.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-2xl border ${pillar.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.label}</h3>
                <p className="text-foreground/60 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Make Your Capital Work for the Planet?
            </h2>
            <p className="text-green-100/60 text-lg mb-10 max-w-2xl mx-auto">
              Join institutions and investors already using the EGG platform to align finance with impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://earnmoreapp.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-md transition-all"
              >
                Visit EGG Platform
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-emerald-400/50 text-white font-semibold px-8 py-3.5 rounded-md transition-all"
              >
                Book a Consultation
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
