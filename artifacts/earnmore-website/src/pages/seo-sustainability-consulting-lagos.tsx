import { Link } from "wouter";
import Seo from "@/components/seo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SustainabilityConsultingLagos() {
  return (
    <>
      <Seo
        title="Sustainability Consulting Lagos — EarnMore Consultants"
        description="Top sustainability consulting firm in Lagos, Nigeria. EarnMore Consultants delivers ESG strategy, sustainability reporting, and green finance advisory to Lagos-based businesses."
        keywords="sustainability consulting Lagos, sustainability consultants Lagos Nigeria, ESG Lagos, sustainability advisory Lagos, green business Lagos, corporate sustainability Lagos"
        canonical="/services/sustainability-consulting-lagos"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EarnMore Consultants",
            "description": "Sustainability consulting firm in Lagos, Nigeria.",
            "url": "https://earnmoregroup.com",
            "address": { "@type": "PostalAddress", "addressLocality": "Lagos", "addressCountry": "NG" },
            "areaServed": ["Lagos", "Nigeria"],
            "serviceType": "Sustainability Consulting"
          })
        }}
      />
      <Navbar />

      <section className="bg-[#0a2e28] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Sustainability Consulting · Lagos, Nigeria</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Sustainability Consulting in Lagos — Turning Green Strategy into Business Growth
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            EarnMore Consultants is Lagos's leading sustainability consulting firm. We partner with businesses, financial institutions, and public sector organisations to embed sustainability into strategy, operations, and reporting — creating lasting value in Lagos's fast-growing economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#0a2e28] mb-6">Why Lagos Businesses Need Sustainability Consulting Now</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lagos is the commercial engine of Nigeria and one of Africa's largest urban economies. With a population exceeding 15 million and a GDP that rivals many African countries, Lagos is home to some of the continent's most dynamic businesses — and some of its most acute environmental and social challenges.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            From flooding and waste management to energy access and supply chain labour standards, Lagos-based companies face a unique set of sustainability pressures. At the same time, Lagos's integration into global trade and finance networks means that sustainability performance is increasingly scrutinised by international partners, investors, and regulators. Sustainability consulting in Lagos is therefore both a risk management imperative and a strategic growth opportunity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants brings deep Lagos market knowledge alongside international sustainability expertise. We understand the local regulatory environment — including requirements from the Lagos State Environmental Protection Agency (LASEPA), the Lagos State Ministry of the Environment, and national bodies such as the National Environmental Standards and Regulations Enforcement Agency (NESREA) — and we help clients navigate these alongside global frameworks.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Our Sustainability Consulting Services in Lagos</h2>
          {[
            {
              title: "Sustainability Strategy Development",
              body: "We work with Lagos-based companies to develop comprehensive sustainability strategies that align with your business model, stakeholder expectations, and the city's environmental and social context. Our strategies are actionable, time-bound, and linked to measurable outcomes — not aspirational documents that sit on a shelf."
            },
            {
              title: "Environmental & Social Impact Assessments",
              body: "Whether you are developing new infrastructure in Lagos, launching a new product, or entering a new market, understanding your environmental and social footprint is essential. We conduct rigorous environmental and social impact assessments (ESIAs) that meet both Nigerian regulatory requirements and international standards such as the IFC Performance Standards."
            },
            {
              title: "Corporate Sustainability Reporting",
              body: "We help Lagos businesses prepare sustainability reports aligned with GRI Standards, IFRS S1 and S2, the UN SDGs, and other globally recognised frameworks. Our reports are designed to communicate credibly with international investors, local regulators, and wider stakeholder groups."
            },
            {
              title: "Supply Chain Sustainability",
              body: "Global buyers are increasingly requiring their Nigerian and Lagos-based suppliers to demonstrate ESG compliance. We help companies map their supply chain risks, implement supplier codes of conduct, and build the monitoring systems needed to provide credible supply chain sustainability assurance."
            },
            {
              title: "Sustainability Training & Capacity Building",
              body: "Embedding sustainability requires building internal capability. We deliver sustainability training workshops and capacity-building programmes for Lagos-based businesses — from board-level ESG awareness to operational-level environmental and social management."
            }
          ].map((item, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl font-bold text-[#0a2e28] mb-3 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-8">{item.body}</p>
            </div>
          ))}

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Lagos's Sustainability Ecosystem: Opportunities and Challenges</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lagos is at the forefront of Nigeria's sustainability transition. The Lagos State Government has committed to a series of ambitious sustainability targets — including expanding renewable energy access, improving waste management infrastructure, and reducing urban flooding through improved drainage systems and green infrastructure. These public sector commitments are creating private sector opportunities for businesses that are positioned to deliver sustainable products and services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            At the same time, Lagos faces formidable sustainability challenges. Air quality in Lagos remains a serious concern, with vehicle emissions and industrial activity contributing to some of the highest pollution levels in West Africa. Coastal erosion and flooding threaten significant portions of the city. Rapid urbanisation is straining infrastructure and creating social pressures around housing, water access, and employment.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants helps businesses understand both dimensions — the risks they must manage and the opportunities they can capture — and build sustainability strategies that position them to thrive in Lagos's evolving business environment.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Industries We Serve in Lagos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our sustainability consulting practice in Lagos spans a wide range of industries:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Financial services — banks, insurance companies, pension funds, and asset managers",
              "Fast-moving consumer goods (FMCG) — including packaging, supply chain, and product lifecycle sustainability",
              "Real estate and construction — green building standards, EDGE certification, and ESG due diligence",
              "Energy and utilities — including renewable energy project development and sustainable energy access",
              "Technology — digital sustainability, e-waste management, and responsible AI governance",
              "Logistics and transportation — fleet decarbonisation and sustainable logistics planning"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#f0fdf8] border border-emerald-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#0a2e28] mb-3">Work With Lagos's Leading Sustainability Consultants</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contact EarnMore Consultants today to discuss how we can help your Lagos business lead on sustainability — and turn ESG performance into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/esg-consulting-nigeria" className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                ESG Consulting Nigeria
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-[#0a2e28] mb-6">Related Services</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "ESG Consulting Nigeria", href: "/services/esg-consulting-nigeria" },
              { label: "Climate Finance Advisory Nigeria", href: "/services/climate-finance-advisory-nigeria" },
              { label: "IFRS Sustainability Reporting Nigeria", href: "/services/ifrs-sustainability-reporting-nigeria" },
              { label: "Green Bonds Advisory Nigeria", href: "/services/green-bonds-advisory-nigeria" },
              { label: "ESG Training Nigeria", href: "/services/esg-training-nigeria" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-emerald-700 hover:text-emerald-600 font-medium text-sm">
                <ArrowRight className="w-3.5 h-3.5" /> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
