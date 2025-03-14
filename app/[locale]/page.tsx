import ContactSection from "@/components/contact-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import LoadingLogo from "@/components/loading-logo"
import Navbar from "@/components/navbar"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <LoadingLogo />
            <HeroSection />
            <FeaturesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </main>
    )
} 