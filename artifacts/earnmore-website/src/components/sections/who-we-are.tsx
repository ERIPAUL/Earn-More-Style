import { motion } from "framer-motion";
import { Eye, Target, Star } from "lucide-react";

const values = [
  {
    title: "Expertise and Innovation",
    description:
      "We continually enhance our knowledge and skills to provide cutting-edge solutions and remain at the forefront of sustainability practices.",
  },
  {
    title: "Collaborative Partnership",
    description:
      "We believe in the power of collaboration, and work closely with our clients to co-create tailored and effective sustainability strategies.",
  },
  {
    title: "Responsibility",
    description:
      "We are committed to responsible stewardship of resources and strive for the well-being of all stakeholders, including our employees.",
  },
  {
    title: "Global Impact",
    description:
      "We recognize the interconnectedness of the world and aim to make a positive impact on a global scale, fostering sustainability across borders.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Built on Purpose,
            <span className="text-primary font-serif italic font-normal"> Driven by Impact</span>
          </h2>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: <Eye className="w-6 h-6" />,
              label: "Vision",
              text: "Promoting a sustainable and resilient future",
            },
            {
              icon: <Target className="w-6 h-6" />,
              label: "Mission",
              text: 'At EarnMore Consultants, our mission is to catalyse positive change by providing expert guidance and innovative solutions in sustainability. We are committed to partnering with government institutions and organisations globally, helping them navigate the complex landscape of environmental, social, and governance challenges. Through rigorous policy reviews, strategic advisory, sustainable finance, and capacity building, we aspire to shape a more sustainable world, one institution at a time.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <span className="font-bold text-lg">{item.label}</span>
              </div>
              <p className="text-foreground/70 leading-relaxed">"{item.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold">Core Values</h3>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-7 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold mb-5 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <h4 className="font-bold text-base mb-3 group-hover:text-primary transition-colors">
                {val.title}
              </h4>
              <p className="text-foreground/60 text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
