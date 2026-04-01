import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const principles = [
    "Data-Driven Precision",
    "Uncompromising Transparency",
    "Agile Capital Allocation",
    "Long-Term Vision"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-border/50 translate-x-2 translate-y-2 z-0"></div>
              <img 
                src="/images/about-image.png" 
                alt="Premium modern office" 
                className="relative z-10 w-full aspect-[4/3] object-cover grayscale-[0.2] contrast-125"
              />
              <div className="absolute -bottom-8 -right-8 bg-card p-8 border border-border z-20 shadow-2xl">
                <p className="text-4xl font-serif font-bold text-primary mb-2">$14B+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Assets Advised</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              The EMG Difference
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              We engineer growth with absolute precision.
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Earn More Group is not a traditional bank, nor are we a disruptive startup experimenting with your capital. We exist confidently in the intersection—combining the robust security of institutional finance with the agility and technological edge of modern fintech.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We believe wealth management shouldn't feel archaic. Every strategy we deploy is built to outpace the market while rigorously managing risk.
            </p>

            <ul className="space-y-4">
              {principles.map((principle, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-center gap-3 text-foreground font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                >
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {principle}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
