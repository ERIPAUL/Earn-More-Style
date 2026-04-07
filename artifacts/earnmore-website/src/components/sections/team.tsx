import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Marcus J. Harrington",
    title: "Founder & Chief Executive Officer",
    bio: "Two decades of institutional investment experience across North America and Europe. Former Managing Director at a top-10 global investment bank.",
    initials: "MH",
  },
  {
    name: "Dr. Priya Rajan",
    title: "Chief Investment Officer",
    bio: "PhD in Financial Economics. Led quantitative strategy at sovereign wealth funds managing over $200B in assets before joining EMG.",
    initials: "PR",
  },
  {
    name: "James O. Caldwell",
    title: "Managing Director, ESG & Impact",
    bio: "Pioneer in ESG investment frameworks. Sits on the advisory boards of three international sustainability institutions.",
    initials: "JC",
  },
  {
    name: "Sofia Mendes",
    title: "Chief Operating Officer",
    bio: "Operational architect of EMG's expansion across five markets. Former COO at a leading fintech firm with $3B in AUM.",
    initials: "SM",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-32 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-primary" />
            Leadership
            <span className="w-8 h-[1px] bg-primary" />
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            The minds behind the strategy.
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our leadership brings together decades of institutional, quantitative, and impact investing experience, united by a singular commitment to results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-background p-8 md:p-10 flex flex-col group hover:bg-card transition-colors duration-500"
              variants={cardVariants}
            >
              {/* Avatar */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <span className="font-serif font-bold text-2xl text-primary group-hover:text-primary-foreground transition-colors duration-500">
                    {member.initials}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h4 className="font-bold text-lg mb-1 font-serif group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h4>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-5">
                {member.title}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {member.bio}
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  Connect
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
