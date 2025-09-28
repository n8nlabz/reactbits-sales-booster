import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, BarChart3, Rocket, Users, Target } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Fluxos automatizados que trabalham 24/7 para converter leads em clientes.",
    badge: "IA Avançada"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção de dados de nível empresarial com certificação SSL e LGPD.",
    badge: "Certificado"
  },
  {
    icon: BarChart3,
    title: "Analytics Avançados",
    description: "Relatórios detalhados para otimizar cada aspecto das suas vendas.",
    badge: "Em Tempo Real"
  },
  {
    icon: Rocket,
    title: "Performance Otimizada",
    description: "Carregamento ultra-rápido que melhora a experiência do usuário.",
    badge: "99.9% Uptime"
  },
  {
    icon: Users,
    title: "Suporte Premium",
    description: "Equipe especializada disponível para ajudar no seu sucesso.",
    badge: "24/7"
  },
  {
    icon: Target,
    title: "Conversão Máxima",
    description: "Templates testados que convertem até 3x mais que a concorrência.",
    badge: "Comprovado"
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
            Recursos Poderosos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tudo que Você Precisa Para
            <span className="gradient-text block">Vender Mais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa com todas as ferramentas necessárias 
            para maximizar suas vendas online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm card-shadow hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection