import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeaderSection } from "./header-section"
import UxdocLogoImage from "../assets/uxdoc-logo.svg"
import UxdocSignLogoImage from "../assets/uxdoc-sign-logo.svg"
import ItatiaiaLogoImage from "../assets/itatiaia-logo.png"
import SevnLogoImage from "../assets/sevn-logo.svg"
import LooviLogo from "../assets/loovi-logo.svg"

export function ProjectsSection() {
  const projects = [
    {
      title: "Loovi - Mobile",
      description: "Cross-platform for car insurance management.",
      image: LooviLogo,
      tags: ["React Native", "CLI", "JavaScript", "Android", "iOS"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.looviapp",
      githubUrl: "#",
    },
    {
      title: "Loovi - Área Logada",
      description: "Web application for car insurance management.",
      image: LooviLogo,
      tags: ["React","JavaScript", "Styled-Components", "Payment"],
      liveUrl: "https://arealogada.loovi.com.br/",
      githubUrl: "#",
    },
    {
      title: "Sevn",
      description: "Web application for car insurance management.",
      image: SevnLogoImage,
      tags: ["Svelte","Typescript", "Tailwind", "Bun", "Elysia"],
      liveUrl: "",
      githubUrl: "#",
    },
    {
      title: "Rádio Itadiaia",
      description: "Web application for news management and radio distribution.",
      image: ItatiaiaLogoImage,
      tags: ["React","JavaScript", "Styled-Components", "Payment"],
      liveUrl: "https://arealogada.loovi.com.br/",
      githubUrl: "#",
    },
    {
      title: "Ux Doc",
      description: "Web application for visual creation of legal documents.",
      image: UxdocLogoImage,
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://app.uxdoc.com.br/",
      githubUrl: "#",
    },
    {
      title: "Ux Doc Sign",
      description: "Web application for online subscription management.",
      image: UxdocSignLogoImage,
      tags: ["Vue.js", "Express", "OpenWeather API", "D3.js"],
      liveUrl: "",
      githubUrl: "",
    },

  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HeaderSection 
            title="Projects Worked"
            subtitle="Explore the projects I’ve worked on" 
          />
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2 sm:text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-[#757575] text-xs sm:text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="ghost" size="sm">
                  <Link className="underline" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    Details
                  </Link>
                </Button>
                {project.liveUrl && <Button asChild size="sm">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
