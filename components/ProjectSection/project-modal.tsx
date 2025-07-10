import Image, { StaticImageData } from "next/image"
import { DialogContent, DialogTitle } from "../ui/dialog"

interface ProjectModalProps {
    title: string;
    platforms: string[];
    services: string[];
    aboutProject: string[]
    ilustrations: StaticImageData[];
}

export const ProjectModal = ({ title, platforms, services, ilustrations, aboutProject }:ProjectModalProps)=>{
    return(
        <DialogContent className="bg-[#252525] text-white border-none pt-10 pb-4 px-5 h-[90vh] w-[96%]">
            <div className="
                px-5 flex flex-col gap-20 flex-1 overflow-y-auto   
                [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
            ">
                <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                        <div className="flex flex-col gap-6">
                            <DialogTitle className="text-4xl font-bold">{title}</DialogTitle>
                            <div className="flex flex-col gap-4">
                                <p className="text-base font-semibold text-[#8d8d8d]">Platforms</p>
                                <ul className="text-base flex gap-3">
                                    {
                                        platforms.map((platform, index) => (
                                            <li key={index}>
                                                {platform}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-base font-semibold text-[#8d8d8d]">Provided services</p>
                                <ul className="text-xs sm:text-sm list-disc pl-6 flex flex-col gap-1">
                                    {
                                        services.map((service, index) => (
                                            <li key={index}>
                                                {service}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <Image className="max-w-52 lg:max-w-md" alt="" src={ilustrations[0]} />
                </div>

                <div className="flex justify-between items-center gap-4 flex-col-reverse sm:flex-row">
                        <Image className="max-w-52 lg:max-w-md" alt="" src={ilustrations[1]} />

                        <div className="flex flex-col gap-4 max-w-md text-xs sm:text-sm">
                            <p className="text-base font-semibold text-[#8d8d8d]">About the project</p>
                            {
                                aboutProject.map((paragraph, index) => (
                                    <p key={index} className="mb-2">
                                        {paragraph}
                                    </p>
                                ))
                            }
                        </div>
                </div>

                <div className="flex items-center justify-around flex-wrap md:flex-nowrap gap-6">
                    <Image className="max-w-48 lg:max-w-72" alt="" src={ilustrations[2]} />
                    <Image className="max-w-48 lg:max-w-72" alt="" src={ilustrations[3]} />
                    <Image className="max-w-48 lg:max-w-72" alt="" src={ilustrations[4]} />
                </div>
            </div>

        </DialogContent>
    )
}