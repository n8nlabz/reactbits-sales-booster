import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

const FooterSection = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="py-20 px-4 border-b border-border/20">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
            Últimas Vagas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto Para <span className="gradient-text">Transformar</span>
            <br />Seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a mais de 10.000 empresas que já aumentaram suas vendas 
            com nossa plataforma. Comece grátis hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero"
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
            >
              Começar Teste Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/30 text-foreground hover:bg-muted/20 px-8 py-6 text-lg"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text">VendasPro</h3>
                <p className="text-muted-foreground mt-2">
                  A plataforma que transforma visitantes em clientes.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>contato@vendaspro.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Produto</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Empresa</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Suporte</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 px-4 border-t border-border/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 VendasPro. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection