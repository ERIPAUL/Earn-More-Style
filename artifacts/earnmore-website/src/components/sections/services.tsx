import { motion } from "framer-motion";
import { ArrowRight, Building2, Cloud, BarChart3, FileCheck, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Sustainable Infrastructure Finance",
    summary: "Securing financing for infrastructure projects that prioritize sustainability.",
    description:
      "This function involves securing financing for infrastructure projects that prioritize sustainability. It focuses on identifying funding sources, developing financial models, and facilitating investment in projects that have positive environmental and social impacts.",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Climate Finance Solutions",
    summary: "Mobilising capital to close investment gaps in low- and middle-income countries.",
    description:
      "EarnMore Group mobilises public and private capital to close investment gaps in low- and middle-income countries. This is crucial to funding projects in renewables, afforestation, clean energy, water infrastructure, agriculture and more. We deliver in line with NDC-screened project pipelines and ICMA-aligned frameworks.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "ESG Structures",
    summary: "Setting up and overseeing ESG structures and practices within your operations.",
    description:
      "This function assists organizations in setting up and overseeing ESG structures and practices within their operations. It involves carrying out a materiality assessment to identify risks and opportunities that will help create unique frameworks, policies, and strategies for addressing environmental, social, and governance issues.",
  },
  {
    icon: <FileCheck className="w-7 h-7" />,
    title: "Sustainability Policy Reviews",
    summary: "Evaluating and analyzing existing sustainability policies of institutions.",
    description:
      "This function involves evaluating and analyzing the existing sustainability policies of government institutions. It includes identifying areas for improvement, assessing alignment with current environmental and social goals, and recommending changes to enhance sustainability efforts.",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Training and Capacity Building",
    summary: "Education and skill development programs to enhance sustainability understanding.",
    description:
      "This function provides education and skill development programs for individuals and organizations to enhance their understanding of sustainability principles and practices. It includes workshops, seminars, and training sessions aimed at building capacity to effectively contribute to sustainability efforts.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Comprehensive Sustainability{" "}
              <span className="text-primary font-serif italic font-normal">Services</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-foreground/60 text-lg max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deploy institutional expertise across a full suite of sustainability and ESG services.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #0f2b2b 0%, #1a4d35 100%)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
          >
            <div>
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">Get Started</p>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Ready to build a more sustainable future?
              </h3>
              <p className="text-green-200/60 text-sm leading-relaxed">
                Contact us today for full-cycle support from feasibility to impact reporting.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors w-fit"
            >
              Book a Free Session <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
