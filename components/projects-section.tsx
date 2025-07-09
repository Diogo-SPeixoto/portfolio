import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeaderSection } from "./header-section"
import { projectsResume } from "@/data"
import FadeInWhenVisible from "./fadeIn-when-visible"

export function ProjectsSection() {
  return (
    <FadeInWhenVisible id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HeaderSection 
            title="Projects Worked"
            subtitle="Explore the projects I’ve worked on" 
          />
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projectsResume.map((project, index) => (
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
    </FadeInWhenVisible>
  )
}
