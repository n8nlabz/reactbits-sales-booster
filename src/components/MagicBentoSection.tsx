import React from "react"
import MagicBento from "@/components/MagicBento"

const MagicBentoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Acelere seus resultados com um layout bento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Organize destaques do produto em cartões rápidos de entender. Personalize
            facilmente com ícones, chamadas para ação e conteúdo dinâmico.
          </p>
        </div>

        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={800}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  )
}

export default MagicBentoSection
