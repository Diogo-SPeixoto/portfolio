import { StaticImageData } from "next/image";

export interface IProject{
    title: string;
    description: string;
    images: {
        logo: any;
        ilustration: StaticImageData[];
    };
    tags: string[];
    liveUrl: string;
    platforms: string[];
    services: string[];
    aboutProject: string[];
}