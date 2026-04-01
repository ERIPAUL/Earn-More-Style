import { Mail, Globe, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-16 border-t border-white/10"
      style={{ background: "linear-gradient(135deg, #0f2b2b 0%, #0d3d2e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Earnmore Consultants"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-green-200/50 text-sm leading-relaxed mb-6">
              A sustainability consultancy providing practical strategies and impactful solutions for a greener, more prosperous future.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <Leaf className="w-4 h-4" />
              <span className="font-medium">Sustainability First</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "What We Do", href: "#services" },
                { label: "Who We Are", href: "#who-we-are" },
                { label: "Blog", href: "#blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-green-200/60 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Sustainable Infrastructure Finance",
                "Climate Finance Solutions",
                "ESG Structures",
                "Sustainability Policy Reviews",
                "Training & Capacity Building",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-green-200/60 hover:text-emerald-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & ESG App */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-green-200/60 mb-8">
              <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@earnmoregroup.com">info@earnmoregroup.com</a>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Globe className="w-4 h-4" />
                <a href="https://www.earnmoregroup.com" target="_blank" rel="noopener noreferrer">
                  www.earnmoregroup.com
                </a>
              </li>
            </ul>

            {/* ESG App CTA */}
            <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-5">
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">ESG Platform</p>
              <p className="text-green-200/70 text-sm mb-4 leading-relaxed">
                Explore our ESG impact platform — EarnMore App.
              </p>
              <a
                href="https://earnmoreapp.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
              >
                earnmoreapp.co →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-green-200/40">
            &copy; {new Date().getFullYear()} Earnmore Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-green-200/40 hover:text-emerald-400 transition-colors">
              About Us
            </a>
            <a href="#" className="text-xs text-green-200/40 hover:text-emerald-400 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="text-xs text-green-200/40 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="text-xs text-green-200/40 hover:text-emerald-400 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
