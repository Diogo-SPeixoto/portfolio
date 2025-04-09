import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my journey and passion for software development
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary">
              <Image src="/placeholder.svg?height=300&width=300" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Who am I?</h3>
              <p className="text-muted-foreground">
                I'm a software developer with over 5 years of experience specializing in building exceptional digital
                experiences. I focus on creating clean, efficient, and user-friendly applications that solve real-world
                problems.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                My passion for programming started when I was in college. Since then, I've worked with various
                technologies and frameworks, constantly learning and improving my skills to stay at the forefront of web
                development.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Card className="w-full sm:w-[calc(50%-0.5rem)]">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.5rem)]">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" className="w-fit gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
