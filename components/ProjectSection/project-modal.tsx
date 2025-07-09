import Image from "next/image"
import { DialogContent, DialogTitle } from "../ui/dialog"
import Image1 from "@/assets/loovi-1.png"
import Image2 from "@/assets/loovi-2.png"
import Image3 from "@/assets/loovi-3.png"
import Image4 from "@/assets/loovi-4.png"
import Image5 from "@/assets/loovi-5.png"
import { Badge } from "../ui/badge"

export const ProjectModal = ()=>{
    return(
        <DialogContent className="bg-[#252525] text-white border-none pt-10 pb-4 px-5 h-[90vh] w-[96%]">
            <div className="
                px-5
                flex flex-col
                gap-20
                flex-1
                overflow-y-auto   
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
            ">
                <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                        <div className="flex flex-col gap-6">
                            <DialogTitle className="text-4xl font-bold">Loovi</DialogTitle>
                            <div className="flex flex-col gap-4">
                                <p className="text-base font-semibold text-[#8d8d8d]">Plataformas</p>
                                <ul className="text-base flex gap-3">
                                    <li>IOS</li>
                                    <li>Android</li>
                                    <li>Web</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-base font-semibold text-[#8d8d8d]">Serviços prestado</p>
                                <ul className="text-xs sm:text-sm list-disc pl-6 flex flex-col gap-1">
                                    <li>Criação e implementação de novas funcionalidades</li>
                                    <li>Resolução e identificação de bugs</li>
                                    <li>Gerenciamento de repositórios</li>
                                    <li>Validação e aplicação de regras de negócio</li>
                                    <li>Desenvolvimento de layouts responsivos</li>
                                    <li>riação de interfaces com abordagem mobile-first</li>
                                    <li>Build de projeto</li>
                                    <li>Consultoria de melhorias</li>
                                    <li>Ajustes em código legado</li>
                                </ul>
                            </div>
                        </div>
                        <Image className="max-w-52 lg:max-w-md" alt="" src={Image1} />
                </div>

                <div className="flex justify-between items-center gap-4 flex-col-reverse sm:flex-row">
                        <Image className="max-w-52 lg:max-w-md" alt="" src={Image2} />

                        <div className="flex flex-col gap-4 max-w-md text-xs sm:text-sm">
                            <p className="text-base font-semibold text-[#8d8d8d]">Sobre o projeto</p>
                            <p className="mb-2">
                                A Loovi buscava uma solução tecnologicamente avançada, com um design moderno e 
                                funcional. Seu desafio além de um novo aplicativo, era ter um site e plataforma 
                                interna para gestão de clientes.
                            </p>
                            <p>
                                Desenvolvemos um aplicativo totalmente personalizado para atender precisamente 
                                às expectativas e necessidades do cliente. Além disso, criamos websites para 
                                os usuários e um sistema interno eficiente para gestão, garantindo uma 
                                solução completa e integrada.
                            </p>

                        </div>
                </div>

                <div className="flex items-center justify-around flex-wrap md:flex-nowrap gap-6">
                    <Image className="max-w-48 lg:max-w-72" alt="" src={Image3} />
                    <Image className="max-w-48 lg:max-w-72" alt="" src={Image4} />
                    <Image className="max-w-48 lg:max-w-72" alt="" src={Image5} />
                </div>
            </div>

        </DialogContent>
    )
}