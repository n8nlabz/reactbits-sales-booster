import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Play } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Mais de 10.000 clientes satisfeitos
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transforme Suas
              <span className="gradient-text block">
                Vendas Online
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A plataforma completa que aumenta suas conversões em até 300% 
              com automação inteligente e design que converte.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
            >
              Começar Agora Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-60">
            <div className="text-sm font-medium">Usado por empresas como:</div>
            <div className="flex items-center gap-8">
              <div className="h-8 w-20 bg-muted rounded opacity-50"></div>
              <div className="h-8 w-24 bg-muted rounded opacity-50"></div>
              <div className="h-8 w-16 bg-muted rounded opacity-50"></div>
              <div className="h-8 w-28 bg-muted rounded opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
          <img 
            src={heroImage} 
            alt="Dashboard da plataforma" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl card-shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection