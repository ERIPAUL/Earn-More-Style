import React from "react";
import { renderToString } from "react-dom/server";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";

// Page imports
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
import EggPage from "@/pages/egg";
import InfrastructurePage from "@/pages/infrastructure";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/infrastructure" component={InfrastructurePage} />
      <Route path="/training" component={TrainingPage} />
      <Route path="/egg" component={EggPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/ifrs-s1-s2-part-2" component={BlogIfrsPart2} />
      <Route path="/blog/ifrs-s1-s2-part-1" component={BlogIfrsPart1} />
      <Route path="/blog/africa-climate-summit" component={BlogAfricaClimateSummit} />
      <Route path="/blog/amazon-summit" component={BlogAmazonSummit} />
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

export function render(url: string) {
  const { hook } = memoryLocation({ path: url, static: true });
  const helmetContext: { helmet?: HelmetServerState | null } = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter hook={hook}>
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  // React Query creates cache GC timers during prerendering. Dispose this
  // per-render client so the prerender process can exit after all pages render.
  queryClient.clear();

  return { html, helmet: helmetContext.helmet };
}
