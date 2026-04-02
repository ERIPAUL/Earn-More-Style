import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: "420px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/green-terraces.jpg"
              alt="Sustainable agriculture — green terraced fields"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">About Us</p>
              <p className="text-white text-xl font-bold leading-snug">
                Our Path to Trust and{" "}
                <span className="italic font-serif font-normal text-emerald-300">Sustainable Success</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
              Your Partner in{" "}
              <span className="italic font-serif font-normal text-primary">
                Sustainability
              </span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed mb-5">
              At EarnMore, our journey commenced with a clear and inspiring mission: to empower both individuals and businesses to realise their sustainability aspirations.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-8">
              We are dedicated to providing expert guidance and unwavering support — ensuring that our clients have the tools and knowledge to navigate the complex landscape of environmental, social, and governance challenges.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Strategic Sustainability Planning",
                "Implementation & Compliance",
                "Government & Private Sector Focus",
                "Bespoke Cross-Industry Solutions",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 text-sm font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group"
            >
              Read More
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
