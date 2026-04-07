import { Link } from "wouter";
import Seo from "@/components/seo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ClimateFinanceNigeria() {
  return (
    <>
      <Seo
        title="Climate Finance Advisory Nigeria, EarnMore Consultants"
        description="Expert climate finance advisory in Nigeria. EarnMore Consultants helps businesses, governments, and institutions access green bonds, climate funds, and concessional finance for sustainable projects in Nigeria."
        keywords="climate finance Nigeria, climate finance advisory Nigeria, green finance Nigeria, sustainable finance Nigeria, climate investment Nigeria, concessional finance Nigeria"
        canonical="/services/climate-finance-advisory-nigeria"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Climate Finance Advisory Nigeria",
            "provider": {
              "@type": "Organization",
              "name": "EarnMore Consultants",
              "url": "https://earnmoregroup.com",
              "address": { "@type": "PostalAddress", "addressCountry": "NG", "addressRegion": "Lagos" }
            },
            "description": "Climate finance advisory services for Nigerian businesses and government institutions.",
            "areaServed": "Nigeria",
            "serviceType": "Climate Finance Advisory"
          })
        }}
      />
      <Navbar />

      <section className="bg-[#0a2e28] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Climate Finance · Nigeria</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Climate Finance Advisory in Nigeria, Unlocking Capital for Sustainable Projects
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            EarnMore Consultants provides specialist climate finance advisory services to help Nigerian businesses, infrastructure developers, and public sector institutions access the growing pool of domestic and international climate capital available for sustainable development projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Speak to an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#0a2e28] mb-6">The Climate Finance Opportunity in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nigeria has one of the most significant climate finance opportunities in Africa. As the continent's largest economy and most populous nation, Nigeria sits at the intersection of enormous climate risk, from desertification in the north to coastal flooding and oil pollution in the south, and enormous clean energy and sustainable infrastructure investment potential.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Global climate finance flows are accelerating. The Green Climate Fund (GCF), the Global Environment Facility (GEF), the African Development Bank's Sustainable Energy Fund for Africa (SEFA), and bilateral DFIs including the British International Investment (BII), Proparco, and the US Development Finance Corporation (DFC) are all actively seeking to deploy capital into climate-aligned projects in Nigeria.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nigeria's Nationally Determined Contribution (NDC) under the Paris Agreement has created a pipeline of low-carbon development projects requiring private and blended finance. These include solar and wind energy projects, energy efficiency programmes, sustainable agriculture initiatives, climate-resilient infrastructure, and climate adaptation projects in vulnerable communities. EarnMore Consultants helps clients navigate this landscape and secure the climate finance their projects need.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Our Climate Finance Advisory Services in Nigeria</h2>
          {[
            {
              title: "Climate Finance Strategy & Readiness",
              body: "Before approaching funders, your project or organisation needs to be climate finance-ready. We assess your project's climate credentials, identify the most suitable financing instruments and funders, and prepare a climate finance roadmap, reducing the time and cost of accessing capital."
            },
            {
              title: "Green Bond Structuring & Issuance",
              body: "Nigeria's green bond market is growing. We advise issuers, including corporates, financial institutions, and state governments, on structuring, third-party verification, and marketing of green bonds aligned with the ICMA Green Bond Principles and SEC Nigeria's Green Bond Rules."
            },
            {
              title: "Blended Finance Advisory",
              body: "Many sustainable projects in Nigeria require blended finance structures, combining concessional public finance with commercial private capital. We design and advise on blended finance transactions, working with DFIs, impact investors, and commercial lenders to structure deals that balance risk and return appropriately."
            },
            {
              title: "Climate Fund Applications",
              body: "Accessing funds like the GCF, GEF, and Adaptation Fund requires technically rigorous project design and compelling funding proposals. Our team has deep experience preparing and reviewing climate fund applications, and we help Nigerian entities build the technical and fiduciary capacity required to access these facilities directly."
            },
            {
              title: "Sustainability-Linked Finance",
              body: "Sustainability-linked loans and bonds tie financing costs to ESG performance targets. We help Nigerian borrowers structure sustainability-linked financing, identify appropriate Key Performance Indicators (KPIs), and negotiate terms with lenders, accessing better pricing while creating accountability for sustainability outcomes."
            },
            {
              title: "Carbon Markets & Carbon Finance",
              body: "Nigeria's voluntary carbon market is emerging, with opportunities in cookstoves, reforestation, renewable energy, and waste management. We advise project developers on carbon credit origination, Verra VCS and Gold Standard certification, and carbon credit sales, helping Nigerian projects generate additional revenue from their climate impact."
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

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Key Climate Finance Sources for Nigerian Projects</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our advisory team helps Nigerian clients access climate finance from a diverse range of sources:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Multilateral climate funds: Green Climate Fund (GCF), Global Environment Facility (GEF), Climate Investment Funds (CIFs), and Adaptation Fund",
              "African Development Bank (AfDB) climate finance facilities, including the African Climate Change Fund and Sustainable Energy Fund for Africa (SEFA)",
              "Development finance institutions: British International Investment (BII), Proparco, FMO, DEG, and the US Development Finance Corporation",
              "Nigeria's Sovereign Green Bond Programme and sub-sovereign green bonds from Lagos and other state governments",
              "Corporate green bonds and sustainability-linked loans from Nigerian and international commercial banks",
              "Impact investors and ESG-oriented private equity funds focused on African sustainable development"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Sectors We Support in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants provides climate finance advisory across Nigeria's key sectors of climate investment:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Renewable energy, solar, wind, and mini-grid projects across Nigeria",
              "Energy efficiency, industrial, commercial, and residential efficiency programmes",
              "Sustainable agriculture and food systems, climate-smart agriculture and land restoration",
              "Climate-resilient infrastructure, roads, bridges, water systems, and urban drainage",
              "Sustainable forestry and land use, REDD+ and ecosystem restoration projects",
              "Clean transportation, electric vehicles, public transit, and low-carbon logistics"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#f0fdf8] border border-emerald-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#0a2e28] mb-3">Ready to Access Climate Finance in Nigeria?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contact our team to discuss your project's climate finance needs and find out how EarnMore Consultants can help you secure the funding to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/green-bonds-advisory-nigeria" className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                Green Bonds Advisory
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
