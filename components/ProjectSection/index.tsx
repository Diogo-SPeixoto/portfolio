import { HeaderSection } from "../header-section"
import { projects } from "@/data"
import FadeInWhenVisible from "../fadeIn-when-visible"
import { ProjectCard } from "./project-card"

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
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              tags={project.tags}
              liveUrl={project.liveUrl}
              platforms={project.platforms}
              services={project.services}
              aboutProject={project.aboutProject}
            />
          ))}
        </div>
      </div>
    </FadeInWhenVisible>
  )
}
