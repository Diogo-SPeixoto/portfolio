import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layout, Smartphone, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Creating responsive, fast, and user-friendly websites using modern technologies and best practices.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications that provide native-like experiences on both iOS and Android.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Custom Software Development",
      description: "Developing tailored software solutions to address specific business needs and challenges.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description:
        "Improving the speed and efficiency of existing applications to enhance user experience and reduce costs.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional services I offer to help businesses and individuals achieve their goals
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">{service.icon}</div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
