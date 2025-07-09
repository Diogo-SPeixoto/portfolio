import Link from "next/link"
import Github from "@/assets/github-icon.svg"
import Linkedin from "@/assets/linkedin-icon.svg"
import Whats from "@/assets/whats-icon.svg"
import Arrow from "@/assets/arrow-icon.svg"
import Mouse from "@/assets/mouse-icon.svg"
import ArrowDow from "@/assets/arrow-dow-icon.svg"
import Image from "next/image"
import FadeInWhenVisible from "./fadeIn-when-visible"

export function HeroSection() {
  

  return (
    <FadeInWhenVisible id="home" className="w-full h-[calc(100dvh-64px)] relative">
      <div className="h-full flex items-center justify-center gap-12 md:gap-32 pl-2">
        <div className="display flex flex-col justify-center gap-6 min-w-5">
          <a className="inline-block" href="https://www.linkedin.com/in/diogo-soares-peixoto/" target="_blank">
            <Image src={Linkedin} alt="" width={20} height={20}  />
          </a>

          <a className="inline-block" href="https://github.com/Diogo-SPeixoto" target="_blank">
            <Image src={Github} alt="" width={20} height={20}  />
          </a>
          
          <a className="inline-block" href="https://web.whatsapp.com/send/?phone=5538999977397" target="_blank">
            <Image src={Whats} alt="" width={20} height={20}  />
          </a>
        </div>

        <div className="max-w-96 h-full flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl sm:text-6xl">
              Hi, I'm Diogo
            </h1>
            <p className="flex items-center gap-4 text-sm sm:text-xl text-[#333333]">
              <span className="flex h-[1px] w-16 bg-[#757575]" />
              Front-end Develop
            </p>
            <p className="text-sm sm:text-base text-[#757575]">
              Front-end developer specialist.
            </p>
          </div>

          <Link href="#contact" className="h-12 w-40 sm:h-14 sm:w-44 bg-[#333333] text-white rounded-2xl mt-12 text-sm sm:text-base flex items-center justify-center">
            To contact
            <Image src={Arrow} alt="" width={24} height={24} className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0  mb-4 animate-bounce w-full flex justify-center pr-2">
        <Link href="#about" className="flex items-center gap-1">
          <Image className="w-6 h-6 sm:w-8 sm:h-8" src={Mouse} alt="" width={32} height={32}  />
          <p className="text-sm sm:text-base">Scroll down</p>
          <Image src={ArrowDow} alt="" width={16} height={16}  />
        </Link>
      </div>
    </FadeInWhenVisible>
  )
}
