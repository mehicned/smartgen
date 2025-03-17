import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProof } from "@/components/landing/social-proof";
import { FeatureSection } from "@/components/landing/feature-section";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { TrustSignals } from "@/components/landing/trust-signals";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Social Proof Section */}
        <SocialProof />
        
        {/* Feature Section */}
        <FeatureSection />
        
        {/* Problem & Solution Section */}
        <ProblemSolution />
        
        {/* Testimonial Section */}
        <TestimonialSection />
        
        {/* Trust Signals Section */}
        <TrustSignals />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
