import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { ProjectModal } from "./project-modal"

interface ProjectCardProps {
    image: string;
    title: string;
    tags: string[];
    description: string;
    liveUrl?: string;
}

export const ProjectCard = ({image, title, tags, description, liveUrl}: ProjectCardProps)=>{
    return (
        <Card className="overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
            <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform hover:scale-105"
            />
            </div>
            <CardHeader>
            <CardTitle className="text-xl mb-2 sm:text-2xl">{title}</CardTitle>
            <CardDescription className="text-[#757575] text-xs sm:text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                    {tag}
                </Badge>
                ))}
            </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Dialog>
                <DialogTrigger className="text-sm underline">Details</DialogTrigger>
                <ProjectModal />
            </Dialog>
            {liveUrl && <Button asChild size="sm">
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
                </Link>
            </Button>}
            </CardFooter>
        </Card>
    )
}