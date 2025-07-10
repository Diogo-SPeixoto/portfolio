import UxdocLogoImage from "../assets/logos/uxdoc-logo.svg"
import ItatiaiaLogoImage from "../assets/logos/itatiaia-logo.png"
import SevnLogoImage from "../assets/logos/sevn-logo.svg"
import LooviLogo from "../assets/logos/loovi-logo.svg"
import ImageLoovi1 from "@/assets/images/loovi-1.png"
import ImageLoovi2 from "@/assets/images/loovi-2.png"
import ImageLoovi3 from "@/assets/images/loovi-3.png"
import ImageLoovi4 from "@/assets/images/loovi-4.png"
import ImageLoovi5 from "@/assets/images/loovi-4.png"
import ImageItatiaia1 from "@/assets/images/itatiaia-1.png"
import ImageItatiaia2 from "@/assets/images/itatiaia-2.png"
import ImageItatiaia3 from "@/assets/images/itatiaia-3.png"
import ImageItatiaia4 from "@/assets/images/itatiaia-4.png"
import ImageItatiaia5 from "@/assets/images/itatiaia-5.png"
import ImageUxdoc1 from "@/assets/images/uxdoc-1.webp"
import ImageUxdoc2 from "@/assets/images/uxdoc-2.png"
import ImageUxdoc3 from "@/assets/images/uxdoc-3.png"
import ImageUxdoc4 from "@/assets/images/uxdoc-4.png"
import ImageUxdoc5 from "@/assets/images/uxdoc-5.png"


export const projects = [
  {
    title: "Loovi",
    description: "Cross-platform for car insurance management.",
    images: {
      logo:LooviLogo,
      ilustration:[ImageLoovi1, ImageLoovi2, ImageLoovi3, ImageLoovi4, ImageLoovi5],
    },
    tags: ["React Native", "React", "CLI", "JavaScript", "Android", "iOS", "Styled-Components",],
    liveUrl: "https://play.google.com/store/apps/details?id=com.looviapp",
    platforms: ["Android", "iOS", "Web"],
    services:[
      "Creation and implementation of new features",
      "Bug identification and resolution",
      "Repository management",
      "Validation and application of business rules",
      "Development of responsive layouts",
      "Creation of interfaces with a mobile-first approach",
      "Project build",
      "Improvement consulting",
      "Legacy code adjustments",
    ],
    aboutProject:[`
      Loovi is a web and mobile platform for vehicle insurance, 
      with its main differentiator being the ease of contracting and 
      customer service.`,
      `I am currently one of the lead developers of the 
      mobile application, working end-to-end.`,
      `Working on this project has allowed me to improve my mobile development skills, as well 
      as to explore new structures and architectures.`
    ]
  },
  {
    title: "Sevn",
    description: "Consulting for internal software and app development.",
    images: {
      logo:SevnLogoImage,
      ilustration:[ImageLoovi1, ImageLoovi2, ImageLoovi3, ImageLoovi4, ImageLoovi5]
    },
    tags: ["Svelte","Typescript", "Tailwind", "Bun", "Elysia", "Prisma"],
    liveUrl: "",
    platforms: ["Web"],
    services:[
      "Creation and implementation of new features",
      "Bug identification and resolution",
      "Repository management",
      "Validation and application of business rules",
      "Development of responsive layouts",
      "Creation of interfaces with a mobile-first approach",
      "Project build",
      "Improvement consulting",
    ],
    aboutProject:[`
      Sevn is a software consulting company where I currently work.`,
      `I have had the opportunity to work on both internal and external software, 
      mainly as a Front-end and Mobile developer, but I have also worked as a 
      Full-stack developer, having developed the entire user authentication 
      logic for the SitePerft project.
      `
    ]
  },
  {
    title: "Rádio Itadiaia",
    description: "Web application for news management and radio distribution.",
    images: {
      logo:ItatiaiaLogoImage,
      ilustration:[ImageItatiaia1, ImageItatiaia2, ImageItatiaia3, ImageItatiaia4, ImageItatiaia5]
    },
    tags: ["Vue.js","JavaScript", "Typescript", "Tailwind"],
    liveUrl: "https://www.itatiaia.com.br/",
    platforms: ["Web"],
    services:[
      "Creation and implementation of new features",
      "Bug identification and resolution",
      "Development of responsive layouts",
    ],
    aboutProject:[`
      Radio Itatiaia is a traditional company where I had a brief experience working on a news website.`,
      `I worked as a front-end developer, building layouts and fixing bugs.`
    ]
  },
  {
    title: "Ux Doc",
    description: "Web application for online subscription management.",
    images: {
      logo:UxdocLogoImage,
      ilustration:[ImageUxdoc1, ImageUxdoc2, ImageUxdoc3, ImageUxdoc4, ImageUxdoc5]
    },
    tags: ["React", "Typescript", "Javascript", "Styled-Components"],
    liveUrl: "",
    platforms: ["Web"],
    services:[
      "Creation and implementation of new features",
      "Bug identification and resolution",
      "Validation and application of business rules",
      "Development of responsive layouts",
      "Creation of interfaces with a mobile-first approach",
      "Project build",
      "Improvement consulting",
      "Legacy code adjustments",
      "Code refactoring"
    ],
    aboutProject:[
      `UxDoc is a web application for creating, editing, and managing legal documents, 
      with its main function being the development of document layouts.`,
      `The creation and editing of documents are based on a canvas system, 
      which requires high performance and processing on the user's end, 
      making its complexity a very important factor.`
    ]
  },
]