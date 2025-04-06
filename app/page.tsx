import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { AboutSection } from "@/components/landing/about-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { SolarInfoSection } from "@/components/landing/solar-info-section";
import { FaqSection } from "@/components/landing/faq-section";
import { ContactSection } from "@/components/landing/contact-section";
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
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Solar Info Section */}
        <SolarInfoSection />
        
        {/* Partners Section */}
        <PartnersSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
