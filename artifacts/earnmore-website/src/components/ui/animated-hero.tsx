import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "wouter";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Sustainable", "Resilient", "Impactful", "Credible", "Transformative"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

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
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border border-emerald-300" style={{ right: "-100px" }} />
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 border border-emerald-400" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex flex-col items-start gap-8 max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            className="text-emerald-400 text-sm font-semibold tracking-widest uppercase flex items-center gap-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-8 h-px bg-emerald-400 inline-block" />
            Welcome to EarnMore Consultants
          </motion.p>

          {/* Animated H1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
              Building{" "}
              {/* Animated cycling word */}
              <span className="relative inline-flex h-[1.1em] overflow-hidden align-bottom min-w-[340px] md:min-w-[420px]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute italic font-serif font-normal"
                    style={{ color: "#34d399" }}
                    initial={{ opacity: 0, y: 60 }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -60 : 60, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <br />
              Futures in Africa
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-green-100/70 text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At EarnMore Consultants, we leverage our expertise to steer change and deliver tangible sustainability solutions — propelling organisations across Nigeria and Africa toward a greener, more prosperous future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-md transition-all group"
            >
              Get in Touch
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <a
              href="https://calendly.com/esg-earnmoreapp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-emerald-300 transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              Book a Free Session
            </a>
          </motion.div>

          {/* Trust badge row */}
          <motion.div
            className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {["ESG Frameworks", "Climate Finance", "Green Bonds", "IFRS S1 & S2"].map((badge) => (
              <span key={badge} className="text-xs font-semibold text-emerald-400/70 uppercase tracking-widest">
                {badge}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { AnimatedHero };
