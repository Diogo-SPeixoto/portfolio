import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layout, Smartphone, Zap } from "lucide-react"
import { HeaderSection } from "./header-section"

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
      title: "Custom Software",
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
      <div className="px-4 md:px-6">
          <HeaderSection title="My Services" subtitle="Professional services I offer to help businesses and individuals achieve their goals" />
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">{service.icon}</div>
                <CardTitle className="mt-4 text-xl sm:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
