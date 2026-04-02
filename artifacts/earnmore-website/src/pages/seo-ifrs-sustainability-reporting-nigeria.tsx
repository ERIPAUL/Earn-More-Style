import { Link } from "wouter";
import Seo from "@/components/seo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function IfrsSustainabilityReportingNigeria() {
  return (
    <>
      <Seo
        title="IFRS S1 S2 Sustainability Reporting Nigeria — EarnMore Consultants"
        description="Expert IFRS S1 and S2 sustainability reporting advisory in Nigeria. EarnMore Consultants helps Nigerian companies prepare for mandatory climate and sustainability disclosure under the new IFRS Standards."
        keywords="IFRS S1 Nigeria, IFRS S2 Nigeria, sustainability reporting Nigeria, climate disclosure Nigeria, TCFD Nigeria, sustainability disclosure standards Nigeria"
        canonical="/services/ifrs-sustainability-reporting-nigeria"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IFRS S1 S2 Sustainability Reporting Nigeria",
            "provider": {
              "@type": "Organization",
              "name": "EarnMore Consultants",
              "url": "https://earnmoregroup.com",
              "address": { "@type": "PostalAddress", "addressCountry": "NG", "addressRegion": "Lagos" }
            },
            "description": "IFRS S1 and S2 sustainability reporting advisory for Nigerian companies.",
            "areaServed": "Nigeria",
            "serviceType": "Sustainability Reporting"
          })
        }}
      />
      <Navbar />

      <section className="bg-[#0a2e28] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">IFRS S1 & S2 · Sustainability Reporting · Nigeria</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            IFRS S1 & S2 Sustainability Reporting in Nigeria — Be Ready for the New Standard
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            The International Financial Reporting Standards (IFRS) S1 and S2 represent the biggest change to corporate reporting in a generation. EarnMore Consultants helps Nigerian companies understand, prepare for, and implement these new sustainability disclosure requirements — before they become mandatory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Get Expert Guidance <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/blog/ifrs-s1-s2-part-1" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Read Our IFRS Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#0a2e28] mb-6">Understanding IFRS S1 and IFRS S2</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The International Sustainability Standards Board (ISSB), established by the IFRS Foundation, published IFRS S1 (General Requirements for Disclosure of Sustainability-related Financial Information) and IFRS S2 (Climate-related Disclosures) in June 2023. These standards represent a major step towards a global baseline for sustainability reporting.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            <strong>IFRS S1</strong> requires companies to disclose material sustainability-related risks and opportunities across governance, strategy, risk management, and metrics and targets — using the TCFD (Task Force on Climate-related Financial Disclosures) framework as its foundation. <strong>IFRS S2</strong> goes further, requiring specific, quantitative disclosure of climate-related risks and opportunities, including Scope 1, 2, and 3 greenhouse gas emissions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            For Nigerian companies, the relevance of IFRS S1 and S2 is accelerating. Several major jurisdictions — including the EU, UK, Australia, and Singapore — have already adopted or are adopting these standards for listed companies. As Nigerian businesses deepen their integration with global capital markets and supply chains, IFRS-aligned sustainability disclosure will increasingly be required by international investors, lenders, and trading partners.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Our IFRS S1 & S2 Advisory Services in Nigeria</h2>
          {[
            {
              title: "IFRS S1 & S2 Readiness Assessment",
              body: "We assess your current sustainability reporting practices against IFRS S1 and S2 requirements, identifying the gaps that need to be addressed before you can comply. Our readiness assessments give you a clear, prioritised action plan — and a realistic timeline for achieving compliance."
            },
            {
              title: "Climate Risk & Opportunity Analysis (IFRS S2)",
              body: "IFRS S2 requires companies to assess and disclose the financial impacts of climate-related risks and opportunities across short, medium, and long-term horizons. We facilitate climate scenario analysis, assess physical and transition climate risks relevant to Nigerian operations, and quantify the potential financial impact of these risks — meeting the rigorous requirements of IFRS S2."
            },
            {
              title: "GHG Emissions Inventory (Scope 1, 2 & 3)",
              body: "IFRS S2 requires disclosure of Scope 1, 2, and 3 greenhouse gas emissions. We help Nigerian companies measure their full emissions footprint using the GHG Protocol, identify the most material sources of emissions, and develop a credible pathway to net zero — whether that involves renewable energy procurement, supply chain engagement, or carbon offsetting."
            },
            {
              title: "Sustainability Governance Framework",
              body: "Both IFRS S1 and S2 require detailed disclosure of board and management oversight of sustainability risks and opportunities. We help Nigerian companies establish the governance structures — including board ESG committees, management sustainability functions, and ESG KPI frameworks — that IFRS-aligned disclosure requires."
            },
            {
              title: "IFRS S1 & S2 Report Preparation",
              body: "We prepare IFRS S1 and S2 compliant sustainability disclosures — either as standalone sustainability reports or integrated into annual financial reports. Our reports are technically rigorous, clearly written, and designed to satisfy the expectations of sophisticated international investors."
            },
            {
              title: "Staff Training on IFRS S1 & S2",
              body: "Implementing IFRS S1 and S2 requires buy-in and capability across your finance, risk, operations, and sustainability teams. We deliver bespoke IFRS S1 and S2 training programmes for Nigerian companies, building the internal understanding needed to sustain IFRS-aligned reporting year after year."
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

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Why Act Now on IFRS S1 & S2 in Nigeria?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Companies that wait for mandatory adoption before beginning their IFRS S1 and S2 journey face a steep learning curve at exactly the moment when they are under scrutiny. Early adopters gain important advantages:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Time to build the data collection systems needed to measure Scope 1, 2, and 3 emissions accurately",
              "The ability to identify and act on climate risks before they become financially material",
              "A competitive advantage in attracting international investors who are already screening for IFRS S1/S2 alignment",
              "Stronger relationships with DFIs and multilateral lenders, many of whom require TCFD/IFRS S2-aligned disclosure",
              "The credibility that comes from voluntary early adoption — signalling sustainability leadership in Nigeria's market"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#f0fdf8] border border-emerald-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#0a2e28] mb-3">Prepare for IFRS S1 & S2 in Nigeria Today</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contact EarnMore Consultants to book your IFRS S1 & S2 readiness assessment and get ahead of the sustainability reporting curve in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Book a Readiness Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/blog/ifrs-s1-s2-part-2" className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                Read Our IFRS Blog Series
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
              { label: "Sustainability Consulting Lagos", href: "/services/sustainability-consulting-lagos" },
              { label: "Climate Finance Advisory Nigeria", href: "/services/climate-finance-advisory-nigeria" },
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
