import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Layout, Server, Settings } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "HTML/CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "Next.js", proficiency: 75 },
        { name: "TypeScript", proficiency: 70 },
        { name: "Tailwind CSS", proficiency: 85 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", proficiency: 80 },
        { name: "Express", proficiency: 75 },
        { name: "Python", proficiency: 70 },
        { name: "Django", proficiency: 65 },
        { name: "GraphQL", proficiency: 60 },
        { name: "REST API", proficiency: 85 },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 75 },
        { name: "MySQL", proficiency: 70 },
        { name: "Firebase", proficiency: 65 },
        { name: "Redis", proficiency: 60 },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "Docker", proficiency: 70 },
        { name: "AWS", proficiency: 65 },
        { name: "CI/CD", proficiency: 75 },
        { name: "Testing", proficiency: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                            <div className="h-full bg-primary" style={{ width: `${skill.proficiency}%` }}></div>
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
    </section>
  )
}
