import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image / visual block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Green accent block */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-2xl z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10">
              <div
                className="w-full aspect-[4/3] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0f2b2b 0%, #1a4d35 100%)" }}
              >
                <div className="text-center px-10">
                  <p className="text-6xl font-bold text-white mb-2">EMG</p>
                  <p className="text-emerald-300 text-sm tracking-widest uppercase">Earnmore Group</p>
                  <div className="mt-8 grid grid-cols-2 gap-6 text-left">
                    <div>
                      <p className="text-3xl font-bold text-emerald-400">150+</p>
                      <p className="text-green-200/60 text-xs mt-1">Global Clients</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-emerald-400">30+</p>
                      <p className="text-green-200/60 text-xs mt-1">Countries</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-emerald-400">10+</p>
                      <p className="text-green-200/60 text-xs mt-1">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-emerald-400">500+</p>
                      <p className="text-green-200/60 text-xs mt-1">Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-emerald-400/20 rounded-full z-0" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
              Your Partner in
              <span className="text-primary font-serif italic font-normal"> Sustainability</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              EarnMore is a sustainability consultancy that provides practical strategies and impactful solutions that enable institutions to accomplish their goals in all areas of their near and long-term operations.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              We deliver strategic consultation with the expertise to deliver strategy, planning, implementation, and compliance. Our multi-disciplinary team of consultants brings their cross-industry experience and in-depth knowledge to find bespoke solutions for both businesses and governments.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Strategic Sustainability Planning",
                "Implementation & Compliance",
                "Government & Private Sector Focus",
                "Bespoke Cross-Industry Solutions",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#about-detail"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Discover more
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
