import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "97",
    description: "Perfeito para começar",
    icon: Zap,
    features: [
      "Até 1.000 visitantes/mês",
      "3 páginas de vendas",
      "Suporte por email",
      "Analytics básicos",
      "Templates profissionais",
      "SSL grátis"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "197",
    description: "Mais popular para empresas",
    icon: Crown,
    features: [
      "Até 10.000 visitantes/mês",
      "Páginas ilimitadas",
      "Suporte prioritário 24/7",
      "Analytics avançados",
      "A/B Testing",
      "Integrações premium",
      "Automação completa",
      "Domínio personalizado"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "497",
    description: "Para grandes volumes",
    icon: Crown,
    features: [
      "Visitantes ilimitados",
      "Tudo do Professional",
      "Suporte dedicado",
      "API personalizada",
      "White-label",
      "Treinamento exclusivo",
      "Gerente de conta",
      "SLA garantido"
    ],
    popular: false
  }
]

const PricingSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
            Planos & Preços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha o Plano
            <span className="gradient-text block">Ideal Para Você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem 30 dias de garantia. 
            Cancele quando quiser, sem multas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 bg-card/80 backdrop-blur-sm card-shadow hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'border-primary ring-2 ring-primary/20 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0 px-6 py-2 shadow-lg">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center p-8 pb-4">
                <div className="space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-muted'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold">
                      R$ {plan.price}
                      <span className="text-xl text-muted-foreground font-normal">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Cobrado anualmente
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="space-y-6">
                  <Button 
                    variant={plan.popular ? "hero" : "secondary"}
                    className="w-full py-6 text-lg font-semibold"
                  >
                    {plan.popular ? 'Começar Agora' : 'Selecionar Plano'}
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Incluso:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <span>30 dias de garantia total</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Experimente sem riscos. Se não ficar 100% satisfeito, 
            devolvemos todo seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection