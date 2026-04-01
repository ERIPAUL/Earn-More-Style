import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ShieldCheck, Gem, Network } from "lucide-react";

const services = [
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Strategic Investments",
    description: "Algorithmic and fundamental approaches to equity, fixed income, and alternative markets, tailored to outpace benchmarks."
  },
  {
    icon: <Gem className="w-8 h-8 text-primary" />,
    title: "Private Wealth Management",
    description: "Bespoke capital preservation and growth strategies for high-net-worth individuals, families, and estates."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Risk Advisory",
    description: "Comprehensive risk modeling and mitigation frameworks to protect capital against systemic and idiosyncratic shocks."
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "Corporate Finance",
    description: "Capital restructuring, M&A advisory, and liquidity optimization for mid-to-large cap enterprises."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              Core Competencies
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Sophisticated strategies.<br/>Flawless execution.
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg max-w-md">
              We deploy institutional-grade intelligence across our entire suite of financial services.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors duration-500 relative flex flex-col h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="mb-8 p-4 bg-secondary/50 inline-flex rounded-sm w-fit group-hover:bg-background transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold font-serif mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-sm font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
