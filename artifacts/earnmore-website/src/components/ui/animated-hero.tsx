import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const slides = [
  {
    image: "/images/green-terraces.jpg",
    eyebrow: "Welcome to Earnmore Consultants",
    headline: "Driving Change,",
    accent: "Delivering Solutions",
    sub: "At EarnMore, we leverage our extensive expertise to steer change and offer tangible, impactful sustainability solutions to propel your organization toward a greener, more prosperous future.",
  },
  {
    image: "/images/solar-panels.jpg",
    eyebrow: "Sustainable Infrastructure Finance",
    headline: "Securing Capital for A",
    accent: "Greener Future",
    sub: "We help governments and institutions identify funding sources and facilitate impactful investment in sustainable infrastructure projects worldwide.",
  },
  {
    image: "/images/ocean-environment.jpg",
    eyebrow: "Climate Finance Solutions",
    headline: "Mobilising Private & Public",
    accent: "Climate Capital",
    sub: "Closing investment gaps for renewables, clean energy, water infrastructure and climate-resilient agriculture through strategic finance advisory.",
  },
  {
    image: "/images/esg-building.jpg",
    eyebrow: "ESG Frameworks & Reporting",
    headline: "ESG Structures That",
    accent: "Create Real Value",
    sub: "From materiality assessments to IFRS S1 & S2 reporting — we build governance frameworks that satisfy investors and regulators alike.",
  },
];

function AnimatedHero() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const go = (n: number) => {
    setDir(n > current ? 1 : -1);
    setCurrent(n);
  };

  const prev = () => {
    const n = (current - 1 + slides.length) % slides.length;
    setDir(-1);
    setCurrent(n);
  };

  const next = () => {
    const n = (current + 1) % slides.length;
    setDir(1);
    setCurrent(n);
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background images — crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(10,46,40,0.91) 0%, rgba(13,61,46,0.82) 60%, rgba(15,43,43,0.70) 100%)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative circles — desktop only to avoid mobile overflow */}
      <div className="hidden md:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border border-emerald-300 z-10 pointer-events-none" />
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 border border-emerald-400 z-10 pointer-events-none" />

      {/* Text content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-20">
        <div className="flex flex-col items-start gap-8 max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-content"}
              className="flex flex-col items-start gap-6"
              initial={{ opacity: 0, y: dir * 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: dir * -20 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                <span className="w-8 h-px bg-emerald-400 inline-block" />
                {slide.eyebrow}
              </p>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                {slide.headline}{" "}
                <span className="italic font-serif font-normal" style={{ color: "#34d399" }}>
                  {slide.accent}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-green-100/70 text-lg leading-relaxed max-w-lg">
                {slide.sub}
              </p>
            </motion.div>
          </AnimatePresence>

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
        </div>
      </div>

      {/* Slide controls — bottom centre */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-5">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current ? "#34d399" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export { AnimatedHero };
