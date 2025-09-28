import React from "react"
import ProfileCard from "@/components/ProfileCard"

const ProfileCardSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Conheça o Especialista</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um cartão de perfil interativo com efeito de tilt e brilho dinâmico.
          </p>
        </div>

        <div className="flex justify-center">
          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/path/to/avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </section>
  )
}

export default ProfileCardSection
