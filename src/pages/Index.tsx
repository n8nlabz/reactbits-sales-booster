import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/PricingSection"
import FooterSection from "@/components/FooterSection"
import { ThemeToggle } from "@/components/ThemeToggle"
import MagicBentoSection from "@/components/MagicBentoSection"
import ProfileCardSection from "@/components/ProfileCardSection"
import DarkVeil from "@/components/DarkVeil"

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DarkVeil />
      </div>

      <HeroSection />

      <MagicBentoSection />
      <ProfileCardSection />

      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  )
}

export default Index