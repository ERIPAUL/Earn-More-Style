import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";

const featuredPost = {
  date: "December 11, 2023",
  category: "(ESG) Structures",
  categoryColor: "bg-teal-100 text-teal-700",
  title: "Understanding the International Sustainability Standards Board's Sustainability Disclosure Standards: IFRS S1 and IFRS S2, Part 2",
  excerpt:
    "In the first part of this series, we looked at the governance and strategy elements of the ISSB IFRS S1 and S2 standards. In this second part we consider risk management plus metrics and targets, and what each reporting requirement means in practice for organisations.",
  author: "EarnMore Consultants",
  role: "Editorial Team",
  readTime: "6 min read",
  image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6576cd5073e40_valley-with-huge-wind-mills-solar-batteries-factories-renewable-sources-energy-care-environment-green-generate-electricity-eco-power-plant-ecology-concept-3d-rendering-illustration_76964-833.jpg",
  url: "/blog/ifrs-s1-s2-part-2",
};

const posts = [
  {
    date: "December 4, 2023",
    category: "(ESG) Structures",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "Understanding the International Sustainability Standards Board's Sustainability Disclosure Standards: IFRS S1 and IFRS S2",
    excerpt:
      "The ISSB was established to develop a comprehensive global baseline of sustainability-related disclosure standards. This article explores the governance and strategy pillars of IFRS S1 and IFRS S2 and what they mean for reporting organisations.",
    readTime: "6 min read",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/656da9f4b3ab7_sunny-landscape-with-windmills.jpg",
    url: "/blog/ifrs-s1-s2-part-1",
  },
  {
    date: "December 1, 2023",
    category: "Sustainable Infrastructure Finance",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Africa Climate Summit: Towards Promoting Climate Finance and Green Growth",
    excerpt:
      "Africa gathered in Nairobi from 4th to 6th September 2023 for the inaugural Africa Climate Summit convened by the African Union and hosted by the Government of Kenya, under the theme 'Driving Green Growth and Climate Finance Solutions for Africa and the World'.",
    readTime: "5 min read",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/656a6142aa695_drought.jpg",
    url: "/blog/africa-climate-summit",
  },
  {
    date: "December 1, 2023",
    category: "Sustainable Infrastructure Finance",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Amazon Summit: Inspiration for Protecting African Rainforests",
    excerpt:
      "Eight Amazon countries recently concluded the Amazon Summit in Belém, Brazil, focused on environmental and climate challenges facing the Amazon. A key lesson emerges for Africa: the need for a similar concord to protect the Equatorial Rainforest, funded through innovative climate finance.",
    readTime: "5 min read",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6569e10ef1132_tranquil-scene-mountain-range-reflected-pond-generated-by-ai.jpg",
    url: "/blog/amazon-summit",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Seo
        title="Sustainability & ESG Blog, EarnMore Consultants Nigeria"
        description="Insights, analysis, and thought leadership on ESG, climate finance, IFRS sustainability reporting, and green bonds from EarnMore Consultants, Nigeria's sustainability advisory experts."
        keywords="ESG blog Nigeria, sustainability blog Nigeria, IFRS S1 S2 Nigeria, climate finance blog, green bonds blog Nigeria, sustainability insights Africa"
        canonical="/blog"
      />
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ── Hero Banner ── */}
        <div
          className="relative py-12 md:py-28 flex items-center justify-center text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <motion.div
            className="relative z-10 max-w-2xl mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              Insights & Updates
              <span className="w-6 h-px bg-emerald-400" />
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog{" "}
              <span className="italic font-serif font-normal text-emerald-300">Insights</span>
            </h1>
            <p className="text-green-200/60 text-lg">
              Explore our latest articles and sustainability industry insights
            </p>
          </motion.div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">

          {/* Featured Post */}
          <Link href={featuredPost.url} className="block mb-16">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-lg transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-foreground/40 text-xs">{featuredPost.date}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${featuredPost.categoryColor}`}>
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{featuredPost.author}</p>
                  <p className="text-xs text-foreground/40">{featuredPost.role}</p>
                </div>
                <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>
          </Link>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href={post.url} className="flex flex-col">
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 group flex flex-col flex-grow cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {/* Card image */}
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Card content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-foreground/40 text-xs">{post.date}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/55 text-sm leading-relaxed flex-grow mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xs text-foreground/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>

          {/* Coming soon note */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-foreground/40 text-sm mb-4">More articles coming soon</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Get in touch to suggest a topic <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
