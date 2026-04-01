import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-secondary py-20 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-primary flex items-center justify-center">
                <div className="w-2 h-2 bg-secondary" />
              </div>
              <span className="font-serif font-bold text-lg tracking-wide uppercase">
                EMG
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Forward-thinking financial services and investment group for those who demand more from their wealth.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Leadership</a></li>
              <li><a href="#careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-foreground">Initiatives</h4>
            <ul className="space-y-4">
              <li><a href="#esg" className="text-sm text-muted-foreground hover:text-primary transition-colors">ESG at EMG</a></li>
              <li><a href="https://earnmoreapp.co" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-foreground transition-colors flex items-center gap-1">EarnMore App <ArrowRight size={12} /></a></li>
              <li><a href="#community" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>100 Financial District</li>
              <li>New York, NY 10005</li>
              <li className="pt-2"><a href="mailto:contact@earnmoregroup.com" className="hover:text-primary transition-colors">contact@earnmoregroup.com</a></li>
              <li><a href="tel:+12125550198" className="hover:text-primary transition-colors">+1 (212) 555-0198</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Earn More Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Legal Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
