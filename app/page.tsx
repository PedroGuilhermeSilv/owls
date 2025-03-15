import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BusinessTypesSection from "@/components/business-types-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import LoadingLogo from "@/components/loading-logo"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingLogo />
      <HeroSection />
      <FeaturesSection />
      <BusinessTypesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

