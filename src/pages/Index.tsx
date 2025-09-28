import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/PricingSection"
import FooterSection from "@/components/FooterSection"
import { ThemeToggle } from "@/components/ThemeToggle"

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  )
}

export default Index