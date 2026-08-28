import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import ContactPage from "@/pages/contact";
import BlogPage from "@/pages/blog";
import BlogIfrsPart2 from "@/pages/blog-ifrs-part2";
import BlogIfrsPart1 from "@/pages/blog-ifrs-part1";
import BlogAfricaClimateSummit from "@/pages/blog-africa-climate-summit";
import BlogAmazonSummit from "@/pages/blog-amazon-summit";
import EsgConsultingNigeria from "@/pages/seo-esg-consulting-nigeria";
import SustainabilityConsultingLagos from "@/pages/seo-sustainability-consulting-lagos";
import ClimateFinanceNigeria from "@/pages/seo-climate-finance-nigeria";
import IfrsSustainabilityReportingNigeria from "@/pages/seo-ifrs-sustainability-reporting-nigeria";
import GreenBondsNigeria from "@/pages/seo-green-bonds-nigeria";
import EsgTrainingNigeria from "@/pages/seo-esg-training-nigeria";
import TrainingPage from "@/pages/training";
import TrainingPaymentPage from "@/pages/training-payment";
import EggPage from "@/pages/egg";
import InfrastructurePage from "@/pages/infrastructure";
import ScrollToTop from "@/components/scroll-to-top";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/infrastructure" component={InfrastructurePage} />
      <Route path="/training" component={TrainingPage} />
      <Route path="/training/payment" component={TrainingPaymentPage} />
      <Route path="/egg" component={EggPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/ifrs-s1-s2-part-2" component={BlogIfrsPart2} />
      <Route path="/blog/ifrs-s1-s2-part-1" component={BlogIfrsPart1} />
      <Route path="/blog/africa-climate-summit" component={BlogAfricaClimateSummit} />
      <Route path="/blog/amazon-summit" component={BlogAmazonSummit} />
      {/* SEO Landing Pages */}
      <Route path="/services/esg-consulting-nigeria" component={EsgConsultingNigeria} />
      <Route path="/services/sustainability-consulting-lagos" component={SustainabilityConsultingLagos} />
      <Route path="/services/climate-finance-advisory-nigeria" component={ClimateFinanceNigeria} />
      <Route path="/services/ifrs-sustainability-reporting-nigeria" component={IfrsSustainabilityReportingNigeria} />
      <Route path="/services/green-bonds-advisory-nigeria" component={GreenBondsNigeria} />
      <Route path="/services/esg-training-nigeria" component={EsgTrainingNigeria} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
