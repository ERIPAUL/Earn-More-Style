import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const featuredPost = {
  date: "March 15, 2025",
  category: "ESG",
  categoryColor: "bg-emerald-100 text-emerald-700",
  title: "Understanding ESG Frameworks for Government Institutions",
  excerpt:
    "As governments globally face pressure to align operations with environmental, social, and governance standards, establishing the right ESG framework becomes critical. We explore the key principles and steps for public sector adoption.",
  author: "EarnMore Consultants",
  role: "Editorial Team",
  readTime: "6 min read",
  image: "/images/blog-featured.jpg",
};

const posts = [
  {
    date: "Feb 20, 2025",
    category: "Climate Finance",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Financing the Clean Energy Transition in Low-Income Countries",
    excerpt:
      "Mobilising capital for renewables and clean energy in emerging markets requires innovative blended finance structures and strong policy environments.",
    readTime: "5 min read",
    image: "/images/blog-renewable.jpg",
  },
  {
    date: "Jan 30, 2025",
    category: "Capacity Building",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Building ESG Capacity Within Your Organisation",
    excerpt:
      "Effective sustainability programs start with people. Discover how targeted training and capacity building drives lasting institutional change.",
    readTime: "4 min read",
    image: "/images/blog-training.jpg",
  },
  {
    date: "Jan 10, 2025",
    category: "Policy",
    categoryColor: "bg-orange-100 text-orange-700",
    title: "NDCs and the Role of National Sustainability Policy",
    excerpt:
      "Nationally Determined Contributions are reshaping government sustainability agendas. Here's what institutions need to know to align their strategies.",
    readTime: "5 min read",
    image: "/images/blog-climate-policy.jpg",
  },
  {
    date: "Dec 18, 2024",
    category: "Finance",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "Green Bonds: Mobilising Capital for a Sustainable Future",
    excerpt:
      "Green bonds are among the fastest-growing instruments in sustainable finance. We break down the issuance process, benefits, and reporting requirements.",
    readTime: "6 min read",
    image: "/images/blog-green-bonds.jpg",
  },
  {
    date: "Nov 25, 2024",
    category: "Infrastructure",
    categoryColor: "bg-violet-100 text-violet-700",
    title: "Sustainable Infrastructure: From Concept to Finance",
    excerpt:
      "Developing infrastructure that is both economically viable and environmentally resilient demands an integrated approach from feasibility through to impact reporting.",
    readTime: "7 min read",
    image: "/images/wind-farm.jpg",
  },
  {
    date: "Oct 14, 2024",
    category: "Agriculture",
    categoryColor: "bg-green-100 text-green-700",
    title: "Sustainable Land Use and Agricultural Finance",
    excerpt:
      "Agricultural systems are at the heart of the climate challenge. We explore how sustainable land-use finance can unlock both food security and carbon outcomes.",
    readTime: "5 min read",
    image: "/images/green-terraces.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ── Hero Banner ── */}
        <div
          className="relative py-20 md:py-28 flex items-center justify-center text-center overflow-hidden"
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
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-lg transition-all duration-300"
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
                <div className="flex items-center gap-1.5 text-foreground/40 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 group flex flex-col"
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
