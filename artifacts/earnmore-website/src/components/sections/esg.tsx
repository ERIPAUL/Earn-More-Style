import { motion } from "framer-motion";
import { Leaf, Users, Scale, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: <Leaf className="w-6 h-6" />,
    label: "Environmental",
    description:
      "We integrate climate risk analysis into every investment thesis and actively fund clean infrastructure, sustainable agriculture, and carbon-efficient enterprises.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Social",
    description:
      "We believe capital can be a force for opportunity. Our social mandate supports financial inclusion, community economic development, and equitable wealth access.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    label: "Governance",
    description:
      "Rigorous ethical standards, transparent reporting, and fiduciary accountability define every decision from the boardroom to the portfolio.",
  },
];

export default function EsgSection() {
  return (
    <section id="esg" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: ESG Header + Pillars */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-primary" />
                Responsibility
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Capital that serves more than returns.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-14">
                Earn More Group operates with a conviction that profit and purpose are not in conflict — they are interdependent. Our Environmental, Social, and Governance framework is woven into the fabric of every investment we make.
              </p>
            </motion.div>

            <div className="space-y-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-wide">{pillar.label}</h4>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: EGG Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="relative">
              {/* Gold accent border offset */}
              <div className="absolute -inset-2 border border-primary/20 z-0" />
              <div className="relative z-10 bg-card border border-border p-10 md:p-14">
                {/* EGG Logo mark */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-serif font-bold text-xl tracking-tight">EGG</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">Earn More Group</p>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">ESG Initiative</p>
                  </div>
                </div>

                <h4 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight">
                  Meet EGG — our commitment to sustainable financial growth.
                </h4>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  EGG (Earn More Group's ESG initiative) is our dedicated platform for impact-oriented investing. We have built frameworks that make responsible finance measurable, transparent, and genuinely profitable — not performative.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-10">
                  Through EGG, we provide investors, institutions, and partners with the tools and strategies to align their portfolios with their values — without sacrificing a single basis point of performance.
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-2 gap-6 mb-10 pt-6 border-t border-border">
                  {[
                    { value: "40+", label: "ESG Funds" },
                    { value: "3 Continents", label: "Impact Reach" },
                    { value: "92%", label: "Client Satisfaction" },
                    { value: "2019", label: "Founded" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl font-serif font-bold text-primary">{stat.value}</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-none font-bold uppercase tracking-widest h-14 text-sm group"
                >
                  <a
                    href="https://earnmoreapp.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Explore Earnmoreapp.co
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
