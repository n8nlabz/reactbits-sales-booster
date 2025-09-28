import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO",
    company: "TechStart",
    content: "Aumentamos nossas vendas em 250% em apenas 3 meses. A plataforma é incrível e o suporte é excepcional!",
    rating: 5,
    initials: "MS"
  },
  {
    name: "João Santos",
    role: "Diretor de Marketing",
    company: "InnovateCorp",
    content: "Nunca vi uma ferramenta tão completa. A automação economiza horas do nosso time todos os dias.",
    rating: 5,
    initials: "JS"
  },
  {
    name: "Ana Costa",
    role: "Fundadora",
    company: "DigitalPro",
    content: "ROI de 400% no primeiro trimestre. Recomendo para qualquer empresa que quer crescer rapidamente.",
    rating: 5,
    initials: "AC"
  },
  {
    name: "Carlos Mendes",
    role: "E-commerce Manager",
    company: "VendaMais",
    content: "A interface é intuitiva e os resultados aparecem desde o primeiro dia. Investimento que vale cada centavo.",
    rating: 5,
    initials: "CM"
  },
  {
    name: "Lucia Oliveira",
    role: "CMO",
    company: "GrowthLab",
    content: "Triplicamos nossa taxa de conversão. A equipe de suporte nos ajudou em cada passo da implementação.",
    rating: 5,
    initials: "LO"
  },
  {
    name: "Pedro Alves",
    role: "Founder",
    company: "ScaleUp",
    content: "Ferramenta indispensável para qualquer negócio online. Resultados extraordinários em pouco tempo.",
    rating: 5,
    initials: "PA"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Mais de <span className="gradient-text">10.000 Clientes</span>
            <br />Já Transformaram Seus Negócios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre os resultados 
            que conseguiram com nossa plataforma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm card-shadow hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/30" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
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

export default TestimonialsSection