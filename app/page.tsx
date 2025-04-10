import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { Header } from "@/components/header"
import { ExperienceSection } from "@/components/experience-section"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
