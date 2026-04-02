import { Link } from "wouter";
import Seo from "@/components/seo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function GreenBondsNigeria() {
  return (
    <>
      <Seo
        title="Green Bonds Advisory Nigeria — EarnMore Consultants"
        description="Leading green bonds advisory firm in Nigeria. EarnMore Consultants advises issuers on structuring, verifying, and marketing green bonds and sustainability-linked bonds in Nigeria's growing sustainable debt market."
        keywords="green bonds Nigeria, green bond advisory Nigeria, green bond issuance Nigeria, sustainability bonds Nigeria, sustainable debt Nigeria, green finance Nigeria"
        canonical="/services/green-bonds-advisory-nigeria"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Green Bonds Advisory Nigeria",
            "provider": {
              "@type": "Organization",
              "name": "EarnMore Consultants",
              "url": "https://earnmoregroup.com",
              "address": { "@type": "PostalAddress", "addressCountry": "NG", "addressRegion": "Lagos" }
            },
            "description": "Green bond and sustainable debt advisory services for Nigerian issuers.",
            "areaServed": "Nigeria",
            "serviceType": "Green Bond Advisory"
          })
        }}
      />
      <Navbar />

      <section className="bg-[#0a2e28] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Green Bonds · Sustainable Debt · Nigeria</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Green Bond Advisory in Nigeria — Structuring Sustainable Debt for a Greener Future
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            EarnMore Consultants is Nigeria's specialist green bond advisory firm. We guide sovereign, sub-sovereign, corporate, and financial institution issuers through every stage of the green bond journey — from framework development to issuance and ongoing impact reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Talk to a Green Bond Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/climate-finance-advisory-nigeria" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Climate Finance Advisory
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#0a2e28] mb-6">Nigeria's Green Bond Market: Overview and Opportunity</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nigeria was a pioneer in African sovereign green bond issuance, becoming the first African country to issue a sovereign green bond in 2017. Since then, Nigeria's green bond market has grown steadily, with the federal government issuing successive sovereign green bonds and a growing number of Nigerian corporates and financial institutions entering the sustainable debt market.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Securities and Exchange Commission (SEC) Nigeria's Green Bond Rules, published in 2018, provide a regulatory framework for green bond issuance in Nigeria. The Nigerian Exchange (NGX) has developed a Sustainability Bonds Listing framework that includes green, social, and sustainability bonds — creating a visible market for Nigerian sustainable debt instruments.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Global demand for green bonds and other ESG-labelled debt instruments continues to grow rapidly. International investors — including pension funds, insurance companies, and ESG-dedicated asset managers — are actively seeking exposure to Nigerian green bonds as part of their emerging market sustainable investment allocations. Nigerian issuers that can demonstrate credible green credentials have access to a larger and more diverse investor pool, with the potential for preferential pricing (the so-called "greenium").
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Our Green Bond Advisory Services in Nigeria</h2>
          {[
            {
              title: "Green Bond Framework Development",
              body: "A credible Green Bond Framework is the foundation of any successful green bond issuance. We develop frameworks aligned with the ICMA Green Bond Principles, the Climate Bonds Standard, and SEC Nigeria's Green Bond Rules — clearly defining eligible project categories, proceeds management, reporting requirements, and external review processes."
            },
            {
              title: "Use of Proceeds Advisory",
              body: "Selecting and documenting eligible green projects is critical to the integrity of your green bond. We help issuers identify, evaluate, and document a robust pipeline of eligible projects — covering renewable energy, energy efficiency, clean transportation, sustainable water management, green buildings, and climate adaptation — ensuring proceeds are deployed in line with your framework and investor expectations."
            },
            {
              title: "Second Party Opinion (SPO) & Verification",
              body: "Most credible green bond issuances require an independent Second Party Opinion (SPO) or Climate Bonds Initiative certification. We work with leading SPO providers and CBi-approved verifiers to manage the external review process — coordinating the due diligence, documentation, and verification that investors require."
            },
            {
              title: "Investor Relations & Green Bond Marketing",
              body: "We advise on positioning your green bond to the right investor audience — including ESG-dedicated funds, development finance institutions, and mainstream institutional investors with sustainability mandates. Our investor relations support covers roadshow preparation, investor Q&A, and ongoing green bond communication."
            },
            {
              title: "Sustainability-Linked Bond (SLB) Advisory",
              body: "Sustainability-Linked Bonds tie coupon payments to the achievement of pre-agreed sustainability KPIs. We advise Nigerian issuers on selecting credible, ambitious KPIs; structuring the step-up/step-down coupon mechanism; preparing the SLB Framework aligned with ICMA SLB Principles; and sourcing SPO providers."
            },
            {
              title: "Annual Impact Reporting",
              body: "Maintaining investor confidence requires robust annual impact reporting — quantifying the environmental and social outcomes achieved by green bond proceeds. We prepare ICMA-aligned allocation and impact reports, including verified greenhouse gas emissions avoided, renewable energy capacity installed, and other measurable project impacts."
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

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Types of Issuers We Support in Nigeria</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Federal and state government green bonds — Nigeria's sovereign and sub-sovereign green bond programme",
              "Commercial banks and development finance institutions — sustainability bonds funding green lending portfolios",
              "Corporates in energy, infrastructure, real estate, and industry sectors",
              "Microfinance institutions — social bonds for financial inclusion and clean energy access",
              "Special purpose vehicles for renewable energy and infrastructure projects"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#f0fdf8] border border-emerald-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#0a2e28] mb-3">Start Your Green Bond Journey in Nigeria</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you are considering your first green bond or looking to strengthen an existing programme, EarnMore Consultants can help. Contact us for a confidential discussion.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/climate-finance-advisory-nigeria" className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                Climate Finance Advisory
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
              { label: "IFRS Sustainability Reporting Nigeria", href: "/services/ifrs-sustainability-reporting-nigeria" },
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
