import { motion } from "framer-motion";
import { ArrowRight, Building2, Cloud, BarChart3, FileCheck, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Sustainable Infrastructure Finance",
    description:
      "Securing financing for infrastructure projects that prioritize sustainability — identifying funding sources, developing financial models, and facilitating investment in projects with positive environmental and social impacts.",
    image: "/images/blog-featured.jpg",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Climate Finance Solutions",
    description:
      "Mobilising public and private capital to close investment gaps in low- and middle-income countries for renewables, afforestation, clean energy, water infrastructure, and agriculture.",
    image: "/images/blog-green-bonds.jpg",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "ESG Structures",
    description:
      "Assisting organizations to set up and oversee ESG structures — from materiality assessments to unique frameworks, policies, and strategies for addressing environmental, social, and governance issues.",
    image: "/images/business-partnership.jpg",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Sustainability Policy Reviews",
    description:
      "Evaluating and analyzing existing sustainability policies of government institutions — identifying improvement areas and recommending changes to enhance sustainability efforts.",
    image: "/images/agriculture-crops.jpg",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Training and Capacity Building",
    description:
      "Education and skill development programs — workshops, seminars, and training sessions aimed at building capacity to effectively contribute to sustainability efforts.",
    image: "/images/professional-training.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#f0fdf8" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />
            What We Do
            <span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Specialized Sustainability &{" "}
            <span className="italic font-serif font-normal text-primary">
              Advisory Services
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col border border-transparent hover:border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Card image */}
              <div className="relative overflow-hidden" style={{ height: "160px" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Circle icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 -mt-12 relative z-10 border-4 border-white shadow-sm">
                  {service.icon}
                </div>

                <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>

                {/* Arrow link */}
                <a
                  href="/contact"
                  className="w-9 h-9 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Get Started</p>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Ready to build a more sustainable future?
              </h3>
              <p className="text-green-200/55 text-sm leading-relaxed">
                Contact us today for full-cycle support from feasibility to impact reporting.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors w-fit group relative z-10"
            >
              Book a Free Session
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
