import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-0">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />
            Who We Are
            <span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Built on Purpose,{" "}
            <span className="italic font-serif font-normal text-primary">Driven by Impact</span>
          </h2>
        </motion.div>

        {/* Vision / Mission — now image + cards split layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-16">
          {/* Left: photo */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: "340px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/green-building.jpg"
              alt="Rooftop solar panels — green infrastructure"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Our Guiding Principles</p>
              <p className="text-white text-2xl font-bold leading-snug">
                Shaping a sustainable world,{" "}
                <span className="italic font-serif font-normal text-emerald-300">one institution at a time</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Vision & Mission cards stacked */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                label: "Vision",
                text: "Promoting a sustainable and resilient future for generations to come — through expert guidance, rigorous policy, and innovative finance.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                label: "Mission",
                text: "At EarnMore Consultants, our mission is to catalyse positive change by providing expert guidance and innovative solutions in sustainability. We are committed to partnering with government institutions and organisations globally, helping them navigate the complex landscape of environmental, social, and governance challenges. Through rigorous policy reviews, strategic advisory, sustainable finance, and capacity building, we aspire to shape a more sustainable world, one institution at a time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-5 p-7 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group flex-grow"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">{item.label}</p>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width image break */}
      <div className="relative h-56 md:h-72 my-0 overflow-hidden">
        <img
          src="/images/blog-training.jpg"
          alt="Capacity building workshop — sustainability training"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(10,46,40,0.65)" }}
        >
          <motion.div
            className="text-center px-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">Our Commitment</p>
            <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl mx-auto leading-snug">
              A greener planet starts with{" "}
              <span className="italic font-serif font-normal text-emerald-300">bold decisions today</span>
            </p>
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
