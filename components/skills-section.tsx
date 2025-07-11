import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Layout, Server, Settings } from "lucide-react"
import { HeaderSection } from "./header-section"
import Check from "@/assets/icons/check-icon.svg"
import Image from "next/image"
import FadeInWhenVisible from "./fadeIn-when-visible"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "React" },
        { name: "React-Native" },
        { name: "Tailwind" },
        { name: "Next.js" },
        { name: "Svelte" },
        { name: "Tailwind" },
        { name: "Typescript" },
        { name: "JavaScript" },
        { name: "Css" },
        { name: "Html" },
        { name: "SEO" },
        { name: "Performance" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js"},
        { name: "Bun"},
        { name: "Elysia"},
        { name: "Express"},
        { name: "REST API"},
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB"},
        { name: "PostgreSQL"},
        { name: "MySQL"},
        { name: "Redis"},
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Git"},
        { name: "Docker"},
        { name: "AWS"},
        { name: "Testing"},
      ],
    },
  ]

  return (
    <FadeInWhenVisible id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HeaderSection title="My Skills" subtitle="Technologies and tools I work with to bring ideas to life" />
        </div>
        <div className="mx-auto max-w-4xl py-12 ">
          <Tabs defaultValue="frontend" className="w-full flex flex-col gap-8 md:gap-0">
            <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="min-w-[70px] sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6 sm:min-h-[170px]">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 sm:grid-cols-4">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Image src={Check} alt="check" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}
