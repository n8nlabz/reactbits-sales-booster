import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/PricingSection"
import FooterSection from "@/components/FooterSection"
import { ThemeToggle } from "@/components/ThemeToggle"
import MagicBentoSection from "@/components/MagicBentoSection"
import ProfileCardSection from "@/components/ProfileCardSection"
import DarkVeil from "@/components/DarkVeil"
import SplitText from "@/components/SplitText"

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <SplitText
            text="Bem vindo a sua nova Central de Aprendizado"
            className="text-3xl md:text-4xl font-bold tracking-tight text-center"
            delay={490}
            duration={2}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="center"
            tag="h1"
            onLetterAnimationComplete={() => {
              console.log('All letters have animated!')
            }}
          />
        </div>
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