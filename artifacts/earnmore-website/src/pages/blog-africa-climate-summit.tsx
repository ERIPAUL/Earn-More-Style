import BlogPostLayout from "@/components/layout/blog-post-layout";

export default function BlogAfricaClimateSummit() {
  return (
    <BlogPostLayout
      title="Africa Climate Summit: Towards Promoting Climate Finance and Green Growth"
      date="Friday, December 1, 2023"
      category="Sustainable Infrastructure Finance"
      categoryColor="bg-blue-100 text-blue-700"
      heroImage="https://d1yei2z3i6k35z.cloudfront.net/5190898/656a6142aa695_drought.jpg"
      sections={[
        {
          body: `Africa gathered in Nairobi from 4th to 6th September 2023. The occasion was the inaugural Africa Climate Summit (ACS) convened by the African Union and hosted by the Government of Kenya. The theme of the Summit was "Driving Green Growth and Climate Finance Solutions for Africa and the World". ACS was conceptualised to promote climate action in Africa by providing a consultative forum that focuses on the nexus between climate change, Africa's development reality, and the need for increased investment in green solutions. It is meant to showcase Africa's potential in addressing climate challenges, emphasise the need for a fairer financial system, and highlight the road to COP28.`,
        },
        {
          heading: "Topics",
          body: "Panelists discussed topics falling under key thematic areas: (i) nature capital, (ii) climate finance, (iii) renewable energy and energy transition, (iv) green minerals and manufacturing, (v) sustainable agriculture, (vi) land use, oceans and water, (vii) sustainable infrastructure and urbanization, and (viii) adaptation and resilience.",
          image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/656a6cc918b62_01000000-0aff-0242-7aac-08dbad8910e0_tv_w1080_h608.jpg",
          imageAlt: "Africa Climate Summit panel discussion",
        },
        {
          heading: "Participation",
          body: "The event was divided into one Ministerial and two Presidential Days. In line with this arrangement, most of the participants were cabinet ministers from African countries, with a few cabinet ministers coming from outside Africa. Apart from this group, the other prominent category represented at the Summit was Heads of State of African countries. Also in attendance were multilateral organizations, not-for-profits, and corporations. Notably, there were no Nigerian cabinet ministers on any of the discussion panels. This could have been because the Nigerian federal cabinet was only recently constituted, and this came after the programming for the Summit had crystallized. Nevertheless, ministers from the Federal Government of Nigeria attended the Summit.",
          image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/656a709b13ce8_AdobeStock_603411678.jpeg",
          imageAlt: "Summit participation",
        },
        {
          heading: "Side Events",
          body: "Side events alongside the ACS included the Africa Climate Innovation Hub Events, the African Union House Side Events, and the Kenya House Side Events.",
        },
        {
          heading: "Declarations",
          body: "The ACS adopted the Kampala Declaration on the third day of the Summit, which also saw a briefing on the Nairobi Declaration. The Kampala Declaration on Migration, Environment and Climate Change (KDMECC) is an international agreement that addresses the nexus between climate change and human mobility. It has been adopted by 48 African countries. The Nairobi Declaration called for increased climate action geared towards achieving the energy transition in Africa.",
        },
        {
          heading: "Commitments",
          body: "Stakeholders were invited to make commitments to climate action. This call triggered numerous responses as different kinds of commitments were made — policy, financial, emissions reduction, and investment. For example, the Bezos Earth Fund announced $22.8 million in grants dedicated to accelerating the restoration of the Greater Rift Valley in Kenya and the Lake Kivu and Rusizi River Basin in the Democratic Republic of Congo, Rwanda, and Burundi. These two landscapes are needed for carbon sequestration, biodiversity, and human subsistence. The Nigerian government announced a partnership with CrossBoundary Access (CB Access) and ENGIE Energy Access to construct USD $60 million worth of mini-grids in Nigeria — the largest mini-grid project finance transaction in Africa — expected to supply power to 150,000 people. The Nigerian government also announced a partnership with GreenMax, which has signed MOUs with six local financial institutions in Nigeria to establish six pilot cash deposit funds supporting new energy access loan portfolios worth over USD $20 million.",
        },
        {
          heading: "Going Forward",
          body: "In the aftermath of the Summit, it is necessary for stakeholders to co-operate towards delivering all commitments. Pledges should be monitored and evaluated to determine whether genuine efforts are being made to achieve them. An overwhelming majority of the commitments made at the Summit were made by governments. This reflects the predominance of governments over the private sector at the Summit. While intergovernmental co-operation is necessary to create the right policy environment for green growth, successful transition will not be possible without private sector investment. Platforms must therefore be created for deeper engagement with the private sector as a follow-up to the progress made at the Summit.",
        },
      ]}
    />
  );
}
