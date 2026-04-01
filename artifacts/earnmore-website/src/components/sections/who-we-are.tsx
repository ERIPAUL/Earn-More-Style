import { motion } from "framer-motion";
import { Eye, Target, ArrowRight } from "lucide-react";

const values = [
  {
    title: "Expertise & Innovation",
    description: "Continually enhancing knowledge and skills to provide cutting-edge solutions at the forefront of sustainability practices.",
  },
  {
    title: "Collaborative Partnership",
    description: "Working closely with clients to co-create tailored, effective sustainability strategies built on trust and shared purpose.",
  },
  {
    title: "Responsibility",
    description: "Committed to responsible stewardship of resources and the well-being of all stakeholders, including employees and communities.",
  },
  {
    title: "Global Impact",
    description: "Recognizing the interconnectedness of the world and aiming to foster sustainability across borders and communities.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-24 md:py-32 bg-white">
      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
              Boosting Your{" "}
              <span className="italic font-serif font-normal text-primary">
                Sustainability Knowledge
              </span>
            </h2>
            <p className="text-foreground/65 leading-relaxed mb-6">
              At EarnMore Consultants, our mission is to catalyse positive change by providing expert guidance and innovative solutions in sustainability. We are committed to partnering with government institutions and organisations globally.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-10">
              Through rigorous policy reviews, strategic advisory, sustainable finance, and capacity building, we aspire to shape a more sustainable world — one institution at a time.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group"
            >
              Learn More
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>

          {/* Right: Vision + Mission cards */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                label: "Our Vision",
                text: "Promoting a sustainable and resilient future — where institutions, governments, and businesses operate in harmony with people and the planet.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                label: "Our Mission",
                text: "To catalyse positive change by providing expert guidance and innovative solutions in sustainability, partnering with government institutions and organisations globally to navigate complex ESG challenges.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">{item.label}</p>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div
        className="py-16"
        style={{ backgroundColor: "#f0fdf8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">Core Values</p>
            <h3 className="text-3xl font-bold text-foreground">
              What We{" "}
              <span className="italic font-serif font-normal text-primary">Stand For</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 group border border-transparent hover:border-primary/20"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold mb-5 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h4 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {val.title}
                </h4>
                <p className="text-foreground/55 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
